import Page from'../layout/page.js'
import { useParams } from "react-router-dom";
const AddDetail = () => {
    
    const params = useParams();
    console.log(params)
    return (
        <Page title={"Detalle de anuncio"}>
<div> Esto es la página del detalle de anuncio </div>
        </Page>
    )
}

export default AddDetail