import React, { Component } from 'react'
import { connect } from "react-redux";

import { BrowserRouter as HashRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';
import { setTime } from './actions';
import Music from './images/aaa.mp3'


class App extends Component {
    constructor(props) {
        super(props)

        this.audio = new Audio(Music);

    }


    
    componentWillMount() {
        setTimeout(()=> {
            this.audio.play()
            console.log('play')
        }, 1000)
        
        

        fetch('http://innova-team.ru/bend/wp-json/wp/v2/posts/')
            .then((res)=> {
                return res.json()
            })
            .then(ans => {
                console.log('ans',ans)
            })
    }
    
    render() {
        
        return (
            <HashRouter>
              <Layout />    
            </HashRouter>
        )
    }
}

document.onmousemove = (event) => {
    const clientX = -event.clientX/23 + 'px';
    const clientY =  -event.clientY/23 + 'px';   
    // console.log('clients' + clientX + ' . ' + clientY);

    document.body.style.backgroundPosition = clientX + ' ' + clientY
}

const MapState = (state) => {
    return {}
}


export default connect(MapState)(App)
