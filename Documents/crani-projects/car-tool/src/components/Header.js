import React from 'react';

export const Header = (props) => {

    return <div>
        <header>
            <h1>{props.headerText}</h1>
        </header>
    </div>;
};