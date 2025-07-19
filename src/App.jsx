import { useState } from "react"

function App() {
  const [colour, setColour] = useState("black")

  return (
    <div className="w-full h-screen duration-500 transition-colors" style={{ backgroundColor: colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2">
        <div className="flex flex-wrap justify-center gap-5 px-7 py-3 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px] hover:shadow-red-500"
            style={{ backgroundColor: "red" }}
            onClick={() => setColour("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px] hover:shadow-green-500"
            style={{ backgroundColor: "green" }}
            onClick={() => setColour("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px] hover:shadow-blue-500"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColour("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px] hover:shadow-violet-500"
            style={{ backgroundColor: "violet" }}
            onClick={() => setColour("violet")}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px] hover:shadow-pink-400"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColour("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px] hover:shadow-purple-500"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColour("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
