import { useMutation, useQuery } from "react-query";
import API from "../config/invoker";

interface IShortenUrlRequest {
  fullUrl: string;
}

interface IShortenUrlResponse {
  shortUrl: string;
}

export const useShortenUrl = () => {
  return useMutation<IShortenUrlResponse, Error, IShortenUrlRequest>({
    mutationFn: async (data) => {
      const response = await API.post<IShortenUrlResponse>(
        "/url/shorten",
        data
      );
      return response.data;
    },
  });
};

interface IGetUrlResponse {
  fullUrl: string;
}

export const useGetFullUrl = (shortUrlId: string) => {
  return useQuery<IGetUrlResponse, Error>({
    queryKey: ["fullUrl", shortUrlId],
    queryFn: async () => {
      const response = await API.get<IGetUrlResponse>(`/url/${shortUrlId}`);
      return response.data;
    },
    enabled: !!shortUrlId,
  });
};
