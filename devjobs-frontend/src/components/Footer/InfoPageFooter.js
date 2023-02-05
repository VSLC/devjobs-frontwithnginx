import styled from "styled-components";

export default function FooterInfoPage({ website, title, company }) {
  return (
    <Container>
      <FooterWrapper>
        <div>
          <Title>{title}</Title>
          <Company>{company}</Company>
        </div>
        <a href={website}>
          <button>Company Website</button>
        </a>
      </FooterWrapper>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  height: 60px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    color: #5964e0;
    background-color: rgba(89, 100, 224, 0.2);
    cursor: pointer;
  }
`;
const Title = styled.h4``;
const Company = styled.p``;
