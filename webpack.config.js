const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/website')
    // public path used by the web server to access the output path
    .setPublicPath('/build/website')
    // only needed for CDN's or subdirectory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */

    .addEntry('app', './assets/website/app.js')
    //.addEntry('jquery3', './assets/website/js/plugins/jquery-3.6.0.min.js')
    .addEntry('wow', './assets/website/js/plugins/wow.min.js')
    //.addEntry('slick', './assets/website/js/plugins/slick.min.js')
    //.addEntry('odometer', './assets/website/js/plugins/odometer.js')
    //.addEntry('isotope', './assets/website/js/plugins/isotope.pkg.min.js')
    //.addEntry('lightgallery', './assets/website/js/plugins/lightgallery.min.js')
    //.addEntry('timepicker', './assets/website/js/plugins/jquery.timepicker.min.js')
   // .addEntry('jqueryui', './assets/website/js/plugins/jquery-ui.js')
    //.addEntry('select2', './assets/website/js/plugins/select2.min.js')
    .addEntry('ripples', './assets/website/js/plugins/ripples.min.js')
    .addEntry('gsap', './assets/website/js/plugins/gsap.min.js')
    .addEntry('animatedheadline', './assets/website/js/plugins/animated-headline.js')
    .addEntry('main', './assets/website/js/main.js')

    /*Revolution Slider*/ 
    .addEntry('slider', './assets/website/styles/revolution/js/slider.js')
    .addEntry('tools', './assets/website/styles/revolution/js/revolution.tools.min.js')
    .addEntry('rs6', './assets/website/styles/revolution/js/rs6.min.js')

  
    

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()

    // Displays build status system notifications to the user
    // .enableBuildNotifications()

    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.38';
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
