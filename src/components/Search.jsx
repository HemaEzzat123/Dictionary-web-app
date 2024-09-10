import search from "../assets/images/icon-search.svg";
import axios from "axios";
import { useState } from "react";
import Searched from "./Searched";
export async function getData(toSearch) {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${toSearch}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Error 404: Resource not found");
      alert("Invalid word.");
    } else {
      console.error("Error:", error.message);
      alert("An error occurred.");
    }
  }
}

function Search() {
  const [toSearch, setToSearch] = useState("");
  const [data, setData] = useState(null);

  const handle = async () => {
    if (toSearch === "") {
      alert("Please enter a word.");
    } else {
      const fetchedData = await getData(toSearch);
      setData(fetchedData);
    }
  };

  const handleEnter = (key) => {
    if (key.key === "Enter") {
      handle();
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={toSearch}
          onChange={(e) => setToSearch(e.target.value)}
          placeholder="Search for a word..."
          onKeyPress={handleEnter}
        />
        <img src={search} onClick={handle} alt="search-icon" />
      </div>
      {data && <Searched data={data} />}
    </>
  );
}

export default Search;
