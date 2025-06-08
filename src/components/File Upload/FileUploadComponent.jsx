export default function FileUploadComponent({
  acceptedFormat,
  handleFileInput,
}) {
  function uploadFile(e) {
    let selectedFiles = e.target.files;
    handleFileInput((prevFileState) => {
      return [...prevFileState, ...selectedFiles];
    });
  }
  return (
    <div className="fileUploadComponent">
      <input
        onChange={uploadFile}
        type="file"
        id="docPicker"
        accept={acceptedFormat}
        multiple
      />
      <label htmlFor="docPicker">Browse Files</label>
    </div>
  );
}
