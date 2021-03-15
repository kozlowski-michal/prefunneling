import React from 'react'

import { Steps } from '../../data/enums';
import { ArrowNextSVG, ArrowBackSVG } from '../../../../data/svg/DialogButtons';
import classesCSS from './DialogNav.module.css';

const dialogNav = ({ step, onBack }) => {
    return (
        step != Steps.done ?
            <div className={classesCSS.ButtonsContainer} >
                {step != 0 ?
                    <button
                        type="button"
                        className={classesCSS.ButtonBack}
                        onClick={onBack}
                    >
                        <ArrowBackSVG />
                    </button> : null
                }

                <div className={classesCSS.ButtonLine} />
                <button
                    className={classesCSS.ButtonNext}
                    type="submit"
                >
                    <ArrowNextSVG />
                </button>
            </div> : null
    )
}

export default dialogNav;