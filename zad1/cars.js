const cars = [
    { id: 1, make: "Toyota", model: "Yaris", year: 2001, color: "white" },
    { id: 2, make: "Mazda", model: "MX-5", year: 2006, color: "red" },
    { id: 3, make: "Mitsubishi", model: "Lancer", year: 2010, color: "black" },
    { id: 4, make: "Nissan", model: "Skyline", year: 2002, color: "blue" },
    { id: 5, make: "Fiat", model: "500", year: 2001, color: "green" },
]


const getCars = () => {
    return cars;
};

const getCarInformation = (id) => {
    if (id >= 1 && id <= 5) {
        const MAKE = cars[id].make;
        const MODEL = cars[id].model;
        const YEAR = cars[id].year;
        const COLOR = cars[id].color;
        return `Make: ${MAKE}, Model: ${MODEL}, Year: ${YEAR}, Color: ${COLOR}.`
    }

    return `Car doesn't exist`;
};

const getCarAge = (id) => {
    if (id >= 1 && id <= 5) {
        let today = new Date();
        const YEAR_NOW = today.getFullYear();
        const CAR_AGE = YEAR_NOW - cars[id].year;
        return `Car is ${CAR_AGE} years old.`
    }

    return `Car doesn't exist`; 
};

module.exports = {
    getCars,
    getCarInformation,
    getCarAge,
}