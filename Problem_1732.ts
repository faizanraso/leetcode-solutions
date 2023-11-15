function largestAltitude(gain: number[]): number {
    let currAlt: number = 0;
    let maxAlt: number = currAlt;

    for(let i = 0; i < gain.length; i++){
        currAlt += gain[i];
        // maxAlt = currAlt > maxAlt ? currAlt : maxAlt;
        if (currAlt > maxAlt) maxAlt = currAlt
    }

    return maxAlt;
};