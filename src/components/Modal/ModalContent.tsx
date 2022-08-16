import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Button } from '../Button'

const ModalContentContainer = styled.div`
/* Style it to cover the entire UI */
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 150;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

/*
  Add an overlay beneath the modal to obscure the page content,
  bringing focus to the modal content
*/
const ContentBackdrop = styled.span`
  position: fixed;
  content: '';
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-color: #ffffff;
  z-index: 150;
  /* To make the content easier to read when displayed on small screens, the dialog fills 100% of the screen */
  width: 100vw;
  height: 100vh;

  /* for larger screens we allow the content underneath to be viewable */
  @media screen and (min-width: 500px) {
    padding: 0;
    width: 75vw;
    height: 75vh;
  }
`

interface ModalContentPRops {
  children: ReactNode | Array<ReactNode>;
  closeModal: () => void
}

const ModalContent: React.FC<ModalContentPRops> = ({ children, closeModal }) => (
  <ModalContentContainer data-testid="modal-content">
    <ContentBackdrop />
    <ContentInner>
      {children}
      <Button background="red" onClick={closeModal}>Close</Button>
    </ContentInner>
  </ModalContentContainer>
)

export { ModalContent }