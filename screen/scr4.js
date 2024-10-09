
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'expo-checkbox';
export default function App({navigation}) {
    const [value, setvalue] = useState(2);
    const [img, setImg] = useState(require('../assets/DATA/Container73.png'));
    const [product, setProduct] = useState('Cake');
    const [price, setPrice] = useState(2.99);
    const [Total, setTotal] = useState(value * price);
    const prevValue = () => {
        setvalue(value > 0 ? value - 1 : 0);
    }
    const nextValue = () => {
        setvalue(value +1);
    }

    const imgIsSelected = (image) => {
        setImg(image)
    }

    const changeProduct = (image, index) =>{
        imgIsSelected(image);
        if(index == 1){
            setProduct('Keo');
            setPrice(1.3);
            setTotal(value * price);
        } else if(index == 2){
            setProduct('Pear');
            setPrice(1.5);
            setTotal(value * price);
        } else if(index == 3) {
            setProduct('Cake');
            setPrice(2.99);
            setTotal(value * price);
        }else {
            setProduct('Cherry');
            setPrice(2.0);
            setTotal(value * price);
        }
    }
  return (
    <View style={styles.container}>
        <View>
            <Image style = {{width: '100%'}} source={img}/>
        </View>
        <View style={styles.style1}>
            <TouchableOpacity onPress={ () => changeProduct(require('../assets/DATA/Image72.png'), 1)}>
                <Image source={require('../assets/DATA/Container72.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeProduct(require('../assets/DATA/Image71.png'), 2)}>
                <Image source={require('../assets/DATA/Container71.png')}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => changeProduct(require('../assets/DATA/Container73.png'), 3)}>
                <Image source={require('../assets/DATA/Container74.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeProduct(require('../assets/DATA/Image7.png'), 4)}>
                <Image source={require('../assets/DATA/Container7.png')}/>
            </TouchableOpacity>
        </View>
        <View style={styles.style3}>
            <Text style={{color: '#00CCFF', fontSize: 34, fontWeight: 'bold'}}>${price}</Text>
            <Text style={styles.style2}>Buy 1 get 1</Text>
        </View>
        <View style={[styles.style3, {justifyContent: 'space-between'}]}>
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{product}</Text>
                <Text style={{color: 'gray'}}>Occaecat est desernt tempor offici</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/DATA/Rating3.png')}/>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>4.5</Text>
            </View>
        </View>
        <View style={{marginTop: 5}}>
            <Text>Size</Text>
            <View style = {{flexDirection: 'row', marginTop: 5}}>
                <Text style = {[styles.style4, {borderTopLeftRadius: 5, borderBottomLeftRadius: 5}]}>XS</Text>
                <Text style = {styles.style4}>S</Text>
                <Text style = {[styles.style4, {backgroundColor: '#00CCFF', color: 'white', borderColor: '#00CCFF'}]}>M</Text>
                <Text style = {styles.style4}>L</Text>
                <Text style = {[styles.style4, {borderTopRightRadius: 5, borderBottomRightRadius: 5}]}>XL</Text>
            </View>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}> 
            <View>
                <Text>Quantity</Text>
                <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <TouchableOpacity style={[styles.style5, styles.circle, {backgroundColor: 'lightgrey'}]}
                        onPress={prevValue}
                    ><Text style={{fontSize: 22}}>-</Text></TouchableOpacity>
                    <Text style={styles.style5}>{value}</Text>
                    <TouchableOpacity style={[styles.style5, styles.circle, {backgroundColor: '#00CCFF'}]}
                        onPress={nextValue}
                    ><Text style={{fontSize: 23, color: 'white'}}>+</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'grey', marginRight: 10}}>Total</Text>
                <Text style={{fontSize: 22}}>${Total.toFixed(1)}</Text>
            </View>
        </View>
        <View style={[styles.style6, {marginTop: 10}]}>
            <Text style={{fontWeight: 'bold'}}>
                Size guide
            </Text>
            <Icon name='chevron-right' color={'gray'} size={20}/>
        </View>
        <View style={[styles.style6, {borderBottomColor: 'lightgray', borderBottomWidth: 0.5}]}>
            <Text style={{fontWeight: 'bold'}}>
                Reviews (99)
            </Text>
            <Icon name='chevron-right' color={'gray'} size={20}/>
        </View>
        <View>
            <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign: 'center', color: 'white'}}> <Icon name='cart-plus' color={'white'} size={20}/> Add to cart</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    paddingTop: 0
  },
  style1: {
   marginTop: 5,
   flexDirection: 'row',
   justifyContent: 'space-between'
  },
  style2 : {
    color: '#B03060',
    fontSize: 11,
    backgroundColor: '#FFC0CB',
    padding: 3,
    borderRadius: 5,
    marginLeft: 10
  },
  style3 : {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  style4 : {
    padding: 15,
   borderColor: 'gray',
   borderWidth: 1,
    color: 'gray'
  },
  style5 : {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 35,
  },
  style6: {
    borderTopColor: 'lightgray', 
    borderTopWidth: 0.5,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  btn: {
    backgroundColor: '#00CCFF',
    padding: 20,
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
    marginTop:10 
    },
 
});
