import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border-radius: 6px;
  background: #fff; 
  padding: 15px 20px;
  box-shadow: 1px 1px 7px 4px #0000001a;
  color: #544f5a;
  font-weight: 300;

  & > p {
    margin-bottom: 20px;
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
