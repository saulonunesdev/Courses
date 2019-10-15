# Learn Webpack 2 from scratch

Course Link -> https://www.udemy.com/course/learn-webpack-2-from-scratch

## Command Lines
| Command | Description |
| - | - |
| npm install   | Install Dependencies |
| npm run build | Build the Bundle     |
| npm test      | Run Standard JS Text |
| npm tun watch | Run Webpack Watch Mode |
| npm start     | Run Webpack Dev Server |

### Package.json Description

| Command | Description |
| - | - |
| [Browserslist](https://github.com/browserslist/browserslist#queries) | Removes **AutoPrefix** CSS From Browsers, in this case the last 2 versions from all browsers |
| [Standard](https://standardjs.com/) | Ignore the minified bundled files from DIST when running Standard JS Tests |

### Dependencies

- [**AutoPrefix**](https://github.com/postcss/autoprefixer)
- [**StandardJs**](https://www.npmjs.com/package/standard)
- [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
- [WebPackDevServer](https://webpack.js.org/guides/development/#using-webpack-dev-server)
- [BrowserSync](https://www.browsersync.io/)
- [BrowserSyncPlugin](https://github.com/Va1/browser-sync-webpack-plugin)


### BrowserSync

- #### Dependencies

```bash
npm install -g browser-sync
npm install --save-dev browser-sync
```

- #### User Interface

> Go to http://localhost:3001