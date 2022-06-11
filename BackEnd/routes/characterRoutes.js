
const express = require('express'), 
      CharRouter = express.Router(),
      {pool} = require('../db');

CharRouter.get('/all', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});      
CharRouter.get(['/day1'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
CharRouter.get(['/day2'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
CharRouter.get(['/day3'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
module.exports = {CharRouter};