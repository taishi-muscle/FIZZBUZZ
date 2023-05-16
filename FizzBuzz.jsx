function show(num)
{
    if(num%5 == 0 && num%3 == 0)
    {
        textTemp = "FizzBuzz"
        
    }
    else if(num%5 == 0)
    {
        textTemp = "Buss"
    }
    else if(num%3 == 0)
    {
        textTemp = "Fizz"
    }
    else if(num%7 == 0)
    {
        textTemp = "Fizz"
    }
    else if(num%11 == 0)
    {
        textTemp = "Fizz"
    }
    else
    {
        textTemp = str(num)
    }

    return textTemp
}