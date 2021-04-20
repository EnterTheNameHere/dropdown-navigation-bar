
module.exports = {
    presets: [
        [ "@babel/preset-env", {
            targets: { electron: process.versions.electron || process.env.ELECTRON_VERSION || "6.1.12" }
        }]
    ],
    sourceMaps: "inline",
    plugins: [
        [ "@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true } ],
        "@babel/plugin-proposal-class-properties",
        "transform-es2015-modules-commonjs"
    ],
}
