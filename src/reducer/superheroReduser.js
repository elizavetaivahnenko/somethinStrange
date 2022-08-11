import ACTION_TYPES from "../actions/superhero";

const db = [
	{
		name: 'Connor',
		img:'https://i.ytimg.com/vi/mLFLgzubz9Y/maxresdefault.jpg'
	}
]

const initialState = {
	users:[],
}

const superheroReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.CREATE_USER: {
			const { users } = state;
			const { data } = action;
			const newUser = {
				...data,
			}
			const newUsersDB = [...users, newUser];
			return { users: newUsersDB };
		}
		 case ACTION_TYPES.UPDATE_USER: {
            const {users} = state;
            const {data} = action;
            const newUsersDB = [...users];
            const findUserIndex = newUsersDB.findIndex( u => data.id == u.id);
            newUsersDB[findUserIndex] = {...newUsersDB[findUserIndex], ...data};
            return {users: newUsersDB};
        }
		default: return state;
	}
}

export default superheroReducer;