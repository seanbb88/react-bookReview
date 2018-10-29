import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned from here will show up as props inside of book list
    return {
        books: state.books
    };
}

//Anthing returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all of our reducers
    // bind action creators takes all the actions and passes them on to different reducers inside the application
    return bindActionCreators({ selectBook: selectBook }, dispatch)
    
}

//Promote BookLIst from a component to a container - it needs to know about this new dispatch method, 
//selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 