import React from 'react';

import './Input.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = ['InputElement']

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid')
    }

    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                                className={inputClasses.join(' ')}
                                {...props.elementConfig} 
                                value={props.value} 
                                onChange={props.changed}
                            />    
            break;
        case('textarea'):
            inputElement = <textarea 
                                className="InputElement" 
                                {...props.elementConfig} 
                                value={props.value} 
                                onChange={props.changed}

                            />
            break;
        case('select'):
            inputElement = (
                            <select 
                                className="InputElement" 
                                value={props.value}
                                onChange={props.changed}
                                >
                                    {props.elementConfig.options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.displayValue}
                                        </option>
                                    ))}
                            </select>
                            )
            break;
        default: 
            inputElement = <input 
                                className="InputElement" 
                                {...props.elementConfig} 
                                value={props.value} 
                                onChange={props.changed}
                            />
    } 

    let validationError = null;
    if(props.invalid && props.touched) {
        validationError = <p>Please enter a valid {props.name}</p>
    }

    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
};

export default input;