function show(num)
{
    if(num%5 == 0 && num%3 == 0)
    {
        textTemp = "FizzBuzz"
        
    }
    else
    {
        
        switch(num){
         case 2: 
            textTemp = "偶数です"
            break; 
         case 3: 
            textTemp = "Fizz"
            break; 
         
         case 5: 
            textTemp = "Buss"
            break; 
         case 7: 
            textTemp = "7の倍数です"
            break;    
        default :
            textTemp = str(num)
            break; 
        }
    }

    return textTemp
}