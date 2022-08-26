import React, { useState } from "react";
import Recipies from "./Recipies";


const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "731357eb";
  const YOUR_APP_KEY = "7101dd8b8c056c6c930df641166f41a5";

  const changeHandeler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.hits);
        console.log(data.hits);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <form onSubmit={submitHandeler}>
              <h4 className="card-title">weather App</h4>
              <input type="text" value={search} onChange={changeHandeler} />
              <br />
              <br />
              <input
                type="submit"
                className="btn btn-primary"
                value="Get Results"
              />
            </form>
            <br />
            <Recipies data={data} />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
import React from "react";

const Recipies = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map((data) => (
          <div className="col-md-4">
            <div clss="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={data.recipe.image} alt="" />
              <div class="card-body">
                <center>
                  <h4 class="card-title">{data.recipe.label}</h4>
                  <p class="card-text"> calories is:{Math.round(data.recipe.calories)}</p>
                  <a href="#" className="btn btn-primary">
                    buy
                  </a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipies;
