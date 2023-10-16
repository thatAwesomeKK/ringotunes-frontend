import React from "react";
import UploadForm from "@/components/Forms/UploadForm";
import ReduxProvider from "@/components/Providers/ReduxProvider";

const Upload = () => {
  return (
    <ReduxProvider>
      <UploadForm />
    </ReduxProvider>
  );
};

export default Upload;
