import React from 'react'

function AnimeCard({anime_name,url}) {
  return (
    <div className='card'>
      <h3>{anime_name}</h3>
      <img  src={url} alt={anime_name}/>
    </div>
  )
}

export default AnimeCard
