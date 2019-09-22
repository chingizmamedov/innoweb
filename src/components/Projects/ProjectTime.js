import React from 'react'
import { connect } from 'react-redux';
import { doubleAddTime, changeStepId } from '../../actions/index.js'

function ProjectTime(props) {
    return (
        <div className="project__big">
        <div className="progress-bar">
            <div className="progress-bar__item" style={{
                background: '#00E5A8',
                boxShadow: '0px 1px 10px rgba(0, 229, 168, 0.6)',
                width: '80%',
                height: '100%'
            }}></div>
        </div>
        <span style={{position: 'absolute', top: '32px', left: '190px'}} onClick={() => props.changeStepId(1)}>НАЗАД</span>
            <div className="project__type">
                <p onClick={()=> props.doubleAddTime(5, 'Немедленно')}>Немедленно</p>
                <p onClick={()=> props.doubleAddTime(5, 'В течении недели')}>В течении недели</p>
                <p onClick={()=> props.doubleAddTime(5, 'В течении месяца')}>В течении месяца</p>
                <p onClick={()=> props.doubleAddTime(5, 'непринципиально')}>непринципиально</p>
            </div>
        </div>
    )
}


const mapDispatch = dispatch => {
    return {
        doubleAddTime: ( stepId, timeId ) => dispatch(doubleAddTime(stepId, timeId)),
        changeStepId: (stepId) => dispatch(changeStepId(stepId))
    }
}

export default connect( null, mapDispatch)(ProjectTime)