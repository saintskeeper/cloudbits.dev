
/*
const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDev = 'production';
//const isDev = process.env.NODE_ENV !== 'production';

const server = next({
  dev: isDev,
  //location of .next generated after running -> yarn build
  conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});
*/
// require is used to load modules node's import
// const { createServer } = require('http')
//const { parse } = require('url')
const functions = require("firebase-functions")
const next = require("next")


var dev = process.env.NODE_ENV !== "production"
var app = next({ dev, conf: { distDir: "next" } })
var handle = app.getRequestHandler()


exports.next = functions.https.onRequest((req, res) => {
	console.log("File: " + req.originalUrl) // log the page.js file that is being requested
	return app.prepare().then(() => handle(req, res))
      })