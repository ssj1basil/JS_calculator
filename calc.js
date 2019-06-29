let preval="";
let newval="";
let result="";
let mathoperator="";
let decimal="false";
let memstored="";

function numbtnpress(num)
{
   if(result)
   {
    newval=num;
    result="";
   }

   else{
       if(num=='.')
       {
           if(decimal=='false')
           {
            newval+=num;
            decimal='true';
           }
       }
       else
       {
           newval+=num;
       }
   }
   
   document.getElementById('entry').value=newval;

}

function mathbtnpress(operator)
{
    mathoperator=operator;
    preval=newval;
    newval="";
    result="";
    
    document.getElementById('entry').value=newval;

}

function equalbtnpress()
{
    preval= parseFloat(preval);
    newval=parseFloat(newval);

    switch(mathoperator)
    {
        case '+': result= preval + newval;
                    break;
        case '-': result= preval - newval;
                    break;
        case '*': result= preval *newval;
                    break;    
        case '/': result= preval  / newval;
                    break;   
    }

    newval=result;
    document.getElementById('entry').value=result;
 
}

function clearbtnpress()
{
    document.getElementById('entry').value="0";
    newval="";
    preval="";
    decimal="false";
    result="";
    mathoperator="";

}

function copybtnpress()
{

    memstored= document.getElementById('entry').value;

}

function pastebtnpress()
{
    if(memstored)
    {
        newval= memstored;
        document.getElementById('entry').value = memstored;

    }

}