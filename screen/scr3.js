
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, route, Alert} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'expo-checkbox';
export default function App({navigation, route}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(false);
    const check = () => {
      const {userData} = route.params;
      if(userData && userData.length > 0){
        userData.forEach(user => {
          if(email===user.email && password === user.password){
            navigation.navigate('Product name');
          }
          else {
            Alert.alert("Lỗi", "Thông tin đăng nhập không chính xác.");
          }
        });
      }
  }
  return (
    <View style={styles.container}>
        <View>
            <Image style = {{width: '100%'}} source={require('../assets/DATA/Image20.png')}/>
        </View>
        <View style={styles.stytle1}>
            <Text style={{fontSize: 26, fontWeight: 'bold'}}>
                Welcome!
            </Text>
            <View style={styles.stytle2}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Email</Text>
                <View style={styles.inputContainer}>
                    <Icon name="envelope" color={'gray'} size={20} style={styles.icon} />
                    <TextInput 
                        textContentType='email'
                        style={styles.input} 
                        placeholder="Enter email"
                        placeholderTextColor="gray"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Password</Text>
                <View style={styles.inputContainer}>
                    <Icon name="lock" color={'gray'} size={20} style={styles.icon} />
                    <TextInput 
                        textContentType='pass'
                        style={styles.input} 
                        placeholder="Enter password"
                        placeholderTextColor="gray"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
            </View>
            <View>
            <TouchableOpacity style={styles.style3} onPress={check}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
            </TouchableOpacity>
        </View>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stytle1: {
    padding: 20,
  },
  stytle2: {
    paddingTop: 50,
    paddingBottom: 100
  },  
  style3: {
    backgroundColor: '#00CCFF',
    padding: 20,
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
    },
  inputContainer: {
    backgroundColor: '#EEEE',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    marginTop: 5
  },
  input: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
