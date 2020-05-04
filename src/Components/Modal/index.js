import React from 'react'

import { ModalBody, ModalButton, ModalContainer, ModalHeader, ModalWrapper } from './style'

const Modal = ({children, closeModal, title}) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalHeader>
          { title }
        </ModalHeader>
        <ModalBody>
          { children }
          <ModalButton onClick={ closeModal }>Close</ModalButton>
        </ModalBody>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default Modal