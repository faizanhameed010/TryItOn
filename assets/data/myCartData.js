import Colors from '../constants/theme';
const myCartData = [
    {
        id: 1,
        image: require('../images/Shoe1.png'),
        brandTitle: 'NIKE',
        title: 'Revolution 5',
        price: '$79.99',
        color: Colors.lightYellow,
        quantity: 2,
    },
    {
        id: 2,
        image: require('../images/Shoe2.png'),
        brandTitle: 'NIKE',
        title: 'Revolution 10',
        price: '$109.99',
        color: Colors.lightGreen,
        quantity: 2,
    },
    {
        id: 3,
        image: require('../images/Shoe3.png'),
        brandTitle: 'ADIDAS',
        title: 'Ultraboost 4.0',
        price: '$89.99',
        color: Colors.lightOrange,
        quantity: 3
    },
];

export default myCartData;

