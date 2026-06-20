import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { BiSort } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const Todos = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <input
          className="border border-[#f282bb] w-65.75 h-12 outline-[#ff96f0] outline-offset-2 active:border-3 items-center justify-start pl-4 text-[#adafb5] bg-white rounded-xl"
          type="text"
          placeholder="Add a Todo..."
        />

        <input
          className=" font-bold flex  transition-all -translate-y-0.5 items-center border pr-4 border-[#f282bb] w-65.75 h-12 outline-[#ff96f0] outline-offset-2 active:border-3   pl-4 text-[#5e6168] bg-white rounded-xl"
          type="date"
          placeholder="mm/dd/yy"
        />

        <button className="border text-3xl items-center text-center justify-center w-14.5 h-12.25 text-white bg-[#f000b9]">
          +
        </button>
      </div>
      <div className="flex gap-3">
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
      </div>

      <div className="flex justify-end">
        <button className="bg-[#f97172] flex gap-2 items-center pl-2 rounded-xl w-30 h-12">
          <i className="text-black">
            <RiDeleteBin5Line />
          </i>
          <p className="text-[#6e150f] text-xs font-bold">DELETE ALL</p>
        </button>
      </div>
      <div>
        <table className="table-auto">
          <tr className="flex gap-80 items-center text-[#2b3136]">
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Todos;
