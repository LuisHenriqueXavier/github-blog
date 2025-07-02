import { Outlet } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <h1 style={{ color: "#fff" }}>GitHub Blog</h1>
      </HeaderContainer>
      <Outlet />
    </>
  );
}
