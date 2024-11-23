import "./App.css";
import { useHomeStore } from "./zustand/useHomeStore";

function App() {
  const { count, Increment } = useHomeStore();

  return (
    <>
      <div className="w-full h-screen bg-black flex item-centre justify-center  text-white ">
        <button
          className="border rounded-full w-fit h-fit px-4 py-2 self-center"
          onClick={Increment} 
        >
          count : {count}{" "}
        </button>
      </div>
    </>
  );
}

export default App;
