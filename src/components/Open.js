import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import openImage from '../assets/openImage.svg'

const Open = ({ open }) => {
    const is1150 = useMediaQuery({ query: '(max-width: 1150px)' })

    const [items, setItems] = useState([
        'Инициация создания пространства со стороны заинтересованных лиц.',
        'Рабочая встреча со стейкхолдерами и заинтересованными лицами.',
        'Формирование команды созадния пространства.',
        'Формирование “ядерной” группы и сообщества.',
        'Выработка концепции.',
        'Финансовый расчет на создание пространства.',
        'Подготовка помещения к открытию.',
        'Подготовка к мероприятию открытие пространства развития “Ситим”'
    ])

    return (
        <View ref={open} style={styles.container}>
            <View style={[styles.limit, is1150 ? { alignItems: 'center' } : null]}>
                <Image source={openImage} style={[styles.openImage, is1150 ? { display: 'none' } : null]} />
                <View style={{ width: is1150 ? 'auto' : '50%' }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Как открыть пространство</Text>
                    </View>
                    <Text style={styles.text}>Заинтересованные команды должны пройти акселерационный (ускоренный) образовательный курс, в целях подготовки и проработки организауионных вопросов по открыию пространства.</Text>
                    {
                        items.map((object, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <View style={styles.circle}>
                                    <Text style={styles.indexText}>{index + 1}</Text>
                                </View>
                                <Text style={styles.itemText}>{object}</Text>
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
        alignItems: 'flex-end',
        paddingVertical: 60
    },
    openImage: {
        position: 'absolute',
        width: 570,
        height: '80vh',
        resizeMode: 'contain',
        top: '15%',
        left: 0
    },
    titleContainer: {
        height: 120,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 36
    },
    text: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 24,
        marginBottom: 60
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 24,
        alignItems: 'center'
    },
    circle: {
        height: 90,
        width: 90,
        backgroundColor: '#fff',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24
    },
    indexText: {
        color: '#FF932A',
        fontWeight: '600',
        fontSize: 36,
    },
    itemText: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 18,
        maxWidth: 500
    }
})

export default Open