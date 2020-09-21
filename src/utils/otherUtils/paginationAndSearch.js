

const pageAndKeyWord = (queries) => {

    const pageRegex = /page=([\d])/;
    const checkRegex = queries.match(pageRegex);
    const page = checkRegex ? +checkRegex[1] : 1;

    const keyWordRegex = /keyWord=([A-Za-z%20]*)/;
    const checkReg = queries.match(keyWordRegex);
    const keyWord = checkReg ? checkReg[1] : '';

    if (keyWord.includes('%20')) {
        const newWord = keyWord.replace(/%20/g, ' ');
        return {
            page,
            keyWord: newWord
        }
    }
    return {
        page,
        keyWord
    }
}

export default pageAndKeyWord;