document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const nutrientType = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:8000/api/${nutrientType}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.type
    }catch(error){
        console.log(error)
    }
}