import { useState } from "react";

function Square({value, onSquareClick}){                 // funcao para cada quadrado no jogo
    return (
        <>
            <button className="square" onClick={onSquareClick}>{value}</button>
        </>
    )
}

export function Board(){             // tabela do jogo

    const [xIsNext, setXIsNext] = useState(true);          // para alternar entre X e O
    const [squares, setSquares] = useState(Array(9).fill(null));   // array com o valor de cada quadrado
    const winner = calculateWinner(squares);
    let status;

    if (winner) {                        // se tiver um vencedor, mostra quem venceu

        status = "Winner: " + winner;             

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
        
        setSquares(nextSquares);      // muda o valor do array squares com o valor da copia nextSquares
        setXIsNext(!xIsNext);        // ! inverte o valor booleano do xIsNext  
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

        return null;         // se n, ele retorna nada

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