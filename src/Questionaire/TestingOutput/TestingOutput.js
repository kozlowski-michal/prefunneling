import React from 'react';

const testingOutput = (props) => {
    let output = props.data.map( (dataItem, index) => {
        let dataOutput = [];

        Object.keys(dataItem).map( (key) => {
            dataOutput.push(<span key = {key + index}>{key}: {dataItem[key]} <br/></span>);
        });

        return (
            <React.Fragment key = {index} >
                <p>After step {index} added:<br/>
                {dataOutput}</p>
            </React.Fragment>
        )
    });

    return (
        <React.Fragment>
            <p>Current language: {props.language}</p>
            <p>Current step: {props.step}</p>
            {output}
        </React.Fragment>
    )
}

export default testingOutput;