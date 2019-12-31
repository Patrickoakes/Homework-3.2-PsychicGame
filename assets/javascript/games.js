var comChoice = Math.floor(Math.random() * 25 + 1);
            var Letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', ' k', 'l', 'm', ' n', ' o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
            var i = i < Letters.length;
           
           
            function psychicFunction(comChoice, Letters) {
                var comChoice = Math.floor(Math.random() * 25 + 1);
                console.log(Letters[comChoice]);
            }
            console.log(Letters[comChoice]);

            document.addEventListener('keyup', logKey);
            function logKey(e) {

                log.textContent += `${e.key}`;
            }
