
/**
 * Creating JSON API is quite simple.
 * Just document.write it, because it's JavaScript!
 */

var greet = ["hi","hello","good morning","see you"];

document.set("#hello", "\"Hello World!\" by template");
document.set("#roop", function(doc, e){
	for ( var i in greet) {
		doc.set(".greet", greet[i]);
		doc.out(e);
	}
})
document.out();