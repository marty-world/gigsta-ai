import { getCountryFlag } from '../../utils';
import './Review.scss';

const Review = (props) => {
  const { review } = props;
  const country = getCountryFlag(review?.userID?.country);

  return (
    <div className="review py-4 m-0 border-t">
      <div className="user flex items-center gap-2">
        <img
          className="pp"
          src={review.userID?.image || '/media/noavatar.png'}
          alt=""
        />
        <div className="flex flex-col">
          <span className='pb-2'>{review?.userID?.username}</span>
          <div className="flex items-center gap-2">
            <img
              src={country?.normal}
              alt=""
              className='w-6 h-6'
            />
            <span>{review?.userID?.country}</span>
          </div>
        </div>
      </div>
      <div className="stars">
        {
          new Array(review.star).fill(0).map((star, i) => (
            <img key={i} src='/media/star.png' alt='' />
          ))
        }
        <span>{review.star}</span>
      </div>
      <p>{review.description}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/media/like.png" alt="" />
        <span>Yes</span>
        <img src="/media/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  )
}

export default Review