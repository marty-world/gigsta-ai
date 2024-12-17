import { Link } from 'react-router-dom';
import './GigCard.scss';

const GigCard = (props) => {
  const { data } = props;

  return (
    <div className="p-7 bg-[#2d333c] rounded-theme-p-r flex flex-col w-full gap-4">
      <Link className="card-box__poster overflow-hidden block min-h-72" to={`/gig/${data._id}`}>
        <img className="card-box__poster-img" src={data.cover} alt="img" />
        <p className="card-box__poster-text shadow-xl bg-primary2">
          {data.price.toLocaleString('en-IN', {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'USD',
          })}
        </p>
      </Link>
      <Link className="card__title" to={`/gig/${data._id}`}>
        {data.title}
      </Link>
      <ul className="card__list card-list flex justify-between m-[0]">
        <li className="card-list__item">
          <Link className="card-list__link" to={`/gig/${data._id}`}>
            <img className="w-8 h-8 rounded-full object-cover" src={data.userID.image || './media/noavatar.png'} alt="img" />
            <span className='text-[#7d838c]'>by {data.userID.username}</span>
          </Link>
        </li>
        <li className="card-list__item">
          <p className="flex gap-2 items-center justify-center">
            <img src="./media/star.png" alt="" className='w-4 h-4' />
            <span>{Math.round(data.totalStars / data.starNumber) || 0}</span>
            <span className='totalStars'>({data.starNumber})</span>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default GigCard;