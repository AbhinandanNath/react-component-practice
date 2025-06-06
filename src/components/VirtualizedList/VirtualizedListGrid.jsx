import { FixedSizeList as List } from "react-window";

const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
function VirtualizedList() {
  return (
    <List itemSize={35} itemCount={data.length} height={400} width="30rem">
      {({ index, style }) => (
        <div
          style={{
            ...style, // Include the default style from react-window
            backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff", // Alternate row colors
            borderBottom: "1px solid #ddd", // Add a border
          }}
        >
          <span className="virtualized-list-row"> {data[index]}</span>
        </div>
      )}
    </List>
  );
}
export default VirtualizedList;
