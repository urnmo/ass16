let wordsWordsWords = [butt, fart, peepee, doodoo, caca, weewee, shooshoo, poot]

/**
 *
 * 1. utilizing random functionality pick a word from array
 * 2. define word as "theWord"
 * @param {array} the array of words from which to choose
 * @returns {string} the word to be guessed
 * */
 
 function pickword(wordArray){

 }


/** 
 * Returns the number of guesses the player has to get it right.
 *
 * 1. player gets six guesses 
 *
 * @param {boolean} true or false - the word they're trying to guess
 * @returns {number} the number of attempts left to solve puzzle
 * 
 * 
*/

// Input is going to be a word, so it shouldn't be a boolean
function numGuesses(word){

}


/**
 * Indexes the array to see if the letter the player guessed is in the array
 * 
 * 1. create a loop that looks through array
 * 2. if letter is present return true and present index value
 * 3. if not present return false
 * 4. if true, call the "reveal" function
 * if false call numGuesses function and update number of choices
 * 
 * 
 * @param {array} array of letters found in the word
 * @returns {boolean and index value} false & remove a guess or true and run reveal function
 */
function findLetter(guessedLetter){

}

/**
 * recieves the index value and position of correctly guessed letter in the word
 * 
 * 1. reveals the guessed letter in appropriate box
 * 2. reveals the guessed letter in the guessed letters field
 * 
 * @param {array} the index of the letter and the letter itself
 * @returns {string} the letters or letter pushed to dom 
 * 
 */


function reveal()



/**
 * determines if the player has won 
 * 
 *
 * 1. recieves a boolean value true= correct guess 
 * 2. a correct guess adds 1 to total correct count
 * 3. if correct count is equal to length of word return true
 * 4. if correct count is less than length of word return false
 * 
 * @param {boolean} true=correct guess
 * @returns {boolean} if won = true if not yet = false
 * 
 */

function wins(result){

}

/**
 * determines if the player has lost
 * 
 * 1. recieves a boolean value false = incorrect guess
 * 2. an incorrect guess adds 1 to the total incorrect count
 * 3. if incorrect guess total reaches 6 return = true
 * 4. if incorrect guess total is less than 6 return = false
 * 
 * @param {boolean} incorrect guess = false
 * @returns {boolean} true = lost false = not yet lost
 * 
 */
function loses(result){

}


/** 
function reveals the hangman graphic
 * 
 * 1. if player wins return whew graphic
 * 2. if player loses return hanged man graphic
 * 
 * @param {boolean} true wins false loses
 * @returns {graphic} win and lose graphic
 */

function graphic(endGame){

}