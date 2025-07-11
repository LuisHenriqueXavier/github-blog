import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: column;
  justify-content: space-between;

  div {
    width: 160px;
    height: 98px;
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.blue};
    font-size: 2rem;
    font-weight: bold;
  }


`;
