/*
Andrew Butler
Feb 14, 2024
Activity07
*/

// exercise 1
function maxOfTwo(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

// exercise 2
function maxOfArray(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// exercise 3

// leaving this here for testing simplicity
const movie = {
    title: 'Some movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg'
}

function showProperties(movie) {
    let values = [];
    console.log("List of Keys :")
    for (let key in movie) {
        console.log(key);
        values.push(movie[key]);
    }
    console.log("List of Values : ")
    for (i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}

// exercise 4
const circle = {
    radius : 2,
    area : function area(){
        return Math.PI * this.radius * this.radius
    }
}

// excersie 5
const circle2 = {
    radius : 2,
    area : function area(){
        return Math.PI * this.radius * this.radius
    },
    set radiusValue(value) {
        this.radius = value;
    },
    get radiusValue() {
        return this.radius;
    }
}

// exercise 6
const circle3 = {
    radius : 2,
    area : function area(){
        return Math.PI * this.radius * this.radius
    },
    getRadiusValue : function() {
        return this.radius;
    },
    setRadiusValue : function(value){
        this.radius = value;
    }
}