import React from 'react';
import StarRating from './StarRating';

class SpiceItem extends React.Component {
  state = {
    favorite: false,
  };

  toggleFavorite = () => {
    this.setState((prevState) => ({
      favorite: !prevState.favorite,
    }));
  };

  render() {
    const { image, title, description, notes, rating } = this.props.spice;
    return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <button className="favorite" onClick={this.toggleFavorite}>
            <span role="img" aria-label="heart">
              {this.state.favorite ? '🤍' : '♡'}
            </span>
          </button>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            Tasting Notes: <em>{notes}</em>
          </p>
          <div>
            Rating: <StarRating percentage={rating / 5} />
          </div>
        </div>
      </div>
    );
  }
}

export default SpiceItem;
