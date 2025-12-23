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