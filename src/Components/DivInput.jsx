import React, {forwardRef, useEffect, useRef} from 'react';

export default forwardRef(({ type= 'text', icon = '', placeholder = '',
    name, id, value, className , required, isFocused, handleChange}, ref) => {

        const input = ref ? ref :useRef();
        useEffect(() => {
            if(isFocused){
                input.current.focus();
            }
        }, []);


    return(
    <div className='input-group'>
        <span className='input-group-text bg-primary text-white'>
            <i className={'fa-solid ' +icon}></i>
        </span>
        <input type={type} placeholder={placeholder} name={name} 
        id={id} value={value} className={className} ref={input} required={required} 
        onChange={(e) => handleChange(e)} />
    </div>
    )
});

// Revisado