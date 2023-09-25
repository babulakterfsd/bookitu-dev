import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import AppContextProvider from '../context/GlobalContext';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Bookitu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Bookitu</title>
      <body>
        <AppContextProvider>
          <Navbar />
          <div className="mt-16 lg:mt-20 min-h-screen">{children}</div>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
