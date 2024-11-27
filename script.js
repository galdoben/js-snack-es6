
const bikes = [
    {
        name: 'Fast',
        weight: '29',
    },
    {
        name: 'And',
        weight: '33',
    },
    {
        name: 'Furious',
        weight: '23',
    }
]

let bikeLeggera = bikes[0];
for (i = 0; i < bikes.length; i++){
    const bike = bikes[i];
    if (bikeLeggera.weight > bike.weight){
        bikeLeggera = bike
    }

}
console.log(bikeLeggera.name)