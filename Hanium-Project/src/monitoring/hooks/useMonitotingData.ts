import { axiosInstance } from "@/axiosinstance";
import { useQuery } from "react-query";



async function getData(){
    const response = await axiosInstance.get('/ras/last');
    return response.data;
}





export function useMonitoringData() {
const { isLoading, isFetching, data, isError, error } = useQuery(
    ["monitoring","data"],
    getData,
    {
        refetchInterval: 1000,
        refetchIntervalInBackground: true,
    }
  );
  return { isLoading, isFetching, data, isError, error };
}