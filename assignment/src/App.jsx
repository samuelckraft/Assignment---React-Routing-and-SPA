import { Route, Routes } from "react-router-dom"
import './App.css'
import NavigationBar from "./NavigationBar";
import Comics from "./Comics";
import CharacterDetails from "./CharacterDetails";
import BrowseCharacters from "./BrowseCharacters";
import NotFound from "./NotFound";
import HomePage from "./Home";

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/browse-characters/" element={<BrowseCharacters />}/> {/* if you go to the route (/add-customer) it takes you to the CustomerForm*/}
        {/* path=URL element=component*/}
        <Route path="/character-details/:id" element={<CharacterDetails />}/>
        <Route path="/comics" element={<Comics />}/>
        <Route  path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}


export default App