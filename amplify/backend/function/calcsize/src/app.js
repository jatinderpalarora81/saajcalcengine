/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
// var nodemailer = require('nodemailer')
// var ses = require('nodemailer-ses-transport');
var AWS = require('aws-sdk');

var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())


// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/





app.get('/size', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/size/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/size', function(req, res) {

 //  const transporter = nodemailer.createTransport({
 //    port: 465,
 //    host: 'email-smtp.us-east-2.amazonaws.com',
 //    auth: {
 //      user: 'AKIA5C47THXM3EHY3HUE',
 //      pass:'BEtC0mddEg/q3quIGzqNZzQi6UdYkjTT6nkoOWHWhUNT'
 //    }
 //  });
 //
 //  const mailOptions = {
 //    from: 'support@saajdesigns.com',
 //    to: 'saajdesigns.info@gmail.com',
 //    subject: 'Sending Email using Node.js',
 //    text: 'That was easy!'
 //  };
 // let i = 'strt';
 //  transporter.sendMail(mailOptions, function(error, info){
 //    if (error) {
 //      console.log('Email NOT SENT ERROR:')
 //      console.log(error);
 //      i = error;
 //    } else {
 //      i = info.response;
 //      console.log('Email sent: ' + info.response);
 //    }
 //  });
//   var transporter = nodemailer.createTransport(ses({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
//   }));
//
//   transporter.sendMail({
//     from: 'support@saajdesigns.com',
//     to: 'saajdesigns.info@gmail.com',
//     subject: 'My Amazon SES Simple Email',
//     text: 'Amazon SES Email',
//     html: '<b>This is some HTML</b>',
// });
//
//   // Add your code here
//   console.log('Email sent after that: ' );
  setTimeout(res.json({success: 'post call succeed!', url: req.url, body: {name: 'mail sent now '} }), 3000);


});

app.post('/size/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/size', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/size/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/size', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/size/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
