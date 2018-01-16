export default {
  get: async () => {
    const url = `http://localhost:64641/api/names`;
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const response = await fetch(url, {mode: 'cors', headers: headers});
    console.log("I did this");
    return await response.json();
  },
  analyzeNames: async (names) => {
    const url = "http://localhost:64641/api/analyze";
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const response = await fetch(url,
      {mode: 'cors', headers: headers, method: 'POST', body: JSON.stringify({names: names})
    });
    return await response.json();
  }
}
