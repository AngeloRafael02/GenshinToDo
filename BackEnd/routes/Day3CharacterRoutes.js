const express = require('express'),
Day3CharRoutes = express.Router(),
{pool} = require('../db');


//WEDNESDAY - SATURDAY ROUTES
Day3CharRoutes.get(['/All'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters;");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day3CharRoutes.get(['/Mondstadt'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters WHERE region = 'Mondstadt';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day3CharRoutes.get(['/Liyue'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters WHERE region = 'Liyue';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day3CharRoutes.get(['/Inazuma'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day3characters WHERE region = 'Inazuma';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});

module.exports = {Day3CharRoutes}