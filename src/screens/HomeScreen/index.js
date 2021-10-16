import React, { useContext, useEffect } from 'react';
import {
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import Post from '../../components/Post';
import Header from '../../components/Header';
import { Context as BlogContext } from '../../context/BlogContext';

export default function HomeScreen({ navigation }) {
	const { state, getListBlogPosts } = useContext(BlogContext);

	console.log('====================================');
	console.log(state.length);
	console.log('====================================');

	useEffect(() => {
		getListBlogPosts();
	}, []);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			// do something
			getListBlogPosts();
		});

		return unsubscribe;
	}, [navigation]);

	return (
		<SafeAreaView>
			<Header
				title='Home Screen'
				icon='plus'
				customNavigation={navigation}
				navigationName={'Create'}
			/>

			<FlatList
				data={state}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('Show', item)}
					>
						<Post title={item.title} />
					</TouchableOpacity>
				)}
			/>
			<Text>hehe</Text>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	text: {
		top: 30,
		padding: 10,

		backgroundColor: 'lightgrey',
		// borderColor: 'grey',
	},
});
