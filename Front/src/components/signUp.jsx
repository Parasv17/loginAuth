import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { NavLink } from 'react-router-dom';

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const addSignup = async () => {
    const data = {
      username: userName,
      password: password,
      email: email,
    };
    let url = "http://127.0.0.1:5200/signup";

    try {
      // alert("addSignup");
      let response = await axios
        .post(url, data, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .catch((err) => {
          alert(err);
        });
      // console.log(response.data);
      if(response.status==200){
      alert(`New user - ${response.data.result.username} registered with ID ${response.data.result.email}\n `)}
      else{
        alert(response.data.message)
        return
      }

      // Clear input fields after a successful request
      setPassword("");
      setUserName("");
      setEmail("");
    } catch (error) {
      // Handle errors here, e.g., display an error message to the user
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-slate-300 flex flex-col items-center justify-center text-gray-900  text-4xl sm:text-[52px] font-medium leading-10 pb-7">
        <div className=" bg-neutral-100 p-10 rounded-xl w-1/3">
          <div className="loginform  ">
            <div className="email flex flex-col mb-5">
              <label
                className=" text-gray-900 text-opacity-80 text-base font-normal leading-7 pb-1"
                for="floatinginput"
              >
                Email
              </label>
              <input
                type="email"
                id="floatingInput"
                className="text-gray-900  text-lg font-normal leading-loose p-3 rounded-lg   focus:border focus:border-neutral-300 focus:outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

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

            <div className="btnBox px-4" >
              <button className=" w-full min-w-[100px] text-white bg-gray-900 rounded-[38px] mt-10 mb-4  text-[16px] font-semibold leading-normal p-3" onClick={addSignup}>
                Sign Up
              </button>
            </div>
            <div className="font-medium text-lg flex justify-center ">
            <p> Already an User? </p>
            
            <NavLink to="/login">
              <a className="font-normal hover:cursor-pointer hover:text-gray-400 ml-2" href="http://">Login</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
