import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";

export default function UserNavbarLogOutDesktop() {
  let navigate = useNavigate();

  return (
    <div className="space-x-4">
      <button
        onClick={() => {
          navigate('/auth/register')
        }}
        className="px-4 py-2   bg-white  text-black  hover:py-[0.8rem] rounded-xl"
      >
        <span className="flex items-center space-x-1">
          <UserAddOutlined /> <span className="font-bold ">Đăng ký</span>
        </span>
      </button>
      <button
        onClick={() => {
          navigate('/auth/login')
        }}
        className=" px-2 py-2  bg-blue-200  text-black hover:text-white hover:py-[0.8rem]    transition rounded-xl"
      >
        <span className="flex items-center space-x-1">
        <LoginOutlined /><span className="font-bold ">Đăng nhập</span>
        </span>
      </button>
      
    </div>
  );
}
