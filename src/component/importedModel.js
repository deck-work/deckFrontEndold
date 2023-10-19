import {React ,useState} from "react";
import './importedModel.scss'
import { Link, useNavigate } from "react-router-dom";

function ImportedModal({ handleCloseModal,data}) {
  // if(!)
  const navigate = useNavigate();
  console.log("datraaa",data)
  const [isImported, setImported] = useState(false);
  function handleClick(){

    navigate(`/presentation?userId=${data.userId}&deckId=${data.deckId}`)
  }
  
  // if (!visible) return null;
  return (
    <div className="imported-modal">
       <div className="imported-icon">
       {
        !isImported ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="66" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="70" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
        )
       }
       </div>
       <div className="deck-heading">
       {!isImported ? (
           <h6>Your deck was imported successfully</h6>
         ) : (
           <h6>We faced some issues while importing your deck</h6>
         )}
       </div>
      <div className="imported-button">
      <button onClick={handleClick}>Open Deck</button>
      {!isImported ? (
           <p className="close-window-paragraph" onClick={handleCloseModal}>
           Close this window
         </p>
        ) : (
          <div className="failed-button">
            <button onClick={handleCloseModal}>Try Again</button>
            <p onClick={handleCloseModal} className="back">Go Back</p>
            </div>
        )
        }
      </div>
    </div>
  );
}

export default ImportedModal;
