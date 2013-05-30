// Generated by CoffeeScript 1.6.2
requirejs.config({
  paths: {
    'underscore': '../../lib/underscore',
    'backbone': '../../lib/backbone',
    'handlebars': '../../lib/handlebars',
    'ovivo': '../../dist/ovivo-desktop-employee',
    'jquery': '../../lib/jquery-1.9.1',
    'templates': '../../dist/templates',
    'fastclick': '../../lib/fastclick',
    'airbrake': '../../lib/airbrake',
    'date': '../../lib/date',
    'pickadate': '../../lib/pickadate.legacy',
    'modernizr': '../../lib/modernizr'
  },
  shim: {
    'ovivo': {
      deps: ['templates']
    },
    'templates': {
      deps: ['handlebars']
    },
    'handlebars': {
      deps: ['backbone']
    },
    'backbone': {
      deps: ['underscore']
    },
    'underscore': {
      deps: ['pickadate']
    },
    'pickadate': {
      deps: ['jquery']
    },
    'jquery': {
      deps: ['date']
    },
    'date': {
      deps: ['modernizr']
    },
    'modernizr': {
      deps: []
    }
  }
});

require(['routers/main', 'models/resources/User', 'views/popups/EditPopupResourceNeed', 'views/popups/EditPopupTemplate', 'views/popups/EditPopupPeriod', 'views/popups/CreateNewPopup', 'views/popups/PeriodBlockPopup', 'collections/Pages', 'models/pages/Calendar', 'models/pages/Resources', 'models/pages/Settings', 'models/pages/Notifications', 'views/SideBar', 'collections/resources/ResourceNeeds', 'collections/resources/Templates', 'collections/resources/Periods', 'collections/resources/Skills', 'collections/resources/Municipalities', 'collections/resources/PrimaryDepartments', 'collections/resources/Groups', 'collections/resources/Users', 'collections/resources/WorkingHours', 'collections/resources/Notifications', '_features/socket.io', 'ovivo'], function(routerMain, User, EditPopupResourceNeed, EditPopupTemplate, EditPopupPeriod, CreateNewPopup, PeriodBlockPopup, Pages, CalendarPage, ResourcesPage, SettingsPage, NotificationsPage, SideBar, ResourceNeeds, Templates, Periods, Skills, Municipalities, PrimaryDepartments, Groups, Users, WorkingHours, Notifications, socketIO) {
  $(function() {
    socketIO.init();
    ovivo.desktop.routers = {};
    ovivo.desktop.routers.main = routerMain;
    ovivo.desktop.pages = new Pages();
    ovivo.desktop.resources = {};
    $.when.apply($, _.map([
      {
        name: 'user',
        constr: User
      }, {
        name: 'skills',
        constr: Skills
      }, {
        name: 'municipalities',
        constr: Municipalities
      }, {
        name: 'primaryDepartments',
        constr: PrimaryDepartments
      }, {
        name: 'groups',
        constr: Groups
      }, {
        name: 'users',
        constr: Users
      }, {
        name: 'workingHours',
        constr: WorkingHours
      }, {
        name: 'resourceNeeds',
        constr: ResourceNeeds
      }, {
        name: 'templates',
        constr: Templates
      }, {
        name: 'periods',
        constr: Periods
      }, {
        name: 'notifications',
        constr: Notifications
      }
    ], function(o) {
      ovivo.desktop.resources[o.name] = new o.constr();
      return ovivo.desktop.resources[o.name].def;
    })).then(function() {
      ovivo.desktop.pages.calendar.show();
      setTimeout((function() {
        return ovivo.desktop.pages.calendar.view.$el.removeClass('initial-loading');
      }), 50);
      return Backbone.history.start({
        pushState: true
      });
    });
    ovivo.desktop.sideBar = new SideBar();
    _.each([
      {
        name: 'calendar',
        constr: CalendarPage
      }, {
        name: 'resources',
        constr: ResourcesPage
      }, {
        name: 'settings',
        constr: SettingsPage
      }, {
        name: 'notifications',
        constr: NotificationsPage
      }
    ], function(o) {
      var _page;

      _page = ovivo.desktop.pages.addPage(o.constr, o.name);
      return true;
    });
    ovivo.desktop.popups = {};
    _.each([
      {
        name: 'editPopupResourceNeed',
        constr: EditPopupResourceNeed
      }, {
        name: 'editPopupTemplate',
        constr: EditPopupTemplate
      }, {
        name: 'editPopupPeriod',
        constr: EditPopupPeriod
      }, {
        name: 'createNewPopup',
        constr: CreateNewPopup
      }, {
        name: 'periodBlockPopup',
        constr: PeriodBlockPopup
      }
    ], function(o) {
      return ovivo.desktop.popups[o.name] = new o.constr();
    });
    _.each(ovivo.desktop.resources, (function() {
      var _complete, _num, _total;

      _num = 0;
      _total = _.keys(ovivo.desktop.resources).length;
      _complete = function() {
        _num += 1;
        return console.log('Resources loading: ' + Math.round(35 + 65 * _num / _total) + '%');
      };
      return function(value, name) {
        var _res;

        _res = value.initFetch();
        if (_res.then != null) {
          return _res.then(_complete);
        }
      };
    })());
    return true;
  });
  true;
  return true;
});
