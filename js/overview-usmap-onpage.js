$(function () {

    // Prepare data
    var data = [
        {
            "hc-key": "us-wi",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement<br>&#8226;&nbsp;Reduced early voting days"
        },
        {
            "hc-key": "us-co",
            "value": 1,
            "data-point": "&#8226;&nbsp;Added voter drive requirements"
        },
        {
            "hc-key": "us-ks",
            "value": 1,
            "data-point": "&#8226;&nbsp;New proof of citizenship requirement<br>&#8226;&nbsp;Reduced early voting days<br>&#8226;&nbsp;Restricted felons' rights restorations"
        },
        {
            "hc-key": "us-in",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement<br>&#8226;&nbsp;Reduced early voting days<br>&#8226;&nbsp; Restricted felons' rights restorations"
        },
        {
            "hc-key": "us-ar",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement<br>&#8226;&nbsp;Added vote-by-mail restrictions"
        },
        {
            "hc-key": "us-tx",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement<br>&#8226;&nbsp;Added voter drive requirements<br>&#8226;&nbsp;Added ballot pickup/delivery regulations"
        },
        {
            "hc-key": "us-ri",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement"
        },
        {
            "hc-key": "us-al",
            "value": 1,
            "data-point": "&#8226;&nbsp;New proof of citizenship requirement<br>&#8226;&nbsp;New voter ID requirement"
        },
        {
            "hc-key": "us-ms",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement"
        },
        {
            "hc-key": "us-nc",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement<br>&#8226;&nbsp;Reduced early voting days<br>&#8226;&nbsp;Eliminated same-day registration"
        },
        {
            "hc-key": "us-va",
            "value": 1,
            "data-point": "&#8226;&nbsp;Added voter drive requirements"
        },
        {
            "hc-key": "us-nh",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement"
        },
        {
            "hc-key": "us-oh",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement<br>&#8226;&nbsp;Reduced early voting days<br>&#8226;&nbsp;Added vote-by-mail restrictions<br>&#8226;&nbsp;Eliminated same-day registration"
        },
        {
            "hc-key": "us-tn",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement"
        },
        {
            "hc-key": "us-ga",
            "value": 1,
            "data-point": "&#8226;&nbsp;New proof of citizenship requirement"
        },
        {
            "hc-key": "us-sc",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement"
        },
        {
            "hc-key": "us-nd",
            "value": 1,
            "data-point": "&#8226;&nbsp;New voter ID requirement"
        },
        {
            "hc-key": "us-az",
            "value": 1,
            "data-point": "&#8226;&nbsp;Added ballot pickup/delivery regulations"
        },
        {
            "hc-key": "us-nj",
            "value": 1,
            "data-point": "&#8226;&nbsp;Added ballot pickup/delivery regulations"
        },
        {
            "hc-key": "us-ne",
            "value": 1,
            "data-point": "&#8226;&nbsp;Reduced early voting days"
        }
    ];

    // Setup map params
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Roboto Condensed'
            }
        },
        credits: {
                enabled: false,
                // text: 'See the entire database of new laws',
                // href: '/interactives/overview-data-cards.html',
            }, 
        exporting: {
            enabled: false
        }
    });

    // Initiate the chart
    $('#container').highcharts('Map', {

        legend: {
            enabled: false
        },

        chart: {
            backgroundColor: '#EFEFEF',
            marginTop: 0,
            marginBottom: 0,
        },

        title : {
            text : 'States With New Barriers to Voting Since 2012',
                style: {
                    fontWeight: '700',
                    fontSize: '24px',

                     display: 'none',
                },
            floating: false,
            verticalAlign: 'top',
            // margin: 200
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        tooltip: {
            useHTML: true,
            headerFormat: '',
            pointFormat: '<b>{point.name}</b> <br />{point.data-point}'
        },

        colorAxis: {
            stops: [
                [0.096, '#9E2531']
            ],
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Voting Law Changes',
            states: {
                hover: {
                    color: 'rgb(38, 43, 63)'
                }
            },
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
});
