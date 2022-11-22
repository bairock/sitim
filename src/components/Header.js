import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import logo from '../assets/logo.svg'
import documents from '../assets/docs.zip'

const Header = ({ onScrollTo }) => {
    const is1115 = useMediaQuery({ query: '(max-width: 1115px)' })

    return (
        <View style={styles.container}>
            <View style={styles.limit}>
                <Image style={styles.logo} source={logo} />
                {
                    !is1115 ? (
                        <View style={styles.menuContainer}>
                            <TouchableOpacity onPress={() => onScrollTo('network')}>
                                <Text style={styles.menuText}>Сеть пространств</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onScrollTo('about')}>
                                <Text style={styles.menuText}>О пространстве</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onScrollTo('open')}>
                                <Text style={styles.menuText}>Как открыть пространство</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onScrollTo('team')}>
                                <Text style={styles.menuText}>Команда развития сети</Text>
                            </TouchableOpacity>
                            <TouchableOpacity accessibilityRole='link' href={documents} download={'Документы'}>
                                <Text style={styles.menuText}>Документы</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F0425',
    },
    logo: {
        height: 75,
        width: 75
    },
    menuContainer: {
        flexDirection: 'row',
    },
    menuText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal: 12
    },
    limit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 120,
        maxWidth: 1366,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 24
    }
})

export default Header