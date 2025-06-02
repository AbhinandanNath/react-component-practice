import folderData from "./data.json";
import FileExplorer from "./FileExplorer";

function FileExplorereScreen() {
  return <FileExplorer folderData={folderData} />;
}

export default FileExplorereScreen;
