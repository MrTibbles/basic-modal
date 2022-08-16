import styled from 'styled-components'

interface RootModalContainerProps {
  isActive: boolean;
}

// create our shared DOM element that will be rendered at the root of the 
// react component tree
const RootModalContainer = styled.div<RootModalContainerProps>`
  display: ${({ isActive }) => isActive ? 'block' : 'none'};
  position: relative;
`

export { RootModalContainer }