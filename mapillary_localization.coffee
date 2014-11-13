angular.module("mapapp").config ($translateProvider) ->
  $translateProvider.translations "en",
    <!--(bake locales/en.coffee)-->

  $translateProvider.translations "de",
    <!--(bake locales/de.coffee)-->

  $translateProvider.preferredLanguage "en"
  $translateProvider.useLocalStorage()
