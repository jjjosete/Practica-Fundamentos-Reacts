import Layout from "../layout/Layout.js";
import Button from "../common/Button.js";
import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import postAdd from "./NewAddService.js";
import Page from "../layout/page.js";
/**En la clase 3 se explica, 1:55
 * cómo hacer un input de tipo select para los tags
 */
const NewAdd = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    sale: "",
    price: 0,
    tags: [],
    photo: null
  })
  

    const handleChange = (event) => {
      
    if(credentials.photo === null|| credentials.photo ===''){
      delete credentials.photo;
    }
      setCredentials((credentials) => ({
        
        ...credentials,
        
        [event.target.name]: event.target.value,
      }));
      
    }
      console.log(credentials)
    const handleSubmit = async event => {
        event.preventDefault();
        console.log(credentials)
        try {
        await postAdd(credentials); 
        } catch (error) {
          console.log(error)
        }
      };
  return (
      <Page title={"Nuevo anuncio"} >
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del artículo</label>
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
          
          <label htmlFor="sale">Compra o venta</label>
          <select name="sale"  onChange={handleChange}>
          <option name="0" id="" >--</option>
            <option name="1" id="true" value={true} >Vendo</option>
            <option name="2" id="false" value={false}>Compro</option>
            
          </select>
          <label htmlFor="price">Precio del artículo</label>
          <input
            type="number"
            name="price"
            min = "1"
            value={credentials.price}
            onChange={handleChange}
          />
          <label htmlFor="tags">Etiquetas</label>
          <select name="tags"  onChange={handleChange}>
          <option name="0" >--</option>
            <option name="lifestyle" id="lifestyle">lifestyle</option>
            <option name="mobile" id="mobile">mobile</option>
            <option name="motor" id="motor">motor</option>
            <option name="work" id="work">work</option>
          </select>
          <label htmlFor="photo">Ruta de la Foto</label>
          <input
            type="text"
            name="photo"
            value={credentials.photo}
            onChange={(handleChange)}
    
          />
        <Button
          type="submit"
          variant="primary"
          disabled={!credentials.name || credentials.sale == "--" || !credentials.price ||credentials.tags == "--"}
        >
          Vender
        </Button>
        </form>

      </Page>
    );
  };

export default NewAdd;
