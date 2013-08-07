{
  "baseUrl": "app/src/js",

  "paths": {
    "underscore": "../../lib/underscore",
    "backbone": "../../lib/backbone",
    "handlebars": "../../lib/handlebars",
    "ovivo": "../../dist/ovivo-desktop-employee",
    "jquery": "../../lib/jquery-1.9.1",
    "templates": "../../dist/templates",
    "fastclick": "../../lib/fastclick",
    "date": "../../lib/date",
    "pickadate": "../../lib/pickadate.legacy",
    "modernizr": "../../lib/modernizr",
    "srgs-parser": "../../lib/srgs-parser",
    "alert": "../../lib/alert"
  },

  "generateSourceMaps": true,
  "preserveLicenseComments": false,

  "optimize": "none",

  "uglify2": {
  },

  "shim": {
    "ovivo": {
      "deps": ["templates"]
    },
    
    "templates": {
      "deps": ["handlebars"]
    },
    
    "handlebars": {
      "deps": ["backbone"]
    },
    
    "backbone": {
      "deps": ["underscore"]
    },
    
    "underscore": {
      "deps": ["pickadate"]
    },

    "pickadate": {
      "deps": ["jquery"]
    },
    
    "jquery": {
      "deps": ["date"]
    },

    "date": {
      "deps": ["alert"]
    },

    "alert": {
      "deps": ["modernizr"]
    },

    "modernizr": {
      "deps": []
    }
  },

  "name": "main",

  "out": "app/dist/ovivo-desktop-employee-require.js"
}