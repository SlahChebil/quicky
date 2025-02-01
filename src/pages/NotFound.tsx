import { useNavigate } from "react-router-dom";
import CustomButton from "../shared/components/CustomButton";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops!</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        URL Shortened Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        The shortened URL you’re looking for doesn’t exist or might have
        expired. But no worries, you can create a new one in seconds!
      </p>

      <CustomButton
        text="Create New Short URL"
        onClick={() => navigate("/")}
        variant="gradient"
        className="max-w-md"
      />
    </div>
  );
};
