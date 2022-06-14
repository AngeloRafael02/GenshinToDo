const express = require('express'),
      CharRouter = express.Router(),
      {pool} = require('../db');

//ALL CHARACTER ROUTES
CharRouter.get('/', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
}); 
CharRouter.get('/Mondstadt', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE region = 'Mondstadt';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});   
CharRouter.get('/Liyue', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE region = 'Liyue';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});    
CharRouter.get('/Inazuma', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE region = 'Inazuma';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
}); 

module.exports = {CharRouter};