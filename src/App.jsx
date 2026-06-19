import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import TodoStatus from "./Components/TodoStatus";

const App = () => {
  return (
    <div className="flex flex-col justify-center item-center gap-3 bg-white pt-8 pl-4 pr-4 text-center">
      <TodoStatus />
      <Todos />
      <Footer />
    </div>
  );
};

export default App;
