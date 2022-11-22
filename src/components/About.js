import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'

const About = ({ about }) => {
    const is929 = useMediaQuery({ query: '(max-width: 929px)' })


    const [items, setItems] = useState([
        { title: 'НЕЙТРАЛЬНОСТЬ', text: 'Независимая онлайн и оффлайн площадка для повышения социальной активности местного населения и побуждения к преобразованию села.' },
        { title: 'НОВАТОРСТВО', text: 'Проектная площадка для инициации новых идей и предложений.' },
        { title: 'СООБЩЕСТВО', text: 'Место для формирования местных сообществ и консолидации жителей.' },
        { title: 'КОМФОРТ', text: 'Удобное комфортное современное пространство для организации проектно-ориентированных, образовательных и просветительских мероприятий.' },
    ])

    return (
        <View ref={about} style={styles.container}>
            <View style={styles.limit}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>О пространстве</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Пространство развития “СИТИМ” это:</Text>
                </View>
                <View style={[styles.itemsContainer, is929 ? { justifyContent: 'space-evenly' } : null]}>
                    {
                        items.map((object, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <Text style={styles.itemTitle}>{object.title}</Text>
                                <Text style={styles.itemText}>{object.text}</Text>
                                <View style={styles.itemLine} />
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    limit: {
        maxWidth: 1366,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 24,
        minHeight: '100vh',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        marginTop: 120
    },
    title: {
        fontWeight: '500',
        fontSize: 36,
        color: '#1F0425'
    },
    subtitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginBottom: 60
    },
    subtitle: {
        fontWeight: '500',
        fontSize: 30,
        color: '#1F0425',
        lineHeight: 43,
        textAlign: 'center'
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 120
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: 48,
        width: 294,
        borderWidth: 0.2,
        borderColor: '#1F0425',
        borderRadius: 6,
        paddingTop: 60,
        paddingHorizontal: 12,
    },
    itemTitle: {
        color: '#1F0425',
        fontWeight: '500',
        fontSize: 30,
        textTransform: 'uppercase',
        marginBottom: 60
    },
    itemText: {
        color: '#1F0425',
        fontWeight: '400',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 60
    },
    itemLine: {
        height: 8,
        backgroundColor: '#FF932A',
        width: 296,
        position: 'absolute',
        bottom: -2,
        borderRadius: 4
    }
})

export default About