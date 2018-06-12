var express = require('express');
var router = express.Router();
var oracledriver = require('oracledb');
var apprSampUIFields = require('../app/apprSampleUIFields.json');




/* GET home page. */

router.get('/', function(req, res) {

  console.log("blank");
    
});
router.post('/sampleList', function(req, res) {
  var sampStatus = req.body.status;
 var query = "SELECT * FROM SAMPLE ";
 var bindvars = {};
 console.log("status is ::::: "+sampStatus);
 if( null != sampStatus && sampStatus != "" ) {
   query += " WHERE STATUS = :status" ;
    var bindvars = {
      status : sampStatus
    };
 }
   console.log(query);
   executeQuery(query, bindvars , req, res);
   
});

router.get('/locations', function(req, res){
  var query = "SELECT LOCATION_NAME FROM LOCATION" ;
  executeQuery(query, {}, req, res);
});

router.post('/Newsample', function(req, res){
  
  
  var query = "INSERT INTO SAMPLE ( SAMPLE_NAME, SAMPLE_LOCATION, STATUS ) VALUES ( " + 
      ":sampleName , :location , :status)";

  var bindvars = {
    sampleName : req.body.sampleName,
    location : req.body.location,
    status : req.body.status
  }
  executeQuery(query, bindvars, req, res);
    
});

router.get('/recvSampUIFields', function(req, res){
  var query = "SELECT FIELDNAME AS fieldName, "+
  " FIELDTYPE AS fieldType , "+
  " ISMANDATORY AS isMandatory, " +
  " DISPLAYNAME AS displayName " +
  " FROM RECV_SAMP_UIFIELDS ";

  executeQuery(query,{}, req, res);
});

router.get('/availSampUIFields', function(req, res){
  var query = "SELECT FIELDNAME AS fieldName, "+
  " FIELDTYPE AS fieldType , "+
  " ISMANDATORY AS isMandatory, " +
  " DISPLAYNAME AS displayName " +
  " FROM AVAIL_SAMPLE_UIFIELDS ";

  executeQuery(query,{}, req, res);
});
router.get('/apprSampUIFields', function(req, res){
  console.log(apprSampUIFields);
  res.send(apprSampUIFields);
});

//Function to connect to Oracle db and execute queries
function executeQuery(query, params, req, res){
  var respjson = [];
  oracledriver.autoCommit = true;
  oracledriver.getConnection(
    {
      user          : "llocdev",
      password      : "devdevpw"
    },
    function(err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute(query,
        params,  
        { outFormat: oracledriver.OBJECT }, // enable the extra metadata
        function(err, result) {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          }
          //console.log(result.rows);
          doRelease(connection);
          
          if(result.rows){
            console.log(result.rows);
            res.send(result.rows);
          }else{
            res.send("Success");
          }
         
          
        });
    });

}



function doRelease(connection) {
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}

module.exports = router;
