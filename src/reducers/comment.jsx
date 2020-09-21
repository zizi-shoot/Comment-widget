const comments = (state = [], action) => {
	switch (action.type) {
	case 'ADD_COMMENT':
		return [
			...state,
			{
				user: action.user,
				message: action.message,
				date: action.date,
				id: action.id,
			},
		];
	case 'REMOVE_COMMENT':
		return state.filter((e) => e.id !== action.id);

	default:
		return state;
	}
};

export default comments;