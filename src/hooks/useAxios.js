import axios from "axios";
import React, {useState} from "react";

const useAxios = (baseUrl) => {
    const initialState = [];
    const [data, setData] = useState(initialState);
    
    const addData = async (fullUrl = data => data,restOfUrl="") => {
        console.log(fullUrl);
        console.log(data);
        console.log(baseUrl)
        const res = await axios.get(`${baseUrl}${restOfUrl}`);
        console.log(res.data)
        setData(data => [...data, fullUrl(res.data)]);
        console.log(data)
    };

    return[data,addData]
            
}   


export default useAxios;