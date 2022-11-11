let API='http://localhost:5000';
export async function logEnteries(){
    const response = await fetch(`${API}/api/logs`);
    return response.json()
}
export async function createLogEntry(entry){
    const response = await fetch(`${API}/api/logs`,{
        method: 'POST',
        headers:{
            'content-type':'application/json'

    },
    body:JSON.stringify(entry)
    });
    return response.json();
}
