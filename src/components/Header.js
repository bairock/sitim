import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { HiMenu, HiX } from "react-icons/hi"
import logo from '../assets/logo.svg'
import documents from '../assets/docs.zip'

const Header = ({ onScrollTo }) => {
    const [menu, setMenu] = useState(false)
    const is1115 = useMediaQuery({ query: '(max-width: 1115px)' })

    useEffect(() => {
        if (!is1115) setMenu(false)
    }, [is1115, menu])

    return (
        <View style={styles.container}>
            <View style={styles.limit}>
                <Image style={styles.logo} source={logo} />
                {
                    !is1115 ? (
                        <View style={styles.menuContainer}>
                            <TouchableOpacity onPress={() => onScrollTo('network')}>
                                <Text style={styles.menuText}>Сеть пространств</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onScrollTo('about')}>
                                <Text style={styles.menuText}>О пространстве</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onScrollTo('open')}>
                                <Text style={styles.menuText}>Как открыть пространство</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onScrollTo('team')}>
                                <Text style={styles.menuText}>Команда проекта</Text>
                            </TouchableOpacity>
                            <TouchableOpacity accessibilityRole='link' href={documents} download={'Документы'}>
                                <Text style={styles.menuText}>Документы</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity onPress={() => setMenu(prev => !prev)}>
                            {
                                !menu ? <HiMenu size={50} color='#fff' /> : <HiX size={50} color='#fff' />
                            }
                        </TouchableOpacity>
                    )
                }
            </View>
            {
                menu ? (
                    <View style={styles.mobileMenu}>
                        <TouchableOpacity onPress={() => onScrollTo('network')}>
                            <Text style={styles.mobileMenuText}>Сеть пространств</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onScrollTo('about')}>
                            <Text style={styles.mobileMenuText}>О пространстве</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onScrollTo('open')}>
                            <Text style={styles.mobileMenuText}>Как открыть пространство</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onScrollTo('team')}>
                            <Text style={styles.mobileMenuText}>Команда проекта</Text>
                        </TouchableOpacity>
                        <TouchableOpacity accessibilityRole='link' href={documents} download={'Документы'}>
                            <Text style={styles.mobileMenuText}>Документы</Text>
                        </TouchableOpacity>
                    </View>
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F0425',
    },
    logo: {
        height: 75,
        width: 75
    },
    menuContainer: {
        flexDirection: 'row',
    },
    menuText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal: 12
    },
    limit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 120,
        maxWidth: 1366,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 24
    },
    mobileMenu: {
        maxWidth: 1366,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 24,
        paddingBottom: 24
    },
    mobileMenuText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '500',
        marginHorizontal: 12,
        marginVertical: 12
    }
})

export default Header