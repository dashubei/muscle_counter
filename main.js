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
                const newMenu = document.createTextNode(menu.value);
                const newTargetNum = document.createTextNode(targetNum.value);
                const newInput = document.createElement('input');
                newList.appendChild(newSpan);
                newList.appendChild(newMenu);
                newList.appendChild(newTargetNum);
                newList.appendChild(newInput);
                console.log(newList);
                ul.appendChild(newList);
                menu.value = "";
                targetNum.value = "";
            } else {
                console.log("二つとも入力してね");
            }

        });
}