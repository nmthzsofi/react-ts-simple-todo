import type { ReactNode } from 'react';

interface HeaderType {
    image: {
        src: string;
        alt: string;
    }
    children: ReactNode;
}

const Header = ({ image, children }: HeaderType) => {
    return (
        <header>
            <div className='header-div'>
                <img {...image} />
                <h1>Welcome back, Zsófia!</h1>
            </div>
            {children}
        </header>
    );
}

export default Header;