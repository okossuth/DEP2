define [
  'views/pages/PageBase',
  'views/pages/PageStandaloneAnimation',

  '_common/ResourceEditCommon',
  '_common/InactivityEdit',

  'ovivo'
], (PageBase, PageStandaloneAnimation, ResourceEditCommon, InactivityEdit) ->
  PageBase.extend _.extend {}, PageStandaloneAnimation, ResourceEditCommon.get(PageBase.prototype.events), InactivityEdit, 
    el: '.page.page-edit-inactivity'

    initialize: () ->
      @proxyCall 'initialize', arguments

      @initializeEdit()

      true