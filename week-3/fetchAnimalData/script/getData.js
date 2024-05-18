const getAnimalData=async ()=>{
    let resp = await fetch("https://fakerapi.it/api/v1/persons")
    let dataobj = await resp.json();
    document.getElementById("content").innerHTML=JSON.stringify(dataobj.data);
}
