import type { FunctionComponent, PropsWithChildren } from 'react';

type Props = PropsWithChildren<Record<string, unknown>>;

const Container: FunctionComponent<Props> = ({ children }) => {
    return (
        <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
            {children}
        </div>
    );
};

export default Container;
