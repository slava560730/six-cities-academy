import {useAppSelector} from '../../hooks';
import {AddReviewItem} from '../review-item/review-item';
import { getSortedReviews } from '../../store/app-data/selectors';
import { AddFormReview } from '../add-form-review/add-form-review';
import { getAuthLoggedStatus } from '../../store/user-process/selectors';


function AddReviewsList (): JSX.Element{
  const reviews = useAppSelector(getSortedReviews);
  const isAuthLoggedStatus = useAppSelector(getAuthLoggedStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <AddReviewItem review={review} key={review.id} />
        ))}
      </ul>
      {isAuthLoggedStatus && <AddFormReview />}
    </section>
  );
}

export {AddReviewsList};
