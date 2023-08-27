import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div``;
const Desc = styled.div``;
const SkillsContainer = styled.div``;
const SkillCard = styled.div``;
const SkillTitle = styled.div``;
const TechList = styled.ul``;
const Tech = styled.div``;
const TechImg = styled.img``;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title></Title>
        <Desc></Desc>
        <SkillsContainer>
          {skills.map((skill) => {
            <SkillCard>
              <SkillTitle>{skill.title}</SkillTitle>
              <TechList>
                {skill.techs.map((tech) => (
                  <Tech>
                    <TechImg src={tech.image} />
                    {tech.name}
                  </Tech>
                ))}
              </TechList>
            </SkillCard>;
          })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
