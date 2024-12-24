import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosFetch, getCountryFlag } from '../../utils';
import { Link, useParams } from 'react-router-dom';
import { Loader, NextArrow, PrevArrow, Reviews } from '../../components';
import './Gig.scss';

import { CarouselProvider, Slider, Slide, ImageWithZoom, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaArrowLeft, FaArrowRight, FaHeart, FaStar, FaUser } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { BiTimer, BiRevision } from "react-icons/bi";

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const Gig = () => {
  const { _id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      axiosFetch.get(`/gigs/single/${_id}`)
        .then(({ data }) => {
          data.images.unshift(data.cover);
          return data;
        })
        .catch(({ response }) => {
          toast.error(response.data.message);
        })
  });

  const country = getCountryFlag(data?.userID.country);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  console.log(data, "Data");

  return (
    <div className="custom-container theme-section">
      {
        isLoading
          ? <div className='loader'> <Loader /> </div>
          : error
            ? 'Something went wrong!'
            : <div className="px-[15px]">
              {/* // <div className="container">
                  //     <div className="seller">
                  //       <h2>About The Seller</h2>
                  //       <div className="user">
                  //         <img
                  //           src={data?.userID?.image || '/media/noavatar.png'}
                  //           alt=""
                  //         />
                  //         <div className="info">
                  //           <span>{data?.userID.username}</span>
                  //           <div className="stars">
                  //             <img src="/media/star.png" alt="" />
                  //             <img src="/media/star.png" alt="" />
                  //             <img src="/media/star.png" alt="" />
                  //             <img src="/media/star.png" alt="" />
                  //             <img src="/media/star.png" alt="" />
                  //             <span>5</span>
                  //           </div>
                  //           <button>Contact Me</button>
                  //         </div>
                  //       </div>
                  // <div className="box">
                  //   <div className="items">
                  //     <div className="item">
                  //       <span className="title">From</span>
                  //       <span className="desc">{data?.userID.country}
                  //         <span className='flag'>
                  //           <img src={country.normal} alt="" />
                  //         </span>
                  //       </span>
                  //     </div>
                  //   </div>
                  //   <hr />
                  //   <p>
                  //     {data.userID.description}
                  //   </p>
                  // </div>
                  //     </div>
                  //     <Reviews gigID={_id} />
                  //   </div>
                  // <div className="right">
                  //   <div className="price">
                  //     <h3>{data?.shortTitle}</h3>
                  //     <h2>{data?.price.toLocaleString('en-IN', {
                  //       maximumFractionDigits: 0,
                  //       style: 'currency',
                  //       currency: 'INR',
                  //     })}</h2>
                  //   </div>
                  //   <p>
                  //     {data?.shortDesc}
                  //   </p>
                  //   <div className="details">
                  //     <div className="item">
                  //       <img src="/img/clock.png" alt="" />
                  //       <span>{data.deliveryTime} days Delivery</span>
                  //     </div>
                  //     <div className="item">
                  //       <img src="/img/recycle.png" alt="" />
                  //       <span>{data.revisionNumber} Revisions</span>
                  //     </div>
                  //   </div>
                  //   <div className="features">
                  //     {
                  //       data?.features.map((feature) => (
                  //         <div key={feature} className="item">
                  //           <img src="/img/greencheck.png" alt="" />
                  //           <span>{feature}</span>
                  //         </div>
                  //       ))
                  //     }
                  //   </div>
                  //   <Link to={`/pay/${_id}`}>
                  //     <button>Continue</button>
                  //   </Link>
                  // </div>
                  // </div> */}
              <div className='flex flex-col gap-2 items-start mb-4'>
                <h1 className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>{data.shortTitle}</h1>
                <p className='text-sm md:text-xl font-light'>{data.shortDesc}</p>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-12 gap-4'>
                <div className="col-span-1 md:col-span-8 lg:col-span-8 xl:col-span-8 mb-4">
                  <div className="bg-grayColor section-padding md:!p-6 rounded-theme-p-r flex flex-col gap-4 md:gap-6 lg:gap-10">
                    <CarouselProvider
                      naturalSlideHeight={40}
                      naturalSlideWidth={50}
                      totalSlides={data?.images.length}
                      infinite
                      className='slider relative'
                    >
                      <Slider>
                        {data.images.map((img) => (
                          <Slide key={img} className=''>
                            <Image className='rounded-xl object-cover' key={img} src={img} alt='gig img' />
                          </Slide>
                        ))}
                      </Slider>
                      <ButtonBack className='w-7 min-h-auto md:min-h-[30px] lg:min-h-[40px] xl:min-h-[50px] md:w-8 lg:w-10 xl:w-12 flex items-center justify-center rounded-theme-p-r absolute -left-4 top-1/2 -translate-y-1/2'>
                        <FaArrowLeft />
                      </ButtonBack>
                      <ButtonNext className='w-7 min-h-auto md:min-h-[30px] lg:min-h-[40px] xl:min-h-[50px] md:w-8 lg:w-10 xl:w-12 flex items-center justify-center rounded-theme-p-r absolute -right-4 top-1/2 -translate-y-1/2'>
                        <FaArrowRight />
                      </ButtonNext>
                    </CarouselProvider>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                        About this Gig
                      </h2>
                      <p className="text-sm md:text-xl">
                        {data?.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl md:text-3xl font-semibold">
                        Features
                      </h3>
                      <ul className="flex gap-2 flex-wrap">
                        {data?.features?.filter(item => item !== "").map((feature) => (
                          <li key={feature} className="px-3 py-2 bg-gray-900 rounded-theme-r-small">
                            <img src="/img/greencheck.png" alt="" />
                            <span className='text-sm md:text-xl'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <aside className="mb-4 col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4 bg-grayColor section-padding md:!p-6 rounded-theme-p-r flex flex-col gap-10">
                  <button className='text-xl md:text-2xl font-semibold cursor-pointer text-secondary rounded-xl py-2 px-4 bg-white text-center hover:bg-white'>
                    {data?.price.toLocaleString('en-US', {
                      maximumFractionDigits: 0, style: 'currency', currency: 'USD'
                    })}
                  </button>
                  <ul className='flex gap-4 flex-col w-full'>
                    <li className='pb-2 md:pb-2 lg:pb-4 border-b flex justify-between flex-wrap gap-2 items-center'>
                      <span className='text-sm md:text-md lg:text-xl font-medium flex gap-2 md:gap-0 items-center'><IoLocationSharp />Location:</span>
                      <span className='text-xs md:text-md lg:text-lg font-medium bg-secondary px-2 rounded-theme-r-small'>{data?.userID?.country}</span>
                    </li>
                    <li className='pb-2 md:pb-2 lg:pb-4 border-b flex justify-between flex-wrap gap-2 items-center'>
                      <span className='text-sm md:text-md lg:text-xl font-medium flex gap-2 md:gap-0 items-center'><FaUser />Member Since:</span>
                      <span className='text-xs md:text-md lg:text-lg font-medium bg-secondary px-2 rounded-theme-r-small'>
                        {MONTHS[new Date(data?.userID.createdAt).getMonth()] + ' ' + new Date(data?.userID.createdAt).getFullYear()}
                      </span>
                    </li>
                    <li className='pb-2 md:pb-2 lg:pb-4 border-b flex justify-between flex-wrap gap-2 items-center'>
                      <span className='text-sm md:text-md lg:text-xl font-medium flex gap-2 md:gap-0 items-center'><BiTimer />Delivery Time:</span>
                      <span className='text-xs md:text-md lg:text-lg font-medium bg-secondary px-2 rounded-theme-r-small'>{data?.deliveryTime} days delivery</span>
                    </li>
                    <li className='pb-2 md:pb-2 lg:pb-4 border-b flex justify-between flex-wrap gap-2 items-center'>
                      <span className='text-sm md:text-md lg:text-xl font-medium flex gap-2 md:gap-0 items-center'><BiRevision />Total Revisions:</span>
                      <span className='text-xs md:text-md lg:text-lg font-medium bg-secondary px-2 rounded-theme-r-small'>{data?.revisionNumber}</span>
                    </li>
                  </ul>
                  <Link to={`/pay/${_id}`} className='btn-secondary !text-sm md:!text-lg'>
                    Continue
                  </Link>
                  {/* <p>{data?.shortDesc}</p>
                    <div className="">
                      <div className="">
                        <img src="/img/clock.png" alt="" />
                        <span>{data.deliveryTime} days Delivery</span>
                      </div>
                      <div className="">
                        <img src="/img/recycle.png" alt="" />
                        <span>{data.revisionNumber} Revisions</span>
                      </div>
                    </div>
                    <div className="">
                      {data?.features.map((feature) => (
                        <div key={feature} className="">
                          <img src="/img/greencheck.png" alt="" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/pay/${_id}`}>
                      <button className='btn-secondary'>Continue</button>
                    </Link> */}
                </aside>
                <div className="col-span-12 section-padding border rounded-theme-p-r mb-4 md:mb-10">
                  <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    <div className="col-span-1">
                      <img className="rounded-theme-p-r w-40 h-40" src={data?.userID?.image || '/media/noavatar.png'} alt="img" />
                    </div>
                    <div className="members-section-top__body members-section-top-body col-span-1 md:col-span-3 lg:col-span-5">
                      <div className='flex flex-col gap-2 md:gap-2 lg:gap-4 mb-4'>
                        <p className="bg-secondary text-white text-xs uppercase rounded-theme-r-small font-medium w-max px-3 py-2">
                          {data.category}
                        </p>
                        <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold m-0">
                          {data?.title}
                        </h2>
                        <div className='flex gap-2 items-center'>
                          <div>
                            <p className='text-primary text-2xl font-semibold'>
                              {data?.userID.username}
                            </p>
                            <a className="text-sm" href={`mailto:${data?.userID.email}`}>
                              {data?.userID.email}
                            </a>
                          </div>
                          {!isNaN(data.totalStars / data.starNumber) && (
                            <div className="flex items-center justify-center gap-2">
                              {new Array(Math.round(data.totalStars / data.starNumber)).fill()
                                .map((item, i) => (
                                  <img key={i} src='/media/star.png' alt='start' className='w-4 h-4 text-primary' />
                                ))}
                              <span>({(data.totalStars / data.starNumber).toFixed(1)})</span>
                            </div>
                          )}
                        </div>
                        {/* <ul className="members-section-top-body__list card-list">
                            {data?.features?.length > 0 && data.features.map((item, index) => (
                              <li className='text-gray-400 text-sm' key={index}>
                                {item}
                              </li>
                            ))}
                          </ul> */}
                      </div>
                      <div className="members-section-top-body__box members-section-top-body-box">
                        <div className="members-section-top-body-box__buttons">
                          <a className="btn-primary-outline" href="#">
                            <FaHeart /> Follow
                          </a>
                          <a className="btn-secondary-outline" href="#">
                            Contact Me
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-12 bg-grayColor section-padding rounded-theme-p-r flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
                  <Reviews gigID={_id} />
                </div>
              </div>
            </div>
      }
    </div>
  )
}

export default Gig