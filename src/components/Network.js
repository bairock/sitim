import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { useQuery, gql } from '@apollo/client'

const GET_SPACES = gql`
    {
        spaces {
            id
            name
            image {
                url
            }
        }
    }
`

const Network = ({ network }) => {
    const { loading, error, data } = useQuery(GET_SPACES)
    const is929 = useMediaQuery({ query: '(max-width: 929px)' })

    if (loading) return null
    if (error) return null

    const { spaces } = data

    return (
        <View ref={network} style={styles.container}>
            <View style={styles.limit}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Сеть пространств</Text>
                </View>
                <View style={[styles.itemsContainer, is929 ? { justifyContent: 'space-evenly' } : null]}>
                    {
                        spaces.map((object) => (
                            <View key={object.id} style={styles.itemContainer}>
                                <Image source={{ uri: object.image.url }} style={styles.itemImage} />
                                <Text style={styles.itemTitle}>{object.name}</Text>
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