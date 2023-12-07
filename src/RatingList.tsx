import React from 'react';

export interface RatingListInterface {
    ratingList: Array<RatingListItemInterface>;
    handleToggle: (id: number) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
}

export interface RatingListItemInterface {
    id: number;
    value: string;
    name: string;
    isSelected: boolean;
}

const RatingList = ({ ratingList, handleToggle, handleChange, handleSubmit }: RatingListInterface): React.ReactElement => {
    // ToDo: Change type any into ???
    const handleClick = (event: any) => {
        event.preventDefault()
        handleToggle(event.currentTarget.id)
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="rating-list">
                {ratingList.map((ratingListItem) => {
                    return (                
                        <label key={ratingListItem.id} className="rating-list-item">
                            <span className={ratingListItem.isSelected ? 'selected' : ''}>{ratingListItem.value}</span>
                            <input onClick={handleClick} type="radio" id={ratingListItem.value} name={ratingListItem.name} onChange={handleChange} value={ratingListItem.value} />
                        </label>
                    )
                })}
            </fieldset>
            <button className="btn-primary">Submit</button>
        </form>
    )
}

export default RatingList