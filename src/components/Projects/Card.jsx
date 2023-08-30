import styled from 'styled-components';

const Container = styled.a`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  padding: 26px 20px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  gap: 14px;

  &:hover {
    transform: scale(1.015);
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  text-overflow: elipsis;
  white-space: nowrap;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};
  object-fit: cover;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 2px;
`;

const Members = styled.div`
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-left: 2px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div``;

const Card = ({ project }) => {
  return (
    <Container>
      <Image src={project.image} />
      <Tags>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.Description}</Description>
      </Details>
      <Members></Members>
    </Container>
  );
};

export default Card;
