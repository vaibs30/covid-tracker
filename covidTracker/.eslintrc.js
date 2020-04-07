module.exports = {
  "extends": [
    "airbnb",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
   "allowImportExportEverywhere" : true,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react-native"],
  "rules": {
    "arrow-parens": "off",
    "react/prop-types": "off",
    "prefer-object-spread": "off",
    "react/sort-comp": "off",
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "class-methods-use-this": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "linebreak-style": 0,
    "react/display-name": "off"
  },
};
