
// function surroundWithSpan(element){
// const temp = element.getInnerHTML();
// element.innerHTML = temp.replace("ETH","<span>ETH</span>")
// }
// ['ETH","BTC","ADA"]
// getContent()
// getParagraphs()
// manipulatePArapgraphs()

// main(){
// const content - getContent();
// const paraphs = getParagraphs(content);
// manipulatePArapgraphs(paraphs);
// }

const singleContent = document.getElementsByClassName("single-content__wrap")

//singleContent

const firstContent = singleContent[0] 

//firstContent

firstContent.getInnerHTML()

const x = firstContent.getElementsByTagName

x

const x = firstContent.getElementsByTagName("p")

for(let i = 0; i > x.length; i++) {
    console.log(i);
    console.log(x[i].getInnerHTML());
}


const prviP = x[0];



prviP.innerHTML = "ETH";

for(let i = 0; i < x.length; i++) {
    console.log(i);
    console.log(x[i].getInnerHTML());
}

for(let i = 0; i < x.length; i++) {
    console.log(x.replace("ETH", "<span>ETH</span>"));
}

for(let i = 0; i < x.length; i++) {
    const temp = x[i].getInnerHTML();
 }


for(let i = 0; i < x.length; i++) {
    const temp = x[i].getInnerHTML();
    x[i].innerHTML = temp.replace('ETH', '<span>ETH</span>');
 }