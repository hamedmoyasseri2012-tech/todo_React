import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import TodoStatus from "./Components/TodoStatus";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-white pt-8 pl-4 pr-4 ">
      <TodoStatus todo={Todos} />
      <Todos />
      <Footer />
    </div>
  );
};

export default App;
