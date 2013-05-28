requirejs.config
  paths:
    'underscore': '../../lib/underscore'
    'backbone': '../../lib/backbone'
    'handlebars': '../../lib/handlebars'
    'ovivo': '../../dist/ovivo-desktop-employee'
    'jquery': '../../lib/jquery-1.9.1'
    'templates': '../../dist/templates'
    'fastclick': '../../lib/fastclick'
    'airbrake': '../../lib/airbrake'
    'date': '../../lib/date'
    'pickadate': '../../lib/pickadate.legacy'
    'modernizr': '../../lib/modernizr'

  shim:
    'ovivo':
      deps: ['templates']
    
    'templates':
      deps: ['handlebars']
    
    'handlebars':
      deps: ['backbone']
    
    'backbone':
      deps: ['underscore']
    
    'underscore':
      deps: ['pickadate']

    'pickadate':
      deps: ['jquery']
    
    'jquery':
      deps: ['date']

    'date':
      deps: ['modernizr']

    'modernizr':
      deps: []

require [
  'routers/main',
  'models/resources/User',

  'views/popups/EditPopupResourceNeed',
  'views/popups/EditPopupTemplate',
  'views/popups/EditPopupPeriod',
  'views/popups/CreateNewPopup',
  'views/popups/PeriodBlockPopup',

  'collections/Pages',

  'models/pages/Calendar',
  'models/pages/Resources',
  'models/pages/Settings',

  'views/SideBar',

  'collections/resources/ResourceNeeds',
  'collections/resources/Templates',
  'collections/resources/Periods',
  'collections/resources/Skills',
  'collections/resources/Municipalities',
  'collections/resources/PrimaryDepartments',
  'collections/resources/Groups',
  'collections/resources/Users',
  'collections/resources/WorkingHours',

  '_features/socket.io',

  'ovivo'
], (routerMain, User, EditPopupResourceNeed, EditPopupTemplate, EditPopupPeriod, CreateNewPopup, PeriodBlockPopup, Pages, CalendarPage, ResourcesPage, SettingsPage, SideBar, ResourceNeeds, Templates, Periods, Skills, Municipalities, PrimaryDepartments, Groups, Users, WorkingHours, socketIO) ->
  $ () ->
      socketIO.init()

      ovivo.desktop.routers = {}
      ovivo.desktop.routers.main = routerMain

      ovivo.desktop.pages = new Pages()
      ovivo.desktop.resources = {}

      $.when.apply($, _.map [
        { name: 'user', constr: User },
        { name: 'skills', constr: Skills },
        { name: 'municipalities', constr: Municipalities },
        { name: 'primaryDepartments', constr: PrimaryDepartments },
        { name: 'groups', constr: Groups },
        { name: 'users', constr: Users },
        { name: 'workingHours', constr: WorkingHours },
        { name: 'resourceNeeds', constr: ResourceNeeds },
        { name: 'templates', constr: Templates },
        { name: 'periods', constr: Periods },
      ], (o) ->
        ovivo.desktop.resources[o.name] = new o.constr()
        ovivo.desktop.resources[o.name].def).then () ->

        ovivo.desktop.pages.calendar.show()

        Backbone.history.start { pushState: true }

      ovivo.desktop.sideBar = new SideBar()

      _.each [
        { name: 'calendar', constr: CalendarPage },
        { name: 'resources', constr: ResourcesPage },
        { name: 'settings', constr: SettingsPage }
      ], (o) ->
        _page = ovivo.desktop.pages.addPage o.constr, o.name

        true

      ovivo.desktop.popups = {}

      _.each [
        { name: 'editPopupResourceNeed', constr: EditPopupResourceNeed },
        { name: 'editPopupTemplate', constr: EditPopupTemplate },
        { name: 'editPopupPeriod', constr: EditPopupPeriod },
        { name: 'createNewPopup', constr: CreateNewPopup },
        { name: 'periodBlockPopup', constr: PeriodBlockPopup }
      ], (o) ->
        ovivo.desktop.popups[o.name] = new o.constr()

      _.each ovivo.desktop.resources, do () ->
        _num = 0
        _total = _.keys(ovivo.desktop.resources).length

        _complete = () ->
          _num += 1

          console.log 'Resources loading: ' + Math.round(35 + 65 * _num / _total) + '%'

        (value, name) ->
          _res = value.initFetch()

          if _res.then? 
            _res.then _complete

      true

    true

  true