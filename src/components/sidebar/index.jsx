import React from 'react';
import styled from "styled-components";
import {ReactComponent as TelegramIcon} from "../icons/telegram.svg";
import {ReactComponent as MessageIcon} from "../icons/message.svg";
import {ReactComponent as GithubIcon} from "../icons/github.svg";
import {ReactComponent as PdfIcon} from "../icons/pdf.svg";


const Container = styled.div`
  width: 260px;
`

const Title = styled.p`
  margin: 0;
  opacity: 0.3;
  font-weight: 300;
  font-size: 14px;
  position: relative;
  padding: 10px 27px;
  width: fit-content;
  text-transform: uppercase;

  &:before {
    display: block;
    content: " ";
    position: absolute;
    left: 0;
    top: 18px;
    height: 1px;
    width: 15px;
    background: rgb(83 79 90 / 54%);
  }

  &:after {
    display: block;
    content: " ";
    position: absolute;
    left: 86%;
    top: 18px;
    height: 1px;
    width: 152px;
    background: rgb(83 79 90 / 54%);  
  }
`

const Item = styled.a`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-radius: 0 50px 50px 0;
  margin: 5px 0;
  font-weight: 300;
  min-height: 42px;
  cursor: pointer;
  
  background: ${({selected}) => selected && 'linear-gradient(140deg, rgba(176,133,253,1) 4%, rgba(144,85,253,1) 96%)'};
  color: ${({selected}) => selected ? '#fff' : '#544f5a'};

  & span {
    margin-left: 8px;
    color: inherit;
  }

  &:hover {
    background: ${({selected}) => !selected && '#eeeef5'};
  }
`

const Avatar = styled.img`
  display: block;
  width: 200px;
  margin: 20px;
  border-radius: 6px;
  box-shadow: 0 4px 5px -2px #000
`

const Sidebar = () => {
    return (
        <Container>

            <Avatar src='/me.jpeg'/>

            <Title>contacts</Title>
            <Item selected href='https://t.me/Quadrad_s' target='_blank'>
                <span><TelegramIcon/></span>
                <span>Telegram</span>
            </Item>
            <Item href="quadrad4@gmail.com" target='_blank'>
                <span><MessageIcon/></span>
                <span>Gmail</span>
            </Item>
            <Item href='https://github.com/QuadradS' target='_blank'>
                <span><GithubIcon/></span>
                <span>Github</span>
            </Item>
            <Item href='/cv_pdf.pdf' target='_blank'>
                <span><PdfIcon/></span>
                <span>Download as pdf</span>
            </Item>
        </Container>
    )
}

export default Sidebar;
