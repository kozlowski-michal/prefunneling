import React from 'react'

import { Steps } from '../../../data/enums';
import { ArrowNext, ArrowBack } from './ButtonsSVG/ButtonsSVG';
import classesCSS from './DialogNav.module.css';

const dialogNav = (props) => {
    return (
        props.step != Steps.Done ? 
            <div className = {classesCSS.ButtonsContainer} >
                <div className = {classesCSS.ButtonLine} ></div>
                <button 
                    className = {classesCSS.ButtonNext}
                    type="submit" 
                >
                    <ArrowNext/>
                </button>
                
                { props.step != 0 ?
                    <button 
                        type="button"
                        className = {classesCSS.ButtonBack}
                        onClick = {props.goBack} 
                    > 
                        <ArrowBack/>
                    </button> : null 
                }
            </div> : null
    )
}

export default dialogNav;