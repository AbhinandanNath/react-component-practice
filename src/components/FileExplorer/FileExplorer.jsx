import { useState } from "react";

function FileExplorer({ folderData }) {
  const [showChildFolders, setShowChildFolders] = useState(false);

  function handleOpenChildren() {
    setShowChildFolders((prevState) => !prevState);
  }
  return (
    <div className="explorer-container">
      <span onClick={handleOpenChildren}>
        {folderData.type === "folder" ? (showChildFolders ? "📂" : "📁") : "📄"}
        <span>{folderData.name}</span>
      </span>
      {showChildFolders &&
        folderData?.children?.map((childData, index) => {
          return (
            <FileExplorer key={index + childData.name} folderData={childData} />
          );
        })}
    </div>
  );
}

export default FileExplorer;
