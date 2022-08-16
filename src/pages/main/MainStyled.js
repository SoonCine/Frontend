import styled from "styled-components";
import "../../static//fonts/fonts.css";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 2px solid white;
  min-height: 100vh;

  background-image: url("https://i.pinimg.com/564x/14/4b/a9/144ba9c008b781d52fb03f4ef05ba441.jpg");
`;
const MainNav = styled.div`
  justify-content: end;
  display: flex;
`;

const MainListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export { MainWrap, MainNav, MainListContainer };
