import { useState } from "react";
import AddTask from "./AddTask";
import NoTaskFound from "./NoTaskFound";
import SearchTask from "./SearchTask";
import TaskHeader from "./TaskHeader";
import TaskLists from "./TaskLists";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);

  const handleEditAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
  };

  const handleEditTask = (editedTask) => {
    setUpdatedTask(editedTask);
    setShowModal(true);
  };

  const handleDeleteTask = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  };
  const handleDeleteAllTasks = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleCloseClick = () => {
    setShowModal(false);
    setUpdatedTask(null);
  };

  const handleFavouriteToggle = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].is_favourite = !newTasks[taskIndex].is_favourite;
    setTasks(newTasks);
  };

  const handleSearch = (searchText) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setTasks([...filteredTasks]);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTask
          onSave={handleEditAddTask}
          updatedTask={updatedTask}
          handleCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        <SearchTask onSearch={handleSearch} />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="overflow-auto">
            <TaskHeader
              onAddTask={() => setShowModal(true)}
              onDeleteAllTasks={handleDeleteAllTasks}
            />
            {tasks.length > 0 ? (
              <TaskLists
                tasks={tasks}
                onEdit={handleEditTask}
                onDeleteTask={handleDeleteTask}
                onFav={handleFavouriteToggle}
              />
            ) : (
              <NoTaskFound />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
