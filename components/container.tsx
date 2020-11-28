import { FunctionComponent } from 'react';

const Container: FunctionComponent = ({ children }) => {
    return (
        <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
            {children}
        </div>
    );
};

export default Container;
