import { FaStar } from "react-icons/fa";

export default function TaskLists({ tasks, onEdit, onDeleteTask, onFav }) {
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <thead>
        <tr>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px] text-start">
            {" "}
            Title{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-full text-start">
            {" "}
            Description{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px] text-start">
            {" "}
            Tags{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px] text-start">
            {" "}
            Priority{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px] text-start">
            {" "}
            Options{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map((task) => (
          <tr
            key={task.id}
            className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
          >
            <td>
              <button>
                <FaStar
                  onClick={() => onFav(task.id)}
                  className={
                    task.is_favourite ? "text-yellow-600" : "text-gray-600"
                  }
                />
              </button>
            </td>
            <td>{task.title}</td>
            <td>
              <div>{task.description}</div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5 flex-wrap">
                {task?.tags?.map((tag) => (
                  <li key={tag}>
                    <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </td>
            <td className="text-center">{task.priority}</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
                <button onClick={() => onEdit(task)} className="text-blue-500">
                  Edit
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
