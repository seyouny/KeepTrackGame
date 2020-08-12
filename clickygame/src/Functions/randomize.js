function randomize ()
{
    var fillerList = [0,0,0,0,0,0,0,0,0]
    var arrayList = [0,1,2,3,4,5,6,7,8]
    while (Math.floor(Math.random()*10 < 5))
    {
        var shift = Math.floor(Math.random()*10)
    }

    for (i in arrayList)
    {
        if (i + shift > 8){
           fillerList[i] = arrayList[8 - i + shift]
        //    console.log(i, arrayList[8 - i + shift], arrayList[i])
        }
        else
        {
            fillerList[i]=arrayList[i+shift]

        }
    }
    console.log(shift)
    return fillerList
}   

console.log (randomize())
