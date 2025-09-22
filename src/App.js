import {Routes, Link, Route, Navigate} from 'react-router-dom'
import AllCoins from './Components/AllCoins'
import AllHighlights from './Components/AllHighlights'
import './App.css'

const App = () => (
  
    <>
      <Routes>
        <Route exact path="/" element={<AllCoins/>}/>
        <Route exact path="/allhighlights" element={<AllHighlights/>}/>
        
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </>
  )


export default App;
