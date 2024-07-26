import React from 'react';
import SkillsSection from "./components/SkillsSection";
import styled from "styled-components";

const Wrap = styled.div`
    margin-top: 40px;
`

const Skills = ({data}) => {
  return (
    <Wrap>
      {Object.values(data.skills).map((s, i) => (
        <SkillsSection data={s} title={i === 0 && 'SKILLS'}/>
      ))}
    </Wrap>
  )
}

export default Skills;
