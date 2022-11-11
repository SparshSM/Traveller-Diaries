let API='http://localhost:5000';
export async function logEnteries(){
    const response = await fetch(`${API}/api/logs/getlogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem('token'),
        }});
    return response.json()
}
export async function AllLogEnteries(){
    const response = await fetch(`${API}/api/logs/totallogs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }});
    return response.json();
}
export async function createLogEntry(entry){
    const response = await fetch(`${API}/api/logs/addlog`,{
        method: 'POST',
        headers:{
            'content-type':'application/json',
            "auth-token":
              localStorage.getItem('token'),
    },
    body:JSON.stringify(entry)
    });
    return response.json();
}
