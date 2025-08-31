import React from 'react'

const Movies = ({ movies, loading }) => {
  return (
    <>
    {
        loading ? (
            <h1>Loading...</h1>
        ): movies && movies.length > 0 ? (
            movies.map((movie, index) => (
                <div key={index}>
                    <h1>{movie.name}</h1>
                    <p>{movie.releaseDate}</p>
                    <p>{movie.category}</p>
                </div>
            ))
        ):(
            <h2 style= {{color:"red"}} >No Movies Found</h2>
        )
    }





    </>
  )
}

export default Movies
