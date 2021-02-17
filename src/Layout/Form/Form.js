import React from 'react';
import { useForm } from "react-hook-form";

import classesCSS from './Form.module.css';

const Input = (props) => {

    const { register, handleSubmit, errors } = useForm();

    let inputFromProps = null;

    switch (props.input?.type) {
        case 'text':
            inputFromProps = <input 
                type = 'text'
                className = {classesCSS.Input}
                name = {props.input.name}
                placeholder = {props.input.placeholder}
                ref={register({required: true})}
            />
            break;
        case 'email':
            inputFromProps = 
                <React.Fragment>
                    <input 
                        type = 'email'
                        className = {classesCSS.Input}
                        name = "email"
                        placeholder = "Email"
                        ref={register({required: true})}
                    />
                    <input 
                        type = 'text'
                        className = {classesCSS.Input}
                        name = "phone"
                        placeholder = "Phone (otional)"
                        ref={register({})}
                    />
                </React.Fragment>
            break;            
        case 'radio': 
        case 'checkbox':
            inputFromProps = (
                <div>
                    {props.input.value.map( (inputItem) => {
                    return (
                        <React.Fragment key = {inputItem}>
                            <input 
                                type = {props.input.type}
                                name = {props.input.name}
                                id = {inputItem}
                                value = {inputItem}
                                ref={register()}
                            />
                            <label htmlFor = {inputItem}>{inputItem}</label><br/>
                        </React.Fragment>
                        )
                    })}
                    </div>)  
            break;
        case 'range':
            inputFromProps = (
                <div>
                    <input className = {classesCSS.Range}
                        type = "range"
                        name = {props.input.name}
                        id = {props.input.name}
                        min = {props.input.min}
                        max = {props.input.max}
                        ref={register()}
                    />
                    <div className = {classesCSS.RangeLabel} >
                        {props.input.descriptions.map( (item, index) => {
                            return (<span key = {index}>{item}</span>)
                        })}
                    </div>
                </div>) 
            break;
    }

    return (
        <form 
            onSubmit={handleSubmit(props.submit)}
            className = {classesCSS.FormContainer} 
        >
            {inputFromProps}
            <p>
                {props.message}
            </p>
            {props.input ? <button 
                className = {classesCSS.Button}
                type="submit"
            >➔</button> : null}
        </form>
        
    )
}

export default Input;