import React, { useState } from 'react';
import "./rename.scss";

const Rename = ({ initialName, onUpdate, onClose }) => {
  const [editedName, setEditedName] = useState("Deck presentation 01");

  const handleUpdate = () => {
    onUpdate(editedName);
  };

  return (
    <div className="sub-modal">
        <div className='rename'>
<p>Rename Deck</p>
<span onClick={onClose}>x</span>
        </div>
        <div className='update'>
        <p>Deck Name</p>
        <div className='update-input'>
        <input
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
        </div>
        </div>
    </div>
  );
};

export default Rename;