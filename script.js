// script.js

// 変換関数
function convertToFahrenheit() {
    // 入力フィールドから摂氏温度を取得
    let a = document.getElementById('celsius').value;

    // 入力が有効かどうか確認
    if (a == '') {
        alert('摂氏温度を入力してください');
        return;
    }

    // 摂氏から華氏への変換公式
    // 華氏温度 = (摂氏温度 * 9/5) + 32
    let fahrenheit = (a * 9/5) + 32;

    // 結果を表示
    document.getElementById('result').innerText = `華氏温度: ${fahrenheit.toFixed(2)}°F`;
}


function degreesToFahrenheit() {
    // 入力フィールドから摂氏温度を取得
    let degrees = document.getElementById('degrees');

    // 入力が有効かどうか確認
    if (degrees === '') {
        alert('華氏温度を入力してください');
        return;
    }

    // 摂氏から華氏への変換公式
    // 華氏温度 = (摂氏温度 * 9/5) + 32
    let fahrenheit = (degrees * 32) / 1.8;

    // 結果を表示
    document.getElementById('degrees-result').innerText = `華氏温度: ${fahrenheit.toFixed(1)}°F`;
}

