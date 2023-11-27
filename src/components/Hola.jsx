import React, {useState} from "react";
import useApiDatos from "../hooks/apiDatos";
import { useNavigate } from "react-router-dom";
export default function Hola() {
  const [inputt, setInputt] = useState('');
  const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=${inputt}`;
  const { data, error } = useApiDatos(urlApi);
 const navigate = useNavigate()
  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(data)

  return (
    <div>
      <button className="btn " onClick={()=>{navigate(-1)}}>⬅</button>
      <hr />
      <div className="text-center mt-5">
      <input 
      className="bg-secondary"
       type="text"
        id="inputt"
        />
        <button className="btn btn-primary" onClick={()=>{setInputt(document.getElementById('inputt').value)}}>Buscar</button>
        
        <div className="row">
        {data?.results?.map((item, index) => {
          
  return (
    <div className="col-4" key={index}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
        </div>
      </div>
    </div>
  );
})}
        
        
      </div>
    </div>
    </div>
  );
}
