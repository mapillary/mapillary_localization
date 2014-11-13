(function() {

  angular.module("mapapp").config(function($translateProvider) {
    $translateProvider.translations("en", {
      LANDING: {
        TITLE: "Crowdsourced Street Level Photos."
      },
      FOO: "Crowdsourced Street Level Photos.",
      BUTTON_LANG_EN: "English",
      BUTTON_LANG_DE: "German"
    });
    $translateProvider.translations("de", {
      LANDING: {
        TITLE: "Ich bin ein Berliner."
      },
      FOO: "Ich bin ein Berliner.",
      BUTTON_LANG_EN: "Englisch",
      BUTTON_LANG_DE: "Deutsch"
    });
    $translateProvider.preferredLanguage("en");
    return $translateProvider.useLocalStorage();
  });

}).call(this);
