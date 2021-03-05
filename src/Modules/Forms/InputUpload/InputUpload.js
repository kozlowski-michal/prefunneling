import React from 'react';
import classesCSS from './InputUpload.module.css';
import { UplaodArrowSVG, UploadArrowBottomSVG } from './InputUploadSVG';

const inputUpload = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.dashboard;
    return (
        <div className={style}>
            {props.label ? <div className={classesCSS.InputLabel}>
                {props.label}
            </div> : null}
            <div className={classesCSS.uploadIconContainer}>
                <UplaodArrowSVG />
                <UploadArrowBottomSVG />
            </div>
            <div className={classesCSS.uploadTextContainer}>
                54KB
            </div>
            <div className={classesCSS.InputContainer}>
                Benz image
            </div>
        </div>
    )
}

export default inputUpload;