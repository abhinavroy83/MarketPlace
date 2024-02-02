import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="my-3">
      {label && (
        <label
          className=" text-xl text-center inline-block mb-1 pl-1 ml-auto"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-2 w-full rounded-md border-2 border-gray-300 bg-white  text-black outline-none focus:bg-gray-50 duration-200   ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
