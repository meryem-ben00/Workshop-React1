import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPool from "./pooldata";
import "./style.css";

export default function LoginView() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = new CognitoUser({
    Username: email,
    Pool: UserPool
  })

  const authDetails = new AuthenticationDetails({
    Username: email,
    Password: password
  })

  const onSubmit = (event) => {
    event.preventDefault();

    /* 
      !SignUp Code:
        UserPool.signUp(email, password, [], null, (err, data) => {
          if(err) return window.alert(err.message);
          window.alert("You signed up successfully :), Verify you email sir.");
        })
    */

    /* 
      !SignIn Code:*/
        user.authenticateUser(authDetails, {
          onSuccess: (data) => navigate("/dashboard"),
          onFailure: (err) => window.alert(err.message),
        })
    
  }
  
  const renderHeader = (
    <>
      <div className="text-center">
        <img src="/assets/images/logo.png" alt="" />
      </div>
      <h2 className="text-3xl font-bold mt-10">
        Sign Into <br /> Your Account
      </h2>
    </>
  );

  const renderEmailInput = (
    <div className="mt-2">
      <label
        htmlFor="email_username"
        className="block text-xs leading-6 text-gray-900"
      >
        Email or Username
      </label>
      <div className="mt-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email_username"
          id="email_username"
          autoComplete="email_username"
          className="
            block w-full rounded-md border-0 py-1.5 bg-gray-300 text-gray-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            p-2 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );

  const renderPasswordInput = (
    <div className="mt-2">
      <label
        htmlFor="password"
        className="block text-xs leading-6 text-gray-900"
      >
        Password
      </label>
      <div className="mt-2">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          id="password"
          autoComplete="password"
          className="block w-full rounded-md border-0 py-1.5 bg-gray-300 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );

  const renderCheckbox = (
    <div className="mt-2">
      <div className="flex gap-x-3">
        <div className="flex h-6 items-center">
          <input
            id="remeber_me"
            name="remeber_me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="text-xs leading-6">
          <label htmlFor="remeber_me" className=" text-gray-900">
            Remember me
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <form 
      className="flex items-center justify-center form-h"
      onSubmit={onSubmit}
    >
      <div className="login-form flex items-center justify-center rounded-md bg-white h-auto ">
        <div className=" py-8 px-4 h-auto ">

          {renderHeader}

          <div className="mt-10">
            {renderEmailInput}

            {renderPasswordInput}

            {renderCheckbox}

            {/* Social media login */}
            <div className="mt-6">
              <div className="text-center ">
                <span className="text-xs text-gray-900 relative login-span">
                  Or Sign In With
                </span>
              </div>

              <div className="flex items-center justify-center gap-6 mt-3">
                <img src="/assets/icons/google.png" alt="" />
                <img src="/assets/icons/facebook.svg" alt="" />
                <img src="/assets/icons/twitter.svg" alt="" />
              </div>
            </div>

            <button
              type="submit"
              className="
                bg-green-700 hover:bg-green-500 mt-3  text-white text-xs 
                py-2 px-4 rounded submit-btn"
            >
              Sign In
            </button>

          </div>
        </div>
      </div>
    </form>
  );
}
