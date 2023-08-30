import styled from 'styled-components'

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

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;