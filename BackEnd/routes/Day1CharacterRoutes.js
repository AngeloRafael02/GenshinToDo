const express = require('express'),
Day1CharRoutes = express.Router(),
{pool} = require('../db');

//MONDAY - THURSDAY ROUTES
Day1CharRoutes.get(['/Mondstadt'], async function(req,res){ //Mondstadt
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE region = 'Mondstadt';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day1CharRoutes.get(['/Liyue'], async function(req,res){ //Liyue
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE region = 'Liyue';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day1CharRoutes.get(['/Inazuma'], async function(req,res){ //Inazuma
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE region = 'Inazuma';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});

module.exports = {Day1CharRoutes};