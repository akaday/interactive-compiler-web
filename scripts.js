let wasmExports;

async function loadWasm() {
  try {
    const response = await fetch('compiler.wasm');
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer);
    wasmExports = wasmModule.instance.exports;
  } catch (error) {
    console.error('Error loading WebAssembly module:', error);
  }
}

async function compileCode() {
  const code = document.getElementById('code-input').value;
  const outputElement = document.getElementById('output');

  try {
    const result = wasmExports.compile(code);
    outputElement.textContent = `Compiled code: ${result}`;
  } catch (error) {
    outputElement.textContent = `Error: ${error.message}`;
    console.error('Error compiling code:', error);
  }
}

window.onload = async () => {
  await loadWasm();
};
