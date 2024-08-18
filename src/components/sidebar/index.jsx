import React from 'react';
import styled from "styled-components";
import {ReactComponent as TelegramIcon} from "../icons/telegram.svg";
import {ReactComponent as MessageIcon} from "../icons/message.svg";
import {ReactComponent as GithubIcon} from "../icons/github.svg";
import {ReactComponent as PdfIcon} from "../icons/pdf.svg";
import path from './me.jpeg'
const Container = styled.div`
  width: 260px;
  @media(max-width: 1000px) {
    // max-width: 500px;
    width: 100%;
    margin: auto;
    padding: 0 15px;
  }
`

const Title = styled.p`
  margin: 0;
  opacity: 0.3;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  padding: 10px 20px;
  width: fit-content;
  text-transform: uppercase;
  background: transparent;
  text-align: center;
  line-height: 25px;
  
  @media(max-width: 1000px) {
        margin: auto;
    }

  //&:before {
  //  display: block;
  //  content: " ";
  //  position: absolute;
  //  left: 0;
  //  top: 18px;
  //  height: 1px;
  //  width: 15px;
  //  background: rgb(83 79 90 / 54%);
  //}
  //
  //&:after {
  //  display: block;
  //  content: " ";
  //  position: absolute;
  //  left: 86%;
  //  top: 18px;
  //  height: 1px;
  //  width: 152px;
  //  background: rgb(83 79 90 / 54%);  
  //}
`

const Item = styled.a`
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    border-radius: 0 6px;
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

    @media(max-width: 1000px) {
        justify-content: center;
    }
`

const Avatar = styled.img`
  display: block;
  width: 200px;
  margin: 20px;
  border-radius: 6px;
  box-shadow: 0 4px 5px -2px #000;
    @media(max-width: 1000px) {
        width: 200px;
        height: 200px;
        margin: 20px auto;
        border-radius: 50%;
        object-fit: cover;
    }
`

const Sidebar = ({data}) => {
    const renderData = data.contacts;
    return (
        <Container>
            <Avatar src={path}/>
            <Title>{renderData.name} - {renderData.role}</Title>
            <Item selected href={renderData.social.telegram.url} target='_blank'>
                <span><TelegramIcon/></span>
                <span>{renderData.social.telegram.label}</span>
            </Item>
            <Item href={`mailto:${renderData.social.gmail.url}`} target='_blank'>
                <span><MessageIcon/></span>
                <span>{renderData.social.gmail.label}</span>
            </Item>
            <Item href={renderData.social.github.url} target='_blank'>
                <span><GithubIcon/></span>
                <span>{renderData.social.github.label}</span>
            </Item>
            <Item href={renderData.social.pdf.url} target='_blank'>
                <span><PdfIcon/></span>
                <span>{renderData.social.pdf.label}</span>
            </Item>
        </Container>
    )
}

export default Sidebar;
