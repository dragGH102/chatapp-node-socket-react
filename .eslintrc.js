module.exports = {
    "extends": "airbnb",
    "globals": {
      "document": true,
      "window": true,
      "process": true,
      "React": true,
    },
    "rules": {
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
      "import/extensions": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "react/jsx-filename-extension": 0,
      "linebreak-style": 0,
      "react/react-in-jsx-scope": 0,
      "react/require-default-props": 0,
    },
};