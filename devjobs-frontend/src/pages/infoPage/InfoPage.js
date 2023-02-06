import styled from "styled-components";
import Header from "../../components/Header/Header.js";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

import jobIdContext from "../../context/jobIdContext.js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import FooterInfoPage from "../../components/Footer/InfoPageFooter.js";

export default function InfoPage() {
  const mapData = data.map((element) => element);
  const Navigate = useNavigate();
  const { selectedJobId } = useContext(jobIdContext);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const response = axios.get(`http://54.175.241.236/jobs/${selectedJobId}`);
    response
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => console.log(error));
  }, [selectedJobId]);

  console.log("info", info);
  console.log("website", mapData[0].website);
  function goBacktoJobs() {
    Navigate("/");
  }
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <NavigateBack onClick={goBacktoJobs}>
            <IoArrowBackSharp size={20} />
            <p>Go Back </p>
          </NavigateBack>
          <InfoCompany>
            <div>
              <img src={info.logo} alt="logo" />
              <SideInfoCompany>
                <Title>{info.companyName}</Title>
                <Paragraph>{info.website}</Paragraph>
              </SideInfoCompany>
            </div>
            <a href={info.website}>
              <button>Company Site</button>
            </a>
          </InfoCompany>
          <InfoJob>
            <WrapperInfoJob>
              <p>{info.contract}</p>
              <TitleInfoJob>{info.position?.name}</TitleInfoJob>
              <CountryInfoJob>{info.country?.name}</CountryInfoJob>
              <DescriptionJobs>
                <Title>Description</Title>
                <Description>{info.description}</Description>
              </DescriptionJobs>
              <ContentJobs>
                <Title>What you will do</Title>
                <Description>{info.content}</Description>
              </ContentJobs>
            </WrapperInfoJob>
          </InfoJob>
        </Wrapper>
      </Container>
      <FooterInfoPage
        website={info.website}
        title={info.position?.name}
        company={info.companyName}
      />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  margin-bottom: 500px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  margin-bottom: 600px;
`;

const NavigateBack = styled.div`
  display: flex;
  margin: 20px 0px;
  gap: 10px;
  cursor: pointer;
`;
const InfoCompany = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 40px 0;
  width: 800px;
  height: 120px;
  background-color: #fff;
  img {
    width: 60px;
    height: 60px;
    padding-left: 20px;
  }
  div {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #5964e0;
    background-color: rgba(89, 100, 224, 0.2);
    margin-right: 20px;
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const Paragraph = styled.p`
  font-size: 12px;
  color: #6e8098;
  margin-top: -10px;
`;

const SideInfoCompany = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoJob = styled.div`
  width: 800px;
  height: auto;
  background-color: #fff;
`;

const WrapperInfoJob = styled.div`
  padding: 30px;
  margin-top: 40px;
`;

const TitleInfoJob = styled.p`
  margin: 10px 0;
  font-size: 28px;
  font-weight: bold;
  color: #19202d;
`;

const CountryInfoJob = styled.p`
  color: #5964e0;
  font-size: 14px;
`;

const DescriptionJobs = styled.div`
  margin: 20px 0;
`;

const Description = styled.div`
  margin: 20px 0;
`;

const ContentJobs = styled.div`
  margin: 20px 0;
`;
