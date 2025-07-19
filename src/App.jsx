import { useState } from "react"

function App() {
 const [colour , setColour] = useState("black")

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor: colour}}>
        <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2">
           <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white px-7 py-3 rounded-3xl">
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "red"}} onClick={() => setColour("red")}>Red</button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "green"}} onClick={() =>setColour("green")}>Green</button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "blue"}} onClick={() =>setColour("blue")}>Blue</button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "violet"}} onClick={() =>setColour("violet")}>Violet</button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "pink"}} onClick={() =>setColour("pink")}>Pink</button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "purple"}} onClick={() =>setColour("purple")}>Purple</button>

           </div>
        </div>
    </div>
  )
}

export default App
