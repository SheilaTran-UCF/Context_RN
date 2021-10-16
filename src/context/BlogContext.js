import axios from 'axios';
import React from 'react';
import createDataContext from './createDataContext';

const API_ENDPOINT = 'http://5a5c0d4b69a4.ngrok.io/posts';

const blogPostReducer = (state, action) => {
	switch (action.type) {
		case 'GET_POSTS':
			return action.payload;
		case 'CREATE_POST':
			// ... -> spread operator
			// immutable -> clone -> change
			return [...state, action.payload];
		case 'UPDATE_POST':
			return state.map(x =>
				x.id === action.payload.id ? action.payload : x
			);
		case 'DELETE_POST':
		//return
		// state.filter(x => x.id !== action.payload.id)
		default:
			return state;
	}
};

const getListBlogPosts = dispatch => {
	return async () => {
		const response = await axios.get(API_ENDPOINT);
		console.log('====================================');
		console.log(response.data);
		console.log('====================================');
		dispatch({ type: 'GET_POSTS', payload: response.data });
	};
};

const generateRandomId = () => {
	return Math.floor(Math.random() * 9999);
};

// Closure
const createNewPost = dispatch => {
	return async (title, content, cb) => {
		let newPost = {
			id: generateRandomId(),
			title: title,
			content: content,
		};
		await axios.post(API_ENDPOINT, newPost);
		dispatch({ type: 'CREATE_POST', payload: newPost });
		if (cb) {
			cb();
		}
	};
};

const updatePost = dispatch => {
	return async (id, newTitle, newContent, cb) => {
		// put -> update all inf
		// patch -> update
		const response = await axios.put(`${API_ENDPOINT}/${id}`, {
			title: newTitle,
			content: newContent,
		});
		dispatch({ type: 'UPDATE_POST', payload: response.data });
		if (cb) {
			cb();
		}
	};
};

const deletePost = dispatch => {
	return async id => {
		// get id from item
		// call to server
		// with DELETE METHOD
	};
};

export const { Context, Provider } = createDataContext(
	blogPostReducer,
	{ getListBlogPosts, createNewPost, updatePost },
	[]
);
