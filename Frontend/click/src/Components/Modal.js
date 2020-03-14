import React, {useState} from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
 
  function ClickModal ({children, modalIsOpen, modalClose}){
    var subtitle;


    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      console.log(children)
    }
   
   
      return (
        <div>
          
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={modalClose}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
            {children}
            <button onClick={modalClose}>close</button>
            
          </Modal>
        </div>
      );
  }

export default ClickModal