import React from 'react'

export default function CustomizeBtnCta() {
    return (
        <div className='container'>
            <div className='custom-btn-cta pb-5'  >
                <h2 className='mb-4 text-center' style={{
                    color: '#000',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 500
                }}>You want Customize Design T-Shirt ?</h2>
                <div className=" text-center">
                    <button className="btn btn-customizecta" style={{
                        borderRadius: '20px',
                        padding: '5px 25px',
                        background: '#EE2761',
                        color: '#FFF',
                        fontFamily: 'Montserrat',
                        fontSize: '20px',
                        fontWeight: 500
                    }}>Customize</button>
                </div>
            </div>
        </div>

    )
}
