import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.label === selected, // value of the new checked prop
    });
  });
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, label, checked, onChange, children }) => {
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name="radio-option"
        value={value}
        checked={checked} // Update visually based on checked
        onChange={() => onChange(value, label)} // Pass both value and label
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
