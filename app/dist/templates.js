(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['availability'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"user\"></span><span class=\"time\">";
  foundHelper = helpers.start;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " - ";
  foundHelper = helpers.end;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>";
  return buffer;});
templates['availability_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\" class=\"working-hour element\">\r\n    <span class=\"user\"></span><span class=\"time\">";
  foundHelper = helpers.start;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " - ";
  foundHelper = helpers.end;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
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
  
  
  return "Loading content";}

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
  
  
  return "Loading content";}

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
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Loading content";}

  buffer += "<ul class=\"period-groups\">\r\n</ul>\r\n\r\n<div class=\"overlay\">\r\n    <em>\r\n        <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\r\n        <img src=\"";
  foundHelper = helpers.loaderUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" />\r\n    </em>\r\n</div>";
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
  buffer += escapeExpression(stack1) + "\">\r\n    <ul class=\"period-groups\">\r\n    </ul>\r\n\r\n    <div class=\"overlay\">\r\n        <em>\r\n            <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\r\n            <img src=\"";
  foundHelper = helpers.loaderUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" />\r\n        </em>\r\n    </div>\r\n</li>\r\n\r\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "Loading content";}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['eventUser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"indicator\"></div><span>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>";
  return buffer;});
templates['eventUser_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\">\r\n    <div class=\"indicator\"></div><span>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
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
templates['groups'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n    ";
  foundHelper = helpers.pd;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.pd; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.pd) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  foundHelper = helpers.groups;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </optgroup>\r\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "<optgroup label=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"options-pd options-pd-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n        ";
  foundHelper = helpers.group;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  else { stack1 = depth0.group; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "<option value=\"";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.treeName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.treeName; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</option>";
  return buffer;}

  buffer += "<select>\r\n";
  foundHelper = helpers.tree;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.tree; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.tree) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;});
templates['groupsResourceNeed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n    <li class=\"group-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n        <span class=\"group-title\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        <ul class=\"availabilities\">\r\n        </ul>\r\n    </li>\r\n";
  return buffer;}

  buffer += "<ul>\r\n";
  foundHelper = helpers.groups;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
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
templates['period'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Groups";}

function program3(depth0,data) {
  
  
  return "Templates";}

function program5(depth0,data) {
  
  
  return "Start date";}

function program7(depth0,data) {
  
  
  return "End date";}

function program9(depth0,data) {
  
  
  return "PD";}

function program11(depth0,data) {
  
  
  return "Edit";}

  buffer += "<div class=\"container-top\">\r\n    <dl>\r\n        <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n        <dd class=\"groups-list\"></dd>\r\n\r\n        <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n        <dd class=\"templates-list\"></dd>\r\n\r\n        <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n        <dd>";
  foundHelper = helpers.start_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</dd>\r\n\r\n        <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n        <dd>";
  foundHelper = helpers.end_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</dd>\r\n\r\n        <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n        <dd class=\"primary_department-value\"></dd>\r\n    </dl>\r\n\r\n    <div class=\"percentage\">\r\n        <canvas></canvas>\r\n        <span class=\"value\"></span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-bottom\">\r\n    <ul class=\"operations\">\r\n        <li class=\"operation\">\r\n            <span class=\"edit-button\">";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n        </li>\r\n    </ul>\r\n</div>";
  return buffer;});
templates['periodBlock'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n    <span>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span> <em>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " – ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</em>\r\n\r\n    ";
  return buffer;}
function program2(depth0,data) {
  
  
  return "Time range";}

function program4(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n    <li>\r\n        <span>";
  foundHelper = helpers.groupName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.groupName; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n\r\n        <ul class=\"hours\">\r\n            ";
  foundHelper = helpers.hours;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  else { stack1 = depth0.hours; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.hours) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n    </li>\r\n    ";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n            <li>\r\n                <em>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " – ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</em> <span>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n\r\n            ";
  return buffer;}

  buffer += "<div class=\"block-info\">\r\n    ";
  foundHelper = helpers.block;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.block; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.block) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n\r\n<ul class=\"groups\">\r\n    ";
  foundHelper = helpers.groups;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;});
templates['periodBlockWeek'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<tr>\r\n    <td class=\"header\">\r\n        <div class=\"inner\">\r\n            <strong class=\"skill_name-value\"></strong><span><span class=\"matched_employees-value\">0</span> of <span class=\"num_employees-value\">";
  foundHelper = helpers.num_employees;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span></span>\r\n        </div>\r\n    </td>\r\n\r\n    <td class=\"content\">\r\n        <div class=\"inner\">\r\n            <ul class=\"employees\">\r\n            </ul>\r\n\r\n            <div class=\"empty\">\r\n                <div class=\"indicator\"></div><span><span class=\"empty_slots-value\">";
  foundHelper = helpers.num_employees;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> empty slots</span>\r\n            </div>\r\n        </div>\r\n    </td>\r\n\r\n    <td class=\"footer\">\r\n        <div class=\"inner\">\r\n            <span><span class=\"matched_hours-value\">0h</span> of <span class=\"total_hours-value\">";
  foundHelper = helpers['total_hours-value'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['total_hours-value']; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span></span>\r\n        </div>\r\n    </td>\r\n</tr>";
  return buffer;});
templates['periodBlockWeek_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n<table id=\"element-view-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "-";
  foundHelper = helpers.cid;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n    <tr>\r\n        <td class=\"header\">\r\n            <div class=\"inner\">\r\n                <strong class=\"skill_name-value\"></strong><span><span class=\"matched_employees-value\">0</span> of <span class=\"num_employees-value\">";
  foundHelper = helpers.num_employees;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span></span>\r\n            </div>\r\n        </td>\r\n\r\n        <td class=\"content\">\r\n            <div class=\"inner\">\r\n                <ul class=\"employees\">\r\n                </ul>\r\n\r\n                <div class=\"empty\">\r\n                    <div class=\"indicator\"></div><span><span class=\"empty_slots-value\">";
  foundHelper = helpers.num_employees;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> empty slots</span>\r\n                </div>\r\n            </div>\r\n        </td>\r\n\r\n        <td class=\"footer\">\r\n            <div class=\"inner\">\r\n                <span><span class=\"matched_hours-value\">0h</span> of <span class=\"total_hours-value\">";
  foundHelper = helpers['total_hours-value'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['total_hours-value']; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span></span>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n";
  return buffer;}

  buffer += "<div>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</div>";
  return buffer;});
templates['periodGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<h1 class=\"title\">\r\n    <span class=\"group-name\"></span>\r\n</h1>\r\n\r\n<ul class=\"time-groups\">\r\n</ul>\r\n\r\n<ul class=\"children-groups\">\r\n</ul>";});
templates['periodGroup_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\">\r\n    <h1 class=\"title\">\r\n        <span class=\"group-name\"></span>\r\n    </h1>\r\n\r\n    <ul class=\"time-groups\">\r\n    </ul>\r\n\r\n    <ul class=\"children-groups\">\r\n    </ul>\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['periodMonth'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1 class=\"title\">\r\n    ";
  foundHelper = helpers.month;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.month; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\r\n</h1>\r\n\r\n<ul class=\"periods\">\r\n</ul>";
  return buffer;});
templates['period_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\" class=\"working-hour element\">\r\n    <div class=\"container-top\">\r\n        <dl>\r\n            <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n            <dd class=\"groups-list\"></dd>\r\n\r\n            <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n            <dd class=\"templates-list\"></dd>\r\n\r\n            <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n            <dd>";
  foundHelper = helpers.start_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</dd>\r\n\r\n            <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n            <dd>";
  foundHelper = helpers.end_date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</dd>\r\n\r\n            <dt>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\r\n            <dd class=\"primary_department-value\"></dd>\r\n        </dl>\r\n\r\n        <div class=\"percentage\">\r\n            <canvas></canvas>\r\n            <span class=\"value\"></span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container-bottom\">\r\n        <ul class=\"operations\">\r\n            <li class=\"operation\">\r\n                <span class=\"edit-button\">";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</li>\r\n\r\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "Groups";}

function program4(depth0,data) {
  
  
  return "Templates";}

function program6(depth0,data) {
  
  
  return "Start date";}

function program8(depth0,data) {
  
  
  return "End date";}

function program10(depth0,data) {
  
  
  return "PD";}

function program12(depth0,data) {
  
  
  return "Edit";}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['primaryDepartments'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n    <option value=\"";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</option>\r\n";
  return buffer;}

  buffer += "<select>\r\n";
  foundHelper = helpers.primaryDepartments;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.primaryDepartments; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.primaryDepartments) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;});
templates['resourceBlock'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n            <li class=\"group-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n                <span class=\"available\">";
  foundHelper = helpers.available;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.available; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>/<span class=\"required\">";
  foundHelper = helpers.num_employees;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n        ";
  return buffer;}

  buffer += "<div class=\"inner\">\r\n    <ul class=\"info\">\r\n        ";
  foundHelper = helpers.groups;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n</div>";
  return buffer;});
templates['resourceBlock_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\" class=\"working-hour element\">\r\n    <div class=\"inner\">\r\n        <ul class=\"info\">\r\n            ";
  foundHelper = helpers.groups;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n    </div>\r\n</li>\r\n\r\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n                <li class=\"group-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n                    <span class=\"available\">";
  foundHelper = helpers.available;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.available; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>/<span class=\"required\">";
  foundHelper = helpers.num_employees;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                </li>\r\n            ";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['resourceNeed'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
templates['resourceNeedEdit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Time";}

function program3(depth0,data) {
  
  
  return "to";}

function program5(depth0,data) {
  
  
  return "Skill";}

function program7(depth0,data) {
  
  
  return "Employees";}

function program9(depth0,data) {
  
  
  return "Type";}

function program11(depth0,data) {
  
  
  return "PD";}

function program13(depth0,data) {
  
  
  return "Edit";}

function program15(depth0,data) {
  
  
  return "Remove";}

function program17(depth0,data) {
  
  
  return "Templates";}

function program19(depth0,data) {
  
  
  return "No templates attached";}

  buffer += "<input class=\"resource-need-check\" type=\"checkbox\" />\r\n\r\n<div class=\"wireframe\">\r\n    <div class=\"side-container\">\r\n        <ul class=\"attributes\">\r\n            <li>\r\n                <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\r\n                <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n            <li>\r\n                <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\r\n                <span class=\"skill-value\"></span>\r\n            </li>\r\n            <li>\r\n                <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\r\n                <span>";
  foundHelper = helpers.num_employees;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n            <li>\r\n                <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\r\n                <span>";
  foundHelper = helpers.employee_type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.employee_type; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n            </li>\r\n            <li>\r\n                <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\r\n                <span class=\"pd-value\"></span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <ul class=\"columns weekdays\">\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n\r\n        <li class=\"weekday\">\r\n            <i class=\"icon inline unchecked\"></i>\r\n            <i class=\"icon inline checked\"></i>\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"edit-button\">\r\n        ";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n\r\n    <div class=\"remove-button\">\r\n        ";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n\r\n    <div class=\"templates-names\">\r\n        <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</strong>\r\n        <span></span>\r\n        <i>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(19, program19, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(19, program19, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</i>\r\n    </div>\r\n</div>";
  return buffer;});
templates['resourceNeedEdit_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\" class=\"working-hour element\">\r\n    <input class=\"resource-need-check\" type=\"checkbox\" />\r\n\r\n    <div class=\"wireframe\">\r\n        <div class=\"side-container\">\r\n            <ul class=\"attributes\">\r\n                <li>\r\n                    <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\r\n                    <span>";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                </li>\r\n                <li>\r\n                    <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\r\n                    <span class=\"skill-value\"></span>\r\n                </li>\r\n                <li>\r\n                    <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\r\n                    <span>";
  foundHelper = helpers.num_employees;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                </li>\r\n                <li>\r\n                    <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\r\n                    <span>";
  foundHelper = helpers.employee_type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.employee_type; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n                </li>\r\n                <li>\r\n                    <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\r\n                    <span class=\"pd-value\"></span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <ul class=\"columns weekdays\">\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n\r\n            <li class=\"weekday\">\r\n                <i class=\"icon inline unchecked\"></i>\r\n                <i class=\"icon inline checked\"></i>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"edit-button\">\r\n            ";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(14, program14, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(14, program14, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n\r\n        <div class=\"remove-button\">\r\n            ";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n\r\n        <div class=\"templates-names\">\r\n            <strong>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</strong>\r\n            <span></span>\r\n            <i>";
  foundHelper = helpers.i18n;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(20, program20, data)}); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(20, program20, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</i>\r\n        </div>\r\n    </div>\r\n</li>\r\n\r\n";
  return buffer;}
function program2(depth0,data) {
  
  
  return "Time";}

function program4(depth0,data) {
  
  
  return "to";}

function program6(depth0,data) {
  
  
  return "Skill";}

function program8(depth0,data) {
  
  
  return "Employees";}

function program10(depth0,data) {
  
  
  return "Type";}

function program12(depth0,data) {
  
  
  return "PD";}

function program14(depth0,data) {
  
  
  return "Edit";}

function program16(depth0,data) {
  
  
  return "Remove";}

function program18(depth0,data) {
  
  
  return "Templates";}

function program20(depth0,data) {
  
  
  return "No templates attached";}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['resourceNeeds'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n    <option value=\"";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " - ";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</option>\r\n";
  return buffer;}

  buffer += "<select>\r\n";
  foundHelper = helpers.resourceNeeds;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.resourceNeeds; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.resourceNeeds) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;});
templates['resourceNeedTimeGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"time-range\">\r\n    <span class=\"time top start-time-value\">";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n    <span class=\"time bottom end-time-value\">";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n</div>\r\n\r\n<ul class=\"resource-needs-rows\">\r\n</ul>";
  return buffer;});
templates['resourceNeedTimeGroup_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\">\r\n    <div class=\"time-range\">\r\n        <span class=\"time top start-time-value\">";
  foundHelper = helpers.start_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n        <span class=\"time bottom end-time-value\">";
  foundHelper = helpers.end_time;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n    </div>\r\n\r\n    <ul class=\"resource-needs-rows\">\r\n    </ul>\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['resourceNeedWeek'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<table class=\"day-blocks header\">\r\n    <tbody>\r\n        <tr>\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n        </tr>\r\n\r\n        <tr class=\"bottom-shadow\">\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<table class=\"day-blocks content\">\r\n    <tbody>\r\n        <tr>\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<table class=\"day-blocks footer\">\r\n    <tbody>\r\n        <tr>\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n\r\n            <td class=\"day-block\">\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>";});
templates['resourceNeedWeek_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\">\r\n    <table class=\"day-blocks header\">\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n            </tr>\r\n\r\n            <tr class=\"bottom-shadow\">\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <table class=\"day-blocks content\">\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <table class=\"day-blocks footer\">\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n\r\n                <td class=\"day-block\">\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['resourceNeed_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
templates['scale'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n    <li class=\"date\">\r\n        <span>\r\n            <span class=\"date\">";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span> <span class=\"time\">00:00</span>\r\n        </span>\r\n    </li>\r\n\r\n    ";
  foundHelper = helpers.last;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.program(2, program2, data),fn:self.noop}); }
  else { stack1 = depth0.last; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.last) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(2, program2, data),fn:self.noop}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    ";
  return buffer;}
function program2(depth0,data) {
  
  
  return "\r\n    \r\n    <li class=\"date\">\r\n        <span>\r\n            <span class=\"time\">06:00</span>\r\n        </span>\r\n    </li>\r\n    <li class=\"date\">\r\n        <span>\r\n            <span class=\"time\">12:00</span>\r\n        </span>\r\n    </li>\r\n    <li class=\"date\">\r\n        <span>\r\n            <span class=\"time\">18:00</span>\r\n        </span>\r\n    </li>\r\n\r\n    ";}

  buffer += "<ul>\r\n    ";
  foundHelper = helpers.scale;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.scale; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.scale) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['skillColumns'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n    <li class=\"skill-column-";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" style=\"width: ";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\">\r\n        <ul class=\"blocks\">\r\n        </ul>\r\n    </li>\r\n\r\n    ";
  return buffer;}

  buffer += "<ul>\r\n    ";
  foundHelper = helpers.skills;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.skills; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.skills) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;});
templates['skills'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n    <option value=\"";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</option>\r\n";
  return buffer;}

  buffer += "<select>\r\n";
  foundHelper = helpers.skills;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.skills; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.skills) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;});
templates['template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n<ul class=\"dropdown\" style=\"display: none;\">\r\n    <li>Edit</li>\r\n    <li>Delete</li>\r\n</ul>";
  return buffer;});
templates['templates'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n    <option value=\"";
  foundHelper = helpers.pk;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"options-pd options-pd-";
  foundHelper = helpers.primary_department;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.primary_department; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</option>\r\n";
  return buffer;}

  buffer += "<select>\r\n";
  foundHelper = helpers.templates;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.templates; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.templates) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;});
templates['template_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "\" class=\"template\">\r\n    <span>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "</span>\r\n    <ul class=\"dropdown\" style=\"display: none;\">\r\n        <li>Edit</li>\r\n        <li>Delete</li>\r\n    </ul>\r\n</li>\r\n\r\n";
  return buffer;}

  buffer += "<ul>\r\n\r\n";
  foundHelper = helpers.elements;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>";
  return buffer;});
templates['timelineSkills'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n\r\n    <li style=\"width: ";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\">\r\n        ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\r\n    </li>\r\n\r\n    ";
  return buffer;}

  buffer += "<ul>\r\n    ";
  foundHelper = helpers.skills;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.skills; stack1 = typeof stack1 === functionType ? stack1.call(depth0) : stack1; }
  if (!helpers.skills) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;});
})();