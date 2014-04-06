/**
 * Simple DOM Manipulation
 */

//get element
function $getE(element){
  return document.getElementById(element);
}
//Remove element
function $remove(parent, child){
  document.getElementById(parent)
  .removeChild(document.getElementById(child));
}
//get element by tag
function $getT(tag){
  return document.getElementsByTagName(tag);
}
//Get window Size and Space Depth
function $pScreen(){

  pScreen =  {
    h : document.documentElement.clientHeight, 
    w: document.documentElement.clientWidth                    
  };


  return pScreen;
}
