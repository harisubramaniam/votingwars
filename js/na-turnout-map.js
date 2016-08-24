$(function () {
    $.getJSON("data/na-map-data.json", function (data) {

        var countiesMap = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all']),
            lines = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all'], 'mapline'),
            options;

        // Add state acronym for tooltip
        Highcharts.each(countiesMap, function (mapPoint) {
            mapPoint.name = mapPoint.name + ', ' + mapPoint.properties['hc-key'].substr(3, 2).toUpperCase();
        });

        options = {
            chart: {
                borderWidth: 1,
                marginRight: 50 // for the legend
            },

            chart: {
                backgroundColor: '#EFEFEF'
          },

            title: {
                text: 'Voter turnout in states with the greatest Native American population',
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em'
                }
            },

            subtitle: {
                text: 'Hover over counties for details',
                style: {
                    fontWeight: '700',
                    fontSize: '.95em'
                }
            },

            legend: {
                useHTML: true,
                title: {
                    text: 'Turnout Rate<br />',
                    style: {
                        fontWeight: '700',
                        fontSize: '.95em'
                    }
                },
                backgroundColor: "#EFEFEF",
                align: 'center',
                floating: false,
                valueDecimals: 0,
                valueSuffix: '%',
                symbolRadius: 0,
                symbolHeight: 14
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    alignTo: 'spacingBox',
                    theme: {
                        fill: '#EFEFEF',
                         'stroke-width:': 1,
                         stroke: 'silver',
                         r: 0,
                         states: {
                            hover: {
                                fill: 'rgba(154, 174, 255, .4)'
                            },
                            select: {
                                stroke: '#039',
                                fill: 'rgba(154, 174, 255, .4)'
                            }
                         }
                    },
                    verticalAlign: 'bottom'
                }                
            },

            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 54.35,
                    color: 'rgba(38, 43, 63, .8)'
                }, {
                    from: 54.36,
                    to: 61.14,
                    color: 'rgba(58, 66, 97, .7)'
                }, {
                    from: 61.15,
                    to: 66.88,
                    color: 'rgba(80, 91, 133, .6)'
                }, {
                    from: 66.89,
                    to: 72.48,
                    color: 'rgba(126, 143, 209, .5)'
                }, {
                    from: 72.49,
                    to: 100,
                    color: 'rgba(154, 174, 255, .4)'
                }]
            },

            plotOptions: {
                mapline: {
                    showInLegend: false,
                    enableMouseTracking: false
                }
            },

            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: '<b>{point.name}</b><br />&#8226; Turnout Rate: {point.value}<br />&#8226; {point.myString}'
            },

            series: [{
                mapData: countiesMap,
                data: data,
                joinBy: ['hc-key', 'code'],
                name: 'Turnout Rate',
                tooltip: {
                    valueSuffix: '%'
                },
                borderWidth: 0.5,
                states: {
                    hover: {
                        color: '#9E2531'
                    }
                }
            }, {
                type: 'mapline',
                name: 'State borders',
                data: [lines[0]],
                color: 'gray'
            }, {
                type: 'mapline',
                name: 'Separator',
                data: [lines[1]],
                color: 'gray'
            }]
        };

        // Set map params
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: 'Roboto Condensed'
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });

        // Instanciate the map
        $('#container').highcharts('Map', options);
    });
});