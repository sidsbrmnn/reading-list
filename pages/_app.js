import Header from '../components/header';

import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }) => {
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
