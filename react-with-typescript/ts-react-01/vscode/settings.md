{
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
"source.fixAll": true,
"source.fixAll.eslint": true,
"source.organizeImports": true,
"source.sortMembers": true
},
"eslint.validate": ["javascript", "typescript", "typescriptreact"],
"editor.formatOnSave": true,
// Enable per-language
"[javascript]": {
"editor.formatOnSave": true
},
"[json]": {
"editor.formatOnSave": true
},
"emmet.syntaxProfiles": {
"javascript": "jsx",
"xml": {
"attr_quotes": "single"
}
},
"editor.lineHeight": 22.5,
"javascript.validate.enable": false,
"workbench.editor.enablePreview": false,
"javascript.updateImportsOnFileMove.enabled": "always",
"prettier.trailingComma": "all",
"bracketPairColorizer.forceIterationColorCycle": true,
"editor.fontWeight": "700",
"editor.fontLigatures": true,
"editor.letterSpacing": 0.5,
"editor.cursorWidth": 2,
"editor.renderWhitespace": "all",
"editor.snippetSuggestions": "top",
"editor.glyphMargin": true,
"terminal.integrated.fontWeight": "500",
"editor.fontFamily": "Fira Code, iA Writer Duospace, Menlo, Monaco, 'Courier New', monospace",
"editor.fontSize": 16,
"files.trimTrailingWhitespace": true,
"files.trimFinalNewlines": true,
"terminal.integrated.macOptionIsMeta": true,

"prettier.bracketSpacing": true,
"terminal.integrated.fontSize": 14,
"terminal.integrated.fontWeightBold": "500",
"terminal.integrated.lineHeight": 1,

// "editor.defaultFormatter": "esbenp.prettier-vscode", // Use prettier as default formatter
"editor.formatOnPaste": true, // format code on paste
"editor.formatOnType": true, // format code as you type

// "[html,css,scss]": {
// "editor.defaultFormatter": "esbenp.prettier-vscode"
// },

"files.exclude": {
"**/.git": true,
"**/.DS_Store": true,
"jspm_packages": true,
"node_modules": true
},
"search.exclude": {
"**/node_modules": true,
"**/bower_components": true
},
"files.watcherExclude": {
"**/.git/objects/**": true,
"**/.git/subtree-cache/**": true,
"**/node_modules/\*/**": true
},

"editor.tabSize": 4,
"editor.multiCursorModifier": "alt",
"editor.wordWrap": "on",
"editor.insertSpaces": true,
"files.encoding": "utf8",
"[typescript]": {
"editor.formatOnSave": true,
"editor.formatOnPaste": true,
"editor.defaultFormatter": "vscode.typescript-language-features"
},
"[markdown]": {
"editor.formatOnSave": true,
"editor.renderWhitespace": "all",
"editor.acceptSuggestionOnEnter": "off"
},
"files.associations": {
"_.jsx": "javascriptreact",
"_.js": "javascript"
// "\*.js": "javascriptreact"
},
"workbench.iconTheme": "vscode-icons",
"explorer.confirmDelete": false,
"workbench.startupEditor": "none",
"security.workspace.trust.untrustedFiles": "open",
"remote.SSH.remotePlatform": {
"nucleus.omic.ai": "linux"
},

"[html,css,javascriptreact,jsonc,javascript,typescript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"git.enableSmartCommit": true,
"git.confirmSync": false,
"git.autofetch": true,
"editor.linkedEditing": true,
"editor.stickyScroll.enabled": true,
"[javascriptreact]": {
"editor.defaultFormatter": "SimonSiefke.prettier-vscode"
},
"npm.keybindingsChangedWarningShown": true,
"workbench.colorTheme": "Atom One Dark",
"[html]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[jsonc]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"prettier.singleQuote": true
}
