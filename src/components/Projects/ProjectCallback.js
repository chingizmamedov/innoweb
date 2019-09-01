import React from 'react'
import { changeStepId } from '../../actions/index.js'
import { connect } from 'react-redux';

function ProjectCallback(props) {
    return (
        <div className="project__big">
            <div className="progress-bar">
                <div className="progress-bar__item" style={{
                    background: '#00E5A8',
                    boxShadow: '0px 1px 10px rgba(0, 229, 168, 0.6)',
                    width: '100%',
                    height: '100%'
                }}></div>
            </div>
            <span style={{position: 'absolute', top: '32px', left: '190px'}} onClick={() => props.changeStepId(1)}>НАЗАД</span>
            <div className="project_callback">
                <form>
                Меня зовут <input style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        minWidth: '50px',
                        width: '50px'
                }} placeholder="Имя" onChange={(e)=> e.target.style.width = ((e.target.value.length + 1) * 11) + 'px'} />, мне нужно разработать <input style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        minWidth: '50px',
                        width: '100px'
                }} onLoad={(e)=> e.target.style.width = ((e.target.value.length + 1) * 11) + 'px'} value={props.projectType} />. Моя почта <input style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        minWidth: '50px'
                }} type="mail" placeholder="suka@email.com" onChange={(e)=> e.target.style.width = ((e.target.value.length + 1) * 11) + 'px'} />, телефон <input style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        minWidth: '50px'
                }} type="tel" placeholder="+7 (___) ___-__-__" /> Я хочу {props.startTime} начать существующий проект, с бюждетом от {props.budget[0]} {props.budget[1] && `до ${props.budget[1]} тысяч`} 
                </form>
            </div>
        </div>
    )
}

const matToProps = (store) => {

    return {
        projectType: store.projectReducer.projectType[1],
        startTime: store.projectReducer.startTime,
        budget: store.projectReducer.budget
    }

}

const mapDispatch = dispatch => {
    return {
        changeStepId: (stepId) => dispatch(changeStepId(stepId))
    }
}

export default connect( matToProps, mapDispatch )(ProjectCallback)