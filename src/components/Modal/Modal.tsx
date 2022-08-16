import React, { ReactNode, useRef } from 'react'
import { RefObject, useEffect } from 'react'
import {createPortal} from 'react-dom'

import { ModalContent } from './ModalContent'

interface ModalProps {
  children: ReactNode | Array<ReactNode>;
  rootModal: RefObject<HTMLDivElement>;
  closeModal: () => void;
  dialogNumber?: number;
}

// create our containing element and add a11y attributes
const createElement = (dialogNumber = 1) => {
  const element = document.createElement('div')
  element.setAttribute('role', 'dialog')
  element.setAttribute('aria-label', `dialog${dialogNumber}_label`)
  element.setAttribute('aria-describedby', `dialog${dialogNumber}_describedby`)

  return element;
}


const Modal: React.FC<ModalProps> = ({
  children,
  rootModal,
  closeModal,
  dialogNumber
}) => {
  // This container div will be used for rendering the children into
  const container = useRef(createElement(dialogNumber))

  // on component mount we append the child elements into the
  // root modal element in the DOM
  useEffect(() => {
    rootModal.current?.appendChild(container.current)

    // return () => {
    //   rootModal.current?.removeChild(container.current)
    // }
  }, [rootModal, container])
  
  // render the passed child elements into the shared DOM element for displaying the content in the modal
  return createPortal(
    ModalContent({ children, closeModal }),
    container.current
  )
}

export { Modal }