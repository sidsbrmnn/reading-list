import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import 'tailwindcss/tailwind.css';
import Header from '../components/header';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Header />
            <main id="content">
                <Component {...pageProps} />
            </main>
        </>
    );
};

export default App;
