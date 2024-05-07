// db.js

const mongoose = require('mongoose');
const BusSchedule = require('../models/busSchedule');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://aadhilmuhammed06:loqeHJQCX2pCgWtY@cluster0.cmaekyd.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected:', connection.connection.host);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

data = {
  "VehicleNumber": "KL 34 3858",
      "route": [
        "CHERTHALA BUS STAND",
        "THAVANAKADAVU",
        "AROOR TEMPLE"
      ],
      "schedule": [
        {
          "trip": 1,
          "stations": [
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "06:20 am",
              "departureTime": "06:20 am"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "06:40 am",
              "departureTime": "06:40 am"
            },
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "07:30 am",
              "departureTime": "07:30 am"
            }
          ]
        },
        {
          "trip": 2,
          "stations": [
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "07:34 am",
              "departureTime": "07:34 am"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "08:24 am",
              "departureTime": "08:24 am"
            },
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "08:44 am",
              "departureTime": "08:44 am"
            }
          ]
        },
        {
          "trip": 3,
          "stations": [
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "09:02 am",
              "departureTime": "09:02 am"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "09:22 am",
              "departureTime": "09:22 am"
            },
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "10:12 am",
              "departureTime": "10:12 am"
            }
          ]
        },
        {
          "trip": 4,
          "stations": [
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "10:16 am",
              "departureTime": "10:16 am"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "11:06 am",
              "departureTime": "11:06 am"
            },
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "11:26 am",
              "departureTime": "11:26 am"
            }
          ]
        },
        {
          "trip": 5,
          "stations": [
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "12:17 pm",
              "departureTime": "12:17 pm"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "12:37 pm",
              "departureTime": "12:37 pm"
            },
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "01:27 pm",
              "departureTime": "01:27 pm"
            }
          ]
        },
        {
          "trip": 6,
          "stations": [
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "01:57 pm",
              "departureTime": "01:57 pm"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "02:47 pm",
              "departureTime": "02:47 pm"
            },
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "03:07 pm",
              "departureTime": "03:07 pm"
            }
          ]
        },
        {
          "trip": 7,
          "stations": [
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "03:10 pm",
              "departureTime": "03:10 pm"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "03:30 pm",
              "departureTime": "03:30 pm"
            },
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "04:20 pm",
              "departureTime": "04:20 pm"
            }
          ]
        },
        {
          "trip": 8,
          "stations": [
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "04:59 pm",
              "departureTime": "04:59 pm"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "05:49 pm",
              "departureTime": "05:49 pm"
            },
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "06:09 pm",
              "departureTime": "06:09 pm"
            }
          ]
        },
        {
          "trip": 9,
          "stations": [
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "06:49 pm",
              "departureTime": "06:49 pm"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "07:09 pm",
              "departureTime": "07:09 pm"
            },
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "07:59 pm",
              "departureTime": "07:59 pm"
            }
          ]
        },
        {
          "trip": 10,
          "stations": [
            {
              "station": "AROOR TEMPLE",
              "arrivalTime": "08:08 pm",
              "departureTime": "08:08 pm"
            },
            {
              "station": "THAVANAKADAVU",
              "arrivalTime": "08:58 pm",
              "departureTime": "08:58 pm"
            },
            {
              "station": "CHERTHALA BUS STAND",
              "arrivalTime": "09:18 pm",
              "departureTime": "09:18 pm"
            }
          ]
        }
      ]
    },
    {
      "VehicleNumber": "KL 37 0001",
      "route": [
        "KOCHIYUDE JETTI",
        "KAYAMKULAM PRIVATE BUS STAND",
        "ADOOR"
      ],
      "schedule": [
        {
          "trip": 1,
          "stations": [
            {
              "station": "KOCHIYUDE JETTI",
              "arrivalTime": "06:05 am",
              "departureTime": "06:05 am"
            },
            {
              "station": "KAYAMKULAM PRIVATE BUS STAND",
              "arrivalTime": "06:25 am",
              "departureTime": "06:25 am"
            },
            {
              "station": "ADOOR",
              "arrivalTime": "07:33 am",
              "departureTime": "07:33 am"
            }
          ]
        },
        {
          "trip": 2,
          "stations": [
            {
              "station": "ADOOR",
              "arrivalTime": "07:45 am",
              "departureTime": "07:45 am"
            },
            {
              "station": "KAYAMKULAM PRIVATE BUS STAND",
              "arrivalTime": "08:53 am",
              "departureTime": "08:53 am"
            }
          ]
        },
        {
          "trip": 3,
          "stations": [
            {
              "station": "KOCHIYUDE JETTI",
              "arrivalTime": "09:25 am",
              "departureTime": "09:25 am"
            },
            {
              "station": "KAYAMKULAM PRIVATE BUS STAND",
              "arrivalTime": "09:45 am",
              "departureTime": "09:45 am"
            },
            {
              "station": "ADOOR",
              "arrivalTime": "10:53 am",
              "departureTime": "10:53 am"
            }
          ]
        },
        {
          "trip": 4,
          "stations": [
            {
              "station": "ADOOR",
              "arrivalTime": "11:25 am",
              "departureTime": "11:25 am"
            },
            {
              "station": "KAYAMKULAM PRIVATE BUS STAND",
              "arrivalTime": "12:33 pm",
              "departureTime": "12:33 pm"
            }
          ]
        },
        {
          "trip": 5,
          "stations": [
            {
              "station": "KOCHIYUDE JETTI",
              "arrivalTime": "01:15 pm",
              "departureTime": "01:15 pm"
            },
            {
              "station": "KAYAMKULAM PRIVATE BUS STAND",
              "arrivalTime": "01:35 pm",
              "departureTime": "01:35 pm"
            },
            {
              "station": "ADOOR",
              "arrivalTime": "02:43 pm",
              "departureTime": "02:43 pm"
            }
          ]
        },
        {
          "trip": 6,
          "stations": [
            {
              "station": "ADOOR",
              "arrivalTime": "02:45 pm",
              "departureTime": "02:45 pm"
            },
            {
              "station": "KAYAMKULAM PRIVATE BUS STAND",
              "arrivalTime": "03:53 pm",
              "departureTime": "03:53 pm"
            }
          ]
        },
        {
          "trip": 7,
          "stations": [
            {
              "station": "KOCHIYUDE JETTI",
              "arrivalTime": "04:36 pm",
              "departureTime": "04:36 pm"
            },
            {
              "station": "KAYAMKULAM PRIVATE BUS STAND",
              "arrivalTime": "04:56 pm",
              "departureTime": "04:56 pm"
            },
            {
              "station": "ADOOR",
              "arrivalTime": "06:04 pm",
              "departureTime": "06:04 pm"
            }
          ]
        },
        {
          "trip": 8,
          "stations": [
            {
              "station": "ADOOR",
              "arrivalTime": "06:20 pm",
              "departureTime": "06:20 pm"
            },
            {
              "station": "KAYAMKULAM PRIVATE BUS STAND",
              "arrivalTime": "07:28 pm",
              "departureTime": "07:28 pm"
            }
          ]
        }
      ]
    },
    {
      "VehicleNumber": "KL 37 2180",
      "route": [
        "BHARANIKAVU",
        "CHARUMOODU",
        "CHENGANNUR"
      ],
      "schedule": [
        {
          "trip": 1,
          "stations": [
            {
              "station": "BHARANIKAVU",
              "arrivalTime": "07:18 am",
              "departureTime": "07:18 am"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "07:56 am",
              "departureTime": "07:56 am"
            },
            {
              "station": "CHENGANNUR",
              "arrivalTime": "08:26 am",
              "departureTime": "08:26 am"
            }
          ]
        },
        {
          "trip": 2,
          "stations": [
            {
              "station": "CHENGANNUR",
              "arrivalTime": "08:52 am",
              "departureTime": "08:52 am"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "09:22 am",
              "departureTime": "09:22 am"
            }
          ]
        },
        {
          "trip": 3,
          "stations": [
            {
              "station": "BHARANIKAVU",
              "arrivalTime": "10:20 am",
              "departureTime": "10:20 am"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "10:58 am",
              "departureTime": "10:58 am"
            },
            {
              "station": "CHENGANNUR",
              "arrivalTime": "11:28 am",
              "departureTime": "11:28 am"
            }
          ]
        },
        {
          "trip": 4,
          "stations": [
            {
              "station": "CHENGANNUR",
              "arrivalTime": "12:36 pm",
              "departureTime": "12:36 pm"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "01:06 pm",
              "departureTime": "01:06 pm"
            }
          ]
        },
        {
          "trip": 5,
          "stations": [
            {
              "station": "BHARANIKAVU",
              "arrivalTime": "02:14 pm",
              "departureTime": "02:14 pm"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "02:52 pm",
              "departureTime": "02:52 pm"
            },
            {
              "station": "CHENGANNUR",
              "arrivalTime": "03:22 pm",
              "departureTime": "03:22 pm"
            }
          ]
        },
        {
          "trip": 6,
          "stations": [
            {
              "station": "CHENGANNUR",
              "arrivalTime": "03:35 pm",
              "departureTime": "03:35 pm"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "04:05 pm",
              "departureTime": "04:05 pm"
            }
          ]
        },
        {
          "trip": 7,
          "stations": [
            {
              "station": "BHARANIKAVU",
              "arrivalTime": "05:06 pm",
              "departureTime": "05:06 pm"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "05:44 pm",
              "departureTime": "05:44 pm"
            },
            {
              "station": "CHENGANNUR",
              "arrivalTime": "06:14 pm",
              "departureTime": "06:14 pm"
            }
          ]
        },
        {
          "trip": 8,
          "stations": [
            {
              "station": "CHENGANNUR",
              "arrivalTime": "06:20 pm",
              "departureTime": "06:20 pm"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "06:50 pm",
              "departureTime": "06:50 pm"
            }
          ]
        },
        {
          "trip": 9,
          "stations": [
            {
              "station": "BHARANIKAVU",
              "arrivalTime": "07:50 pm",
              "departureTime": "07:50 pm"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "08:28 pm",
              "departureTime": "08:28 pm"
            },
            {
              "station": "CHENGANNUR",
              "arrivalTime": "08:58 pm",
              "departureTime": "08:58 pm"
            }
          ]
        },
        {
          "trip": 10,
          "stations": [
            {
              "station": "CHENGANNUR",
              "arrivalTime": "09:05 pm",
              "departureTime": "09:05 pm"
            },
            {
              "station": "CHARUMOODU",
              "arrivalTime": "09:35 pm",
              "departureTime": "09:35 pm"
            }
          ]
        }
      ]
}

BusSchedule.insertMany([data])
module.exports = connectDB;
