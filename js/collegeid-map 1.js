$(function() {
  // Setup common map params
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

  // Default load params
  $.getJSON("data/collegeid-map.json", function(dataset1) {
      // Initiate the chart
    $('#container').highcharts('Map', {

      legend: {
        enabled: false
      },
      chart: {
        backgroundColor: '#EFEFEF'
      },
      title : {
        text : 'Some states allow voters to sign an affidavit, or submit other documentation if they do not have proper ID.',
        floating: true,
        verticalAlign: 'top',
        margin: 0
      },
      mapNavigation: {
        enabled: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      tooltip: {
        enabled: true,
        useHTML: true,
        headerFormat: '',
        pointFormat: '<b>{point.name}</b> <br />{point.data-point}'
      },
      colorAxis: {
        stops: [
            [0, '#efefef'],
            [0.2, '#efefef'],
            [0.4, '#ABC3DB'],
            [0.45, '#364469'],
            [0.55, '#364469'],
            [0.65, '#783A3E'],
            [0.75, '#783A3E']
        ],
        min: 0
      },
      series : [{
        data : dataset1,
        mapData: Highcharts.maps['countries/us/us-all'],
        joinBy: 'hc-key',
        name: 'Voting Law Changes',
        states: {
          hover: {
            color: '#9E2531'
          }
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        }
      },
      {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
        color: 'silver',
        showInLegend: false,
        enableMouseTracking: false
      }]
    });
  });
})
