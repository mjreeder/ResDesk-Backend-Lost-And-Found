/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.http.html
 */
//var request = require('request');
//var ResponseFormat = require('../helpers/format-response.js');
//var currentAuthorizedUser = require('../api/services/currentUser.js');

module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Express middleware to use for every Sails request. To add custom          *
   * middleware to the mix, add a function to the middleware config object and *
   * add its key to the "order" array. The $custom key is reserved for         *
   * backwards-compatibility with Sails v0.9.x apps that use the               *
   * `customMiddleware` config option.                                         *
   *                                                                           *
   ****************************************************************************/

  middleware: {

//    checkAuthHeader: function(req, res, next) {
//      console.log(req.headers);
//      if (!req.headers.authorization) {
//        var errorRes = ResponseFormat.fail('Missing Authorization', {}, 401);
//        return res.status(401).json(errorRes);
//      }
//
//      var authHeader = req.headers.authorization.split(" ")[1];
//
//      var getUserFromDirectoryPromise = new Promise(function(resolve, reject) {
//
//        request.get({
//          url: "http://localhost:10018/user",
//          headers: {
//            'Authorization': 'Bearer ' + authHeader
//          }
//        }, function(error, response, body) {
//          if (error) {
//            reject(error);
//          } else {
//
//            if (JSON.parse(body).status != 200) {
//              reject(body);
//              return;
//            }
//
//            resolve(body);
//          }
//        });
//      });
//
//      getUserFromDirectoryPromise.then(function(response) {
//        if (JSON.parse(response).description == 'User Found') {
//          currentAuthorizedUser.setCurrentAuthorizedUser(response);
//          next();
//        }
//        else{
//          next(response);
//        }
//      }, function(error) {
//        next(error);
//      });
//    },


    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP request. (the Sails *
     * router is invoked by the "router" middleware below.)                     *
     *                                                                          *
     ***************************************************************************/

//    order: [
//      'startRequestTimer',
//      'cookieParser',
//      'session',
//      'myRequestLogger',
//      'bodyParser',
//      'handleBodyParserError',
//      'compress',
////      'checkAuthHeader',
//      'methodOverride',
//      'poweredBy',
//      '$custom',
//      'router',
//      'www',
//      'favicon',
//      '404',
//      '500'
//    ],

    /****************************************************************************
     *                                                                           *
     * Example custom middleware; logs each request to the console.              *
     *                                                                           *
     ****************************************************************************/

    // myRequestLogger: function (req, res, next) {
    //     console.log("Requested :: ", req.method, req.url);
    //     return next();
    // }


    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests. By    *
     * default as of v0.10, Sails uses                                          *
     * [skipper](http://github.com/balderdashy/skipper). See                    *
     * http://www.senchalabs.org/connect/multipart.html for other options.      *
     *                                                                          *
     ***************************************************************************/

    // bodyParser: require('skipper')

  }

  /***************************************************************************
   *                                                                          *
   * The number of seconds to cache flat files on disk being served by        *
   * Express static middleware (by default, these files are in `.tmp/public`) *
   *                                                                          *
   * The HTTP static cache is only active in a 'production' environment,      *
   * since that's the only time Express will cache flat-files.                *
   *                                                                          *
   ***************************************************************************/

  // cache: 31557600000
};
