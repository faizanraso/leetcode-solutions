function reverseWords(s: string): string {
    let words = s.split(" ").filter(Boolean)
    let result = ""

    for(let i = words.length - 1; i >= 0; i--){
        result += words[i] + " ";
    }

    return result.trim();
};