import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return (
    <>
      <button
        className="content-view"
        onClick={() => {
          console.log(1);
        }}
      >
        공유하기
      </button>
    </>
  );
}