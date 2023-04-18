export default function InputField({
  label,
  fieldType,
  value,
  handleChange
}: InputFieldProps) {
  // TODO: update fieldType to use a proper Type

  return (
    <div className="field-row">
      <div className="label">{label}</div>
      <div className="field">
        <input
          type={fieldType}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  fieldType: string;
  value: string;
  handleChange(value: string): void;
}
