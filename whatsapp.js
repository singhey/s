function spam() {
    let prompt1 = prompt("Enter the spam message", "");
    const prompt2 = prompt("Send how many messages per second?", 1);

    const input = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text");
    window.InputEvent = window.Event || window.InputEvent;

    let count = 0;

    if (prompt1 === "") {
        prompt1 = "&#8203;";
    }

    console.log("Starting Spam");

    window.setInterval(function() {
        count++;

        input.innerHTML = prompt1;

        input.dispatchEvent(new InputEvent("input", {
            bubbles: true
        }));

        let enviar = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3) > button");
        enviar.click();

        console.log('Messasages sent: ' + count);
    }, 1000 / prompt2);
}
