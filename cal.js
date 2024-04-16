let screen=document.querySelector('#demo');
let btn=document.querySelectorAll('button');
let str="";
btn.forEach((val,i)=>{
    val.addEventListener("click",(e)=>{
      let select=e.target.textContent;
      if(select=='=')
      {
        
        str=String(eval(str));
         screen.value=str; 
         
      }
      else if(select=='AC')
      {
        str="";
        screen.value=str;
      }
      else if(select=='DEL')
      {
        str=str.substring(0,str.length-1);
        console.log(str);
        //screen.value=str;
      }
      else{
        str+=select;
        screen.value=str;
      }
    
    })
});