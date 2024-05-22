import React from 'react'

export default function OrderTrack() {
  return (



    <div className='container '>
      <div className="track-order ">
        <div className="track-point">
          <div className="checkbox checked"><i class="fas fa-check"></i></div>
        </div>

        <div className="dashed-line" />
        <div className="track-point">
          <div className="checkbox checked"><i class="fas fa-check"></i></div>
        </div>
        <div className="dashed-line" />
        <div className="track-point">
          <div className="checkbox checked"><i class="fas fa-check"></i></div>
        </div>
        <div className="dashed-line" />
        <div className="track-point">
          <div className="checkbox checked"><i class="fas fa-check"></i></div>
        </div>

      </div>


      <div className="track-order">
        <div className="track-point2">
          <div className="">Ordered <br /> 1st November</div>
        </div>

        {/* <div className="dashed-line" /> */}
        <div className="track-point2">
          <div className="">Shipped</div>
        </div>
        {/* <div className="dashed-line" /> */}
        <div className="track-point2">
          <div className="">Out For <br /> Delivery</div>
        </div>
        {/* <div className="dashed-line" /> */}
        <div className="track-point2">
          <div className="">Arriving<br />Sunday</div>
        </div>

      </div>

    </div>

  )
}
