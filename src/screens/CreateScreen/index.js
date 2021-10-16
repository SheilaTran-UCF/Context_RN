import React, { useState, useContext } from 'react';
import {
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';

import { Context as BlogContext } from '../../context/BlogContext';

export default function CreateScreen({ navigation }) {
	const [titlePost, setTitlePost] = useState('');
	const [contentPost, setContentPost] = useState('');

	// destructuring
	const { createNewPost } = useContext(BlogContext);

	return (
		<SafeAreaView>
			<Header styleOut={styles.search2} title='Create Screen' />

			<View style={styles.container}>
				<CustomInput
					txt={titlePost}
					setTxt={setTitlePost}
					title='Enter title'
				/>
				<CustomInput
					txt={contentPost}
					setTxt={setContentPost}
					title='Enter content'
				/>
				{/* <Icon style={styles.logo} name='search' color='#4F8EF7' /> */}
			</View>

			<TouchableOpacity
				onPress={() =>
					createNewPost(titlePost, contentPost, () =>
						navigation.navigate('Home')
					)
				}
			>
				<View style={styles.customButton}>
					<Text style={styles.txtBtn}>Save</Text>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {},
	search: {
		top: 5,
		height: 40,
		borderRadius: 10,
		paddingLeft: 40,
		paddingRight: 10,
		backgroundColor: 'lightgrey',
		marginVertical: 15,
	},
	title: {
		top: 20,
		marginLeft: 20,
	},
	search1: {
		top: 5,
		height: 40,
		width: 300,
		borderRadius: 10,
		// paddingLeft: 40,
		// paddingRight: 40,
		backgroundColor: 'lightgrey',
		marginVertical: 15,
		textAlign: 'center',
		marginLeft: 40,
	},
	search2: {
		// textAlign: 'center',
		// alignSelf: 'center',
		justifyContent: 'center',
	},
	customButton: {
		width: 120,
		height: 60,
		backgroundColor: 'pink',
		alignSelf: 'center',
		marginTop: 50,
		borderRadius: 500,
	},
	txtBtn: {
		fontSize: 20,
		alignSelf: 'center',
		top: 14,
		color: 'black',
		fontWeight: 'bold',
	},
});
