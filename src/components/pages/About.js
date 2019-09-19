import React, { Component } from 'react'
import ManList from '../About/ManList'
import ManWrap from '../About/ManWrap'
import Mans from '../../api/Man/ManDb'
import Svg from '../About/Svg'



export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countMan :null,
            currMan: 0,
            designe: 0,
            front: 0,
            back: 0,
            speak: 0,
            proje: 0
        }
        this.MANS = Mans
        this.changeCurMan = this.changeCurMan.bind(this)
        this.changeAbility = this.changeAbility.bind(this)
        
    }

    componentWillMount() {
        
        

        this.setState({
            countMan: this.MANS.length
        })

        this.changeAbility(this.MANS[this.state.currMan].ability.designe, this.MANS[this.state.currMan].ability.front, this.MANS[this.state.currMan].ability.back, this.MANS[this.state.currMan].ability.speak, this.MANS[this.state.currMan].ability.proje )

        console.log('componentWillMountsss', this.MANS[0].ability.designe)
    }

    componentDidMount() {
        console.log('componentDidMount', this.state)
    }

    componentDidUpdate() {
        console.log('componentDidMount', this.state)
    }

    changeCurMan(num, designe, front, back, speak, proje) {
        this.setState({
            currMan: num
        })
    }

    changeAbility(designe, front, back, speak, proje) {
        this.setState({
            designe: designe,
            front: front,
            back: back,
            speak: speak,
            proje: proje
        })
    }
    render() {
        return (
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <ManList changeAbility={this.changeAbility} changeCurMan={this.changeCurMan} mans={this.MANS} currMan={this.state.currMan}/>
                <Svg allStete={this.state} top={this.state.top} />
                <ManWrap countMan = {this.state.countMan} currMan={this.state.currMan}/>
            </div>
        )
    }
}
