const loadBlogData =()=> {
    const blogDiv=document.getElementById('blog-2');
    blogDiv.style.border="1px solid blue";
    const li=document.createElement('li');
    li.innerText='';
    li.innerText=`var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
    It can be said that a variable declared with var is defined throughout the program as compared to let. 
    `;
    blogDiv.appendChild(li);
}
