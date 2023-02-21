function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const result = giftsCities
        .reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]])
        .filter(comb => comb[0] && comb.length <= maxCities)
        .map(comb => comb.reduce((a, b) => a + b))
        .filter(sum => sum <= maxGifts)
        .sort((a, b) => b - a);
    return result[0] ? result[0] : 0;
}

// Score: 129