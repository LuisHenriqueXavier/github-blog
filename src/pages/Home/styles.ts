import styled from "styled-components";

export const Container = styled.main`
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const ProfileCard = styled.section`
  background: ${(props) => props.theme.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5.5rem;
  display: flex;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    object-fit: cover;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.baseTitle};
    }

    a {
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.baseText};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    margin-top: 6rem;
    color: ${(props) => props.theme.baseTitle};

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    header {
      flex-direction: column;
      gap: 0.5rem;
    }

    ul {
      justify-content: center;
    }
  }
`;

export const SearchForm = styled.form`
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.baseTitle};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseSpan};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 0.75rem;
    background: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseBorder};
    border-radius: 6px;
    color: ${(props) => props.theme.baseText};

    &::placeholder {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`;

export const PostList = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Estilos de paginação:

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const PageButton = styled.button`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    background: ${(props) => props.theme.baseLabel};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.blue};
  }
`;

export const PageInfo = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.baseTitle};
`;
