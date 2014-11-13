(function() {

  angular.module("mapapp").config(function($translateProvider) {
    $translateProvider.translations("en", {
      footer: {
        get_app: "Get the Mapillary App",
        on: "on",
        direct_android: "Direct Android .apk link",
        manifesto: "Manifesto",
        about: "About",
        blog: "Blog",
        how_it_works: "How It Works",
        capture: "Capture Instructions",
        using: "Using the App",
        positions: "Open Positions",
        legal: "Legal",
        terms: "Terms and Conditions",
        privacy: "Privacy Policy",
        cookies: "Cookies",
        more: "More",
        business: "Business",
        developers: "Developers",
        integrations: "Integrations",
        embed: "Embed",
        latest_uploads: "Latest Uploads",
        report: "Report Issues",
        follow: "Follow"
      },
      landing: {
        more: "More",
        photos: "photos",
        meters: "meters"
      },
      landing_business: {
        title: "Mapillary for Business",
        use: "Use Mapillary photos",
        service: "Sign up for a commercial API plan in order to use Mapillary photos and data in your service.",
        create: "Create projects, control access.",
        "private": "Business users can create private projects and control access for a fully private version of Mapillary.",
        integrate: "Integrate photo views",
        gis: "Use our APIs or widget to integrate a complete Mapillary viewer in your application or in your GIS system.",
        learn: "Learn more about our business plans."
      },
      landing_how: {
        one: "1. Get the Mapillary app",
        one_availble: "Available for",
        one_from: "and from",
        two: "2. Go out and capture sequences",
        three: "3. Browse, explore, and share places"
      },
      landing_whatyoucan: {
        title: "What you can do with Mapillary",
        section1_map: "Map a place, a town, or someplace new",
        section1_missing: "If your town is missing street view photos, you can add it yourself!",
        section1_examples: "See some great examples at",
        section1_and: "and",
        section2_add: "Add roads not on the map, like",
        section2_road_malaysia: "this road in Malaysia.",
        section2_future: "Record a place for the future to show what it looked like at a point in time, like this",
        section2_coastal: "coastal town.",
        section2_no_cars: "Map an area that cannot be reached with street view cars, like the lovely",
        section2_venice: "Venice Beach canals,",
        section2_unmapped: "or the unmapped",
        section2_fishing: "Venice Fishing Pier.",
        section2_share: "Share and show",
        section2_anyone: "Share a place on Mapillary to anyone. Send them a link and it will look good on both mobile and web.",
        section2_embed: "You can embed a Mapillary viewer on any website with",
        section2_widget: "our widget.",
        section2_path: "With this you can show a specific path or route or leave if open for viewers to explore.",
        section2_see: "See what you can do on",
        section2_example: "example page.",
        section3_track: "Track a place over time",
        section3_filter: "Using the filter functions on Mapillary, you can track a place over time.",
        section3_older: "Compare recent pictures to older. Show only summer, only winter, and much more.",
        section3_places: "If you have places and photos that you do don't want to share publicly, you can have private projects. Take a look at our",
        section3_business: "business plans."
      },
      landing_search: {
        header: "Crowdsourced Street Level Photos.",
        search: "Search",
        or: "or",
        anywhere: "Search for places and roads anywhere...",
        contribute: "contribute your own"
      },
      navbar: {
        how_it_works: "How It Works",
        explore: "Explore",
        business: "Business",
        developers: "Developers",
        projects: "Projects",
        me: "Me",
        my_profile: "My Profile",
        manual_uploads: "Manual Uploads",
        settings: "Settings",
        sign_out: "Sign Out",
        or: "or",
        log_in: "Log In",
        sign_up: "Sign Up"
      }
    });
    $translateProvider.translations("de", {
      search: {
        header: "Bilder für alle."
      },
      navbar: {
        button_lang_en: "Englisch",
        button_lang_de: "Deutsch"
      }
    });
    $translateProvider.preferredLanguage("en");
    return $translateProvider.useLocalStorage();
  });

}).call(this);
