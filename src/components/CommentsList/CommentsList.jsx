import './CommentsList.css';

import React, {PureComponent} from 'react';
import classNames from 'classnames';

export default class CommentsList extends PureComponent {
    render(){
        const {comments, onLoadMore, loading} = this.props;

        return(
            <div className="comments-list">
                <ol>
                    {comments.map((comment, idx) => <li key={idx}><span className="author">{comment.name}</span>: {comment.body}</li>)}
                </ol>
                <button onClick={onLoadMore}>Load more</button>
                <p>{loading && 'Loading...'}</p>
            </div>
        )
    }
}