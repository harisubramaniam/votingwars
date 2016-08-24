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
        text: 'Baby Boomers',
        style: {
                fontWeight: '700',
                fontSize: '1.25em'
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
        name: 'Baby Boomers',
        colorByPoint: true,
        data: [{
            name: 'Registered and voting',
            y: 37881000,
            sliced: false,
            selected: true,
            color: '#9E2531'
        }, {
            name: 'Registered not voting',
            y: 13505000,
            color: '#EA3749'
        }, {
            name: 'Not registered',
            y: 19782000,
            color: 'rgba(234, 146, 163, .3)'
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
        text: 'Generation X',
        style: {
                fontWeight: '700',
                fontSize: '1.25em'
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
        name: 'Generation X',
        colorByPoint: true,
        data: [{
            name: 'Registered and voting',
            y: 82003000,
            sliced: false,
            selected: true,
            color: '#9E2531'
        }, {
            name: 'Registered not voting',
            y: 42973000,
            color: '#EA3749'
        }, {
            name: 'Not registered',
            y: 58785000,
            color: 'rgba(234, 146, 163, .3)'
        }]
    }]
});
$("#container3").highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Millennials',
        style: {
                fontWeight: '700',
                fontSize: '1.25em'
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
        name: 'Millennials',
        colorByPoint: true,
        data: [{
            name: 'Registered and voting',
            y: 27346000,
            sliced: false,
            selected: true,
            color: '#9E2531'
        }, {
            name: 'Registered not voting',
            y: 33125000,
            color: '#EA3749'
        }, {
            name: 'Not registered',
            y: 61234000,
            color: 'rgba(234, 146, 163, .3)'
        }]
    }]
});
$("#container4").highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '70+',
        style: {
                fontWeight: '700',
                fontSize: '1.25em'
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
        name: '70+',
        colorByPoint: true,
        data: [{
            name: 'Registered and voting',
            y: 37270000,
            sliced: false,
            selected: true,
            color: '#9E2531'
        }, {
            name: 'Registered not voting',
            y: 10230000,
            color: '#EA3749'
        }, {
            name: 'Not registered',
            y: 15748000,
            color: 'rgba(234, 146, 163, .3)'
        }]
    }]
});