
const express = require('express'), 
      CharRouter = express.Router(),
      {pool} = require('../db');

CharRouter.get('/Characters', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters;");
        res.send(charResponse.rows);
    } catch (error){
        console.log(error); 
    }

    
});      
CharRouter.get(['/Characters/Monday', '/Characters/Thursday' ], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters;");
        res.json(charResponse.rows)
    } catch (error){
        console.log(error); 
    }
});
CharRouter.get(['/Characters/Tuesday', '/Characters/Friday' ], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
CharRouter.get(['/Characters/Wednesday', '/Characters/Saturday' ], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});


module.exports = {CharRouter};