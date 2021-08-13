url = "http://127.0.0.1:5000/api/v1.0/2011/arson"

d3.json(url).then(function(data){
    console.log(data)
})