import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { axe } from 'jest-axe'

import App from "./App";

/* In here please contribute a test or tests that 
show the modal meets WCAG 2.1 AA Standards, you can
put your tests in different files to this one */
// expect.extend(toHaveNoViolations)

describe('Modal UX', () => {
  it("should not display the modal content by default", () => {
     render(<App />);
  
    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument()
  });

  it('should allow the user to open a modal', () => {
    render(<App />)

    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument()

    const showModalButton = screen.getByText(/Let’s see a modal/)
    userEvent.click(showModalButton)

    expect(screen.getByTestId(/I am in the modal/)).toBeInTheDocument()
  })

  it('should allow the user to close the modal', () => {
    render(<App forceModal={1} />)

    expect(screen.getByTestId('modal-content')).toBeInTheDocument()

    const closeModalButton = screen.getByText(/Close/)
    userEvent.click(closeModalButton)

    expect(screen.queryByText(/I am in the modal/)).not.toBeInTheDocument()
  })

  it('should allow the user to view different modals', () => {
    render(<App />)

    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument()

    const showModal1Button = screen.getByText(/Let’s see a modal/)
    userEvent.click(showModal1Button)
    
    const closeModalButton = screen.getByText(/Close/)

    expect(screen.getByTestId(/I am in the modal/)).toBeInTheDocument()
    expect(screen.queryByText(/I am in a different modal/)).not.toBeInTheDocument()
    
    userEvent.click(closeModalButton)
    
    const showModal2Button = screen.getByText(/Let’s see a different modal/)
    userEvent.click(showModal2Button)

    expect(screen.queryByText(/I am in the modal/)).not.toBeInTheDocument()
    expect(screen.getByTestId(/I am in a different modal/)).toBeInTheDocument()
  })
})

describe.only('A11y', () => {
  it('should have no violations when modal is closed', async () => {
    const { baseElement } = render(<App />);
    const results = await axe(baseElement)
    
    expect(results).toHaveNoViolations()

    const showModal1Button = screen.getByText(/Let’s see a modal/)
    userEvent.click(showModal1Button)
  })

  it('should have no violations when modal is open', async () => {
    const { baseElement } = render(<App />);

    const showModal1Button = screen.getByText(/Let’s see a modal/)
    userEvent.click(showModal1Button)

    const results = await axe(baseElement)
    
    expect(results).toHaveNoViolations()
  })
})