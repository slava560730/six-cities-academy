import {ReviewsType} from '../../types/property';
import {AddReviewItem} from '../review-item/review-item';

type AddReviewsListProps = {
  reviews: ReviewsType[];
};

function AddReviewsList ({reviews}: AddReviewsListProps): JSX.Element{

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <AddReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}

export {AddReviewsList};
