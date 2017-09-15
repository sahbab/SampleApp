import React from 'react' 

import {
	StyleSheet,
	AppRegistry,
		View,
		Text,
		StatusBar		} from 'react-native'

		
		const styles = StyleSheet.create({
			defaultText: {
				fontSize: 22
				
			}
		})
class App extends React.Component {
	render() {
		
		return(
		
		<View> 
		<StatusBar hidde={true} />
		<Text style={styles.defaultText}> Book 1 </Text>
		<Text style={styles.defaultText}> Book 2 </Text>
		<Text style={styles.defaultText}> Book 3 a </Text>
		
		</View>
		
	)
	}	
}

AppRegistry.registerComponent('SampleApp' , () => App ) 