import {updateTokenLife} from "./util.ts";

export function addAnswerToTotal(correct: boolean) {
    const currentTotal: number = getTotalAnswered();
    const currentCorrect: number = getTotalCorrect();

    localStorage.setItem("totalAnswered", JSON.stringify(currentTotal+1));
    if (correct) localStorage.setItem("totalCorrect", JSON.stringify(currentCorrect+1));
    updateTokenLife();
}

export function getTotalAnswered(): number {
    const totalAnswered = JSON.parse(localStorage.getItem("totalAnswered"));
    if (totalAnswered) return totalAnswered;
    else return 0;
}

export function getTotalCorrect(): number {
    const totalCorrect: number = JSON.parse(localStorage.getItem("totalCorrect"));
    if (totalCorrect) return totalCorrect;
    else return 0;
}