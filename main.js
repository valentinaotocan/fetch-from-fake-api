async function fetchData() {
    let response = await fetch('http://jsonplaceholder.typicode.com/posts/?_limit=10');
    let data = await response.json();
    console.log(data);
}
fetchData()