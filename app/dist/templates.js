(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['comment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "";


  return buffer;});
templates['comment_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"comment\">\r\n\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['event'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "";


  return buffer;});
templates['eventDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "";


  return buffer;});
templates['event_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"event\">\r\n   \r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<ul>";
  return buffer;});
templates['inactivity'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "";


  return buffer;});
templates['inactivity_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"inactivity\">\r\n\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['notification'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\r\n    <h2>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\r\n    <p class=\"message\">";
  foundHelper = helpers.summary;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.summary; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n    <p class=\"time\">";
  foundHelper = helpers.timestamp;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.timestamp; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n\r\n    <i class=\"mark\"></i>\r\n</div>";
  return buffer;});
templates['notificationMessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"notification-message\">\r\n    <div class=\"background\"></div>\r\n    <i class=\"icon-huge ok\"></i>\r\n    <span>";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n</div>";
  return buffer;});
templates['notification_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"notification\">\r\n\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['workingHour'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "";


  return buffer;});
templates['workingHour_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"working-hour\">\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
})();