import './App.css';
import Slides from './Components/Slides';

function App() {
  return (
    <div className=" flex justify-center items-center bg-[#023047] w-screen h-[100%] text-[white]">
      <div className="flex items-center flex-col w-3/4 rounded-lg border-2  m-20 p-6 border-[#ffb703] bg-[#ffb703] ">
        <div>
          <h1 className="text-3xl font-bold text-center mb-12"> Tech Buddy</h1>
        </div>

        <Slides />
      </div>
    </div>
  );
}

export default App;
