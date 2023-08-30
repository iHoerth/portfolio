import { skills } from '../../data/constants';

import {
  Container,
  Wrapper,
  Title,
  Description,
  SkillsContainer,
  SkillCard,
  SkillTitle,
  TechList,
  Tech,
  TechImg,
} from './skillsStyles';

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis omnis in sunt
          animi error hic esse sed, ea earum reprehenderit totam, sit vitae quam odit dolor
          doloribus dicta voluptates.
        </Description>
        <SkillsContainer>
          {skills.map((skill) => (
            <SkillCard key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <TechList>
                {skill.techs.map((tech) => (
                  <Tech key={tech.name}>
                    <TechImg src={tech.image} />
                    {tech.name}
                  </Tech>
                ))}
              </TechList>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
