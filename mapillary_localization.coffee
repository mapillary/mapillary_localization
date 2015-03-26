angular.module("mapapp").config ($translateProvider) ->
  $translateProvider.translations "zh-CN",
    <!--(bake locales/zh-CN.coffee)-->

  $translateProvider.translations "zh-TW",
    <!--(bake locales/zh-TW.coffee)-->

  $translateProvider.translations "ca",
    <!--(bake locales/ca.coffee)-->

  $translateProvider.translations "da",
    <!--(bake locales/da.coffee)-->

  $translateProvider.translations "de",
    <!--(bake locales/de.coffee)-->

  $translateProvider.translations "en",
    <!--(bake locales/en.coffee)-->

  $translateProvider.translations "es",
    <!--(bake locales/es.coffee)-->

  $translateProvider.translations "fr",
    <!--(bake locales/fr.coffee)-->

  $translateProvider.translations "hr",
    <!--(bake locales/hr.coffee)-->

  $translateProvider.translations "hu",
    <!--(bake locales/hu.coffee)-->

  $translateProvider.translations "it",
    <!--(bake locales/it.coffee)-->

  $translateProvider.translations "lv",
    <!--(bake locales/lv.coffee)-->

  $translateProvider.translations "nl",
  <!--(bake locales/nl.coffee)-->

  $translateProvider.translations "pl",
    <!--(bake locales/pl.coffee)-->

  $translateProvider.translations "pt-BR",
    <!--(bake locales/pt-BR.coffee)-->

  $translateProvider.translations "sv",
    <!--(bake locales/sv.coffee)-->

  $translateProvider.translations "uk",
    <!--(bake locales/uk.coffee)-->

  $translateProvider.fallbackLanguage("en")
  $translateProvider.preferredLanguage("en")
  $translateProvider.useLocalStorage()
