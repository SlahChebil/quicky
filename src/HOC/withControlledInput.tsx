import { ComponentType } from "react";
import { Controller, useFormContext } from "react-hook-form";

function withControlledInput<T extends { name: string }>(
  WrappedComponent: ComponentType<T>
) {
  return function ControlledInput(props: T) {
    const { control } = useFormContext();

    return (
      <Controller
        name={props.name}
        control={control}
        render={({ field }) => <WrappedComponent {...props} {...field} />}
      />
    );
  };
}

export default withControlledInput;
