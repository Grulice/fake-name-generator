import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
    state = {
        curName: '',
    };

    handleGetName = () => {
        fetch('/generate-name')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ curName: data.name });
            });
    };

    render() {
        return (
            <div className='App'>
                <p>
                    Случайное имя:{' '}
                    {this.state.curName || 'Попробуйте нажать на кнопку'}
                </p>
                <button onClick={this.handleGetName}>Получить новое имя</button>
            </div>
        );
    }
}
