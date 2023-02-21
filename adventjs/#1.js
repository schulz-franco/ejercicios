function wrapping(gifts) {
    let result = [];
    gifts.map(gift => {
        let paperSide = '';
        Array(gift.length + 2).fill(null).map(el => paperSide += '*')
        const giftWrapped = `${paperSide}\n*${gift}*\n${paperSide}`;
        result.push(giftWrapped);
    })
    return result;
}

// Score: 120