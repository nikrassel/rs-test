import React from "react";

type TextFieldProps = {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeHolder: string;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeHolder,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  function toggleShowPassword() {
    setShowPassword((prevState) => !prevState);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          id={name}
          value={value}
          onChange={(event) => handleChange(event)}
          name={name}
          className="form-control"
          placeholder={placeHolder}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleShowPassword}
          >
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;
