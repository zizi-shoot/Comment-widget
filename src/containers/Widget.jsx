import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addComment, removeComment } from '../actions/actions.jsx';

import CommentForm from '../components/CommentForm.jsx';
import CommentList from '../components/CommentList.jsx';

import '../css/normalize.css';
import '../css/global.css';
import '../css/style.css';

class Widget extends Component {
	render() {
		const { comments, addComment, removeComment } = this.props;
		return (
			<section className="comments">
				<CommentForm addComment={addComment} />
				<CommentList comments={comments} removeComment={removeComment} />
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	comments: state,
});

const mapDispatchToProps = (dispatch) => ({
	addComment: (user, message) => dispatch(addComment(user, message)),
	removeComment: (id) => dispatch(removeComment(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Widget);