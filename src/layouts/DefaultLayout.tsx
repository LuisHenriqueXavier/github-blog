import { Outlet } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <img src="/src/assets/LeftEffect.png" />
        <div>Teste</div>
        <img src="/src/assets/RightEffect.png" />
      </HeaderContainer>
      <Outlet />
    </>
  );
}
