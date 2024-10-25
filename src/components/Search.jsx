import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    // console.log('Use effect hook')
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://10.19.88.229:8081/test_api//search.php${searchText ? `?query=${searchText}` : ''}`
        );
        const data = await response.json();
        setResults(data.results);
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, [searchText]);
  return (
    <div>
      <TextField
        id="search"
        label="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {results && results.map((result, index) => <p key={index}>{result}</p>)}
    </div>
  );
};

export default Search;
