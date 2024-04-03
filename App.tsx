import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import DayListItem from './src/components/core/DayListItem';

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>
<FlatList
data={days}
numColumns={2}
contentContainerStyle = {styles.content}
columnWrapperStyle = {styles.column}
renderItem={({ item }) => <DayListItem day={item} />}
/>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    
  },
  content:{
    // backgroundColor: 'red',
    gap: 10,
    padding:10,
  },
  column:{
    gap: 10 
  },
  box: {
    backgroundColor: '#f9ede3',
    // width:100,
    // height:100,
    flex:1,
    aspectRatio:1,
    borderRadius:20,
    justifyContent: 'center',
    alignItems : 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',


  },
  text:{
    color:'#9b4521',
    fontSize: 70
  }
});
