import React from 'react'

function NotFound() {
    return (
        <div className='container my-5'>
            <div className="row justify-content-center">
                <img src="/error.png" id='no-found' alt="page non trouvée" />
                <h3 className='text-center fw-bolder'>Page non trouvée </h3>
            </div>
        </div>
    )
}

export default NotFound