import React, { Component } from 'react';
import _ from 'lodash';

class CommentList extends Component {

    renderComment(comment) {
        return <li key={comment.id}>
            <p>{comment.userName} </p>
            <p>{comment.comment}</p>
        </li>
    }
    render() {
        return <ul>
            {_.map(this.props.items, this.renderComment)}
        </ul>
    }
}

export default CommentList;