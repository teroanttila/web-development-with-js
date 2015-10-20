import './client.css';

//console.log('kvaak sanoo ankka!');

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function getTussit () {
    return axios.get ('/api/tussi').then ((response) => {
        return response.data;
    });
}

console.log (getTussit());

const tussit = getTussit();

tussit.then((data) => console.log(data));

const HelloWorld = React.createClass ( {
    render: function () {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
})

const HelloWorldApp = React.createClass ( {
    getInitialState: function () {
        return {
            count: 0,
            name: 'Tero',
            names: []
        };
    },

    componentDidMount: function() {
        getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

    render: function () {
        const names = this.state.names;
        return (
            <div>
                <h1>Lusso</h1>

                {names.map(name => <HelloWorld name = {name}/> ) }

                <Counterizer
                    count = {this.state.count}
                    onIncrementCounter = {this.incrementCounter}
                />
                <Counter count = {this.state.count}/>
            </div>
        );
    },

    incrementCounter: function () {
        this.setState ( {
            count: this.state.count + 1
        });
    }
});

const Counterizer = React.createClass ( {
    render: function () {
        const {count, name, onIncrementCounter} = this.props;
        return (
            <div className = "tussi">
                {count}
                {name}
                <button onClick = {this.props.onIncrementCounter}>
                    MOAR!
                </button>
            </div>
        );
    }

} )

class Counter extends React.Component {
    render () {
        return (
            <div className = "mega-counter">
                {this.props.count}
            </div>
        );
    }
}


//ReactDOM.render(
//    <HelloWorld name="Puuppa"/>,
//    document.getElementById('app')
//);

const losot = ['Panu', 'Panun isä', 'Panun äiti'];
const laihdutetut = losot.map (loso => 'laihempi ' + loso);

const panunPerhe = laihdutetut.reduce((r, loso) => {
    return r + loso;
}, '');

console.log (losot);
console.log (laihdutetut);
console.log (panunPerhe);

const luvut = [5, 7, 3, 6, 2, 9];

const total = luvut.reduce ( (r, num) => {
    return r + num;
}, 0);

console.log(total);


ReactDOM.render (
    <HelloWorldApp/>,
    document.getElementById ('app')
);
