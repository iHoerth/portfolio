import { Modal } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

import {
  Container,
  Wrapper,
  Title,
  Date,
  Desc,
  Image,
  Tags,
  Tag,
  ButtonGroup,
  Button,
} from './components';

const ProjectDetail = ({ handleModal, openModal, project }) => {
  return (
    <Modal open={openModal} onClose={() => handleModal()}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={() => handleModal()}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>

          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              View Code
            </Button>
            <Button href={project?.webapp} target="new">
              View Live App
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetail;
