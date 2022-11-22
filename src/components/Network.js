import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'

const Network = ({ network }) => {
    const is929 = useMediaQuery({ query: '(max-width: 929px)' })

    const [items, setItems] = useState([
        { title: 'тит-эбэ', image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg' },
        { title: 'тит-эбэ', image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg' },
        { title: 'тит-эбэ', image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg' },
        { title: 'тит-эбэ', image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201231114619-01-oz-ourdomain-student-housing.jpg' },
    ])

    return (
        <View ref={network} style={styles.container}>
            <View style={styles.limit}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Сеть пространств</Text>
                </View>
                <View style={[styles.itemsContainer, is929 ? { justifyContent: 'space-evenly' } : null]}>
                    {
                        items.map((object, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <Image source={{ uri: object.image }} style={styles.itemImage} />
                                <Text style={styles.itemTitle}>{object.title}</Text>
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
        backgroundColor: '#FF932A',
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
        marginVertical: 60
    },
    title: {
        fontWeight: '500',
        fontSize: 30,
        color: '#fff'
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: 48
    },
    itemImage: {
        width: 294,
        height: 480,
        borderRadius: 6,
        backgroundColor: 'rgba(255,255,255, 0.5)'
    },
    itemTitle: {
        marginTop: 30,
        color: '#fff',
        fontWeight: '500',
        fontSize: 30,
        textTransform: 'uppercase'
    }
})

export default Network