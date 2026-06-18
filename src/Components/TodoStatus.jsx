import { BiTask } from "react-icons/bi";
import { MdOutlineCheckCircle } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { RiProgress2Line } from "react-icons/ri";

const TodoStatus = () => {
  return (
    <div className="grid grid-cols-4  items-center bg-white text-start border rounded-xl shadow-[#fdfdfd]">
      <div className="flex flex-col items-start border-r text-start pl-2">
        <p className="text-[#8d8f90] text-xl font-light">Total Tasks </p>
        <div className="flex justify-around items-center ">
          <span className="text-[#5b0cf0] text-3xl">0</span>
          <i className="text-2xl text-blue-600">
            <BiTask />
          </i>
        </div>
      </div>
      <div className="flex flex-col justify-around items-start border-r h-16 pl-2">
        <p className="text-[#8d8f90] text-xl font-light">Completed</p>
        <div className="flex items-center justify-between ">
          <span className="text-[#34d196] text-3xl ">0</span>
          <i className="text-2xl text-green-600">
            <MdOutlineCheckCircle />
          </i>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start border-r h-16 text-startpl-2">
        <p className="text-[#8d8f90] text-xl font-light">Pending</p>
        <div className="flex items-center justify-center gap-56">
          <span className="text-[#fcba29] text-3xl">0</span>
          <i className="text-2xl text-[#fcba29]">
            <BiTime />
          </i>
        </div>
      </div>
      <div className="flex flex-col justify-start text-start items-start rounded-xl pl-2">
        <p className="text-[#8d8f90] text-xl font-light ">Progress</p>
        <div className="flex ju items-center justify-between ">
          <span className="text-[#50b2d8] text-3xl ">0</span>
          <i className="text-[#50b2d8] text-2xl">
            <RiProgress2Line />
          </i>
        </div>
      </div>
    </div>
  );
};

export default TodoStatus;
