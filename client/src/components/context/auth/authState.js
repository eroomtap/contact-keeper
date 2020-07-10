import React, { useReducer } from 'react';
import AuthContext from './authContext.js';
import authReducer from './authReducer.js';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../Types.js';

const AuthState = props => {
	const initialState = {
		token:localStorage.getItem('token'),
		isAuthenticated:null,
		user:null,
		loading:true,
		error:null
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	//Load User
	//Register User
	//Login User
	//Logout User
	//Clear Errors


	return (
		<AuthContext.Provider
			value={{
				token:state.token,
				isAuthenticated:state.isAuthenticated,
				loading:state.loading,
				user:state.user,
				error:state.error,

			}}
		>
		{ props.children }
		</AuthContext.Provider>
	);
};

export default AuthState;

