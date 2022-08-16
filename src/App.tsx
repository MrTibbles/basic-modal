import React, { Fragment, useCallback, useState } from 'react'
import { useRef } from 'react';

import { RootModalContainer, Modal } from './components';
import "./styles.css";

export default function App() {
  const rootModalRef = useRef<HTMLDivElement>(null)
  const [modalIsActive, setModalIsActive] = useState(false)

  const displayModal = useCallback(() => {
    setModalIsActive(true)

    // change overflow behaviour to disallow user to scroll the page when the modal is displayed
    document.body.classList.add('modal-active');
  }, [])
  
  return (
    <Fragment>
      <main>
        <h1>NewDay</h1>
        <h2 onClick={displayModal}>Let’s see a modal</h2>
        <Modal rootModal={rootModalRef}>
          <p>yaaas</p>
        </Modal>
      </main>
      {/* A single parent DOM element for the modal content to be displayed within */}
      <RootModalContainer ref={rootModalRef} isActive={modalIsActive} />
    </Fragment>
  );
}
