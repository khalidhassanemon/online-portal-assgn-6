const loadCategory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayTitles(data.data.news_category);
    }
    catch(error){
        console.log(error);
    }
}

const displayTitles = (cat) => {
    const categoryContainer = document.getElementById('category-container');
    let i = 0;
    cat.forEach(title => {
        const titleList = document.createElement('div');
        titleList.innerHTML = `
        <a onclick="newsItems('${title.category_id}')" class="mx-2" href="#">${title.category_name}</a>
        `
        i = i + 1;
        categoryContainer.appendChild(titleList);
    });
    
}

loadCategory();