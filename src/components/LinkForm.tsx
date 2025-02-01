import CustomButton from "../shared/components/CustomButton";
import { ControlledInput } from "../shared/components/CustomInput";
import FormWrapper from "../shared/components/FormWrapper";


interface LinkFormProps {
  handleSubmit: (link: string) => void;
}
export const LinkForm = ({ handleSubmit }: LinkFormProps) => {
  const handleFormSubmit = (data: any) => {
    handleSubmit(data.link);
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit} defaultValues={{ link: "" }}>
      <ControlledInput
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        name="link"
        placeholder="Paste your long URL here..."
      />
      <CustomButton text="Shorten URL" type="submit" variant="gradient" />
    </FormWrapper>
  );
};
