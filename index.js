const text=document.getElementById("quote");
const nameEl=document.getElementById("name");
const button=document.getElementById("button");
const url="https://api.quotable.io/random"
function updateQuote()
{
    const response=fetch(url);
    response.then((res)=>{ return res.json()
    }).then((data)=>{
       text.innerText=data.content;
       nameEl.innerHTML=data.author;
    })
}

button.addEventListener("click",()=>{
    updateQuote();
})