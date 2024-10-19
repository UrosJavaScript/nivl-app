import { Platform } from 'react-native';
import { Link, Href } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { ExternalLinkProps } from '@/types';

export function ExternalLink({ href, ...rest }: ExternalLinkProps) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href as Href<string>}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
