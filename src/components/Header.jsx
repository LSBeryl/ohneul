import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Logo to="/">오늘 뭐하지?</Logo>
      <Menus>
        <Menu to="/inquiry">문의하기</Menu>
      </Menus>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  &,
  & * {
    font-family: "Ownglyph_UNZ-Rg";
  }
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  padding: 0.5rem 2rem;
  border-bottom: 2px solid #9d8e72;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 3rem;
`;

const Menus = styled.div`
  display: flex;
  gap: 2rem;
`;

const Menu = styled(Link)`
  color: #9d8e72;
  text-decoration: none;
  font-size: 1.5rem;
`;
