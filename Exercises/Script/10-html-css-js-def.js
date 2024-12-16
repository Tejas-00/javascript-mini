// lesson 10 HTML,CSS,JS
    // 10c
    console.log(document.querySelector('.js-button').classList.contains('js-button'));
    // 10d,e
    function onOff(className) {
        if (document.querySelector(`.${className}`).classList.contains('off-button')) {
            document.querySelector(`.${className}`).classList.remove('off-button');
        } else {
            document.querySelector(`.${className}`).classList.add('off-button');
        }
    }
    // 10g
    function offButton(onClassName) {
        document.querySelector(`.${onClassName}`).classList.add('off-button');
    }
    function onButton(offClassName) {
        document.querySelector(`.${offClassName}`).classList.remove('off-button');
    }
    function isOff(className) {
        return document.querySelector(`.${className}`).classList.contains('off-button');
    }
    function offOne(onClassName, offClassName1, offClassName2) {
        offButton(onClassName);
        if (isOff(offClassName1)) {
            onButton(offClassName1);
        }
        if (isOff(offClassName2)) {
            onButton(offClassName2);
        }
    }