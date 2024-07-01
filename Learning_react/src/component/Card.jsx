import React from 'react';

function Card( { nameRender, fieldText="Name" } ) {
    return (
        <>
            <h5>{ fieldText }--- { nameRender }</h5>
        </>
    )
}

export default Card;