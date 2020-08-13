

const pageAndKeyWord = (queries) => {

    const pageRegex = /page=([\d])/;
    const checkRegex = queries.match(pageRegex);
    const page = checkRegex ? +checkRegex[1] : 1;

    const keyWordRegex = /keyWord=([A-Za-z]*)/;
    const checkReg = queries.match(keyWordRegex);
    const keyWord = checkReg ? checkReg[1] : '';

    return {
        page,
        keyWord
    }
}

export default pageAndKeyWord;