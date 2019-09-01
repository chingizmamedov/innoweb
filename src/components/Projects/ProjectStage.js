import React from 'react'
import { connect } from 'react-redux';
import { doubleAddStage, changeStepId } from '../../actions/index.js'

function ProjectStage(props) {
    return (
        <div className="project__big">
        <div className="progress-bar">
            <div className="progress-bar__item" style={{
                background: '#00E5A8',
                boxShadow: '0px 1px 10px rgba(0, 229, 168, 0.6)',
                width: '60%',
                height: '100%'
            }}></div>
        </div>
        <span style={{position: 'absolute',  top: '32px', left: '190px'}} onClick={() => props.changeStepId(1)}>НАЗАД</span>
            <div className="project__type">
                <p onClick={()=> props.doubleAddStage(4, 'Новый проект')}>Новый проект</p>
                <p onClick={()=> props.doubleAddStage(4, 'Существуещий проект')}>Существуещий проект</p>
            </div>
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        doubleAddStage: ( stepId, stageId ) => dispatch(doubleAddStage(stepId, stageId)),
        changeStepId: (stepId) => dispatch(changeStepId(stepId))
    }
}

export default connect( null, mapDispatch)(ProjectStage)