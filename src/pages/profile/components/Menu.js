import React from 'react';

const Menu = ({ menu, setMenu }) => {
    return (
        <ul className="ps-section__links">
            <li className={`${menu === 0 && 'active'}`}>
                <a onClick={()=>setMenu(0)} href="#/">Mis compras</a>
            </li>
            <li className={`${menu === 1 && 'active'}`}>
                <a onClick={()=>setMenu(1)} href="#/">Favoritos</a>
            </li>
        </ul>
    );
}

export default Menu;