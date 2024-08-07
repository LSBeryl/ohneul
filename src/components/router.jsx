import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Main from "../pages/Main";
import styled from "styled-components";
import Header from "./Header";
import Inquiry from "../pages/Inquiry";
import Footer from "./Footer";

export default function Router() {
  function Layout() {
    return (
      <>
        <Header />
        <Wrapper>
          <Outlet />
        </Wrapper>
        <Footer />
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="inquiry" element={<Inquiry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-block: 5rem;
`;
