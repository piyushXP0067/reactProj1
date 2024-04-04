import { Link } from "expo-router";
import { Text , View,StyleSheet, Pressable} from "react-native";

type DayListItem = {
    day: number;
};

export default function DayListItem({ day }: DayListItem) {
    
    return (
      <Link href={`/day${day}`} asChild>
        <Pressable style={styles.box}>
          <Text style={styles.text}>{day}</Text>
        </Pressable>
      </Link>
    );
  }

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#f9ede3',
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
      fontSize: 75,
      fontFamily:'amaticBold',
    }
  });
  