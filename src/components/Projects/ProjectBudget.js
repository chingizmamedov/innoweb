import React, { Component } from 'react'
import apiProjectType from '../../api/ProjectCosts/projectcost'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { doubleAddBudget, changeStepId } from '../../actions/index.js'



class ProjectBudget extends React.Component {
        constructor(props) {
            super(props)
        }
    
render(){
    let priceList



    for (var key in apiProjectType) {
        if(key === this.props.projectType) {
            
            priceList = apiProjectType[key]

        }
    }

    const listBlock = (<div className="project__type">
            <p onClick={()=> this.props.doubleAdd(3, [priceList.start.from, priceList.start.to])}>от {priceList.start.from} до {priceList.start.to}<br /> <span>{priceList.start.subtext}</span></p>
            <p onClick={()=> this.props.doubleAdd(3, [priceList.minimal.from, priceList.minimal.to])}>от {priceList.minimal.from} до {priceList.minimal.to}<br /> <span>{priceList.minimal.subtext}</span></p>
            <p onClick={()=> this.props.doubleAdd(3, [priceList.middle.from, priceList.middle.to])}>от {priceList.middle.from} до {priceList.middle.to}<br /> <span>{priceList.middle.subtext}</span></p>
            <p onClick={()=> this.props.doubleAdd(3, [priceList.bissunez.from])}>от {priceList.bissunez.from}<br />  <span>{priceList.bissunez.subtext}</span>...</p>  
        </div>)




    return (
        <div className="project__big">
        <div className="progress-bar">
            <div className="progress-bar__item" style={{
                background: '#00E5A8',
                boxShadow: '0px 1px 10px rgba(0, 229, 168, 0.6)',
                width: '40%',
                height: '100%'
            }}></div>
        </div>
        <span style={{position: 'absolute', top: '32px', left: '190px'}} onClick={() => this.props.changeStepId(1)}>НАЗАД</span>
            {listBlock}
        </div>
    )
}
    
}


const matToProps = (store) => {
    console.log('store ion', store)
    return {
      projectType: store.projectReducer.projectType[0]
    }
  }

const mapDispatch = dispatch => {
    return {
        doubleAdd: (stepId, budgetCost) => dispatch(doubleAddBudget(stepId, budgetCost)),
        changeStepId: (stepId) => dispatch(changeStepId(stepId))
    }
}

export default withRouter(
    connect(matToProps, mapDispatch)(ProjectBudget)
)