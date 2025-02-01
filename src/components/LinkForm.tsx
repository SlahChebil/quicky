import { FieldValues } from "react-hook-form";
import CustomButton from "../shared/components/CustomButton";
import { ControlledInput } from "../shared/components/CustomInput";
import FormWrapper from "../shared/components/FormWrapper";
import { useShortenUrl } from "../services/shortenLinkApIs";

interface LinkFormProps {
  onSucess: (link: string) => void;
}
export const LinkForm = ({ onSucess }: LinkFormProps) => {
  const { mutate, isLoading } = useShortenUrl();

  const handleFormSubmit = ({ link }: FieldValues) => {
    if (!link.trim()) return;
    mutate(
      { fullUrl: link },
      {
        onSuccess: (data) => {
          onSucess(data.shortUrl);
        },
      }
    );
  };
  return (
    <FormWrapper onSubmit={handleFormSubmit} defaultValues={{ link: "" }}>
      <ControlledInput
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        name="link"
        placeholder="Paste your long URL here..."
      />
      <CustomButton
        text="Shorten URL"
        type="submit"
        variant="gradient"
        loading={isLoading}
      />
    </FormWrapper>
  );
};
