import styled from "styled-components";

export const Container = styled.main`
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    color: ${(props) => props.theme.baseText};
  }
`;
