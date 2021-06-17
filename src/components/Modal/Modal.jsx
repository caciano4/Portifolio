import React from 'react';
import AreaModal from './styledModal.js'

const Modal = ({id= "modal", onClose , children}) => {
    const handleClickOut = (e) => {
        if(e.target.id === "modal"){
            onClose()
            window.location = '/sobre'
        }
    }

    return (
        <AreaModal>
            <div id={id} className="modal" onClick={handleClickOut}>
                <div className="container">
                    <button className="close" onClick={onClose}/>
                    <button className="minimix" onClick={onClose}/>
                    <div className="content">{children}</div>
                </div>
            </div>

        </AreaModal>
    );
}

export default Modal;