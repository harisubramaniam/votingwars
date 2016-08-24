(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    
    H.wrap(H.Series.prototype, 'render', deferRender);
    
}(Highcharts));

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Roboto Condensed'
        },
        backgroundColor: "#efefef",
    },
    lang: { 
        thousandsSep: ','
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

$("#container1").highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'U.S. Population',
        style: {
                fontWeight: '700'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>',
        headerFormat: '<b>{point.key} </b><br />'
    },
    legend: {
            symbolPadding: 4,
            symbolWidth: 10,
            itemDistance: 12
            
        },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'U.S. Population',
        colorByPoint: true,
        data: [{
            name: 'White',
            y: 197409353,
            sliced: false,
            selected: false,
            color: '#9E2531'
        }, {
            name: 'Black',
            y: 39267149,
            color: '#384349'
        }, {
            name: 'Hispanic',
            y: 55279452,
            color: '#87A0AF'
        }, {
            name: 'Other',
            y: 26901102,
            color: '#B1D0E5'
        }]
    }]
});
$("#container2").highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Takeover Areas',
        style: {
                fontWeight: '700'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>',
        headerFormat: '<b>{point.key} </b><br />'
    },
    legend: {
            symbolPadding: 2,
            symbolWidth: 10,

        },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'Takeover Areas',
        colorByPoint: true,
        data: [{
            name: 'White',
            y: 1645410,
            sliced: false,
            selected: false,
            color: '#9E2531'
        }, {
            name: 'Black',
            y: 2431827,
            color: '#384349'
        }, {
            name: 'Hispanic',
            y: 1183325,
            color: '#87A0AF'
        }, {
            name: 'Other',
            y: 382755,
            color: '#B1D0E5'
        }]
    }]
});