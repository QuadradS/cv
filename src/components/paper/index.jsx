import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border-radius: 6px;
  background: #fff; 
  padding: 15px 20px;
  box-shadow: inset rgba(0, 0, 0, 0.1) 1px 1px 4px 1px;
  color: #544f5a;
  font-weight: 300;

  & > p {
    margin-bottom: 20px;
  }

  @media(max-width: 1000px) {
      & > p {
          line-height: 22px;
      }
    }
`

const Paper = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Paper;
