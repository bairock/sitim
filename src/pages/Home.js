import { StyleSheet, View, Image, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'

import Main from '../assets/main.svg'


const Home = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={Main}
                    style={[styles.image, { marginHorizontal: isPortrait ? 25 : 40, marginTop: isPortrait ? '20vh' : '30vh' }]}
                    resizeMode='contain'
                />
                <Text style={[styles.title, { marginTop: isPortrait ? 0 : 30 }]}>здесь начинается развитие</Text>
                <View style={styles.memberButton}>
                    <Text style={styles.memberText}>Открыть пространство</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: '100vh',
    },
    image: {
        height: '30vh',
        marginTop: '30vh',
        marginHorizontal: 40
    },
    title: {
        fontSize: 42,
        alignSelf: 'center',
        fontWeight: '900',
        fontFamily: 'Manrope',
        marginTop: 30,
        textAlign: 'center',
        marginHorizontal: 15
    },
    memberButton: {
        alignSelf: 'center',
        height: 55,
        backgroundColor: '#4a0a52',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        paddingHorizontal: 25
    },
    memberText: {
        color: '#fff',
        fontWeight: '700',
        fontFamily: 'Manrope',
        fontSize: 16
    }
})

export default Home