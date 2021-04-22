import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const PageWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
  min-height: 90vh;
`;

const Layout = (props) => {
  return (
    <div>
      <Header />
      <PageWrapper>{props.children}</PageWrapper>
      <Footer />
    </div>
  );
};

export default Layout;
