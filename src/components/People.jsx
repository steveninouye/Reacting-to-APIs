import React, { Fragment } from 'react';

const People = (props) => {
    return props.people.map((person) => {
        return (
            <Fragment key={person.id}>
                <div className="person-card">
                    <h3>Name: {person.name}</h3>
                    Gender: {person.gender}
                    <br />
                    Age: {person.age}
                    <br />
                    <a href={person.url}>Link</a>
                </div>
                <hr />
            </Fragment>
        );
    });
};

export default People;
