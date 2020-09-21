import React, { Component } from 'react';

class CommentForm extends Component {
	render() {
		const { addComment } = this.props;
		return (
			<form
				onSubmit={(ev) => {
					ev.preventDefault();
					const user = ev.target.querySelector('input');
					const message = ev.target.querySelector('textarea');
					addComment(user.value, message.value);
					user.value = '';
					message.value = '';
				}}
				className="comment__form comment-form"
			>
				<label className="comment-form__label">
					Author
					<input
						type="text"
						className="comment-form__input"
						placeholder="Enter your name..."
						required
					/>
				</label>
				<label className="comment-form__label">
					Message
					<textarea
						className="comment-form__textarea"
						placeholder="Enter your message..."
						required
					/>
				</label>
				<button type="submit" className="comment__submit">Comment</button>
			</form>
		);
	}
}
export default CommentForm;