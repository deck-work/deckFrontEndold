import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { apiUrls } from "../utils/apiUrls";
import { callAPI } from "../utils/apiUtils";
import login from "./login.scss";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate();
  // const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <div className="profile">
        <div className="profile-container">
        <h2>Deck</h2>
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
                  let headersObj={
                    'Content-Type':  'application/json'
                  }
                  const apiResponse = await callAPI(apiUrls.REGISTER, {}, "POST",formdata,{},headersObj);
                  console.log(apiResponse,"apiiiiiiiii");
                  localStorage.setItem("userId", apiResponse.data.userId);
                  
                  
                  navigate('/drag')
                  // console.log(credentialResponse);
                  localStorage.setItem("userName", object.name);
                  localStorage.setItem("userEmail", object.email);
                  localStorage.setItem("userPic", object.picture);
                  // console.log(object);
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
