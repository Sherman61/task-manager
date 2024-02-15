const timerDemo = (function(){
        // let count = 0;
        const func = setInterval(function(){
            //count += 5; //count = count + 5
            // console.log(`count = ${count}`)
            console.log("H1!")
        },2000)

        return func;

})()

function setInterval(callback,interval){

}