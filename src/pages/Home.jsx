import React, { useEffect, useState } from "react";

import GetHeroes from "../api/GetHeroes";
import "../styles/home.css";

const Home = () => {
  const [data, setData] = useState([]);
const [team, setTeam] = useState([])
  const [id, setId] = useState(1);

  const handleChange = (event) => {
    setId(event.target.value);
  };
  useEffect(() => {
    GetHeroes(id).then((res) => setData(res));
  }, [id]);
  console.log(data);

 

  const addToTeam =()=>{

  setTeam([...team,data])
  }

  const  deleteTeam = (id) =>{

    //Filter 
    const filterData  = team.filter((item)=>item.id!==id)
    setTeam(filterData)
    //SetTeam a lo que te devuelta filter 
  }

  return (
    <div className="home-container">
      <h1>Heroes</h1>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Buscar..."
          onChange={handleChange}
        />
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={data?.image?.url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{data?.name}</h5>
          <p class="card-text">{data?.biography?.alignment}</p>
         
        <button className="btn btn-success" onClick={addToTeam}>Add Team</button>
        </div>
        
      </div>

      {team?.map((item)=>(
           <div class="card" style={{ width: "18rem" }}>
           <img src={item?.image?.url} class="card-img-top" alt="..." />
           <div class="card-body">
             <h5 class="card-title">{item?.name}</h5>
             <p class="card-text">{item?.biography?.alignment}</p>
            
           <button className="btn btn-danger" onClick={()=>deleteTeam(item.id)}>Delete</button>
           </div>
           
         </div>


          ))}

    </div>
  );
};

export default Home;
