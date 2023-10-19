import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
function Login() {
    // const { user, isAuthenticated, isLoading } = useAuth0();
    return (
      <>
      <div className='profile'>
      
        </div>   
      <div className="App">
      <GoogleOAuthProvider clientId="481120357738-lp2gr17q51fl48jn48589gianufne6j0.apps.googleusercontent.com">
        <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
      let object = jwt_decode(credentialResponse.credential);
      localStorage.setItem("userName", object.name);
      localStorage.setItem("userEmail", object.email);
      localStorage.setItem("userPic", object.picture);
      console.log(object);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
          </GoogleOAuthProvider>
      </div>
      
      </>
    );
  }
  
  export default Login;