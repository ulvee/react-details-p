import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function Products() {
  const [data, setData] = useState([]);
  const params = useParams()
  const getData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  console.log(params);
  return (
    <div> 
      Hello
      {data.title}
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  )
}

export default Products