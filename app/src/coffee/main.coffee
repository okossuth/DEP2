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
  'models/resources/Communication',

  'views/popups/EditPopupWorkingHour',
  'views/popups/EditPopupTimeoff',
  'views/popups/CreateNewPopup',

  'collections/Pages',

  'models/pages/Calendar',
  'models/pages/Settings',
  'models/pages/Feedback',
  'models/pages/Help',
  'models/pages/Notifications',
  'models/pages/EventDetails',
  'models/pages/EditWorkingHours',
  'models/pages/EditInactivity',

  'views/SideBar',

  'collections/resources/Notifications',
  'collections/resources/Events',
  'collections/resources/Municipalities',
  'collections/resources/PrimaryDepartments',
  'collections/resources/Groups',
  'collections/resources/GroupRelations',
  'collections/resources/WorkingHours',
  'collections/resources/Inactivities',
  'collections/ApiErrors',

  '_features/socket.io',

  'ovivo'
], (routerMain, User, Communication, EditPopupWorkingHour, EditPopupTimeoff, CreateNewPopup, Pages, CalendarPage, SettingsPage, FeedbackPage, HelpPage, NotificationsPage, EventDetailsPage, EditWorkingHoursPage, EditInactivityPage, SideBar, Notifications, Events, Municipalities, PrimaryDepartments, Groups, GroupRelations, WorkingHours, Inactivities, ApiErrors, socketIO) ->
  
  $ () ->
      socketIO.init()

      ovivo.desktop.routers = {}
      ovivo.desktop.routers.main = routerMain

      ovivo.desktop.pages = new Pages()
      ovivo.desktop.resources = {}

      $.when.apply($, _.map [
        { name: 'notifications', constr: Notifications },
        { name: 'municipalities', constr: Municipalities },
        { name: 'primaryDepartments', constr: PrimaryDepartments },
        { name: 'groups', constr: Groups },
        { name: 'user', constr: User },
        { name: 'communication', constr: Communication },
        { name: 'groupRelations', constr: GroupRelations },
        { name: 'workingHours', constr: WorkingHours },
        { name: 'inactivities', constr: Inactivities },
        { name: 'events', constr: Events },
        { name: 'apiErrors', constr: ApiErrors }
      ], (o) ->
        ovivo.desktop.resources[o.name] = new o.constr()
        ovivo.desktop.resources[o.name].def).then () ->

        ovivo.desktop.pages.calendar.show()

        Backbone.history.start { pushState: true }

      ovivo.desktop.sideBar = new SideBar()

      _.each [
        { name: 'calendar', constr: CalendarPage },
        { name: 'settings', constr: SettingsPage },
        { name: 'feedback', constr: FeedbackPage },
        { name: 'help', constr: HelpPage },
        { name: 'notifications', constr: NotificationsPage },
        { name: 'eventDetails', constr: EventDetailsPage },
        { name: 'editWorkingHours', constr: EditWorkingHoursPage },
        { name: 'editInactivity', constr: EditInactivityPage }
      ], (o) ->
        _page = ovivo.desktop.pages.addPage o.constr, o.name

        true

      ovivo.desktop.popups = {}

      _.each [
        { name: 'editPopupWorkingHour', constr: EditPopupWorkingHour },
        { name: 'editPopupTimeoff', constr: EditPopupTimeoff },
        { name: 'createNewPopup', constr: CreateNewPopup }
      ], (o) ->
        ovivo.desktop.popups[o.name] = new o.constr()

      _.each ovivo.desktop.resources, do () ->
        _num = 0
        _total = 0

        _complete = () ->
          _num += 1

          console.log 'Resources loading: ' + Math.round(35 + 65 * _num / _total) + '%'

        (value, name) ->
          _res = value.initFetch()

          if _res.then? 
            _total += 1

            _res.then _complete

      true

    true

  true