import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.primaryColor.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.primaryColor.buttonLighter};
  }

  &:active {
    background: ${({ theme }) => theme.primaryColor.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`;
