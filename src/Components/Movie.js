import React from 'react';

const IMAGE_API    = 'https://image.tmdb.org/t/p/w1280';

const voteColor = (vote) => {
    if(vote > 8) return 'green';
    if(vote > 6) return 'orange';
    return 'red';
}

function Movie({ title, poster_path, overview, vote_average }) {
    return (
        <div className="movie">
            <img src={IMAGE_API + poster_path} alt={title} />
            <div className="movie__info">
                <h3>{title}</h3>
                <p className={voteColor(vote_average)}>{vote_average}</p>
            </div>
            <div className="movie__overview">
                <h4>{title} Overview</h4>
                {overview}
            </div>
        </div>
    )
}

export default Movie
