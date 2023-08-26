import {ReviewsType} from '../../types/property';
import { AddReviewsList } from '../reviews-list/reviews-list';
import {useState, FormEvent} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchPostReviewAction } from '../../store/api-actions';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../const';

function AddFormReview (): JSX.Element{
  const { reviews } = useAppSelector((state) => state);
  const formActiveState = useAppSelector((state) => state.formActiveState);
  const dispatch = useAppDispatch();
  const params = useParams();
  const numberId = Number(params.id);

  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchPostReviewAction([formData, numberId]));
    setFormData({
      comment: '',
      rating: 0,
    });
  };

  const fieldChangeHandle = (evt: {
    target: { value: ReviewsType[keyof ReviewsType]; name: string };
  }) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <AddReviewsList />
      <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={fieldChangeHandle}/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={fieldChangeHandle}/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={fieldChangeHandle}/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={fieldChangeHandle}/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={fieldChangeHandle}/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="comment" maxLength={MAX_REVIEW_LENGTH} placeholder ="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandle} value={formData.comment} disabled ={formActiveState}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={formData.comment.length < MIN_REVIEW_LENGTH || formActiveState}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export {AddFormReview};
