import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { useQuery, gql } from '@apollo/client'

const GET_PEOPLE = gql`
    {
        people {
            id
            name
            description
            image {
                url
            }
        }
    }  
`

const Team = ({ team }) => {
    const { loading, error, data } = useQuery(GET_PEOPLE)
    const is965 = useMediaQuery({ query: '(max-width: 965px)' })

    if (loading) return null
    if (error) return null

    const { people } = data

    return (
        <View ref={team} style={styles.container}>
            <View style={styles.limit}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Команда проекта</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Проект “Сеть пространств развития “Ситим” в муниципальных образованиях Республики Саха (Якутия)” разработан и реализуется командой Автономной некоммерческой организацией по поддержке стратегических инициатив “Индустрия будущего” при участии заинтересованных организаций.</Text>
                </View>
                <View style={[styles.itemsContainer, is965 ? { justifyContent: 'space-evenly' } : null]}>
                    {
                        people.map((object) => (
                            <View key={object.id} style={[styles.itemContainer, !is965 ? { width: '33%' } : null]}>
                                <Image source={{ uri: object.image.url }} style={styles.itemImage} />
                                <Text style={styles.itemTitle}>{object.name}</Text>
                                <Text style={styles.itemText}>{object.description}</Text>
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
        color: '#1F0425',
        textAlign: 'center'
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
        justifyContent: 'space-evenly',
        marginBottom: 120,
    },
    itemContainer: {
        marginBottom: 60,
        alignItems: 'center',
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