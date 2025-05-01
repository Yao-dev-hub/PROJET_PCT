import React from 'react'
import InscriptionForm from '../components/InscriptionForm'

function InscriptionPage() {
    return (
        <div className='container p-5'>
            <div className="row">
                <div className="col-lg-5">
                    <InscriptionForm />
                </div>
                <div className="col-lg-7 img2"></div>
            </div>
        </div>
    )
}

export default InscriptionPage