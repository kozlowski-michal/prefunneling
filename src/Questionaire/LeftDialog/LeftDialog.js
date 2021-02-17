import React from 'react';
import { HaveWebsite } from '../dialogSchemas/enums';

import classesCSS from './LeftDialog.module.css'

const leftDialog = (props) => {

    const LeftDialogSchemas = (step, data) => {
        let answer;

        switch (step) {
            case 0:
                answer = <p>Okay!<br/>Let’s get started. 🤘️</p>;
                break;
            case 1:
                answer = <p>Hey {data.name}!<br/> Nice to meet you!</p>;
                break;
            case 2:
                answer = data.whatNeed.length == 3 ? <p>All of them, makes sense! 💪</p> :
                    data.whatNeed.length == 2 ? <p>{data.whatNeed?.join(' and ')}, makes sense! 💪</p> :
                        <p>{data.whatNeed}, makes sense! 💪</p>
                break;
            case 3:
                answer = data.haveWebsite === HaveWebsite.NO ? <p>No website yet, okay.<br/>No problem! 💪</p> :
                    data.haveWebsite === HaveWebsite.SOON ? <p>Website soon.<br/>Great! 💪</p> :
                        <p>Website present.<br/>Great! 💪</p>
                break;
            case 4:
                answer = <p>That’s a big team already,exciting! 💪</p>;
            case 5:
                //break;
            default: answer = <p>No text for that step :(</p>
        }
        return  answer;
    }

    let summary = (<p>Marco Dzierma</p>)

    if (props.step > 1) {
        summary = (<ul>
            Selections:
            {props.dialogData.whatNeed.map( (item, index) => {
                return (<li key={index} className = {classesCSS.fromCheckbox} >{item}</li>)
            })}
            {props.dialogData.haveWebsite ? <li key="haveWebsite" className = {classesCSS.fromRadio} >{props.dialogData.haveWebsite}</li> : null}
        </ul>);
    } 

    return (
        <React.Fragment>
            <strong>{LeftDialogSchemas(props.step, props.dialogData)}</strong>
            <hr style={{width: "70%", height: "1px", backgroundColor: "#E5E5E5", color: "#E5E5E5", border: "none"}}/>
            {summary}
        </React.Fragment>
    )
}

export default leftDialog;