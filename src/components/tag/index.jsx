import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    &:hover div {
        transform: rotate(-15deg);
    }
`

const Wrap = styled.div`
    background: linear-gradient(140deg,rgba(176,133,253,1) 4%,rgba(144,85,253,1) 96%);
	margin: 0 10px 10px 0;
	width: min-content;
	white-space: nowrap;
	color: #fff;
	padding: 5px 10px 5px 20px;
	position: relative;
	border-radius: 40px;
    transform: rotate(0deg);
    transform-origin: 10px 18px;
	transition: transform 0.2s;
	
	&:after {
        background: #fff;
        content: " ";
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        top: 11px;
        left: 9px;
    }
`

export const List = styled.div`
    display: flex;
    align-content: center;
    flex-wrap: wrap;
`


export const Tag = ({label}) => {
	return (
		<Container>
			<Wrap>
				{label}
			</Wrap>
		</Container>
	)
}
