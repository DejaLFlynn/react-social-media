import React, {useState} from 'react';
import Modal from 'react-modal';
import "../CSS/Modal.css"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };
 
  function ClickModal ({children, modalIsOpen, modalClose}){


    const afterOpenModal = () => {
      // references are now sync'd and can be accessed.
      console.log(children)
    }
   
   
      return (
        <div className='modalContainer'>
          
          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={modalClose}
            contentLabel="Modal"
            className='modal'
            overlayClassName='overlay'
          >
   
            {children}
            {/* <button onClick={modalClose}>close</button> */}
            
          </Modal>
        </div>
      );
  }

export default ClickModal