import styled from "styled-components";

export default function Footer() {
  return <Wrapper>&copy; 2024. 이서현 all rights reserved.</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  color: #736751;
`;
