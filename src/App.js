import React, { Component } from 'react'
import { connect } from "react-redux";

import { BrowserRouter as HashRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';
import { setTime } from './actions';
import Music from './images/aaa.mp3';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            music: false
        }
        this.audio = new Audio(Music);

    }

    playMusic = () => {
        this.setState({
            music: !this.state.music
        })
        this.state.music ? this.audio.pause() : this.audio.play()
    }
    

    componentWillMount() {
        window.onload = () => {
            this.audio.loop = true;
            this.audio
        }
        

        fetch('http://innova-team.ru/bend/wp-json/wp/v2/posts/')
            .then((res)=> {
                return res.json()
            })
            .then(ans => {
                // console.log('ans',ans)
            })
    }
    
    render() {
        
        return (
            <HashRouter>
              <Layout />
              <div className="music-icon" onClick={this.playMusic.bind(this)}>
                {
                    this.state.music ? <img src="assets/icon/av/volume_up_24px_outlined.png" alt=""/> :
                    <img src="assets/icon/av/volume_off_24px_outlined.png" alt=""/>
                }
                  
                  
              </div>
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
