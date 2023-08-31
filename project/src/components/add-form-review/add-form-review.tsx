// import {ReviewsType} from '../../types/property';
import React, {FormEvent} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchPostReviewAction } from '../../store/api-actions';
import {DEFAULT_REVIEW_STATE, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, REVIEW_RATING} from '../../const';
import {getFormActiveState, getFormData} from '../../store/app-data/selectors';
import ReviewStar from '../reviews-star/reviews-star';
import {changeFormData} from '../../store/app-data/app-data';

function AddFormReview (): JSX.Element{
  const formActiveState = useAppSelector(getFormActiveState);
  const dispatch = useAppDispatch();
  const params = useParams();
  const numberId = Number(params.id);

  const formData = useAppSelector(getFormData);
  const { comment, rating } = formData;

  const fieldChangeHandle = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    dispatch(changeFormData({ ...formData, [name]: value }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchPostReviewAction([formData, numberId]));
    dispatch(changeFormData(DEFAULT_REVIEW_STATE));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEW_RATING.map((data) => (
          <ReviewStar
            onFieldChangeHandle={fieldChangeHandle}
            value={data.value}
            title={data.title}
            rating={rating}
            key={data.value}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        maxLength={MAX_REVIEW_LENGTH}
        placeholder ="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandle}
        value={comment}
        disabled ={formActiveState}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.length < MIN_REVIEW_LENGTH || formActiveState || rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export {AddFormReview};
