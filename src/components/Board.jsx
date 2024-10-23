import "./Board.css"

function Square({value, onSquareClick}){                 // funcao para cada quadrado no jogo
    
    let XO;           // usando essa variavel para conseguir inserir os svg

    if (value == "X"){

        XO = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="4 1 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
             </svg>;

    }else if (value == "O"){

        XO = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 20">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
             </svg>;

    }

    return (
        <>
            <button className="square" onClick={onSquareClick}>{XO}</button>
        </>
    )
}

export function Board({ xIsNext, squares, onPlay }){             // tabela do jogo

    const winner = calculateWinner(squares);
    let status;

    if (winner && winner != "Draw") {                        // se tiver um vencedor, mostra quem venceu

        status = "Winner: " + winner;    

    }else if(winner == "Draw"){

        status = winner;

    }else{             // se n, mostra quem é o proximo a jogar

        status = "Next player: " + (xIsNext ? "X":"O");

    }

    function handleClick(i){     // funcao q vai alterar o valor de um quadrado quando for clicado

        if (squares[i] || calculateWinner(squares)) {
            return;          // se o quadrado ja estiver preenchido ou ja tiver um vencedor, a funcao handleclick n executa
        }

        const nextSquares = squares.slice();       // criando uma copia do array squares
        if (xIsNext) {

            nextSquares[i] = "X";

        }else {

            nextSquares[i] = "O";

        }

        onPlay(nextSquares);
        
        // setSquares(nextSquares);      // muda o valor do array squares com o valor da copia nextSquares
        // setXIsNext(!xIsNext);        // ! inverte o valor booleano do xIsNext  
    }

    function calculateWinner(squares){      // funcao para verificar se tem um vencedor

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let i = 0; i < lines.length; i++){

            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){     

                return squares[a];           // se tiver, ele retorna o vencedor

            }

        }

        if (squares.includes(null)) {        // o operador in n funciona do msm jeito como em python

            return null;         // se n, ele retorna nada

        }else{                  // para mostrar quando for empate

            return "Draw";

        }

    }
''
    return(
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    ) 
}