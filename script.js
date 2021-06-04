
// document.addEventListener("DOMContentLoaded", function() {


    document.querySelector(".submitbutton").addEventListener('click',function(){
        const values = $('#leftValues').val();
        alert("Submitted: " + values.toString());
    })


    $("#btnLeft").click(function () {
        var selectedItem = $("#rightValues option:selected");
        $("#leftValues").append(selectedItem);
    });
    
    $("#btnRight").click(function () {
        var selectedItem = $("#leftValues option:selected");
        $("#rightValues").append(selectedItem);
    });
    
    // $("#rightValues").change(function () {
    //     var selectedItem = $("#rightValues option:selected");
    //     $("#txtRight").val(selectedItem.text());
    // });


    let m1,m2,n=[],
        mainObj = {};

    let datapairxy =[];
    let datapairxx =[];

    let allData;

    let GenerateDataPair = function(){
        for (var i=0; i<m1.length;i++){
            datapairxy.push({
                x: m1[i],
                y: n[i]
            })
            datapairxx.push({
                x: m1[i],
                y: m2[i]
            });
        }
    };

    function generateDataPairFromX(x, y){
        const data = [];
        for (var i=0; i<x.length;i++){
            data.push({
                x: x[i],
                y: y[i]
            })
        }
        return data;
    };

function createChart(data, containerId){
    var container = document.getElementById(containerId);
    container.innerHTML = '';
    var canvas = document.createElement('canvas');
    container.appendChild(canvas);
    return new Chart(canvas, {
        type: 'scatter',
        data: {     
            datasets: [{
                label: 'Scatter Dataset',
                data: data,
            }]
        },
        options: {
        }
    });
}


var ctxone = document.getElementById('myChartone');
var ctxtwo = document.getElementById('myCharttwo');


// var myCharttwo = new Chart(ctxtwo, {
//     type: 'scatter',
//     data: {     
//         datasets: [{
//             label: 'Scatter Dataset',
//             data: datapairxx,
//         }]
//     },
//     options: {
//     }
// });

document.querySelector("#trybuttonone").addEventListener('click',function(){
    const userSelectedX = document.getElementById("variable-one").value;
    const myData = generateDataPairFromX(allData[userSelectedX], n);
    const myChart = createChart(myData, 'chart-container');
    console.log('ready :)');
})



document.querySelector("#trybuttonthree").addEventListener('click',function(){
    const userSelectedXleft = document.getElementById("variable-two").value;
    const userSelectedXbottom = document.getElementById("variable-three").value;
    const myDataTwo = generateDataPairFromX(allData[userSelectedXbottom],allData[userSelectedXleft]);
    const myChartTwo = createChart(myDataTwo, 'chart-container-two');
    console.log('ready :)');
})


fetch("./data.json")
    .then(response => response.json())
    .then(data=>{

        m1 = data.X1;
        n = data.Y;
        m2 = data.X2;

        GenerateDataPair();

        allData = data;
    });


    


// })