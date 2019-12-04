document.onload = showPosition();

function showPosition() {
    const myPosition = document.getElementById("myPosition");
    const currentPosition = navigator.geolocation.getCurrentPosition((position) => {
        myPosition.innerHTML = "Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude;
        const url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + Math.round(position.coords.longitude) +
            "/lat/" + Math.round(position.coords.latitude) + "/data.json";
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
                    // Examine the text in the response
                    response.json().then(function (data) {
                        console.log(data);
                        populateTable(data);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    });
}

function populateTable(data) {
    data.timeSeries.filter(timeSerie => timeSerie.validTime.includes("T12:00:00Z"))
        .forEach(timeSerie => {
            const date = timeSerie.validTime.slice(0, 10);
            const weatherCode = timeSerie.parameters[18].values[0];
            const tr = document.createElement('tr');
            const tableBodyElement = document.getElementById("forecast").lastElementChild;
            let imageSrc;
            switch (weatherCode) {
                case 1:
                    imageSrc = 'images/1.png'
                    break;
                case 2:
                    imageSrc = 'images/2.png'
                    break;
                case 3:
                    imageSrc = 'images/3.png'
                    break;
                case 4:
                    imageSrc = 'images/4.png'
                    break;
                case 5:
                    imageSrc = 'images/5.png'
                    break;
                case 6:
                    imageSrc = 'images/6.png'
                    break;
                case 7:
                    imageSrc = 'images/7.png'
                    break;
                case 8:
                    imageSrc = 'images/8.png'
                    break;
                case 9:
                    imageSrc = 'images/9.png'
                    break;
                case 10:
                    imageSrc = 'images/10.png'
                    break;
                case 11:
                    imageSrc = 'images/11.png'
                    break;
                case 12:
                    imageSrc = 'images/12.png'
                    break;
                case 13:
                    imageSrc = 'images/13.png'
                    break;
                case 14:
                    imageSrc = 'images/14.png'
                    break;
                case 15:
                    imageSrc = 'images/15.png'
                    break;
                case 16:
                    imageSrc = 'images/16.png'
                    break;
                case 17:
                    imageSrc = 'images/17.png'
                    break;
                case 18:
                    imageSrc = 'images/18.png'
                    break;
                case 19:
                    imageSrc = 'images/19.png'
                    break;
                case 20:
                    imageSrc = 'images/20.png'
                    break;
                case 21:
                    imageSrc = 'images/21.png'
                    break;
                case 22:
                    imageSrc = 'images/22.png'
                    break;
                case 23:
                    imageSrc = 'images/23.png'
                    break;
                case 24:
                    imageSrc = 'images/24.png'
                    break;
                case 25:
                    imageSrc = 'images/25.png'
                    break;
                case 26:
                    imageSrc = 'images/26.png'
                    break;
                case 27:
                    imageSrc = 'images/27.png'
                    break;
            }
            tr.innerHTML = "<td>" + date + "</td><td><img src= '" + imageSrc + "' width='60' height='40' /></td>";
            tableBodyElement.append(tr);
        });
}