import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import CommentList from './comment-list';

const PAGE_SIZE = 10;

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      paginatedItems: [],
      pageCount: 0
    }
  }

  generateData() {
    let comments = [];

    for (var i = 0; i < 200; i++) {
      comments.push({
        id: i + 1,
        username: `user - ${i}`,
        comment: `This is the comment ${i}`
      });
    }
    return comments;
  }

  componentDidMount() {
    const data = this.generateData();

    let paginatedItems = this.getPaginatedItems(data, 0);

    console.log('paginatedItems', paginatedItems);

    this.setState({
      data,
      pageCount: Math.ceil(data.length / PAGE_SIZE),
      paginatedItems
    })
  }

  getPaginatedItems(data, offset) {
    return data.slice(offset, offset + PAGE_SIZE);
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * PAGE_SIZE);
    this.setState({
      paginatedItems: this.getPaginatedItems(this.state.data, offset)
    })
  };


  render() {
    return (
      <div>
        {'Comments'}
        <CommentList items={this.state.paginatedItems} />

        {'Paging'}
        <ReactPaginate

          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={<a href=''>...</a>}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'} />

      </div>
    );
  }
}

export default App;
