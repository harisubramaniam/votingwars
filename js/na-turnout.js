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
        }
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

 $('#container').highcharts({
        credits: {
            text: 'News21',
            href: 'votingwars.news21.com'
        },
        chart: {
            backgroundColor: '#efefef',
            // plotBackgroundColor: 'rgba(0,0,0,0)',
            style: {
                fontFamily: 'Roboto Condensed'
            },
            alignTicks: false,
            },
            title: {
                text: 'Voter turnout in states with the greatest number of Native American population.',
                style: {
                    fontWeight: '700',
                    fontSize: '24px'
                }
            },
        plotOptions: {
            series: {
                animation: {
                    duration: 4000
                }
            }
        },
        subtitle: {
            text: 'Source: State elections offices and U.S. Census Bureau'
        },
        xAxis: [{
            categories: ['Golden Valley County, MT', 'Petroleum County, MT', 'Sweet Grass County, MT', 'Treasure County, MT', 'Wibaux County, MT', 'De Baca County, NM', 'Harding County, NM', 'Kidder County, ND', 'Slope County, ND', 'Steele County, ND', 'Harper County, OK', 'Deuel County, SD', 'Morgan County, UT', 'Piute County, UT', 'Rich County, UT', 'Johnson County, WY', 'Clark County, ID', 'Custer County, ID', 'Blaine County, ID', 'Caribou County, ID', 'Platte County, WY', 'Valley County, ID', 'Madison County, ID', 'Santa Cruz County, AZ', 'LaMoure County, ND', 'Wells County, ND', 'Kingsbury County, SD', 'Miner County, SD', 'Adams County, WA', 'Teton County, ID', 'Bear Lake County, ID', 'Sweetwater County, WY', 'Niobrara County, WY', 'Washakie County, WY', 'Uinta County, WY', 'Carter County, MT', 'Meagher County, MT', 'Emmons County, ND', 'McIntosh County, ND', 'Sheridan County, ND', 'Texas County, OK', 'Hand County, SD', 'Lake County, SD', 'Summit County, UT', 'Wasatch County, UT', 'Garfield County, WA', 'Sublette County, WY', 'Franklin County, ID', 'Oneida County, ID', 'Crook County, WY', 'Butte County, ID', 'Fallon County, MT', 'Mora County, NM', 'Foster County, ND', 'Lincoln County, SD', 'Sanborn County, SD', 'Sully County, SD', 'Davis County, UT', 'Albany County, WY', 'Lincoln County, WY', 'Goshen County, WY', 'Bonneville County, ID', 'Jefferson County, ID', 'Weston County, WY', 'Jerome County, ID', 'Washington County, ID', 'Madison County, MT', 'Stillwater County, MT', 'Quay County, NM', 'Griggs County, ND', 'Logan County, ND', 'Ransom County, ND', 'Beaver County, OK', 'Hamlin County, SD', 'Union County, SD', 'Garfield County, UT', 'Utah County, UT', 'Franklin County, WA', 'Cassia County, ID', 'Latah County, ID', 'Carbon County, WY', 'Minidoka County, ID', 'Ada County, ID', 'Lemhi County, ID', 'Ravalli County, MT', 'Wheatland County, MT', 'Hidalgo County, NM', 'San Miguel County, NM', 'Grant County, OK', 'Turner County, SD', 'Cache County, UT', 'Carbon County, UT', 'Whitman County, WA', 'Gem County, ID', 'Payette County, ID', 'Teton County, WY', 'Curry County, NM', 'Billings County, ND', 'Renville County, ND', 'Kane County, UT', 'Weber County, UT', 'Clark County, WA', 'King County, WA', 'Lewis County, WA', 'Fremont County, ID', 'Canyon County, ID', 'Carbon County, MT', 'Granite County, MT', 'Mineral County, MT', 'Chaves County, NM', 'Lea County, NM', 'Dickey County, ND', 'McHenry County, ND', 'Ellis County, OK', 'Faulk County, SD', 'Beaver County, UT', 'Daggett County, UT', 'Salt Lake County, UT', 'Benton County, WA', 'San Juan County, WA', 'Walla Walla County, WA', 'Natrona County, WY', 'Twin Falls County, ID', 'Park County, WY', 'Bonner County, ID', 'Camas County, ID', 'Cochise County, AZ', 'Judith Basin County, MT', 'Park County, MT', 'Colfax County, NM', 'DoÌ±a Ana County, NM', 'Luna County, NM', 'Barnes County, ND', 'Sargent County, ND', 'Cimarron County, OK', 'Jackson County, OK', 'Brookings County, SD', 'Clark County, SD', 'McCook County, SD', 'Juab County, UT', 'Millard County, UT', 'Laramie County, WY', 'Converse County, WY', 'Gallatin County, MT', 'Grant County, NM', 'Butte County, SD', 'Box Elder County, UT', 'Emery County, UT', 'Chelan County, WA', 'Cowlitz County, WA', 'Douglas County, WA', 'Island County, WA', 'Kittitas County, WA', 'Lincoln County, WA', 'Snohomish County, WA', 'Big Horn County, WY', 'Shoshone County, ID', 'Yuma County, AZ', 'Jefferson County, MT', 'Eddy County, NM', 'Los Alamos County, NM', 'Sierra County, NM', 'Union County, NM', 'Bowman County, ND', 'Cass County, ND', 'Golden Valley County, ND', 'Sanpete County, UT', 'Sevier County, UT', 'Wayne County, UT', 'Asotin County, WA', 'Grant County, WA', 'Pierce County, WA', 'Campbell County, WY', 'Beaverhead County, MT', 'Musselshell County, MT', 'Powder River County, MT', 'Sheridan County, MT', 'Roosevelt County, NM', 'Stutsman County, ND', 'Harmon County, OK', 'Tooele County, UT', 'Washington County, UT', 'Lincoln County, ID', 'Elmore County, ID', 'Fergus County, MT', 'Liberty County, MT', 'Burke County, ND', 'Cavalier County, ND', 'Stark County, ND', 'Roger Mills County, OK', 'Beadle County, SD', 'Columbia County, WA', 'Kitsap County, WA', 'Kootenai County, ID', 'Sheridan County, WY', 'Traill County, ND', 'Walsh County, ND', 'Beckham County, OK', 'Edmunds County, SD', 'Spokane County, WA', 'Thurston County, WA', 'Gooding County, ID', 'Daniels County, MT', 'Divide County, ND', 'Nelson County, ND', 'Washita County, OK', 'Pacific County, WA', 'Skagit County, WA', 'Wahkiakum County, WA', 'Adams County, ID', 'Maricopa County, AZ', 'Dawson County, MT', 'Garfield County, MT', 'Ward County, ND', 'Woods County, OK', 'Grant County, SD', 'Spink County, SD', 'Mohave County, AZ', 'Broadwater County, MT', 'Silver Bow County, MT', 'Grant County, ND', 'Towner County, ND', 'Alfalfa County, OK', 'Hutchinson County, SD', 'Jerauld County, SD', 'Yavapai County, AZ', 'Custer County, MT', 'Flathead County, MT', 'Teton County, MT', 'Adams County, ND', 'Tillman County, OK', 'Aurora County, SD', 'Hanson County, SD', 'Harding County, SD', 'Clearwater County, ID', 'Boise County, ID', 'Deer Lodge County, MT', 'Lincoln County, MT', 'Garfield County, OK', 'Woodward County, OK', 'Hot Springs County, WY', 'Guadalupe County, NM', 'Bottineau County, ND', 'Jefferson County, WA', 'Boundary County, ID', 'Prairie County, MT', 'Hettinger County, ND', 'Meade County, SD', 'Perkins County, SD', 'Iron County, UT', 'Skamania County, WA', 'McCone County, MT', 'Richland County, MT', 'Custer County, OK', 'Lincoln County, NM', 'Santa Fe County, NM', 'Catron County, NM', 'Torrance County, NM', 'Mercer County, ND', 'Dewey County, OK', 'Jones County, SD', 'Pima County, AZ', 'Lewis and Clark County, MT', 'Pembina County, ND', 'Richland County, ND', 'Codington County, SD', 'Yankton County, SD', 'Whatcom County, WA', 'Bannock County, ID', 'Greenlee County, AZ', 'Missoula County, MT', 'Grand Forks County, ND', 'Oklahoma County, OK', 'Minnehaha County, SD', 'Idaho County, ID', 'Mason County, WA', 'Potter County, SD', 'Klickitat County, WA', 'Skagway-Hoonah-Angoon County, AK', 'Major County, OK', 'Owyhee County, ID', 'Valencia County, NM', 'Greer County, OK', 'Clay County, SD', 'Lawrence County, SD', 'Morton County, ND', 'Logan County, OK', 'Davison County, SD', 'Douglas County, SD', 'Denali County, AK', 'Brown County, SD', 'Oliver County, ND', 'Pend Oreille County, WA', 'Yakima County, WA', 'Burleigh County, ND', 'Eddy County, ND', 'Power County, ID', 'Bernalillo County, NM', 'Kingfisher County, OK', 'Grays Harbor County, WA', 'Lewis County, ID', 'Yellowstone County, MT', 'Pierce County, ND', 'Canadian County, OK', 'Cleveland County, OK', 'Cascade County, MT', 'Williams County, ND', 'Custer County, SD', 'Payne County, OK', 'Stevens County, WA', 'Powell County, MT', 'Tulsa County, OK', 'Haakon County, SD', 'Toole County, MT', 'Comanche County, OK', 'Clallam County, WA', 'Pinal County, AZ', 'Grady County, OK', 'Campbell County, SD', 'Duchesne County, UT', 'Sanders County, MT', 'Blaine County, OK', 'Bingham County, ID', 'Taos County, NM', 'Grand County, UT', 'Nez Perce County, ID', 'Bon Homme County, SD', 'Matanuska-Susitna County, AK', 'McClain County, OK', 'Marshall County, OK', 'Kiowa County, OK', 'McPherson County, SD', 'Stephens County, OK', 'Fall River County, SD', 'Fairbanks North Star County, AK', 'Otero County, NM', 'Johnston County, OK', 'Garvin County, OK', 'Love County, OK', 'Anchorage County, AK', 'Haines County, AK', 'Marshall County, SD', 'Jefferson County, OK', 'Lincoln County, OK', 'Pontotoc County, OK', 'Uintah County, UT', 'McLean County, ND', 'Kenai Peninsula County, AK', 'Murray County, OK', 'Kay County, OK', 'Gregory County, SD', 'Hyde County, SD', 'Pennington County, SD', 'Noble County, OK', 'Ramsey County, ND', 'Carter County, OK', 'Benewah County, ID', 'Cotton County, OK', 'Wagoner County, OK', 'Stanley County, SD', 'Brule County, SD', 'Hughes County, SD', 'Creek County, OK', 'Dunn County, ND', 'Mayes County, OK', 'Pittsburg County, OK', 'Washington County, OK', 'Phillips County, MT', 'Le Flore County, OK', 'Okanogan County, WA', 'Coal County, OK', 'Pawnee County, OK', 'Valley County, MT', 'Day County, SD', 'Southeast Fairbanks County, AK', 'Choctaw County, OK', 'Juneau County, AK', 'Atoka County, OK', 'Moody County, SD', 'Sandoval County, NM', 'Walworth County, SD', 'Socorro County, NM', 'Okmulgee County, OK', 'Tripp County, SD', 'Pottawatomie County, OK', 'Rogers County, OK', 'La Paz County, AZ', 'Bryan County, OK', 'Pushmataha County, OK', 'Aleutians West County, AK', 'Graham County, AZ', 'Kodiak Island County, AK', 'Pondera County, MT', 'Rio Arriba County, NM', 'Latimer County, OK', 'Osage County, OK', 'Sequoyah County, OK', 'Ketchikan Gateway County, AK', 'Haskell County, OK', 'McIntosh County, OK', 'Gila County, AZ', 'Muskogee County, OK', 'Ottawa County, OK', 'Valdez-Cordova County, AK', 'Sitka County, AK', 'McCurtain County, OK', 'Okfuskee County, OK', 'Ferry County, WA', 'Wrangell-Petersburg County, AK', 'McKenzie County, ND', 'Craig County, OK', 'Hughes County, OK', 'Seminole County, OK', 'Nowata County, OK', 'Fremont County, WY', 'Chouteau County, MT', 'Delaware County, OK', 'Caddo County, OK', 'Hill County, MT', 'Lake County, MT', 'Coconino County, AZ', 'Mountrail County, ND', 'Aleutians East County, AK', 'Yakutat County, AK', 'Cherokee County, OK', 'Charles Mix County, SD', 'Bristol Bay County, AK', 'Rosebud County, MT', 'Roberts County, SD', 'San Juan County, NM', 'Adair County, OK', 'Lyman County, SD', 'Cibola County, NM', 'Prince of Wales-Outer Ketchikan County, AK', 'Navajo County, AZ', 'Jackson County, SD', 'San Juan County, UT', 'Blaine County, MT', 'North Slope County, AK', 'Bennett County, SD', 'Mellette County, SD', 'Roosevelt County, MT', 'Benson County, ND', 'Big Horn County, MT', 'Glacier County, MT', 'Corson County, SD', 'Yukon-Koyukuk County, AK', 'Lake and Peninsula County, AK', 'Nome County, AK', 'Dillingham County, AK', 'Ziebach County, SD', 'Apache County, AZ', 'McKinley County, NM', 'Dewey County, SD', 'Buffalo County, SD', 'Todd County, SD', 'Rolette County, ND', 'Sioux County, ND', 'Bethel County, AK', 'Northwest Arctic County, AK', 'Wade Hampton County, AK', 'Shannon County, SD'],
            crosshair: true,
            showLastLabel: true,
        }],
        yAxis: [{ // Primary yAxis
                maxPadding: 0,
            minPadding: 0,
            floor: 0,
            gridLineWidth: 0,
            ceiling: 100,
            labels: {
                format: '{value}%',
                style: {
                    color: '#4C5F85'
                }
            },
            title: {
                text: 'Native American composition',
                style: {
                    color: '#4C5F85'
                }
            }
        }, { // Secondary yAxis
            floor: 20,
            gridLineWidth: 0,
            ceiling: 95,
            title: {
                text: 'Turnout rate',
                style: {
                    color: '#9E2531'
                }
            },
            labels: {
                format: '{value}%',
                style: {
                    color: '#9E2531'
                }
            },
            opposite: true,
            tickPositions: [30, 45, 60, 75, 90],
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            // x: 100,
            // verticalAlign: 'top',
            // y: 210,
            // floating: true,
            // backgroundColor: '#FFFFFF'
        },
        series: [{
            name: '2014 Turnout',
            type: 'spline',
            color: 'rgba(135, 160, 175, 0.5)',
            opacity: .5,
            marker: {
                symbol: "circle",
                radius: 0
            },
            yAxis: 1,
            data: [74.02, 58.92, 64.66, 68.07, 67.35, 56.53, 68.60, 61.39, 64.08, 57.68, 54.15, 63.11, 53.18, 70.92, 58.99, 70.01, 65.33, 63.84, 58.96, 54.49, 72.54, 58.68, 42.38, 42.68, 60.13, 62.29, 62.80, 57.01, 56.16, 69.18, 58.78, 63.17, 73.41, 66.55, 61.65, 64.27, 57.73, 60.60, 63.65, 66.79, 33.72, 62.10, 54.54, 45.37, 52.20, 80.21, 68.04, 47.93, 48.16, 67.49, 76.02, 62.16, 53.04, 62.20, 54.46, 57.10, 66.35, 47.98, 58.28, 62.49, 69.64, 55.07, 55.17, 68.87, 57.41, 63.90, 74.96, 64.41, 44.80, 65.74, 65.55, 47.88, 47.10, 59.57, 48.50, 63.74, 35.39, 50.73, 56.96, 53.48, 64.83, 58.84, 57.82, 61.91, 58.15, 61.21, 45.64, 43.99, 55.01, 59.49, 46.89, 51.53, 60.53, 57.65, 54.88, 61.50, 34.22, 72.85, 54.62, 51.04, 38.86, 50.64, 53.43, 57.07, 61.91, 55.31, 64.50, 70.49, 50.32, 38.05, 28.76, 52.00, 52.91, 49.48, 59.02, 47.27, 68.91, 52.07, 55.09, 71.61, 59.68, 61.65, 55.43, 61.26, 57.36, 63.53, 54.24, 69.25, 59.14, 45.22, 35.90, 38.94, 50.20, 55.70, 45.13, 35.59, 53.40, 61.70, 62.55, 62.02, 63.04, 61.92, 63.51, 50.49, 43.35, 50.15, 39.71, 39.45, 58.65, 55.16, 57.11, 63.16, 60.45, 66.02, 51.31, 70.65, 55.23, 35.47, 66.87, 36.83, 58.17, 45.99, 52.46, 59.27, 44.40, 57.13, 52.11, 56.69, 76.12, 55.29, 57.63, 49.96, 57.50, 61.82, 68.36, 70.75, 62.01, 36.94, 46.71, 47.61, 45.83, 45.79, 66.39, 53.43, 62.59, 73.95, 53.95, 57.94, 44.05, 52.54, 55.34, 73.53, 56.03, 52.14, 62.87, 49.96, 47.53, 43.99, 62.04, 56.44, 52.53, 64.68, 69.61, 57.67, 59.48, 49.21, 63.15, 60.75, 64.47, 57.79, 45.32, 60.25, 65.26, 38.92, 49.96, 60.80, 60.94, 40.61, 63.39, 64.52, 65.41, 57.07, 52.60, 59.07, 65.13, 61.09, 57.17, 52.17, 68.70, 56.50, 38.84, 63.61, 40.81, 65.32, 59.31, 62.05, 67.49, 57.04, 44.54, 38.52, 71.68, 53.54, 54.19, 70.56, 59.37, 72.41, 58.81, 55.52, 63.93, 43.59, 60.43, 62.51, 51.10, 42.07, 43.34, 48.48, 56.44, 45.50, 56.78, 52.33, 67.09, 55.04, 61.65, 48.19, 47.24, 56.83, 58.66, 59.81, 53.82, 45.55, 49.36, 38.49, 39.73, 50.20, 60.55, 59.50, 64.48, 65.13, 42.02, 52.39, 55.12, 42.98, 51.35, 51.25, 55.19, 53.16, 41.86, 54.83, 62.25, 34.80, 54.10, 59.58, 64.61, 47.51, 54.98, 59.31, 64.09, 38.95, 46.33, 55.82, 60.89, 54.96, 55.39, 42.34, 41.69, 50.93, 34.77, 63.54, 39.80, 62.30, 67.32, 39.52, 65.10, 64.58, 38.86, 62.18, 45.87, 42.46, 55.75, 52.08, 57.11, 49.63, 53.59, 43.41, 75.02, 55.68, 63.20, 35.03, 42.38, 45.28, 51.00, 58.01, 45.35, 60.53, 39.16, 37.77, 37.65, 40.94, 37.92, 37.51, 42.77, 58.43, 35.20, 47.93, 39.44, 41.08, 59.97, 38.22, 39.52, 41.48, 67.20, 61.97, 52.79, 46.65, 47.32, 36.83, 56.40, 45.75, 42.25, 65.02, 55.42, 64.94, 41.73, 54.66, 45.55, 39.30, 43.68, 68.69, 36.19, 59.70, 44.22, 40.09, 72.39, 60.09, 40.61, 35.79, 45.19, 47.75, 59.31, 40.76, 52.26, 43.97, 40.46, 59.70, 40.34, 41.31, 39.45, 37.12, 38.70, 50.00, 42.16, 41.61, 63.29, 39.64, 36.75, 43.72, 41.16, 47.86, 35.79, 39.75, 54.84, 38.01, 33.73, 39.69, 44.13, 43.73, 46.17, 68.06, 46.91, 44.57, 45.27, 44.22, 41.50, 44.93, 67.64, 60.36, 40.82, 43.74, 53.68, 53.83, 53.36, 37.43, 34.78, 45.83, 39.11, 58.13, 36.36, 54.80, 51.21, 36.56, 35.55, 54.57, 38.58, 42.44, 49.26, 53.03, 63.86, 48.76, 40.74, 51.02, 57.10, 47.98, 33.21, 47.76, 44.69, 39.63, 41.45, 44.73, 43.93, 34.52, 41.05, 46.17, 37.87, 44.95, 50.16, 45.81, 32.63, 25.92, 43.79, 43.14, 45.54, 34.72],
            tooltip: {
                valueSuffix: '%'
            }

        },
        {
            name: '2012 Turnout',
            type: 'spline',
            color: 'rgba(135, 160, 175, 0.5)',
            marker: {
                symbol: "circle",
                radius: 0
            },
            yAxis: 1,
            data: [83.53, 78.55, 79.06, 80.41, 75.68, 48.10, 79.76, 70.81, 80.28, 68.05, 69.58, 73.87, 80.05, 81.76, 78.32, 88.41, 76.51, 76.80, 74.90, 75.93, 90.11, 73.89, 75.84, 58.48, 68.90, 69.90, 75.34, 69.81, 75.76, 72.22, 81.90, 90.58, 88.77, 87.34, 90.14, 83.63, 68.93, 68.06, 69.15, 75.97, 58.79, 74.42, 71.35, 67.45, 72.16, 84.59, 88.05, 82.22, 78.40, 88.86, 73.83, 77.20, 64.57, 64.70, 73.91, 69.06, 77.75, 77.23, 89.27, 89.94, 88.53, 79.36, 81.91, 89.45, 71.68, 77.99, 82.16, 80.29, 61.19, 70.04, 70.13, 59.17, 68.12, 74.51, 70.48, 75.59, 79.17, 77.60, 77.82, 69.70, 87.25, 76.93, 73.19, 78.98, 75.11, 76.22, 60.84, 51.30, 68.16, 73.72, 75.11, 80.22, 81.93, 73.72, 73.97, 87.75, 60.61, 86.33, 66.44, 87.78, 70.07, 79.58, 83.58, 78.45, 78.48, 72.06, 82.50, 79.59, 68.17, 61.14, 56.58, 62.86, 64.08, 68.35, 71.21, 75.87, 78.48, 87.06, 82.66, 89.39, 80.43, 91.13, 72.38, 89.83, 73.88, 71.20, 61.66, 82.52, 75.71, 61.75, 59.57, 59.82, 63.73, 68.68, 65.66, 62.31, 67.05, 71.36, 68.45, 73.45, 79.24, 90.09, 90.23, 69.57, 62.16, 66.29, 74.79, 70.17, 81.43, 77.72, 79.77, 84.67, 83.74, 84.62, 80.54, 88.80, 74.22, 56.30, 81.59, 62.54, 77.45, 64.13, 67.10, 71.58, 62.03, 71.67, 84.64, 81.87, 74.78, 73.90, 76.98, 78.89, 90.99, 73.09, 78.20, 79.57, 79.25, 58.41, 57.64, 60.33, 73.20, 80.74, 73.11, 69.88, 78.31, 81.62, 65.06, 66.68, 59.51, 70.72, 69.35, 86.88, 82.10, 75.92, 91.03, 62.22, 60.69, 62.66, 70.06, 80.47, 80.26, 77.29, 78.52, 66.89, 67.27, 66.00, 80.22, 83.01, 82.93, 76.11, 76.51, 75.66, 76.70, 52.41, 64.98, 71.81, 71.77, 61.64, 76.89, 72.05, 75.44, 66.21, 67.72, 71.85, 75.13, 81.57, 74.92, 72.32, 83.47, 69.51, 57.09, 75.05, 67.60, 78.96, 75.12, 68.90, 78.59, 72.50, 66.71, 61.95, 88.20, 61.94, 69.35, 88.35, 73.45, 81.63, 68.11, 70.45, 74.84, 81.97, 80.39, 81.22, 74.24, 61.61, 65.49, 69.78, 68.67, 63.85, 67.99, 70.97, 82.93, 77.82, 73.97, 57.45, 60.46, 69.51, 72.45, 83.46, 72.17, 69.58, 69.89, 56.32, 63.34, 70.01, 76.78, 81.41, 75.00, 80.23, 43.69, 70.51, 70.16, 64.82, 59.29, 63.90, 68.84, 64.97, 64.28, 69.42, 75.09, 39.47, 69.62, 71.49, 82.67, 73.67, 67.72, 61.99, 79.95, 63.25, 67.15, 76.39, 76.06, 73.15, 64.11, 68.98, 62.58, 65.27, 52.77, 77.35, 60.93, 80.27, 76.57, 65.68, 80.52, 77.86, 54.87, 82.14, 71.52, 62.02, 66.17, 82.93, 72.44, 68.44, 79.67, 62.11, 72.36, 73.80, 78.77, 40.51, 65.97, 65.23, 67.14, 70.90, 64.24, 69.73, 37.37, 60.08, 59.18, 61.37, 58.95, 40.41, 44.58, 68.71, 60.06, 67.05, 61.08, 70.65, 68.22, 41.32, 64.53, 62.40, 76.60, 72.07, 69.83, 70.27, 56.53, 58.22, 75.24, 64.72, 68.89, 78.10, 71.17, 75.25, 66.85, 70.58, 65.40, 57.19, 66.86, 81.45, 57.21, 80.48, 56.75, 61.97, 82.46, 69.78, 40.40, 53.07, 42.53, 63.66, 74.07, 62.87, 65.54, 60.23, 59.93, 71.51, 61.83, 66.24, 59.53, 54.39, 56.18, 38.33, 69.50, 38.49, 75.81, 59.88, 55.82, 65.59, 61.83, 40.45, 57.77, 58.75, 67.86, 57.96, 60.61, 37.70, 45.20, 62.40, 55.77, 79.22, 45.58, 67.39, 62.62, 59.37, 60.07, 64.58, 89.46, 74.79, 60.82, 62.11, 70.98, 72.16, 75.06, 56.24, 35.94, 48.20, 58.31, 67.50, 38.85, 70.02, 66.26, 64.17, 51.37, 67.13, 56.26, 39.91, 63.49, 65.63, 69.59, 71.45, 41.14, 64.92, 64.82, 60.35, 48.99, 55.89, 59.80, 50.31, 44.17, 24.62, 47.53, 43.08, 48.75, 57.18, 57.59, 62.05, 74.29, 50.28, 48.68, 42.89, 38.31, 38.68, 44.50, 41.12],
            tooltip: {
                valueSuffix: '%'
            }

        },
        {
            name: '2010 Turnout',
            type: 'spline',
            color: 'rgba(135, 160, 175, 0.5)',
            marker: {
                symbol: "circle",
                radius: 0
            },
            yAxis: 1,
            data: [74.22, 73.12, 69.85, 64.39, 70.79, 67.80, 73.32, 67.42, 63.28, 66.30, 60.18, 69.70, 60.34, 62.98, 56.52, 78.18, 82.12, 64.37, 53.85, 58.49, 77.63, 59.54, 48.13, 46.49, 68.10, 66.11, 70.28, 67.16, 65.44, 59.75, 67.67, 69.42, 79.41, 77.42, 66.18, 75.97, 61.03, 58.96, 65.44, 75.00, 47.69, 72.35, 63.88, 48.80, 54.15, 78.72, 70.83, 62.26, 62.89, 77.38, 69.00, 63.91, 66.64, 58.21, 65.98, 69.15, 71.35, 51.65, 62.37, 70.71, 74.04, 62.13, 60.86, 75.30, 55.41, 67.01, 71.76, 69.28, 52.16, 59.03, 64.80, 45.04, 55.97, 71.66, 59.56, 57.96, 48.42, 69.26, 60.37, 55.30, 68.79, 59.03, 56.73, 65.21, 61.13, 78.13, 59.95, 42.47, 59.10, 66.88, 41.50, 35.02, 72.23, 58.88, 57.69, 64.91, 49.91, 76.08, 60.39, 62.95, 46.79, 67.87, 71.65, 74.85, 57.87, 57.42, 68.61, 65.71, 67.63, 51.58, 47.90, 50.26, 58.72, 58.96, 66.17, 65.72, 74.31, 54.30, 72.35, 80.84, 71.56, 65.67, 55.29, 70.99, 59.38, 58.50, 52.35, 71.85, 63.56, 54.77, 47.73, 52.79, 56.12, 53.35, 53.49, 48.05, 60.30, 62.08, 65.84, 46.86, 69.31, 67.54, 71.28, 49.52, 54.47, 59.25, 48.22, 60.35, 73.93, 68.37, 74.06, 76.42, 76.59, 79.28, 71.65, 72.88, 58.91, 46.31, 67.53, 52.61, 68.34, 60.63, 63.60, 62.11, 43.47, 61.36, 61.72, 62.24, 67.98, 70.72, 72.84, 66.47, 63.51, 62.41, 66.05, 72.24, 70.15, 47.15, 48.09, 47.75, 48.29, 58.92, 57.48, 51.83, 66.42, 76.45, 53.97, 62.62, 43.56, 58.04, 63.89, 84.79, 73.54, 58.10, 68.13, 50.73, 49.35, 49.81, 65.27, 71.29, 72.03, 61.57, 65.51, 56.37, 61.37, 55.05, 76.85, 76.34, 79.27, 63.60, 54.22, 58.48, 79.25, 44.49, 59.33, 68.62, 67.26, 47.21, 71.94, 55.25, 61.83, 58.10, 63.95, 67.57, 83.66, 67.97, 60.46, 53.36, 65.18, 65.70, 43.86, 73.63, 51.05, 73.10, 61.65, 59.36, 59.45, 60.57, 56.67, 51.47, 78.35, 57.33, 58.66, 81.57, 60.72, 69.40, 61.02, 60.10, 63.89, 50.28, 71.02, 66.70, 57.38, 51.33, 57.81, 59.49, 66.42, 59.50, 59.45, 64.88, 77.86, 65.54, 61.49, 45.89, 45.94, 63.28, 64.28, 74.62, 55.96, 59.70, 48.41, 38.46, 49.78, 62.36, 65.96, 76.02, 71.92, 71.73, 40.15, 70.14, 60.09, 56.57, 51.27, 56.29, 60.34, 49.82, 52.83, 65.10, 74.59, 38.69, 63.52, 70.22, 76.78, 63.44, 52.76, 56.39, 64.74, 51.57, 58.47, 72.78, 63.44, 55.92, 62.42, 56.09, 51.47, 54.19, 40.78, 69.80, 48.89, 74.60, 61.76, 50.11, 72.70, 64.79, 41.45, 74.72, 48.48, 51.80, 64.01, 46.25, 68.51, 57.60, 57.88, 52.22, 53.99, 58.97, 70.53, 40.40, 54.18, 51.88, 51.39, 67.12, 57.31, 61.53, 36.37, 53.57, 48.56, 57.63, 47.05, 39.05, 42.40, 66.09, 50.53, 57.26, 46.71, 44.77, 59.81, 38.11, 50.87, 52.55, 71.02, 69.18, 59.38, 61.00, 48.92, 45.10, 60.14, 49.86, 53.25, 69.54, 61.87, 72.25, 54.28, 60.73, 54.21, 46.98, 54.66, 69.21, 49.97, 73.34, 54.12, 53.89, 70.42, 65.26, 39.11, 45.00, 41.19, 52.07, 64.36, 55.15, 60.32, 56.36, 46.94, 65.85, 49.39, 55.35, 52.99, 47.20, 49.57, 34.45, 52.77, 33.47, 56.91, 48.62, 46.93, 55.06, 47.89, 36.11, 47.48, 50.50, 60.20, 43.78, 42.90, 39.04, 41.58, 53.44, 49.44, 77.10, 43.03, 50.44, 51.12, 48.80, 52.05, 53.57, 72.73, 63.37, 50.51, 52.88, 55.72, 57.20, 57.38, 44.49, 36.65, 47.30, 46.06, 63.91, 41.37, 52.80, 59.63, 55.17, 46.68, 59.06, 47.85, 38.23, 52.03, 55.75, 59.46, 47.29, 37.76, 57.24, 61.87, 51.24, 39.31, 50.91, 34.14, 37.12, 44.41, 23.97, 47.41, 42.92, 45.33, 47.89, 47.40, 45.84, 43.43, 40.27, 44.80, 30.16, 41.73, 36.58, 47.40, 34.90],
            tooltip: {
                valueSuffix: '%'
            }

        },
        {
            name: '2008 Turnout',
            type: 'spline',
            color: 'rgba(135, 160, 175, 0.5)',
            marker: {
                symbol: "circle",
                radius: 0
            },
            yAxis: 1,
            data: [83.00, 88.00, 85.00, 82.00, 78.00, 72.18, 81.61, 68.16, 79.40, 73.96, 70.66, 73.60, 80.16, 82.91, 62.65, 91.11, 87.05, 81.07, 76.54, 76.29, 90.24, 76.04, 72.19, 63.62, 70.53, 71.26, 75.31, 71.34, 79.73, 77.65, 80.66, 89.96, 90.74, 89.17, 89.04, 82.00, 73.00, 69.11, 69.90, 73.80, 63.27, 75.39, 76.32, 62.54, 57.66, 89.26, 92.44, 77.67, 78.04, 91.06, 77.28, 80.00, 68.32, 64.13, 78.42, 68.07, 79.31, 77.72, 90.66, 89.96, 89.78, 76.79, 82.58, 89.91, 69.87, 78.47, 77.00, 76.00, 65.45, 68.89, 70.45, 55.78, 67.54, 76.94, 74.37, 74.33, 64.97, 85.00, 76.83, 69.04, 88.63, 75.65, 77.95, 77.35, 75.00, 76.00, 68.36, 59.98, 69.44, 75.23, 60.96, 50.37, 86.78, 80.42, 77.42, 89.34, 65.15, 80.09, 76.79, 73.51, 55.36, 85.31, 83.93, 84.60, 79.64, 79.39, 81.00, 73.00, 78.00, 64.44, 64.80, 63.96, 61.54, 69.09, 72.29, 60.16, 64.43, 70.99, 84.79, 91.49, 79.30, 91.18, 77.56, 90.66, 77.62, 75.03, 69.84, 81.00, 78.00, 69.73, 64.13, 67.84, 67.37, 63.64, 61.91, 65.40, 72.78, 70.48, 72.78, 60.56, 79.56, 92.23, 91.47, 73.00, 62.17, 70.02, 70.63, 70.57, 83.81, 82.76, 81.27, 89.44, 87.67, 87.81, 87.00, 88.28, 82.44, 65.74, 81.00, 72.27, 84.26, 69.17, 71.73, 71.90, 66.89, 71.56, 76.26, 74.70, 72.05, 82.76, 84.70, 81.20, 90.14, 76.00, 76.00, 77.00, 79.00, 64.63, 61.04, 64.92, 66.45, 69.61, 76.85, 72.24, 79.00, 84.00, 65.67, 72.28, 64.24, 73.08, 68.20, 88.47, 87.00, 79.56, 92.35, 65.66, 58.93, 62.63, 73.97, 85.78, 85.96, 81.21, 77.00, 70.32, 68.44, 68.89, 85.39, 86.95, 85.73, 81.14, 79.76, 70.00, 86.00, 60.77, 69.07, 73.53, 73.00, 65.52, 79.00, 81.00, 70.05, 66.22, 71.11, 70.38, 72.16, 84.85, 79.00, 75.00, 79.00, 69.77, 61.32, 76.91, 69.36, 78.99, 78.65, 74.64, 81.00, 72.00, 70.96, 67.17, 82.15, 62.27, 70.02, 91.27, 75.19, 83.00, 70.06, 74.45, 76.28, 71.80, 83.71, 84.00, 74.00, 65.29, 70.70, 74.95, 72.75, 72.21, 72.50, 73.17, 78.90, 80.03, 84.00, 56.64, 60.61, 72.35, 74.47, 87.93, 73.74, 68.43, 74.00, 59.80, 67.16, 76.24, 78.78, 87.42, 76.86, 84.90, 42.08, 76.40, 79.30, 71.48, 62.86, 69.16, 71.97, 69.00, 68.85, 71.93, 76.59, 42.49, 73.56, 78.28, 85.29, 79.90, 70.23, 62.68, 78.08, 72.90, 72.63, 80.95, 80.24, 72.00, 68.23, 73.30, 69.12, 66.00, 63.38, 77.62, 64.47, 84.67, 77.00, 70.38, 77.28, 77.00, 60.69, 85.57, 72.82, 65.97, 69.90, 58.96, 83.00, 69.32, 75.16, 69.55, 68.87, 75.55, 78.74, 45.37, 67.95, 63.49, 65.21, 74.21, 69.73, 70.93, 38.05, 66.90, 59.96, 65.22, 64.86, 42.31, 47.07, 71.45, 63.02, 68.28, 62.63, 55.82, 72.22, 40.65, 63.59, 64.82, 75.47, 74.20, 74.50, 71.71, 56.13, 61.74, 79.34, 64.14, 72.13, 75.11, 70.12, 76.77, 70.76, 67.40, 69.74, 61.33, 68.87, 79.00, 61.07, 83.33, 56.76, 66.00, 79.00, 73.90, 46.76, 57.66, 38.89, 64.86, 74.51, 74.22, 70.27, 63.38, 63.30, 72.91, 64.37, 72.65, 69.20, 57.74, 59.80, 43.20, 70.42, 40.23, 76.00, 66.37, 58.75, 69.79, 61.05, 41.44, 59.35, 62.74, 72.97, 61.97, 60.66, 42.67, 43.76, 62.45, 61.91, 83.94, 47.24, 66.90, 65.33, 60.64, 63.84, 68.29, 90.81, 75.00, 63.10, 65.45, 72.00, 77.00, 78.54, 63.26, 39.05, 54.41, 60.33, 69.93, 44.07, 71.00, 68.02, 80.36, 52.29, 65.73, 59.11, 43.74, 62.13, 66.47, 74.66, 72.00, 44.73, 57.06, 64.68, 64.00, 52.96, 68.00, 60.00, 57.54, 43.89, 27.95, 51.46, 49.27, 57.92, 60.13, 61.56, 54.54, 55.65, 51.50, 51.23, 52.92, 47.17, 48.31, 52.30, 42.59],
            tooltip: {
                valueSuffix: '%'
            }

        },
        {
            name: '8-year average turnout',
            type: 'spline',
            color: '#9E2531',
            marker: {
                symbol: "circle",
                radius: 0
            },
            yAxis: 1,
            data: [78.69, 74.65, 74.64, 73.72, 72.95, 61.15, 75.82, 66.95, 71.76, 66.50, 63.64, 70.07, 68.43, 74.64, 64.12, 81.93, 77.75, 71.52, 66.06, 66.30, 82.63, 67.04, 59.64, 52.82, 66.92, 67.39, 70.93, 66.33, 69.27, 69.70, 72.25, 78.28, 83.08, 80.12, 76.75, 76.47, 65.17, 64.18, 67.04, 72.89, 50.87, 71.06, 66.52, 56.04, 59.04, 83.20, 79.84, 67.52, 66.87, 81.20, 74.03, 70.82, 63.14, 62.31, 68.19, 65.84, 73.69, 63.64, 75.14, 78.28, 80.50, 68.34, 70.13, 80.88, 63.59, 71.84, 76.47, 72.49, 55.90, 65.93, 67.73, 51.97, 59.68, 70.67, 63.23, 67.91, 56.99, 70.65, 67.99, 61.88, 77.38, 67.61, 66.42, 70.86, 67.35, 72.89, 58.70, 49.44, 62.93, 68.83, 56.12, 54.28, 75.37, 67.67, 65.99, 75.87, 52.47, 78.84, 64.56, 68.82, 52.77, 70.85, 73.15, 73.74, 69.48, 66.05, 74.15, 72.20, 66.03, 53.80, 49.51, 57.27, 59.31, 61.47, 67.17, 62.26, 71.53, 66.11, 73.72, 83.33, 72.74, 77.41, 65.17, 78.18, 67.06, 67.07, 59.52, 76.16, 69.10, 57.87, 51.83, 54.85, 59.36, 60.34, 56.55, 52.83, 63.38, 66.40, 67.41, 60.72, 72.79, 77.95, 79.12, 60.65, 55.54, 61.43, 58.34, 60.13, 74.46, 71.00, 73.05, 78.42, 77.11, 79.43, 72.63, 80.15, 67.70, 50.96, 74.25, 56.06, 72.06, 59.98, 63.72, 66.22, 54.20, 65.43, 68.68, 68.88, 72.73, 70.67, 73.04, 69.13, 75.54, 68.33, 72.15, 74.89, 72.60, 51.78, 53.37, 55.15, 58.44, 63.76, 68.46, 61.85, 71.58, 79.01, 59.66, 64.88, 52.84, 63.60, 64.20, 83.42, 74.67, 66.43, 78.60, 57.14, 54.13, 54.78, 67.83, 73.50, 72.70, 71.19, 72.66, 62.81, 64.14, 59.79, 76.40, 76.76, 78.10, 69.66, 63.95, 66.10, 76.80, 49.15, 60.83, 68.69, 68.24, 53.75, 72.81, 68.20, 68.18, 61.90, 63.84, 67.22, 74.02, 73.87, 67.89, 63.21, 74.09, 65.37, 50.28, 72.30, 57.20, 74.09, 68.68, 66.24, 71.63, 65.53, 59.72, 54.78, 80.09, 58.77, 63.06, 82.94, 67.18, 76.61, 64.50, 65.13, 69.73, 61.91, 73.89, 73.61, 64.18, 55.08, 59.33, 63.18, 66.07, 60.27, 64.18, 65.34, 76.70, 69.61, 70.28, 52.04, 53.56, 65.49, 67.47, 76.46, 63.92, 60.82, 60.42, 48.27, 55.00, 64.70, 70.52, 76.09, 72.07, 75.50, 41.99, 67.36, 66.17, 58.96, 56.19, 60.15, 64.09, 59.24, 56.96, 65.32, 72.13, 38.86, 65.20, 69.89, 77.34, 66.13, 61.42, 60.09, 71.72, 56.67, 61.14, 71.49, 70.16, 64.01, 62.54, 60.18, 56.21, 59.10, 47.93, 72.08, 53.52, 75.46, 70.66, 56.42, 73.90, 71.06, 48.97, 76.15, 59.67, 55.56, 63.96, 60.06, 70.27, 61.25, 66.57, 56.82, 67.56, 66.00, 72.81, 40.33, 57.62, 56.47, 58.68, 67.56, 59.16, 65.68, 37.74, 54.58, 51.34, 56.29, 52.20, 39.82, 44.21, 66.17, 52.20, 60.13, 52.46, 53.08, 65.06, 39.58, 54.63, 55.31, 72.57, 69.35, 64.13, 62.41, 52.23, 50.47, 67.78, 56.12, 59.13, 71.94, 64.64, 72.30, 58.40, 63.34, 58.72, 51.20, 58.52, 74.59, 51.11, 74.21, 52.96, 55.49, 76.07, 67.26, 41.72, 47.88, 41.95, 57.09, 68.06, 58.25, 62.10, 55.99, 52.66, 67.49, 53.98, 58.89, 55.29, 49.11, 51.06, 41.50, 58.71, 38.45, 68.00, 53.63, 49.56, 58.54, 52.98, 41.47, 50.10, 52.93, 63.97, 50.43, 49.47, 39.78, 43.67, 55.50, 53.32, 77.08, 45.69, 57.33, 56.08, 53.26, 54.36, 57.84, 80.16, 68.38, 53.81, 56.04, 63.09, 65.05, 66.09, 50.36, 36.61, 48.94, 50.95, 64.87, 40.16, 62.16, 61.28, 59.07, 46.47, 61.62, 50.45, 41.08, 56.73, 60.22, 66.89, 59.88, 41.09, 57.56, 62.12, 55.89, 43.62, 55.64, 49.66, 46.15, 43.48, 30.32, 47.58, 42.45, 48.26, 52.84, 51.11, 51.84, 55.88, 46.96, 44.34, 37.97, 42.75, 41.68, 47.44, 38.33],
            tooltip: {
                valueSuffix: '%'
            }

        },
        {
            name: 'Native American composition',
            type: 'spline',
            color: '#4C5F85',
            marker: {
                symbol: "circle",
                radius: 0
            },
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 17, 17, 17, 17, 18, 19, 19, 20, 21, 22, 23, 23, 26, 26, 27, 30, 30, 31, 32, 33, 35, 36, 38, 38, 39, 40, 43, 45, 48, 49, 52, 53, 54, 55, 55, 63, 63, 67, 70, 71, 71, 71, 72, 72, 73, 73, 76, 76, 77, 81, 81, 81, 89, 94],
            tooltip: {
                valueSuffix: '%'
            }
        }]
    });
// });