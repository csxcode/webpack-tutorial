import "babel-polyfill";
import Promise from "bluebird";
import peoples from './peoples.js';   //let peoples = require('./peoples.js');
import $ from 'jquery';   //var $ = require('jquery');

require('../css/style.css');
require('../css/another.css');

//--------------------------------------------------
//Using ECMAScript 2015 (ES6)
//--------------------------------------------------

//Using Iterators and generators
Promise.coroutine(function* () {

  console.log("Generator has started!")
  let test_babel = "...Running...";
  console.log(test_babel);

  var fake_api = 'https://jsonplaceholder.typicode.com';

  var posts = yield $.get(fake_api+'/posts');
  console.log("Print all posts....")
  console.log(posts)

  var post_1 = yield $.get(fake_api+'/posts/1');
  console.log("Print a posts from ID...")
  console.log(post_1);

  var comments = yield $.get(fake_api+'/posts/1/comments');
  console.log("Print all comments from post 1...")
  console.log(comments);

  //Others process..
  console.log('NODE_ENV: '+ process.env.NODE_ENV);

  $.each(peoples, function(key, value){
    console.log(peoples[key].name);
    $('body').append('<h1>'+peoples[key].name+'</h1>');
  });

  console.log("Generator has been finished!")

})().catch(function(errs){

  //handle errors on any events
  console.log("An error an ocurred, more details:");
  console.log(errs.status, errs.statusText);
  console.log(errs);

});
