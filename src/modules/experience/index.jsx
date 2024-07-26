import React from 'react';
import Section from "../../components/section";
import {List, Tag} from "../../components/tag";
import styled from "styled-components";

const Position = styled.span`
    font-weight: 600;
`
const Wrap = styled.div`
    margin-top: 40px;
`

const Experience = ({data}) => {
    const experience = data.experience;

    return (
        <Wrap>

            {experience.list.map((d, i) => (
                <Section blockTitle={i === 0 && experience.sectionTitle} title={d.companyName} key={d.date}>

                    <p>
                        <h5>
                            <strong>{d.date}</strong>
                        </h5>
                    </p>

                    <p>Position: {d.isCurrentJob ? '' : 'ed'} as: <Position>{d.position}</Position></p>

                    {d.titles.map((t) => (
                        <p>{t}</p>
                    ))}

                    <p>{d.tags.title}</p>
                    <List>{d.tags.list.map((t) => (
                        <Tag label={t}/>
                    ))}</List>
                </Section>
            ))}
        </Wrap>
    )
}

export default Experience;
