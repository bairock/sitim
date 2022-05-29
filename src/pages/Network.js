import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import BackdropFilter from "react-backdrop-filter"

const titEbe = require('../assets/titEbe.jpg')
const titEbeTwo = require('../assets/titEbeTwo.jpg')
const titEbeThree = require('../assets/titEbeThree.jpg')
const titEbeFour = require('../assets/titEbeFour.jpg')

const Network = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

    return (
        <View style={styles.paddingContainer}>
            <Text style={[styles.title, { fontSize: isPortrait ? 34 : 60 }, isPortrait ? { margin: 15 } : null]}>Сеть пространств</Text>
            <View style={[styles.spaceContainer, { marginTop: isPortrait ? 0 : 50, paddingBottom: isPortrait ? 0 : 50 }]}>
                <Text style={styles.spaceTitle}>Тит-Эбя</Text>
                <ImageBackground source={titEbe} style={[styles.spaceBlock, { width: isPortrait ? '100%' : 360 }]}>
                </ImageBackground>
                <View style={styles.spaceBlock}>
                    <Text style={styles.spaceDescription}>Это свободное офисное пространство, в котором можно арендовать рабочее место или переговорную комнату. Существенное отличие от офиса в том, что здесь собираются люди из разных компаний, не зависящие друг от друга по рабочим вопросам.</Text>
                </View>
            </View>
            <View style={styles.spaceContainer}>
                <Text style={styles.spaceTitle}>Бердигестях</Text>
                <ImageBackground source={titEbeTwo} style={[styles.spaceBlock, { width: isPortrait ? '100%' : 360 }]}>
                    <BackdropFilter className='blur' filter={"blur(6px) sepia(55%)"} />
                </ImageBackground>
                <View style={styles.spaceBlock}>
                    <Text style={styles.spaceDescription}>Это свободное офисное пространство, в котором можно арендовать рабочее место или переговорную комнату. Существенное отличие от офиса в том, что здесь собираются люди из разных компаний, не зависящие друг от друга по рабочим вопросам.</Text>
                </View>
            </View>
            <View style={styles.spaceContainer}>
                <Text style={styles.spaceTitle}>Магарас</Text>
                <ImageBackground source={titEbeThree} style={[styles.spaceBlock, { width: isPortrait ? '100%' : 360 }]}>
                    <BackdropFilter className='blur' filter={"blur(6px) sepia(55%)"} >
                        <View style={styles.soon}>
                            <Text style={styles.soonText}>скоро открытие</Text>
                        </View>
                    </BackdropFilter>
                </ImageBackground>
                <View style={styles.spaceBlock}>
                    <Text style={styles.spaceDescription}>Это свободное офисное пространство, в котором можно арендовать рабочее место или переговорную комнату. Существенное отличие от офиса в том, что здесь собираются люди из разных компаний, не зависящие друг от друга по рабочим вопросам.</Text>
                </View>
            </View>
            <View style={styles.spaceContainer}>
                <Text style={styles.spaceTitle}>Эльгэйи</Text>
                <ImageBackground source={titEbeFour} style={[styles.spaceBlock, { width: isPortrait ? '100%' : 360 }]}>
                    <BackdropFilter className='blur' filter={"blur(6px) sepia(55%)"} >
                        <View style={styles.soon}>
                            <Text style={styles.soonText}>скоро открытие</Text>
                        </View>
                    </BackdropFilter>
                </ImageBackground>
                <View style={styles.spaceBlock}>
                    <Text style={styles.spaceDescription}>Это свободное офисное пространство, в котором можно арендовать рабочее место или переговорную комнату. Существенное отличие от офиса в том, что здесь собираются люди из разных компаний, не зависящие друг от друга по рабочим вопросам.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        fontWeight: '800',
        textTransform: 'uppercase',
        marginBottom: 60
    },
    paddingContainer: {
        maxWidth: 1200,
        width: '100%',
        alignSelf: 'center',
        marginTop: 200,
        marginBottom: 50,
    },
    block: {
        flex: 1,
        marginBottom: 25
    },
    spaceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        paddingBottom: 50,
        borderBottomWidth: 1,
        flexWrap: 'wrap'
    },
    spaceBlock: {
        width: 360,
        height: 300
    },
    spaceTitle: {
        fontSize: 38,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 25,
        width: 300,
        margin: 15
    },
    spaceDescription: {
        fontSize: 20,
        fontWeight: '500',
        margin: 15
    },
    soon: {
        backgroundColor: '#ff6501',
        top: 15,
        position: 'absolute',
        right: 15,
        height: 30,
        width: 180,
        paddingHorizontal: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    soonText: {
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 0,
        color: '#fff'
    },
})

export default Network