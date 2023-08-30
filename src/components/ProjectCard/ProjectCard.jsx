import { useState } from 'react';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

import { Container, Title, Image, Tags, Tag, Details, Date, Description } from './components';

const ProjectCard = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Container onClick={() => handleModal()}>
      <Image src={project.image} />
      <Tags>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {openModal && (
        <ProjectDetail project={project} handleModal={handleModal} openModal={openModal} />
      )}
    </Container>
  );
};

export default ProjectCard;
