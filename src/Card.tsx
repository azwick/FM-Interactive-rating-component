import React, {useState} from 'react';
import {IconStar, IllustrationThankYou} from './SVGs'
import RatingList from './RatingList'
import data from "./data.json";
import './styles.css';

const Card = (): React.ReactElement => {
    const [ratingList, setRatingList] = useState(data)
    const [ratingValue, setRatingValue] = useState("");
    const [hasRatingValue, setHasRatingValue] = useState(false);

    const handleToggle = (id: number) => {
        let mapped = ratingList.map(ratingListItem => {
          // ToDo: Id type varies between string & number...
          return ratingListItem.id == id ? { ...ratingListItem, isSelected: true } : { ...ratingListItem, isSelected: false };
        });
        setRatingList(mapped);
      }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setRatingValue(event.target.value);
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        ratingValue.length > 0 && setHasRatingValue(true);
    };

    return (
        <>
        {!hasRatingValue ? 
            <div className="card">
                <div className="card-icon">
                    <IconStar />
                </div>
                <div className="card-content">
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.</p>
                </div>
                <div className="card-rating">
                    <RatingList ratingList={ratingList} handleToggle={handleToggle} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
            </div>
        : 
            <div className="result-view card">
                <IllustrationThankYou />
                <div className="card-result">You selected {ratingValue} out of 5</div>
                <div className="card-content">
                    <h1>Thank you!</h1>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                </div>
            </div>
        }
        </>
    );
}

export default Card;