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
  $.getJSON("data/dataset1.json", function(dataset1) {
      // Initiate the chart
    $('#container').highcharts('Map', {

      legend: {
        enabled: false
      },
      chart: {
        backgroundColor: '#EFEFEF'
      },
      title : {
        text : 'New Voting Regulations 1',
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
        pointFormat: '<b>{point.name}</b> <br />{point.data-point}'
      },
      colorAxis: {
        stops: [
          [0.096, 'rgba(38, 43, 63, .8)']
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

    $.getJSON("data/dataset1.json", function(dataset1) {
      // Initiate the chart
      $('#container').highcharts('Map', {

        legend: {
          enabled: false
        },
        chart: {
          backgroundColor: '#EFEFEF'
        },
        title : {
          text : 'New Voting Regulations 1',
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
          pointFormat: '<b>{point.name}</b> <br />{point.data-point}'
        },
        colorAxis: {
          stops: [
            [0.096, 'rgba(38, 43, 63, .8)']
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
    
    $.getJSON("data/dataset2.json", function(dataset2) {

      // Initiate the chart
      $('#container').highcharts('Map', {

        legend: {
          enabled: false
        },
        chart: {
          backgroundColor: '#EFEFEF'
        },
        title : {
          text : 'New Voting Regulations 2',
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
          pointFormat: '<b>{point.name}</b> <br />{point.data-point}'
        },
        colorAxis: {
          stops: [
            [0.096, 'rgba(38, 43, 63, .8)']
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