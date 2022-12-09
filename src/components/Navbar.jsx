import { useState, useEffect } from 'react'
import { IoMoon, IoMoonOutline  } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'

const Navbar = () => {
	const [mode, setMode] = useState('Light')

   const changeMode = () => setMode(mode === 'Light' ? 'Dark' : 'Light') 

   useEffect(() => {
      document.body.setAttribute('data-theme', mode)
   }, [mode])
	return (
			<nav className='navbar'>
				<div className='navContainer'>
					<Link to={'/'}>
						<h1>Where in the world?</h1>
					</Link>
					<button onClick={changeMode}>
						{
							mode === 'Light' 
							? <IoMoon className='icon' /> 
							: <IoMoonOutline className='icon' />
						}
						{mode} Mode
					</button>
				</div>
			</nav>
	)
}

export default Navbar