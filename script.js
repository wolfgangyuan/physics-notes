function showContent(id) {
    document.querySelectorAll('.page').forEach(el =>{
        el.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(id+'-button').classList.add('active');
}

const mdFile = '/Logs/2026.2.24.md';

const mdContainer = document.getElementById('log-container');
fetch(mdFile)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(md => {
        const htmlContent = marked.parse(md);
        mdContainer.innerHTML = htmlContent;
    })
    .catch(error => {
        console.error('Error fetching markdown file:', error);
        mdContainer.innerHTML = '<p>Error loading log content.</p>';
    });