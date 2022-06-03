import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { HiOutlineDocumentText } from 'react-icons/hi'

const docs = [
    {
        name: 'Методические рекомендации «Как открыть пространство развития «Ситим»',
        file: require('../assets/saydii.pdf')
    },
    {
        name: 'Презентация о сети пространств развития «Ситим»',
        file: require('../assets/present.pdf')
    }
]

const Docs = () => {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

    return (
        <View style={styles.container}>
            <Text style={[styles.title, isPortrait ? { marginHorizontal: 15 } : null]}>Документы</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: isPortrait ? 'center' : 'flex-start' }}>
                {
                    docs.map((item) => (
                        <TouchableOpacity accessibilityRole='link' href={item.file} download={item.name} style={{ justifyContent: 'center', alignItems: 'center', width: 300, marginRight: 35, marginBottom: 35 }}>
                            <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: '#FF932B', justifyContent: 'center', alignItems: 'center' }}>
                                <HiOutlineDocumentText size={50} color='#fff' />
                            </View>
                            <Text style={styles.subtitle}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '800',
        textTransform: 'uppercase',
        marginBottom: 60,
    },
    container: {
        maxWidth: 1200,
        width: '100%',
        alignSelf: 'center',
        marginTop: 200,
        marginBottom: 50,
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '600',
        marginTop: 40,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
})

export default Docs