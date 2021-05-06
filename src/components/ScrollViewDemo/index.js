import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ScrollViewDemo extends Component {
    array = [...Array(20).keys()]

    renderItem = () => {
        return this.array.map(item => (
            <View key={item} style={[styles.Item, {backgroundColor:`#${Math.floor(Math.random()*16777497).toString(16)}`}]}>
                <Text>Item {item}</Text>
            </View>
        ))
    }
    render() {
        return (
            <View style={styles.Container}>
                <ScrollView>
                    {this.renderItem()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Item: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 20
    }
})
