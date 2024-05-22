import React from 'react'
import { Link } from 'react-router-dom';
import RepayIcon from '../assets/img/icon/replay.png';
import ShareIcon from '../assets/img/icon/send.png';
import ReviewImg from '../assets/img/other/review.png';

export default function CustomerReviews() {
  return (
    <div className="container my-3">
      <div className="product__reviews" >
        <div className="product__reviews--header">
          <h2 className="product__reviews--header__title h3 mb-20" style={{ fontWeight: 600 }}>Customer Reviews</h2>
          <div className="reviews__ratting d-flex align-items-center">
            <ul className="rating d-flex">
              <li className="rating__list">
                <span className="rating__list--icon">
                  <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li className="rating__list">
                <span className="rating__list--icon">
                  <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li className="rating__list">
                <span className="rating__list--icon">
                  <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li className="rating__list">
                <span className="rating__list--icon">
                  <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                  </svg>
                </span>
              </li>
              <li className="rating__list">
                <span className="rating__list--icon">
                  <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                  </svg>
                </span>
              </li>
            </ul>
            <span className="reviews__summary--caption">4.2/5</span>
            <span className="reviews__summary--caption" style={{color:'#5E5E5E'}}>Total (4208) Reviews</span>
          </div>
          <Link className="actions__newreviews--btn primary__btn" href="#writereview">Write A Review</Link>
        </div>
        <div className="reviews__comment--area">
          <div className="reviews__comment--list d-flex">

            <div className="reviews__comment--content">
              <div className="reviews__comment--top d-flex justify-content-between">
                <div className="reviews__comment--top__left">
                  <h3 className="reviews__comment--content__title h4">Loren Gaitan</h3>
                  <ul className="rating reviews__comment--rating d-flex">
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <span className="reviews__summary--caption">4.2/5</span>
            <span className="reviews__summary--caption" style={{color:'#000', fontSize:'13px'}}>February 23</span>
                  </ul>
                  
                </div>
                
              </div>
              <p className="reviews__comment--content__desc">Good quality, vibrant color Would recommend.</p>
                            <div className='replay-share mt-3 mb-2'>
          <span style={{fontSize:'13px', fontWeight:'500', color:'#000', cursor:'pointer'}}><img src={RepayIcon} className='img-fluid mx-2' />Reaply </span>
          <span style={{fontSize:'13px', fontWeight:'500', color:'#000', cursor:'pointer', marginLeft:'30px'}}><img src={ShareIcon} className='img-fluid mx-2' />Share </span>
        </div>
            </div>
          </div>
          <div className="reviews__comment--list d-flex">
           
            <div className="reviews__comment--content">
              <div className="reviews__comment--top d-flex justify-content-between">
                <div className="reviews__comment--top__left">
                  <h3 className="reviews__comment--content__title h4">Loren Gaitan</h3>
                  <ul className="rating reviews__comment--rating d-flex">
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__list--icon">
                        <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                          <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                        </svg>
                      </span>
                    </li>


                    <span className="reviews__summary--caption">4.2/5</span>
            <span className="reviews__summary--caption" style={{color:'#000', fontSize:'13px'}}>February 23</span>
                  </ul>
                  
                </div>
               
              </div>
              <p className="reviews__comment--content__desc">Good quality, vibrant color Would recommend.</p>
              <div className='review-imges my-3'>
                     <img src={ReviewImg} className='mx-2 img-fluid' style={{width:'100px'}}/>
                     <img src={ReviewImg} className='mx-2 img-fluid' style={{width:'100px'}}/>

                    </div>
              <div className='replay-share mt-3 mb-2'>
          <span style={{fontSize:'13px', fontWeight:'500', color:'#000', cursor:'pointer'}}><img src={RepayIcon} className='img-fluid mx-2' />Reaply </span>
          <span style={{fontSize:'13px', fontWeight:'500', color:'#000', cursor:'pointer', marginLeft:'30px'}}><img src={ShareIcon} className='img-fluid mx-2' />Share </span>
        </div>
            </div>
          </div>


<div className='d-flex justify-content-center'>
  <button className='btn load-more-reviews'>Load more reviews</button>
</div>
        </div>
        <div className="reviews__comment--reply__area" style={{marginTop:'50px'}}>
          <form action="#">
            <h3 className="reviews__comment--reply__title mb-15">Add a review </h3>
            <div className="reviews__ratting d-flex align-items-center mb-20">
              <ul className="rating d-flex">
                <li className="rating__list">
                  <span className="rating__list--icon">
                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__list--icon">
                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__list--icon">
                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__list--icon">
                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__list--icon">
                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-12 mb-10">
                <textarea className="reviews__comment--reply__textarea" placeholder="Write your Comments....." defaultValue={""} />
              </div>
            </div>
            <button className="reviews__comment--btn text-white primary__btn" data-hover="Submit" type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>


  )
}
