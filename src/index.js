//  git test
import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値の取得と初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //　divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //　liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //  buttonタグ生成(完了)
  const compbutton = document.createElement("button");
  compbutton.innerText = "完了";
  compbutton.addEventListener("click", () => {
    const compTarget = compbutton.parentNode;
    //  押された完了ボタンの親（div）を削除
    document.getElementById("incomplete-list").removeChild(compTarget);

    //  完了リスト追加
    //  TODO内容テキストを取得
    const text = compTarget.firstElementChild.innerText;

    //  div以下の初期化
    compTarget.textContent = null;

    //  li生成
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //  戻すボタン
    backButton.addEventListener("click", () => {
      const delTarget = backButton.parentNode;
      document.getElementById("comp-List").removeChild(delTarget);
      const text = backButton.parentNode.firstElementChild.innerText;

      //　divタグ生成
      const div = document.createElement("div");
      div.className = "list-row";

      //　liタグ生成
      const li = document.createElement("li");
      li.innerText = text;

      // divの子要素に各要素を設定
      div.appendChild(li);
      div.appendChild(compbutton);
      div.appendChild(delbutton);

      //  未完了のリストに追加
      document.getElementById("incomplete-list").appendChild(div);
    });

    compTarget.appendChild(li);
    compTarget.appendChild(backButton);

    document.getElementById("comp-List").appendChild(compTarget);
  });

  //  buttonタグ生成(削除)
  const delbutton = document.createElement("button");
  delbutton.innerText = "削除";
  delbutton.addEventListener("click", () => {
    //  押された削除ボタンの親（div）を削除
    //  削除したい要素のdivタグ配下を指定
    const deleteTarget = delbutton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compbutton);
  div.appendChild(delbutton);

  //  未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
