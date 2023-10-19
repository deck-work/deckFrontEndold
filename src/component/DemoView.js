import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // If using Axios
import { apiUrls } from "../utils/apiUrls";
import { callAPI } from "../utils/apiUtils";
    
const DemoView = () => {
  const [presentationContent, setPresentationContent] = useState('');

  // useEffect(() => {
  //   // Make a request to your backend API to fetch the converted presentation content
  // //  ppTView()
  // }, []);
const ppTView= async()=>{
    const apiResponse = await callAPI(apiUrls.GETFILE, {}, "GET");
    // axios.get('/api/get-presentation').then((response) => {
    //   setPresentationContent(response.data);
    // });
    console.log(apiResponse);
    if(apiResponse.status==200){
        console.log("happy");
        apiResponse.data.data.Contents.map(item=>{

            setPresentationContent();
        })
    }
}
  return (
    <div>
      {/* Render the presentation content here */}
      <div dangerouslySetInnerHTML={{ __html: presentationContent }}></div>
    </div>
  );
};

export default DemoView;
