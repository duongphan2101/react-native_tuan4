import CheckBox from '@react-native-community/checkbox';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const icon = <Icon name='user' color={'gray'} size={20}/>;
export default function App({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.style1}>
            <Image source={require('../assets/DATA/Image19.png')}/>
            <Text style={{fontSize: 30, fontWeight: 'bold', padding: 10}}>Nice to see you!</Text>
            <Text style={{fontSize: 14, color: 'gray', marginTop: -10}}>Create your account</Text>
        </View>
        <View style={styles.style2}>
            <TextInput textContentType='text' style={styles.style3} placeholder="Enter your user name"/>
            <TextInput textContentType='email' style={styles.style3} placeholder="Enter your email address"/>
            <TextInput textContentType='password' style={styles.style3} placeholder="Enter your password" secureTextEntry={true}/>
        </View>

        <View style={styles.style4}>
            {/* <CheckBox/> */}
            <Text>I agree with <Text style={{color: '#00CCFF'}}>Terms & Conditions</Text></Text>
        </View>
        <View style={{padding: 20}}>
            <TouchableOpacity style={{backgroundColor: '#00CCFF', padding: 15, borderRadius: 10}}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  style1: { 
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  style2: { 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50, 
  },
  style3: { 
   padding: 10,
   borderColor: 'gray',
   borderWidth: 1,
   width: '100%',
   borderRadius: 10,
   marginBottom: 20
  },
  style4: { 
    paddingLeft: 20,
  },

});
