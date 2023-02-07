import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import News from "./News";
import "./NewsApp.css";

function NewApp() {
  const apiKey = "fb988511ed6a4467ac7062dc7e6e971d";

  const [newsList, setnewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const [date, setDate] = useState("");
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`;
  const QerRefInput = useRef(null);
  const DateRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jasonData = await response.json();
      setnewsList(jasonData.articles);
    } catch (e) {
      console.log(e, "you have some error plese check");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const querData = QerRefInput.current.value;
    setQuery(querData);
  }
  function hanndleDate(e) {
    e.preventDefault();
    const date = DateRef.current.value;
    setDate(date);
  }
  return (
    <div className="full-screen">
      <form onSubmit={handleSubmit}>
        <input className="QerRefInput" type="text " ref={QerRefInput} />
        <input
          className="submitButton"
          onClick={handleSubmit}
          type="submit"
          value="Submit"
        />
      </form>
      <p>Write Date Like:Year-month-date</p>
      <form onSubmit={hanndleDate}>
        <input type="text" ref={DateRef} placeholder="2023-01-20" />
      </form>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,30%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => {
          return (
            <>
              {/* <p>{news.title}</p> */}
              <News key={news.id} news={news} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default NewApp;
