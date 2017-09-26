import React from 'react' 

import {
	StyleSheet,
	AppRegistry,
		View,
		Text,
		StatusBar		} from 'react-native'

		
		
class App extends React.Component {
	render() {
		
		return(
		
		<View style={styles.container} > 
		<StatusBar hidden={true} />
	<Text style={[styles.defaultText, styles.selectedText]} > Book 1 </Text>
		<Text style={styles.defaultText}> Book 2 </Text>
		<Text style={styles.defaultText}> Book 3 a </Text>
		<Text style={styles.defaultText}> Book 3 b </Text>
		<Text style={styles.defaultText}> Book 3 c </Text>
		<Text style={styles.defaultText}> Book 4 </Text>
		<Text style={styles.defaultText}> Book 5 a </Text>
		</View>
		
	)
	}	
}

const styles = StyleSheet.create({
			defaultText: {
				
				fontSize: 22,
				padding: 10, 
				margin : 5,
				color: 'black' ,
				borderWidth: 1 ,
				textAlign: 'center' 
			},
			
			selectedText:{
				
				backgroundColor : 'yellow' ,
				color: 'blue',
				fontWeight: 'bold'
			}
			,container:{
				flexDirection: 'column', 
				justifyContent: 'flex-start',
				
				backgroundColor: '#DDD' 
			}
		})

AppRegistry.registerComponent('SampleApp' , () => App ) 