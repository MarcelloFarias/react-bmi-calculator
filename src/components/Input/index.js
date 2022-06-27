import React from 'react';

const Input = (props) => {
    return (
        <>
            <input type='range'
                   className={props.className}  
                   min={props.min} 
                   max={props.max}
                   value={props.value}
                   onChange={props.onChange}/>
        </>
    );
}

export default Input;