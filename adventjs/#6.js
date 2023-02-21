function createCube(size) {
    let p1 = '';
    let p2 = '';
    Array(size).fill().map((line, i) => {
        p1 += ' '.repeat(size - i - 1) 
        + '/\\'.repeat(i + 1) 
        + '_\\'.repeat(size) + '\n'
        p2 += ' '.repeat(i) 
        + '\\/'.repeat(size - i) 
        + '_/'.repeat(size) + '\n'
    })
    return (p1 + p2).slice(0, -1)
}

// Score: 200