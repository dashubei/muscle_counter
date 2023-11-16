'use strict';

{
    const pushUp = document.getElementById('pushUp');
    const curl = document.getElementById('curl');
    const press = document.getElementById('press');
    let chestCount = 100;
    let armCount = 100;
    let sholderCount = 100;
    
    pushUp.addEventListener('submit', (e) => {
        e.preventDefault();
        const Num = chestCount - (document.getElementById('a').value);
        document.getElementById('chest').textContent = Num;
        chestCount = chestCount- (document.getElementById('a').value);
    });
    curl.addEventListener('submit', (e) => {
        e.preventDefault();
        const Num = armCount - (document.getElementById('b').value);
        document.getElementById('arm').textContent = Num;
        armCount = armCount- (document.getElementById('b').value);
    });
    press.addEventListener('submit', (e) => {
        e.preventDefault();
        const Num = sholderCount - (document.getElementById('c').value);
        document.getElementById('sholder').textContent = Num;
        sholderCount = sholderCount- (document.getElementById('c').value);
    });
}