const whereAmI = function (lat, lng) {
    const geoURL = `https://geocode.xyz/${lat},${lng}?geoit=json`

    fetch(geoURL)
        .then(response => {
            // neu co loi trong viec lay du lieu, nem loi
            if (!response.ok) {
                throw new Error('Không thể lấy dữ liệu từ API!')
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            
            // lay thong tin city va quoc gia tu data
            const city = data.city
            const country = data.country

            console.log(`Bạn đang ở ${city}, ${country}`);

            return fetch(`https://restcountries.com/v3.1/name/${country}`)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể lấy thông tin quốc gia!')
            }
            return response.json()
        })
        .then(data => {
            // lay ten quoc gia tu data
            const countryName = data[0].name.common
            console.log(`Quốc gia của bạn là: ${countryName}`);
            console.log(data)
        })
        .catch(error => {
            console.log(`Có lỗi xảy ra: ${error.message}`);
        });
}

whereAmI(52.508, 13.381)
// whereAmI(19.037, 72.873)
// whereAmI(-33.933, 18.474)