{
  paths: {
    "underscore": "../../lib/underscore",
    "lodash": "../../lib/lodash",
    "backbone": "../../lib/backbone",
    "handlebars": "../../lib/handlebars",
    "ovivo": "../../dist/ovivo-desktop-employee",
    "jquery": "../../lib/jquery-1.9.1",
    "jquery.mousewheel": "../../lib/jquery.mousewheel",
    "templates": "../../dist/templates",
    "fastclick": "../../lib/fastclick",
    "date": "../../lib/date",
    "pickadate": "../../lib/pickadate.legacy",
    "modernizr": "../../lib/modernizr"
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
      deps: ["lodash"]
    },
    
    "lodash": {
      deps: ["pickadate"]
    },

    "pickadate": {
      deps: ["jquery.mousewheel"]
    },

    "jquery.mousewheel": {
      deps: ["jquery"]
    },
    
    "jquery": {
      deps: ["date"]
    },

    "date": {
      deps: ["modernizr"]
    },

    "modernizr": {
      deps: []
    }
  },

  name: 'main',

  out: '../../dist/ovivo-desktop-employee-require.js'
}