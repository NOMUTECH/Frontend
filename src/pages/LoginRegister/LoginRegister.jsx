import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  return (
    <div className="loginRegister-container flex justify-center items-center min-h-screen ">
      <div
        className={`wrapper ${action} flex items-center relative bg-transparent h-450 w-420 text-white rounded-xl`}
      >
        <div className="form-box login w-full p-10">
          <form>
            <h1 className="text-4xl	text-center font-semibold">Login</h1>
            <div className={inputBox}>
              <input
                className={inputStyle}
                type="text"
                placeholder="Username"
                required
              />
              <FaUser className={iconStyle} />
            </div>
            <div className={inputBox}>
              <input
                className={inputStyle}
                type="password"
                placeholder="Password"
                required
              />
              <FaLock className={iconStyle} />
            </div>
            <div className={rememberForgot}>
              <label>
                <input className={checkboxStyle} type="checkbox" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <button className={buttonStyle} type="submit">
              Login
            </button>
            <div className={registerLink}>
              <p>
                Don't have an account?
                <a
                  className={linkStyle}
                  href="#"
                  onClick={() => setAction("active")}
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="form-box register w-full p-10">
          <form action="">
            <h1 className="text-4xl	text-center font-semibold">Registeration</h1>
            <div className={inputBox}>
              <input
                className={inputStyle}
                type="text"
                placeholder="Username"
                required
              />
              <FaUser className={iconStyle} />
            </div>
            <div className={inputBox}>
              <input
                className={inputStyle}
                type="email"
                placeholder="Email"
                required
              />
              <FaEnvelope className={iconStyle} />
            </div>
            <div className={inputBox}>
              <input
                className={inputStyle}
                type="password"
                placeholder="Password"
                required
              />
              <FaLock className={iconStyle} />
            </div>
            <div className={rememberForgot}>
              <label>
                <input className={checkboxStyle} type="checkbox" />I agree to
                the terms & conditions
              </label>
            </div>
            <button className={buttonStyle} type="submit">
              Register
            </button>
            <div className={registerLink}>
              <p>
                Already have an account?
                <a className={linkStyle} href="#" onClick={() => setAction("")}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// tailwind styles

const inputBox = "relative w-full h-12 my-7";

const inputStyle =
  "w-full h-full bg-transparent  outline-none text-white border-2 border-solid border-rgba-255 rounded-full pt-5 pr-11 pb-5 pl-5 placeholder-white";

const iconStyle = "absolute top-1/2 -translate-y-1/2 right-5";

const rememberForgot = "flex justify-between items-center text-sm mb-4";

const checkboxStyle = "mr-2 accent-white";

const buttonStyle =
  "w-full h-11 bg-white border-none outline-none rounded-full shadow-md text-gray-700 font-bold";

const registerLink = "text-center text-sm mt-5 mb-4";

const linkStyle = "font-semibold mx-1 hover:underline";

export default LoginRegister;
