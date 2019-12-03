document.onload = showPosition();

function showPosition() {
    const myPosition = document.getElementById("myPosition");
    const currentPosition = navigator.geolocation.getCurrentPosition((position) => {
        myPosition.innerHTML = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
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
        alert("hejdå");
    });
}

function populateTable(data) {
    const tr = document.createElement('tr');
    tr.innerHTML = "<td>data</td><td>data</td>";
    document.getElementById("forecast").lastElementChild.append(tr);
    const tr2 = document.createElement('tr');
    tr2.innerHTML = "<td>data</td><td>data</td>";
    document.getElementById("forecast").lastElementChild.append(tr2);
}

