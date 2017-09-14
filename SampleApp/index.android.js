import React from 'react' 

import {AppRegistry, View, Text } from 'react-native'

class App extends React.Component {
	render() {
		
		return(
		
		<View> 
		<Text> Book 1 </Text>
		<Text> Book 2 </Text>
		<Text> Book 3 a </Text>
		
		</View>
		
	)
	}	
}

AppRegistry.registerComponent('SampleApp' , () => App ) 