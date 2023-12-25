module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["standard-with-typescript", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "@typescript-eslint/semi": "off",
    "curly": "warn",
    "eqeqeq": "warn",
    "no-throw-literal": "warn",
    "semi": ["error", "never"],
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix"
    ],
    "@typescript-eslint/indent": ["error", "tab"],
    "no-tabs": "off",
    "quotes": ["error", "single"],
    "import/extensions": "off",
    "no-new": "off",
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    "comma-dangle": ["error", "never"],
    "max-len": ["error", { "code": 110 }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "format": ["camelCase", "PascalCase"]
      },
      {
        "selector": "typeProperty",
        "format": ["camelCase"],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "allow"
      }
    ],
    "no-await-in-loop": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ]
  }
}
