import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.60);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.danger.main : theme.gray[900]
  )}
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .cancel-button {
    border: none;
    background: transparent;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.gray[200]};
  }
`;
