import React, { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import './loadingModel.scss';

function GeneratingModal({ handleCloseModal }) {
    const [loading, setLoading] = useState(true);
  
    return (
      <div className="loading-modal">
        <div className="progress-container">
          <FadeLoader
            color="black"
            loading={loading}
            size={100}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />
        </div>
        <div className="importing">
        <h6>Generating Summary...</h6>
        </div>
        {/* <button
          className="cancel-button"
          onClick={handleCloseModal}
        >
          Cancel
        </button> */}
      </div>
    );
  }

  export default GeneratingModal;
  