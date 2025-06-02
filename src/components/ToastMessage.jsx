import { useState, useRef, useEffect } from "react";

const toastMsgData = [
  { name: "Success", color: "green" },
  { name: "Error", color: "red" },
  { name: "Warning", color: " rgb(250, 175, 0)" },
  { name: "Info", color: "rgb(36, 168, 177)" },
  { name: "Neutral", color: "gray" },
];

export default function ToastMessage({ initialData = toastMsgData }) {
  const [buttonInfoData] = useState(initialData);
  const [toastMsgList, setToastMsgList] = useState([]);
  const timersRef = useRef({});

  let isDataPresent = Boolean(toastMsgList.length !== 0);

  // console.log(timersRef);

  // Add a new toast message and set up its auto-removal
  function updateToastMessage(buttonInfo) {
    setToastMsgList((prevList) => {
      const newToastData = [...prevList, buttonInfo];
      timersRef.current[buttonInfo.id] = setTimeout(
        () => removeToast(buttonInfo.id),
        5000
      );
      return newToastData;
    });
  }

  // Remove a toast and clear its timer
  function removeToast(id) {
    setToastMsgList((prev) => prev.filter((item) => item.id !== id));
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
  }

  // Cleanup timers on unmount
  useEffect(() => {
    let timers = timersRef.current;
    return () => {
      Object.values(timers).forEach(clearTimeout);
    };
  }, []);

  // Render the toast UI
  return (
    <div className="toast-box-container">
      <div className="toast-button-box">
        <ButtonPanel
          updateToastMessage={updateToastMessage}
          buttonData={buttonInfoData}
        />
      </div>
      {isDataPresent && (
        <div className="toast-button-box">
          {" "}
          <Toast toastData={toastMsgList} removeToast={removeToast} />
        </div>
      )}
    </div>
  );
}

// Panel of buttons to trigger different toast types
export function ButtonPanel({ updateToastMessage, buttonData }) {
  return (
    <>
      {buttonData.map((buttonInfo) => {
        return (
          <button
            className="button"
            key={buttonInfo.name}
            onClick={() =>
              updateToastMessage({ id: new Date().getTime(), ...buttonInfo })
            }
          >
            <span>{buttonInfo.name}</span>
          </button>
        );
      })}
    </>
  );
}

// Toast component to display all active toasts
export function Toast({ toastData, removeToast }) {
  return (
    <>
      {toastData.map(({ id, name, color }) => {
        return (
          <div
            className="toast-message-box applyBorder"
            key={id}
            style={{ boxShadow: `1px 1px 10px 2px ${color}` }}
          >
            <span>{name}</span>
            <span onClick={() => removeToast(id)}>X</span>
          </div>
        );
      })}
    </>
  );
}
