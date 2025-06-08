import React from "react";

function FilePreviewComponent({ fileData, removeFile }) {
  function removeSelectedFile(selectedFileName) {
    console.log(selectedFileName);
    removeFile((prevFileState) => {
      return prevFileState.filter((file) => {
        return file.name != selectedFileName;
      });
    });
  }
  return (
    <>
      {fileData.map((file, index) => {
        let fileName = file.name.split(".")[0];
        return (
          <div
            className="fileUpload-preview"
            key={file.lastModified + "-" + index}
          >
            <span>{fileName}</span>
            <span
              className="fileUpload-preview-remove"
              onClick={() => removeSelectedFile(file.name)}
            >
              &times;
            </span>
          </div>
        );
      })}
    </>
  );
}

export default FilePreviewComponent;
