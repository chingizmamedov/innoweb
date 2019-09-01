import React from 'react'
import { connect } from 'react-redux'
import { doubleAdd } from '../../actions/index.js'
import { Link } from "react-router-dom";

function ProjectType(props) {
    return (
        <div className="project__big">
            <div className="progress-bar">
                <div className="progress-bar__item" style={{
                    background: '#00E5A8',
                    boxShadow: '0px 1px 10px rgba(0, 229, 168, 0.6)',
                    width: '20%',
                    height: '100%'
                }}></div>
            </div>
            <div className="project__type">
                <p onClick={()=> props.doubleAdd(2, ['shopping', 'Интернет-магазин'])}>Интернет-магазин</p>
                <p onClick={()=> props.doubleAdd(2, ['landing', 'Landing Page'])}>Landing Page</p>
                <p onClick={()=> props.doubleAdd(2, ['corparative', 'Корпоративный сайт'])}>Корпоративный сайт</p>
                <p onClick={()=> props.doubleAdd(2, ['designe', 'Дизайн, Редизайн сайта'])}>Дизайн, Редизайн сайта</p>
                <p onClick={()=> props.doubleAdd(2, ['react', 'Сайт на React'])}>Сайт на React</p>
            </div>
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        doubleAdd: (stepId, projectName) => dispatch(doubleAdd(stepId, projectName))
    }
}

export default connect(null, mapDispatch)(ProjectType)