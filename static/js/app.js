url = "http://127.0.0.1:5000/api/v1.0/"


function buildChart(year){

    query_url = url+year

    d3.json(query_url).then(function(data){

        console.log(data);
        const arrest_count = data.arrest_count
        var pt = []
        var pt_count = []
        arrest_count.forEach(element => {

            pt.push(element[0])
            pt_count.push(element[1])
            
        });
        console.log(pt);
        console.log(pt_count);
        // console.log(arrest_count);

        let bar1Data = [{
            x : pt,
            y : pt_count,
            type : "bar",
            // orientation : "h"
        }];
    
        let bar1Layout = {
            title : `Crimes by Primary Type for selected year`,
            margin : {
                t: 50,
                r: 50,
                b: 150,
                l: 50
            },
            xaxis: {
                tickangle: 90, 
                categoryorder:'total descending'
            }
        };
        
        Plotly.newPlot("bar1", bar1Data, bar1Layout)
    
    }); //end of data

}

function init(){
    let dropDownMenu = d3.select('#selDataset_yr');
    d3.json(query_url).then(function(data){
        // console.log(data);

        // sub_ID = data.names;
        console.log(sub_ID);
        sub_ID.forEach((sample) => {
            dropDownMenu.append("option").property("value", sample).text(sample);
        })
    });

    buildChart(year);

    // addmetaData(940);
}

// create event handler onchange defined in index.html by creating the function on "optionChanged"

function optionChanged(year){
    // addmetaData(sample);
    buildChart(year);
}

init()


// buildChart(2015)



