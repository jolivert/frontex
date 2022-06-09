import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [estado, setEstado] = useState(true);
  const [estado2, setEstado2] = useState(true);
  const [data, setData] = useState({ message: [] });
  const [data1, setData1] = useState({ message: [] });

  const fetchData = async () => {
    const result = await axios("https://dog.ceo/api/breeds/image/random");
    setData(result.data);
  };

  const fetchAll = async () => {
    const lista = await axios("https://dog.ceo/api/breeds/list/all");

    setData1(lista.data);
  };

  useEffect(() => {
    fetchData();
  }, [estado]);

  useEffect(() => {
    fetchAll();
  }, [estado2]);

  return (
    <div>
      <h1> Imagen random</h1>

      <img id="dog" src={data.message} />

      <p>
        <button onClick={() => setEstado(!estado)}>
          {" "}
          Push to get new image{" "}
        </button>
      </p>
      <h2>La URL de la imagen es {data.message}</h2>

      <p>
        <button onClick={() => setEstado2(!estado2)}>
          Push to get all breeds list
        </button>
      </p>

      <ul>
        {Object.keys(data1.message).map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
