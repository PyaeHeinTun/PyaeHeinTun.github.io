var text_typing_elements = document.getElementsByClassName("text_typing")
var typing_speed = 120
var isRerun = true
for (let index = 0; index < text_typing_elements.length; index++) {
    const element = text_typing_elements.item(index);
    var innerText = element.innerText
    element.innerText = ""
    
    renderText(innerText,0)

    function renderText(text,index) {
        if (index == text.length){
            if (isRerun){
                var cacheText = element.innerText
                element.innerText = ""
                renderText(cacheText,0)
            }
            return;
        }
        element.innerText += text[index]
        setTimeout(() => {
            renderText(text,index+1)
        }, typing_speed);
    }
}