import React from "react";

export default function job_validation(values) {
  let errors = {};
  if (!values.job_id.trim()) {
    errors.job_id = "Job Id required";
  }
  if (!values.job_post.trim()) {
    errors.job_post = "Job Post required";
  }
  if (!values.job_skillset.trim()) {
    errors.job_skillset = "Job Skillset required";
  }
  if (!values.job_experience.trim()) {
    errors.job_experience = "Job Experience required";
  }
  if (!values.job_openings.trim()) {
    errors.job_openings = "Job Openings required";
  }
  if (!values.job_status.trim()) {
    errors.job_status = "job status required";
  }
  if (!values.job_date_open.trim()) {
    errors.job_date_open = "Job Date Open required";
  }
  if (!values.job_date_close.trim()) {
    errors.job_date_close = "Job Date Close required";
  }
  if (!values.job_location.trim()) {
    errors.job_location = "Job Location required";
  }
  if (!values.job_description.trim()) {
    errors.job_description = "Job Description required";
  }

  return errors;
}
