import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { TextDisplayProps } from '@/types';

const TextDisplay: React.FC<TextDisplayProps> = ({ value }) => {
  return (
    <ThemedText
      type="defaultSemiBold"
      darkColor="#FFFF66"
      style={{
        textTransform: 'uppercase',
      }}
    >
      🌟 {value}
    </ThemedText>
  );
};

export default TextDisplay;
