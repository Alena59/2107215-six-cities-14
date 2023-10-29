import {Fragment} from 'react';
import {ChangeEvent} from 'react';

const ratingReview = [
  {title: 'perfect', value: '5'},
  {title: 'good', value: '4'},
  {title: 'not bad', value: '3'},
  {title: 'badly', value: '2'},
  {title: 'terribly', value: '1'},
];

type TRatingProps = {
  rating: string;
  onInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function Rating({rating, onInputChange}: TRatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingReview.map(({title, value}) => (
        <Fragment key={`${title}-${value}`}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={`${value}-stars`}
            type="radio"
            onChange={onInputChange}
            checked={rating === value}
          />
          <label
            htmlFor={`${value}-stars`}
            className="reviews__rating-label form__rating-label"
            title={title}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default Rating;
