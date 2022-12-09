import { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import Select from 'react-select'
import '../styles/controls.scss'

const options = [
	{value: 'Africa', label: 'Africa'},
	{value: 'America' ,label: 'America'},
	{value: 'Asia', label: 'Asia'},
	{value: 'Europe', label: 'Europe'},
	{value: 'Oceania', label: 'Oceania'}
]

const Controls = ({onHandle, countries}) => {
	const [search, setSearch] = useState('')
	const [region, setRegion] = useState('')
	
	useEffect(() => {
		let regVal = region?.label || ''
		onHandle(search, regVal)
	},[search, region, countries])

  return (
	 <div className='controlsContainer'>
		<label className='inputContainer'>
			<IoSearch />
			<input type="search" placeholder='Search for a Country' onChange={(e) => setSearch(e.target.value)} value={search} />
		</label>
		<Select 
			className='select'
			options={options} placeholder='Filter by Region' 
			isClearable isSearchable={false} 
			value={region} onChange={setRegion}
			styles={{
				control: (provided) => ({
					...provided,
					background: 'var(--colors-bg)',
					borderRadius: '0.5rem',
					padding: '0.25rem',
					border: 'none',
					boxShadow: 'var(--shadow)',
					height: '50px',
					cursor: 'pointer',
				}),
				option: (provided, state) => ({
					...provided,
					cursor: 'pointer',
					color: 'var(--colors-text)',
					backgroundColor: state.isSelected 
						? 'var(--colors-ui-base) !important' 
						: 'var(--colors-ui-bg) !important',
				})
			}}
		/>
	 </div>
  )
}

export default Controls