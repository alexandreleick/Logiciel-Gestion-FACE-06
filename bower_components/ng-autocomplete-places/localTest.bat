@ECHO OFF
del .\examples\ngPlacesAutocomplete.js
xcopy /f /y .\src\ngPlacesAutocomplete.js .\examples\
ECHO install of npm
CALL npm install http-server -g
CALL http-server ./examples