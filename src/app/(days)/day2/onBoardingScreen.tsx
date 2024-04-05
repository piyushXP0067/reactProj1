import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated , { FadeIn, FadeOut, SlideInLeft } from 'react-native-reanimated';


const onboardingSteps = [{
    icon: 'snowflake',
    title: 'Welcome',
    description: 'Greetings and a big welcome to you! Your presence enriches our community, and we\'re looking forward to getting to know you better. Let\'s make this journey together unforgettable!',
},
{
    icon: 'people-arrows',
    title: 'Track every transaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum felis at nunc tempor, ac lacinia nulla malesuada. Integer vehicula tortor non est luctus, nec congue arcu convallis. Phasellus gravida velit nec dui dapibus, id fermentum libero malesuada. Vivamus eget ultricies lorem. Fusce hendrerit est eunulla volutpat,eget rutrum justo consequat. Sed nec velit eget turpis',
},
{
    icon: 'child',
    title: 'Education for all',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum libero vitae turpis cursus, eget consectetur risus eleifend. Integer id magna id velit feugiat rutrum. Proin eleifend eros nec ex vehicula, id vestibulum tortor fermentum. Morbi vel purus sed mauris pharetra mollis. Aliquam quis felis sed sapien sollicitudin bland',
}];

export default function onBoardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);
    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const islastScreen = screenIndex == onboardingSteps.length - 1;
        if (islastScreen) {
            endonboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }

    };

    const onBack = () => {
        const isFirstScreen = screenIndex == 0;
        if (isFirstScreen) {
            endonboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }

    };

    const endonboarding=()=>{
        setScreenIndex(0);
        router.back();
    }

    const swipeForward = Gesture.Fling()
    .direction( Directions.LEFT)
    .onEnd((event) => {
        
        console.log('fling',event);
        onContinue();
    });

    const swipeBackward = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd((event) => {
        console.log('fling',event);
        onBack();
    });

    const swipes = Gesture.Simultaneous(swipeBackward, swipeForward);

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style='light' />


            <View style={styles.stepIndicatorContainer}>
                {
                    onboardingSteps.map((step, index) => (
                        <View
                            key={index}
                            style={[
                                styles.stepIndicator,
                                { backgroundColor: index === screenIndex ? '#CEF202' : 'grey' },
                            ]}
                        />
                    ))}
            </View>

            <GestureDetector gesture={swipes}>
                <Animated.View entering={FadeIn } exiting={FadeOut} style={styles.pageContent} key={screenIndex}>
                    <FontAwesome5 style={styles.image} 
                    name={data.icon} 
                    size={100}
                     color="#CEF202" 
                     />
                    <View style={styles.footer}>
                        <Animated.Text entering={SlideInLeft} style={styles.title} key = {screenIndex}>{data.title}</Animated.Text>
                        <Text style={styles.description}>{data.description}</Text>
                    
                    <View style={styles.ButtonRow}>
                        <Text style={styles.ButtonText}>Skip</Text>
                        <Pressable onPress={onContinue} style={styles.Buttons}>
                            <Text style={styles.ButtonText}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </Animated.View>
        </GestureDetector>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
    page: {

        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',
        padding: 20
    },

    pageContent: {
        padding: 20,
        flex: 1,

    },

    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 50,
    },

    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        letterSpacing: 1.3,
        marginVertical: 10,
    },

    footer: {
        marginTop: 'auto',
    },

    description: {
        color: 'gray',
        fontSize: 20,
        lineHeight: 28,
        fontFamily: 'Inter'
    },

    ButtonRow: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },

    Buttons: {
        backgroundColor: '#302E28',

        borderRadius: 25,
        alignItems: 'center',
        flex: 1
    },

    ButtonText: {
        color: '#FDFDFD',
        fontFamily: 'Inter',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
        fontWeight: 'bold',
    },

    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',

        borderRadius: 10,
    },

    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 15,

    },

});
