import React from 'react';
import classesCSS from './InputCheckbox.module.css';

const inputCheckbox = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.default;

    return (
        <div className={style}>
            <div className={classesCSS.Title}>
                {props.label}
            </div >
            {props.list?.map((item) => {
                return <div key={item.value} className={classesCSS.Container}>
                    <label className={classesCSS.Label}>
                        <input
                            type="checkbox"
                            onChange={(event) => true}
                            defaultChecked={true}
                            name={item.name}
                            id={item.value}
                            value={item.value}
                            ref={props.register}
                        />
                        <div className={classesCSS.CheckboxField} ></div>
                        <span>{item.label}</span>
                    </label>
                    <div className={classesCSS.ReadMore}>
                        Read more
                    </div>
                </div>
            })}

        </div >
    )
}

export default inputCheckbox;