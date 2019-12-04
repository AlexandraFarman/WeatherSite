document.onload = showPosition();

function showPosition() {
    const myPosition = document.getElementById("myPosition");
    const currentPosition = navigator.geolocation.getCurrentPosition((position) => {
        myPosition.innerHTML = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
        const url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + Math.round(position.coords.longitude) +
            "/lat/" + Math.round(position.coords.latitude) + "/data.json";
        fetch(url)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
                    // Examine the text in the response
                    response.json().then(function(data) {
                        console.log(data);
                        populateTable(data);
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    });
}

function populateTable(data) {

    for (i = 0; i < data.timeSeries.length; i++) {
        if (data.timeSeries[i].validTime.includes("T12:00:00Z")) {
            const date = data.timeSeries[i].validTime.slice(0, 10);
            const weatherCode = data.timeSeries[i].parameters[18].values[0];
            const tr = document.createElement('tr');
            switch (weatherCode) {
                case 1:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/1.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 2:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/2.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 3:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/3.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 4:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/4.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 5:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/5.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 6:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/6.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 7:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/7.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 8:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/8.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 9:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/9.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 10:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/10.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 11:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/11.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 12:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/12.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 13:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/13.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 14:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/14.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 15:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/15.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 16:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/16.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 17:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/17.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 18:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/18.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 19:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/19.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 20:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/20.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 21:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/21.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 22:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/22.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 23:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/23.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 24:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/24.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 25:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/25.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 26:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/26.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
                case 27:
                    tr.innerHTML = "<td>" + date + "</td><td><img src= 'images/27.png' width='60' height='40' /></td>";
                    document.getElementById("forecast").lastElementChild.append(tr);
                    break;
            }
        }
    }
}