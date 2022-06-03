import { StyleSheet, View, Image, Text } from 'react-native'
import { FaVk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Logo from '../assets/mesto.svg'

const Header = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    return (
        <View style={[styles.container, isPortrait ? { overflowX: 'scroll' } : null]}>
            <Link onClick={() => window.scrollTo(0, 0)} to='/'>
                <Image resizeMode='contain' style={styles.icon} source={Logo} />
            </Link>
            <View style={styles.containerMenu}>
                <Link onClick={() => window.scrollTo(0, 0)} to='/about'>
                    <Text style={styles.textMenu}>О пространстве</Text>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} to='/network'>
                    <Text style={styles.textMenu}>Сеть пространств</Text>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} to='/open'>
                    <Text style={styles.textMenu}>Как открыть пространство</Text>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} to='/crew'>
                    <Text style={styles.textMenu}>Команда развития сети</Text>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} to='/docs'>
                    <Text style={styles.textMenu}>Документы</Text>
                </Link>
                <Link onClick={() => window.scrollTo(0, document.body.scrollHeight)} to='/'  >
                    <Text style={styles.textMenu}>Контакты</Text>
                </Link>
            </View>
            <View style={styles.action}>
                <a href='https://vk.com/prostranstvo_sitim'  >
                    <FaVk size={30} color='#4a0a52' />
                </a>
                {/* <View style={styles.button}>
                    <Text style={styles.buttonText}>Подписаться</Text>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        position: 'fixed',
        width: '100%',
        backgroundColor: '#f5f5f5',
        zIndex: 1,
    },
    icon: {
        height: 50,
        width: 35,
        marginRight: 25
    },
    containerMenu: {
        flexDirection: 'row'
    },
    textMenu: {
        marginHorizontal: 15,
        fontSize: 15,
        color: '#16061c',
        fontWeight: '600',
    },
    button: {
        alignSelf: 'center',
        height: 40,
        borderColor: '#4a0a52',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginLeft: 40
    },
    buttonText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 14
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25
    }
})

export default Header