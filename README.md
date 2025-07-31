# GPT Search

A powerful VSCode extension that lets you instantly search and analyze your selected code using popular AI chatbots.

## ✨ Features

- **Multi-Provider Support**: Choose from leading AI providers including Grok, ChatGPT, Claude, and more
- **One-Click Code Analysis**: Select any code block and send it directly to your preferred AI chatbot
- **Custom Prompts**: Set personalized prompts to get exactly the type of analysis you need
- **Browser Integration**: Seamlessly opens your selected AI provider in your default browser
- **Keyboard Shortcuts**: Quick access with simple key combinations

## 🚀 Getting Started

### Basic Usage

1. **Select Code**: Highlight any block of code in your editor
2. **Activate Extension**: Press `Cmd+Shift+Q` (Mac) or `Ctrl+Shift+Q` (Windows/Linux)
3. **Choose Provider**: Select your preferred AI chatbot (Grok, ChatGPT, Claude, etc.)
4. **Analyze**: Your selected code opens in the chosen AI platform in your browser

## ⚙️ Custom Prompts

Take control of how your code is analyzed by setting custom prompts:

1. **Open Command Palette**: Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. **Find Command**: Search for `Set GPT search prompt`
3. **Create Your Prompt**: Enter your custom prompt using `{selected}` as a placeholder for your code. Use `\n` to add new lines in your prompt.

### Example Prompts

```
{selected}
Find any errors in this code and suggest improvements.
```

```
Explain this code block step by step:
{selected}
```

```
Review this code for security vulnerabilities:
{selected}
```

## 🎯 Why Choose GPT Search?

- **Save Time**: No more copying and pasting code between your editor and AI platforms
- **Flexible Analysis**: Use different AI providers for different types of code review
- **Customizable**: Tailor prompts to your specific needs and coding style

## 📋 Requirements

- Visual Studio Code 1.60.0 or higher
- Internet connection for AI provider access

## 🔧 Installation

1. Open VSCode
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "GPT Search"
4. Click Install

## 📝 License

MIT License - feel free to use, modify, and distribute as needed.

---

**Happy coding!** 🎉 If you find this extension helpful, please consider leaving a review or contributing to the project.
