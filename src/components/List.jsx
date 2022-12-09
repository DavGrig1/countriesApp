import React from 'react'
import '../styles/list.scss'

const List = ({children}) => {
  return (
	 <div className='listContainer'>{children}</div>
  )
}

export default List