import axios from "axios"
import {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../links.js'
import '../styles/details.scss'
import Info from "../components/Info.jsx"

const Details = () => {
	const navigate = useNavigate()
	const { name } = useParams()
	const [countryDetails, setCountryDetails] = useState(null)
	useEffect(() => {
		axios.get(searchByCountry(name))
			.then(({data}) => setCountryDetails(data[0]))
	}, [name])

	return (
		<div className='detailsContainer'>
			<button className='goBackBtn' onClick={() => navigate('/')}><IoArrowBack /> Go back</button>
			{countryDetails && (
				<Info {...countryDetails} navigate={navigate}/>
			)}
		</div>
		)
}

export default Details