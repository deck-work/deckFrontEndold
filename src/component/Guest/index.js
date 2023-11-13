import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from "react-redux";



const Guest = ({ children }) => {

  const userDetail = localStorage.getItem("userId")
  const navigate = useNavigate();
  useEffect(() => {

    if(userDetail!=null){
       navigate('/drag')
    }else{
        navigate("/")
    }

  }, [])

  return <>{children}</>;
};
export default Guest;
