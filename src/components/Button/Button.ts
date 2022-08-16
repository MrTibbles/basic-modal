import styled from 'styled-components'

const Button = styled.button<{ background: 'green' | 'red'; }>`
  background-color: ${({ background }) => background};
  border: none;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  margin: 0 0 1rem;
`

export { Button } 