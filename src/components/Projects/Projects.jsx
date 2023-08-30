import { projects } from '../../data/constants';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Container, Wrapper, Title, Description, CardContainer } from './components';

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit cum delectus ratione
          deleniti perspiciatis sunt voluptatem aut, placeat dignissimos neque maxime omnis quisquam
          reprehenderit eligendi architecto ab vel molestiae enim.
        </Description>

        <CardContainer>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
