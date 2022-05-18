import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { useMediaQuery } from 'react-responsive'

const Network = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

    return (
        <View style={styles.paddingContainer}>
            <Text style={[styles.title, { fontSize: isPortrait ? 34 : 60 }, isPortrait ? { margin: 15 } : null]}>Сеть пространств</Text>
            <View style={[styles.spaceContainer, { marginTop: isPortrait ? 0 : 50, paddingBottom: isPortrait ? 0 : 50 }]}>
                <Text style={styles.spaceTitle}>Тит-Эбя</Text>
                <ImageBackground source={{ uri: 'https://avatars.mds.yandex.net/get-zen_doc/2468786/pub_5faa47b289ace40d9a4663d3_5faa49013b7ff25f300ca0e1/scale_1200' }} style={[styles.spaceBlock, { width: isPortrait ? '100%' : 360 }]}>

                </ImageBackground>
                <View style={styles.spaceBlock}>
                    <Text style={styles.spaceDescription}>Это свободное офисное пространство, в котором можно арендовать рабочее место или переговорную комнату. Существенное отличие от офиса в том, что здесь собираются люди из разных компаний, не зависящие друг от друга по рабочим вопросам.</Text>
                </View>
            </View>
            <View style={styles.spaceContainer}>
                <Text style={styles.spaceTitle}>Бердигестях</Text>
                <ImageBackground source={{ uri: 'https://businesstraveller.com.ru/upload/resize_cache/iblock/61b/660_999999988_1/61b21c09aa79d5f224999877555db91c.jpg' }} style={[styles.spaceBlock, { width: isPortrait ? '100%' : 360 }]}>
                </ImageBackground>
                <View style={styles.spaceBlock}>
                    <Text style={styles.spaceDescription}>Это свободное офисное пространство, в котором можно арендовать рабочее место или переговорную комнату. Существенное отличие от офиса в том, что здесь собираются люди из разных компаний, не зависящие друг от друга по рабочим вопросам.</Text>
                </View>
            </View>
            <View style={styles.spaceContainer}>
                <Text style={styles.spaceTitle}>Магарас</Text>
                <ImageBackground source={{ uri: 'https://coworkingtop.ru/wp-content/uploads/2018/11/top6-1024x570.jpg' }} style={[styles.spaceBlock, { width: isPortrait ? '100%' : 360 }]}>
                    <View style={styles.soon}>
                        <Text style={styles.soonText}>скоро открытие</Text>
                    </View>
                </ImageBackground>
                <View style={styles.spaceBlock}>
                    <Text style={styles.spaceDescription}>Это свободное офисное пространство, в котором можно арендовать рабочее место или переговорную комнату. Существенное отличие от офиса в том, что здесь собираются люди из разных компаний, не зависящие друг от друга по рабочим вопросам.</Text>
                </View>
            </View>
            <View style={styles.spaceContainer}>
                <Text style={styles.spaceTitle}>Эльгэйи</Text>
                <ImageBackground source={{ uri: 'https://hsto.org/webt/59/ed/ad/59edad44f1671716737664.jpeg' }} style={[styles.spaceBlock, { width: isPortrait ? '100%' : 360 }]}>
                    <View style={styles.soon}>
                        <Text style={styles.soonText}>скоро открытие</Text>
                    </View>
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
        fontFamily: 'Manrope',
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
        fontFamily: 'Manrope',
        textTransform: 'uppercase',
        marginBottom: 25,
        width: 280,
        margin: 15
    },
    spaceDescription: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Manrope',
        margin: 15
    },
    soon: {
        backgroundColor: '#ff6501',
        alignSelf: 'flex-end',
        height: 30,
        paddingHorizontal: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 15
    },
    soonText: {
        fontSize: 17,
        fontWeight: '500',
        fontFamily: 'Manrope',
        lineHeight: 0,
        color: '#fff'
    },
})

export default Network