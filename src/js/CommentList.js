import React from 'react';

class CommentList extends React.Component {
	render() {
		const { comment, handleRemove, display } = this.props;
		return (
			<>
				<p className="comment__list--empty" style={{ display }}>No comments yet</p>
				<ol className="comment__list">
					{
						comment.map((ev, i) => (
							<li key={i} className="comment__item comment-item">
								<article className="comment-item__article comment-article">
									<h2 className="comment-article__author">{ev.user}</h2>
									<p className="comment-article__date">{ev.date}</p>
									<p className="comment-article__message">{ev.message}</p>
									<button
										type="button"
										className="comment-article__remove"
										onClick={() => handleRemove(i)}
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