html5sql.openDatabase("com.nikitin.recipes", "0.0.1", "Recipe Galore", 1000000);

function checkDB() {
	html5sql.process(
		[
			"CREATE TABLE if not exists brands (id INTEGER PRIMARY KEY, name TEXT, notes TEXT);",
			"SELECT * FROM brands;"
		],
		function(transaction, results, rowsArray) {
			if(rowsArray.length > 1) {
				console.log("Data!");
				readDB();
			}else {
				console.log("no data!");
				populateDB();
			}
		}, catchError);
}

function populateDB() {
	html5sql.process(
		[
			"INSERT INTO brands(name, notes) VALUES ('The BLAH BLAH','Drink a bottle of anything.');",
			"INSERT INTO brands(name, notes) VALUES ('The Fucker','Drink a bottle of anything.');",
		],
		function(){
			console.log("Populated!");
			readDB();
		}, catchError);
}

function readDB() {
	html5sql.process(
		[
		"SELECT * FROM brands;"
		],
		function(transaction, results, rowsArray){
			console.log("Success!");
			var html = '';
			for(var i;i<rowsArray.length;i++){
				var id = rowsArray[i].id;
				var name = rowsArray[i].name;
				var notes = rowsArray[i].notes;
				html += '<p><a href=""#test" id="' + id + '">' + name + '</a></p>';
			}
			$("#absinthe").append($(html));
		}, catchError);
}

function dropTables() {
	html5sql.procss(
		[
		"DROP TABLE brands;",
		
		],
		function(){
			console.log("Table Dropped");
		}, catchError);
}



function addAbsinthe() {
	html5sql.procss(
		[
			"INSERT INTO brands(name, notes) VALUES ('SMiley','Drink a bottle of anything.');",
		
		],
		function(){
			console.log("Add Thingy");
		}, catchError);
}

function updateAbsinthe() {
	html5sql.procss(
		[
		"UPDATE brands SET name='', notes='' WHERE id='1';",
		
		],
		function(){
			console.log("Table updated");
		}, catchError);
}

function removeAbsinthe() {
	html5sql.procss(
		[
		"DELETE FROM brands WHERE id='1';",
		
		],
		function(){
			console.log("REMOVED!");
		}, catchError);
}