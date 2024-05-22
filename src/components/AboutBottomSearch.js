import React from 'react';

const inputContainerStyle = {
    position: 'relative',
    width: '100%',
    display: 'inline-block',
};

const searchButtonStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    borderRadius: '10px',
    background: 'transparent',
    color: '#000',
    fontWeight: '600',
    padding: '10px',
    lineHeight: '0',
    border: 'none',
    boxShadow: 'none',
};

export default function AboutBottomSearch() {
    return (
        <div className='about-section'>
            <div className='container col-lg-11 col-md-11 col-12 mt-5'>
                <div className='bottm-search mb-3 text-center' style={{ margin: '80px 0px' }}>
                    <h3 className='my-3'>Nice, right? Now it’s time to find your thing.</h3>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6 col-md-8 col-12 '>
                            <div className='footer-serch-box'>
                                <div style={inputContainerStyle} className="position-relative d-flex align-items-center">
                                    <input className="about-footer-serch" placeholder="Search products, artworks and themes" type="text" />
                                    <button style={searchButtonStyle} className="search-icon"><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
