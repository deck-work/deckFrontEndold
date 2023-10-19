import React, { useState } from 'react';
function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // You can perform further actions with the selectedFile, such as uploading it to a server.
    if (selectedFile) {
      // Example: You can use the Fetch API or a library like Axios to upload the file.
      // Replace this with your actual upload logic.
      console.log('Uploading file:', selectedFile);
      let type=selectedFile.name.split('.')[1];
      console.log(type);
      if(type == "ppt" || type=="pdf" || type == "pptx"){
          console.log(type)

      }else{
        console.log("error");
      }
     
    }
  };
    return (
      <>
      <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      </div>
      </>
    );
  }
  
  export default Upload;