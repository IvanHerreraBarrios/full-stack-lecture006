export class Item {
    id;
    title;
    price;

    constructor(title, isbn, price){
        this.id = Math.random();
        this.title = title;
        this.price = price;
    }

    getTitle = () => {
        return this.title;
    }

    getPrice = () => {
        return this.price * 1.1;
    }

    changeTitle = (newTitle) => {
        this.title = newTitle;
    }

    getId = () => {
        return this.id;
    }
}