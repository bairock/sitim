import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import howToOpenSpace from '../assets/howToOpenSpace.pdf'

const Open = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { fontSize: isPortrait ? 34 : 60 }, isPortrait ? { margin: 15 } : null]}>Как открыть пространство</Text>
            <Text style={[styles.subtitle, { fontSize: isPortrait ? 24 : 38 }, isPortrait ? { margin: 15 } : null]}>Заинтересованные команды должны пройти акселерационный (ускоренный) образовательный курс, в целях подготовки и проработки организационных вопросов по открытию пространства.</Text>
            <View style={[styles.infoContainer, { flexDirection: isPortrait ? 'column' : 'row' }, isPortrait ? { margin: 0 } : null]}>
                <View style={[styles.block, isPortrait ? { margin: 15 } : null]}>
                    <Text style={styles.numberTitle}>1 ЭТАП</Text>
                    <Text style={styles.description}>Инициация создания пространства со стороны заинтересованных лиц.</Text>
                </View>
                {isPortrait ? null : <View style={styles.verticalLine} />}
                <View style={[styles.block, isPortrait ? { margin: 15 } : null]}>
                    <Text style={styles.numberTitle}>2 ЭТАП</Text>
                    <Text style={styles.description}>Рабочая встреча со стейкхолдерами и заинтересованными лицами.</Text>
                </View>
            </View>
            {isPortrait ? null : <View style={styles.horizontalLine} />}
            <View style={[styles.infoContainer, { flexDirection: isPortrait ? 'column' : 'row' }, isPortrait ? { margin: 0 } : null]}>
                <View style={[styles.block, isPortrait ? { margin: 15 } : null]}>
                    <Text style={styles.numberTitle}>3 ЭТАП</Text>
                    <Text style={styles.description}>Формирование команды создания пространства.</Text>
                </View>
                {isPortrait ? null : <View style={styles.verticalLine} />}
                <View style={[styles.block, isPortrait ? { margin: 15 } : null]}>
                    <Text style={styles.numberTitle}>4 ЭТАП</Text>
                    <Text style={styles.description}>Формирование «ядерной» группы и сообщества.</Text>
                </View>
            </View>
            {isPortrait ? null : <View style={styles.horizontalLine} />}
            <View style={[styles.infoContainer, { flexDirection: isPortrait ? 'column' : 'row' }, isPortrait ? { margin: 0 } : null]}>
                <View style={[styles.block, isPortrait ? { margin: 15 } : null]}>
                    <Text style={styles.numberTitle}>5 ЭТАП</Text>
                    <Text style={styles.description}>Выработка концепции.</Text>
                </View>
                {isPortrait ? null : <View style={styles.verticalLine} />}
                <View style={[styles.block, isPortrait ? { margin: 15 } : null]}>
                    <Text style={styles.numberTitle}>6 ЭТАП</Text>
                    <Text style={styles.description}>Финансовый расчет на создание пространства.</Text>
                </View>
            </View>
            {isPortrait ? null : <View style={styles.horizontalLine} />}
            <View style={[styles.infoContainer, { flexDirection: isPortrait ? 'column' : 'row' }, isPortrait ? { margin: 0 } : null]}>
                <View style={[styles.block, isPortrait ? { margin: 15 } : null]}>
                    <Text style={styles.numberTitle}>7 ЭТАП</Text>
                    <Text style={styles.description}>Подготовка помещения к открытию.</Text>
                </View>
                {isPortrait ? null : <View style={styles.verticalLine} />}
                <View style={[styles.block, isPortrait ? { margin: 15 } : null]}>
                    <Text style={styles.numberTitle}>8 ЭТАП</Text>
                    <Text style={styles.description}>Подготовка к мероприятию открытие пространства развития «Ситим»</Text>
                </View>
            </View>
            <TouchableOpacity accessibilityRole='link' href={howToOpenSpace} download='howToOpenSpace' style={styles.button}>
                <Text style={styles.buttonText}>Подробнее</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        fontWeight: '800',
        textTransform: 'uppercase',
        marginBottom: 60,
    },
    container: {
        maxWidth: 1200,
        width: '100%',
        alignSelf: 'center',
        marginTop: 200,
        marginBottom: 50
    },
    subtitle: {
        fontSize: 38,
        fontWeight: '700',
        marginTop: 40,
        textTransform: 'uppercase'
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 80,
    },
    description: {
        fontSize: 20,
        fontWeight: '500',
    },
    numberTitle: {
        fontSize: 38,
        fontWeight: '700',
        color: '#4a0a52',
        marginBottom: 30
    },
    block: {
        flex: 1,
        marginBottom: 25,
    },
    verticalLine: {
        borderLeftWidth: 1,
        marginHorizontal: 50
    },
    horizontalLine: {
        borderBottomWidth: 1
    },
    button: {
        alignSelf: 'center',
        height: 55,
        backgroundColor: '#4a0a52',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        paddingHorizontal: 25
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    }
})

export default Open