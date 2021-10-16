// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import RootNavigation from './src/navigation';
import { Provider as BlogProvider } from './src/context/BlogContext';

function App() {
	return (
		<BlogProvider>
			<RootNavigation />
		</BlogProvider>
	);
}

export default App;
