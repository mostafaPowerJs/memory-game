document.querySelector(".control-buttons").onclick = function () {

    let yourName = prompt("whats your name?");

    if (yourName == null || yourName == "") {

        document.querySelector(".name span").innerHTML = "unknown";
 
    } else {

        document.querySelector(".name span").innerHTML = yourName;
    
    }

    document.querySelector(".control-buttons").remove();

}

let duration =  1000;

let blockscontainer = document.querySelector(".game-memory-blocks");

let blocks = Array.from(blockscontainer.children);

const orderRange = Array.from(Array(blocks.length).keys());

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);




blocks.forEach ((block, index) => {



    block.style.order = orderRange[index];

    //ask body
    //console.log(testOrderRange[index])
    //ask body
    block.addEventListener('click', function () {

        flipBlock(block);
    });

});

function flipBlock (selectedBlock) {

    selectedBlock.classList.add("is-flipped");

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"));

    if (allFlippedBlocks.length === 2 ) {

        let massge = "two flipped blocks slected";
        console.log(massge);
        stopClick();
        checkMuchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])
        
    }
}

function stopClick () {

    blockscontainer.classList.add("no-click");

    setTimeout( () => {
        blockscontainer.classList.remove("no-click");
    }, duration)
}

function checkMuchedBlocks (firstblock, secondblock) {

    let triesElement = document.querySelector(".tries span");

    if (firstblock.dataset.tecnology === secondblock.dataset.tecnology) {

        firstblock.classList.remove("is-flipped");
        secondblock.classList.remove("is-flipped");
        firstblock.classList.add("has-much");
        secondblock.classList.add("has-much");
    }
    else {

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout (() => {

            firstblock.classList.remove("is-flipped");
        secondblock.classList.remove("is-flipped");
        }, duration)
    }
}

function shuffle (array) {

    let current = array.length - 1,
        tamp,
        random;


   for (i = current; i > 0; i--) {

    random = Math.floor(Math.random() * current);

    tamp = array[current];

    array[current] = array[random];

    array[random] = tamp;

   }

   return array;
}
/*function shuffle (array) {

    let current = array.length,
        tamp,
        random;
    
    while(current > 0) {

        random = Math.floor(Math.random() * current);

        current--;

        tamp = array[current];

        array[current] = array[random];

        array[random] = tamp;
    }
    return array;
}

function shuffle (array) {

    let current = array.length,

        tamp,

        random;
    
    for (i = current; i > 0; i--) {

        random = Math.floor(Math.random() * current);

        tamp = array[current - 1];

        array[current - 1] = array[random];

        array[random] = tamp;


    }
    return array;
}




*/

