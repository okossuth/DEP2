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
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
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
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span>";
  foundHelper = helpers.group;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.group; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span><span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " – ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>";
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
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"event element\">\r\n   <span>";
  foundHelper = helpers.group;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.group; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span><span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " – ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n</li>\r\n\r\n";
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
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
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
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
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
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " – ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>";
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
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"working-hour element\">\r\n    <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " – ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
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
})();