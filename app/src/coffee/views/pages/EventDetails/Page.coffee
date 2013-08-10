define [
  'views/pages/PageBase',
  'views/pages/PageStandaloneAnimation',

  'models/resources/Comment',

  'ovivo'
], (PageBase, PageStandaloneAnimation, Comment) ->
  PageBase.extend _.extend {}, PageStandaloneAnimation,
    el: '.page.page-event-details'

    events: () -> _.extend {}, PageBase.prototype.events,
      'click .post-comment': 'postComment'
      'keyup .comment-input': 'keyCommentInput'

    headerTemplate: Handlebars.templates['eventDetailsHeader']

    transitionStart: () ->
      @proxyCall 'transitionStart', arguments

      true

    transitionComplete: () ->
      @proxyCall 'transitionComplete', arguments

      true

    postComment: () ->
      _commentText = @$('.comment-input').val()

      if _commentText isnt ''
        _comment = new Comment
          comment: _commentText
          reply_to: null

        @model.get('event').comments.add _comment

        _comment.save()

        @clearInput()

      true

    keyCommentInput: () ->
      if @$('.comment-input').val() isnt ''
        @$('footer').addClass 'active'

      else @clearInput()

      true

    clearInput: () -> 
      @$('footer').removeClass 'active'

      @$('.comment-input').val ''

    renderComments: () ->
      _comments = @model.get('event').comments

      _comments.each (comment) -> @$('ul.comments').append comment.view.el

      true

    addComment: (comment) ->
      @$('ul.comments').append comment.view.el

      true

    close: () ->
      ovivo.desktop.routers.main.navigate "/", { trigger: true }

      @hideEl()

    changeEvent: () ->
      @clearInput()
      
      _event = @model.get('event')
      _prevEvent = @model.previous('event')

      _eventDetailsView = _event.detailsView

      @$('header span.title').html _event.view.startDateFormated()

      @$('.event-container').children().remove()
      @$('.event-container').append _eventDetailsView.el

      _eventDetailsView.delegateEvents()

      _event.comments.on 'add', @addComment, @

      _prevEvent?.comments.off 'add', @addComment

      _event.comments.def.done () => @renderComments()

      true

    initialize: () ->
      @proxyCall 'initialize', arguments

      @model.on 'change:event', @changeEvent, @

      true