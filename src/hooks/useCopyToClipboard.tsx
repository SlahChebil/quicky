import { useState } from "react";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
    } catch (error : any) {
      setIsCopied(false);
    }
  };

  return { isCopied, copyToClipboard };
};
