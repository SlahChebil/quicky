import { Link } from "lucide-react"; // Importing an icon
import { useState } from "react";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";
import { LinkForm } from "./components/LinkForm";

export default function App2() {
  const [shortUrl, setShortUrl] = useState("");
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const shortenUrl = (url: string) => {
    if (url.trim() === "") return;
    setShortUrl(
      `https://shortex.ly/${Math.random().toString(36).substr(2, 6)}`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <div className="flex justify-center items-center mb-3">
          <Link className="w-12 h-12 text-blue-500" />
          <h1 className="text-3xl font-semibold text-blue-500">Shortex</h1>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Shorten Your URL
        </h2>

        <LinkForm handleSubmit={shortenUrl} />

        {shortUrl && (
          <div className="mt-4">
            <div
              onClick={() => {
                copyToClipboard(shortUrl);
              }}
              className="p-3 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 text-center text-gray-700 cursor-pointer hover:bg-gray-200 transition"
            >
              {shortUrl}
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              {isCopied ? "Copied!" : "Click to copy to clipboard"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
