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

    async getFilms() {
        const filmsUrl = 'https://ghibliapi.herokuapp.com/films';
        let res = await fetch(filmsUrl);
        let films = await res.json();
        this.setState({ films });
    }

    async getPeople() {
        const peopleUrl = 'https://ghibliapi.herokuapp.com/people';
        let res = await fetch(peopleUrl);
        let people = await res.json();
        this.setState({ people });
    }

    changeDisplay(display) {
        switch (display) {
            case 'people':
                this.setState({
                    display: <People people={this.state.people} />
                });
                break;
            case 'films':
                this.setState({ display: <Films films={this.state.films} /> });
                break;
            default:
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
