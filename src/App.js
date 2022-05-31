import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [estado,setEstado]= useState(true)
  const [data, setData] = useState({message:[]});

  const fetchData = async () => {
    const result = await axios("https://dog.ceo/api/breeds/image/random");
    setData(result.data);
    
  };

  useEffect(() => {
    fetchData();
    
  }, [estado]);

  return (
   
   
   <div>
      <h1> Imagen random</h1>

      <img id="dog" src={data.message} />

      <p>
        
        <button onClick={() => setEstado(!estado)}> Push to get new image </button>
      </p>
      <h2>La URL de la imagen es {data.message}</h2>
    </div>
  );
}
