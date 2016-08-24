$(function () {
  var data = [
    {
     "name": "ANDERSON",
     "hc-key": "us-tx-001",
     "registered-voters": "26,900",
     "allegation-count": 2,
     "value": "7.43"
    },
    {
     "name": "ANDREWS",
     "hc-key": "us-tx-003",
     "registered-voters": "8,585",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ANGELINA",
     "hc-key": "us-tx-005",
     "registered-voters": "49,835",
     "allegation-count": 1,
     "value": "2.01"
    },
    {
     "name": "ARANSAS",
     "hc-key": "us-tx-007",
     "registered-voters": "16,000",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ARCHER",
     "hc-key": "us-tx-009",
     "registered-voters": "6,179",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ARMSTRONG",
     "hc-key": "us-tx-011",
     "registered-voters": "1,383",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ATASCOSA",
     "hc-key": "us-tx-013",
     "registered-voters": "25,012",
     "allegation-count": 1,
     "value": "4.00"
    },
    {
     "name": "AUSTIN",
     "hc-key": "us-tx-015",
     "registered-voters": "18,731",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BAILEY",
     "hc-key": "us-tx-017",
     "registered-voters": "3,649",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BANDERA",
     "hc-key": "us-tx-019",
     "registered-voters": "14,782",
     "allegation-count": 1,
     "value": "6.76"
    },
    {
     "name": "BASTROP",
     "hc-key": "us-tx-021",
     "registered-voters": "42,095",
     "allegation-count": 1,
     "value": "2.38"
    },
    {
     "name": "BAYLOR",
     "hc-key": "us-tx-023",
     "registered-voters": "2,408",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BEE",
     "hc-key": "us-tx-025",
     "registered-voters": "15,065",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BELL",
     "hc-key": "us-tx-027",
     "registered-voters": "172,183",
     "allegation-count": 4,
     "value": "2.32"
    },
    {
     "name": "BEXAR",
     "hc-key": "us-tx-029",
     "registered-voters": "977,150",
     "allegation-count": 39,
     "value": "3.99"
    },
    {
     "name": "BLANCO",
     "hc-key": "us-tx-031",
     "registered-voters": "7,573",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BORDEN",
     "hc-key": "us-tx-033",
     "registered-voters": "441",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BOSQUE",
     "hc-key": "us-tx-035",
     "registered-voters": "11,502",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BOWIE",
     "hc-key": "us-tx-037",
     "registered-voters": "56,778",
     "allegation-count": 1,
     "value": "1.76"
    },
    {
     "name": "BRAZORIA",
     "hc-key": "us-tx-039",
     "registered-voters": "187,464",
     "allegation-count": 4,
     "value": "2.13"
    },
    {
     "name": "BRAZOS",
     "hc-key": "us-tx-041",
     "registered-voters": "95,397",
     "allegation-count": 5,
     "value": "5.24"
    },
    {
     "name": "BREWSTER",
     "hc-key": "us-tx-043",
     "registered-voters": "6,943",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BRISCOE",
     "hc-key": "us-tx-045",
     "registered-voters": "1,077",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BROOKS",
     "hc-key": "us-tx-047",
     "registered-voters": "6,433",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BROWN",
     "hc-key": "us-tx-049",
     "registered-voters": "22,566",
     "allegation-count": 1,
     "value": "4.43"
    },
    {
     "name": "BURLESON",
     "hc-key": "us-tx-051",
     "registered-voters": "11,156",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "BURNET",
     "hc-key": "us-tx-053",
     "registered-voters": "27,847",
     "allegation-count": 2,
     "value": "7.18"
    },
    {
     "name": "CALDWELL",
     "hc-key": "us-tx-055",
     "registered-voters": "21,270",
     "allegation-count": 1,
     "value": "4.70"
    },
    {
     "name": "CALHOUN",
     "hc-key": "us-tx-057",
     "registered-voters": "12,611",
     "allegation-count": 2,
     "value": "15.86"
    },
    {
     "name": "CALLAHAN",
     "hc-key": "us-tx-059",
     "registered-voters": "8,837",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CAMERON",
     "hc-key": "us-tx-061",
     "registered-voters": "186,214",
     "allegation-count": 16,
     "value": "8.59"
    },
    {
     "name": "CAMP",
     "hc-key": "us-tx-063",
     "registered-voters": "7,233",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CARSON",
     "hc-key": "us-tx-065",
     "registered-voters": "4,240",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CASS",
     "hc-key": "us-tx-067",
     "registered-voters": "19,243",
     "allegation-count": 1,
     "value": "5.20"
    },
    {
     "name": "CASTRO",
     "hc-key": "us-tx-069",
     "registered-voters": "3,880",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CHAMBERS",
     "hc-key": "us-tx-071",
     "registered-voters": "25,615",
     "allegation-count": 2,
     "value": "7.81"
    },
    {
     "name": "CHEROKEE",
     "hc-key": "us-tx-073",
     "registered-voters": "26,630",
     "allegation-count": 2,
     "value": "7.51"
    },
    {
     "name": "CHILDRESS",
     "hc-key": "us-tx-075",
     "registered-voters": "3,555",
     "allegation-count": 1,
     "value": "28.13"
    },
    {
     "name": "CLAY",
     "hc-key": "us-tx-077",
     "registered-voters": "7,454",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "COCHRAN",
     "hc-key": "us-tx-079",
     "registered-voters": "1,741",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "COKE",
     "hc-key": "us-tx-081",
     "registered-voters": "2,101",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "COLEMAN",
     "hc-key": "us-tx-083",
     "registered-voters": "5,843",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "COLLIN",
     "hc-key": "us-tx-085",
     "registered-voters": "500,059",
     "allegation-count": 3,
     "value": "0.60"
    },
    {
     "name": "COLLINGSWORTH",
     "hc-key": "us-tx-087",
     "registered-voters": "1,841",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "COLORADO",
     "hc-key": "us-tx-089",
     "registered-voters": "13,389",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "COMAL",
     "hc-key": "us-tx-091",
     "registered-voters": "85,926",
     "allegation-count": 1,
     "value": "1.16"
    },
    {
     "name": "COMANCHE",
     "hc-key": "us-tx-093",
     "registered-voters": "8,618",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CONCHO",
     "hc-key": "us-tx-095",
     "registered-voters": "1,624",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "COOKE",
     "hc-key": "us-tx-097",
     "registered-voters": "24,005",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CORYELL",
     "hc-key": "us-tx-099",
     "registered-voters": "34,950",
     "allegation-count": 1,
     "value": "2.86"
    },
    {
     "name": "COTTLE",
     "hc-key": "us-tx-101",
     "registered-voters": "1,070",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CRANE",
     "hc-key": "us-tx-103",
     "registered-voters": "2,558",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CROCKETT",
     "hc-key": "us-tx-105",
     "registered-voters": "2,524",
     "allegation-count": 1,
     "value": "39.62"
    },
    {
     "name": "CROSBY",
     "hc-key": "us-tx-107",
     "registered-voters": "3,488",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "CULBERSON",
     "hc-key": "us-tx-109",
     "registered-voters": "1,705",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "DALLAM",
     "hc-key": "us-tx-111",
     "registered-voters": "3,044",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "DALLAS",
     "hc-key": "us-tx-113",
     "registered-voters": "1,217,771",
     "allegation-count": 36,
     "value": "2.96"
    },
    {
     "name": "DAWSON",
     "hc-key": "us-tx-115",
     "registered-voters": "7,114",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "DEAF SMITH",
     "hc-key": "us-tx-117",
     "registered-voters": "8,380",
     "allegation-count": 1,
     "value": "11.93"
    },
    {
     "name": "DELTA",
     "hc-key": "us-tx-119",
     "registered-voters": "3,677",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "DENTON",
     "hc-key": "us-tx-121",
     "registered-voters": "429,934",
     "allegation-count": 4,
     "value": "0.93"
    },
    {
     "name": "DEWITT",
     "hc-key": "us-tx-123",
     "registered-voters": "11,593",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "DICKENS",
     "hc-key": "us-tx-125",
     "registered-voters": "1,302",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "DIMMIT",
     "hc-key": "us-tx-127",
     "registered-voters": "7,363",
     "allegation-count": 1,
     "value": "13.58"
    },
    {
     "name": "DONLEY",
     "hc-key": "us-tx-129",
     "registered-voters": "2,312",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "DUVAL",
     "hc-key": "us-tx-131",
     "registered-voters": "8,252",
     "allegation-count": 6,
     "value": "72.71"
    },
    {
     "name": "EASTLAND",
     "hc-key": "us-tx-133",
     "registered-voters": "11,135",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ECTOR",
     "hc-key": "us-tx-135",
     "registered-voters": "69,265",
     "allegation-count": 1,
     "value": "1.44"
    },
    {
     "name": "EDWARDS",
     "hc-key": "us-tx-137",
     "registered-voters": "1,445",
     "allegation-count": 2,
     "value": "138.41"
    },
    {
     "name": "EL PASO",
     "hc-key": "us-tx-141",
     "registered-voters": "401,489",
     "allegation-count": 14,
     "value": "3.49"
    },
    {
     "name": "ELLIS",
     "hc-key": "us-tx-139",
     "registered-voters": "96,027",
     "allegation-count": 1,
     "value": "1.04"
    },
    {
     "name": "ERATH",
     "hc-key": "us-tx-143",
     "registered-voters": "20,520",
     "allegation-count": 1,
     "value": "4.87"
    },
    {
     "name": "FALLS",
     "hc-key": "us-tx-145",
     "registered-voters": "9,918",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "FANNIN",
     "hc-key": "us-tx-147",
     "registered-voters": "19,576",
     "allegation-count": 2,
     "value": "10.22"
    },
    {
     "name": "FAYETTE",
     "hc-key": "us-tx-149",
     "registered-voters": "15,921",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "FISHER",
     "hc-key": "us-tx-151",
     "registered-voters": "2,767",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "FLOYD",
     "hc-key": "us-tx-153",
     "registered-voters": "4,021",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "FOARD",
     "hc-key": "us-tx-155",
     "registered-voters": "938",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "FORT BEND",
     "hc-key": "us-tx-157",
     "registered-voters": "380,982",
     "allegation-count": 3,
     "value": "0.79"
    },
    {
     "name": "FRANKLIN",
     "hc-key": "us-tx-159",
     "registered-voters": "6,584",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "FREESTONE",
     "hc-key": "us-tx-161",
     "registered-voters": "11,585",
     "allegation-count": 1,
     "value": "8.63"
    },
    {
     "name": "FRIO",
     "hc-key": "us-tx-163",
     "registered-voters": "9,958",
     "allegation-count": 2,
     "value": "20.08"
    },
    {
     "name": "GAINES",
     "hc-key": "us-tx-165",
     "registered-voters": "8,335",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "GALVESTON",
     "hc-key": "us-tx-167",
     "registered-voters": "197,168",
     "allegation-count": 3,
     "value": "1.52"
    },
    {
     "name": "GARZA",
     "hc-key": "us-tx-169",
     "registered-voters": "2,656",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "GILLESPIE",
     "hc-key": "us-tx-171",
     "registered-voters": "18,252",
     "allegation-count": 2,
     "value": "10.96"
    },
    {
     "name": "GLASSCOCK",
     "hc-key": "us-tx-173",
     "registered-voters": "763",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "GOLIAD",
     "hc-key": "us-tx-175",
     "registered-voters": "5,411",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "GONZALES",
     "hc-key": "us-tx-177",
     "registered-voters": "11,912",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "GRAY",
     "hc-key": "us-tx-179",
     "registered-voters": "12,396",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "GRAYSON",
     "hc-key": "us-tx-181",
     "registered-voters": "74,599",
     "allegation-count": 3,
     "value": "4.02"
    },
    {
     "name": "GREGG",
     "hc-key": "us-tx-183",
     "registered-voters": "66,731",
     "allegation-count": 2,
     "value": "3.00"
    },
    {
     "name": "GRIMES",
     "hc-key": "us-tx-185",
     "registered-voters": "15,096",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "GUADALUPE",
     "hc-key": "us-tx-187",
     "registered-voters": "86,930",
     "allegation-count": 3,
     "value": "3.45"
    },
    {
     "name": "HALE",
     "hc-key": "us-tx-189",
     "registered-voters": "18,923",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HALL",
     "hc-key": "us-tx-191",
     "registered-voters": "1,945",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HAMILTON",
     "hc-key": "us-tx-193",
     "registered-voters": "5,306",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HANSFORD",
     "hc-key": "us-tx-195",
     "registered-voters": "2,990",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HARDEMAN",
     "hc-key": "us-tx-197",
     "registered-voters": "2,471",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HARDIN",
     "hc-key": "us-tx-199",
     "registered-voters": "36,875",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HARRIS",
     "hc-key": "us-tx-201",
     "registered-voters": "2,102,820",
     "allegation-count": 28,
     "value": "1.33"
    },
    {
     "name": "HARRISON",
     "hc-key": "us-tx-203",
     "registered-voters": "43,083",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HARTLEY",
     "hc-key": "us-tx-205",
     "registered-voters": "2,834",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HASKELL",
     "hc-key": "us-tx-207",
     "registered-voters": "3,326",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HAYS",
     "hc-key": "us-tx-209",
     "registered-voters": "109,236",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HEMPHILL",
     "hc-key": "us-tx-211",
     "registered-voters": "2,263",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HENDERSON",
     "hc-key": "us-tx-213",
     "registered-voters": "48,520",
     "allegation-count": 1,
     "value": "2.06"
    },
    {
     "name": "HIDALGO",
     "hc-key": "us-tx-215",
     "registered-voters": "318,297",
     "allegation-count": 21,
     "value": "6.60"
    },
    {
     "name": "HILL",
     "hc-key": "us-tx-217",
     "registered-voters": "22,300",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HOCKLEY",
     "hc-key": "us-tx-219",
     "registered-voters": "13,414",
     "allegation-count": 1,
     "value": "7.45"
    },
    {
     "name": "HOOD",
     "hc-key": "us-tx-221",
     "registered-voters": "36,211",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HOPKINS",
     "hc-key": "us-tx-223",
     "registered-voters": "21,506",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HOUSTON",
     "hc-key": "us-tx-225",
     "registered-voters": "12,665",
     "allegation-count": 1,
     "value": "7.90"
    },
    {
     "name": "HOWARD",
     "hc-key": "us-tx-227",
     "registered-voters": "16,456",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HUDSPETH",
     "hc-key": "us-tx-229",
     "registered-voters": "1,732",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "HUNT",
     "hc-key": "us-tx-231",
     "registered-voters": "49,321",
     "allegation-count": 2,
     "value": "4.06"
    },
    {
     "name": "HUTCHINSON",
     "hc-key": "us-tx-233",
     "registered-voters": "13,229",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "IRION",
     "hc-key": "us-tx-235",
     "registered-voters": "1,310",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "JACK",
     "hc-key": "us-tx-237",
     "registered-voters": "4,835",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "JACKSON",
     "hc-key": "us-tx-239",
     "registered-voters": "8,700",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "JASPER",
     "hc-key": "us-tx-241",
     "registered-voters": "23,089",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "JEFF DAVIS",
     "hc-key": "us-tx-243",
     "registered-voters": "1,598",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "JEFFERSON",
     "hc-key": "us-tx-245",
     "registered-voters": "144,867",
     "allegation-count": 3,
     "value": "2.07"
    },
    {
     "name": "JIM HOGG",
     "hc-key": "us-tx-247",
     "registered-voters": "3,845",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "JIM WELLS",
     "hc-key": "us-tx-249",
     "registered-voters": "25,680",
     "allegation-count": 3,
     "value": "11.68"
    },
    {
     "name": "JOHNSON",
     "hc-key": "us-tx-251",
     "registered-voters": "86,026",
     "allegation-count": 1,
     "value": "1.16"
    },
    {
     "name": "JONES",
     "hc-key": "us-tx-253",
     "registered-voters": "9,806",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KARNES",
     "hc-key": "us-tx-255",
     "registered-voters": "7,718",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KAUFMAN",
     "hc-key": "us-tx-257",
     "registered-voters": "62,991",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KENDALL",
     "hc-key": "us-tx-259",
     "registered-voters": "27,472",
     "allegation-count": 2,
     "value": "7.28"
    },
    {
     "name": "KENEDY",
     "hc-key": "us-tx-261",
     "registered-voters": "315",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KENT",
     "hc-key": "us-tx-263",
     "registered-voters": "602",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KERR",
     "hc-key": "us-tx-265",
     "registered-voters": "33,039",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KIMBLE",
     "hc-key": "us-tx-267",
     "registered-voters": "2,833",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KING",
     "hc-key": "us-tx-269",
     "registered-voters": "187",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KINNEY",
     "hc-key": "us-tx-271",
     "registered-voters": "2,204",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "KLEBERG",
     "hc-key": "us-tx-273",
     "registered-voters": "17,108",
     "allegation-count": 3,
     "value": "17.54"
    },
    {
     "name": "KNOX",
     "hc-key": "us-tx-275",
     "registered-voters": "2,392",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LA SALLE",
     "hc-key": "us-tx-283",
     "registered-voters": "4,125",
     "allegation-count": 3,
     "value": "72.73"
    },
    {
     "name": "LAMAR",
     "hc-key": "us-tx-277",
     "registered-voters": "29,811",
     "allegation-count": 2,
     "value": "6.71"
    },
    {
     "name": "LAMB",
     "hc-key": "us-tx-279",
     "registered-voters": "8,032",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LAMPASAS",
     "hc-key": "us-tx-281",
     "registered-voters": "13,102",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LAVACA",
     "hc-key": "us-tx-285",
     "registered-voters": "12,948",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LEE",
     "hc-key": "us-tx-287",
     "registered-voters": "9,870",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LEON",
     "hc-key": "us-tx-289",
     "registered-voters": "10,821",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LIBERTY",
     "hc-key": "us-tx-291",
     "registered-voters": "41,396",
     "allegation-count": 1,
     "value": "2.42"
    },
    {
     "name": "LIMESTONE",
     "hc-key": "us-tx-293",
     "registered-voters": "13,174",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LIPSCOMB",
     "hc-key": "us-tx-295",
     "registered-voters": "2,010",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LIVE OAK",
     "hc-key": "us-tx-297",
     "registered-voters": "6,995",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LLANO",
     "hc-key": "us-tx-299",
     "registered-voters": "14,449",
     "allegation-count": 2,
     "value": "13.84"
    },
    {
     "name": "LOVING",
     "hc-key": "us-tx-301",
     "registered-voters": "110",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "LUBBOCK",
     "hc-key": "us-tx-303",
     "registered-voters": "155,189",
     "allegation-count": 2,
     "value": "1.29"
    },
    {
     "name": "LYNN",
     "hc-key": "us-tx-305",
     "registered-voters": "3,769",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MADISON",
     "hc-key": "us-tx-313",
     "registered-voters": "6,880",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MARION",
     "hc-key": "us-tx-315",
     "registered-voters": "6,936",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MARTIN",
     "hc-key": "us-tx-317",
     "registered-voters": "3,001",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MASON",
     "hc-key": "us-tx-319",
     "registered-voters": "2,884",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MATAGORDA",
     "hc-key": "us-tx-321",
     "registered-voters": "20,921",
     "allegation-count": 1,
     "value": "4.78"
    },
    {
     "name": "MAVERICK",
     "hc-key": "us-tx-323",
     "registered-voters": "29,478",
     "allegation-count": 1,
     "value": "3.39"
    },
    {
     "name": "MCCULLOCH",
     "hc-key": "us-tx-307",
     "registered-voters": "5,133",
     "allegation-count": 1,
     "value": "19.48"
    },
    {
     "name": "MCLENNAN",
     "hc-key": "us-tx-309",
     "registered-voters": "127,563",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MCMULLEN",
     "hc-key": "us-tx-311",
     "registered-voters": "667",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MEDINA",
     "hc-key": "us-tx-325",
     "registered-voters": "28,768",
     "allegation-count": 1,
     "value": "3.48"
    },
    {
     "name": "MENARD",
     "hc-key": "us-tx-327",
     "registered-voters": "1,477",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MIDLAND",
     "hc-key": "us-tx-329",
     "registered-voters": "75,245",
     "allegation-count": 1,
     "value": "1.33"
    },
    {
     "name": "MILAM",
     "hc-key": "us-tx-331",
     "registered-voters": "14,279",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MILLS",
     "hc-key": "us-tx-333",
     "registered-voters": "3,372",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MITCHELL",
     "hc-key": "us-tx-335",
     "registered-voters": "4,429",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MONTAGUE",
     "hc-key": "us-tx-337",
     "registered-voters": "12,935",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "MONTGOMERY",
     "hc-key": "us-tx-339",
     "registered-voters": "293,067",
     "allegation-count": 2,
     "value": "0.68"
    },
    {
     "name": "MOORE",
     "hc-key": "us-tx-341",
     "registered-voters": "9,314",
     "allegation-count": 1,
     "value": "10.74"
    },
    {
     "name": "MORRIS",
     "hc-key": "us-tx-343",
     "registered-voters": "8,444",
     "allegation-count": 3,
     "value": "35.53"
    },
    {
     "name": "MOTLEY",
     "hc-key": "us-tx-345",
     "registered-voters": "830",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "NACOGDOCHES",
     "hc-key": "us-tx-347",
     "registered-voters": "31,552",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "NAVARRO",
     "hc-key": "us-tx-349",
     "registered-voters": "26,730",
     "allegation-count": 1,
     "value": "3.74"
    },
    {
     "name": "NEWTON",
     "hc-key": "us-tx-351",
     "registered-voters": "9,254",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "NOLAN",
     "hc-key": "us-tx-353",
     "registered-voters": "8,452",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "NUECES",
     "hc-key": "us-tx-355",
     "registered-voters": "188,421",
     "allegation-count": 7,
     "value": "3.72"
    },
    {
     "name": "OCHILTREE",
     "hc-key": "us-tx-357",
     "registered-voters": "5,188",
     "allegation-count": 2,
     "value": "38.55"
    },
    {
     "name": "OLDHAM",
     "hc-key": "us-tx-359",
     "registered-voters": "1,356",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ORANGE",
     "hc-key": "us-tx-361",
     "registered-voters": "50,999",
     "allegation-count": 1,
     "value": "1.96"
    },
    {
     "name": "PALO PINTO",
     "hc-key": "us-tx-363",
     "registered-voters": "16,745",
     "allegation-count": 1,
     "value": "5.97"
    },
    {
     "name": "PANOLA",
     "hc-key": "us-tx-365",
     "registered-voters": "15,782",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "PARKER",
     "hc-key": "us-tx-367",
     "registered-voters": "79,997",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "PARMER",
     "hc-key": "us-tx-369",
     "registered-voters": "4,278",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "PECOS",
     "hc-key": "us-tx-371",
     "registered-voters": "7,999",
     "allegation-count": 1,
     "value": "12.50"
    },
    {
     "name": "POLK",
     "hc-key": "us-tx-373",
     "registered-voters": "36,741",
     "allegation-count": 2,
     "value": "5.44"
    },
    {
     "name": "POTTER",
     "hc-key": "us-tx-375",
     "registered-voters": "52,519",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "PRESIDIO",
     "hc-key": "us-tx-377",
     "registered-voters": "4,643",
     "allegation-count": 1,
     "value": "21.54"
    },
    {
     "name": "RAINS",
     "hc-key": "us-tx-379",
     "registered-voters": "6,836",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "RANDALL",
     "hc-key": "us-tx-381",
     "registered-voters": "81,048",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "REAGAN",
     "hc-key": "us-tx-383",
     "registered-voters": "1,833",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "REAL",
     "hc-key": "us-tx-385",
     "registered-voters": "2,455",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "RED RIVER",
     "hc-key": "us-tx-387",
     "registered-voters": "7,912",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "REEVES",
     "hc-key": "us-tx-389",
     "registered-voters": "6,840",
     "allegation-count": 1,
     "value": "14.62"
    },
    {
     "name": "REFUGIO",
     "hc-key": "us-tx-391",
     "registered-voters": "4,962",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ROBERTS",
     "hc-key": "us-tx-393",
     "registered-voters": "682",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ROBERTSON",
     "hc-key": "us-tx-395",
     "registered-voters": "11,227",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "ROCKWALL",
     "hc-key": "us-tx-397",
     "registered-voters": "53,500",
     "allegation-count": 1,
     "value": "1.87"
    },
    {
     "name": "RUNNELS",
     "hc-key": "us-tx-399",
     "registered-voters": "6,513",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "RUSK",
     "hc-key": "us-tx-401",
     "registered-voters": "30,103",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "SABINE",
     "hc-key": "us-tx-403",
     "registered-voters": "7,451",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "SAN AUGUSTINE",
     "hc-key": "us-tx-405",
     "registered-voters": "6,062",
     "allegation-count": 1,
     "value": "16.50"
    },
    {
     "name": "SAN JACINTO",
     "hc-key": "us-tx-407",
     "registered-voters": "16,673",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "SAN PATRICIO",
     "hc-key": "us-tx-409",
     "registered-voters": "39,398",
     "allegation-count": 1,
     "value": "2.54"
    },
    {
     "name": "SAN SABA",
     "hc-key": "us-tx-411",
     "registered-voters": "3,716",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "SCHLEICHER",
     "hc-key": "us-tx-413",
     "registered-voters": "1,778",
     "allegation-count": 1,
     "value": "56.24"
    },
    {
     "name": "SCURRY",
     "hc-key": "us-tx-415",
     "registered-voters": "9,305",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "SHACKELFORD",
     "hc-key": "us-tx-417",
     "registered-voters": "2,248",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "SHELBY",
     "hc-key": "us-tx-419",
     "registered-voters": "14,713",
     "allegation-count": 4,
     "value": "27.19"
    },
    {
     "name": "SHERMAN",
     "hc-key": "us-tx-421",
     "registered-voters": "1,471",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "SMITH",
     "hc-key": "us-tx-423",
     "registered-voters": "129,215",
     "allegation-count": 3,
     "value": "2.32"
    },
    {
     "name": "SOMERVELL",
     "hc-key": "us-tx-425",
     "registered-voters": "5,812",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "STARR",
     "hc-key": "us-tx-427",
     "registered-voters": "30,583",
     "allegation-count": 5,
     "value": "16.35"
    },
    {
     "name": "STEPHENS",
     "hc-key": "us-tx-429",
     "registered-voters": "5,558",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "STERLING",
     "hc-key": "us-tx-431",
     "registered-voters": "852",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "STONEWALL",
     "hc-key": "us-tx-433",
     "registered-voters": "954",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "SUTTON",
     "hc-key": "us-tx-435",
     "registered-voters": "2,466",
     "allegation-count": 1,
     "value": "40.55"
    },
    {
     "name": "SWISHER",
     "hc-key": "us-tx-437",
     "registered-voters": "4,006",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "TARRANT",
     "hc-key": "us-tx-439",
     "registered-voters": "1,019,633",
     "allegation-count": 19,
     "value": "1.86"
    },
    {
     "name": "TAYLOR",
     "hc-key": "us-tx-441",
     "registered-voters": "74,665",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "TERRELL",
     "hc-key": "us-tx-443",
     "registered-voters": "691",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "TERRY",
     "hc-key": "us-tx-445",
     "registered-voters": "6,950",
     "allegation-count": 1,
     "value": "14.39"
    },
    {
     "name": "THROCKMORTON",
     "hc-key": "us-tx-447",
     "registered-voters": "1,223",
     "allegation-count": 1,
     "value": "81.77"
    },
    {
     "name": "TITUS",
     "hc-key": "us-tx-449",
     "registered-voters": "15,967",
     "allegation-count": 1,
     "value": "6.26"
    },
    {
     "name": "TOM GREEN",
     "hc-key": "us-tx-451",
     "registered-voters": "60,919",
     "allegation-count": 2,
     "value": "3.28"
    },
    {
     "name": "TRAVIS",
     "hc-key": "us-tx-453",
     "registered-voters": "667,116",
     "allegation-count": 10,
     "value": "1.50"
    },
    {
     "name": "TRINITY",
     "hc-key": "us-tx-455",
     "registered-voters": "11,436",
     "allegation-count": 2,
     "value": "17.49"
    },
    {
     "name": "TYLER",
     "hc-key": "us-tx-457",
     "registered-voters": "13,033",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "UPSHUR",
     "hc-key": "us-tx-459",
     "registered-voters": "26,938",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "UPTON",
     "hc-key": "us-tx-461",
     "registered-voters": "2,201",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "UVALDE",
     "hc-key": "us-tx-463",
     "registered-voters": "16,075",
     "allegation-count": 1,
     "value": "6.22"
    },
    {
     "name": "VAL VERDE",
     "hc-key": "us-tx-465",
     "registered-voters": "26,594",
     "allegation-count": 5,
     "value": "18.80"
    },
    {
     "name": "VAN ZANDT",
     "hc-key": "us-tx-467",
     "registered-voters": "34,474",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "VICTORIA",
     "hc-key": "us-tx-469",
     "registered-voters": "52,432",
     "allegation-count": 1,
     "value": "1.91"
    },
    {
     "name": "WALKER",
     "hc-key": "us-tx-471",
     "registered-voters": "30,358",
     "allegation-count": 1,
     "value": "3.29"
    },
    {
     "name": "WALLER",
     "hc-key": "us-tx-473",
     "registered-voters": "29,599",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "WARD",
     "hc-key": "us-tx-475",
     "registered-voters": "6,254",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "WASHINGTON",
     "hc-key": "us-tx-477",
     "registered-voters": "22,079",
     "allegation-count": 2,
     "value": "9.06"
    },
    {
     "name": "WEBB",
     "hc-key": "us-tx-479",
     "registered-voters": "117,905",
     "allegation-count": 3,
     "value": "2.54"
    },
    {
     "name": "WHARTON",
     "hc-key": "us-tx-481",
     "registered-voters": "24,463",
     "allegation-count": 3,
     "value": "12.26"
    },
    {
     "name": "WHEELER",
     "hc-key": "us-tx-483",
     "registered-voters": "3,409",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "WICHITA",
     "hc-key": "us-tx-485",
     "registered-voters": "75,923",
     "allegation-count": 1,
     "value": "1.32"
    },
    {
     "name": "WILBARGER",
     "hc-key": "us-tx-487",
     "registered-voters": "7,832",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "WILLACY",
     "hc-key": "us-tx-489",
     "registered-voters": "11,856",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "WILLIAMSON",
     "hc-key": "us-tx-491",
     "registered-voters": "281,615",
     "allegation-count": 4,
     "value": "1.42"
    },
    {
     "name": "WILSON",
     "hc-key": "us-tx-493",
     "registered-voters": "29,470",
     "allegation-count": 2,
     "value": "6.79"
    },
    {
     "name": "WINKLER",
     "hc-key": "us-tx-495",
     "registered-voters": "3,685",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "WISE",
     "hc-key": "us-tx-497",
     "registered-voters": "36,943",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "WOOD",
     "hc-key": "us-tx-499",
     "registered-voters": "27,855",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "YOAKUM",
     "hc-key": "us-tx-501",
     "registered-voters": "4,071",
     "allegation-count": 0,
     "value": "0.00"
    },
    {
     "name": "YOUNG",
     "hc-key": "us-tx-503",
     "registered-voters": "11,571",
     "allegation-count": 1,
     "value": "8.64"
    },
    {
     "name": "ZAPATA",
     "hc-key": "us-tx-505",
     "registered-voters": "7,515",
     "allegation-count": 2,
     "value": "26.61"
    },
    {
     "name": "ZAVALA",
     "hc-key": "us-tx-507",
     "registered-voters": "8,614",
     "allegation-count": 4,
     "value": "46.44"
    }
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
      legend: {
        enabled: false
      },
      chart: {
        backgroundColor: '#EFEFEF'
      },
      title: {
        text: 'Texas Fraud Allegations',
            style: {
                fontSize: '36px',
                fontWeight: '700',
                color: '#1d1d1d'
        }
      },
      subtitle: {
        text: 'News21 analyzed more than 360 allegation of voter fraud in Texas. The highest allegation rate occurred in predominately Hispanic counties in parts of southern Texas.',
            style: {
                fontSize: '18px',
                fontWeight: '400',
                color: '#1d1d1d'
        }
      },
      mapNavigation: {
        enabled: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      colorAxis: {
        stops: [
          [0, '#efefef'],
          [0.005, 'rgba(126, 143, 209, .5)'],
          [0.017, 'rgba(80, 91, 133, .6)'],
          [0.041, 'rgba(58, 66, 97, .7)'],
          [0.096, 'rgba(38, 43, 63, .8)']
        ],
        min: 0,
        max: 138
      },
      series: [{
        showInLegend: false,
        data: data,
        mapData: Highcharts.maps['countries/us/us-tx-all'],
        joinBy: 'hc-key',
        name: 'Fraud allegations',
        states: {
          hover: {
            color: '#9E2531'
          }
        },
        dataLabels: {
          enabled: false,
          format: '{point.allegation-count}'
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name} County</b><br />Registered voters: <b>{point.registered-voters}</b><br />Allegation count: <b>{point.allegation-count}</b><br />Rate (per 100,000 registered voters): <b>{point.value}</b>'
        }
      }]

    });
});


