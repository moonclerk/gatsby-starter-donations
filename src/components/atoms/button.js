import styled from "styled-components"

const Button = styled.a`
  background-color: ${props => {
    if (props.alt) return props.theme.colors.secondary
    else return props.theme.colors.primary
  }};
  border-radius: ${props => props.theme.button.radius};
  font-weight: 500;
  padding: 0.75rem 2rem;
  color: ${props => {
    if (props.alt) return props.theme.colors.primary
    else return props.theme.colors.white
  }};
  text-decoration: none;
  transition: ${props => props.theme.animation.transition};

  &:hover {
    filter: brightness(105%);
    box-shadow: ${props => props.theme.button.shadow};
  }
`

export default Button
