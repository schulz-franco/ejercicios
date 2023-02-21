function distributeGifts(packOfGifts, reindeers) {
    let totalWeightGifts = 0;
    let totalWeightReindeers = 0;
    packOfGifts.map(gift => totalWeightGifts += gift.length)
    reindeers.map(reindeer => totalWeightReindeers += reindeer.length * 2)
    return Math.floor(totalWeightReindeers / totalWeightGifts);
}

// Score: 132