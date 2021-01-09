var APIurl = "https://api.openweathermap.org/data/2.5/weather?q="
var query;
var key = "&appid=e4a84ee8052e1f5cc27dfc8b14b8fa94";
var APIurl2 = "https://pro.openweathermap.org/data/2.5/climate/month?id=2643743&appid=e4a84ee8052e1f5cc27dfc8b14b8fa94"


$(document).ready(function () {
    $('#search_ur_city').on('keyup', (function () {
        var city = $('#search_ur_city').val();
        query = APIurl + city + key;
        $('#input').val(query);

    }))

    $('#search').on('click', (function () {
        $.get(query, function (data) {
            var str = " ";

            for (item in data.main) {
                if (item == 'temp') {
                    var temp = data.main.temp - 272.15;
                    temp = temp.toFixed(2);
                    str = str + item + " : " + temp + "<br>";
                } else {
                    str = str + item + ":" + data.main[item] + "<br>";
                }
            }
            $('#main').html(str);
            str = " ";

            for (item in data.wind) {
                str = str + item + ":" + data.wind[item] + "<br>";
            }
            $('#wind').html(str);
            str = " ";

            str = str + "name : " + data.name + "<br>"
            for (item in data.coord) {
                str = str + item + ":" + data.coord[item] + "<br>";
            }
            $('#coord').html(str);

            str = " ";
            for (item in data.weather[0]) {
                if (item == 'id' || item == "icon") {

                } else {
                    str = str + item + ":" + data.weather[0][item] + "<br>";
                }
            }
            $('#weather').html(str);

        });
    }));
});

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
};

var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
};

var data = [trace1, trace2];
var graph = $('#graph');
Plotly.newPlot(graph, data);