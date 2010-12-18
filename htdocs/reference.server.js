

header("Content-Type: text/html; charset=utf8");

document.load("reference.html");
document.set(load_yaml("reference" + query.path + ".yaml"));
document.out();
