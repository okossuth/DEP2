(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calendarMonth'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n            <tr class=\"row week-row\">\r\n                ";
  foundHelper = helpers.cells;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.cells; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.cells) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tr>\r\n        ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <td class=\"cell";
  foundHelper = helpers.disabled;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  else { stack1 = depth0.disabled; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.disabled) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n                        <div>\r\n                            <span class=\"date-value\">";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                            <em class=\"events-counter\"></em>\r\n\r\n                            <strong class=\"week-number\">";
  foundHelper = helpers.week_number;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.week_number; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</strong>\r\n\r\n                            <ul class=\"calendar-items\"></ul>\r\n                        </div>\r\n                    </td>\r\n                ";
  return buffer;}
function program3(depth0,data) {
  
  
  return " disabled";}

function program5(depth0,data) {
  
  
  return "Content loading";}

  buffer += "<section class=\"tablet-calendar\">\r\n    <table class=\"days-container\">\r\n        ";
  foundHelper = helpers.rows;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.rows; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </table>\r\n\r\n    <div class=\"overlay\">\r\n        <em>\r\n            <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\r\n            <img src=\"";
  foundHelper = helpers.loaderUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" />\r\n        </em>\r\n\r\n    </div>\r\n</section>";
  return buffer;});
templates['calendarMonth_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n    <section class=\"tablet-calendar\">\r\n        <table class=\"days-container\">\r\n            ";
  foundHelper = helpers.rows;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.rows; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </table>\r\n\r\n        <div class=\"overlay\">\r\n            <em>\r\n                <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\r\n                <img src=\"";
  foundHelper = helpers.loaderUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" />\r\n            </em>\r\n\r\n        </div>\r\n    </section>\r\n</li>\r\n\r\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                <tr class=\"row week-row\">\r\n                    ";
  foundHelper = helpers.cells;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  else { stack1 = depth0.cells; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.cells) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </tr>\r\n            ";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                        <td class=\"cell";
  foundHelper = helpers.disabled;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  else { stack1 = depth0.disabled; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.disabled) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n                            <div>\r\n                                <span class=\"date-value\">";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                                <em class=\"events-counter\"></em>\r\n\r\n                                <strong class=\"week-number\">";
  foundHelper = helpers.week_number;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.week_number; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</strong>\r\n\r\n                                <ul class=\"calendar-items\"></ul>\r\n                            </div>\r\n                        </td>\r\n                    ";
  return buffer;}
function program4(depth0,data) {
  
  
  return " disabled";}

function program6(depth0,data) {
  
  
  return "Content loading";}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['calendarWeek'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <td class=\"cell\">\r\n                        <div>\r\n                            <span class=\"date-value\">";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                            <em class=\"events-counter\"></em>\r\n\r\n                            <ul class=\"calendar-items\"></ul>\r\n                        </div>\r\n                    </td>\r\n                ";
  return buffer;}

function program3(depth0,data) {
  
  
  return "Content loading";}

  buffer += "<section class=\"tablet-calendar\">\r\n    <table class=\"days-container\">\r\n        <tbody>\r\n            <tr class=\"row week-row\">\r\n                ";
  foundHelper = helpers.days;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.days; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.days) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <div class=\"overlay\">\r\n        <em>\r\n            <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\r\n            <img src=\"";
  foundHelper = helpers.loaderUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" />\r\n        </em>\r\n\r\n    </div>\r\n</section>";
  return buffer;});
templates['calendarWeek_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n    <section class=\"tablet-calendar\">\r\n        <table class=\"days-container\">\r\n            <tbody>\r\n                <tr class=\"row week-row\">\r\n                    ";
  foundHelper = helpers.days;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.days; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.days) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <div class=\"overlay\">\r\n            <em>\r\n                <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\r\n                <img src=\"";
  foundHelper = helpers.loaderUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" />\r\n            </em>\r\n        </div>\r\n    </section>\r\n</li>\r\n\r\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                        <td class=\"cell\">\r\n                            <div>\r\n                                <span class=\"date-value\">";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                                <em class=\"events-counter\"></em>\r\n\r\n                                <ul class=\"calendar-items\"></ul>\r\n                            </div>\r\n                        </td>\r\n                    ";
  return buffer;}

function program4(depth0,data) {
  
  
  return "Content loading";}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['comment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>\r\n    <span>";
  foundHelper = helpers.commenter;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.commenter; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n</h2>\r\n<p class=\"message\">";
  foundHelper = helpers.comment;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.comment; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n<p class=\"time\">";
  foundHelper = helpers.pub_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pub_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>";
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
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"comment\">\r\n    <h2>\r\n        <span>";
  foundHelper = helpers.commenter;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.commenter; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n    </h2>\r\n    <p class=\"message\">";
  foundHelper = helpers.comment;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.comment; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n    <p class=\"time\">";
  foundHelper = helpers.pub_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pub_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n</li>\r\n\r\n";
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
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hour|hours";}

function program3(depth0,data) {
  
  
  return "Created by";}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                ";
  foundHelper = helpers.isClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  else { stack1 = depth0.isClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                ";
  foundHelper = helpers.isOpenResponses;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}); }
  else { stack1 = depth0.isOpenResponses; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isOpenResponses) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                ";
  foundHelper = helpers.isOpen;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)}); }
  else { stack1 = depth0.isOpen; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isOpen) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  return buffer;}
function program6(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <div class=\"button-inner\">\r\n                        <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                    </div>\r\n                ";
  return buffer;}
function program7(depth0,data) {
  
  
  return "Assigned";}

function program9(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <div class=\"button-inner\">\r\n                        <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                    </div>\r\n                ";
  return buffer;}
function program10(depth0,data) {
  
  
  return "Awaiting reply";}

function program12(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <div class=\"button-inner\">\r\n                        <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                    </div>\r\n                ";
  return buffer;}
function program13(depth0,data) {
  
  
  return "Make a bid";}

function program15(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                <div class=\"button-inner\">\r\n                    <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                </div>\r\n            ";
  return buffer;}
function program16(depth0,data) {
  
  
  return "Bidding closed";}

function program18(depth0,data) {
  
  
  return "Comment";}

  buffer += "<div class=\"element-container\">\r\n    <div class=\"strip\"></div>\r\n\r\n    <div class=\"info\">\r\n        <h2>\r\n            <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> - <span>";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> <em>(";
  foundHelper = helpers.deltaHours;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  stack1 = depth0.deltaHours;
  foundHelper = helpers.i18n;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "i18n", stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")</em>\r\n        </h2>\r\n\r\n        <h2>\r\n            <span>";
  foundHelper = helpers.primaryDepartment;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.primaryDepartment; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> - <span>";
  foundHelper = helpers.groupChainName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.groupChainName; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </h2>\r\n\r\n        <h3>\r\n            <span>";
  foundHelper = helpers.municipality;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.municipality; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </h3>\r\n\r\n        <h4>\r\n            <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.creator_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.creator_name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.creationTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.creationTime; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </h4>\r\n    </div>\r\n\r\n    <div class=\"buttons\">\r\n        <div class=\"button-element left type-button\">\r\n            <div class=\"button-background\">\r\n                <div></div>\r\n            </div>\r\n\r\n            ";
  foundHelper = helpers.biddingClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.program(5, program5, data),fn:self.noop}); }
  else { stack1 = depth0.biddingClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.biddingClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(5, program5, data),fn:self.noop}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            ";
  foundHelper = helpers.biddingClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)}); }
  else { stack1 = depth0.biddingClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.biddingClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n\r\n        <div class=\"button-element right comment-button\">\r\n            <div class=\"button-background\">\r\n                <div></div>\r\n            </div>\r\n\r\n            <div class=\"button-inner\">\r\n                <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;});
templates['eventDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hour|hours";}

function program3(depth0,data) {
  
  
  return "Created by";}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                ";
  foundHelper = helpers.isClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  else { stack1 = depth0.isClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                ";
  foundHelper = helpers.isOpenResponses;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}); }
  else { stack1 = depth0.isOpenResponses; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isOpenResponses) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                ";
  foundHelper = helpers.isOpen;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)}); }
  else { stack1 = depth0.isOpen; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isOpen) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  return buffer;}
function program6(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <div class=\"button-inner\">\r\n                        <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                    </div>\r\n                ";
  return buffer;}
function program7(depth0,data) {
  
  
  return "Assigned";}

function program9(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <div class=\"button-inner\">\r\n                        <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                    </div>\r\n                ";
  return buffer;}
function program10(depth0,data) {
  
  
  return "Awaiting reply";}

function program12(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <div class=\"button-inner\">\r\n                        <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                    </div>\r\n                ";
  return buffer;}
function program13(depth0,data) {
  
  
  return "Make a bid";}

function program15(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                <div class=\"button-inner\">\r\n                    </i><span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                </div>\r\n            ";
  return buffer;}
function program16(depth0,data) {
  
  
  return "Bidding closed";}

  buffer += "<div class=\"element-container\">\r\n    <div class=\"strip\"></div>\r\n\r\n    <div class=\"info\">\r\n        <h2>\r\n            <span>";
  foundHelper = helpers.primaryDepartment;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.primaryDepartment; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> - <span>";
  foundHelper = helpers.groupChainName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.groupChainName; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </h2>\r\n\r\n        <h2>\r\n            <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> - <span>";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> <em>(";
  foundHelper = helpers.deltaHours;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  stack1 = depth0.deltaHours;
  foundHelper = helpers.i18n;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "i18n", stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")</em>\r\n        </h2>\r\n\r\n        <h3>\r\n            <span>";
  foundHelper = helpers.municipality;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.municipality; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </h3>\r\n\r\n        <h4>\r\n            <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.creator_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.creator_name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.creationTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.creationTime; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </h4>\r\n    </div>\r\n\r\n    <div class=\"buttons\">\r\n        <div class=\"button-element single type-button\">\r\n            <div class=\"button-background\">\r\n                <div></div>\r\n            </div>\r\n\r\n            ";
  foundHelper = helpers.biddingClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.program(5, program5, data),fn:self.noop}); }
  else { stack1 = depth0.biddingClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.biddingClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(5, program5, data),fn:self.noop}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            ";
  foundHelper = helpers.biddingClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)}); }
  else { stack1 = depth0.biddingClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.biddingClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ul class=\"comments\">\r\n</ul>";
  return buffer;});
templates['eventDetailsHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hour|hours";}

  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " - ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " (";
  foundHelper = helpers.deltaHours;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  stack1 = depth0.deltaHours;
  foundHelper = helpers.i18n;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "i18n", stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")";
  return buffer;});
templates['event_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"event element\">\r\n    <div class=\"element-container\">\r\n        <div class=\"strip\"></div>\r\n\r\n        <div class=\"info\">\r\n            <h2>\r\n                <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> - <span>";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> <em>(";
  foundHelper = helpers.deltaHours;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  stack1 = depth0.deltaHours;
  foundHelper = helpers.i18n;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}) : helperMissing.call(depth0, "i18n", stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")</em>\r\n            </h2>\r\n\r\n            <h2>\r\n                <span>";
  foundHelper = helpers.primaryDepartment;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.primaryDepartment; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> - <span>";
  foundHelper = helpers.groupChainName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.groupChainName; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </h2>\r\n\r\n            <h3>\r\n                <span>";
  foundHelper = helpers.municipality;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.municipality; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </h3>\r\n\r\n            <h4>\r\n                <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.creator_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.creator_name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.creationTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.creationTime; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </h4>\r\n        </div>\r\n\r\n        <div class=\"buttons\">\r\n            <div class=\"button-element left type-button\">\r\n                <div class=\"button-background\">\r\n                    <div></div>\r\n                </div>\r\n\r\n                ";
  foundHelper = helpers.biddingClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.program(6, program6, data),fn:self.noop}); }
  else { stack1 = depth0.biddingClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.biddingClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(6, program6, data),fn:self.noop}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                ";
  foundHelper = helpers.biddingClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}); }
  else { stack1 = depth0.biddingClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.biddingClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </div>\r\n\r\n            <div class=\"button-element right comment-button\">\r\n                <div class=\"button-background\">\r\n                    <div></div>\r\n                </div>\r\n\r\n                <div class=\"button-inner\">\r\n                    <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(19, program19, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(19, program19, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n\r\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "hour|hours";}

function program4(depth0,data) {
  
  
  return "Created by";}

function program6(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    ";
  foundHelper = helpers.isClosed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  else { stack1 = depth0.isClosed; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isClosed) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                    ";
  foundHelper = helpers.isOpenResponses;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  else { stack1 = depth0.isOpenResponses; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isOpenResponses) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                    ";
  foundHelper = helpers.isOpen;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}); }
  else { stack1 = depth0.isOpen; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.isOpen) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;}
function program7(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                        <div class=\"button-inner\">\r\n                            <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                        </div>\r\n                    ";
  return buffer;}
function program8(depth0,data) {
  
  
  return "Assigned";}

function program10(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                        <div class=\"button-inner\">\r\n                            <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                        </div>\r\n                    ";
  return buffer;}
function program11(depth0,data) {
  
  
  return "Awaiting reply";}

function program13(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                        <div class=\"button-inner\">\r\n                            <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(14, program14, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(14, program14, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                        </div>\r\n                    ";
  return buffer;}
function program14(depth0,data) {
  
  
  return "Make a bid";}

function program16(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                    <div class=\"button-inner\">\r\n                        <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n                    </div>\r\n                ";
  return buffer;}
function program17(depth0,data) {
  
  
  return "Bidding closed";}

function program19(depth0,data) {
  
  
  return "Comment";}

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
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"reason\">";
  foundHelper = helpers.reason;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.reason; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>";
  return buffer;});
templates['inactivityEdit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"wireframe\">\r\n    <div class=\"side-container\">\r\n        <i class=\"icon wait inline\"></i>\r\n    </div>\r\n\r\n    <ul class=\"attributes\">\r\n        <li>\r\n            <strong>Status</strong>\r\n            <span>";
  foundHelper = helpers.approved;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.approved; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </li>\r\n        <li>\r\n            <strong>Date </strong>\r\n            <span>";
  foundHelper = helpers.start;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " – ";
  foundHelper = helpers.end;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </li>\r\n        <li>\r\n            <strong>Note</strong>\r\n            <span>";
  foundHelper = helpers.reason;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.reason; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"edit-button\">\r\n        Edit\r\n    </div>\r\n\r\n    <div class=\"remove-button\">\r\n        Remove\r\n    </div>\r\n</div>";
  return buffer;});
templates['inactivityEdit_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"working-hour element\">\r\n    <div class=\"wireframe\">\r\n        <div class=\"side-container\">\r\n            <i class=\"icon wait inline\"></i>\r\n        </div>\r\n\r\n        <ul class=\"attributes\">\r\n            <li>\r\n                <strong>Status</strong>\r\n                <span>";
  foundHelper = helpers.approved;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.approved; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n            <li>\r\n                <strong>Date </strong>\r\n                <span>";
  foundHelper = helpers.start;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " – ";
  foundHelper = helpers.end;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n            <li>\r\n                <strong>Note</strong>\r\n                <span>";
  foundHelper = helpers.reason;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.reason; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"edit-button\">\r\n            Edit\r\n        </div>\r\n\r\n        <div class=\"remove-button\">\r\n            Remove\r\n        </div>\r\n    </div>\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
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
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"inactivity\">\r\n    <span class=\"reason\">";
  foundHelper = helpers.reason;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.reason; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n</li>\r\n\r\n";
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
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"notification\">\r\n    <div>\r\n        <h2>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\r\n        <p class=\"message\">";
  foundHelper = helpers.summary;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.summary; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n        <p class=\"time\">";
  foundHelper = helpers.timestamp;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.timestamp; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</p>\r\n\r\n        <i class=\"mark\"></i>\r\n    </div>\r\n</li>\r\n\r\n";
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
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hour|hours";}

  buffer += "<div class=\"element-container\">\r\n    <div class=\"strip\"></div>\r\n\r\n    <div class=\"info\">\r\n        <h2>\r\n            <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> - <span>";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> <em>(";
  foundHelper = helpers.deltaHours;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  stack1 = depth0.deltaHours;
  foundHelper = helpers.i18n;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "i18n", stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")</em>\r\n        </h2>\r\n    </div>\r\n</div>";
  return buffer;});
templates['workingHourEdit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"wireframe\">\r\n    <div class=\"side-container\">\r\n        <ul class=\"attributes\">\r\n            <li>\r\n                <strong>Time</strong>\r\n                <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " to ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n            <li>\r\n                <strong>Status</strong>\r\n                <span>";
  foundHelper = helpers.available;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.available; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n            <li>\r\n                <strong>Date</strong>\r\n                <span>";
  foundHelper = helpers.start_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  foundHelper = helpers.end_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n            <li>\r\n                <strong>Repeat </strong>\r\n                <span>";
  foundHelper = helpers.repeat;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.repeat; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <ul class=\"columns weekdays\">\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"edit-button\">\r\n        Edit\r\n    </div>\r\n\r\n    <div class=\"remove-button\">\r\n        Remove\r\n    </div>\r\n</div>";
  return buffer;});
templates['workingHourEdit_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"working-hour element\">\r\n    <div class=\"wireframe\">\r\n        <div class=\"side-container\">\r\n            <ul class=\"attributes\">\r\n                <li>\r\n                    <strong>Time</strong>\r\n                    <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " to ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                </li>\r\n                <li>\r\n                    <strong>Status</strong>\r\n                    <span>";
  foundHelper = helpers.available;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.available; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                </li>\r\n                <li>\r\n                    <strong>Date</strong>\r\n                    <span>";
  foundHelper = helpers.start_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  foundHelper = helpers.end_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                </li>\r\n                <li>\r\n                    <strong>Repeat </strong>\r\n                    <span>";
  foundHelper = helpers.repeat;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.repeat; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <ul class=\"columns weekdays\">\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"edit-button\">\r\n            Edit\r\n        </div>\r\n\r\n        <div class=\"remove-button\">\r\n            Remove\r\n        </div>\r\n    </div>\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['workingHour_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<li id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"working-hour element\">\r\n    <div class=\"element-container\">\r\n        <div class=\"strip\"></div>\r\n\r\n        <div class=\"info\">\r\n            <h2>\r\n                <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> - <span>";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> <em>(";
  foundHelper = helpers.deltaHours;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  stack1 = depth0.deltaHours;
  foundHelper = helpers.i18n;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}) : helperMissing.call(depth0, "i18n", stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")</em>\r\n            </h2>\r\n        </div>\r\n    </div>\r\n</li>\r\n\r\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "hour|hours";}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
})();