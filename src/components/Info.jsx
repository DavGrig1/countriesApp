import React from 'react'
import '../styles/info.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { filterByCode } from '../links'

const Info = (props) => {

	const {
		name,
		nativeName,
		flag,
		capital,
		population,
		region,
		subregion,
		topLevelDomain = [],
		currencies = [],
		languages = [],
		borders = [],
		navigate,
	} = props

	const [borderCountries, setBorderCountries] = useState([])
	useEffect(() => {
		if(borders.length > 0)
				axios.get(filterByCode(borders)).then(({data}) => {
					setBorderCountries(data.map(c => c.name))
				})
	},[borders])

  return (
	<div className='infoContainer'>
		<img src={flag} alt='/' className='image'/>

		<div className='details'>
			<h1 className='title'>{name}</h1>
			
			<div className='lists'>
				<ul className='listOne list'>
					<li><b>Native Name: </b>{nativeName}</li>
					<li><b>Population: </b>{population}</li>
					<li><b>Region: </b>{region}</li>
					<li><b>Sub Region: </b>{subregion}</li>
					<li><b>Capital: </b>{capital}</li>
				</ul>

				<ul className='listTwo list'>
					<li><b>Top Level Domain: </b>{topLevelDomain.map(d => `${d} `)}</li>
					<li><b>Currencies: </b>{currencies.map(c => `${c.code} `)}</li>
					<li><b>Languages: </b>{languages.map(l => `${l.name} `)}</li>
				</ul>
			</div>

			<div className='meta'>
				<b>Border Countries</b>
				{!borders.length ? (
					<span>There is no border countries</span>
				): (
					<div className='borderButtons'>
						{borderCountries.map(b => (
							<button key={b} onClick={() => navigate(`/country/${b}`)} className='borderButton'>{b}</button>
						))}
					</div>
				)}
			</div>
		</div>
	</div>
  )
}

export default Info