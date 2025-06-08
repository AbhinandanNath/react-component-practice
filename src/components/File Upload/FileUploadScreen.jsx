const supportedFormats =
  ".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

import FilePreviewComponent from "./FilePreviewComponent";
import FileUploadComponent from "./FileUploadComponent";
import { useState } from "react";

function FileUploadScreen() {
  const [files, setFiles] = useState([]);
  return (
    <div>
      <FileUploadComponent
        acceptedFormat={supportedFormats}
        files={files}
        handleFileInput={setFiles}
      />
      <FilePreviewComponent fileData={files} removeFile={setFiles} />
    </div>
  );
}

export default FileUploadScreen;
