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
        backgroundColor: '#EFEFEF'
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
        text: 'Targeted but not sued counties',
        style: {
                fontWeight: '700',
                fontSize: '1.25em'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}%</b>',
        headerFormat: '<b>{point.key} </b><br />'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'Targeted but not sued counties',
        colorByPoint: true,
        data: [{
            name: 'White',
            y: 79.1,
            sliced: false,
            selected: true,
            color: '#9E2531'
        }, {
            name: 'Non-white',
            y: 20.9,
            color: '#87A0AF'
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
        text: 'Sued counties',
        style: {
                fontWeight: '700',
                fontSize: '1.25em'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}%</b>',
        headerFormat: '<b>{point.key} </b><br />'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'Sued counties',
        colorByPoint: true,
        data: [{
            name: 'White',
            y: 48.9,
            sliced: false,
            selected: true,
            color: '#9E2531'
        }, {
            name: 'Non-white',
            y: 51.1,
            color: '#87A0AF'
        }]
    }]
});