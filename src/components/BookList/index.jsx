import React, { PropTypes } from 'react';
import './style.less';

class BookList extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   // this.onSubmit = this.onSubmit.bind(this);
  // }
  // onChangeSearchBox(e) {
  //   console.log('onChangeSearchBox');
  //   let text = e.target.value;
  //   const newState = Object.assign({}, this.state, { query: text });
  //   this.setState(newState);
  // }


  render() {
    return (
      <div className="list-container">
        {
          (this.props.bookList)?
            this.props.bookList.map((item) => {
              return (
                <div key={item.id} >{item.volumeInfo.title}</div>
              )
            })
            :
            ''
        }
      </div>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.array.isRequired
};


export default BookList;
