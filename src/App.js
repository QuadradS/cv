import styled from "styled-components";
import AboutMe from "./modules/about-me";
import Skills from "./modules/skills";
import Experience from "./modules/experience";

const Container = styled.div`
  margin: 20px;
`

function App({data}) {
    return (
        <Container>
            <AboutMe data={data}/>
            <Experience data={data}/>
            <Skills data={data}/>
        </Container>
    );
}

export default App;
