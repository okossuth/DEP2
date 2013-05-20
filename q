[1mdiff --git a/app/dist/ovivo-desktop-employee-require.js b/app/dist/ovivo-desktop-employee-require.js[m
[1mindex d60daa0..becd7d3 100644[m
[1m--- a/app/dist/ovivo-desktop-employee-require.js[m
[1m+++ b/app/dist/ovivo-desktop-employee-require.js[m
[36m@@ -21104,7 +21104,6 @@[m [mdefine('_features/validators',[], function() {[m
 define('models/resources/ResourceNeed',['models/resources/ResourceBase', 'views/resources/ResourceNeed', 'views/resources/ResourceNeedEdit', '_features/validators', 'ovivo'], function(ResourceBase, View, EditView, validators) {[m
   return ResourceBase.extend({[m
     typeName: 'resourceNeed',[m
[31m-    localStorageOnly: true,[m
     _gettersNames: ['weekdays', 'start_time', 'end_time', 'pk', 'deltaHours', 'num_employees', 'employee_type', 'skill', 'primary_department', 'checked', 'templates', 'startValue', 'endValue'],[m
     _getTrueHash: function(hash) {[m
       return _.compact(_.map(_.pairs(hash), function(arr) {[m
[36m@@ -21171,6 +21170,8 @@[m [mdefine('models/resources/ResourceNeed',['models/resources/ResourceBase', 'views/[m
       delete _json.deltaHours;[m
       delete _json.checked;[m
       delete _json.templates;[m
[32m+[m[32m      delete _json.startValue;[m
[32m+[m[32m      delete _json.endValue;[m
       return _json;[m
     },[m
     changePrimaryDepartment: function(model) {[m
[36m@@ -21378,7 +21379,6 @@[m [mdefine('collections/resources/ResourceNeeds',['models/resources/ResourceNeed', '[m
   return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, CachableCollection.get(['primary_department']), {[m
     model: Model,[m
     fullResponse: true,[m
[31m-    localStorageOnly: true,[m
     url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/",[m
     processRange: function(start, end) {[m
       return this.reduce((function(arr, workingHour) {[m
[36m@@ -21445,7 +21445,6 @@[m [mdefine('views/resources/Template',['views/resources/ResourceBase', 'ovivo'], fun[m
 define('models/resources/Template',['models/resources/ResourceBase', 'views/resources/Template', 'ovivo'], function(ResourceBase, View) {[m
   return ResourceBase.extend({[m
     typeName: 'template',[m
[31m-    localStorageOnly: true,[m
     _gettersNames: ['pk', 'name', 'repeat', 'resource_needs', 'primary_department', 'periods'],[m
     changePD: function() {[m
       return this.set('resource_needs', []);[m
[36m@@ -21529,7 +21528,6 @@[m [mdefine('collections/resources/Templates',['models/resources/Template', '_common/[m
   return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {[m
     model: Model,[m
     fullResponse: true,[m
[31m-    localStorageOnly: true,[m
     url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/templates/",[m
     _ignoreChange: ['periods'],[m
     _processTemplateAdd: function(model) {[m
[36m@@ -21889,7 +21887,6 @@[m [mdefine('collections/period/PeriodBlocks',['collections/period/Blocks', 'models/p[m
 define('models/resources/Period',['models/resources/ResourceBase', 'views/resources/Period', '_features/RuleCompiler', 'collections/period/PeriodBlocks', 'ovivo'], function(ResourceBase, View, RuleCompiler, PeriodBlocks) {[m
   return ResourceBase.extend({[m
     typeName: 'period',[m
[31m-    localStorageOnly: true,[m
     _gettersNames: ['pk', 'start_date', 'end_date', 'templates', 'primary_department', 'groups'],[m
     changePD: function() {[m
       this.set('templates', []);[m
[36m@@ -21997,7 +21994,6 @@[m [mdefine('collections/resources/Periods',['models/resources/Period', '_common/Reso[m
   return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {[m
     model: Model,[m
     fullResponse: true,[m
[31m-    localStorageOnly: true,[m
     url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/periods/",[m
     _processPeriodAdd: function(model) {[m
       var _id,[m
[1mdiff --git a/app/src/coffee/collections/resources/Periods.coffee b/app/src/coffee/collections/resources/Periods.coffee[m
[1mindex 804db23..1911830 100644[m
[1m--- a/app/src/coffee/collections/resources/Periods.coffee[m
[1m+++ b/app/src/coffee/collections/resources/Periods.coffee[m
[36m@@ -10,7 +10,7 @@[m [mdefine [[m
 [m
     fullResponse: true[m
 [m
[31m-    localStorageOnly: true[m
[32m+[m[32m    # localStorageOnly: true[m
 [m
     url: "#{ovivo.config.API_URL_PREFIX}resource-needs/periods/"[m
 [m
[1mdiff --git a/app/src/coffee/collections/resources/ResourceNeeds.coffee b/app/src/coffee/collections/resources/ResourceNeeds.coffee[m
[1mindex eb87227..09b53ae 100644[m
[1m--- a/app/src/coffee/collections/resources/ResourceNeeds.coffee[m
[1m+++ b/app/src/coffee/collections/resources/ResourceNeeds.coffee[m
[36m@@ -11,7 +11,7 @@[m [mdefine [[m
 [m
     fullResponse: true[m
 [m
[31m-    localStorageOnly: true[m
[32m+[m[32m    # localStorageOnly: true[m
 [m
     url: "#{ovivo.config.API_URL_PREFIX}resource-needs/"[m
 [m
[1mdiff --git a/app/src/coffee/collections/resources/Templates.coffee b/app/src/coffee/collections/resources/Templates.coffee[m
[1mindex 581aa12..02488fb 100644[m
[1m--- a/app/src/coffee/collections/resources/Templates.coffee[m
[1m+++ b/app/src/coffee/collections/resources/Templates.coffee[m
[36m@@ -10,7 +10,7 @@[m [mdefine [[m
 [m
     fullResponse: true[m
 [m
[31m-    localStorageOnly: true[m
[32m+[m[32m    # localStorageOnly: true[m
 [m
     url: "#{ovivo.config.API_URL_PREFIX}resource-needs/templates/"[m
 [m
[1mdiff --git a/app/src/coffee/models/resources/Period.coffee b/app/src/coffee/models/resources/Period.coffee[m
[1mindex 5534bf5..2b9b317 100644[m
[1m--- a/app/src/coffee/models/resources/Period.coffee[m
[1m+++ b/app/src/coffee/models/resources/Period.coffee[m
[36m@@ -12,7 +12,7 @@[m [mdefine [[m
   ResourceBase.extend[m
     typeName: 'period'[m
 [m
[31m-    localStorageOnly: true[m
[32m+[m[32m    # localStorageOnly: true[m
 [m
     _gettersNames: [[m
       'pk'[m
[1mdiff --git a/app/src/coffee/models/resources/ResourceNeed.coffee b/app/src/coffee/models/resources/ResourceNeed.coffee[m
[1mindex 99d161a..62664bf 100644[m
[1m--- a/app/src/coffee/models/resources/ResourceNeed.coffee[m
[1m+++ b/app/src/coffee/models/resources/ResourceNeed.coffee[m
[36m@@ -11,7 +11,7 @@[m [mdefine [[m
   ResourceBase.extend[m
     typeName: 'resourceNeed'[m
 [m
[31m-    localStorageOnly: true[m
[32m+[m[32m    # localStorageOnly: true[m
 [m
     _gettersNames: [[m
       'weekdays'[m
[36m@@ -83,6 +83,8 @@[m [mdefine [[m
       delete _json.deltaHours[m
       delete _json.checked[m
       delete _json.templates[m
[32m+[m[32m      delete _json.startValue[m
[32m+[m[32m      delete _json.endValue[m
 [m
       _json[m
 [m
[1mdiff --git a/app/src/coffee/models/resources/Template.coffee b/app/src/coffee/models/resources/Template.coffee[m
[1mindex 8e1c5ca..35e7701 100644[m
[1m--- a/app/src/coffee/models/resources/Template.coffee[m
[1m+++ b/app/src/coffee/models/resources/Template.coffee[m
[36m@@ -8,7 +8,7 @@[m [mdefine [[m
   ResourceBase.extend[m
     typeName: 'template'[m
 [m
[31m-    localStorageOnly: true[m
[32m+[m[32m    # localStorageOnly: true[m
 [m
     _gettersNames: [[m
       'pk'[m
[1mdiff --git a/app/src/js/collections/resources/Periods.js b/app/src/js/collections/resources/Periods.js[m
[1mindex ba787e1..e7eb31d 100644[m
[1m--- a/app/src/js/collections/resources/Periods.js[m
[1m+++ b/app/src/js/collections/resources/Periods.js[m
[36m@@ -3,7 +3,6 @@[m [mdefine(['models/resources/Period', '_common/ResourceManagerBase', 'ovivo'], func[m
   return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {[m
     model: Model,[m
     fullResponse: true,[m
[31m-    localStorageOnly: true,[m
     url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/periods/",[m
     _processPeriodAdd: function(model) {[m
       var _id,[m
[1mdiff --git a/app/src/js/collections/resources/ResourceNeeds.js b/app/src/js/collections/resources/ResourceNeeds.js[m
[1mindex a033bb7..9120587 100644[m
[1m--- a/app/src/js/collections/resources/ResourceNeeds.js[m
[1m+++ b/app/src/js/collections/resources/ResourceNeeds.js[m
[36m@@ -3,7 +3,6 @@[m [mdefine(['models/resources/ResourceNeed', '_common/ResourceManagerBase', '_common[m
   return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, CachableCollection.get(['primary_department']), {[m
     model: Model,[m
     fullResponse: true,[m
[31m-    localStorageOnly: true,[m
     url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/",[m
     processRange: function(start, end) {[m
       return this.reduce((function(arr, workingHour) {[m
[1mdiff --git a/app/src/js/collections/resources/Templates.js b/app/src/js/collections/resources/Templates.js[m
[1mindex 73d45b3..52aa79c 100644[m
[1m--- a/app/src/js/collections/resources/Templates.js[m
[1m+++ b/app/src/js/collections/resources/Templates.js[m
[36m@@ -3,7 +3,6 @@[m [mdefine(['models/resources/Template', '_common/ResourceManagerBase', 'ovivo'], fu[m
   return Backbone.Collection.extend(_.extend({}, ResourceManagerBase, {[m
     model: Model,[m
     fullResponse: true,[m
[31m-    localStorageOnly: true,[m
     url: "" + ovivo.config.API_URL_PREFIX + "resource-needs/templates/",[m
     _ignoreChange: ['periods'],[m
     _processTemplateAdd: function(model) {[m
[1mdiff --git a/app/src/js/models/resources/Period.js b/app/src/js/models/resources/Period.js[m
[1mindex fe559b5..b0d706c 100644[m
[1m--- a/app/src/js/models/resources/Period.js[m
[1m+++ b/app/src/js/models/resources/Period.js[m
[36m@@ -2,7 +2,6 @@[m
 define(['models/resources/ResourceBase', 'views/resources/Period', '_features/RuleCompiler', 'collections/period/PeriodBlocks', 'ovivo'], function(ResourceBase, View, RuleCompiler, PeriodBlocks) {[m
   return ResourceBase.extend({[m
     typeName: 'period',[m
[31m-    localStorageOnly: true,[m
     _gettersNames: ['pk', 'start_date', 'end_date', 'templates', 'primary_department', 'groups'],[m
     changePD: function() {[m
       this.set('templates', []);[m
[1mdiff --git a/app/src/js/models/resources/ResourceNeed.js b/app/src/js/models/resources/ResourceNeed.js[m
[1mindex a2a34ff..cd568eb 100644[m
[1m--- a/app/src/js/models/resources/ResourceNeed.js[m
[1m+++ b/app/src/js/models/resources/ResourceNeed.js[m
[36m@@ -2,7 +2,6 @@[m
 define(['models/resources/ResourceBase', 'views/resources/ResourceNeed', 'views/resources/ResourceNeedEdit', '_features/validators', 'ovivo'], function(ResourceBase, View, EditView, validators) {[m
   return ResourceBase.extend({[m
     typeName: 'resourceNeed',[m
[31m-    localStorageOnly: true,[m
     _gettersNames: ['weekdays', 'start_time', 'end_time', 'pk', 'deltaHours', 'num_employees', 'employee_type', 'skill', 'primary_department', 'checked', 'templates', 'startValue', 'endValue'],[m
     _getTrueHash: function(hash) {[m
       return _.compact(_.map(_.pairs(hash), function(arr) {[m
[36m@@ -69,6 +68,8 @@[m [mdefine(['models/resources/ResourceBase', 'views/resources/ResourceNeed', 'views/[m
       delete _json.deltaHours;[m
       delete _json.checked;[m
       delete _json.templates;[m
[32m+[m[32m      delete _json.startValue;[m
[32m+[m[32m      delete _json.endValue;[m
       return _json;[m
     },[m
     changePrimaryDepartment: function(model) {[m
[1mdiff --git a/app/src/js/models/resources/Template.js b/app/src/js/models/resources/Template.js[m
[1mindex ac2154a..e824738 100644[m
[1m--- a/app/src/js/models/resources/Template.js[m
[1m+++ b/app/src/js/models/resources/Template.js[m
[36m@@ -2,7 +2,6 @@[m
 define(['models/resources/ResourceBase', 'views/resources/Template', 'ovivo'], function(ResourceBase, View) {[m
   return ResourceBase.extend({[m
     typeName: 'template',[m
[31m-    localStorageOnly: true,[m
     _gettersNames: ['pk', 'name', 'repeat', 'resource_needs', 'primary_department', 'periods'],[m
     changePD: function() {[m
       return this.set('resource_needs', []);[m
[1mdiff --git a/web.js b/web.js[m
[1mindex 35f7c94..d804b69 100644[m
[1m--- a/web.js[m
[1m+++ b/web.js[m
[36m@@ -96,9 +96,9 @@[m [mvar _workingHours = {[m
     }][m
 };[m
 [m
[31m-app.get('/api/1.0/working-hours/', function (req, res) {[m
[31m-    res.end(JSON.stringify(_workingHours));[m
[31m-});[m
[32m+[m[32m// app.get('/api/1.0/working-hours/', function (req, res) {[m
[32m+[m[32m//     res.end(JSON.stringify(_workingHours));[m
[32m+[m[32m// });[m
 [m
 app.all('/api/*', proxyFunc);[m
 [m
warning: LF will be replaced by CRLF in app/dist/ovivo-desktop-employee-require.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/src/js/collections/resources/Periods.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/src/js/collections/resources/ResourceNeeds.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/src/js/collections/resources/Templates.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/src/js/models/resources/Period.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/src/js/models/resources/ResourceNeed.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in app/src/js/models/resources/Template.js.
The file will have its original line endings in your working directory.
