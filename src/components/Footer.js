import { StyleSheet, View, Image, Text, useWindowDimensions } from 'react-native'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Main from '../assets/main_white.svg'

const Footer = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const { width } = useWindowDimensions()

    return (
        <View style={{ backgroundColor: '#1f0425', paddingHorizontal: 40 }}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode='contain' style={styles.main} source={Main} />
                </View>
                <View style={styles.menuContainer}>
                    <View>
                        <Link style={{ marginBottom: 15 }} to='/about'>
                            <Text style={styles.textMenu}>О пространстве</Text>
                        </Link>
                        <Link style={{ marginBottom: 15 }} to='/open'>
                            <Text style={styles.textMenu}>Как открыть пространство</Text>
                        </Link>
                        <Link style={{ marginBottom: 15 }} to='/crew'>
                            <Text style={styles.textMenu}>Команда развития сети</Text>
                        </Link>
                        <Link style={{ marginBottom: 15 }} onClick={() => window.scrollTo(0, document.body.scrollHeight)} to='/' >
                            <Text style={styles.textMenu}>Контакты</Text>
                        </Link>
                    </View>
                    <View>
                        <View style={{ marginBottom: 15, maxWidth: isPortrait ? width / 1.5 : 'auto' }}>
                            <Text style={styles.textMenu}>Республика Саха (Якутия), город Якутск, проспект Ленина 1, этаж 2</Text>
                            <Text style={styles.textInfoMenu}>Адрес</Text>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={styles.textMenu}>7 (924) 560 29 78</Text>
                            <Text style={styles.textInfoMenu}>Контактный телефон</Text>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={styles.textMenu}>saydyy2020@gmail.com</Text>
                            <Text style={styles.textInfoMenu}>Электронная почта</Text>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={styles.textMenu}>Студией IT Kitchen</Text>
                            <Text style={styles.textInfoMenu}>Разработано</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.textInfoMenu}>2022 © Все права защищены.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 1200,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 25
    },
    main: {
        height: 50,
        width: 115,
        alignSelf: 'baseline'
    },
    textMenu: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
        
    },
    textInfoMenu: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '300',
        
        opacity: 0.4
    },
    logoContainer: {
        height: 150,
        justifyContent: 'center'
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    marginBottom: {
        marginBottom: 15
    }
})

export default Footer