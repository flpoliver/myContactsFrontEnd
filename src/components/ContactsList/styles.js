import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.textColor};
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.primaryColor.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.primaryColor.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.primaryColor.main};
      color: #FFF;
    }
  }
`;
