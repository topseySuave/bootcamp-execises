const words = sentence => {
    if (typeof sentence !== 'string') return 'Invalid Input, Argument should be a string!';
    if(sentence.length <= 1) return sentence + ' is not a word.!';
    // if(sentence == null) return ;

    let i = 0;
    let word = sentence.split(" ");
    let histogram = {};
    let letter;

    for (i, len = word.length; i < len; i++) {
        word[i] = word[i].replace(/[^0-9a-z]/gi, '');
        if(word[i] !== ""){
            letter = word[i];
        }
        histogram[letter] = (histogram[letter] || 0) + 1;
    }

    return histogram;
}

module.exports = words;