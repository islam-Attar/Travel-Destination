import Home from "./components/home/Home"
import './App.css';
import './components/tours/Tours.css'
import tourData from "./data/db.json"


function App() {
  return (
    <>
      <Home data={tourData} />
    </>
  )
}

export default App;