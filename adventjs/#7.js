function getGiftsToRefill(a1, a2, a3) {
    return Array.from(new Set([...a1, ...a2, ...a3])).filter(gift => {
        return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1;
    })
}

// Score: 200