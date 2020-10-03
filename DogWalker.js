class DogWalker {
    numberOfWalksCalculator(dogSizes){
        // array of sizes in any order
        // to group together, use a map = tally of dog sizes
        // iterate through count and determine amount of hours
        let numberOfWalks = 0;
        let sizesMap = {};

// iterate and collect the sizes
        for(let size of dogSizes ){
            if (!sizesMap[size]){
                sizesMap[size] = 1;
            } else {
                sizesMap[size]++;
            }
        }
// count the duplicates
        for(let i in sizesMap){
            numberOfWalks += Math.ceil(sizesMap[i]/2);
        }

        console.log(numberOfWalks);
        return numberOfWalks;
    }
}

module.exports = DogWalker;