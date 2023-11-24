import React from 'react'
import './delete.scss'

const Delete = ({ onCancel }) => {
    const handleCancel = () => {
        onCancel();
    }

    return (
        <div className='delete-container'>
            <div className='del-deck'>
                <div className='delete'>
                    <p>Delete Deck</p>
                    <span onClick={handleCancel}>x</span>
                </div>
                <div className='del-sure'>
                    <p>Are you sure you wan to delete this deck?</p>
                </div>
            </div>

            <div className='undo'>
                <p>You can't undo this.</p>
            </div>
            <div className='del-cancel'>
                <button onClick={handleCancel}>Cancel</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Delete