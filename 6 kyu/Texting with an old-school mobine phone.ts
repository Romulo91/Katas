// https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/typescript

// -------------------------
// |   1   |   2   |   3   |  <-- hold a key to type a number
// |  .,?! |  abc  |  def  |  <-- press a key to type a letter
// -------------------------
// |   4   |   5   |   6   |  <-- Top row
// |  ghi  |  jkl  |  mno  |  <-- Bottom row
// -------------------------
// |   7   |   8   |   9   |
// |  pqrs |  tuv  |  wxyz |
// -------------------------
// |   *   |   0   |   #   |  <-- hold for *, 0 or #
// |  '-+= | space |  case |  <-- press # to switch between upper/lower case
// -------------------------

// You got your thumb ready to go, so you'll receive a message and your job is to figure out which keys you need to press to output the given message with the lowest ' +
// 'number of clicks possible. Return the result as a string of key inputs from top row (refer to diagram above).
// Take your time to study the rules below.



export function sendMessage(message: string): string {
    // Click click click
    const keyMap: Record<string, {key: string, presses: number}>= {
        // 1.
        '.': {key: "1", presses: 1},
        ',': {key: "1", presses: 2},
        '?': {key: "1", presses: 3},
        '!': {key: "1", presses: 4},

        // 2
        'a': {key: "2", presses: 1},
        'b': {key: "2", presses: 2},
        'c': {key: "2", presses: 3},

        // 3
        'd': {key: "3", presses: 1},
        'e': {key: "3", presses: 2},
        'f': {key: "3", presses: 3},

        // 4
        'g': {key: "4", presses: 1},
        'h': {key: "4", presses: 2},
        'i': {key: "4", presses: 3},

        // 5
        'j': {key: "5", presses: 1},
        'k': {key: "5", presses: 2},
        'l': {key: "5", presses: 3},

        // 6
        'm': {key: "6", presses: 1},
        'n': {key: "6", presses: 2},
        'o': {key: "6", presses: 3},

        // 7
        'p': {key: "7", presses: 1},
        'q': {key: "7", presses: 2},
        'r': {key: "7", presses: 3},
        's': {key: "7", presses: 4},

        // 8
        't': {key: "8", presses: 1},
        'u': {key: "8", presses: 2},
        'v': {key: "8", presses: 3},

        // 9
        'w': {key: "9", presses: 1},
        'x': {key: "9", presses: 2},
        'y': {key: "9", presses: 3},
        'z': {key: "9", presses: 4},

        //*
        '\'': {key: '*', presses: 1},
        '-' : {key: '*', presses: 2},
        '+' : {key: '*', presses: 3},
        '=' : {key: '*', presses: 4},

        // 0
        ' ': {key: '0', presses: 1}

    }

    let result: string[] = [];
    let isUpperMode: boolean = false;
    let prevKey: string | null = null;
    let prevWasHold: boolean = false;

    for(const char of message) {
        // Numbers and literal * / # are entered by holding the corresponding key.
        if(/[0-9*#]/.test(char)) {
            const holdKey = char;

            // Waiting is still needed when switching from a press on the same key to a hold.
            if(prevKey === holdKey && !prevWasHold) {
                result.push(' ');
            }

            result.push(char + '-');
            prevKey = holdKey;
            prevWasHold = true;
            continue;
        }

        const isLetter = char.toUpperCase() !== char.toLowerCase();
        const isUpperCase = char === char.toUpperCase();
        const entry = keyMap[char.toLowerCase()];

        if(!entry) continue;

        const {key, presses} = entry;

        // if upperCase --> #
        if(isLetter && isUpperCase !== isUpperMode) {
            result.push('#');
            isUpperMode = !isUpperMode;
            prevWasHold = false;
            prevKey = null;
        }

        // waiting same key
        if(prevKey === key && !prevWasHold) {
            result.push(' ');
        }

        // normal way
        result.push(String(key).repeat(presses));
        prevKey = key;
        prevWasHold = false;
    }
    return result.join('');

}


// sendMessage("hey")                                               // Lösung --> "4433999"
// sendMessage("one two three")                                     // Lösung --> "666 6633089666084477733 33"
// sendMessage("Hello World!")                                      // Lösung --> "#44#33555 5556660#9#66677755531111"
// sendMessage("Def Con 1!")                                        // Lösung --> "#3#33 3330#222#666 6601-1111"
// sendMessage("A-z")                                               // Lösung --> "#2**#9999"
// sendMessage("1984")                                              // Lösung --> "1-9-8-4-"
// sendMessage("Big thanks for checking out my kata")               // Lösung --> "#22#444 4084426655777703336667770222443322255444664066688 806999055282"