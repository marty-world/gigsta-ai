import { useState, useRef, useEffect } from 'react';
import { GigCard, Loader } from '../../components';
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from 'react-router-dom';
import { axiosFetch } from '../../utils';
import './Gigs.scss';

const Gigs = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sortBy, setSortBy] = useState('sales');
  const [category, setCategory] = useState('.');
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      axiosFetch.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sortBy}`)
        .then(({ data }) => {
          setCategory(data[0].category);
          return data;
        })
        .catch((error) => {
          console.log(error);
        })
  });

  useEffect(() => {
    refetch();
  }, [sortBy, search]);

  const handleSortBy = (type) => {
    setSortBy(type);
    setOpenMenu(false);
    refetch();
  }

  const handlePriceFilter = () => {
    refetch();
  }

  return (
    <div className="custom-container theme-section">
      <div className='flex flex-col gap-2 items-start mb-4'>
        <h1 className='text-5xl font-semibold'>Top pro services in {category[0]?.toUpperCase() + category.slice(1)}</h1>
        <p className='text-xl font-light'>Explore the boundaries of art and technology with Gigsta's {category} artists</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className='flex gap-2 justify-center h-full'>
          <input ref={minRef} type="number" placeholder='min' />
          <input ref={maxRef} type="number" placeholder='max' />
          <button className='btn-primary px-6 rounded-lg' onClick={handlePriceFilter}>Apply</button>
        </div>
        <div className='h-full'>
          <div className='flex gap-2 items-center justify-end'>
            <label htmlFor='sortBy' className='sortBy'>Sort By:</label>
            <div className='flex gap-2 items-center w-[150px] justify-between px-4 py-3 border rounded-lg cursor-pointer relative' onClick={() => setOpenMenu(!openMenu)}>
              <span className='sortType'>{sortBy === 'sales' ? 'Best Selling' : 'Newest'}</span>
              <img src="./media/down.png" alt="" className='w-5' />
              
              {openMenu && (<div className="bg-[#2d333c] shadow-xl rounded-theme-r-small cursor-pointer p-4 absolute bottom-0 right-0 top-full h-full w-full">
                {sortBy === 'sales' ? <span className='cursor-pointer p-0.4 absolute w-full' onClick={() => handleSortBy('createdAt')}>Newest</span> : <span className='cursor-pointer cursor-pointer p-0.4 absolute w-full' onClick={() => handleSortBy('sales')}>Best Selling </span>}
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className="theme-section !pt-10 !pb-0 flex flex-wrap grid grid-cols-3 gap-8">
        {isLoading ? (
          <div className='loader'>
            <Loader size={45} />
          </div>
        ) : error ? 'Something went wrong!' : data.map(gig => <GigCard key={gig._id} data={gig} />)}
      </div>
    </div>
  )
}

export default Gigs;