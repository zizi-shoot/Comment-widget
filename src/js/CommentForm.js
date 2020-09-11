import React from 'react';

class CommentForm extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit} className="comment__form comment-form">
				<label className="comment-form__label">
					Author
					<input
						className="comment-form__input"
						type="text"
						placeholder="Enter your name..."
						value={this.props.user}
						onChange={this.props.handleChangeUser}
						style={{borderColor: this.props.styleUser}}
					/>
				</label>
				<label className="comment-form__label">
					Message
					<textarea
						className="comment-form__textarea"
						placeholder="Enter your message..."
						value={this.props.message}
						onChange={this.props.handleChangeMessage}
						style={{borderColor: this.props.styleMessage}}
					/>
				</label>
				<button type="submit" className="comment__submit">Comment</button>
			</form>
		);
	}
}

export default CommentForm;