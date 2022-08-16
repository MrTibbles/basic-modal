import React, { ReactNode, useRef } from 'react'
import { RefObject, useEffect } from 'react'
import {createPortal} from 'react-dom'

import { ModalContent } from './ModalContent'

interface ModalProps {
  children: ReactNode | Array<ReactNode>;
  rootModal: RefObject<HTMLDivElement>;
}


const Modal: React.FC<ModalProps> = ({ children, rootModal }) => {
  // This container div will be used for rendering the children into
  // TODO: ADD A11Y EFFORTS HERE
  const container = useRef(document.createElement('div'))

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
    ModalContent({ children }),
    container.current
  )
}

export { Modal }