const url = "http://api.openweathermap.org/data/2.5/forecast?";
const apiKey = '6de276f139b7271cbe7debcc1435d0aa';
// Concatanation(conbinding the constants) to get an endpoint
// endpoint is used to stop the code
const endPoint = url + location + '&appid=' + apiKey;

function weatherUK()
{
    //const to keep varible
    //Link to database, area and key
    let location= 'London,uk';

    //get JSON(Javascript Object Notation) is a lightweight data-interchange format.
    $.getJSON(endPoint, function(data)
    {
    // getting JQuery($) and div tags then combinging it with the JSON database to get
    // the (.) is used to go further down JSON database
    // for example files on a computer
        $('#six').html(data.name);
        $('#seven').html(data.weather[0].despription);      
        $('#eight').html(data.main.temp);
        $('#nine').html(data.humidity);
        $('#ten').html(data.wind.speed);

    });
}weatherUK();

//JQuery to get France from the database
function weatherFra()
{
    let location= 'Paris,france';
    let endPoint = url + location + '&appid=' + apiKey;
    $.getJSON(endPoint, function(data)
    {
        $('#seven').html(data.name);    
        $('#eight').html(data.weather[0].despription);
        $('#nine').html(data.main.temp);
        $('#ten').html(data.humidity);
        $('#eleven').html(data.wind.speed);
    });
}weatherFra();
//JQuery to get German from the database
function weatherGer()
{
    let location= 'Berlin,german';
    let endPoint = url + location + '&appid=' + apiKey;
    $.getJSON(endPoint, function(data)
    {
        $('#seven').html(data.name);    
        $('#eight').html(data.weather[0].despription);
        $('#nine').html(data.main.temp);
        $('#ten').html(data.humidity);
        $('#eleven').html(data.wind.speed);
    });
}weatherGer();

//JQuery to get Italy from the database
function weatherIta()
{
    let location= 'Rome, italy';
    let endPoint = url + location + '&appid=' + apiKey;
    $.getJSON(endPoint, function(data)
    {
        $('#seven').html(data.name);    
        $('#eight').html(data.weather[0].despription);
        $('#nine').html(data.main.temp);
        $('#ten').html(data.humidity);
        $('#eleven').html(data.wind.speed);
    });
}weatherIta();

//JQuery to get Switzerland from the database
function weatherSwis()
{
    let location= 'Bern,switzerland';
    let endPoint = url + location + '&appid=' + apiKey;
    $.getJSON(endPoint, function(data)
    {
        $('#seven').html(data.name);    
        $('#eight').html(data.weather[0].despription);
        $('#nine').html(data.main.temp);
        $('#ten').html(data.humidity);
        $('#eleven').html(data.wind.speed);
    });
}weatherSwis();

//JQuery to get Belgium from the database
function weatherBel()
{
    let location= 'Brussels,belgium';
    let endPoint = url + location + '&appid=' + apiKey;
    $.getJSON(endPoint, function(data)
    {
        $('#seven').html(data.name);    
        $('#eight').html(data.weather[0].despription);
        $('#nine').html(data.main.temp);
        $('#ten').html(data.humidity);
        $('#eleven').html(data.wind.speed);
    });
}weatherBel();

//JQuery to get netherlands from the database
function weatherNL()
{
    let location= 'Amsterdam,netherlands';
    let endPoint = url + location + '&appid=' + apiKey;
    $.getJSON(endPoint, function(data)
    {
        $('#seven').html(data.name);    
        $('#eight').html(data.weather[0].despription);
        $('#nine').html(data.main.temp);
        $('#ten').html(data.humidity);
        $('#eleven').html(data.wind.speed);
    });
}weatherNL();

//JQuery to get Norway from the database
function weatherNor()
{
    let location= 'Oslo,norway';
    let endPoint = url + location + '&appid=' + apiKey;
    $.getJSON(endPoint, function(data)
    {
        $('#seven').html(data.name);    
        $('#eight').html(data.weather[0].despription);
        $('#nine').html(data.main.temp);
        $('#ten').html(data.humidity);
        $('#eleven').html(data.wind.speed);
    });
}weatherNor();