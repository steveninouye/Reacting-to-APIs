import React, { Component, Fragment } from 'react';
import Films from './Films';
import People from './People';
import 'isomorphic-fetch';
import es6Promise from 'es6-promise';
es6Promise.polyfill();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            display: false
        };
    }

    componentDidMount() {
        this.getFilms();
        this.getPeople();
    }

    getFilms() {
        const filmsUrl = 'https://ghibliapi.herokuapp.com/films';
        fetch(filmsUrl)
            .then((res) => res.json())
            .then((films) => {
                console.log(films);
                this.setState({ films });
            });
    }

    getPeople() {
        const peopleUrl = 'https://ghibliapi.herokuapp.com/people';
        fetch(peopleUrl)
            .then((res) => res.json())
            .then((people) => this.setState({ people }));
    }

    changeDisplay(display) {
        if (display === 'people') {
            this.setState({ display: <People people={this.state.people} /> });
        } else if (display === 'films') {
            this.setState({ display: <Films films={this.state.films} /> });
        } else {
            this.setState({ display: false });
        }
    }

    render() {
        return (
            <Fragment>
                <header>
                    <h1>Hello from App</h1>
                    <button onClick={() => this.changeDisplay('films')}>
                        Load Films
                    </button>
                    <button onClick={() => this.changeDisplay('people')}>
                        Load People
                    </button>
                    <button onClick={() => this.changeDisplay('')}>
                        Clear
                    </button>
                </header>
                {this.state.display}
            </Fragment>
        );
    }
}

export default App;
