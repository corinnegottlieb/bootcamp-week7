$(`#button`).click(function(){
    let input = {name: $(`#input`).val()}
    $.post(`/word`, input, function(response){
        loadPage()
})


})

const loadPage = () => {
    $(`.words`).empty()
$.get(`/words`, function(response){
    response.forEach(r=>$(`.words`).append(`<div>${r.name}</div>`))
} )
}

loadPage()