import styled from 'styled-components';
import { projects } from '../../data/constants';
import Card from './Card';

export const Container = styled.div`
  min-height: 900px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
export const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Filter = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active }) =>
    active &&
    `
      background-color: ${({ theme }) => theme.primary + 20}
    `}

  &:hover {
    background-color: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

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

        {/* <FiltersContainer>
          <Filter>Web</Filter>
        </FiltersContainer> */}

        <CardContainer>
          {projects.map((project) => (
            <Card key={project.title} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
