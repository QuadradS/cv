import React from 'react';
import Section from "../../components/section";

const AboutMe = ({data}) => {
    return(
        <Section title={data.aboutMe.sectiontitle}>
            {data.aboutMe.tittles.map((t, index) => <p key={index}>{t}</p>)}
        </Section>
    )
}

export default AboutMe;
