const getNames = async (inputName, inputCountry) => {
    const response = await fetch(`https://api.abalin.net/getdate?name=${inputName}&country=${inputCountry}`);

    const data1 = await response.json();

    return data1;
};

const getDate = async (inputCountry, inputMonth, inputDay) => {
    const response = await fetch(`https://api.abalin.net/namedays?country=${inputCountry}&month=${inputMonth}&day=${inputDay}`);

    const data2 = await response.json();

    return data2;
};