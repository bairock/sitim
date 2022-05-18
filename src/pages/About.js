import { StyleSheet, View, Text, useWindowDimensions } from 'react-native'
import { useMediaQuery } from 'react-responsive'

const About = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const { width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            <View style={[styles.paddingContainer, { maxWidth: isPortrait ? width : 1200 }]}>
                <Text style={[styles.title, { fontSize: isPortrait ? 34 : 60 }]}>О пространстве</Text>
                <Text style={[styles.subtitle, { fontSize: isPortrait ? 30 : 38, marginBottom: isPortrait ? 60 : 0 }]}>Пространство коллективной работы "Sitim" это:</Text>
            </View>
            <View style={[styles.paddingContainer, { maxWidth: isPortrait ? width : 1200 }]}>
                <View style={[styles.infoContainer, { flexDirection: isPortrait ? 'column' : 'row', marginTop: isPortrait ? 0 : 80 }]}>
                    <View style={styles.block}>
                        <Text style={styles.infoTitle}>INDEPENDENT</Text>
                        <Text style={styles.description}>Независимая онлайн и оффлайн площадка для повышения социальной активности местного населения и побуждения к преобразованию села.</Text>
                    </View>
                    {isPortrait ? null : <View style={styles.verticalLine} />}
                    <View style={styles.block}>
                        <Text style={styles.infoTitle}>NOVATOR</Text>
                        <Text style={styles.description}>Проектная площадка для инициации новых идей и предложений.</Text>
                    </View>
                </View>
                {isPortrait ? null : <View style={styles.horizontalLine} />}
                <View style={[styles.infoContainer, { flexDirection: isPortrait ? 'column' : 'row', marginTop: isPortrait ? 0 : 80 }]}>
                    <View style={styles.block}>
                        <Text style={styles.infoTitle}>COMMUNITY</Text>
                        <Text style={styles.description}>Место для формирования местных сообществ и консолидации жителей.</Text>
                    </View>
                    {isPortrait ? null : <View style={styles.verticalLine} />}
                    <View style={styles.block}>
                        <Text style={styles.infoTitle}>COMFORT</Text>
                        <Text style={styles.description}>Удобное комфортное современное пространство для организации проектно- ориентированных, образовательных и просветительских мероприятий.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 200,
        marginBottom: 50
    },
    title: {
        fontSize: 60,
        fontWeight: '800',
        fontFamily: 'Manrope',
        textTransform: 'uppercase',
        marginBottom: 60,
        marginHorizontal: 15
    },
    subtitle: {
        fontSize: 38,
        fontWeight: '700',
        fontFamily: 'Manrope',
        marginTop: 40,
        textTransform: 'uppercase',
        marginHorizontal: 15
    },
    paddingContainer: {
        maxWidth: 1200,
        width: '100%',
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 80
    },
    description: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Manrope',
    },
    infoTitle: {
        fontSize: 38,
        fontWeight: '700',
        fontFamily: 'Manrope',
        marginBottom: 25
    },
    block: {
        flex: 1,
        marginBottom: 25,
        marginHorizontal: 15
    },
    verticalLine: {
        borderLeftWidth: 1,
        marginHorizontal: 50
    },
    horizontalLine: {
        borderBottomWidth: 1
    },
})

export default About