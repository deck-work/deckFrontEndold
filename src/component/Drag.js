import React, { useState, useEffect } from "react";
import LoadingModal from "./loadingModel";
import ImportedModal from "./importedModel";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUrls } from "../utils/apiUrls";
import { callAPI } from "../utils/apiUtils";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import Rename from "./rename";
import Delete from "./delete"
import "./Drag.scss";
const Drag = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isImported, setIsImported] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [SelectedDocUrl, setSelectedDocUrl] = useState("");
  const [showDoc, setShowDoc] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [val, setVal] = useState([]);
  const [file, setFile] = useState([]);
  const [fileId, setFileId] = useState();
  const [userId, setUserId] = useState();
  const [deckId, setDeckId] = useState();
  const [isDotShow, setIsDotShow] = useState(false);
  const [editedDeckName, setEditedDeckName] = useState("");
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const navigate = useNavigate();

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === "done") {
      // File upload is done
      setIsLoading(false); // Stop loading
      setIsImported(false); // Mark as imported
    } else if (status === "uploading") {
      // File upload is in progress
      setIsLoading(true); // Start loading
    }
    console.log(status, meta, file);
  };

  const handleSubmit = async (files) => {
    const formdata = new FormData();
    setIsLoading(true)
    
    let userId=localStorage.getItem("userId")
    formdata.append("file", files[0].file);
    formdata.append("userId", userId);
      let  headers={
        "Content-Type": "multipart/form-data",
      }
    const apiResponse = await callAPI(apiUrls.CONVERT, {}, "POST", formdata,{},headers);
    console.log(apiResponse, "apiiiiiiiii");
    if (apiResponse.status === 200) {
      setIsImported(true)
      setFileId(apiResponse.data.id)
      setIsShow(true)
      
      toast.success(apiResponse.data.message + " ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoading(false); // Reset loading state
    setIsImported(false); // Reset imported state
    setUploadedFile(null);
  };

  
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    // Handle the dropped files, e.g., upload or process them.
    console.log("Dropped files:", files);
    // Display the first dropped file in the upload section
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = async (event) => {
    const files = event.target.files;
    setFile(files);
    console.log("Selected files:", files);
    const formdata = new FormData();
    // data()
    console.log(file, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    formdata.append("file", file[0]?.file);
    const apiResponse = await callAPI(apiUrls.CONVERT, {}, "POST", formdata);
    console.log(apiResponse, "apiiiiiiiii");
    // Display the first selected file in the upload section
    if (files.length > 0) {
      setIsLoading(true); // Start uploading
      // Simulate file upload process (replace setTimeout with actual upload process)
      setTimeout(() => {
        // After successful upload
        setIsLoading(false); // Uploading done
        setIsImported(true); // Mark as imported
      }, 1000); // Replace 2000 with actual upload time
    }
  };

  const handleRemoveFile = () => {
    // Remove the uploaded file
    setUploadedFile(null);
    
  };

  const handleUploadClick = async (event) => {
    // Trigger the file input click event

    document.getElementById("file-input").click();
  };

  const handleFetchDoc = () => {
    // Check if the input URL is not empty
    if (inputUrl) {
      // setIsLoading(true); // Start loading
      // Simulate loading process (replace setTimeout with actual import process)
      setTimeout(() => {
        setSelectedDocUrl(inputUrl);
        setShowDoc(true);
        setIsImported(true); // Mark as imported
        setIsLoading(false); // Loading done
      }, 2000); // Replace 2000 with actual loading time
    }
  };
  useEffect(() => {
    fetchData();
  }, [isShow]);
  
  async function fetchData() {
    const userId=localStorage.getItem("userId")
    setUserId(userId)
    const apiResponse1 = await callAPI(apiUrls.GETFILE, {userId:userId}, "GET");
    console.log(apiResponse1);
    setVal(apiResponse1.data);
  }
  function handleImageClick(event){
    // console.log(event.target.id)
    setDeckId(event.target.id)
    console.log(event.target.id);
    
    navigate(`/presentation?fileId=${event.target.id}`)

        //  {{<Link to={`/presentation/${1}`} className="deck-image"> }}

  }
  const showModal=()=>{
    setIsModalOpen(true)
  }
  const hideModal=()=>{
    setIsModalOpen(false)

  }
  
  const handleDotClick = () => {
    console.log('handleDotClick is invoked');
    setIsDotShow(true)
    // setEditedDeckName(false)
    setEditedDeckName(editedDeckName || "Deck presentation 01");
    setIsDeleteModalOpen(false);
  }
  
  const handleRenameClick = () => {
    // Open the Rename modal
    setIsRenameModalOpen(true);
    // Close the three dots modal
    setIsDotShow(false);
    setIsDeleteModalOpen(false);
  }

  const handleUpdateDeckName = (newName) => {
    // Perform the update operation, e.g., call an API
    console.log("Updating deck name:", newName);

    // Update the deck name in the component state
    setEditedDeckName(newName);

    // Close the rename modal after updating
    setIsDotShow(false);
  };

  const handleDeleteClick = () => {
    // Open Delete modal
    setIsDeleteModalOpen(true);
    // Close other modals
    setIsRenameModalOpen(false);
    setIsDotShow(false);
  }

  const handleCancelDelete = () => {
    // Set the state or perform any action to close the Delete modal
    setIsDeleteModalOpen(false);
  };

  return (
    <>
    <div className="contain">
        {val.length==0 && (
      <div className="welcome-presenter">
      <div className="welcome-i">
        <div className='icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <h5>Welcome to Deck!</h5>
        </div>
        <div className="close-button" >
          X
        </div>
      </div>
      <div className='welcome-video'>
        <p>We're glad to have you here and test it out. To get stated, have a look at the video below:</p>
          <video width="220" height="140" controls>
          <source  type="video/mp4" />
          </video>
      </div>

    </div>
      )}
      <div className="container">
        <div className="drag-container">
          <div>
            <h2>Decks</h2>
          </div>
          <div className="deck-add-new">
            <button onClick={handleOpenModal}>
              <h6>Add New</h6>
            </button>
          </div>
        </div>
        <div className="deck-area">
        {/* <Link to={{
          pathname: `/presentation/${userId}`,
          state: { deckId: deckId} 
        }
        } className="deck-image"> */}
        {console.log(val)}
            {val.map((image, i) => (
              <div key={image.fileId} className="deck-id" 
              >
                <img
                  src={image.images.imageUrl}
                  name="image"
                  alt={`Im`}
                  id={image.fileId}
                  value={image.id}
                  className="deck-images"
              onClick={handleImageClick}

                />
                 <div className="dots">
              <p>{editedDeckName || `Deck presentation ${i+1}`}</p>
              <svg onClick={handleDotClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
            </div>
              </div>
            ))}
          {/* </Link> */}
        </div>
        {isDotShow && (
        <div className="model-click">
          <p onClick={handleRenameClick}>Rename</p>
          <p>Copy link</p>
          <p onClick={handleDeleteClick}>Delete</p>
        </div>
       )} 

{isRenameModalOpen && (
        <Rename
          initialName={"Deck presentation 01" || editedDeckName}
          onUpdate={handleUpdateDeckName}
          onClose={() => setIsRenameModalOpen(false)}
        />
      )}

{isDeleteModalOpen && <Delete onCancel={handleCancelDelete} />} 

        {isModalOpen && (
          <div
            className="deck-model"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
          >
            <div className="model-top">
              <div className="top-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                fill="black"
                class="bi bi-easel"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z" />
              </svg>
              <span>Add New Deck</span>
              </div>
              <p onClick={handleCloseModal}>X</p>
            </div>
            <div className="model-drop">
              <div className="imageContainer"></div>
              
              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="application/pdf, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.google-apps.presentation"
              ></Dropzone>
            </div>

            {/* <div className="model-or">or</div>
            <div className="model-google">Add google slides presentation</div>
            <div className="model-google-import">
              <input
                type="text"
                placeholder="Paste google slides link here"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
              />
              <button
                className="google-import"
                onClick={() => handleFetchDoc()}
              >
                Import
              </button>
            </div>
            <div className="model-sure">Make sure your presentation can be viewed by 'Anyone with link'</div> */}
          </div>
        )}

        {isLoading && <LoadingModal handleCloseModal={handleCloseModal} />} 
        {/* loading model */}
        {/* {console.log("xuz",userId,deckId)} */}

        
        {isImported && <ImportedModal handleCloseModal={handleCloseModal} data={{fileId}} />}
      </div>
      </div>
    </>
  );
};

export default Drag;
