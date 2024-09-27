const setData = async () =>{
    return await fetch("http://localhost:8080")
}

const data = setData()
console.log(data)