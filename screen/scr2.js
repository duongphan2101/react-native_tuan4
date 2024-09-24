
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'expo-checkbox';
export default function App({navigation}) {
  const [isChecked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(false);
  const [userData, setUserData] = useState([]);

  const getUser = () =>{
    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Password: ", password);
    const data = {username, email, password};
    setUserData([...userData, data]);
    const newUser = [...userData, data];
    console.log("Mang duoc luu 1: ", userData);
    navigation.navigate('Login', {userData: newUser});
  }

  return (
    <View style={styles.container}>
        <View style={styles.style1}>
            <Image source={require('../assets/DATA/Image19.png')}/>
            <Text style={{fontSize: 30, fontWeight: 'bold', padding: 10}}>Nice to see you!</Text>
            <Text style={{fontSize: 14, color: 'gray', marginTop: -10}}>Create your account</Text>
        </View>
        <View style={styles.style2}>
            <View style={styles.inputContainer}>
              <Icon name="user" color={'gray'} size={20} style={styles.icon} />
              <TextInput 
                textContentType='username' 
                style={styles.input} 
                placeholder="Enter your user name" 
                placeholderTextColor="gray"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="envelope" color={'gray'} size={20} style={styles.icon} />
              <TextInput 
                textContentType='email'
                style={styles.input} 
                placeholder="Enter your email address"
                placeholderTextColor="gray"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock" color={'gray'} size={20} style={styles.icon} />
              <TextInput 
                textContentType='password'
                style={styles.input} 
                placeholder="Enter your password"
                placeholderTextColor="gray"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>
        </View>

        <View style={styles.style4}>
            <CheckBox value={isChecked} onValueChange={setChecked} color={isChecked ? '#00CCFF':undefined}/>
            <Text style={{marginLeft: 5}}>I agree with <Text style={{color: '#00CCFF'}}>Terms & Conditions</Text></Text>
        </View>
        <View style={{padding: 20}}>
            <TouchableOpacity style={{backgroundColor: '#00CCFF', padding: 15, borderRadius: 10}} onPress={getUser}>
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

  style4: { 
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: -10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 15,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },


});
