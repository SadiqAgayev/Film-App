import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import ResultCart from "./ResultCart";

const Add = () => {

  const {sadiq} = useContext(GlobalContext)

  let [query, setQuery] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    if (query.length) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-EN&query=${query}`
      )
        .then((resp) => resp.json())
        .then((respData) => {
          setData(respData.results);
        });
    }
  }, [query]);

  // useEffect(() => console.log(data), [data])

  function onChange(e) {
    setQuery(e.target.value);
    // console.log(query)
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          {}
          <img
            src="https://www.cinemaplus.az/site/assets/files/1083/6.jpg"
            style={{ height: "100%", opacity: 0.9 }}
            alt=""
          />
          <div className="titles">
            <h1>Welcome</h1>
            <h2>
              Millions of movies and TV shows and people to discover. Discover
              now.
            </h2>
            <h3>{sadiq}</h3>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              onChange={onChange}
              placeholder="Search Film..."
              value={query}
            />
          </div>
        </div>
        <ul type="none">
          {data?.length ? (
            data?.map((movie) => {
              return (
                <li key={movie.id}>
                  <ResultCart movie={movie} />
                </li>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Add;
