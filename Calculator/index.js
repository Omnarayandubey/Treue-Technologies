let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try {
                screen.value = eval(screenValue);
            } catch (error) {
                screen.value = 'Error';
            }
        }
        else if (buttonText == '%') {
            try {
                screenValue = (eval(screenValue) / 100).toString();
                screen.value = screenValue;
            } catch (error) {
                screen.value = 'Error';
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    });
}
