
var data = load_yaml("index.yaml");

if( "test" instanceof String){
	
}

for( item in data ){
	if(data[item] instanceof String)
		document.set("#" + item, data[item].replace(/\n/g, "<br>") );
}

document.set("#point", function(doc,e){
	for(i in data.point){
		doc.set(".point", data.point[i]);
		doc.out(e);
	}
});

document.out();

