function compileCode() {
  const code = document.getElementById('code-input').value;
  const outputElement = document.getElementById('output');

  // Simulate code compilation and display the result
  const result = `Compiled code: ${code}`;
  outputElement.textContent = result;
}
