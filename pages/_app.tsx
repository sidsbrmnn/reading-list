import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Header from '../components/header';

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
