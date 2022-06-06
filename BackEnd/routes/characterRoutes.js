
const express = require('express'), 
      CharRouter = express.Router(),
      {pool} = require('../db');

CharRouter.get('/Characters/all', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});      
CharRouter.get(['/Characters/day1'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
CharRouter.get(['/Characters/day2'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
CharRouter.get(['/Characters/day3'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
module.exports = {CharRouter};