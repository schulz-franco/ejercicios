function countHours(year, holidays) {
    let hours = 0;
    holidays.map(date => {
        const day = (new Date(`${year}/${date}`)).getDay();
        switch (day) {
            case 0: break
            case 6: break
            default: hours += 2
        }
    })
    return hours;
}

// Score: 101