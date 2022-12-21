import React, { useState } from "react";

const Add = () => {
    let [query,setQuery] = useState("")
    function onChange(e) {
        setQuery(e.target.value)
    }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
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
            <input type="text" onChange={onChange} placeholder="Search Film..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
