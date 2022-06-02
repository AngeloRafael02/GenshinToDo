
const express = require('express'), 
      router = express.Router(),
      {pool} = require('../db');

router.get('/Characters', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters;");
        res.send(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});      
router.get(['/Characters/Monday', '/Characters/Thursday' ], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters;");
        res.json(charResponse.rows)
    } catch (error){
        console.log(error); 
    }
});
router.get(['/Characters/Tuesday', '/Characters/Friday' ], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
router.get(['/Characters/Wednesday', '/Characters/Saturday' ], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});


module.exports = {router};