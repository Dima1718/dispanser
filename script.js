document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        alert(`Вы искали: "${query}"`);
        // Здесь вы можете отправить запрос на сервер или выполнить другую логику
    } else {
        alert('Введите поисковый запрос');
    }
});
