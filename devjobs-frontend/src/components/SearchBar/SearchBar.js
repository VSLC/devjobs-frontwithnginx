import styled from "styled-components";
import { IoSearchOutline, IoLocationSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <Container>
      <Search>
        <SearchInput>
          <IoSearchOutline style={{ color: "#5964E0" }} size="25px" />
          <input placeholder="filter by title , company and expertise"></input>
        </SearchInput>
        <div></div>
        <SearchInput>
          <IoLocationSharp style={{ color: "#5964E0" }} size="25px" />
          <input placeholder="filter by location"></input>
        </SearchInput>
        <button>Search</button>
      </Search>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Search = styled.div`
  padding: 0 10px;
  height: 60px;
  width: 1000px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -25px;
  button {
    padding: 10px 50px;
    background-color: #5964e0;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  input {
    height: 30px;
    width: 300px;
    border: none;
    background: #fff;
    color: #19202d;
    opacity: 0.5;
  }
`;
