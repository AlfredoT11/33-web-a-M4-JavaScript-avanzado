let token;
let questionsNumber = 5;
let category = 10;
let type = 'multiple';
let difficulty = 'easy';

let categories;

const requestToken = fetch('https://opentdb.com/api_token.php?command=request')
                        .then(response => response.json())
                        .then(json => {
                            console.log(json);
                            token = json.token;
                            console.log(`El token generado fue: ${token}`);
                            return fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&category=${category}&difficulty=${difficulty}&type=${type}&token=${token}`);
                        })
                        .then(response => response.json())
                        .then(json => console.log(json))
                        .catch(error => console.log(error));

const retrieveCategories = async () => {
    const response = await fetch('https://opentdb.com/api_category.php');
    const responseJson = await response.json();
    categories = responseJson.trivia_categories;
    return responseJson;
}

const showCategories = async () => {
    console.log(await retrieveCategories());
}

const requestInfo = () => {
    fetch('https://opentdb.com/api_token.php?command=request')
                        .then(response => response.json())
                        .then(json => {
                            console.log(json);
                            token = json.token;
                            console.log(`El token generado fue: ${token}`);
                            return fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&category=${category}&difficulty=${difficulty}&type=${type}&token=${token}`);
                        })
                        .then(response => response.json())
                        .then(json => console.log(json))
                        .catch(error => console.log(error));
}

showCategories();