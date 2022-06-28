
let loggedIn = [];
//takes Express app, returns constructed Express-router object with routes
function gen(app)
{
    //Routes definition
    app.post('/data',async (req,res,err) => {
	      console.log(req.body);
        res.send("test get data live working");
    });

}
exports.gen = gen;