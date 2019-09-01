import React, { Component } from 'react'
import { Link, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import ProjectWrapper from '../Projects/ProjectWrapper';
import projectList from '../../api/ProjectCosts/projectcost'
import { changeStepId } from '../../actions/index.js'


function Projects({ match, ...props }) {
    return (
      <div className="container container__project">
        <ul className="form-btn__list">
          <li className="form-btn__active"  onClick={() => {
              props.stepId >=2 ? props.changeStepId(1) : null
            }
          }>
            <Link to={`${match.url}`}>1. ТИП ПРОЕКТА</Link>
            <span style={{
              fontSize: '13px',
              lineHeight: '24px',
              marginTop: '4px'
            }}>{props.projeType.length !== 0 ? props.projeType[1] : 'НЕ ВЫБРАНО'}</span>
          </li>
          <li className={props.stepId >=2 ? "form-btn__active" : "form-btn"} onClick={() => {
              props.stepId >2 ? props.changeStepId(2) : null
            }
          }>
            <Link to={`${match.url}`}>2. Бюджет</Link>
            {props.stepId >=2 ? <span style={{
              fontSize: '13px',
              lineHeight: '24px',
              marginTop: '4px'
            }}>{props.budget.length !== 0 ? 'от ' + props.budget[0] + ', до ' +  props.budget[1] : 'НЕ ВЫБРАНО'}</span> : null }
            
          </li>
          <li className={props.stepId >=3 ? "form-btn__active" : "form-btn"} onClick={() => {
              props.stepId >3 ? props.changeStepId(3) : null
            }
          }>
            <Link to={`${match.url}`}>3. этап проекта</Link>
            {props.stepId >=3 ? <span style={{
              fontSize: '13px',
              lineHeight: '24px',
              marginTop: '4px'
            }}>{props.projectStage.length !== 0 ? props.projectStage : 'НЕ ВЫБРАНО'}</span> : null }
          </li>
          <li className={props.stepId >=4 ? "form-btn__active" : "form-btn"} onClick={() => {
              props.stepId >4 ? props.changeStepId(4) : null
            }
          }>
            <Link to={`${match.url}`}>4. когда начинаем</Link>
            {props.stepId >=4 ? <span style={{
              fontSize: '13px',
              lineHeight: '24px',
              marginTop: '4px'
            }}>{props.startTime.length !== 0 ? props.startTime : 'НЕ ВЫБРАНО'}</span> : null }
          </li>
          <li className={props.stepId == 5 ? "form-btn__active" : "form-btn"}>
            <Link to={`${match.url}`}>5. Обратная связь</Link>
          </li>
        </ul>
        <ProjectWrapper />    
      </div>
    );
  }


const matToProps = (store) => {
  console.log(store)
  return {
    stepId: store.projectReducer.stepId,
    projeType: store.projectReducer.projectType,
    budget: store.projectReducer.budget,
    projectStage: store.projectReducer.projectStage,
    startTime: store.projectReducer.startTime
  }

}

const mapToDispath = (dispatch) => {

  return {
    changeStepId: (stepId) => dispatch(changeStepId(stepId)) 
  }
  
}

export default withRouter(
  connect( matToProps, mapToDispath )(Projects)
)