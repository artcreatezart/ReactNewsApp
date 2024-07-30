import {Routes, Route} from 'react-router-dom'
// Page/Component imports 
import Home from '../components/pages/Home'
import SingleArticle from '../components/pages/SingleArticle'
import AboutMe from '../components/pages/AboutMe'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/article/:id' element={<SingleArticle/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
    </Routes>
  )
}

export default Links
