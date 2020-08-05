

const getSortKeyWord = (queries) => {

    const regex = /sort=([A-Za-z]*)/;
    const check = queries.match(regex);
    const keyWord = check ? check[1] : '';
    return keyWord;
}

export default getSortKeyWord;