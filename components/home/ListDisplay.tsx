import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import { TextState } from '@/types';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import TextDisplay from '@/components/home/TextDisplay';
import { Collapsible } from '@/components/Collapsible';

const ListDisplay: React.FC<TextState> = ({ loading, value, showAlert }) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#4FC3F7" />
      ) : value ? (
        [...Array(3)].map((_, index) => (
          <ThemedView key={index}>
            <ThemedView style={styles.wrapper}>
              <ThemedText type="subtitle">
                Displayed Value {index + 1}:
              </ThemedText>
              <TextDisplay value={value} />

              <Collapsible title={`More Information: ${value}`}>
                <ThemedText>
                  This is the expanded content:{' '}
                  <ThemedText
                    type="defaultSemiBold"
                    darkColor="#FFFF66"
                    style={{
                      textDecorationLine: 'underline',
                    }}
                  >
                    {value}
                  </ThemedText>
                </ThemedText>
              </Collapsible>

              <TouchableOpacity
                onPress={() => {
                  if (showAlert) {
                    showAlert(value);
                  }
                }}
                style={styles.button}
              >
                <ThemedText
                  type="link"
                  style={{
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}
                >
                  {value}
                </ThemedText>
              </TouchableOpacity>
            </ThemedView>
            <ThemedView
              style={{
                marginVertical: 8,
                borderBottomColor: '#737373',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </ThemedView>
        ))
      ) : (
        <ThemedText type="subtitle" style={{ textAlign: 'center' }}>
          You have not created anything!
        </ThemedText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
    marginBottom: 8,
  },
  button: {
    width: Platform.OS === 'web' ? '50%' : '100%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFF66',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default ListDisplay;
