import React, { Component } from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main';

export default class Layout extends Component {
    render() {
        return (
            <main style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100vh'
            }}>
                <Header />
                <Main />
            </main>
        )
    }
}
