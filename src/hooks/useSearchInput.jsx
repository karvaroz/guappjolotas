import { useState } from "react";

export const useSearchInput = (initialState = {}) => {
  const [value, setValue] = useState(initialState.value || "");

  const resetSearch = () => {
    setValue(initialState);
  };

  const handleInputSearchChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };
  return [value, handleInputSearchChange, resetSearch];
};
