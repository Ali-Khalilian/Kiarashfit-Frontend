import React from 'react';

const PersonalError = ({children}) => {
    return (
        <span className='d-block text-danger text-center mt-1'>
            {children}
        </span>
    );
}

export default PersonalError;
