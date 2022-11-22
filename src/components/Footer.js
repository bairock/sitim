import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useMediaQuery } from 'react-responsive'

const Footer = ({ onScrollTo }) => {
    const is728 = useMediaQuery({ query: '(max-width: 728px)' })

    return (
        <View style={styles.container}>
            <View style={styles.limit}>
                <View style={{ marginRight: 24 }}>
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
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={[styles.menuText, is728 ? { width: 320 } : null]}>Республика Саха (Якутия), город Якутск, проспект Ленина 1, этаж 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menuText}>7 (924) 560 29 78</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menuText}>anofutureindustry@gmail.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menuText}>2022 © Все права защищены.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF932A',
        paddingVertical: 72
    },
    limit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: 1366,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 24,
        flexWrap: 'wrap'
    },
    menuText: {
        fontWeight: '300',
        fontSize: 24,
        marginVertical: 24,
    }
})

export default Footer