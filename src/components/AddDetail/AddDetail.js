import Layout from "../layout/Layout.js"
import { useParams } from "react-router-dom";
const AddDetail = (props) => {
    
    const params = useParams();
    console.log(params)
    return (
        <Layout title={"Detalle de anuncio"}{...props}>
<div> Esto es la página del detalle de anuncio </div>
        </Layout>
    )
}

export default AddDetail