// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
const PROMPT_KEY = "searchPrompt";
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "gpt-search" is now active!');
  const setSearchPrompt = vscode.commands.registerCommand(
    "gpt-search.set-search-prompt",
    async function () {
      // The code you place here will be executed every time your command is executed
      const currentPrompt =
        context.globalState.get(PROMPT_KEY) ||
        "Explain this block: \n {selected}";
      const newPrompt = await vscode.window.showInputBox({
        prompt:
          "Enter a new search prompt (use {selected} as placeholder for selected text)",
        value: "",
      });
      if (newPrompt && newPrompt.trim()) {
        await context.globalState.update(PROMPT_KEY, newPrompt);
        vscode.window.showInformationMessage("Default prompt updated!");
      } else {
        vscode.window.showErrorMessage("Prompt cannot be empty!");
      }
    }
  );

  const searchCmd = vscode.commands.registerCommand(
    "gpt-search.gpt-block-search",
    async function () {
      const searchProviders = [
        { label: "Grok", url: "http://grok.com/?q=" },
        { label: "ChatGPT", url: "https://chat.openai.com/?q=" },
        { label: "Claude", url: "https://claude.ai/new?q=" },
        { label: "Grok on X", url: "https://x.com/i/grok?text=" },
      ];
      // The code you place here will be executed every time your command is executed
      const selectedProvider = await vscode.window.showQuickPick(
        searchProviders,
        {
          placeHolder: "Select a search provider",
        }
      );
      if (selectedProvider) {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
          vscode.window.showErrorMessage("No active editor!");
          return;
        }
        const selection = editor.selection;
        const query = editor.document.getText(selection);

        if (query && query.trim()) {
          let prompt =
            context.globalState.get(PROMPT_KEY) ||
            "Explain this block: \n {selected}";
          console.log("Prompt:", prompt);
          prompt = prompt.replace(/\\n/g, "\n");
          console.log("Prompt:", prompt);
          prompt = prompt.replace("{selected}", query);
          const url = `${selectedProvider.url}${encodeURIComponent(prompt)}`;
          await vscode.env.openExternal(url);
          vscode.window.showInformationMessage(
            `Search results for selected block are opened in ${selectedProvider.label}`
          );
        } else {
          vscode.window.showErrorMessage("Please select a block");
          return;
        }
      }
    }
  );

  context.subscriptions.push(searchCmd);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
