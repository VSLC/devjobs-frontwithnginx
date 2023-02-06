import styled from "styled-components";
import Header from "../../components/Header/Header.js";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

import { useNavigate } from "react-router-dom";

export default function Registry() {
  const Navigate = useNavigate();
  const [jobsInfo, setJobsInfo] = useState({
    companyName: "",
    logo: "",
    contract: "",
    description: "",
    content: "",
    website: "",
  });
  let [countries, setCountries] = useState({});
  let [positions, setPositions] = useState({});
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedPosition, setSelectedPosition] = useState({});

  function handleForm(event) {
    setJobsInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSelectedPosition(selectedOption) {
    setSelectedPosition(selectedOption);
  }

  function handleSelectedLocation(selectedOption) {
    setSelectedLocation(selectedOption);
  }

  useEffect(() => {
    const response = axios.get("http://54.175.241.236/countries");
    response
      .then((response) => {
        setCountries(
          response.data.map((element) => {
            return { id: element.id, value: element.name, label: element.name };
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("countries", countries);

  useEffect(() => {
    const response = axios.get("http://54.175.241.236/position");
    response
      .then((response) => {
        setPositions(
          response.data.map((element) => {
            return { id: element.id, value: element.name, label: element.name };
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(positions);
  console.log(countries);

  function submit(event) {
    event.preventDefault();
    const jobFinalInfo = {
      ...jobsInfo,
      countryId: selectedLocation.id,
      positionId: selectedPosition.id,
    };
    const response = axios.post("http://54.175.241.236/jobs", jobFinalInfo);
    response
      .then((response) => {
        Navigate("/");
      })
      .catch((error) => console.log(error));
    console.log(jobFinalInfo);
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={submit}>
          <h1>Registrar vagas</h1>
          <div>
            <p>Company Name</p>
            <input
              placeholder="company name"
              onChange={handleForm}
              value={jobsInfo.companyName}
              name="companyName"
            />
          </div>
          <div>
            <p>Logo</p>
            <input
              placeholder="logo"
              onChange={handleForm}
              value={jobsInfo.logo}
              name="logo"
            />
          </div>
          <div>
            <p>position</p>
            <Select
              className="inputSelect"
              options={positions}
              onChange={handleSelectedPosition}
              value={selectedPosition}
            />
          </div>
          <div>
            <p>location</p>
            <Select
              className="inputSelect"
              options={countries}
              value={selectedLocation}
              onChange={handleSelectedLocation}
            />
          </div>
          <div>
            <p>contract</p>
            <input
              placeholder="contract"
              onChange={handleForm}
              value={jobsInfo.contract}
              name="contract"
            />
          </div>
          <div>
            <p>website</p>
            <input
              placeholder="website"
              onChange={handleForm}
              value={jobsInfo.website}
              name="website"
            />
          </div>
          <div>
            <p>description</p>
            <textarea
              onChange={handleForm}
              value={jobsInfo.description}
              name="description"
            />
          </div>
          <div>
            <p>content</p>
            <textarea
              onChange={handleForm}
              value={jobsInfo.content}
              name="content"
            />
          </div>
          <button>Submit</button>
        </Form>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 700px;
  margin: 40px 0;
  h1 {
    text-align: center;
    font-size: 20px;
    color: #5964e0;
    margin: 40px 0;
  }
  input {
    width: 600px;
    height: 40px;
    ::placeholder {
      color: #000;
      padding: 0 20px;
      opacity: 0.3;
    }
  }
  p {
    margin: 20px 0;
    color: #000;
    opacity: 0.5;
  }
  button {
    padding: 10px 20px;
    background-color: #5964e0;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 20px 0;
  }
  textarea {
    width: 600px;
    height: 60px;
  }
  .inputSelect {
    width: 600px;
    height: 40px;
  }
`;
