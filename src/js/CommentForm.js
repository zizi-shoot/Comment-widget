import React from 'react';

class CommentForm extends React.Component {
	render() {
		const {
			user, message, styleUser, styleMessage, handleSubmit, handleChangeUser, handleChangeMessage,
		} = this.props;
		return (
			<form onSubmit={handleSubmit} className="comment__form comment-form">
				<label className="comment-form__label">
					Author
					<input
						className="comment-form__input"
						type="text"
						placeholder="Enter your name..."
						value={user}
						onChange={handleChangeUser}
						style={{ borderColor: styleUser }}
					/>
				</label>
				<label className="comment-form__label">
					Message
					<textarea
						className="comment-form__textarea"
						placeholder="Enter your message..."
						value={message}
						onChange={handleChangeMessage}
						style={{ borderColor: styleMessage }}
					/>
				</label>
				<button type="submit" className="comment__submit">Comment</button>
			</form>
		);
	}
}

export default CommentForm;