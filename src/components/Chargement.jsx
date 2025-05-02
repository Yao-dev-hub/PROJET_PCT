import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Chargement() {
    return (
        <div className='container d-flex justify-content-center align-items-center chargement'>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Chargement