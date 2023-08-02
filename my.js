function drawSquarePattern() {
    const size = document.getElementById("size").value;
    let patternOutput = '';

    for (let i = 1; i <= size; i++) {
      let row = ``;
      for (let j = 1; j <= size; j++) {
        row += "* ";
      }
      patternOutput += row + '<br>';
    }

    document.getElementById("patternOutput").innerHTML = patternOutput;

  }

//   second

function drawSquarePatterntwo() {
    const size = document.getElementById("sizetwo").value;
    let patternOutput = '';

    for (let p = 1; p <= size; p++) {
      let row = ``;
      for (let q = 1; q <= p; q++) {
        row += "* ";
      }
      patternOutput += row + '<br>';
    }

    document.getElementById("patternOutput").innerHTML = patternOutput;

  }