import React from 'react';
import SkillsSection from "./components/SkillsSection";
import styled from "styled-components";

const Wrap = styled.div`
    margin-top: 40px;
`

const Skills = ({data}) => {
    return (
        <Wrap>
            <SkillsSection data={data.skills.backend} title={'SKILLS'}/>
            <SkillsSection data={data.skills.frontend}/>
        </Wrap>
    )
}

export default Skills;
