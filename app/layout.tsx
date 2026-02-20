import { ReactNode } from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` folder, the root layout just passes children through.
export default function RootLayout({ children }: Props) {
  return children;
}
