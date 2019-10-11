import { useState, useEffect } from "react";
import axios from "../../node_modules/axios";

const useFetch = (localUrl) => {
    const [data, setData] = useState([]);
    const [address, setAddress] = useState(localUrl);

    useEffect(() => {
        axios.get(localUrl)
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.log("Error from API", error)
            )
    }, [localUrl]);

    return [data, setAddress];
}
export default useFetch;
