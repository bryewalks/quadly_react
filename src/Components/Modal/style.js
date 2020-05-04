import styled from 'styled-components'

export const ModalButton = styled.button`
  background-color: #282F37;
  border: none;
  color: white;
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin: 22px auto 0;
  padding: 10px;
  width: 200px;
  :hover {
    cursor: pointer
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

export const ModalHeader = styled.div`
  background-color: #282F37;
  border-radius: 12px 12px 0 0;
  color: white;
  font-size: 45px;
  height: 75px;
  line-height: 75px;
  max-width: 600px;
  text-align: center;
`

export const ModalBody = styled.div`
  padding: 25px 0;
  text-align: center;
  background-color: white;

  h2 {
    :first-child {
      margin-top: 0;
    }
  }
`

export const ModalWrapper = styled.div`
  width: 400px;
  position: absolute;
  left: 50%;
  bottom: 25%;
  transform: translate(-50%, -25%);
  z-index: 999;
`