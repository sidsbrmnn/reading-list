import Link from 'next/link';

import Container from './container';

const Header = () => {
    return (
        <header className="bg-gray-200">
            <Container>
                <div className="flex items-center justify-between h-16">
                    <Link href="/">
                        <a className="text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-900 focus:text-gray-900 focus:outline-none">
                            Reading List
                        </a>
                    </Link>
                </div>
            </Container>
        </header>
    );
};

export default Header;
