// vite.config.js
import path, { resolve } from "node:path";
import url from "node:url";
import { defineConfig } from "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/node_modules/vite/dist/node/index.js";
import viteEslint from "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteImagemin from "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/node_modules/vite-plugin-imagemin/dist/index.mjs";
import viteMultipage from "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/node_modules/vite-plugin-multipage/index.js";
import vitePug from "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/node_modules/vite-plugin-pug-transformer/src/index.js";
import viteSassGlob from "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/node_modules/vite-plugin-sass-glob-import/dist/index.mjs";
import viteStylelint from "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/node_modules/vite-plugin-stylelint/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F/Desktop/localStorage/front-template/vite.config.js";
var root = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "src");
var outDir = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "dist");
var timestamp = Date.now();
var isBackBuild = process.env.BACK_BUILD === "true";
var vite_config_default = defineConfig({
  root,
  base: "./",
  clearScreen: false,
  build: {
    outDir,
    emptyOutDir: true,
    minify: "terser",
    chunkSizeWarningLimit: "1024",
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          } else if (extType === "css") {
            extType = "styles";
          }
          return `${extType}/[name][extname]`;
        },
        chunkFileNames: `scripts/[name].js`
      }
    }
  },
  plugins: [
    viteMultipage({
      mimeCheck: true,
      open: "/",
      pageDir: "pages",
      purgeDir: "pages",
      removePageDirs: true,
      rootPage: "index.html"
    }),
    vitePug({
      pugOptions: {
        pretty: true
      }
    }),
    viteEslint({
      failOnError: false
    }),
    viteStylelint({
      // fix: true,
      lintInWorker: true
    }),
    viteSassGlob(),
    ...!isBackBuild ? [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false
        },
        mozjpeg: {
          quality: 75
        },
        pngquant: {
          quality: [0.7, 0.7],
          speed: 4
        },
        svgo: {
          plugins: [
            {
              name: "removeViewBox"
            },
            {
              name: "removeEmptyAttrs",
              active: false
            }
          ]
        }
      })
    ] : [],
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/images")],
      symbolId: "[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__"
    }),
    {
      name: "replace-script-tag",
      apply: "build",
      transformIndexHtml(html) {
        return html.replace(
          /<script type="module" crossorigin src="..\/..\/scripts\/index\.js"><\/script>/,
          `<script type="module" crossorigin src="scripts/index.js?${timestamp}"></script>`
        );
      }
    }
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MTJcdTA0MzhcdTA0M0FcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0NEZcXFxcRGVza3RvcFxcXFxsb2NhbFN0b3JhZ2VcXFxcZnJvbnQtdGVtcGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFx1MDQxMlx1MDQzOFx1MDQzQVx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0RlxcXFxEZXNrdG9wXFxcXGxvY2FsU3RvcmFnZVxcXFxmcm9udC10ZW1wbGF0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvJUQwJTkyJUQwJUI4JUQwJUJBJUQxJTgyJUQwJUJFJUQxJTgwJUQwJUI4JUQxJThGL0Rlc2t0b3AvbG9jYWxTdG9yYWdlL2Zyb250LXRlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB1cmwgZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZpdGVFc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuaW1wb3J0IHZpdGVJbWFnZW1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbidcbmltcG9ydCB2aXRlTXVsdGlwYWdlIGZyb20gJ3ZpdGUtcGx1Z2luLW11bHRpcGFnZSdcbmltcG9ydCB2aXRlUHVnIGZyb20gJ3ZpdGUtcGx1Z2luLXB1Zy10cmFuc2Zvcm1lcidcbmltcG9ydCB2aXRlU2Fzc0dsb2IgZnJvbSAndml0ZS1wbHVnaW4tc2Fzcy1nbG9iLWltcG9ydCdcbmltcG9ydCB2aXRlU3R5bGVsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLXN0eWxlbGludCdcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuXG5jb25zdCByb290ID0gcmVzb2x2ZShwYXRoLmRpcm5hbWUodXJsLmZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICdzcmMnKVxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShwYXRoLmRpcm5hbWUodXJsLmZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICdkaXN0JylcbmNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KClcblxuY29uc3QgaXNCYWNrQnVpbGQgPSBwcm9jZXNzLmVudi5CQUNLX0JVSUxEID09PSAndHJ1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdCxcbiAgYmFzZTogJy4vJyxcbiAgY2xlYXJTY3JlZW46IGZhbHNlLFxuICBidWlsZDoge1xuICAgIG91dERpcixcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogJzEwMjQnLFxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogYXNzZXRJbmZvID0+IHtcbiAgICAgICAgICBsZXQgZXh0VHlwZSA9IGFzc2V0SW5mby5uYW1lLnNwbGl0KCcuJylbMV1cbiAgICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljby9pLnRlc3QoZXh0VHlwZSkpIHtcbiAgICAgICAgICAgIGV4dFR5cGUgPSAnaW1hZ2VzJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXh0VHlwZSA9PT0gJ2NzcycpIHtcbiAgICAgICAgICAgIGV4dFR5cGUgPSAnc3R5bGVzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7ZXh0VHlwZX0vW25hbWVdW2V4dG5hbWVdYFxuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogYHNjcmlwdHMvW25hbWVdLmpzYFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZpdGVNdWx0aXBhZ2Uoe1xuICAgICAgbWltZUNoZWNrOiB0cnVlLFxuICAgICAgb3BlbjogJy8nLFxuICAgICAgcGFnZURpcjogJ3BhZ2VzJyxcbiAgICAgIHB1cmdlRGlyOiAncGFnZXMnLFxuICAgICAgcmVtb3ZlUGFnZURpcnM6IHRydWUsXG4gICAgICByb290UGFnZTogJ2luZGV4Lmh0bWwnXG4gICAgfSksXG4gICAgdml0ZVB1Zyh7XG4gICAgICBwdWdPcHRpb25zOiB7XG4gICAgICAgIHByZXR0eTogdHJ1ZVxuICAgICAgfVxuICAgIH0pLFxuICAgIHZpdGVFc2xpbnQoe1xuICAgICAgZmFpbE9uRXJyb3I6IGZhbHNlXG4gICAgfSksXG4gICAgdml0ZVN0eWxlbGludCh7XG4gICAgICAvLyBmaXg6IHRydWUsXG4gICAgICBsaW50SW5Xb3JrZXI6IHRydWVcbiAgICB9KSxcbiAgICB2aXRlU2Fzc0dsb2IoKSxcbiAgICAuLi4oIWlzQmFja0J1aWxkXG4gICAgICA/IFtcbiAgICAgICAgICB2aXRlSW1hZ2VtaW4oe1xuICAgICAgICAgICAgZ2lmc2ljbGU6IHtcbiAgICAgICAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICAgICAgICAgIGludGVybGFjZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW96anBlZzoge1xuICAgICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBuZ3F1YW50OiB7XG4gICAgICAgICAgICAgIHF1YWxpdHk6IFswLjcsIDAuN10sXG4gICAgICAgICAgICAgIHNwZWVkOiA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Znbzoge1xuICAgICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXG4gICAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvaW1hZ2VzJyldLFxuICAgICAgc3ltYm9sSWQ6ICdbbmFtZV0nLFxuICAgICAgaW5qZWN0OiAnYm9keS1sYXN0JyxcbiAgICAgIGN1c3RvbURvbUlkOiAnX19zdmdfX2ljb25zX19kb21fXydcbiAgICB9KSxcbiAgICB7XG4gICAgICBuYW1lOiAncmVwbGFjZS1zY3JpcHQtdGFnJyxcbiAgICAgIGFwcGx5OiAnYnVpbGQnLFxuICAgICAgdHJhbnNmb3JtSW5kZXhIdG1sKGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZShcbiAgICAgICAgICAvPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgY3Jvc3NvcmlnaW4gc3JjPVwiLi5cXC8uLlxcL3NjcmlwdHNcXC9pbmRleFxcLmpzXCI+PFxcL3NjcmlwdD4vLFxuICAgICAgICAgIGA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIiBjcm9zc29yaWdpbiBzcmM9XCJzY3JpcHRzL2luZGV4LmpzPyR7dGltZXN0YW1wfVwiPjwvc2NyaXB0PmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgXVxufSlcblxuLy8gXHUwNDFBXHUwNDNFXHUwNDNDXHUwNDMwXHUwNDNEXHUwNDM0XHUwNDRCIFx1MDQzNFx1MDQzQlx1MDQ0RiBIdXNreVxuXG4vLyBwcmUtY29tbWl0XG4vLyBucG0gcnVuIHByZXR0aWVyOmZpeFxuLy8gZ2l0IGFkZCAuXG5cbi8vIHByZS1wdXNoXG4vLyBucG0gcnVuIHN0eWxlbGludDpmaXhcbi8vIG5wbSBydW4gbGludDpmaXhcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVksT0FBTyxRQUFRLGVBQWU7QUFDbmEsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLDRCQUE0QjtBQVR3TCxJQUFNLDJDQUEyQztBQVc5USxJQUFNLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxjQUFjLHdDQUFlLENBQUMsR0FBRyxLQUFLO0FBQzVFLElBQU0sU0FBUyxRQUFRLEtBQUssUUFBUSxJQUFJLGNBQWMsd0NBQWUsQ0FBQyxHQUFHLE1BQU07QUFDL0UsSUFBTSxZQUFZLEtBQUssSUFBSTtBQUUzQixJQUFNLGNBQWMsUUFBUSxJQUFJLGVBQWU7QUFFL0MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUI7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLE9BQU87QUFBQSxJQUNMO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsSUFDUix1QkFBdUI7QUFBQSxJQUN2QixtQkFBbUI7QUFBQSxJQUNuQixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0IsZUFBYTtBQUMzQixjQUFJLFVBQVUsVUFBVSxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekMsY0FBSSxrQ0FBa0MsS0FBSyxPQUFPLEdBQUc7QUFDbkQsc0JBQVU7QUFBQSxVQUNaLFdBQVcsWUFBWSxPQUFPO0FBQzVCLHNCQUFVO0FBQUEsVUFDWjtBQUNBLGlCQUFPLEdBQUcsT0FBTztBQUFBLFFBQ25CO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixnQkFBZ0I7QUFBQSxNQUNoQixVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsUUFDVixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBO0FBQUEsTUFFWixjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBLElBQ0QsYUFBYTtBQUFBLElBQ2IsR0FBSSxDQUFDLGNBQ0Q7QUFBQSxNQUNFLGFBQWE7QUFBQSxRQUNYLFVBQVU7QUFBQSxVQUNSLG1CQUFtQjtBQUFBLFVBQ25CLFlBQVk7QUFBQSxRQUNkO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFVBQ2xCLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDSixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsWUFDVjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSCxJQUNBLENBQUM7QUFBQSxJQUNMLHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxRQUFRLFFBQVEsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUFBLE1BQy9DLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNEO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxtQkFBbUIsTUFBTTtBQUN2QixlQUFPLEtBQUs7QUFBQSxVQUNWO0FBQUEsVUFDQSwyREFBMkQsU0FBUztBQUFBLFFBQ3RFO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
