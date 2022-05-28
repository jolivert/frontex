import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

export default function App() {
  const [data, setData] = useState({ hits: [] });

  const fetchData = async () => {
    const result = await axios("https://dog.ceo/api/breeds/image/random");
    setData(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <h1> Imagen random</h1>

      <img id="dog" src={data.message} />
    </div>
  );
}
