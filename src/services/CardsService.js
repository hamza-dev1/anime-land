export class CardsService {
    static cardsList = [
        {
            id: 1,
            img: require('@/assets/img/header-img/img-1.png'),
            header: 'Header 1',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, modi!',
        },
        {
            id: 2,
            img: require('@/assets/img/header-img/img-2.png'),
            header: 'Header 2',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, modi!',
        },
        {
            id: 3,
            img: require('@/assets/img/header-img/img-3.png'),
            header: 'Header 3',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, modi!',
        },
        {
            id: 4,
            img: require('@/assets/img/header-img/img-4.png'),
            header: 'Header 5',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, modi!',
        },
    ];

    static getAllCards() {
        return this.cardsList;
    }
}