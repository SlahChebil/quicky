import withControlledInput from "../../HOC/withControlledInput";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const CustomInput = ({
  label,
  containerClassName,
  labelClassName,
  ...rest
}: InputProps) => {
  return (
    <div className={containerClassName}>
      {label && <label className={labelClassName}>{label}</label>}
      <input {...rest} />
    </div>
  );
};

const ControlledInput = withControlledInput(CustomInput);

export { ControlledInput, CustomInput };
