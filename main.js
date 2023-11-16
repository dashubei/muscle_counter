'use strict';

{
    const menu = document.getElementById('menu');
    const targetNum = document.getElementById('targetNum');
    const mainAdd = document.getElementById('mainAdd');
    const ul = document.getElementById('ul');

    let buttonCounter = 0; // ボタンの連番を管理する変数

    mainAdd.addEventListener('click', () => {
        if (!(menu.value === "") && !(targetNum.value === "")) {
            const newList = document.createElement('li');
            const newSpan = document.createElement('span');
            const newButton = document.createElement('button');
            const newBr = document.createElement('br');
            const newP = document.createElement('p');
            const newH2 = document.createElement('h2');
            const P = document.createElement('p');
            const newMenuText = document.createTextNode(menu.value);
            const newTargetNumText = document.createTextNode(`目標回数：${targetNum.value}回`);
            const newInput = document.createElement('input');

            let remainingCount = parseInt(targetNum.value); // 残り回数を初期化

            newSpan.appendChild(newMenuText);
            P.appendChild(newTargetNumText);
            newButton.textContent = "完了";
            newList.appendChild(newSpan);
            newList.appendChild(P);
            newList.appendChild(newInput);
            newList.appendChild(newButton);
            newList.appendChild(newBr);
            newList.appendChild(newP);
            ul.appendChild(newList);

            // ボタンのIDに連番を付与
            const buttonId = `newMenu-${buttonCounter}`;
            newButton.id = buttonId;
            buttonCounter++;

            newButton.addEventListener('click', () => {
                if ((remainingCount - newInput.value) >= 0) {
                    remainingCount -= newInput.value;
                    newInput.value = '';
                    newP.textContent = `残り:${remainingCount}回`;

                    // 残り回数が0になった場合、処理を中止
                    if (remainingCount === 0) {
                        newP.textContent = 'お疲れ様!!!!';
                        newButton.disabled = true; // ボタンを無効化
                        newButton.classList.add('done');
                    }
                }
            });

            // 初期の残り回数を表示
            newP.textContent = `残り:${remainingCount}回`;

            menu.value = "";
            targetNum.value = "";
        } else {
            console.log("二つとも入力してね");
        }
    });
}
