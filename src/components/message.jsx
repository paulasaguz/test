import React from 'react';

export const Message = ({text, header, children}) => {
    return (
    <div className="text-center">
        {header ? <h3 className="message-header">{header}</h3>: null}
        <div className="message-body">{text || children}</div>
    </div>
    )
}
