import moment from 'moment';

moment.locale('ru');

let nextId = 0;

export const addComment = (user, message) => {
	const date = moment().format('DD MMMM LT');
	return {
		type: 'ADD_COMMENT',
		user,
		message,
		date,
		id: nextId++,
	};
};

export const removeComment = (id) => ({
	type: 'REMOVE_COMMENT',
	id,
});