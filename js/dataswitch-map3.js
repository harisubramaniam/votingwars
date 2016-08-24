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
  $.getJSON("data/intro_morer_felon.json", function(dataset1) {
      // Initiate the chart
    $('#container').highcharts('Map', {

      legend: {
        enabled: false
      },
      chart: {
        backgroundColor: '#EFEFEF'
      },
      title : {
        text : 'Laws making felon rights restoration more difficult',
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
        enabled: false,
        useHTML: true,
        headerFormat: '',
        pointFormat: '<b>{point.name}</b> <br />{point.value}'
      },
      colorAxis: {
        stops: [
            [0, '#EFEFEF'],
            /*[0.006, '#ABC3DB'],
            [0.0218, '#738DA8'],
            [0.0618, '#364469'],
            [0.1273, '#262B3F'],
            [0.2364, '#262B3F'],*/
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

  // Button 1 clicked
  $('#map1').click(function() {

    $.getJSON("data/intro_morer_felon.json", function(dataset1) {
      // Initiate the chart
      $('#container').highcharts('Map', {

        legend: {
          enabled: false
        },
        chart: {
          backgroundColor: '#EFEFEF'
        },
        title : {
          text : 'Proposed laws making felon rights restoration more difficult',
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
          useHTML: true,
          headerFormat: '',
          pointFormat: '<b>{point.name}</b> <br />Bills proposed: {point.value}'
        },
        colorAxis: {
          stops: [
            [0, '#EFEFEF'],
            [0.2, '#ABC3DB'],
            [0.2, '#738DA8'],
            [0.4, '#364469'],
            [0.6, '#262B3F']
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
  });

  // Button 2 clicked
  $('#map2').click(function() {
    
    $.getJSON("data/enact_morer_felon.json", function(dataset2) {

      // Initiate the chart
      $('#container').highcharts('Map', {

        legend: {
          enabled: false
        },
        chart: {
          backgroundColor: '#EFEFEF'
        },
        title : {
          text : 'Enacted laws making felon rights restoration more difficult',
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
          useHTML: true,
          headerFormat: '',
          pointFormat: '<b>{point.name}</b> <br />Bills enacted: {point.value}'
        },
        colorAxis: {
          stops: [
            [0.0, '#EFEFEF'],
            [0.3, '#738DA8'],
            [0.7, '#262B3F'],
          ],
          min: 0
        },
        series : [{
          data : dataset2,
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
  });

})