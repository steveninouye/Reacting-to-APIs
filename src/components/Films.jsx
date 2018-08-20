import React, { Fragment } from 'react';

const Films = (props) => {
    return props.films.map((film) => {
        return (
            <Fragment key={film.id}>
                <div className="film-card">
                    <h3>{film.title}</h3>
                    Director: {film.director}
                    <br />
                    Producer: {film.producer}
                    <br />
                    Release Date: {film.release_date}
                    <br />
                    Rating: {film.rt_score}
                    <br />
                    <p>{film.description}</p>
                </div>
                <hr />
            </Fragment>
        );
    });
};

export default Films;
