import axios from "axios";
import React, { useState } from "react";

function SignIn({ showSignIn, setShowSignIn }) {
  const [activePage, setActivePage] = useState("signIn");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const addUserData = ()=>{
    //Storing data into object
    const user = {
      name: name,
      mobile: mobile,
      password: password,
      email: email
    }
    // Sending post request to the user end point
    axios.post('http://localhost:5000/users', user).then(
      (res)=>{
        alert('Data Successfully Posted!');
        setShowSignIn(false)
      },
      (err)=>{alert(err.message)}
    )
  }
  return (
    <div
      style={{ right: showSignIn ? "0%" : "-30%" }}
      className="h-[100vh] w-[25%] duration-1000 bg-white fixed top-0"
    >
      <label
        onClick={() => setShowSignIn(false)}
        className="text-black cursor-pointer flex justify-end text-[25px] px-3"
      >
        X
      </label>
      <div className="h-[0.5px] w-[100%] bg-[gray] mt-2"></div>
      <div className="text-black font-bold text-[30px] px-8 mt-6">
        <label>Hello Noisemaker!</label>
      </div>

      <div className="flex justify-around mt-5">
        <button
          onClick={() => setActivePage("signIn")}
          className={`px-4 py-2 text-black ${
            activePage === "signIn" ? "" : ""
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setActivePage("signUp")}
          className={`px-4 py-2 text-black ${
            activePage === "signUp" ? "" : ""
          } `}
        >
          Sign Up
        </button>
      </div>
          <div className=" h-[0.5px] w-[100%] bg-[gray]"></div>
      <div className="px-8 mt-6">
        {activePage === "signIn" ?
          <div>
             <label className="text-black font-bold text-[20px] ">Sign In</label>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="block w-full border mt-2 p-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="block w-full border mt-2 p-2"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-3 rounded"
              >
                Submit
              </button>
              </div>
          </div>
         : 
          <div>
            <label className="text-black font-bold text-[20px]">Sign Up</label>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="block text-black w-full border mt-2 p-2"
                onChange={(e)=> setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="block text-black w-full border mt-2 p-2"
                onChange={(e)=> setEmail(e.target.value)}
              />
              <input
                placeholder="Number"
                className="block text-black w-full border mt-2 p-2"
                onChange={(e)=> setMobile(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="block text-black w-full border mt-2 p-2"
                onChange={(e)=> setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-3 rounded"
                onClick={()=> addUserData()}
              >
                Submit
              </button>
              </div>
          </div>
        }
      </div>
    </div>
  );
}

export default SignIn;
