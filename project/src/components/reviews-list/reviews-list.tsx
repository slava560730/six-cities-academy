import {useAppSelector} from '../../hooks';
import {AddReviewItem} from '../review-item/review-item';

function AddReviewsList (): JSX.Element{
  const reviews = useAppSelector((store) => store.reviews);
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <AddReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}

export {AddReviewsList};
