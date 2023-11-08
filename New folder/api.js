console.clear();
// console.log(window)

// onlode
const getdata =() =>{
   const xhr = new XMLHttpRequest();

//    link from jsonplaceholder

   xhr.open( 'GET','https://jsonplaceholder.typicode.com/posts');

   xhr.onload=() =>{

    let data =xhr.response;
    console.log(JSON.parse(data))

   }


   xhr.send();
}

getdata();




