import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
// import { BiSort } from "react-icons/bi";
// import { MdHelpOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = (newItem) => {
    setTodo((prev) => [...prev, { ...newItem, status: "pending" }]);
  };
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDeleteAll = () => {
    setTodo([]);
  };

  const handleDone = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "pending" ? "completed" : "pending",
            }
          : item,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ id: crypto.randomUUID(), title, data });
        }}
        className="flex justify-between items-center gap-4 w-full"
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="border border-[#f282bb] w-65.75 h-12 outline-[#ff96f0] outline-offset-2 active:border-3 items-center justify-start pl-4 text-[#adafb5] bg-white rounded-xl"
          type="text"
          placeholder="Add a Todo..."
        />

        <input
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
          className=" font-bold flex  transition-all -translate-y-0.5 items-center border pr-4 border-[#f282bb] w-65.75 h-12 outline-[#ff96f0] outline-offset-2 active:border-3   pl-4 text-[#5e6168] bg-white rounded-xl"
          type="date"
          placeholder="mm/dd/yy"
        />

        <button
          type="submit"
          className="border text-3xl items-center text-center justify-center w-14.5 h-12.25 text-white bg-[#f000b9]"
        >
          +
        </button>
      </form>
      <form className="flex gap-3 w-full">
        <div className="flex border gap-2 w-full items-center justify-start p-2 rounded-xl border-[#d9d9d9]">
          <i>
            <CiSearch />
          </i>
          <input type="text" placeholder="Search tasks... (Ctrl+F)" />
        </div>
        <button className="border w-24.5 h-12 flex gap-2 pl-2 pr-2 items-center rounded-xl  hover:bg-[#383d41] hover:text-white border-[#414244]">
          <i className="hover:text-white">
            <IoFilter />
          </i>
          <p className="text-[#2d3641] text-xs font-bold hover:text-white ">
            FILTER
          </p>
        </button>
      </form>

      <div className="flex justify-end">
        <button
          onClick={handleDeleteAll}
          className="bg-[#f97172] flex gap-2 items-center pl-2 rounded-xl w-30 h-12"
        >
          <i className="text-black">
            <RiDeleteBin5Line />
          </i>
          <p className="text-[#6e150f] text-xs font-bold">DELETE ALL</p>
        </button>
      </div>

      <table className="flex flex-col w-full justify-around items-center">
        <thead>
          <tr className="flex justify-around tracking-widest px-6 py-6 uppercase items-center text-[#2b3136]">
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="flex flex-col justify-center w-full items-center gap-4">
          {todo.map((item) => (
            <tr key={item.id} className="grid grid-cols-4">
              <td className="flex justify-start items-center w-97.5 h-14">
                {item.title}
              </td>
              <td className="w-48.75 h-14 items-center flex">{item.data}</td>
              <td className="border rounded-xl p-4 w-15.5 items-center flex text-xs text-center justify-center border-amber-400 h-5 bg-amber-400 ">
                <p>{item.status}</p>
              </td>
              <td className="gap-3 flex items-center ">
                <button className="w-10 h-6 border flex justify-center text-center items-center rounded-xl text-black bg-[#ffbc1d]">
                  <i>
                    <CiEdit />
                  </i>
                </button>
                <button
                  onClick={() => handleDone(item.id)}
                  className="w-10 h-6 border flex justify-center text-center items-center rounded-xl text-black bg-[#3ad097]"
                >
                  <i>
                    <MdOutlineDone />
                  </i>
                </button>
                <button
                  onClick={() => deleteTodo(item.id)}
                  className="w-10 h-6 border flex justify-center text-center items-center rounded-xl text-black bg-[#f77072]"
                >
                  <i>
                    <RiDeleteBin6Line />
                  </i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
