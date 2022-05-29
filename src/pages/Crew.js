import { StyleSheet, View, Image, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'

const crew = [
    {
        title: 'Степанов Иван',
        subtitle: 'Директор АНО «Индустрия будущего»',
        url: require('../assets/ivanStepanov.jpg')
    },
    {
        title: 'Дмитриев Семен',
        subtitle: 'Digital & media менеджер',
        url: require('../assets/semenDmitriev.jpg')
    },
    {
        title: 'Стручков Ньургун',
        subtitle: 'Заместитель директора',
        url: require('../assets/struchkovNurgun.jpg')
    },
    {
        title: 'Дмитриева Анастасия',
        subtitle: 'Менеджер по работе с сообществами',
        url: require('../assets/dmitrievaAnastasiya.jpg')
    },
    {
        title: 'Егорова Сандаара',
        subtitle: 'Проектный менеджер',
        url: require('../assets/egorovaSandara.jpg')
    },
    {
        title: 'Ноговицина Айталина',
        subtitle: 'Куратор и наставник проектов',
        url: require('../assets/nogovicenaAyta.jpg')
    },
    {
        title: 'Ноговицина Любовь',
        subtitle: 'Менеджер по юридическому сопровождению',
        url: require('../assets/nogovicenaLove.jpg')
    },
]

// Площадки

const Crew = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

    return (
        <View>
            <View style={styles.titleContainer}>
                <View style={styles.marginLayout}>
                    <Text style={[styles.title, { fontSize: isPortrait ? 34 : 60 }]}>Команда развития сети </Text>
                    <Text style={styles.subtitle}>Проект «Сеть пространств развития «Ситим» в муниципальных образованиях Республики Саха (Якутия)» разработан и реализуется командой Автономной некоммерческой организацией по развитию стратегических инициатив «Индустрия будущего» при участии заинтересованных организаций.</Text>
                </View>
            </View>
            <View style={styles.teamContainer}>
                <View style={[styles.marginLayout, { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }]}>
                    {
                        crew.map(({ title, subtitle, url }, index) => (
                            <View key={index} style={styles.cardContainer}>
                                <Image style={styles.cardImage} source={{ uri: url }} />
                                <View style={styles.titleCardContainer}>
                                    <Text style={styles.cardTitle}>{title}</Text>
                                    <Text style={styles.cardSubtitle}>{subtitle}</Text>
                                </View>
                            </View>
                        ))
                    }
                    {
                        isPortrait ? null : <View style={{ width: 260, height: 410 }} />
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        minHeight: 500,
        backgroundColor: '#370842',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: 80,
        paddingBottom: 20
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 60,
        paddingTop: 4,
        paddingBottom: 14
    },
    subtitle: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
        maxWidth: 1000
    },
    marginLayout: {
        maxWidth: 1200,
        width: '100%',
    },
    teamContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingHorizontal: 40
    },
    cardContainer: {
        width: 260,
        height: 410,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 50
    },
    cardImage: {
        height: 260,
    },
    cardTitle: {
        color: '#000',
        fontWeight: '600',
        fontSize: 16,
    },
    titleCardContainer: {
        paddingHorizontal: 20,
        paddingVertical: 18
    },
    cardSubtitle: {
        color: '#000',
        fontWeight: '300',
        fontSize: 14,
        marginTop: 8
    }
})

export default Crew