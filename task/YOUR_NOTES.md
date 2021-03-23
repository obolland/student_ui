
## Usage instructions

- Install dependancies -
Install required dependancies for client and api.
To install dependancies do the following...
*cd into client directory from root directory "cd client",
*install dependancies "yarn",
*cd into the api directory "cd api" from root directory or "..cd cd api" from client directory,
*install dependancies "yarn"

- Run program locally -
Both localhost:3000 and localhost:9000 must be running at the same time to run this application.
*cd into api directory "cd api",
*start api server "yarn start",
*cd into the client directory "cd client" from root directory or "..cd cd client" from client directory,
*start client server "yarn start".
Localhost:3000 should now launch from the browser and the app will run.

## Additional notes

I have moved input_mis_data and output_mis_data under api/public.
The format for the output data is a little odd in that I don't see any clear reason why the object key names in my application would need to be different to the object key names returned from the API call. Logically, a protocol should be established between database and application to avoid this scenario.
I have hard-coded the map nonetheless. I would like to have done this in a dynamic way to avoid breakages i.e. if a field name were to be changed in the database it would still map correctly to the desired feild name within this application. The only concievable way of achieving this at my end is to do the map based indexes, however this completely relies on the data arriving in the same order every call which is not something you can rely on.
Not sure about what some of the data fields should map to as the names are so different, in the real world I would ask a subject matter expert to clarify but in this case I guessed/left them blank.