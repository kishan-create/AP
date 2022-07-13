import React from "react";

export default function substreamvalidation(values) {
  let errors = {};
  if (!values.stream_name.trim()) {
    errors.stream_name = "Stream name required";
  }
  if (!values.substream_name.trim()) {
    errors.substream_name = "Substream name required";
  }
 
  return errors;
}
