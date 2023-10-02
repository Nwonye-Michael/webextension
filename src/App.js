import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className="App  bg-transparent w-fit h-fit flex flex-col ">
      <Header />

      <video
        src=""
        controls
        className="min-h-[40vh] h-[70vh] min-w-[80vw] border border-black m-10 "
      ></video>

      <Footer />
    </div>
  )
}

export default App
