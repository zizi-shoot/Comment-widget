import React from 'react';
import moment from 'moment';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import '../css/normalize.css';
import '../css/global.css';
import '../css/style.css';

moment.locale('ru');

class Widget extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			message: '',
			date: '',
			styleUser: '',
			styleMessage: '',
			display: 'block',
			comment: this.getState(),
		};
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	getState() {
		const comment = localStorage.getItem('comment');

		if (comment) {
			return JSON.parse(comment);
		}

		localStorage.setItem('comment', JSON.stringify([]));
		return [];
	}

	handleChangeUser(ev) {
		this.setState({
			user: ev.target.value,
			styleUser: '#e8e8e8',
		});
	}

	handleChangeMessage(ev) {
		this.setState({
			message: ev.target.value,
			styleMessage: '#e8e8e8',
		});
	}

	handleSubmit(ev) {
		ev.preventDefault();
		const date = moment().format('DD MMMM LTS');
		this.setState({ date });
		const {
			comment, user, message,
		} = this.state;

		if (user === '') {
			this.setState({
				styleUser: 'red',
			});
		} else if (message === '') {
			this.setState({
				styleMessage: 'red',
			});
		} else {
			comment.push({
				user, message, date,
			});
			this.setState({
				comment,
				user: '',
				message: '',
				date: '',
				display: 'none',
				styleUser: '',
				styleMessage: '',
			});
			localStorage.setItem('comment', JSON.stringify(comment));
		}
	}

	handleRemove(id) {
		this.setState((ev) => {
			const comment = ev.comment.filter((item, j) => id !== j);
			const display = document.querySelector('.comment__list').children.length - 1 > 0 ? 'none' : 'block';
			return { comment, display };
		});
		const array = JSON.parse(localStorage.getItem('comment'));
		localStorage.setItem('comment', JSON.stringify(array));
	}

	render() {
		const {
			comment, user, message, date, styleUser, styleMessage, display,
		} = this.state;
		return (
			<section className="comments">
				<CommentForm
					handleChangeUser={this.handleChangeUser}
					handleChangeMessage={this.handleChangeMessage}
					handleSubmit={this.handleSubmit}
					user={user}
					message={message}
					date={date}
					styleUser={styleUser}
					styleMessage={styleMessage}
				/>
				<CommentList
					display={display}
					comment={comment}
					handleRemove={this.handleRemove}
				/>
			</section>
		);
	}
}

export default Widget;