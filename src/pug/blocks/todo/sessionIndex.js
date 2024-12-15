export default function sessionIndex() {
    let visitCount = sessionStorage.getItem('visitCount');

    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    sessionStorage.setItem('visitCount', visitCount);
    document.querySelector('.todo__counter').textContent = visitCount
}