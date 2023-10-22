import { StyleSheet, View } from 'react-native';
import TopTab from '../components/TopTab';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TopTab />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
