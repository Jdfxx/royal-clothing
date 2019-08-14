export const addItemToCart = (cartItems, newItem) => {
    const existItem = cartItems.find(cartItem => cartItem.id === newItem.id);
    if (existItem) {
        return cartItems.map(item => {
            if (item.id === newItem.id) {
                return {...item, quantity: item.quantity + 1};
            } else {
                return item;
            }
        });
    } else {
        return [...cartItems, {...newItem, quantity: 1}];
    }
};
