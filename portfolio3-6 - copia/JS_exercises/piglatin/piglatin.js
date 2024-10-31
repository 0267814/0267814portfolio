document.getElementById('translateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    outputText.textContent = igpayAtinlay(inputText);
});

function igpayAtinlay(str) {
    const returnArray = [];
    const wordArray = str.split(" "); 

    for (let i = 0; i < wordArray.length; i++) {
        const word = wordArray[i];
        const beginning = word.charAt(0);

       
        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word + "way");
            continue;
        }

       
        let consonantCluster = "";
        let j = 0;

       
        while (j < word.length && !/[aeiouAEIOU]/.test(word.charAt(j))) {
            consonantCluster += word.charAt(j);
            j++;
        }

        
        const pigLatinWord = word.substring(j) + consonantCluster + "ay";
        returnArray.push(pigLatinWord);
    }

    return returnArray.join(" "); 
}
