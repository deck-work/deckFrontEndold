import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrls } from "../utils/apiUrls";
import { callAPI } from "../utils/apiUtils";
import "react-dropzone-uploader/dist/styles.css";
import React, { useState, useEffect } from "react";

import Dropzone from "react-dropzone-uploader";
export default function UploadDocument() {
  const [inputs, setInputs] = useState([]);
  const [val, setVal] = useState([]);
const data = async()=>{
  let apiResponse = await callAPI(apiUrls.GETFILE, {}, "GET");
  console.log(apiResponse);
  setInputs(apiResponse)
}
useEffect(()=>{
  
},[])
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = async (files) => {
    const formdata=new FormData();
    // data()
    formdata.append('file',files[0].file)
      const apiResponse = await callAPI(apiUrls.CONVERT, {}, "POST",formdata);
      console.log(apiResponse,"apiiiiiiiii");
      if(apiResponse.status === 200){
// let info=apiResponse.data.split(" ");
            toast.success(apiResponse.data.message+" "  , {
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
        
            toast.error(apiResponse.data, {
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
      console.log(apiResponse);

  };
  useEffect(()=>{
    fetchData()
  },[])
  async function fetchData(){
    const apiResponse1 =  await callAPI(apiUrls.GETFILE, {}, "GET");
    console.log(apiResponse1);
    setVal(apiResponse1.data)
  }
 function handlePresentation(i){
    console.log(i)
  }
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
<div className='container'>
<div
          className="imageContainer"
        
        >
          {/* {val.map((image) => (
        <img key={image.id}
        src={image}
        alt={`Im`}
        // className="deck-image"
        style={{ width: '90%', height: '120px', borderRadius: "15px"}}
        />
      ))} */}
      {
        val.map((image,i) => (
          <div 
           key={image.id}>
          <img
          onClick={handlePresentation(i)}
          src={image}
          alt={`Im`}
          /> 
          <p>{i+1}</p>
          </div>
        ))
      }
          {/* <Link to="/presentation" onClick={handleClick}>
            <img
              src= "https://source.unsplash.com/user/c_v_r/1900x800" 
              // src= {../../assets/img/about-us.jpg}
              alt="Deck Presentation 01"
              style={{
                width: "100% ", // Adjust the width of the image as needed
                height: "100px", // Adjust the height of the image as needed
                borderRadius: "5px", // Adjust the border radius as needed
              }}
            />
          </Link> */}
          {/* <h6 style={{ color: "gray" }}>Deck Presentation 01</h6> */}
        </div>

    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
     accept="application/pdf, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.google-apps.presentation"
    />
</div>
    </>
  );
};
