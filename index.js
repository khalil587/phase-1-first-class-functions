function receivesAFunction(spy){
     spy();

}

function returnsANamedFunction(){
    function coder(a="before all"){
        return (`Victory, ${a}`);
    }
     return coder
    
}
function returnsAnAnonymousFunction(){
    return function(){

    }
}