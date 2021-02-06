export function reverseWords(str: string): string {
    return str.split(' ').map((word) => {
        if (word === "") return ""
        const ind = word.length - 1
        let revWord: string = "";
        for (let i = ind; i >= 0; i--) {
            revWord = revWord + word[i]
        }
        return revWord
    }).join(" ")
}

// console.log(reverseWords('double  spaced  words   triple'))