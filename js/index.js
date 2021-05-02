const randomFolks = document.querySelector(".random-peeps");

const getData = async function (){
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = usersRequest.json();
    console.log(data);

    const usersResults = data.result;
    console.log(usersResults);
}

getData();

