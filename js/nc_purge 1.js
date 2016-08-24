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
        text: 'Total Registered',
        style: {
                fontWeight: '700'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>',
        headerFormat: '<b>{point.key} </b><br />'
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
        name: 'Total Registration',
        colorByPoint: true,
        data: [{
            name: 'Democratic',
            y: 3076274,
            sliced: false,
            selected: true,
            color: '#5383D1'
        }, {
            name: 'Republican',
            y: 2250967,
            color: '#9E2531'
        }, {
            name: 'Other',
            y: 2132054,
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
        text: 'Purged',
        style: {
                fontWeight: '700'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>',
        headerFormat: '<b>{point.key} </b><br />'
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
        name: 'Purged',
        colorByPoint: true,
        data: [{
            name: 'Democratic',
            y: 378280,
            sliced: false,
            selected: true,
            color: '#5383D1'
        }, {
            name: 'Republican',
            y: 221659,
            color: '#9E2531'
        }, {
            name: 'Other',
            y: 163606,
            color: '#87A0AF'
        }]
    }]
});