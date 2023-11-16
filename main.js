'use strict';

{
    //メニューと目標回数で追加するとlistでhtmlを生成する
        //メニューと回数を取得して、その値を用いて、listを生成する
        //その際に、id属性を付与した状態で連番にしてそれをinputの属性に入れて追加していく
        const menu = document.getElementById('menu');
        const targetNum = document.getElementById('targetNum');
        const mainAdd = document.getElementById('mainAdd');
        const ul = document.getElementById('ul');
        


        mainAdd.addEventListener('click', () => {
            if (!(menu.value === "") && !(targetNum.value === "")) {
                const newList = document.createElement('li');
                const newSpan = document.createElement('span');
                const newButton = document.createElement('button');
                const newBr = document.createElement('br');
                const newP = document.createTextNode(`残り:${targetNum.value}回`);
                const newMenuText = document.createTextNode(menu.value);
                const newTargetNumText = document.createTextNode(`目標回数：${targetNum.value}回`);
                const newInput = document.createElement('input');
        
                newSpan.appendChild(newMenuText);
                newButton.textContent = "追加";
                newList.appendChild(newSpan);
                newList.appendChild(newTargetNumText);
                newList.appendChild(newInput);
                newList.appendChild(newButton);
                newList.appendChild(newBr);
                newList.appendChild(newP);
                ul.appendChild(newList);
        
                menu.value = "";
                targetNum.value = "";
            } else {
                console.log("二つとも入力してね");
            }
        });
        
}