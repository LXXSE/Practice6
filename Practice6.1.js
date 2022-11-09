let roadMines = []
var a = 0
var b = 0
for (i=1;i<=10;++i){roadMines.push(Math.floor(Math.random() * (2)))}
for (i = 1; i <= roadMines.length; ++i){

    if (roadMines[i] == 1) {
        a = a + 1
        b = b + 1 }
    if (roadMines[i] == 0) {b = b + 1}
    
    console.log('Сейчас танк на ' + i  + ' шагу') 
    if (a==1){
        console.log('Наводчик контужен')
        a = a + 1}
    if (a==3) {
        console.log('Танк уничтожен')
        break } 
    if (i==10) {console.log('Танк дошёл до Берлина! Ура! Победа!')}
    
}