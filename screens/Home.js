import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function Home({ navigation }) {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Welcome!</Text>
                <StatusBar style="auto" />
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </View>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </ScrollView>
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
