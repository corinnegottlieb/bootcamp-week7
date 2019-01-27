$(`button`).click(function(){
    let input = $(`input`).val()
    $.post(`/word`, input, function(response){
        loadPage()
    })
})

const loadPage = ()=>{
    $(`.words`).empty()
    $.get(`/words`, function(response){
response.forEach(w=>$(`.words`).append(`<div>${w}</div>`))
    })
}

loadPage()