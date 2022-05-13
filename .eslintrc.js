module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "prettier",
        // "plugin:vue/vue3-essential",
        "standard",

    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        // "vue",
        "prettier",
        // "@typescript-eslint"
    ],
    "rules": {
      "prettier/prettier": ["error"]
    }
}
