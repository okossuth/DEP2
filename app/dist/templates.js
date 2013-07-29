(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['availability'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"user\"></span><span class=\"time\">";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });
templates['availability_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"working-hour element\">\n    <span class=\"user\"></span><span class=\"time\">";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['calendarMonth'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n            <tr class=\"row week-row\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.cells) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.cells; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.cells) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </tr>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <td class=\"cell";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.disabled) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.disabled; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.disabled) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                        <div>\n                            <span class=\"date-value\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                            <em class=\"events-counter\"></em>\n\n                            <strong class=\"week-number\">";
  if (stack1 = helpers.week_number) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.week_number; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong>\n\n                            <ul class=\"calendar-items\"></ul>\n                        </div>\n                    </td>\n                ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return " disabled";
  }

function program5(depth0,data) {
  
  
  return "Loading content";
  }

  buffer += "<section class=\"tablet-calendar\">\n    <table class=\"days-container\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.rows) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.rows; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n\n    <div class=\"overlay\">\n        <em>\n            <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\n            <img src=\"";
  if (stack1 = helpers.loaderUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </em>\n\n    </div>\n</section>";
  return buffer;
  });
templates['calendarMonth_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <section class=\"tablet-calendar\">\n        <table class=\"days-container\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.rows) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.rows; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.rows) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </table>\n\n        <div class=\"overlay\">\n            <em>\n                <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\n                <img src=\"";
  if (stack1 = helpers.loaderUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            </em>\n\n        </div>\n    </section>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <tr class=\"row week-row\">\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.cells) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.cells; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.cells) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tr>\n            ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                        <td class=\"cell";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.disabled) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.disabled; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.disabled) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                            <div>\n                                <span class=\"date-value\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                                <em class=\"events-counter\"></em>\n\n                                <strong class=\"week-number\">";
  if (stack1 = helpers.week_number) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.week_number; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong>\n\n                                <ul class=\"calendar-items\"></ul>\n                            </div>\n                        </td>\n                    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " disabled";
  }

function program6(depth0,data) {
  
  
  return "Loading content";
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['calendarWeek'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Loading content";
  }

  buffer += "<ul class=\"period-groups\">\n</ul>\n\n<ul class=\"groups-list\">\n</ul>\n\n<div class=\"overlay\">\n    <em>\n        <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\n        <img src=\"";
  if (stack1 = helpers.loaderUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n    </em>\n</div>";
  return buffer;
  });
templates['calendarWeek_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <ul class=\"period-groups\">\n    </ul>\n\n    <ul class=\"groups-list\">\n    </ul>\n\n    <div class=\"overlay\">\n        <em>\n            <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\n            <img src=\"";
  if (stack1 = helpers.loaderUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </em>\n    </div>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Loading content";
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['employeeActivity'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"indicator\"></div><span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " – ";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });
templates['employeeActivity_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"working-hour element\">\n    <div class=\"indicator\"></div><span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " – ";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['employeeRowSkill'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"side-block\">\n    <div class=\"inner\">\n        <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n</div>\n\n<table class=\"day-blocks content\">\n    <tbody>\n        <tr>\n            <td class=\"day-block container\">\n                <div class=\"inner\">\n                    <ul class=\"activities\">\n                    </ul>\n                </div>\n            </td>\n\n            <td class=\"day-block container\">\n                <div class=\"inner\">\n                    <ul class=\"activities\">\n                    </ul>\n                </div>\n            </td>\n\n            <td class=\"day-block container\">\n                <div class=\"inner\">\n                    <ul class=\"activities\">\n                    </ul>\n                </div>\n            </td>\n\n            <td class=\"day-block container\">\n                <div class=\"inner\">\n                    <ul class=\"activities\">\n                    </ul>\n                </div>\n            </td>\n\n            <td class=\"day-block container\">\n                <div class=\"inner\">\n                    <ul class=\"activities\">\n                    </ul>\n                </div>\n            </td>\n\n            <td class=\"day-block container\">\n                <div class=\"inner\">\n                    <ul class=\"activities\">\n                    </ul>\n                </div>\n            </td>\n\n            <td class=\"day-block container\">\n                <div class=\"inner\">\n                    <ul class=\"activities\">\n                    </ul>\n                </div>\n            </td>\n        </tr>\n\n        <tr class=\"bottom-shadow\">\n        </tr>\n    </tbody>\n</table>";
  return buffer;
  });
templates['employeeRowSkill_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"working-hour element\">\n    <div class=\"side-block\">\n        <div class=\"inner\">\n            <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n    </div>\n\n    <table class=\"day-blocks content\">\n        <tbody>\n            <tr>\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"activities\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"activities\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"activities\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"activities\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"activities\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"activities\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"activities\">\n                        </ul>\n                    </div>\n                </td>\n            </tr>\n\n            <tr class=\"bottom-shadow\">\n            </tr>\n        </tbody>\n    </table>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['eventUser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"indicator\"></div><span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });
templates['eventUser_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"indicator\"></div><span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['groupFilter'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });
templates['groupFilter_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['groups'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.pd) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.pd; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.pd) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </optgroup>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<optgroup label=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"options-pd options-pd-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.group) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.group; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.group) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<option value=\"";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.treeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.treeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>";
  return buffer;
  }

  buffer += "<select>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.tree) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.tree; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.tree) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>";
  return buffer;
  });
templates['groupsResourceNeed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"group-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <span class=\"group-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <ul class=\"availabilities\">\n        </ul>\n    </li>\n";
  return buffer;
  }

  buffer += "<ul>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });
templates['notification'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\n    <h2>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    <p class=\"message\">";
  if (stack1 = helpers.summary) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.summary; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p class=\"time\">";
  if (stack1 = helpers.timestamp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timestamp; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n    <i class=\"mark\"></i>\n</div>";
  return buffer;
  });
templates['notificationMessage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"notification-message\">\n    <div class=\"background\"></div>\n    <i class=\"icon-huge ok\"></i>\n    <span>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>";
  return buffer;
  });
templates['notification_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"notification\">\n    <div>\n        <h2>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n        <p class=\"message\">";
  if (stack1 = helpers.summary) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.summary; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <p class=\"time\">";
  if (stack1 = helpers.timestamp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timestamp; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n        <i class=\"mark\"></i>\n    </div>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['period'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Groups";
  }

function program3(depth0,data) {
  
  
  return "Templates";
  }

function program5(depth0,data) {
  
  
  return "Start date";
  }

function program7(depth0,data) {
  
  
  return "End date";
  }

function program9(depth0,data) {
  
  
  return "PD";
  }

function program11(depth0,data) {
  
  
  return "Edit";
  }

  buffer += "<div class=\"container-top\">\n    <dl>\n        <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n        <dd class=\"groups-list\"></dd>\n\n        <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n        <dd class=\"templates-list\"></dd>\n\n        <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n        <dd>";
  if (stack1 = helpers.start_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n\n        <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n        <dd>";
  if (stack1 = helpers.end_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n\n        <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n        <dd class=\"primary_department-value\"></dd>\n    </dl>\n\n    <div class=\"percentage\">\n        <canvas></canvas>\n        <span class=\"value\"></span>\n    </div>\n</div>\n\n<div class=\"container-bottom\">\n    <ul class=\"operations\">\n        <li class=\"operation\">\n            <span class=\"edit-button\">";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </li>\n    </ul>\n</div>";
  return buffer;
  });
templates['periodBlock'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n    <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span> <em>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " – ";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</em>\n\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Time range";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n    <li>\n        <span>";
  if (stack1 = helpers.groupName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.groupName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n\n        <ul class=\"hours\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.hours) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.hours; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.hours) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    </li>\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n            <li>\n                <em>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " – ";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</em> <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n\n            ";
  return buffer;
  }

  buffer += "<div class=\"block-info\">\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.block) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.block; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.block) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<ul class=\"groups\">\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });
templates['periodBlockWeek'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<tr>\n    <td class=\"header\">\n        <div class=\"inner\">\n            <strong class=\"skill_name-value\"></strong><span><span class=\"matched_employees-value\">0</span> of <span class=\"num_employees-value\">";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></span>\n        </div>\n    </td>\n\n    <td class=\"content\">\n        <div class=\"inner\">\n            <ul class=\"employees\">\n            </ul>\n\n            <div class=\"empty\">\n                <div class=\"indicator\"></div><span><span class=\"empty_slots-value\">";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> empty slots</span>\n            </div>\n        </div>\n    </td>\n\n    <td class=\"footer\">\n        <div class=\"inner\">\n            <span><span class=\"matched_hours-value\">0h</span> of <span class=\"total_hours-value\">";
  if (stack1 = helpers['total_hours-value']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['total_hours-value']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></span>\n        </div>\n    </td>\n</tr>";
  return buffer;
  });
templates['periodBlockWeek_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<table id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <tr>\n        <td class=\"header\">\n            <div class=\"inner\">\n                <strong class=\"skill_name-value\"></strong><span><span class=\"matched_employees-value\">0</span> of <span class=\"num_employees-value\">";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></span>\n            </div>\n        </td>\n\n        <td class=\"content\">\n            <div class=\"inner\">\n                <ul class=\"employees\">\n                </ul>\n\n                <div class=\"empty\">\n                    <div class=\"indicator\"></div><span><span class=\"empty_slots-value\">";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> empty slots</span>\n                </div>\n            </div>\n        </td>\n\n        <td class=\"footer\">\n            <div class=\"inner\">\n                <span><span class=\"matched_hours-value\">0h</span> of <span class=\"total_hours-value\">";
  if (stack1 = helpers['total_hours-value']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['total_hours-value']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></span>\n            </div>\n        </td>\n    </tr>\n</table>\n\n";
  return buffer;
  }

  buffer += "<div>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>";
  return buffer;
  });
templates['periodGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"title\">\n    <span class=\"group-name\"></span>\n</h1>\n\n<ul class=\"time-groups\">\n</ul>\n\n<ul class=\"skill-groups\">\n</ul>\n\n<ul class=\"children-groups\">\n</ul>";
  });
templates['periodGroup_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <h1 class=\"title\">\n        <span class=\"group-name\"></span>\n    </h1>\n\n    <ul class=\"time-groups\">\n    </ul>\n\n    <ul class=\"skill-groups\">\n    </ul>\n\n    <ul class=\"children-groups\">\n    </ul>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['periodMonth'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1 class=\"title\">\n    ";
  if (stack1 = helpers.month) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.month; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</h1>\n\n<ul class=\"periods\">\n</ul>";
  return buffer;
  });
templates['period_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"working-hour element\">\n    <div class=\"container-top\">\n        <dl>\n            <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n            <dd class=\"groups-list\"></dd>\n\n            <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n            <dd class=\"templates-list\"></dd>\n\n            <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n            <dd>";
  if (stack1 = helpers.start_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n\n            <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n            <dd>";
  if (stack1 = helpers.end_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n\n            <dt>";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dt>\n            <dd class=\"primary_department-value\"></dd>\n        </dl>\n\n        <div class=\"percentage\">\n            <canvas></canvas>\n            <span class=\"value\"></span>\n        </div>\n    </div>\n\n    <div class=\"container-bottom\">\n        <ul class=\"operations\">\n            <li class=\"operation\">\n                <span class=\"edit-button\">";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n            </li>\n        </ul>\n    </div>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Groups";
  }

function program4(depth0,data) {
  
  
  return "Templates";
  }

function program6(depth0,data) {
  
  
  return "Start date";
  }

function program8(depth0,data) {
  
  
  return "End date";
  }

function program10(depth0,data) {
  
  
  return "PD";
  }

function program12(depth0,data) {
  
  
  return "Edit";
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['primaryDepartments'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=\"";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n";
  return buffer;
  }

  buffer += "<select>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.primaryDepartments) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.primaryDepartments; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.primaryDepartments) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>";
  return buffer;
  });
templates['resourceBlock'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"group-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                <span class=\"available\">";
  if (stack1 = helpers.available) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.available; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>/<span class=\"required\">";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n        ";
  return buffer;
  }

  buffer += "<div class=\"inner\">\n    <ul class=\"info\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;
  });
templates['resourceBlock_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"working-hour element\">\n    <div class=\"inner\">\n        <ul class=\"info\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.groups) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.groups; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.groups) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    </div>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li class=\"group-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <span class=\"available\">";
  if (stack1 = helpers.available) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.available; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>/<span class=\"required\">";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </li>\n            ";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['resourceNeed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hour|hours";
  }

  buffer += "<div class=\"element-container\">\n    <div class=\"strip\"></div>\n\n    <div class=\"info\">\n        <h2>\n            <span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> - <span>";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> <em>(";
  if (stack1 = helpers.deltaHours) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.i18n || depth0.i18n),stack1 ? stack1.call(depth0, depth0.deltaHours, options) : helperMissing.call(depth0, "i18n", depth0.deltaHours, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ")</em>\n        </h2>\n    </div>\n</div>";
  return buffer;
  });
templates['resourceNeedEdit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Time";
  }

function program3(depth0,data) {
  
  
  return "to";
  }

function program5(depth0,data) {
  
  
  return "Skill";
  }

function program7(depth0,data) {
  
  
  return "Employees";
  }

function program9(depth0,data) {
  
  
  return "Type";
  }

function program11(depth0,data) {
  
  
  return "PD";
  }

function program13(depth0,data) {
  
  
  return "Edit";
  }

function program15(depth0,data) {
  
  
  return "Remove";
  }

function program17(depth0,data) {
  
  
  return "Templates";
  }

function program19(depth0,data) {
  
  
  return "No templates attached";
  }

  buffer += "<input class=\"resource-need-check\" type=\"checkbox\" />\n\n<div class=\"wireframe\">\n    <div class=\"side-container\">\n        <ul class=\"attributes\">\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n                <span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                <span class=\"skill-value\"></span>\n            </li>\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                <span>";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                <span>";
  if (stack1 = helpers.employee_type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.employee_type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                <span class=\"pd-value\"></span>\n            </li>\n        </ul>\n    </div>\n\n    <ul class=\"columns weekdays\">\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n    </ul>\n\n    <div class=\"edit-button\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"remove-button\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"templates-names\">\n        <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</strong>\n        <span></span>\n        <i>";
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</i>\n    </div>\n</div>";
  return buffer;
  });
templates['resourceNeedEdit_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"working-hour element\">\n    <input class=\"resource-need-check\" type=\"checkbox\" />\n\n    <div class=\"wireframe\">\n        <div class=\"side-container\">\n            <ul class=\"attributes\">\n                <li>\n                    <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n                    <span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </li>\n                <li>\n                    <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                    <span class=\"skill-value\"></span>\n                </li>\n                <li>\n                    <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                    <span>";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </li>\n                <li>\n                    <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                    <span>";
  if (stack1 = helpers.employee_type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.employee_type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </li>\n                <li>\n                    <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                    <span class=\"pd-value\"></span>\n                </li>\n            </ul>\n        </div>\n\n        <ul class=\"columns weekdays\">\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n        </ul>\n\n        <div class=\"edit-button\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"remove-button\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"templates-names\">\n            <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</strong>\n            <span></span>\n            <i>";
  options = {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</i>\n        </div>\n    </div>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Time";
  }

function program4(depth0,data) {
  
  
  return "to";
  }

function program6(depth0,data) {
  
  
  return "Skill";
  }

function program8(depth0,data) {
  
  
  return "Employees";
  }

function program10(depth0,data) {
  
  
  return "Type";
  }

function program12(depth0,data) {
  
  
  return "PD";
  }

function program14(depth0,data) {
  
  
  return "Edit";
  }

function program16(depth0,data) {
  
  
  return "Remove";
  }

function program18(depth0,data) {
  
  
  return "Templates";
  }

function program20(depth0,data) {
  
  
  return "No templates attached";
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['resourceNeedSkillGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<strong><span class=\"start_time-value\">";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> – <span class=\"end_time-value\">";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></strong><span><span class=\"matched_employees-value\">";
  if (stack1 = helpers.matched_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.matched_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> of <span class=\"num_employees-value\">";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></span>";
  return buffer;
  });
templates['resourceNeedSkillGroup_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"working-hour element\">\n    <strong><span class=\"start_time-value\">";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> – <span class=\"end_time-value\">";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></strong><span><span class=\"matched_employees-value\">";
  if (stack1 = helpers.matched_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.matched_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> of <span class=\"num_employees-value\">";
  if (stack1 = helpers.num_employees) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.num_employees; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></span>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['resourceNeedTimeGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"time-range\">\n    <span class=\"time top start-time-value\">";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <span class=\"time bottom end-time-value\">";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n\n<ul class=\"resource-needs-rows\">\n</ul>";
  return buffer;
  });
templates['resourceNeedTimeGroup_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"time-range\">\n        <span class=\"time top start-time-value\">";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <span class=\"time bottom end-time-value\">";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n\n    <ul class=\"resource-needs-rows\">\n    </ul>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['resourceNeedWeek'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table class=\"day-blocks header\">\n    <tbody>\n        <tr>\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n        </tr>\n\n        <tr class=\"bottom-shadow\">\n        </tr>\n    </tbody>\n</table>\n\n<table class=\"day-blocks content\">\n    <tbody>\n        <tr>\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<table class=\"day-blocks footer\">\n    <tbody>\n        <tr>\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n\n            <td class=\"day-block\">\n            </td>\n        </tr>\n    </tbody>\n</table>";
  });
templates['resourceNeedWeek_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <table class=\"day-blocks header\">\n        <tbody>\n            <tr>\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n            </tr>\n\n            <tr class=\"bottom-shadow\">\n            </tr>\n        </tbody>\n    </table>\n\n    <table class=\"day-blocks content\">\n        <tbody>\n            <tr>\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table class=\"day-blocks footer\">\n        <tbody>\n            <tr>\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n\n                <td class=\"day-block\">\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['resourceNeed_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"working-hour element\">\n    <div class=\"element-container\">\n        <div class=\"strip\"></div>\n\n        <div class=\"info\">\n            <h2>\n                <span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> - <span>";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> <em>(";
  if (stack1 = helpers.deltaHours) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.i18n || depth0.i18n),stack1 ? stack1.call(depth0, depth0.deltaHours, options) : helperMissing.call(depth0, "i18n", depth0.deltaHours, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ")</em>\n            </h2>\n        </div>\n    </div>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "hour|hours";
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['resourceNeeds'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=\"";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n";
  return buffer;
  }

  buffer += "<select>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.resourceNeeds) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.resourceNeeds; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.resourceNeeds) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>";
  return buffer;
  });
templates['scale'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n    <li class=\"date\">\n        <span>\n            <span class=\"date\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> <span class=\"time\">00:00</span>\n        </span>\n    </li>\n\n    ";
  options = {hash:{},inverse:self.program(2, program2, data),fn:self.noop,data:data};
  if (stack1 = helpers.last) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.last; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.last) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n    \n    <li class=\"date\">\n        <span>\n            <span class=\"time\">06:00</span>\n        </span>\n    </li>\n    <li class=\"date\">\n        <span>\n            <span class=\"time\">12:00</span>\n        </span>\n    </li>\n    <li class=\"date\">\n        <span>\n            <span class=\"time\">18:00</span>\n        </span>\n    </li>\n\n    ";
  }

  buffer += "<ul>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.scale) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.scale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.scale) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['skillColumns'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n    <li class=\"skill-column-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: ";
  if (stack1 = helpers.width) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\">\n        <ul class=\"blocks\">\n        </ul>\n    </li>\n\n    ";
  return buffer;
  }

  buffer += "<ul>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.skills) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.skills; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.skills) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });
templates['skillGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"table-container header\">\n    <div class=\"side-block\">\n        <div class=\"inner\">\n            <span class=\"skill-name\"></span>\n        </div>\n\n        <div class=\"bottom-shadow\"></div>\n    </div>\n\n    <table class=\"day-blocks header\">\n        <tbody>\n            <tr>\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"resource-needs\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"resource-needs\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"resource-needs\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"resource-needs\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"resource-needs\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"resource-needs\">\n                        </ul>\n                    </div>\n                </td>\n\n                <td class=\"day-block container\">\n                    <div class=\"inner\">\n                        <ul class=\"resource-needs\">\n                        </ul>\n                    </div>\n                </td>\n            </tr>\n\n            <tr class=\"bottom-shadow\">\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"employee-rows\">\n</div>";
  });
templates['skillGroup_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"table-container header\">\n        <div class=\"side-block\">\n            <div class=\"inner\">\n                <span class=\"skill-name\"></span>\n            </div>\n\n            <div class=\"bottom-shadow\"></div>\n        </div>\n\n        <table class=\"day-blocks header\">\n            <tbody>\n                <tr>\n                    <td class=\"day-block container\">\n                        <div class=\"inner\">\n                            <ul class=\"resource-needs\">\n                            </ul>\n                        </div>\n                    </td>\n\n                    <td class=\"day-block container\">\n                        <div class=\"inner\">\n                            <ul class=\"resource-needs\">\n                            </ul>\n                        </div>\n                    </td>\n\n                    <td class=\"day-block container\">\n                        <div class=\"inner\">\n                            <ul class=\"resource-needs\">\n                            </ul>\n                        </div>\n                    </td>\n\n                    <td class=\"day-block container\">\n                        <div class=\"inner\">\n                            <ul class=\"resource-needs\">\n                            </ul>\n                        </div>\n                    </td>\n\n                    <td class=\"day-block container\">\n                        <div class=\"inner\">\n                            <ul class=\"resource-needs\">\n                            </ul>\n                        </div>\n                    </td>\n\n                    <td class=\"day-block container\">\n                        <div class=\"inner\">\n                            <ul class=\"resource-needs\">\n                            </ul>\n                        </div>\n                    </td>\n\n                    <td class=\"day-block container\">\n                        <div class=\"inner\">\n                            <ul class=\"resource-needs\">\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr class=\"bottom-shadow\">\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <div class=\"employee-rows\">\n    </div>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['skills'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=\"";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n";
  return buffer;
  }

  buffer += "<select>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.skills) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.skills; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.skills) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>";
  return buffer;
  });
templates['template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n<ul class=\"dropdown\" style=\"display: none;\">\n    <li>Edit</li>\n    <li>Delete</li>\n</ul>";
  return buffer;
  });
templates['template_group'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<li id=\"element-view-";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.cid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"template\">\n    <span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <ul class=\"dropdown\" style=\"display: none;\">\n        <li>Edit</li>\n        <li>Delete</li>\n    </ul>\n</li>\n\n";
  return buffer;
  }

  buffer += "<ul>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
templates['templates'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=\"";
  if (stack1 = helpers.pk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"options-pd options-pd-";
  if (stack1 = helpers.primary_department) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.primary_department; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n";
  return buffer;
  }

  buffer += "<select>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.templates) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.templates; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.templates) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>";
  return buffer;
  });
templates['timelineSkills'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n    <li style=\"width: ";
  if (stack1 = helpers.width) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\">\n        ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n\n    ";
  return buffer;
  }

  buffer += "<ul>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.skills) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.skills; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.skills) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });
})();