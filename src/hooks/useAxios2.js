import axios from "axios";
import React, {useState} from "react";


const useAxios2 = (baseUrl) => {
    const initialState = [];
    const [data, setData] = useState(initialState);
    const addData2 = async (fullUrl = data => data, restOfUrl="") => {
        console.log(fullUrl);
        console.log(data);
        console.log(restOfUrl)
        console.log(baseUrl)
        const res = await axios.get(`${baseUrl}${fullUrl}`);
        console.log(res.data)
        setData(data => [...data, res.data]);
        console.log(data)
    };

    return[data, addData2]

}

export default useAxios2;