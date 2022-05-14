import Colors from '../constants/theme';
const trendingData = [
    {
        id: 1,
        image: require('../images/Shoe1.png'),
        brandTitle: 'NIKE',
        title: 'Revolution 5',
        price: 79.99,
        category: [1,2],
        color: Colors.lightBlue,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
            },  
            {
                id: 2,
                size: '9',
            },
            {
                id: 3,
                size: '10',
            },
            {
                id: 4,
                size: '11',
            },
            {
                id: 5,
                size: '12',
            }
        ],
        shoeColor: [
            {
                id: 1,
                color: Colors.lightBlue
            },
            {
                id: 2,
                color: Colors.lightGreen
            },
            {
                id: 3,
                color: Colors.lightOrange
            },
        ]
    },
    {
        id: 2,
        image: require('../images/Shoe2.png'),
        brandTitle: 'NIKE',
        title: 'Revolution 10',
        price: 109.99,
        category: [1,2],
        color: Colors.lightGreen,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',

        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 4,
                size: '11',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 3,
        image: require('../images/Shoe3.png'),
        brandTitle: 'ADIDAS',
        title: 'Ultraboost 4.0',
        price: 89.99,
        category: [1,2],
        color: Colors.lightOrange,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 4,
                size: '11',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 4,
        image: require('../images/Shoe4.png'),
        brandTitle: 'ADIDAS',
        title: 'Ultraboost 2.0',
        price: 59.99,
        category: [1,2],
        color: Colors.lightPink,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 5,
        image: require('../images/Shoe5.png'),
        brandTitle: 'ADIDAS',
        title: 'Ultraboost 2.0',
        price: 59.99,
        category: [1,2],
        color: Colors.lightPink,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 6,
        image: require('../images/Cap1.png'),
        brandTitle: 'NIKE',
        title: 'Heritage 86',
        price: 19.99,
        category: [1,4],
        color: Colors.lightPink,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 7,
        image: require('../images/Cap2.png'),
        brandTitle: 'NIKE',
        title: 'Legacy 91',
        price: 29.99,
        category: [1,4],
        color: Colors.lightBlue,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 8,
        image: require('../images/Cap3.png'),
        brandTitle: 'NIKE',
        title: 'Classic 99',
        price: 16.99,
        category: [1,4],
        color: Colors.lightYellow,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 9,
        image: require('../images/Cap4.png'),
        brandTitle: 'NIKE',
        title: 'Tailwind 78',
        price: 39.99,
        category: [1,4],
        color: Colors.lightGreen,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 10,
        image: require('../images/Cap5.png'),
        brandTitle: 'NIKE',
        title: 'AeroBill 69',
        price: 69.69,
        category: [1,4],
        color: Colors.lightOrange,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 11,
        image: require('../images/Watch1.png'),
        brandTitle: 'ROLEX',
        title: 'Sea Dweller',
        price: 9000,
        category: [1,3],
        color: Colors.lightPink,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 12,
        image: require('../images/Watch2.png'),
        brandTitle: 'ROLEX',
        title: 'Air King',
        price: 2900,
        category: [1,3],
        color: Colors.lightBlue,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 13,
        image: require('../images/Watch3.png'),
        brandTitle: 'ROLEX',
        title: 'Date Just',
        price: 4500,
        category: [1,3],
        color: Colors.lightYellow,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 14,
        image: require('../images/Glasses1.png'),
        brandTitle: 'RAYBAN',
        title: 'Clubmaster',
        price: 100,
        category: [1,5],
        color: Colors.lightOrange,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 15,
        image: require('../images/Glasses2.png'),
        brandTitle: 'RAYBAN',
        title: 'Classical',
        price: 80,
        category: [1,5],
        color: Colors.lightYellow,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    },
    {
        id: 16,
        image: require('../images/Glasses3.png'),
        brandTitle: 'RAYBAN',
        title: 'Aviator',
        price: 190,
        category: [1,5],
        color: Colors.lightBlue,
        description: 'Step out in a street-ready look with this mens Hoxton Woven Tracksuit from Nike.',
        sizes: [
            {
                id: 1,
                size: '8',
                selected: true
            },
            {
                id: 2,
                size: '9',
                selected: false
            },
            {
                id: 3,
                size: '10',
                selected: false
            },
            {
                id: 5,
                size: '12',
                selected: false
            }
        ],
        shoeColor: [
            Colors.lightBlue, Colors.lightGreen, Colors.lightOrange
        ]
    }
];

export default trendingData;