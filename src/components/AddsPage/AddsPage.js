import { useEffect, useState } from "react"
import { getLatestAdds } from "./AddsService.js";
import { Link, } from "react-router-dom";

const AddsPage = () => {
    let [adds, setAdds] = useState([]);

    useEffect(()=> {
      const execute = async () => {
        adds = await getLatestAdds();
        
        setAdds(adds);
      };
      execute();
    },[]);
    
    return (
      
        <div className="addsPage">
         
          
         
          <ul>
            {adds.map((add) => (
              <li key={add.id}>
                    
                <Link to={`/adverts/${add.id}`}>
                <h1>{add.name}</h1>
                <img src={add.photo} alt="Foto del anuncio"></img>
                <p>
                  <b>Precio: </b>
                  {add.price}€
                </p>
                <p>
                  <b>Tags: </b>
                  {add.tags}
                </p>
             </Link>
              </li>
            ))}
          </ul>
        </div>
      
    );
}

export default AddsPage