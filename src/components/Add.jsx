import React, { useEffect, useState } from "react";

const Add = () => {
  let [query, setQuery] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
   if (query.length) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=25fcdc88a9e8c6ac8725c01af2cc2530&language=pt-BR&query=${query}`
    )
      .then((resp) => resp.json())
      .then((respData) => {
        setData(respData.results)
      });
   }
  },[query])

  useEffect(() => console.log(data), [data])

  function onChange(e) {
    setQuery(e.target.value);
    console.log(query)

    
  }
  return (
    <div className="add-page">
      <div className="container">
        <div>
          { data?.length ? data?.map((d) => {
          return <img src={`http://image.tmdb.org/t/p/w500${d.poster_path}`} alt="" key={d.id} style={{width:"100px",height:"100px"}}/>;
        }) : <p>loading</p>}
        </div>
        <div className="add-content">
          {}
          <img
            src="https://www.cinemaplus.az/site/assets/files/1083/6.jpg"
            style={{ height: "333px", opacity: 0.9 }}
            alt=""
          />
          <div className="titles">
            <h1>Welcome</h1>
            <h2>
              Millions of movies and TV shows and people to discover. Discover
              now.
            </h2>
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
      </div>
    </div>
  );
};

export default Add;
