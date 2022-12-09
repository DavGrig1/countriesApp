import List from '../components/List'
import Card from '../components/Card'
import Controls from '../components/Controls'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

const HomePage = ({ countries }) => {
	const navigate = useNavigate()
	const [filtered, setFiltered] = useState(countries)
	const redirectToDetails = (country, data) => {
		navigate(`country/${country}`, { state: data });
   }

	const handleSearch = (search, region) => {
		let data = [...countries]
		if(region) {
			data = countries.filter(c => c.region.includes(region))
		}
		if(search) {
			data = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
		}

		setFiltered(data)
	}

  return (
	 <>
		<Controls onHandle={handleSearch} countries={countries}/>
      <List>
			{filtered.map(c => {
				const countryInfo = {
					img: c.flags.png,
					name: c.name,
					info: [
						{title: 'Population', description: c.population.toLocaleString()},
						{title: 'Region', description: c.region},
						{title: 'Capital', description: c.capital}
					], 
				}
				return <Card key={c.name} onClick={() => redirectToDetails(c.name, c)} {...countryInfo}/>
				})
			}
      </List>
	 </>
  )
}

export default HomePage