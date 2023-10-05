import React from 'react'
import { useState } from "react";
import axios, { Axios } from "axios";
import { NavLink } from "react-router-dom";

export default function homepage() {
    const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("user");
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center text-gray-900  text-2xl sm:text-[52px] font-medium leading-10 pb-7 bg-zinc-200">
        <div><p>Welcome to the Clan! {username}</p></div>



    </div>
  )
}
