import React from "react"
import styled from "styled-components"

const FaqQuestion = ({ question, answer, index }) => (
  <FAQ>
    <Index>
      <h4>
        <strong>{index}</strong>
      </h4>
    </Index>
    <Content>
      <h2>{question}</h2>
      <p>{answer}</p>
    </Content>
  </FAQ>
)

export default FaqQuestion

const FAQ = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 2rem;

  &:last-of-type {
    padding-bottom: 0;
  }
`

const Index = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 2rem;
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  justify-content: center;
  height: 56px;
  position: relative;
  margin-right: 1.5rem;
  width: 56px;

  h4 {
    color: ${props => props.theme.colors.primary};
    margin: 0;
  }
`

const Content = styled.div`
  flex-basis: auto;

  h2 {
    margin-bottom: 0.5rem;
  }
`
