import type { PropsWithChildren, ReactElement, ComponentProps } from 'react';
import type { ViewProps, TextProps } from 'react-native';
import { Link } from 'expo-router';
import {
  RootState as StoreRootState,
  AppDispatch as StoreAppDispatch,
} from '@/store';

export interface TextState {
  value: string;
  loading: boolean;
  showAlert: (value: string) => void;
}

// A type for the overall state of the application
export type RootState = StoreRootState;

// Type for dispatch
export type AppDispatch = StoreAppDispatch;

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export type ParalllaxProps = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export type ExternalLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export interface TextDisplayProps {
  value: string; 
}
