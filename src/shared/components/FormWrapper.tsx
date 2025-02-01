import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface FormWrapperProps {
  onSubmit: SubmitHandler<FieldValues>;
  defaultValues: FieldValues;
  children: ReactNode;
  className?: string;
}

export default function FormWrapper({
  onSubmit,
  defaultValues = {},
  children,
  className = "",
}: FormWrapperProps) {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
