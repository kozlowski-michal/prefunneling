import React, { useState } from 'react';
import { I18n, Translate } from 'react-i18nify';

import classesCSS from './FormsElements.module.css';

const InputText = (props) => {
    let [eventValue, setEventValue] = useState(props.defaultValue);

    const onBlurHandler = (event) => {
        let newValue = event.target.value;
        if (eventValue != newValue) {
            props.saveDataOnEvent(props.component, { [props.name]: newValue }); // triggers only, when new value is different than before
            setEventValue(() => newValue);
        }
    }

    return (
        <I18n render={() =>
            <div className={classesCSS.InputContainer}>
                <div className={classesCSS.InputLabel}>
                    <Translate value={"dashboard.customer." + props.name} />
                </div>
                < input
                    className={classesCSS.Input}
                    onBlur={(event) => onBlurHandler(event)}
                    defaultValue={eventValue}
                    name={props.name}
                    type="text"
                    ref={props.register} />
            </div>
        } />
    )
}

export default InputText;