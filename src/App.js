import styled from "styled-components";
import AboutMe from "./modules/about-me";
import Skills from "./modules/skills";
import Experience from "./modules/experience";


const Container = styled.div`
  margin: 20px;
`

function App() {
    return (
        <Container>
            <AboutMe/>
            <Skills/>
            <Experience/>
        </Container>
    );
}

export default App;
