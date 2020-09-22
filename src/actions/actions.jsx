import moment from 'moment';

moment.locale('ru');
let nextId = 0;

if (localStorage.getItem('_comments') && localStorage.getItem('_comments').length > 2) {
	const commentsArr = JSON.parse(localStorage.getItem('_comments'));
	nextId = commentsArr[commentsArr.length - 1].id;
}

export const addComment = (user, message) => {
	const date = moment().format('DD MMMM LT');
	return {
		type: 'ADD_COMMENT',
		user,
		message,
		date,
		id: ++nextId,
	};
};

export const removeComment = (id) => ({
	type: 'REMOVE_COMMENT',
	id,
});