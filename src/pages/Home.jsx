import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="cards">
        {data.map((u) => (
          <div key={u.id} className="card">

            <div className="image">
              <img src={u.url} alt={u.url} />
              <p>
                <strong> Id: </strong>
                {u.id}
              </p>
            </div>
            <div className="content">
              <p>
                <strong>Title: </strong>
                {u.title}
              </p>
            </div>
            <button onClick={() => navigate(`/products/${u.id}`)}>Go to</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
