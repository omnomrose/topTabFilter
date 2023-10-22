import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabList}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'tab1' && styles.activeTab,
                    ]}
                    onPress={() => handleTabPress('tab1')}
                    activeOpacity={0.1}
                >
                    <Text style={[
                        styles.tabTitle,
                        activeTab === 'tab1' && styles.activeTabText,
                        activeTab === 'tab1' && styles.boldText
                    ]}>Latest</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'tab2' && styles.activeTab,
                    ]}
                    onPress={() => handleTabPress('tab2')}
                    activeOpacity={0.1}
                >
                    <Text style={[
                        styles.tabTitle,
                        activeTab === 'tab2' && styles.activeTabText,
                        activeTab === 'tab2' && styles.boldText
                    ]}>Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'tab3' && styles.activeTab,
                    ]}
                    onPress={() => handleTabPress('tab3')}
                    activeOpacity={0.1}
                >
                    <Text style={[
                        styles.tabTitle,
                        activeTab === 'tab3' && styles.activeTabText,
                        activeTab === 'tab3' && styles.boldText
                    ]}>Popular</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabPanels}>
                {activeTab === 'tab1' && <Text>Latest Coupons</Text>}
                {activeTab === 'tab2' && <Text>Trending Coupons</Text>}
                {activeTab === 'tab3' && <Text>Popular Coupons</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50
    },
    tabList: {
        flexDirection: 'row',
        width: 350,
        height: 30,
        backgroundColor: '#F1EFEF',
        borderRadius: 15,
        marginBottom: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeTab: {
        backgroundColor: '#629560',
        borderRadius: 15,
    },
    tabTitle: {
        fontSize: 12,
        paddingVertical: 5,
    },
    activeTabText: {
        color: '#F1EFEF',
    },
    boldText: {
        fontWeight: 'bold',
    },
    tabPanels: {
        alignItems: 'center',
    },
});
