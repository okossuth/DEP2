{
  paths: {
    "underscore": "../../lib/underscore",
    "backbone": "../../lib/backbone",
    "handlebars": "../../lib/handlebars",
    "ovivo": "../../dist/ovivo-desktop-employee",
    "jquery": "../../lib/jquery-1.9.1",
    "templates": "../../dist/templates",
    "fastclick": "../../lib/fastclick",
    "airbrake": "../../lib/airbrake",
    "date": "../../lib/date",
    "pickadate": "../../lib/pickadate.legacy"
  },

  shim: {
    "ovivo": {
      deps: ["templates"]
    },
    
    "templates": {
      deps: ["handlebars"]
    },
    
    "handlebars": {
      deps: ["backbone"]
    },
    
    "backbone": {
      deps: ["underscore"]
    },
    
    "underscore": {
      deps: ["pickadate"]
    },

    "pickadate": {
      deps: ["jquery"]
    },
    
    "jquery": {
      deps: ["date"]
    },

    "date": {
      deps: []
    }
  },

  name: 'main',

  out: '../../dist/ovivo-desktop-employee-require.js'
}