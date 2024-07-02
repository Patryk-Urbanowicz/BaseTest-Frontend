// Token life is 6 hours
export const msTokenLife = 1000*60*60*6;

export function getToken(): string {
    return JSON.parse(localStorage.getItem("token"));
}

export function getTokenDate(): number {
    return JSON.parse(JSON.parse(localStorage.getItem("tokenDate")));
}

export function getTokenTimeLeft(): number {
    return Date.now() - getTokenDate();
}

export function updateTokenLife(): void {
    localStorage.setItem("tokenDate", JSON.stringify(Date.now()));
}

//Checks if token exists in localStorage and handles it being stale
//cal takes place in Root.tsx to its done only oncedf
export async function initToken(){
    const token = getToken();
    const tokenDate = getTokenDate();

    if (!token || !tokenDate || getTokenTimeLeft() <= 0) {
        const response = await fetch('https://opentdb.com/api_token.php?command=request');
        if (!response.ok) return;
        const responseData = await response.json();
        localStorage.setItem("token", JSON.stringify(responseData.token));
        localStorage.setItem("tokenDate", JSON.stringify(Date.now()));
    }
}