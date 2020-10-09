import type { AppProps } from 'next/app';

import Header from '../components/header';

import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
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
