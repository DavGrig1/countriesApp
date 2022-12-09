import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import { ALL_COUNTRIES } from './links'

const App = () => {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		axios.get(ALL_COUNTRIES).then(res => setCountries(res.data))
	}, [])

   return (
      <>
         <Navbar />
         <div className='container'>
            <Routes>
               <Route path='/countriesApp/' 
                  element={<HomePage countries={countries} />}
               />
               
               <Route path='countriesApp/country/:name' 
                  element={<Details />} 
               />
               
               <Route path='*' 
                  element={<NotFound />} 
               />
            </Routes>
         </div>
      </>
   )
}

export default App
