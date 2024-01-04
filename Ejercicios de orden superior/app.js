// 1:

const printMessage = mensaje => console.log(mensaje);
printMessage("Funcion flecha 1");

// 2:

const createMultplication = (number1, number2) => {
    let result = number1 * number2;
    return result;
}
console.log(createMultplication(10, 2))

// 3:

const array = [1,2,3,4,5,6,7,8,9]
const newarray = array.map((number, index) => createMultplication(number, index))
console.log(newarray)


// 4:

function beersHigher(dateBeers){
    const higherAlcohol = dateBeers.toSorted((a, b) => {
        if (a.abv > b.abv){
           return -1
        }else if (a.abv < b.abv){
           return 1
        }else{
            return 0
        }
    }).slice(0, 10)

    return higherAlcohol
}

const teenBeers = beersHigher(beers)
console.log(teenBeers)

// 5: 

function ibuHigher(dateIbu){
    const leastIbu = dateIbu.toSorted((a, b) => {
        if (a.ibu > b.ibu){
           return 1
        }else if (a.ibu < b.ibu){
           return -1
        }else{
            return 0
        }
    }).slice(0, 10)

    return leastIbu
}

const leastTeenIbu = ibuHigher(beers)
console.log(leastTeenIbu)

// 6:

function nameBeer(beers, beerName){
    return beers.find(beer => beer.name == beerName)
}

const $nameBeer = nameBeer(beers, "Buzz")
console.log($nameBeer)

// 7: 

function ibuBeer(beers, beerIbu){
    const ibuBeers = beers.find(beer => beer.ibu == beerIbu)
    if (ibuBeers){
        return ibuBeers
    }else{
        return `No hay cerveza con un ibu de ${beerIbu}`

    }
    
}

const $ibuBeer = ibuBeer(beers, 1000)
console.log($ibuBeer)

// 8:
const ingreseBeer = prompt("Ingrese el nombre de la cerveza")
function indexBeer(beers, nameBeer){
    const beerIndex = beers.findIndex(beer => beer.name == nameBeer)

    if(beerIndex !== -1){
        return `El indice de la cerveza es ${beerIndex}`
    }else{
        return `${nameBeer} No existe`
    }
}

const $beerIndex = indexBeer(beers, ingreseBeer)
console.log($beerIndex)

// 9:

const filterBeersAlcohol = (beers, maxAlcohol) => {
    const filteredBeers = beers.filter(beer => beer.abv <= maxAlcohol);
    const resultArray = filteredBeers.map(({ name, abv, ibu }) => ({
        name,
        alcohol: abv,
        amargura: ibu
    }));
    return resultArray;
};

const filteredBeers = filterBeersAlcohol(beers, 6.0);
console.log(filteredBeers);

// 10:

const sortBeersProperty = (beers, propertyName, ascending = true) => {
    const sortedBeers = [...beers];
    sortedBeers.sort((beerA, beerB) => {
        const valueA = beerA[propertyName];
        const valueB = beerB[propertyName];
        if (ascending) {
            return valueA - valueB;
        } else {
            return valueB - valueA;
        }
    });
    return sortedBeers.slice(0, 10);
};

const sortedBeers = sortBeersProperty(beers, 'abv', true);
console.log(sortedBeers);