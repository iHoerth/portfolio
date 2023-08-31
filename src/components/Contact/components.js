import styled from 'styled-components';

export const Container = styled.div`
  min-height: 850px;
  display: flex;
  flex-direction: column;
  position: relative;
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

export const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.card};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  width: 600px;
  height: 500px;
`;

export const FormTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  display: flex;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const FormInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  padding-left: 12px;
  -webkit-box-shadow: none;
  flex: 1;
  &:-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.text_primary}};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.card} inset;
    transition: all 5000s ease-in-out;
  }
`;

export const FormMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 6px 6px 12px;
  resize: none;
  flex: 2.5;
`;

export const FormButton = styled.a`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  text-align: center;
  color:${({ theme }) => theme.white};
  border-radius: 10px;

  font-size: 20px;
  font-weight: 600;

  transition: all 0.1s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow:  20px 20px 60px #1F2634,
  -20px -20px 60px #1F2634;
  cursor: pointer;

  &:hover {
    transform: scale(1.02, 1.06);
    transition: all 0.1s;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
  }    
`;
