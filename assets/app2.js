



const getNames = async (inputName, inputCountry) => {
    const response = await fetch(`https://api.abalin.net/getdate?name=${inputName}&country=${inputCountry}`);
    console.log(response)

    const searchResult = await response.json();

    return searchResult;
};

const getDate = async (country, month, day) => {
    const response = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`);
    console.log(response)

    const data = await response.json();

    return data;
};