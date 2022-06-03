import { StyleSheet, View, Image, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import Main from '../assets/sitim.svg'


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
                {/* <Text style={[styles.title, { marginTop: isPortrait ? 0 : 30, fontSize: isPortrait ? 32 : 42 }]}>здесь начинается развитие территорий</Text> */}
                <Link onClick={() => window.scrollTo(0, 0)} style={{ alignSelf: 'center' }} to='/open'>
                    <View style={styles.memberButton}>
                        <Text style={styles.memberText}>Открыть пространство</Text>
                    </View>
                </Link>
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
        marginTop: 30,
        textAlign: 'center',
        marginHorizontal: 15
    },
    memberButton: {
        height: 55,
        backgroundColor: '#4a0a52',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        paddingHorizontal: 25
    },
    memberText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    }
})

export default Home