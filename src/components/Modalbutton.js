import React, {useState} from 'react'
import { Button } from './Button'
import { Modal } from './Modal'
import styled from 'styled-components'



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  
`



function Modalbutton() {
    const [showModal, setShowModal] = useState(false);
  const openModal = () =>{
    setShowModal(prev =>!prev);
  };

    return (
        <div>
    <Container>
        <button onClick={openModal}>Im a modal</button>
        <Modal showModal={showModal} setShowModal = {setShowModal} />
      </Container>
        </div>
    )
}

export default Modalbutton
