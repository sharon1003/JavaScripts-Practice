NQueens(4);

function NQueens(number) {
    // initialize arr
    let arr = [];
    for (let i = 0; i < number; i++)
    {
        arr.push([]);
    }

    for(let i = 0; i < number; i++) 
    {
        for (let j = 0; j < number; j++) 
        {
            arr[i][j] = null;
        }
    }

    console.log(arr);
    let i = 0;
    let j = 0;
    let loop = true;
    while (loop) 
    {
        console.log();
        arr[i][j] = 'Q';

        // set violation is false
        // 1. check up-right
        // 2. check down-left
        // 3. check left
        // 4. check up
        let violation = false;
        let k = 0;
        while () {
            if(violation)
        }
        
    }
};

