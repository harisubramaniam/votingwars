$(function()  {

  var lines = Highcharts.geojson(Highcharts.maps['countries/us/us-al-all'], 'mapline'),
    mapData = Highcharts.maps['countries/us/us-al-all']
  
  var data = [
    {"name": "Russell County, AL","hc-key": "us-al-113","value": 43.0,"myString": "Poverty rate: 22.1"},
    {"name": "Lee County, AL","hc-key": "us-al-081","value": 23.8,"myString": "Poverty rate: 23.6"},
    {"name": "Escambia County, AL","hc-key": "us-al-053","value": 32.9,"myString": "Poverty rate: 26"},
    {"name": "Mobile County, AL","hc-key": "us-al-097","value": 35.6,"myString": "Poverty rate: 19.9"},
    {"name": "Talladega County, AL","hc-key": "us-al-121","value": 32.6,"myString": "Poverty rate: 23.4"},
    {"name": "Jackson County, AL","hc-key": "us-al-071","value": 4.0,"myString": "Poverty rate: 18.2"},
    {"name": "Pike County, AL","hc-key": "us-al-109","value": 37.6,"myString": "Poverty rate: 27.2"},
    {"name": "Houston County, AL","hc-key": "us-al-069","value": 27.1,"myString": "Poverty rate: 18.4"},
    {"name": "Etowah County, AL","hc-key": "us-al-055","value": 15.9,"myString": "Poverty rate: 19.6"},
    {"name": "Tuscaloosa County, AL","hc-key": "us-al-125","value": 30.8,"myString": "Poverty rate: 18.4"},
    {"name": "Barbour County, AL","hc-key": "us-al-005","value": 47.3,"myString": "Poverty rate: 24.1"},
    {"name": "Marion County, AL","hc-key": "us-al-093","value": 3.9,"myString": "Poverty rate: 19.4"},
    {"name": "Dale County, AL","hc-key": "us-al-045","value": 20.7,"myString": "Poverty rate: 18.7"},
    {"name": "Madison County, AL","hc-key": "us-al-089","value": 25.3,"myString": "Poverty rate: 13.4"},
    {"name": "Calhoun County, AL","hc-key": "us-al-015","value": 21.6,"myString": "Poverty rate: 21.7"},
    {"name": "Coffee County, AL","hc-key": "us-al-031","value": 18.2,"myString": "Poverty rate: 18.8"},
    {"name": "DeKalb County, AL","hc-key": "us-al-049","value": 2.4,"myString": "Poverty rate: 20.1"},
    {"name": "Colbert County, AL","hc-key": "us-al-033","value": 17.1,"myString": "Poverty rate: 18.3"},
    {"name": "Marshall County, AL","hc-key": "us-al-095","value": 2.6,"myString": "Poverty rate: 19.9"},
    {"name": "Walker County, AL","hc-key": "us-al-127","value": 6.9,"myString": "Poverty rate: 23"},
    {"name": "Monroe County, AL","hc-key": "us-al-099","value": 42.2,"myString": "Poverty rate: 29.2"},
    {"name": "Montgomery County, AL","hc-key": "us-al-101","value": 56.5,"myString": "Poverty rate: 22"},
    {"name": "Jefferson County, AL","hc-key": "us-al-073","value": 42.8,"myString": "Poverty rate: 18.7"},
    {"name": "Tallapoosa County, AL","hc-key": "us-al-123","value": 28.0,"myString": "Poverty rate: 21.1"},
    {"name": "Chilton County, AL","hc-key": "us-al-021","value": 10.5,"myString": "Poverty rate: 18.8"},
    {"name": "Clarke County, AL","hc-key": "us-al-025","value": 45.5,"myString": "Poverty rate: 27"},
    {"name": "Autauga County, AL","hc-key": "us-al-001","value": 19.1,"myString": "Poverty rate: 12.8"},
    {"name": "Morgan County, AL","hc-key": "us-al-103","value": 12.9,"myString": "Poverty rate: 15.1"},
    {"name": "Dallas County, AL","hc-key": "us-al-047","value": 70.6,"myString": "Poverty rate: 35.9"},
    {"name": "Elmore County, AL","hc-key": "us-al-051","value": 21.8,"myString": "Poverty rate: 12.9"},
    {"name": "Limestone County, AL","hc-key": "us-al-083","value": 13.7,"myString": "Poverty rate: 14.1"},
    {"name": "Cullman County, AL","hc-key": "us-al-043","value": 1.7,"myString": "Poverty rate: 18"},
    {"name": "Conecuh County, AL","hc-key": "us-al-035","value": 46.6,"myString": "Poverty rate: 32.9"},
    {"name": "Covington County, AL","hc-key": "us-al-039","value": 13.3,"myString": "Poverty rate: 20.1"},
    {"name": "Blount County, AL","hc-key": "us-al-009","value": 2.1,"myString": "Poverty rate: 17.3"},
    {"name": "Marengo County, AL","hc-key": "us-al-091","value": 51.6,"myString": "Poverty rate: 25"},
    {"name": "Shelby County, AL","hc-key": "us-al-117","value": 11.9,"myString": "Poverty rate: 8.6"},
    {"name": "Baldwin County, AL","hc-key": "us-al-003","value": 10.0,"myString": "Poverty rate: 13.8"},
    {"name": "Bibb County, AL","hc-key": "us-al-007","value": 22.0,"myString": "Poverty rate: 17"},
    {"name": "Bullock County, AL","hc-key": "us-al-011","value": 72.0,"myString": "Poverty rate: 20.5"},
    {"name": "Butler County, AL","hc-key": "us-al-013","value": 44.2,"myString": "Poverty rate: 25.9"},
    {"name": "Chambers County, AL","hc-key": "us-al-017","value": 40.7,"myString": "Poverty rate: 23.9"},
    {"name": "Cherokee County, AL","hc-key": "us-al-019","value": 5.3,"myString": "Poverty rate: 21"},
    {"name": "Choctaw County, AL","hc-key": "us-al-023","value": 43.9,"myString": "Poverty rate: 21.5"},
    {"name": "Clay County, AL","hc-key": "us-al-027","value": 15.6,"myString": "Poverty rate: 18.7"},
    {"name": "Cleburne County, AL","hc-key": "us-al-029","value": 4.2,"myString": "Poverty rate: 18.1"},
    {"name": "Coosa County, AL","hc-key": "us-al-037","value": 32.7,"myString": "Poverty rate: 20"},
    {"name": "Crenshaw County, AL","hc-key": "us-al-041","value": 24.5,"myString": "Poverty rate: 17.2"},
    {"name": "Fayette County, AL","hc-key": "us-al-057","value": 13.3,"myString": "Poverty rate: 20.8"},
    {"name": "Franklin County, AL","hc-key": "us-al-059","value": 5.1,"myString": "Poverty rate: 24.3"},
    {"name": "Geneva County, AL","hc-key": "us-al-061","value": 10.1,"myString": "Poverty rate: 22.6"},
    {"name": "Greene County, AL","hc-key": "us-al-063","value": 81.4,"myString": "Poverty rate: 36.6"},
    {"name": "Hale County, AL","hc-key": "us-al-065","value": 58.5,"myString": "Poverty rate: 27.9"},
    {"name": "Henry County, AL","hc-key": "us-al-067","value": 27.8,"myString": "Poverty rate: 14.8"},
    {"name": "Lamar County, AL","hc-key": "us-al-075","value": 12.3,"myString": "Poverty rate: 22.6"},
    {"name": "Lauderdale County, AL","hc-key": "us-al-077","value": 10.8,"myString": "Poverty rate: 18.7"},
    {"name": "Lawrence County, AL","hc-key": "us-al-079","value": 12.5,"myString": "Poverty rate: 17.1"},
    {"name": "Lowndes County, AL","hc-key": "us-al-085","value": 74.1,"myString": "Poverty rate: 29.3"},
    {"name": "Macon County, AL","hc-key": "us-al-087","value": 82.1,"myString": "Poverty rate: 26.4"},
    {"name": "Perry County, AL","hc-key": "us-al-105","value": 68.9,"myString": "Poverty rate: 37.4"},
    {"name": "Pickens County, AL","hc-key": "us-al-107","value": 43.5,"myString": "Poverty rate: 25.6"},
    {"name": "Randolph County, AL","hc-key": "us-al-111","value": 20.9,"myString": "Poverty rate: 23.5"},
    {"name": "St. Clair County, AL","hc-key": "us-al-115","value": 9.6,"myString": "Poverty rate: 16.1"},
    {"name": "Sumter County, AL","hc-key": "us-al-119","value": 73.2,"myString": "Poverty rate: 38.5"},
    {"name": "Washington County, AL","hc-key": "us-al-129","value": 24.3,"myString": "Poverty rate: 15.9"},
    {"name": "Wilcox County, AL","hc-key": "us-al-131","value": 72.2,"myString": "Poverty rate: 40.6"},
    {"name": "Winston County, AL","hc-key": "us-al-133","value": 0.8,"myString": "Poverty rate: 22.4"}    
  ];
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

  $('#container').highcharts('Map', {
    chart: {
      backgroundColor: '#EFEFEF'
    },
    chart: {
      events: {
        load: function() {
          var chart = $('#container').highcharts(),
            nameOfCounties = ['Baldwin', 'Bibb', 'Bullock', 'Butler', 'Chambers', 'Cherokee', 'Choctaw', 'Clay', 'Cleburne', 'Coosa', 'Crenshaw', 'Fayette', 'Franklin', 'Geneva', 'Greene', 'Hale', 'Henry', 'Lamar', 'Lauderdale', 'Lawrence', 'Lowndes', 'Macon', 'Perry', 'Pickens', 'Randolph', 'St. Clair', 'Sumter', 'Washington', 'Wilcox', 'Winston'];

          chart.series[0].data.forEach(function(element){
            if ($.inArray(element.name, nameOfCounties) !== -1) {
              element.update({
                borderColor: 'rgba(158, 37, 49, .75)',
                borderWidth: 2,
              });
            }
          });
        }
      },
      backgroundColor: '#EFEFEF'
    },
    title: {
      useHTML: true,
      text: 'Almost half of the counties in Alabama have reduced DMV services',
      style: {
        fontWeight: '700'
      }
    },
    subtitle: {
      text: 'Counties with reduced DMV services outlined in red'
    },
    legend: {
      useHTML: true,
      title: {
        text: 'Percent Black'
      },
      backgroundColor: "#EFEFEF",
      // layout: 'vertical',
      valueSuffix: '%',
      align: 'center',
      floating: false,
      valueDecimals: 0,
      symbolRadius: 0,
      symbolHeight: 14
    },
    tooltip: {
      useHTML: true,
      headerFormat: '',
      pointFormat: '<b>{point.name} County</b><br /><b>&#8226; <b>Black composition rate: {point.value}%</b><br />&#8226; <b>{point.myString}%</b>'
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    colorAxis: {
      dataClasses: [{
        from: 0,
        to: 19.9,
        color: 'rgba(154, 174, 255, .4)'
      }, {
        from: 20,
        to: 39.9,
        color: 'rgba(126, 143, 209, .5)'
      }, {
        from: 40,
        to: 59.9,
        color: 'rgba(80, 91, 133, .6)'
      }, {
        from: 60,
        to: 79.9,
        color: 'rgba(58, 66, 97, .7)'
      }, {
        from: 80,
        to: 100,
        color: 'rgba(38, 43, 63, .8)'
      }]
    },
    series: [{
      // showInLegend: true,
      data: data,
      // mapData: Highcharts.maps['countries/us/us-al-all'],
      mapData: mapData,
      joinBy: 'hc-key',
      name: 'DMV Restrictions',
      states: {
        hover: {
          color: '#9E2531'
        }
      },
      borderColor: 'gray',
      borderWidth: 1,
      dataLabels: {
        enabled: false,
        format: '{point.value}'
      }
    }]

  });

});