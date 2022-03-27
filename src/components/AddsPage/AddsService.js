import client,{removeAuthorizationHeader, setAuthorizationHeader} from "../../API/client.js";

import storage from '../../utils/storage.js'
const baseUrl = '/api/v1';

export const getLatestAdds = () =>{
    const url = `${baseUrl}/adverts`;
    return client.get(url)
}

