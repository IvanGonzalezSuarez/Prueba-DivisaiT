import axios from "axios";
import { useQuery } from "react-query";
import { LocationTypes } from "../types/types";

export const useApis = (API: string) => {
  const { isLoading, error, data } = useQuery<LocationTypes>("repoData", () =>
    axios.get(API).then((response) => response.data)
  );
  
  return { isLoading, error, data };
};
