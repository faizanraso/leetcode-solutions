function change(amount: number, coins: number[]): number {
    if (amount == 0) return 1

    var soln = new Array(amount + 1).fill(0);
    soln[0] = 1;

    for(let i = 0; i < coins.length; i++) {
        let coin = coins[i]
        for(let j = coin; j < soln.length; j++) {
            soln[j] += soln[j - coin]
        }
    }

    return soln[soln.length - 1]
};