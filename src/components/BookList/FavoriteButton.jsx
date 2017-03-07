import React, { PropTypes } from 'react';
import './favoriteButton.less';

class FavoriteButton extends React.Component {

  constructor(props) {
    super(props);

    this.onClickFavoriteButton = this.onClickFavoriteButton.bind(this);
  }

  onClickFavoriteButton(){
    this.props.onClickFavorite(this.props.bookId);
  }

  render() {
    return (

      <div className={(this.props.isFavorite)? "favorite active":"favorite"} onClick={this.onClickFavoriteButton}>
        {
          (this.props.isFavorite)?
            <i className="fa fa-heart" > </i>
            :
            <i className="fa fa-heart-o" > </i>
        }
      </div>
    );
  }
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClickFavorite: PropTypes.func.isRequired,
};

export default FavoriteButton;
