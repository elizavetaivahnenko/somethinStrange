import ACTION_TYPES from "./superhero";

export const createUser = (newUser) => {
	return {
		type: ACTION_TYPES.CREATE_USER,
		data:newUser,
	}
}