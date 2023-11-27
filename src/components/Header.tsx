import React from 'react';
import Logo from './Logo';

function Header() {
  return (
    <div>
        <nav>
            <Logo/>
            <div>
                {/* TODO: Language Selection */}
                {/* TODO: Session Login */}
            </div>
            {/* TODO: Upgrade banner */}
        </nav>
    </div>
  )
}

export default Header