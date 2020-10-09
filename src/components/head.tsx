import NextHead from 'next/head';
import type { FunctionComponent } from 'react';

type Props = {
    title: string;
};

const Head: FunctionComponent<Props> = ({ title }) => {
    return (
        <NextHead>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>{title}</title>
        </NextHead>
    );
};

export default Head;
