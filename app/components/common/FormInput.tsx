import { useEffect } from "react";
import { useControlField, useField, useIsSubmitting } from "remix-validated-form";

type FormInputProps = {
  name: string;
  label: string;
  clearOnSubmit: boolean
};

export const FormInput = ({ name, label, clearOnSubmit = false }: FormInputProps) => {
  const { error, defaultValue, getInputProps } = useField(name);

  const submitting = useIsSubmitting();
  const [value, setValue] = useControlField<string>(name);
  useEffect(() => {
    if (clearOnSubmit && submitting) {
      setValue(defaultValue);
    }
  }, [submitting, clearOnSubmit, defaultValue, setValue]);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...getInputProps({
          id: name,
          value,
          onChange: (e) => setValue(e.target.value),
        })}
      />
      {error && (
        <span className="error">{error}</span>
      )}
    </div>
  );
};
