define [
  'views/pages/PageBase',
  'views/pages/PageStandaloneAnimation',

  '_common/ResourceEditCommon',
  '_common/WorkingHoursEdit',

  'ovivo'
], (PageBase, PageStandaloneAnimation, ResourceEditCommon, WorkingHoursEdit) ->
  PageBase.extend _.extend {}, PageStandaloneAnimation, ResourceEditCommon.get(PageBase.prototype.events), WorkingHoursEdit,
    el: '.page.page-edit-working-hours'

    initialize: () ->
      @proxyCall 'initialize', arguments

      @initializeEdit()

      true