let words = sentence => {
    if (typeof sentence !== 'string') return 'Invalid Input, Argument should be a string!';
    if(sentence.length <= 1) return sentence + ' is not a word.!';

    let i = 0;
    let word = sentence.split(" ");
    let histogram = {};
    let letter;

    for (i, len = word.length; i < len; i++) {
        if(word[i] !== " "){
            letter = word[i];
        }
        histogram[letter] = (histogram[letter] || 0) + 1;
    }

    return histogram;
}

module.exports = words;