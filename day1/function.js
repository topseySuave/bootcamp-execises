let words = sentence => {
    if(
        Number(sentence) || typeof(sentence) == 'function' || typeof sentence == 'boolean'
    ) return 'Invalid Input';

    let i = 0;
    let word = sentence.split(" ");
    let histogram = {};
    let letter;

    for (i, len = word.length; i < len; i++) {
        letter = word[i];
        histogram[letter] = (histogram[letter] || 0) + 1;
    }

    return histogram;
}

module.exports = words;