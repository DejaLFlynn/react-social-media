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
 
  function ClickModal ({modalIsOpen}){
    var subtitle;
   
    const [modalOpen,setIsOpen] = useState({modalIsOpen})

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = 'hotpink';
    }
   
    function closeModal(){
      setIsOpen(false);
    }
   
      return (
        <div>
          
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      );
  }

export default ClickModal