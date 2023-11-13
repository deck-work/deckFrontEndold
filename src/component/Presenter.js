import React, { useState } from 'react';
import './presenter.scss';
import "react-dropzone-uploader/dist/styles.css";
// import Dropzone from "react-dropzone-uploader";
import PresenterLoad from './presenterLoad'
import PresenterUpload from './presenterUpload'
import Dropzone from './Dropzone'
import { Link, useNavigate } from 'react-router-dom';
import presentPerson from './presentPerson';


const Presenter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isImported, setIsImported] = useState(false);

  const handleCloseClick = () => {
    setIsVisible(false);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleGenerateVoiceSample = () => {
    setIsLoading(true);
  };

  const navigate = useNavigate();

  return (
    <div className='presenter-container'>
      {isVisible && (
      <div className="welcome-presenter">
      <div className="welcome-i">
        <div className='icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <h5>Welcome to Deck!</h5>
        </div>
        <div className="close-button" onClick={handleCloseClick}>
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
      

      <div className='presenters'>
        <div>
          <h2>Presenters</h2>
        </div>
        <div className="deck-add-new">
          <button onClick={handleOpenModal}>
            <h6>Add New</h6>
          </button>
        </div>

      </div>
      <div className="round-button">
       <Link to="/presentPerson">
       <div className="round-button-icon"><p>K</p></div>
        <div className="round-button-text">Kunel</div>
       </Link>

        <div>
        <div className="round-button-icon"><p>R</p></div>
        <div className="round-button-text">Ritesh</div>
        </div>
    
      </div>

      {isModalOpen && (
        <div
          className="deck-model"
          onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
        >
          <div className="model-top">
            <div className="top-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" fill="black" class="bi bi-people" viewBox="0 0 16 16">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
              <span>Add New Presenter</span>
            </div>
            <p onClick={handleCloseModal}>X</p>
          </div>
          <div className='presenter-name'>
            <span>Presenter's Name</span>
            <p>Deckie</p>
          </div>
          <div className="">
            {/* <div className="imageContainer"></div>

            <Dropzone
            label= "hello mp3"
            accept="audio/*,video/*"
            maxFiles={2}
            inputContent="Upload your 30s/1m voice sample"
            inputLabelWithFiles="mp2"
            >

            </Dropzone> */}
            {/* <p>efn</p> */}
            <Dropzone />
          </div>


          <div className="model-google-import">
            <p>Dont't know what to speak?<u></u></p>
            <button
              className="google-import"
              onClick={handleGenerateVoiceSample}
            >
              Generate voice sample
            </button>
          </div>
        </div>
      )}

      {isLoading && <PresenterLoad />}
      {/* {isLoading ? (
        <presenterLoad handleCloseModal={handleCloseModal} />
      ) : null} */}

      {isImported && <PresenterUpload handleCloseModal={handleCloseModal} />}
    </div>
  )
};

export default Presenter;
