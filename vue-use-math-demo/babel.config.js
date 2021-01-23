  module.exports = function(api) {
    api.cache(true);
    const presets = [
      ["@babel/preset-env", {
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }]
    ];
    const plugins = [
      [
        "component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ],
      "babel-plugin-transform-vue-jsx",
      "@babel/plugin-syntax-dynamic-import",
      [
        "@babel/plugin-transform-runtime", 
        { 
          "corejs": 3 
        }
      ]
    ];
    return {
      presets,
      plugins
    }
  }