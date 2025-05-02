import React from 'react'
import { SpinnerCircular } from 'spinners-react';

function Chargement() {
    return (
        <div className='container flex-column d-flex justify-content-center align-items-center chargement'>
            <SpinnerCircular
                size={60}
                thickness={180}
                enabled={true}
                color="green"
                speed={20}
            />
            <h5 className='text-center my-2'>Chargement ...</h5>
        </div>
    )
}

export default Chargement