/* Define for default load */
var data = null;
var rep_data = null;

/* Load default */
function start(){
  $.getJSON("data/south_black_rep.json",function(blackrep) {
    rep_data = blackrep;
    // console.log(rep_data);
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log(errorThrown);
  })
}

start();

$(document).ready(function() {
  //getDataByState(state); 
});

function update_charts() {
  getBlackRepByState();
  // document.getElementById('subhed').style.display = 'block';
}

function getBlackRepByState() {
    var count = 0;
    var i = 0;
    var year_arr = [];
    var state_black_rep_arr = [];
    var state_black_pop_arr = [];
    var other_black_rep_arr = [];
    var other_black_pop_arr = [];

    var temp_state = $('#select-state').val();
    // console.log(temp_state);
    $.each(rep_data, function() {
        loop_state = rep_data[count].state; 
        if(temp_state == loop_state) {
            for (i = 0; i < rep_data[count]["dataset"].length; i++) {
                year_arr.push(rep_data[count]["dataset"][i]["year"]);
                state_black_rep_arr.push(rep_data[count]["dataset"][i]["state_black_rep"]);
                state_black_pop_arr.push(rep_data[count]["dataset"][i]["state_black_pop"]);
                other_black_rep_arr.push(rep_data[count]["dataset"][i]["other_black_rep"]);
                other_black_pop_arr.push(rep_data[count]["dataset"][i]["other_black_pop"]);
            }
        } 
        count++;
    });

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto Condensed'
            },
            backgroundColor: '#efefef',
        },
        lang: {
            thousandsSep: ','
        }
    });
    $('#blackrepContainer').highcharts({
        chart: {
            type: 'area',
            height: 400
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            style: {
                fontFamily: 'Roboto Condensed',
                fontSize: '1em'
            },
            text: 'Click on the legend items to see and hide congressional representation and population figures.'
        },
        subtitle: {

            style: {
                fontFamily: 'Roboto Condensed',
                fontSize: '1.5em'
            },
            text: null
        },
        xAxis: {
            labels: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                }
            },
            categories: year_arr,
            plotLines: [{
            value: 48,
            label: {
                useHTML: true,
                text: '<strong>Voting Rights Act of 1965</strong>',
                verticalAlign: 'top',
                textAlign: 'center',
                rotation: 360,
                x: 70,
                y: 15
            },
            width: 1,
            dashStyle: 'dash',
            color: '#EA3749',
        }]
        },
        yAxis: {
            labels: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                },
                format: '{value}%'
            },
            title: {
                style: {
                    fontFamily: 'Roboto Condensed',
                    fontSize: '1em'
                },
                text: 'Black portion of population/congressional delegation'
            },
            min: 0
        },
        legend: {
            x: 0,
            y: 40,
            itemStyle: {
                fontFamily: 'Roboto Condensed',
                fontSize: '1em'
            },
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            padding: 2
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b><br />',
            headerFormat: '<b>{point.key} </b><br />',
            shared: true
        },
        plotOptions: {
            series: {
                animation: {
                    duration: 2500
                },
                lineWidth: 3.5,
            }
        },
        series: [{
            name: 'Black portion of state\'s Congressional delegation',
            color: "#9E2531",
            data: state_black_rep_arr,
            marker: {
                symbol: "circle",
                radius: 1
            },
            fillOpacity: 0
        }, {
            name: 'Black portion of state\'s population',
            color: 'rgba(234,55,73,.3)',
            data: state_black_pop_arr,
            // visible: false,
            marker: {
                symbol: "circle",
                radius: 0
            },
            fillOpacity: 0.3,
            lineWidth: 0
        }, {
            name: 'Black portion of non-"Black Belt" Congressional delegation',
            color: "#4C5A63",
            data: other_black_rep_arr,
            // visible: false,
            marker: {
                symbol: "circle",
                radius: 1
            },
            fillOpacity: 0
        }, {
            name: 'Black portion of non-"Black Belt" population',
            color: 'rgba(135,160,175,.4)',
            data: other_black_pop_arr,
            marker: {
                symbol: "circle",
                radius: 0
            },
            fillOpacity: 0.4,
            lineWidth: 0
        }]
    });
}