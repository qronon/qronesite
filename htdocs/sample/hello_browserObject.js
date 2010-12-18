
/**
 * List of available browser objects.
 * Most of DOM are NOT accessible directly.
 */

symbols = [
	"location.href",
	"location.protocol",
	"location.host",
	"location.hostname",
	"location.port",
	"location.search",
	"location.hash",
	"query",
	"location.query",
    "document.query",
    ];

document.write("<html><body>");
for( i in symbols ){
	document.write(symbols[i] + " : " + stringify(eval(symbols[i])) + "<br>");
}
document.write("</body></html>");