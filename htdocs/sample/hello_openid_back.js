
/**
 * Say Hello to you.
 */
header("Content-Type: text/html; charset=utf8");

document.write("Hello JavaScript World!");
document.write(document.cookie);
if(user){
	document.write("OK");
	document.write(user.login);
}
