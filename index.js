
//1.  Use document.querySelectorAll to find nested nodes
//2.  Change the value of the correct DOM nodes

//- Define a function `getFirstSelector(selector)`, which accepts a selector and
//  returns the first element that matches.

function getFirstSelector(selector) {
  var first = document.querySelectorAll(selector)
  return first[0]
}



// -Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
//   (`#` is used for IDs in selectors — but you knew that because you [read the docs][docs],
//   right? :) ). (Note that in `index.html` `#nested` and `.target` just
//   _happen_ to be `div`s. This method should work with arbitrary elements.)

function nestedTarget(){
   var first = document.querySelector('#nested .target')
   //first = document.getElementById('nested').querySelector('div div div')
  return first
}


// - Define a function `increaseRankBy(n)` that increases the ranks in all of the
//   `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`][parseint]

function increaseRankBy(n){
  var something = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++){
    something[i].innerHtml = (parseint(something[i].innerHtml)+n).toString();
  }
}



// - Define a function `deepestChild()` that pulls out the most deeply nested child
//   element from `div#grand-node`. (Remember, you can iterate over elements and call
//   `querySelector()` and `querySelectorAll()` on them. This is challenging to
//   implement correctly, but not beyond your ability!)

function deepestChild(){}




