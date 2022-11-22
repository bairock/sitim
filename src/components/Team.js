import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'

const Team = ({ team }) => {
    const is965 = useMediaQuery({ query: '(max-width: 965px)' })

    const [items, setItems] = useState([
        { title: 'Степанов Иван', text: 'Директор АНО “Индустрия Будущего”', image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg' },
        { title: 'Степанов Иван', text: 'Директор АНО “Индустрия Будущего”', image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg' },
        { title: 'Степанов Иван', text: 'Директор АНО “Индустрия Будущего”', image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg' },
        { title: 'Степанов Иван', text: 'Директор АНО “Индустрия Будущего”', image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg' },
    ])

    return (
        <View ref={team} style={styles.container}>
            <View style={styles.limit}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Команда развития сети</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Проект “Сеть пространств развития “Ситим” в муниципальных образованиях Республики Саха (Якутия)” разработан и реализуется командой Автономной некоммерческой организацией по развитию стратегических инициатив “Индустрия будущего” при участии заинтересованных организаций.</Text>
                </View>
                <View style={[styles.itemsContainer, is965 ? { justifyContent: 'space-evenly' } : null]}>
                    {
                        items.map((object, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <Image source={{ uri: object.image }} style={styles.itemImage} />
                                <Text style={styles.itemTitle}>{object.title}</Text>
                                <Text style={styles.itemText}>{object.text}</Text>
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
        marginBottom: 120
    },
    subtitle: {
        fontWeight: '500',
        fontSize: 24,
        color: '#1F0425',
        lineHeight: 35,
        textAlign: 'center'
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 120
    },
    itemContainer: {
        marginBottom: 60,
        alignItems: 'center'
    },
    itemImage: {
        width: 294,
        height: 288,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 147, 42, 0.5)',
    },
    itemTitle: {
        fontWeight: '600',
        fontSize: 24,
        marginTop: 24,
        color: '#1F0425'
    },
    itemText: {
        fontWeight: '300',
        fontSize: 18,
        marginTop: 12,
        color: '#1F0425'
    },
})

export default Team