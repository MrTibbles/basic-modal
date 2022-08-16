import React, { Fragment, useCallback, useState, RefObject } from 'react'
import { useRef } from 'react';

import { RootModalContainer, Modal, Button } from './components';
import "./styles.css";


interface AppProps {
  forceModal?: null | number;
}

// forceModal prop used for testing purposes
export default function App({ forceModal = null }: AppProps) {
  const rootModalRef = useRef<HTMLDivElement>(null)
  // with more time this would be hoisted into a context provider to avoid prop drilling
  const [activeModal, setActiveModal] = useState<null | number>(forceModal)
  const dialog1FocusElement = useRef<HTMLParagraphElement>(null)
  const dialog2FocusElement = useRef<HTMLParagraphElement>(null)

  const displayModal = useCallback((modalNumber: number, dialogFocusElement: RefObject<HTMLParagraphElement>) => {
    setActiveModal(modalNumber)

    // change overflow behaviour to disallow user to scroll the page when the modal is displayed
    document.body.classList.add('modal-active');
    
    // focus on the desired element
    dialogFocusElement.current?.focus()
  }, [])

  const closeModal = useCallback(() => setActiveModal(null), [])
  
  return (
    <Fragment>
      <main>
        <h1>NewDay</h1>
        <Button background="green" onClick={() => displayModal(1, dialog1FocusElement)}>
          Let’s see a modal
        </Button>
        <Button background="green" onClick={() => displayModal(2, dialog2FocusElement)}>
          Let’s see a different modal
        </Button>
        
        {activeModal === 1
          ? <Modal
            rootModal={rootModalRef}
            closeModal={closeModal}
            dialogNumber={1}
          >
            <p ref={dialog1FocusElement}>I am in the modal</p>
          </Modal>
          : null
        }

        {activeModal === 2
          ? <Modal
            rootModal={rootModalRef}
            closeModal={closeModal}
            dialogNumber={2}
          >
            <p ref={dialog2FocusElement}>I am in a different modal</p>
          </Modal>
          : null
        }
      </main>
      {/* A single parent DOM element for the modal content to be displayed within */}
      <RootModalContainer ref={rootModalRef} isActive={activeModal !== null} />
    </Fragment>
  );
}
