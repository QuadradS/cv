import React from 'react';
import Section from "../../../components/section";
import {Tag, List} from "../../../components/tag";

const SkillsSection = ({data, title = ''}) => {
    return (
        <Section blockTitle={title} title={data.sectionTitle}>
            {data.titles.map((t,k) => (
                <p key={k}>{t}</p>
            ))}

            <p>{data.tags.title}</p>

            <List>
                {data.tags.list.map(({label}) => <Tag label={label} key={label}/>)}
            </List>
        </Section>
    )
}

export default SkillsSection;
