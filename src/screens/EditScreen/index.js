import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/Header';

import { Context as BlogContext } from '../../context/BlogContext';

export default function EditScreen({ navigation, route }) {
	const { title, id, content } = route.params; // param
	const [titlePost, setTitlePost] = useState(title);
	const [contentPost, setContentPost] = useState(content);

	const { updatePost } = useContext(BlogContext);

	return (
		<SafeAreaView>
			<Header styleOut={styles.search2} title='Edit Screen' />

			<View style={styles.container}>
				<CustomInput
					title={'Enter edit title : '}
					txt={titlePost}
					setTxt={setTitlePost}
				/>
				<CustomInput
					title={'Enter edit content : '}
					txt={contentPost}
					setTxt={setContentPost}
				/>
			</View>

			<TouchableOpacity
				onPress={() =>
					updatePost(id, titlePost, contentPost, () =>
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
	container: { top: 30 },

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
