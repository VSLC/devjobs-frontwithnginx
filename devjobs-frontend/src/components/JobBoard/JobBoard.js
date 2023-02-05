import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useContext } from "react";
import jobIdContext from "../../context/jobIdContext";

import { IoTrashOutline } from "react-icons/io5";

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const { setSelectedJobId } = useContext(jobIdContext);

  useEffect(() => {
    const dataJobs = axios.get("http://localhost:5000/jobs");
    dataJobs
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => console.log(error));
  }, [jobs]);

  function selectJobId(jobId) {
    setSelectedJobId(jobId);
  }

  function deleteJobs(jobId) {
    const response = axios.delete(`http://localhost:5000/jobs/${jobId}`);
    response
      .then((response) => console.log("deletou"))
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <JobContainer>
        {jobs.map((element) => {
          return (
            <JobUnit
              key={element.id}
              element={element}
              selectJobId={selectJobId}
              deleteJobs={deleteJobs}
            />
          );
        })}
      </JobContainer>
    </Container>
  );
}

function JobUnit({ element, selectJobId, deleteJobs }) {
  return (
    <>
      <Job onClick={() => selectJobId(element.id)}>
        <img src={element.logo} alt="logo" />
        <JobInfo>
          <JobContract>{element.contract}</JobContract>
        </JobInfo>
        <Link to="/jobsInfo" style={{ textDecoration: "none" }}>
          <JobTitle>{element.position.name}</JobTitle>
        </Link>
        <JobCompany>{element.companyName}</JobCompany>
        <JobLocation>{element.country.name}</JobLocation>
        <IoTrashOutline
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "#000",
            cursor: "pointer",
          }}
          size={20}
          onClick={() => deleteJobs(element.id)}
        />
      </Job>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const JobContainer = styled.div`
  margin: 40px 0 100px 0;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Job = styled.div`
  position: relative;
  width: 320px;
  height: 230px;
  gap: 20px;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 0 20px;
  margin-bottom: 10px;
  img {
    position: absolute;
    top: -20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

const JobInfo = styled.div`
  display: flex;
  margin-top: 60px;
  gap: 10px;
`;
const JobTime = styled.div`
  color: #6e8098;
  font-size: 16px;
  font-weight: 400;
`;
const JobContract = styled.div`
  color: #6e8098;
  font-size: 16px;
  font-weight: 400;
`;
const JobTitle = styled.div`
  margin: -10px 0;
  color: #19202d;
  font-weight: bold;
  font-size: 20px;
`;
const JobCompany = styled.div`
  margin: 5px 0;
  color: #6e8098;
  font-weight: 400;
  font-size: 16px;
`;
const JobLocation = styled.div`
  color: #5964e0;
  font-size: 14px;
  font-weight: 400;
`;
