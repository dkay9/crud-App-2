const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "Naruto",
            quote: "People Call Me a Failur,I'll Prove Them Wrong!"
        }),
    })
})