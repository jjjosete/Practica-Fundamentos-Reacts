import Page from'../layout/page.js'
import client from '../../API/client.js';
import { useParams } from "react-router-dom";
import { useState } from 'react/cjs/react.production.min';
import { useEffect } from 'react/cjs/react.production.min';

    const baseUrl = '/api/v1/adverts';
 const getAdd = addId => {
    const url = `${baseUrl}/${addId}`;
    return client.get(url);
  };
  
  
  
  const AddDetail = () => {

    const paramsObj = useParams();
    const params = JSON.stringify(paramsObj.addId);
    
    
    const {add }= getAdd(params);
   
    return (
    <Page title={'Detalle de anuncio'} >
    <div className="addsPage">
        Esto es el detalle de anuncio
          </div>
          </Page>
    )
}

export default AddDetail