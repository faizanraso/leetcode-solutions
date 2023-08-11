function lemonadeChange(bills: number[]): boolean {
    let fivesCount = 0;
    let tensCount = 0
    for(let i = 0; i < bills.length; i++) {
        if(bills[i] == 5){
            fivesCount += 1
        } else if (bills[i] == 10) {
            if (fivesCount) fivesCount -= 1
            else return false
            tensCount += 1
        } else {
            if(tensCount >= 1 && fivesCount >= 1) {
                tensCount -= 1;
                fivesCount -= 1
            } else if(!tensCount && fivesCount >= 3) {
                fivesCount -= 3
            } else {
                return false
            }
        }
    }
    return true
};