url = "http://127.0.0.1:5000/api/v1.0/"
query_url = url+2017

d3.json(query_url).then(function(data){
    console.log(data.arrest_count)
});