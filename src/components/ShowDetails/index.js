import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ApiServices from "../../services/apiServices";

const ShowDetails = () => {
    const params = useParams();
    let apiServices = new ApiServices();
    console.log(params)
    const [data,setData] = useState({})
    const getData = async () => {
        let result = await apiServices.get(
            process.env.REACT_APP_BACKEND_URL + "/customerData",
            { id: params.id }
          );
          setData(result.data[0])
    }
    useEffect(() => {
        getData();
      }, []);
    
    return ( 
        <>
            <div>Test</div>
        </>
     );
}
 
export default ShowDetails;