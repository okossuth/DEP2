this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["calendarMonth"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["Handlebars"]["templates"]["calendarMonth_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["Handlebars"]["templates"]["calendarWeek"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <td class=\"cell\">\n                        <div>\n                            <span class=\"date-value\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                            <em class=\"events-counter\"></em>\n\n                            <ul class=\"calendar-items\"></ul>\n                        </div>\n                    </td>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "Loading content";
  }

  buffer += "<section class=\"tablet-calendar\">\n    <table class=\"days-container\">\n        <tbody>\n            <tr class=\"row week-row\">\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.days) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.days; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.days) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </tr>\n        </tbody>\n    </table>\n\n    <div class=\"overlay\">\n        <em>\n            <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
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

this["Handlebars"]["templates"]["calendarWeek_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "\">\n    <section class=\"tablet-calendar\">\n        <table class=\"days-container\">\n            <tbody>\n                <tr class=\"row week-row\">\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.days) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.days; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.days) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"overlay\">\n            <em>\n                <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br />\n                <img src=\"";
  if (stack1 = helpers.loaderUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loaderUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            </em>\n        </div>\n    </section>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <td class=\"cell\">\n                            <div>\n                                <span class=\"date-value\">";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                                <em class=\"events-counter\"></em>\n\n                                <ul class=\"calendar-items\"></ul>\n                            </div>\n                        </td>\n                    ";
  return buffer;
  }

function program4(depth0,data) {
  
  
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

this["Handlebars"]["templates"]["comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>\n    <span>";
  if (stack1 = helpers.commenter) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.commenter; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</h2>\n<p class=\"message\">";
  if (stack1 = helpers.comment) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.comment; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"time\">";
  if (stack1 = helpers.pub_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pub_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  });

this["Handlebars"]["templates"]["comment_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "\" class=\"comment\">\n    <h2>\n        <span>";
  if (stack1 = helpers.commenter) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.commenter; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </h2>\n    <p class=\"message\">";
  if (stack1 = helpers.comment) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.comment; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p class=\"time\">";
  if (stack1 = helpers.pub_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pub_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</li>\n\n";
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

this["Handlebars"]["templates"]["event"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hour|hours";
  }

function program3(depth0,data) {
  
  
  return "Created by";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.isClosed) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isClosed; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isClosed) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.isOpenResponses) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isOpenResponses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isOpenResponses) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data};
  if (stack1 = helpers.isOpen) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isOpen; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isOpen) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <div class=\"button-inner\">\n                        <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                    </div>\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "Assigned";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <div class=\"button-inner\">\n                        <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                    </div>\n                ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "Awaiting reply";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <div class=\"button-inner\">\n                        <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                    </div>\n                ";
  return buffer;
  }
function program13(depth0,data) {
  
  
  return "Make a bid";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"button-inner\">\n                    </i><span>";
  options = {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                </div>\n            ";
  return buffer;
  }
function program16(depth0,data) {
  
  
  return "Bidding closed";
  }

  buffer += "<div class=\"element-container\">\n    <div class=\"strip\"></div>\n\n    <div class=\"info\">\n        <h2>\n            <span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> – <span>";
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
  buffer += ")</em>\n        </h2>\n\n        <h2>\n            <span>";
  if (stack2 = helpers.primaryDepartment) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.primaryDepartment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> → <span>";
  if (stack2 = helpers.groupChainName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.groupChainName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n        </h2>\n\n        <h3>\n            <span>";
  if (stack2 = helpers.municipality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.municipality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n        </h3>\n\n        <h4>\n            <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  if (stack2 = helpers.creator_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.creator_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  if (stack2 = helpers.creationTime) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.creationTime; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n        </h4>\n    </div>\n\n    <div class=\"buttons\">\n        <div class=\"button-element single type-button\">\n            <div class=\"button-background\">\n                <div></div>\n            </div>\n\n            ";
  options = {hash:{},inverse:self.program(5, program5, data),fn:self.noop,data:data};
  if (stack2 = helpers.biddingClosed) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.biddingClosed; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.biddingClosed) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack2 = helpers.biddingClosed) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.biddingClosed; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.biddingClosed) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["eventDetails"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hour|hours";
  }

function program3(depth0,data) {
  
  
  return "Created by";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <h4>\n            <span>";
  if (stack1 = helpers.comment) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.comment; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </h4>\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.isClosed) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isClosed; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isClosed) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack1 = helpers.isOpenResponses) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isOpenResponses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isOpenResponses) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data};
  if (stack1 = helpers.isOpen) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isOpen; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isOpen) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <div class=\"button-inner\">\n                        <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                    </div>\n                ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "Assigned";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <div class=\"button-inner\">\n                        <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                    </div>\n                ";
  return buffer;
  }
function program12(depth0,data) {
  
  
  return "Awaiting reply";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <div class=\"button-inner\">\n                        <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                    </div>\n                ";
  return buffer;
  }
function program15(depth0,data) {
  
  
  return "Make a bid";
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"button-inner\">\n                    </i><span>";
  options = {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                </div>\n            ";
  return buffer;
  }
function program18(depth0,data) {
  
  
  return "Bidding closed";
  }

  buffer += "<div class=\"element-container\">\n    <div class=\"strip\"></div>\n\n    <div class=\"info\">\n        <h2>\n            <span>";
  if (stack1 = helpers.primaryDepartment) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.primaryDepartment; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> → <span>";
  if (stack1 = helpers.groupChainName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.groupChainName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </h2>\n\n        <h2>\n            <span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> – <span>";
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
  buffer += ")</em>\n        </h2>\n\n        <h3>\n            <span>";
  if (stack2 = helpers.municipality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.municipality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n        </h3>\n\n        <h4>\n            <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  if (stack2 = helpers.creator_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.creator_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  if (stack2 = helpers.creationTime) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.creationTime; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n        </h4>\n\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack2 = helpers.hasComment) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.hasComment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.hasComment) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        <div class=\"switcher\">\n            <div class=\"handle\"></div>\n        </div>\n\n    </div>\n\n    <div class=\"buttons\">\n        <div class=\"button-element single type-button\">\n            <div class=\"button-background\">\n                <div></div>\n            </div>\n\n            ";
  options = {hash:{},inverse:self.program(7, program7, data),fn:self.noop,data:data};
  if (stack2 = helpers.biddingClosed) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.biddingClosed; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.biddingClosed) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack2 = helpers.biddingClosed) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.biddingClosed; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.biddingClosed) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n</div>\n\n<ul class=\"comments\">\n</ul>";
  return buffer;
  });

this["Handlebars"]["templates"]["eventDetailsHeader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hour|hours";
  }

  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers.end_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " (";
  if (stack1 = helpers.deltaHours) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.deltaHours; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.i18n || depth0.i18n),stack1 ? stack1.call(depth0, depth0.deltaHours, options) : helperMissing.call(depth0, "i18n", depth0.deltaHours, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ")";
  return buffer;
  });

this["Handlebars"]["templates"]["event_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

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
    + "\" class=\"event element\">\n    <div class=\"element-container\">\n        <div class=\"strip\"></div>\n\n        <div class=\"info\">\n            <h2>\n                <span>";
  if (stack1 = helpers.start_time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> – <span>";
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
  buffer += ")</em>\n            </h2>\n\n            <h2>\n                <span>";
  if (stack2 = helpers.primaryDepartment) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.primaryDepartment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> → <span>";
  if (stack2 = helpers.groupChainName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.groupChainName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n            </h2>\n\n            <h3>\n                <span>";
  if (stack2 = helpers.municipality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.municipality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n            </h3>\n\n            <h4>\n                <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  if (stack2 = helpers.creator_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.creator_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  if (stack2 = helpers.creationTime) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.creationTime; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n            </h4>\n        </div>\n\n        <div class=\"buttons\">\n            <div class=\"button-element single type-button\">\n                <div class=\"button-background\">\n                    <div></div>\n                </div>\n\n                ";
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.noop,data:data};
  if (stack2 = helpers.biddingClosed) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.biddingClosed; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.biddingClosed) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                ";
  options = {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data};
  if (stack2 = helpers.biddingClosed) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.biddingClosed; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.biddingClosed) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "hour|hours";
  }

function program4(depth0,data) {
  
  
  return "Created by";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.isClosed) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isClosed; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isClosed) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.isOpenResponses) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isOpenResponses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isOpenResponses) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack1 = helpers.isOpen) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isOpen; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isOpen) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                        <div class=\"button-inner\">\n                            <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                        </div>\n                    ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "Assigned";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                        <div class=\"button-inner\">\n                            <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                        </div>\n                    ";
  return buffer;
  }
function program11(depth0,data) {
  
  
  return "Awaiting reply";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                        <div class=\"button-inner\">\n                            <span>";
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                        </div>\n                    ";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return "Make a bid";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <div class=\"button-inner\">\n                        </i><span>";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                    </div>\n                ";
  return buffer;
  }
function program17(depth0,data) {
  
  
  return "Bidding closed";
  }

  buffer += "<ul>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.elements) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.elements; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.elements) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<ul>";
  return buffer;
  });

this["Handlebars"]["templates"]["inactivity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"reason\">";
  if (stack1 = helpers.reason) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.reason; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });

this["Handlebars"]["templates"]["inactivityEdit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "Status";
  }

function program3(depth0,data) {
  
  
  return "Date";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n        <li>\n            <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n            <span>";
  if (stack1 = helpers.reason) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.reason; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </li>\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "Note";
  }

function program8(depth0,data) {
  
  
  return "Edit";
  }

function program10(depth0,data) {
  
  
  return "Remove";
  }

  buffer += "<div class=\"wireframe\">\n    <div class=\"side-container\">\n        <i class=\"pending icon wait inline\"></i>\n        <i class=\"approved icon checked inline\"></i>\n        <i class=\"not-approved icon unchecked inline\"></i>\n    </div>\n\n    <ul class=\"attributes\">\n        <li>\n            <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n            <span>";
  if (stack1 = helpers.approved) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.approved; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </li>\n        <li>\n            <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n            <span>";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " – ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </li>\n\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.isReason) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isReason; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isReason) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n    <div class=\"edit-button\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"remove-button\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["inactivityEdit_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "\" class=\"working-hour element\">\n    <div class=\"wireframe\">\n        <div class=\"side-container\">\n            <i class=\"pending icon wait inline\"></i>\n            <i class=\"approved icon checked inline\"></i>\n            <i class=\"not-approved icon unchecked inline\"></i>\n        </div>\n\n        <ul class=\"attributes\">\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n                <span>";
  if (stack1 = helpers.approved) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.approved; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n                <span>";
  if (stack1 = helpers.start) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " – ";
  if (stack1 = helpers.end) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack1 = helpers.isReason) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isReason; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isReason) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n\n        <div class=\"edit-button\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"remove-button\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Status";
  }

function program4(depth0,data) {
  
  
  return "Date";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n                <span>";
  if (stack1 = helpers.reason) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.reason; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "Note";
  }

function program9(depth0,data) {
  
  
  return "Edit";
  }

function program11(depth0,data) {
  
  
  return "Remove";
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

this["Handlebars"]["templates"]["inactivity_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "\" class=\"inactivity\">\n    <span class=\"reason\">";
  if (stack1 = helpers.reason) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.reason; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
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

this["Handlebars"]["templates"]["notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["Handlebars"]["templates"]["notificationMessage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["Handlebars"]["templates"]["notification_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["Handlebars"]["templates"]["speechResults"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"";
  if (stack1 = helpers.status) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.status; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  buffer += "<ul class=\"results\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.results) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.results; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.results) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

this["Handlebars"]["templates"]["workingHour"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "</span> – <span>";
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
  buffer += ")</em>\n        </h2>\n\n        <h2>\n            <span>";
  if (stack2 = helpers.available) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.available; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n        </h2>\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["workingHourEdit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  
  
  return "Status";
  }

function program7(depth0,data) {
  
  
  return "Date";
  }

function program9(depth0,data) {
  
  
  return "Repeat";
  }

function program11(depth0,data) {
  
  
  return "Edit";
  }

function program13(depth0,data) {
  
  
  return "Remove";
  }

  buffer += "<div class=\"wireframe\">\n    <div class=\"side-container\">\n        <ul class=\"attributes\">\n            <li>\n                <strong>";
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
  buffer += "</strong>\n                <span>";
  if (stack1 = helpers.available) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.available; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n                <span>";
  if (stack1 = helpers.start_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.end_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n            <li>\n                <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                <span>";
  if (stack1 = helpers.repeat) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repeat; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n            </li>\n        </ul>\n    </div>\n\n    <ul class=\"columns weekdays\">\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n\n        <li class=\"weekday\">\n            <i class=\"icon inline unchecked\"></i>\n            <i class=\"icon inline checked\"></i>\n        </li>\n    </ul>\n\n    <div class=\"edit-button\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"remove-button\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["workingHourEdit_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "\" class=\"working-hour element\">\n    <div class=\"wireframe\">\n        <div class=\"side-container\">\n            <ul class=\"attributes\">\n                <li>\n                    <strong>";
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
  buffer += "</strong>\n                    <span>";
  if (stack1 = helpers.available) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.available; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </li>\n                <li>\n                    <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n                    <span>";
  if (stack1 = helpers.start_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.start_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.end_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.end_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </li>\n                <li>\n                    <strong>";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </strong>\n                    <span>";
  if (stack1 = helpers.repeat) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repeat; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </li>\n            </ul>\n        </div>\n\n        <ul class=\"columns weekdays\">\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n\n            <li class=\"weekday\">\n                <i class=\"icon inline unchecked\"></i>\n                <i class=\"icon inline checked\"></i>\n            </li>\n        </ul>\n\n        <div class=\"edit-button\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"remove-button\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data};
  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</li>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Time";
  }

function program4(depth0,data) {
  
  
  return "to";
  }

function program6(depth0,data) {
  
  
  return "Status";
  }

function program8(depth0,data) {
  
  
  return "Date";
  }

function program10(depth0,data) {
  
  
  return "Repeat";
  }

function program12(depth0,data) {
  
  
  return "Edit";
  }

function program14(depth0,data) {
  
  
  return "Remove";
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

this["Handlebars"]["templates"]["workingHour_group"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "</span> – <span>";
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
  buffer += ")</em>\n            </h2>\n\n            <h2>\n                <span>";
  if (stack2 = helpers.available) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.available; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n            </h2>\n        </div>\n    </div>\n</li>\n\n";
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