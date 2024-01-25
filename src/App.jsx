import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskBoard from "./components/task/TaskBoard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <Banner />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}
