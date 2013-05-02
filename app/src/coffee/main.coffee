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
      deps: []

require [
  'models/resources/User',

  'views/popups/EditPopupResourceNeed',
  'views/popups/CreateNewPopup',

  'collections/Pages',

  'models/pages/Calendar',
  'models/pages/Settings',

  'views/SideBar',

  'collections/resources/ResourceNeeds',
  'collections/resources/Skills',

  '_features/socket.io',

  'ovivo'
], (User, EditPopupResourceNeed, CreateNewPopup, Pages, CalendarPage, SettingsPage, SideBar, ResourceNeeds, Skills, socketIO) ->
  
  $ () ->
      socketIO.init()

      # ovivo.mobile.routers = {}
      # ovivo.mobile.routers.main = routerMain

      ovivo.desktop.pages = new Pages()
      ovivo.desktop.resources = {}

      $.when.apply($, _.map [
        'User',
        'ResourceNeeds',
        'Skills'
      ], (resourceName) ->
        _resourceInstanceName = resourceName.slice(0, 1).toLowerCase() + resourceName.slice(1)

        ovivo.desktop.resources[_resourceInstanceName] = new (eval(resourceName))()
        ovivo.desktop.resources[_resourceInstanceName].def).then () ->

        ovivo.desktop.pages.calendar.show()

        # Backbone.history.start { pushState: true }

      ovivo.desktop.sideBar = new SideBar()

      _.each [
        'Calendar',
        'Settings'
      ], (pageVarName) ->
        _pageInstanceName = (pageVarName.slice(0, 1).toLowerCase() + pageVarName.slice(1))
        _page = ovivo.desktop.pages.addPage eval(pageVarName + 'Page'), _pageInstanceName

        true

      ovivo.desktop.popups = {}


      _.each [
        'EditPopupResourceNeed',
        'CreateNewPopup'
      ], (popupName) ->
        _popupInstanceName = (popupName.slice(0, 1).toLowerCase() + popupName.slice(1))

        ovivo.desktop.popups[_popupInstanceName] = new (eval(popupName))()

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