// Sheetrock docs:
// http://chriszarate.github.io/sheetrock/

//sheet must be set as public
var dataSheet = "https://docs.google.com/spreadsheets/d/1_jwvqIuHLL79VMd7a5qoxinWpJLNsQRzX8PYHjOR_7A/edit#gid=0";

//configure the query - callback is the function to run onSuccess - reset flag runs a new query every time
sheetrock({
    url: dataSheet,
    query: "select A,B,C WHERE B > 19",
    callback: displayResult,
    reset: true
});

function displayResult(error, options, response) {

    console.log(response);

    //iterate over result set and display
    for(var d=1;d<response.rows.length;d++) {

        //name
        $("body").append(response.rows[d].labels[0] + ": ");
        $("body").append(response.rows[d].cellsArray[0] + "<br>");

        //age
        $("body").append(response.rows[d].labels[1] + ": ");
        $("body").append(response.rows[d].cellsArray[1] + "<br>");

        //status
        $("body").append(response.rows[d].labels[2] + ": ");
        $("body").append(response.rows[d].cellsArray[2] + "<br><br>");
    }

}
