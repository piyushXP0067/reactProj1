import { Text , View,StyleSheet} from "react-native";

type DayListItem = {
    day: number;
};

export default function DayListItem({day}: DayListItem){

    return ( 
    <View style={styles.box}>
        <Text style={styles.text}>{day}</Text>
    </View>
      );
} 

const styles = StyleSheet.create({
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
  