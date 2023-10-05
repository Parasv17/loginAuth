// import React from 'react'
import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 const loginUser=async ()=>{
    const data = {
        username: userName,
        password: password,
      };
      let url = "http://127.0.0.1:5200/login";
      try{
        const response= await axios.post(url,data,{
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }).catch((err)=>{console.log(err)})
        
        console.log(response.status)
        // console.log(response)
       

        if(response.status==200){
        navigate(`/homepage?user=${encodeURIComponent(response.data.result.username)}`)
        }
        else{
            alert(response.data.message)}
       

      }
      catch{
        alert(response.data.message)
      }
  
 };
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-slate-300 flex flex-col items-center justify-center text-gray-900  text-4xl sm:text-[52px] font-medium leading-10 pb-7">
        <div className=" bg-neutral-100 p-10 rounded-xl">
          <div className="loginform  ">
            <div className="name flex flex-col mb-5">
              <label
                className=" text-gray-900 text-opacity-80 text-base font-normal leading-7 pb-1"
                for="floatinginput"
              >
                Username
              </label>
              <input
                type="text"
                id="floatingInput"
                className="text-gray-900  text-lg font-normal leading-loose p-3 rounded-lg   focus:border focus:border-neutral-300 focus:outline-none"
                placeholder="Enter Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="password flex flex-col mb-5">
              <label
                className=" text-gray-900 text-opacity-80 text-base font-normal leading-7 pb-1"
                for="floatinginput"
              >
                Password
              </label>
              <input
                type="password"
                id="floatingInput"
                className="text-gray-900  text-lg font-normal leading-loose p-3 rounded-lg   focus:border focus:border-neutral-300 focus:outline-none"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="btnBox px-4">
              <button className=" w-full min-w-[100px] text-white bg-gray-900 rounded-[38px] my-10  text-[16px] font-semibold leading-normal p-3" onClick={loginUser}>
                Log in
              </button>
            </div>
            <div className="font-medium text-lg flex justify-center ">
            <p> New User? </p>
            
            <NavLink to="/">
              <a className="font-normal hover:cursor-pointer hover:text-gray-400 ml-2" >Sign Up</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
