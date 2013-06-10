start node server.js
start coffee -o app/src/js/ -cwb app/src/coffee/
start sass --style=nested app/src/sass:app/src/css --watch
cd app
start rerun -i=dist -i=sass -i=coffee -i=app.appcache -i=manifest -i=templates.js -i=app.html -i=app_ru-RU.html -i=app_da-DK.html grunt.cmd
cd ..