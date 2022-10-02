import { useQuery, useQueryClient, UseQueryResult } from "react-query";
import axios, { AxiosResponse } from "axios";
import {
  InitialQueryGetQueryDataInterface,
  initialQueryInterface,
} from "../Interface/InitialQueryInterface";

const fetchData = ({ queryKey }: any) => {
  const countryName = queryKey[1];
  return axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
};

export const useCountryData = (countryName: string | undefined) => {
  const queryClient = useQueryClient();
  return useQuery(["country", countryName], fetchData, {
    initialData: (): AxiosResponse<any, any> | Object | undefined => {
      const initData:UseQueryResult = queryClient.getQueryData<InitialQueryGetQueryDataInterface>("countries")
        ?.data.find((value: initialQueryInterface) => value.name.common === countryName);
      if (initData) {
        return {
          data: initData,
        };
      } else {
        return undefined;
      }
    },
  });
};
