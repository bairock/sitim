import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import sitimMain from '../assets/sitimMain.svg'
import imageMain from '../assets/imageMain.svg'

const Main = ({ main }) => {
    const is1150 = useMediaQuery({ query: '(max-width: 1150px)' })

    return (
        <View ref={main} style={styles.container}>
            <View style={[styles.limit, is1150 ? { alignItems: 'center' } : null]}>
                <Image source={imageMain} style={[styles.imageMain, is1150 ? { display: 'none' } : null]} />
                <View style={[{ alignItems: 'center' }]}>
                    <Image source={sitimMain} style={[styles.sitimMain, is1150 ? { width: '80vw', height: 300 } : null]} />
                    <TouchableOpacity accessibilityRole='link' href='https://wa.me/79854353593' target='_blank' style={[styles.openSpace, is1150 ? { width: '100%' } : null]}>
                        <Text style={[styles.openSpaceText, is1150 ? { fontSize: 27 } : null]}>Открыть пространство</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    limit: {
        maxWidth: 1366,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 24,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    menuText: {
        fontWeight: '300',
        fontSize: 24,
        marginVertical: 24
    },
    sitimMain: {
        width: 550,
        height: 350,
        resizeMode: 'contain',
    },
    imageMain: {
        position: 'absolute',
        width: 600,
        height: '80vh',
        resizeMode: 'contain',
        top: '7vh',
        right: 0
    },
    openSpace: {
        width: 360,
        height: 90,
        borderRadius: 24,
        backgroundColor: '#FF932A',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        borderWidth: 1,
        borderColor: 'rgba(31, 4, 37, 0.04)',
    },
    openSpaceText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '500'
    }
})

export default Main