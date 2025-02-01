import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetFullUrl } from "../services/shortenLinkApIs";

export const RedirectPage = () => {
  const navigate = useNavigate();
  const { shortUrlId } = useParams();
  const { data, isError } = useGetFullUrl(shortUrlId || "");

  useEffect(() => {
    if (data?.fullUrl) {
      window.location.href = data.fullUrl;
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      navigate("/not-found");
    }
  }, [isError]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-700 flex items-center">
        Redirecting...
      </h2>
    </div>
  );
};
