import React from 'react';
import styled from "styled-components";
import Paper from "../paper";

const Title = styled.h3`
  margin: 0;
  font-weight: 400;
  font-family: ${({theme}) => theme.fonts.primary};
  margin-bottom: 10px;
  font-size: 23px;
  border-bottom: 1px solid rgb(83 79 90 / 10%);
  padding-bottom: 10px;
`;

const Wrap = styled.div`
  margin-bottom: 20px;
  position: relative;
`

export const SectionTitle = styled.h2`
    border-radius: 0 6px;
    margin: 5px 0;
    font-weight: 300;
    background: linear-gradient(140deg,rgba(176,133,253,1) 4%,rgba(144,85,253,1) 96%);
    color: #fff;
    min-width: 170px;
    position: absolute;
    top: -5px;
    right: 0;
    padding: 7px 20px;
    text-transform: uppercase;
    text-align: center;
    box-shadow: -4px 3px 10px 0px #0000001a;
`

const Section = ({blockTitle, title, children}) => {
    return (
        <Wrap>
            {blockTitle && (
                <SectionTitle>
                    {blockTitle}
                </SectionTitle>
            )}
            <Paper>
                <Title>{title}</Title>
                {children}
            </Paper>
        </Wrap>
    )
}

export default Section;
