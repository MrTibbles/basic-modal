import React, { ReactNode } from 'react'
import styled from 'styled-components'

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
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-color: #ffffff;
  z-index: 150;
`

const ModalContent: React.FC<{ children: ReactNode | Array<ReactNode>; }> = ({ children }) => (
  <ModalContentContainer>
    <ContentBackdrop />
    <ContentInner>
      {children}
      <button>Close</button>
    </ContentInner>
  </ModalContentContainer>
)

export { ModalContent }