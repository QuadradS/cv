import React from 'react';
import styled from "styled-components";
import Sidebar from "../../sidebar";

const Wrap = styled.div`
  background: ${({theme}) => theme.colors.bgColor};
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({theme}) => theme.colors.bgColor};
  display: flex;
  align-content: flex-start;
  max-width: 1440px;
  margin: auto;

  @media(max-width: 1000px) {
    flex-wrap: wrap;
  }
`

const BaseLayout = ({children, data}) => {
    return (
        <Wrap>
            <Container>
                <Sidebar data={data}/>
                {children}
            </Container>
        </Wrap>
    )
}

export default BaseLayout;
