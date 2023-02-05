import styled from "styled-components";
import backgroundHeaderImage from "../../assets/desktop/bg-pattern-header.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <HeaderJobs>
          <Logo>DevJobs</Logo>
          <Navbar>
            <Link to="/">
              <p>Vagas</p>
            </Link>
            <Link to="/registry">
              <p>Registrar</p>
            </Link>
          </Navbar>
        </HeaderJobs>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${backgroundHeaderImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const Wrapper = styled.div`
  width: 1000px;
`;

const HeaderJobs = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const Navbar = styled.div`
  display: flex;
  p {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    padding: 0 0 0 20px;
  }
`;
