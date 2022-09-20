import axios from "axios";
import { useQuery } from "react-query";
import { UseQueryResult } from "react-query/types/react";


const fetchData = () => {
    return axios.get("https://restcountries.com/v3.1/all");
}

export const useAllData = (): UseQueryResult => {
    return useQuery("countries",fetchData,{
        refetchOnWindowFocus: false,
        cacheTime: 900000000
    })
}