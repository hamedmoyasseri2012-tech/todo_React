import { BiTask } from "react-icons/bi";
import { MdOutlineCheckCircle } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { RiProgress2Line } from "react-icons/ri";

const TodoStatus = () => {
  return (
    <>
      <div></div>
      <div className="grid grid-cols-4  items-center bg-white text-start border rounded-xl shadow-xl-[#fdfdfd] border-[#ececec]">
        <div className="flex items-center justify-around border-r border-r-[#ececec] text-start pl-2">
          <div className="flex flex-col justify-around items-center ">
            <p className="text-[#8d8f90] text-xl font-light">Total Tasks </p>
            <span className="text-[#5b0cf0] text-3xl">0</span>
          </div>
          <i className="text-2xl text-blue-600">
            <BiTask />
          </i>
        </div>
        <div className="flex  justify-around items-center border-r border-r-[#ececec] h-16 pl-2">
          <div className="flex flex-col items-center justify-between ">
            <p className="text-[#8d8f90] text-xl font-light">Completed</p>
            <span className="text-[#34d196] text-3xl ">0</span>
          </div>
          <i className="text-2xl text-green-600">
            <MdOutlineCheckCircle />
          </i>
        </div>
        <div className="flex justify-around items-center border-r h-16  border-r-[#ececec] pl-2">
          <div className="flex  flex-col items-center justify-between ">
            <p className="text-[#8d8f90] text-xl font-light">Pending</p>
            <span className="text-[#fcba29] text-3xl">0</span>
          </div>
          <i className="text-2xl text-[#fcba29]">
            <BiTime />
          </i>
        </div>
        <div className="flex  justify-around  items-center rounded-xl pl-2">
          <div className="flex flex-col items-center justify-between ">
            <p className="text-[#8d8f90] text-xl font-light ">Progress</p>
            <span className="text-[#50b2d8] text-3xl ">%0</span>
          </div>
          <i className="text-[#50b2d8] text-2xl">
            <RiProgress2Line />
          </i>
        </div>
      </div>
      <div className="border h-4 rounded-2xl bg-[#e5e6ea] border-[#e5e6ea]"></div>
    </>
  );
};

export default TodoStatus;
