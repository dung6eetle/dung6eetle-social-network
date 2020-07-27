import React from "react";

export const required = (value) => {
  if (value) return undefined;
  return "required";
};
export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `максимально ${maxLength} символов`;
  return undefined;
};
