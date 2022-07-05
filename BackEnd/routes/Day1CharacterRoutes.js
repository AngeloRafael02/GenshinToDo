const express = require('express'),
Day1CharRoutes = express.Router(),
{pool} = require('../db');

//MONDAY - THURSDAY CHARACTER ROUTES
Day1CharRoutes.get(['/All'], async function(req,res){ //Mondstadt
    try{
        const charResponse = await pool.query(
           `SELECT * FROM AllCharacters;`);
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.send('Error 500: Server Error');
    }
});
Day1CharRoutes.get(['/Mondstadt'], async function(req,res){ //Mondstadt
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE material = 'Freedom';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.send('Error 500: Server Error');
    }
});
Day1CharRoutes.get(['/Liyue'], async function(req,res){ //Liyue
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE material = 'Prosperity';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.send('Error 500: Server Error');
    }
});
Day1CharRoutes.get(['/Inazuma'], async function(req,res){ //Inazuma
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE material = 'Transience';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
        res.send('Error 500: Server Error');
    }
});

module.exports = {Day1CharRoutes};