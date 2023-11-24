import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { apiUrls } from "../utils/apiUrls";
import { callAPI } from "../utils/apiUtils";
import login from "./login.scss"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try { 
      const headers={
        "Content-Type": "application/json",
        }
      const response = await callAPI(apiUrls.LOGIN, {}, "POST",formData,{},headers);
      console.log("resposnse",response.status);
      if(response.status==200){
        localStorage.setItem("userId",response.data.userId)
        navigate("/drag")
        toast.success(response.data.message + " ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if(response.status==400) {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }else{
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      // if (response.ok) {
      //   console.log('Form submitted successfully!');
      // } else {
      //   console.error('Form submission failed.');
      // }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
    <ToastContainer />
      <div className="profile">
        <div className="profileContainer">
          <h2>Login</h2>
          <form onSubmit={handleEmailPasswordLogin} className="emailPasswordForm">
            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input type="email"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
                />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input type="password"
               id="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
                />
            </div>
            <button type="submit">Login</button>
          </form>

          <div className="App">
          <GoogleOAuthProvider clientId="481120357738-lp2gr17q51fl48jn48589gianufne6j0.apps.googleusercontent.com">
              <GoogleLogin 
                onSuccess={async (credentialResponse) => {
                  let object = jwt_decode(credentialResponse.credential);
                  let formdata={
                    name:object.name,
                    emailId:object.email,
                    userLogo:object.picture
                  }
                  console.log("ssssssssssssssssssssssskkkkkkkkkk",formdata);
                  const apiResponse = await callAPI(apiUrls.REGISTER, {}, "POST", formdata);
                  console.log(apiResponse,"apiiiiiiiii");
                  localStorage.setItem("userId", apiResponse.data.userId);
                  
                  
                  navigate('/drag')
                  // console.log(credentialResponse);
                  localStorage.setItem("userName", object.name);
                  localStorage.setItem("userEmail", object.email);
                  localStorage.setItem("userPic", object.picture);
                  console.log(object);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;