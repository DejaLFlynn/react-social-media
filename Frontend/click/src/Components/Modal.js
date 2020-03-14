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
      subtitle.style.color = 'hotpink';
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
   
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={modalClose}>close</button>
            
          </Modal>
        </div>
      );
  }

export default ClickModal