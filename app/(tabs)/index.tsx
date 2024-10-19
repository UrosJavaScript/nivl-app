import { Image, Platform, StyleSheet, TextInput } from 'react-native';
import useTextStore from '@/hooks/useTextStore';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ListDisplay from '@/components/home/ListDisplay';

export default function HomeScreen() {
  const { value, updateValue, loading, showAlert } = useTextStore();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText
          type="title"
          style={{
            paddingTop: 20,
          }}
        >
          Welcome! {''}
          <ThemedText
            type="defaultSemiBold"
            darkColor="#FFFF66"
            style={{
              textTransform: 'uppercase',
            }}
          >
            {value}
          </ThemedText>
        </ThemedText>
        <ThemedText type="default">
          Please enter text to update the displayed value:
        </ThemedText>

        <ThemedView
          style={{
            paddingTop: 10,
            width: Platform.OS === 'web' ? '50%' : '100%',
          }}
        >
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => updateValue(text)}
            placeholder="Type here..."
            placeholderTextColor="#B0B0B0"
          />
        </ThemedView>
      </ThemedView>

      <ListDisplay loading={loading} value={value} showAlert={showAlert} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'baseline',
    flex: 1,
    gap: 5,
    paddingBottom: 30,
  },
  logo: {
    height: 220,
    width: 188,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#4FC3F7',
    color: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
