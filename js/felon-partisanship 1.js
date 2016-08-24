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
        text: 'Democrats',
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
            showInLegend: false
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'Democrats',
        colorByPoint: true,
        data: [{
            name: 'Less restrictive bills',
            y: 274,
            sliced: false,
            selected: true,
            color: '#364469'
        }, {
            name: 'More restrictive bills',
            y: 4,
            color: '#9E2531'
        }, {
            name: 'Neutral bills',
            y: 7,
            color: '#B8D9EF'
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
        text: 'Republicans',
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
            showInLegend: false
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'Republicans',
        colorByPoint: true,
        data: [{
            name: 'Less restrictive bills',
            y: 25,
            sliced: false,
            selected: true,
            color: '#364469'
        }, {
            name: 'More restrictive bills',
            y: 32,
            color: '#9E2531'
        }, {
            name: 'Neutral bills',
            y: 9,
            color: '#B8D9EF'
        }]
    }]
});