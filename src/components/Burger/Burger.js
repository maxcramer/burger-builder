import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div >
            {BurgerIngredient.props.children}
        </div>
    );
};

export default burger;
