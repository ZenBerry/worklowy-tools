async function getUserInput() {
  const input = await new Promise(resolve => {
    const listener = event => {
      if (event.type === "keypress" && event.key !== "Enter") {
        input += event.key;
      } else if (event.type === "keydown" && event.key === "Backspace") {
        input = input.slice(0, -1);
      } else if (event.type === "keydown" && event.key === "Enter") {
        window.removeEventListener("keypress", listener);
        window.removeEventListener("keydown", listener);
        resolve(input);
      }
    };
    let input = "";
    window.addEventListener("keypress", listener);
    window.addEventListener("keydown", listener);
  });
  return input;
}

getUserInput().then(input => console.log(input));

// Logs user's input. Might be useful to run commands from the workflowy itself