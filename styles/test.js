function inacc(x){x=x.toString(); return x.indexOf(".")==-1 || x.indexOf(".")>=x.length-3 || x.toLowerCase().indexOf("e")!=-1};
function roundsqrt(){
var i=getInput("document.Frsqrt.n.value","n","Z");
var P=Math.pow((Math.sqrt(5)+1)/2,i)/Math.sqrt(5),
p=Math.pow((-Math.sqrt(5)+1)/2,i)/Math.sqrt(5);
if(!isFinite(p)|| !isFinite(P)){alert("n is too large - sorry!");ERROR()};
document.FrsqrtR.res.value += (i<0?" ((-phi)^":"(Phi^")+i+")/sqrt(5) = "+(i<0?p:P)+
(i<0&inacc(p) || i>0&inacc(P)
?" may not be accurate enough"
:" \r rounds to Fib("+i+") ="+Math.round(i<0?p:P)
)+"\r";
}; 