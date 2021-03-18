let themeDot = document.getElementsByClassName('theme-option-dot')

for (let y = 0; y< themeDot.length; y++){
    themeDot[y].addEventListener('click',function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(theme){
    if (theme=='blue')
    document.getElementById('themeStyle').href = 'dot1.css';

    if (theme=='salmon')
    document.getElementById('themeStyle').href = 'dot2.css';

    if (theme=='khaki')
    document.getElementById('themeStyle').href = 'dot3.css';

    if (theme=='green')
    document.getElementById('themeStyle').href = 'dot4.css';

}