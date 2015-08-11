
In order to make you package jspm exportable you need to put an entry in package.json for main

{
///other stuff
main:'pathtotheentrypoint/file.js'
}

this is currently working if the entry point file contains es6 code 
