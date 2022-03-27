import client from '../../API/client.js'

import storage from "../../utils/storage.js";
import { setAuthorizationHeader } from "../../API/client.js";

const baseUrl = '/api/v1';

export const postAdd = (credentials) =>{
    const url = `${baseUrl}/adverts`;
    return client.post(url, credentials);
}

export default postAdd;