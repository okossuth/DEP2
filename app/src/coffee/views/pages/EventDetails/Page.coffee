define [
  'views/pages/PageBase',

  'models/resources/Comment',

  'ovivo'
], (PageBase, Comment) ->
  PageBase.extend
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

    changeEvent: () ->
      @clearInput()
      
      _event = @model.get('event')
      _prevEvent = @model.previous('event')

      _event.createDetailsView()

      _eventDetailsView = _event.detailsView

      @$('header span.title').html _event.view.startDateFormated()

      @$('.event-container').html ''
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