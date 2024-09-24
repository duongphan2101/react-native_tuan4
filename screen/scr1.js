import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default function App({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{paddingTop: 10, alignItems:'center'}}>
            <Image source={require('../assets/DATA/Container17.png')}/>
        </View>
        <View style={styles.style1}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Boost Productivity</Text>
            <Text style={{color: 'gray'}}>Simplify tasks, boost productivity</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.style3} onPress={()=> {
                navigation.navigate('Sign up');
            }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFF'}} onPress={()=>{
              navigation.navigate('Login');
            }}>
                    <Text style={{textAlign: 'center'}}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.style4}>
            <View style={styles.circle}></View>
            <View style={[styles.circle, {backgroundColor: '#00CCFF'}]}></View>
            <View style={styles.circle}></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  style1: {
    padding: 10,
    paddingLeft: 20
  },
  style3: {
    backgroundColor: '#00CCFF',
    padding: 20,
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
    margin: 15
    },
    style4: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

circle: {
        width: 20,
        height: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#00CCFF',
        margin: 5
      },


});
