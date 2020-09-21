import React, { Component } from 'react';

class CommentList extends Component {
	render() {
		const { comments, removeComment } = this.props;
		const display = comments.length === 0 ? 'block' : 'none';
		return (
			<>
				<p className="comment__list--empty" style={{ display }}>No comments yet</p>
				<ol className="comment__list">
					{
						comments.map((comment) => (
							<li key={comment.id} className="comment__item comment-item">
								<article className="comment-item__article comment-article">
									<h2 className="comment-article__author">{comment.user}</h2>
									<p className="comment-article__date">{comment.date}</p>
									<p className="comment-article__message">{comment.message}</p>
									<button
										type="button"
										className="comment-article__remove"
										onClick={() => {
											console.log(comment.id);
											removeComment(comment.id);
										}}
									>
										Remove comment
									</button>
								</article>
							</li>
						))
					}
				</ol>
			</>
		);
	}
}

export default CommentList;