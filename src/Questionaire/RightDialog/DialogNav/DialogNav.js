import React from 'react'

import { Steps } from '../../../data/enums';
import { ArrowNextSVG, ArrowBackSVG } from '../../../data/svg/DialogButtons';
import classesCSS from './DialogNav.module.css';

const dialogNav = (props) => {
    return (
        props.step != Steps.Done ? 
            <div className = {classesCSS.ButtonsContainer} >
                { props.step != 0 ?
                    <button 
                        type="button"
                        className = {classesCSS.ButtonBack}
                        onClick = {props.goBack} 
                    > 
                        <ArrowBackSVG/>
                    </button> : null 
                }

                <div className = {classesCSS.ButtonLine} ></div>
                <button 
                    className = {classesCSS.ButtonNext}
                    type="submit" 
                >
                    <ArrowNextSVG/>
                </button>
            </div> : null
    )
}

export default dialogNav;