{
  paths: {
    "underscore": "../../lib/underscore",
    "backbone": "../../lib/backbone",
    "handlebars": "../../lib/handlebars",
    "ovivo": "../../dist/ovivo-desktop-employee",
    "jquery": "../../lib/jquery-1.9.1",
    "templates": "../../dist/templates",
    "fastclick": "../../lib/fastclick",
    "airbrake": "../../lib/airbrake"
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
      deps: ["jquery"]
    },
    
    "jquery": {
      deps: []
    }
  },

  name: 'main',

  out: '../../dist/ovivo-desktop-employee-require.js'
}