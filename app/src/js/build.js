{
  paths: {
    "underscore": "../../lib/underscore",
    "backbone": "../../lib/backbone",
    "handlebars": "../../lib/handlebars",
    "ovivo-desktop-employee": "../../dist/ovivo-desktop-employee",
    "jquery": "../../lib/jquery-1.9.1",
    "templates": "../../dist/templates",
    "fastclick": "../../lib/fastclick",
    "airbrake": "../../lib/airbrake"
  },

  shim: {
    "ovivo-desktop-employee": {
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
      deps: ["fastclick"]
    },
    
    "fastclick": {
      deps: ["airbrake"]
    }
  },

  name: 'main',

  out: '../../dist/ovivo-desktop-employee-require.js'
}