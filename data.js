var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5068337530093494,
          "pitch": 0.38125923851807286,
          "rotation": 4.71238898038469,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.1309950308868189,
          "pitch": 0.22733100457320354,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.0495754752155975,
          "pitch": 0.028841260167009608,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.015071475536993617,
        "pitch": 0.0036550869772487005,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.03830321856682417,
          "pitch": 0.20522650832679368,
          "rotation": 1.5707963267948966,
          "target": "3-wash"
        },
        {
          "yaw": -0.22526983209521845,
          "pitch": -0.23266731702217314,
          "rotation": 7.0685834705770345,
          "target": "9-upper-living"
        },
        {
          "yaw": 0.5521251149173274,
          "pitch": 0.0935957591704728,
          "rotation": 1.5707963267948966,
          "target": "7-gf-bedroom-2"
        },
        {
          "yaw": -0.5919477854029971,
          "pitch": 0.11325748571165484,
          "rotation": 4.71238898038469,
          "target": "6-gf-bedroom-1"
        },
        {
          "yaw": 1.6330373651904662,
          "pitch": 0.12266384265612018,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.2709209423170975,
          "pitch": 0.052406369474118364,
          "rotation": 0,
          "target": "5-work-area"
        },
        {
          "yaw": -1.441177541763322,
          "pitch": 0.3941115725195594,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash",
      "name": "Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.008965732458872111,
        "pitch": 0.16070839360101985,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.5658161754964004,
          "pitch": 0.26732076220987366,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 2.108441188716733,
          "pitch": 0.06529264229249598,
          "rotation": 1.5707963267948966,
          "target": "1-living"
        },
        {
          "yaw": 0.9376084109795091,
          "pitch": 0.010539967402721118,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.674736237452583,
          "pitch": 0.11745277059736914,
          "rotation": 0,
          "target": "6-gf-bedroom-1"
        },
        {
          "yaw": 0.6215354756419309,
          "pitch": 0.0834100869276746,
          "rotation": 0,
          "target": "7-gf-bedroom-2"
        },
        {
          "yaw": -1.6045595566388062,
          "pitch": -0.34114214492782935,
          "rotation": 7.0685834705770345,
          "target": "9-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.14703775197670588,
        "pitch": -0.010044274600062408,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.8876330434416158,
          "pitch": 0.1608016882934482,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -1.7359972297904616,
          "pitch": 0.05575930184820166,
          "rotation": 0,
          "target": "5-work-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.02331090439307637,
        "pitch": 0.027621755150180505,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -2.713592177410682,
          "pitch": 0.08358902463804796,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-gf-bedroom-1",
      "name": "GF Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5970545448122095,
          "pitch": 0.095747279837191,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gf-bedroom-2",
      "name": "GF Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6746596917003238,
          "pitch": 0.11026342004414502,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ff-bedroom",
      "name": "FF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7807083342242684,
          "pitch": 0.09093015389630565,
          "rotation": 0,
          "target": "9-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.09410492696842176,
        "pitch": 0.015094188033209832,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.5938444569544767,
          "pitch": 0.154630794561335,
          "rotation": 0,
          "target": "8-ff-bedroom"
        },
        {
          "yaw": 0.3199574441877999,
          "pitch": 0.3173382165266627,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6403360974217147,
          "pitch": 0.218159180801349,
          "title": "Open Terrace",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "Abhiraj Updated Interior",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
