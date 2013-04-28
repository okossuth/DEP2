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
      deps: ['jquery']
    
    'jquery':
      deps: ['date']

    'date':
      deps: []

require [
  'models/resources/User',
  'models/resources/Communication',

  'collections/Pages',

  'models/pages/Calendar',
  'models/pages/Settings',
  'models/pages/Feedback',
  'models/pages/Help',
  'models/pages/Notifications',

  'views/SideBar',

  'collections/resources/Notifications',
  'collections/resources/Events',
  'collections/resources/Municipalities',
  'collections/resources/PrimaryDepartments',
  'collections/resources/Groups',
  'collections/resources/GroupRelations',
  'collections/resources/WorkingHours',
  'collections/resources/Inactivities',

  '_features/socket.io',

  'ovivo'
], (User, Communication, Pages, CalendarPage, SettingsPage, FeedbackPage, HelpPage, NotificationsPage, SideBar, Notifications, Events, Municipalities, PrimaryDepartments, Groups, GroupRelations, WorkingHours, Inactivities, socketIO) ->
  
  $ () ->
      socketIO.init()

      # ovivo.mobile.routers = {}
      # ovivo.mobile.routers.main = routerMain

      ovivo.desktop.pages = new Pages()
      ovivo.desktop.resources = {}

      $.when.apply($, _.map [
        'Notifications',
        'Municipalities',
        'PrimaryDepartments',
        'Groups',
        'User',
        'Communication',
        'GroupRelations',
        'WorkingHours',
        'Inactivities',
        'Events'
      ], (resourceName) ->
        _resourceInstanceName = resourceName.slice(0, 1).toLowerCase() + resourceName.slice(1)

        ovivo.desktop.resources[_resourceInstanceName] = new (eval(resourceName))()
        ovivo.desktop.resources[_resourceInstanceName].def).then () ->

        ovivo.desktop.pages.calendar.show()

        # Backbone.history.start { pushState: true }

      ovivo.desktop.sideBar = new SideBar()

      _.each [
        'Calendar',
        'Settings',
        'Feedback',
        'Help',
        'Notifications'
      ], (pageVarName) ->
        _pageInstanceName = (pageVarName.slice(0, 1).toLowerCase() + pageVarName.slice(1))
        _page = ovivo.desktop.pages.addPage eval(pageVarName + 'Page'), _pageInstanceName

        true

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