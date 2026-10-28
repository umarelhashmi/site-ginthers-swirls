/* ============================================================================
   GINTHER'S SWIRLS · TWISTEE TREAT OF OCOEE & LBV
   Interactive Store Switcher, Exact DoorDash Menus, Window Boards & Reviews
   ============================================================================ */

const STORES = {
  ginthers: {
    id: 'ginthers',
    name: "Ginther's Swirls Ice Cream",
    shortLabel: "Ginther's Swirls · International Drive",
    subtitle: "11036 International Dr · Behind Wawa next to Applebee's · Drive-Thru & Patio",
    tag: "Home Location · Opened Mid-January 2014",
    address: "11036 International Drive, Orlando, FL 32821",
    phoneDisplay: "(407) 477-1212",
    phoneHref: "tel:+14074771212",
    email: "alg07c@my.fsu.edu",
    hoursShort: "Sun–Thu 11am–10:30pm · Fri–Sat 11am–11pm (Indoor till 10pm)",
    hoursBadge: "Open Daily · Sun–Thu 11:00 AM – 10:30 PM · Fri–Sat till 11:00 PM",
    ratingBadge: "★ 4.6 Google (1,513) · ★ 4.8 DoorDash (327)",
    orderUrl: "https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTFiYnJrNzEwaBgAOgMI8A0%3D",
    orderBtnLabel: "Order Online",
    orderHint: "Pick your preferred ordering service (DoorDash, Uber Eats, Postmates, Pickup/Delivery)",
    facebookUrl: "https://www.facebook.com/GinthersSwirls/",
    instagramUrl: "https://instagram.com/ginthersswirls",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ginther%27s+Swirls+Ice+Cream+11036+International+Dr+Orlando+FL+32821",
    storePhoto: "assets/images/site_originals/twisteetreat/ginthers_swirls_daytime_pic.webp",
    features: [
      "Drive-Thru Window",
      "Night-Lit Outdoor Patio",
      "Indoor Seating (till 10pm)",
      "Soft Serve & 8 Hand-Scooped Flavors"
    ],
    windowBoardPhotos: [
      {
        label: "View Window Menu Board Photo",
        src: "assets/images/site_originals/twisteetreat/ginthers_swirls_menu_2021_front_windows.webp",
        caption: "Ginther's Swirls Official Front Window Menu Board"
      }
    ],
    doordashCategories: [
      { id: "all", name: "All Items (13)" },
      { id: "Most Ordered", name: "Most Ordered (11)" },
      { id: "Quarts", name: "Quarts (10)" },
      { id: "Toppings", name: "Toppings · 5oz Cups (2)" },
      { id: "Pineapple Juice", name: "Pineapple Juice (1)" }
    ],
    doordashItems: [
      {
        name: "Cookies and Cream Quart",
        price: "$6.99",
        desc: "Our tasty Vanilla ice cream with Oreo cookies mixed in!",
        img: "assets/images/doordash_ginthers/cookies_and_cream_quart_262252671.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "#2 Best Seller · 96% (32)"
      },
      {
        name: "Reese's Peanut Butter Cup Quart",
        price: "$6.99",
        desc: "Our tasty Vanilla ice cream with Reese's Peanut Butter pieces mixed in!",
        img: "assets/images/doordash_ginthers/reese_s_peanut_butter_cup_quart_262252674.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "#1 Best Seller · 96% (25)"
      },
      {
        name: "Chocolate Chip Mint Quart",
        price: "$6.99",
        desc: "Our homemade mint ice cream with chocolate chips mixed in",
        img: "assets/images/doordash_ginthers/chocolate_chip_mint_quart_262252668.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Cookie Dough Quart",
        price: "$6.99",
        desc: "Our tasty Vanilla ice cream with cookie dough mixed in!",
        img: "assets/images/doordash_lbv/cookie-dough-quart-210641250.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "100% (8)"
      },
      {
        name: "Dole Pineapple Soft Serve (Nondairy + Vegan)",
        price: "$6.99",
        desc: "Our homemade pineapple soft-serve (non dairy + vegan)",
        img: "assets/images/doordash_ginthers/dole_pineapple_soft_serve_nondairy_vegan_262252677.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "100% (12) · Vegan"
      },
      {
        name: "Vanilla Quart",
        price: "$6.25",
        desc: "Ginther Swirls' delicious Vanilla ice cream!",
        img: "assets/images/doordash_ginthers/vanilla_quart_262252675.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "100% (14)"
      },
      {
        name: "Chocolate Quart",
        price: "$6.25",
        desc: "Ginther Swirls' delicious chocolate ice cream!",
        img: "assets/images/doordash_ginthers/chocolate_quart_262252669.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "#3 Most Liked · 100% (16)"
      },
      {
        name: "Strawberry Quart",
        price: "$6.25",
        desc: "Ginther Swirls' delicious strawberry ice cream!",
        img: "assets/images/doordash_ginthers/strawberry_quart_262252670.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Neopolitan Quart",
        price: "$6.99",
        desc: "Our homemade vanilla, chocolate, and strawberry ice creams packed into one quart!",
        img: "assets/images/doordash_ginthers/neopolitan_quart_262252673.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Brownie Fudge Quart",
        price: "$6.99",
        desc: "Our tasty Vanilla ice cream with brownies mixed in!",
        img: "assets/images/doordash_ginthers/brownie_fudge_quart_262252672.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "#3 Best Seller"
      },
      {
        name: "Rainbow Sprinkles",
        price: "$2.50",
        desc: "A vibrant mix of colorful, crunchy sprinkles to add a cheerful touch to your desserts and beverages. (5oz cup)",
        img: "assets/images/doordash_ginthers/rainbow_sprinkles_479747618.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Hot Fudge",
        price: "$2.50",
        desc: "5oz cup topping",
        img: "assets/images/doordash_lbv/hot-fudge-251393071.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Dole Pineapple Juice",
        price: "$4.90",
        desc: "Four 6oz cans to make Dole Whip Floats",
        img: "assets/images/doordash_ginthers/dole_pineapple_juice_262252667.webp",
        categories: ["Most Ordered", "Pineapple Juice"],
        badge: "Four 6oz Cans"
      }
    ],
    windowMenu: {
      cones: [
        {
          title: "Soft Serve Cones & Cups",
          sub: "Child · Small · Medium · Large · Small/Large Waffle Cone · Small/Large Fancy Waffle · YoPup Doggie Yogurt",
          items: ["Vanilla", "Chocolate", "Strawberry", "Chocolate/Vanilla Swirl", "Strawberry/Vanilla Swirl", "Mint", "Dole Pineapple (Non-Dairy / Vegan / Fat-Free)"]
        },
        {
          title: "Scoop Ice Cream (Hand-Scooped)",
          sub: "Small (1 Scoop) · Large (2 Scoops) · Extra Scoop · Waffle / Fancy Waffle · Pint · Quart · Scoop Banana Split",
          items: ["Birthday Cake", "Butter Pecan", "Coffee Chip", "Cookie Dough", "Cookies N Cream", "Mint Chocolate Chip", "Salty Caramel Peanut", "Vanilla Sugar Free"]
        },
        {
          title: "Flavorburst Stripes (Additional Cost)",
          sub: "Striped into soft-serve cones & cups",
          items: ["Black Cherry", "Blue Goo", "Bubblegum", "Butter Pecan", "Peach Twist", "Pina Colada", "Mocha Cappuccino", "Tropical Orange"]
        },
        {
          title: "Dips, Sprinkles & Toppings",
          sub: "Customize any cone, cup, or sundae",
          items: ["Rainbow / Chocolate / Holiday Sprinkles / Peanuts", "Chocolate / Cherry / Butterscotch / Peanut Butter Dips", "Sundae / Candy Toppings", "Nuts (Almonds / Walnuts / Pistachios / Pecans / Pralines)"]
        }
      ],
      shakes: [
        {
          title: "Milkshakes & Malts (Made with Soft Serve)",
          sub: "Sizes: Child (12 oz) · Small (16 oz) · Medium (20 oz) · Large (32 oz)",
          items: [
            "Banana", "Birthday Cake", "Blueberry", "Blue Raspberry", "Butterfinger", "Butter Pecan",
            "Caramel", "Cherry", "Chocolate", "Chocolate Chip", "Chocolate Chip Mint", "Coffee",
            "Cookies & Cream", "Cookies/Cream Mint", "Dreamsicle", "Hazelnut", "Hot Fudge", "Mango",
            "Marshmallow", "Mint", "Nutella", "Peach", "Peanut Butter", "Pina Colada",
            "Pineapple", "Pistachio", "Raspberry", "Reeses Cup", "Strawberry", "Vanilla"
          ]
        },
        {
          title: "Twirls (Shakes Blended with Candy or Toppings)",
          sub: "Sizes: Child (12 oz) · Small (16 oz) · Medium (20 oz) · Large (32 oz)",
          items: [
            "Banana", "Birthday Cake", "Blueberry", "Brownie", "Brownie Fudge", "Butterfinger",
            "Butter Pecan", "Cherry", "Chocolate Chip", "Chocolate Chip Mint", "Cookie Dough",
            "Cookies & Cream", "Cookies & Cream Mint", "Gummy Bear", "Heath", "Mango", "M & M",
            "Nutella", "Peach", "Peanut Butter", "Pecan Pralines", "Pina Colada", "Pineapple",
            "Pistachio Nut", "Raspberry", "Reeses Pieces", "Reeses PB Cup", "Snickers", "Strawberry"
          ]
        }
      ],
      sundaes: [
        {
          title: "Sundaes (Made with Soft Serve)",
          sub: "Small · Medium · Large (Whipped cream, nuts & cherry included)",
          items: [
            "Blueberry", "Butterscotch", "Caramel", "Cherry", "Chocolate Syrup", "Cookies & Cream",
            "Hot Fudge", "Marshmallow", "Peach", "Peanut Butter", "Pineapple", "Raspberry", "Strawberry"
          ]
        },
        {
          title: "Specialty Sundaes",
          sub: "Small · Medium · Large (Whipped cream, nuts & cherry included)",
          items: ["Almond Joy Hot Fudge", "Brownie Hot Fudge", "Pecan Pralines", "Turtle"]
        },
        {
          title: "Specialties & Take-Home Quarts",
          sub: "Made with soft serve · Whipped cream, nuts & cherry included",
          items: [
            "Banana Split", "Banana Boat", "Hot Fudge Brownie Boat", "Float (Root Beer / Coke / Orange)",
            "Parfait", "Pint", "Quart", "Scoop Banana Split", "Dole Pineapple Float (12 oz · Dairy-Free / Vegan · 210 Cal)"
          ]
        }
      ],
      freezers: [
        {
          title: "Freezers (Made with Soft Serve)",
          sub: "Sizes: Child · Small · Med · Large",
          items: ["Coffee", "Hazelnut", "Kahlua", "Mango", "Mocha", "Orange Cream", "Peaches & Cream", "Pina Colada", "Strawberry Cream"]
        },
        {
          title: "Slush Float & Slush",
          sub: "Sizes: Child · Small · Med · Large",
          items: ["Blue Raspberry", "Cherry", "Mango", "Orange", "Pina Colada", "Strawberry", "Watermelon"]
        },
        {
          title: "Fountain Drinks & Water",
          sub: "Sizes: Small · Large · Bottled Water",
          items: ["Coke", "Diet Coke", "Pepsi", "Sunkist", "Root Beer", "Sprite", "Dr. Pepper", "Water"]
        }
      ]
    }
  },

  ocoee: {
    id: 'ocoee',
    name: "Twistee Treat of Ocoee",
    shortLabel: "Twistee Treat of Ocoee · Maguire Rd",
    subtitle: "1500 Maguire Road, Ocoee · Giant Swirl Cone Building · Drive-Thru & Outdoor Seating",
    tag: "Direct Licensee · Giant Cone Building",
    address: "1500 Maguire Road, Ocoee, Florida 34761",
    phoneDisplay: "(407) 877-6888",
    phoneHref: "tel:+14078776888",
    email: "Ginther300@yahoo.com",
    hoursShort: "Sun–Thu 10:30am–10:30pm · Fri–Sat 10:30am–11pm",
    hoursBadge: "Open Daily · Sun–Thu 10:30 AM – 10:30 PM · Fri–Sat till 11:00 PM",
    ratingBadge: "★ 4.7 Google (2,540) · ★ 4.8 DoorDash (500+)",
    orderUrl: "https://www.doordash.com/store/255046/",
    orderBtnLabel: "Order Online",
    orderHint: "Order Twistee Treat of Ocoee delivery or pickup on DoorDash",
    facebookUrl: "https://www.facebook.com/Twistee-Treat-of-Ocoee-153952792074/",
    instagramUrl: "https://instagram.com/twisteetreatocoee",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Twistee+Treat+of+Ocoee+1500+Maguire+Road+Ocoee+FL+34761",
    storePhoto: "assets/images/site_originals/twisteetreat/ocoee_store_pic_cropped_031417.webp",
    features: [
      "Giant Ice-Cream Cone Building",
      "Drive-Thru Lane",
      "Outdoor Umbrella Patio",
      "Froconut & Dole Pineapple Soft Serve"
    ],
    windowBoardPhotos: [
      {
        label: "View Ocoee Window Menu Board",
        src: "assets/images/site_originals/twisteetreat/ocoee_menu_2021_front_window_1.webp",
        caption: "Twistee Treat of Ocoee Official Front Window Menu Board"
      }
    ],
    doordashCategories: [
      { id: "all", name: "All Items (16)" },
      { id: "Most Ordered", name: "Most Ordered (11)" },
      { id: "Quarts", name: "Quarts (10)" },
      { id: "Toppings", name: "Toppings · 5oz Cups (5)" },
      { id: "Pineapple Juice", name: "Pineapple Juice (1)" }
    ],
    doordashItems: [
      {
        name: "Reese's Peanut Butter Cup Quart",
        price: "$8.00",
        desc: "Our tasty Vanilla ice cream with Reese's Peanut Butter pieces mixed in!",
        img: "assets/images/doordash_ocoee/reese-s-peanut-butter-cup-quart-448568498.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Brownie Fudge Quart",
        price: "$8.00",
        desc: "Our tasty Vanilla ice cream with brownies mixed in!",
        img: "assets/images/doordash_ocoee/brownie-fudge-quart-448568491.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Vanilla Quart",
        price: "$7.00",
        desc: "Twistee Treat's delicious Vanilla ice cream!",
        img: "assets/images/doordash_ocoee/vanilla-quart-448568499.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Chocolate Quart",
        price: "$7.00",
        desc: "Twistee Treat's delicious Chocolate ice cream!",
        img: "assets/images/doordash_ocoee/chocolate-quart-448568494.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Chocolate Chip Mint Quart",
        price: "$8.00",
        desc: "Twistee Treat of Ocoee homemade mint chocolate chip quart.",
        img: "assets/images/doordash_ocoee/chocolate-chip-mint-quart-448568493.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Neopolitan Quart",
        price: "$7.00",
        desc: "Vanilla, chocolate, and strawberry ice creams packed into one quart.",
        img: "assets/images/doordash_ocoee/neopolitan-quart-448568497.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Strawberry Quart",
        price: "$7.00",
        desc: "Twistee Treat's delicious Strawberry ice cream!",
        img: "assets/images/doordash_ocoee/strawberry-quart-448568495.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Dole Pineapple Whip (Nondairy + Vegan)",
        price: "$8.00",
        desc: "Refreshing non-dairy, vegan Dole Pineapple Whip quart.",
        img: "assets/images/doordash_ocoee/dole-pineapple-whip-nondairy-vegan-448568492.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Vegan · Dairy-Free"
      },
      {
        name: "Cookies and Cream Quart",
        price: "$8.00",
        desc: "Our tasty Vanilla ice cream with Oreo cookies mixed in!",
        img: "assets/images/doordash_ocoee/cookies-and-cream-quart-448568496.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "#1 Most Ordered"
      },
      {
        name: "Cookie Dough Quart",
        price: "$8.00",
        desc: "Our tasty Vanilla ice cream with cookie dough mixed in!",
        img: "assets/images/doordash_ocoee/cookie-dough-quart-448568500.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Hot Fudge",
        price: "$2.50",
        desc: "5oz cups each.",
        img: "assets/images/doordash_ocoee/hot-fudge-448568501.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Ground Peanuts",
        price: "$2.50",
        desc: "5oz cups each.",
        img: "assets/images/doordash_ocoee/ground-peanuts-448568502.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Cookies and Cream pieces",
        price: "$2.50",
        desc: "5oz cups each.",
        img: "assets/images/doordash_ocoee/cookies-and-cream-pieces-448568503.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Rainbow Sprinkles",
        price: "$2.50",
        desc: "5oz cups each.",
        img: "assets/images/doordash_ocoee/rainbow-sprinkles-479748377.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Reese's Peanut Butter Cups",
        price: "$2.50",
        desc: "5oz cups each.",
        img: "assets/images/doordash_ocoee/reese-s-peanut-butter-cups-448568504.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Dole Pineapple Juice",
        price: "$4.90",
        desc: "Four 6oz cans to make Dole Whip Floats.",
        img: "assets/images/doordash_ocoee/dole-pineapple-juice-448568505.webp",
        categories: ["Most Ordered", "Pineapple Juice"],
        badge: "Four 6oz Cans"
      }
    ],
    windowMenu: {
      cones: [
        {
          title: "Cones & Cups (Soft Serve)",
          sub: "Child · Small · Medium · Large · Small/Large Waffle Cone · Small/Large Fancy Waffle · YoPup Doggie Yogurt",
          items: [
            "Vanilla", "Chocolate", "Strawberry", "Mint",
            "Chocolate/Vanilla Swirl", "Strawberry/Vanilla Swirl", "Mint/Vanilla Swirl"
          ]
        },
        {
          title: "Non-Dairy / Vegan / Fat-Free Soft Serve",
          sub: "Available in cones, cups, pints & quarts at Ocoee",
          items: ["Dole Pineapple", "Froconut (made with coconut base)", "Pineapple/Froconut Swirl"]
        },
        {
          title: "Flavorburst Stripes (Additional Cost)",
          sub: "Striped into soft-serve cones & cups",
          items: ["Black Cherry", "Blue Goo", "Bubblegum", "Butter Pecan", "Mocha Cappuccino", "Peach Twist", "Pina Colada", "Tropical Orange"]
        },
        {
          title: "Dips, Sprinkles & Toppings",
          sub: "Customize your cone or cup",
          items: ["Rainbow / Chocolate / Holiday Sprinkles / Peanuts", "Chocolate / Cherry / Butterscotch Dips", "Nuts (Almonds / Pecans / Walnuts / Pralines)", "Sundae / Candy Toppings"]
        }
      ],
      shakes: [
        {
          title: "Milkshakes, Malts & Twirls (40 Flavors)",
          sub: "Sizes: Child (12 oz) · Small (16 oz) · Medium (20 oz) · Large (32 oz)",
          items: [
            "Banana", "Birthday Cake", "Blueberry", "Blue Raspberry", "Brownie", "Brownie Fudge",
            "Butterfinger", "Butter Pecan", "Caramel", "Cherry", "Chocolate", "Chocolate Chip",
            "Coffee", "Cookie Dough", "Cookies & Cream", "Gummy Bears", "Hazelnut", "Heath",
            "Hot Fudge", "M & M", "Mango", "Marshmallow", "Mint", "Mint Chocolate Chip",
            "Mint Cookies & Cream", "Nutella", "Orange Cream", "Peach", "Peanut Butter", "Pecan Pralines",
            "Pina Colada", "Pineapple", "Pistachio Nut", "Raspberry", "Reese's Peanut Butter Cups",
            "Reese's Pieces", "Rum Raisin", "Snickers", "Strawberry", "Vanilla"
          ]
        }
      ],
      sundaes: [
        {
          title: "Sundaes",
          sub: "Small · Medium · Large (Whipped cream, nuts & cherry included)",
          items: [
            "Blueberry", "Butterscotch", "Caramel", "Cherry", "Chocolate Syrup", "Cookies & Cream",
            "Hot Fudge", "Marshmallow", "Nutella", "Peach", "Peanut Butter", "Pineapple", "Raspberry", "Strawberry"
          ]
        },
        {
          title: "Specialty Sundaes",
          sub: "Small · Medium · Large",
          items: ["Almond Joy Hot Fudge", "Brownie Hot Fudge", "Pecan Pralines", "Turtle"]
        },
        {
          title: "Specialties",
          sub: "Whipped cream, nuts and cherry included with sundaes, splits, boats & parfaits",
          items: [
            "Traditional Banana Split", "Hot Fudge Banana Boat", "Hot Fudge Brownie Boat",
            "Ice Cream Float", "Parfait", "Pint", "Quart", "Dole Pineapple Float (12 oz · Dairy-Free / Vegan · 210 Cal)"
          ]
        }
      ],
      freezers: [
        {
          title: "Freezers",
          sub: "Sizes: Child (12 oz) · Small (16 oz) · Medium (20 oz) · Large (32 oz)",
          items: ["Coffee", "Hazelnut", "Kahlua", "Mango", "Mocha", "Orange Cream", "Peaches & Cream", "Pina Colada", "Strawberry Cream"]
        },
        {
          title: "Slush Float & Slush",
          sub: "Sizes: Child · Small · Medium · Large",
          items: ["Blue Raspberry", "Cherry", "Mango", "Orange", "Pina Colada", "Strawberry", "Watermelon"]
        },
        {
          title: "Fountain Drinks & Water",
          sub: "Sizes: Small · Large · Water",
          items: ["Coke", "Diet Coke", "Pepsi", "Sunkist", "Root Beer", "Sprite", "Dr. Pepper", "Water"]
        }
      ]
    }
  },

  lbv: {
    id: 'lbv',
    name: "Twistee Treat of Lake Buena Vista",
    shortLabel: "Twistee Treat of LBV · Apopka Vineland Rd",
    subtitle: "11947 S Apopka Vineland Rd · Winn-Dixie Plaza · Indoor Seating, Patio & Drive-Thru",
    tag: "Direct Licensee · Lake Buena Vista",
    address: "11947 South Apopka Vineland Road, Orlando, Florida 32836",
    phoneDisplay: "(407) 239-1400",
    phoneHref: "tel:+14072391400",
    email: "alg07c@my.fsu.edu",
    hoursShort: "Sun–Thu 11am–10:30pm · Fri–Sat 11am–11pm",
    hoursBadge: "Open Daily · Sun–Thu 11:00 AM – 10:30 PM · Fri–Sat till 11:00 PM",
    ratingBadge: "★ 4.7 Google (1,609) · ★ 4.7 DoorDash (227)",
    orderUrl: "https://www.doordash.com/store/474439/",
    orderBtnLabel: "Order Online",
    orderHint: "Order Twistee Treat of LBV delivery or pickup on DoorDash",
    facebookUrl: "https://www.facebook.com/TwisteeLBV/",
    instagramUrl: "https://instagram.com/twisteetreatlbv",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Twistee+Treat+11947+S+Apopka+Vineland+Rd+Orlando+FL+32836",
    storePhoto: "assets/images/site_originals/twisteetreat/lbv_store_pic_0001.webp",
    features: [
      "Indoor Cafe Seating",
      "Outdoor Patio",
      "Drive-Thru Lane",
      "Soft Serve & 9 Hand-Scooped Flavors"
    ],
    windowBoardPhotos: [
      {
        label: "View LBV Menu Board (1 of 2)",
        src: "assets/images/site_originals/twisteetreat/lbv_menu_2021_1_of_2_menu_board.webp",
        caption: "Twistee Treat of LBV Official Menu Board (1 of 2)"
      },
      {
        label: "View LBV Drive-Thru Board (2 of 2)",
        src: "assets/images/site_originals/twisteetreat/lbv_menu_2021_2_of_2_drive_thru.webp",
        caption: "Twistee Treat of LBV Official Drive-Thru Menu Board (2 of 2)"
      }
    ],
    doordashCategories: [
      { id: "all", name: "All Items (16)" },
      { id: "Most Ordered", name: "Most Ordered (11)" },
      { id: "Quarts", name: "Quarts (10)" },
      { id: "Toppings", name: "Toppings · 5oz Cups (5)" },
      { id: "Pineapple Juice", name: "Pineapple Juice (1)" }
    ],
    doordashItems: [
      {
        name: "Reese's Peanut Butter Cup Quart",
        price: "$6.99",
        desc: "Our tasty Vanilla ice cream with Reese's Peanut Butter pieces mixed in!",
        img: "assets/images/doordash_lbv/reese-s-peanut-butter-cup-quart-210641253.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "#1 Most Ordered"
      },
      {
        name: "Chocolate Quart",
        price: "$6.25",
        desc: "Twistee Treat's delicious Chocolate ice cream!",
        img: "assets/images/doordash_lbv/chocolate-quart-210641249.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Cookies and Cream Quart",
        price: "$6.99",
        desc: "Our tasty Vanilla ice cream with Oreo cookies mixed in!",
        img: "assets/images/doordash_lbv/cookies-and-cream-quart-210641251.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Brownie Fudge Quart",
        price: "$6.99",
        desc: "Our tasty Vanilla ice cream with brownies mixed in!",
        img: "assets/images/doordash_lbv/brownie-fudge-quart-210641247.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Cookie Dough Quart",
        price: "$6.99",
        desc: "Our tasty Vanilla ice cream with cookie dough mixed in!",
        img: "assets/images/doordash_lbv/cookie-dough-quart-210641250.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "#2 Most Ordered"
      },
      {
        name: "Chocolate Chip Mint Quart",
        price: "$6.99",
        desc: "Twistee Treat of LBV homemade mint chocolate chip quart.",
        img: "assets/images/doordash_lbv/chocolate-chip-mint-quart-210641248.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Neopolitan Quart",
        price: "$6.99",
        desc: "Vanilla, chocolate, and strawberry ice creams packed into one quart.",
        img: "assets/images/doordash_lbv/neopolitan-quart-251391559.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Dole Pineapple Soft Serve (Nondairy + Vegan)",
        price: "$6.99",
        desc: "Refreshing non-dairy, vegan Dole Pineapple soft-serve quart.",
        img: "assets/images/doordash_lbv/dole-pineapple-soft-serve-nondairy-vegan-251391846.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Vegan · Dairy-Free"
      },
      {
        name: "Vanilla Quart",
        price: "$6.25",
        desc: "Twistee Treat's delicious Vanilla ice cream!",
        img: "assets/images/doordash_lbv/vanilla-quart-210641254.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: "Most Ordered"
      },
      {
        name: "Strawberry Quart",
        price: "$6.25",
        desc: "Twistee Treat's delicious Strawberry ice cream!",
        img: "assets/images/doordash_lbv/strawberry-quart-210641252.webp",
        categories: ["Most Ordered", "Quarts"],
        badge: ""
      },
      {
        name: "Ground Peanuts",
        price: "$2.50",
        desc: "5oz cups each",
        img: "assets/images/doordash_lbv/ground-peanuts-251393070.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Reese's Peanut Butter Cups",
        price: "$2.50",
        desc: "5oz cups each",
        img: "assets/images/doordash_lbv/reese-s-peanut-butter-cups-251393069.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Cookies and Cream pieces",
        price: "$2.50",
        desc: "5oz cups each",
        img: "assets/images/doordash_lbv/cookies-and-cream-pieces-251393068.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Rainbow Sprinkles",
        price: "$2.50",
        desc: "5oz cups each",
        img: "assets/images/doordash_lbv/rainbow-sprinkles-479747935.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Hot Fudge",
        price: "$2.50",
        desc: "5oz cups each",
        img: "assets/images/doordash_lbv/hot-fudge-251393071.webp",
        categories: ["Toppings"],
        badge: "5oz Cup"
      },
      {
        name: "Dole Pineapple Juice",
        price: "$4.90",
        desc: "Four 6oz cans to make Dole Whip Floats",
        img: "assets/images/doordash_lbv/dole-pineapple-juice-251393067.webp",
        categories: ["Most Ordered", "Pineapple Juice"],
        badge: "Four 6oz Cans"
      }
    ],
    windowMenu: {
      cones: [
        {
          title: "Soft Serve Cones & Cups",
          sub: "Child · Small · Medium · Large · Small/Large Waffle Cone · Small/Large Fancy Waffle · YoPup Doggie Yogurt",
          items: ["Vanilla", "Chocolate", "Strawberry", "Chocolate/Vanilla Swirl", "Strawberry/Vanilla Swirl", "Mint", "Dole Pineapple (Dairy Free)"]
        },
        {
          title: "Scoop Ice Cream Cones & Cups (9 Flavors)",
          sub: "Small (1 Scoop) · Large (2 Scoop) · Extra Scoop · Waffle / Fancy Waffle · Pint · Quart · Scoop Banana Split",
          items: [
            "Birthday Cake", "Butter Pecan", "Coffee Chip", "Cookie Dough",
            "Cookies N Cream", "Mint Chocolate Chip", "Moose Tracks",
            "Salty Caramel Peanut", "Vanilla (No Sugar Added)"
          ]
        },
        {
          title: "Flavorburst Stripes (Additional Cost)",
          sub: "Striped into soft-serve cones & cups",
          items: ["Black Cherry", "Blue Goo", "Bubblegum", "Butter Pecan", "Mocha Cappuccino", "Peach Twist", "Pina Colada"]
        },
        {
          title: "Dips, Sprinkles & Toppings",
          sub: "Customize your cone or cup",
          items: ["Sprinkles / Peanuts", "Dips", "Sundae / Candy Toppings", "Nuts / Pralines"]
        }
      ],
      shakes: [
        {
          title: "Milkshakes, Malts & Twirls (All Made with Soft Serve)",
          sub: "Sizes: Child (12 oz) · Small (16 oz) · Medium (20 oz) · Large (32 oz)",
          items: [
            "Banana", "Birthday Cake", "Blueberry", "Blue Raspberry", "Brownie", "Brownie Fudge",
            "Butterfinger", "Butter Pecan", "Caramel", "Cherry", "Chocolate", "Chocolate Chip",
            "Coffee", "Cookie Dough", "Cookies & Cream", "Gummy Bears", "Hazelnut", "Heath",
            "Hot Fudge", "M & M", "Mango", "Marshmallow", "Mint", "Mint Chocolate Chip",
            "Mint Cookies & Cream", "Nutella", "Orange Cream", "Peach", "Peanut Butter", "Pecan Pralines",
            "Pina Colada", "Pineapple", "Pistachio Nut", "Raspberry", "Reese's Peanut Butter Cups",
            "Reese's Pieces", "Snickers", "Strawberry", "Vanilla"
          ]
        }
      ],
      sundaes: [
        {
          title: "Sundaes (All Made with Soft Serve)",
          sub: "Small · Medium · Large (Whipped cream, nuts & cherry included)",
          items: [
            "Blueberry", "Butterscotch", "Caramel", "Cherry", "Chocolate Syrup", "Cookies & Cream",
            "Hot Fudge", "Marshmallow", "Peach", "Peanut Butter", "Pineapple", "Raspberry", "Strawberry"
          ]
        },
        {
          title: "Specialty Sundaes",
          sub: "Small · Medium · Large",
          items: ["Almond Joy Hot Fudge", "Brownie Hot Fudge", "Pecan Pralines", "Turtle"]
        },
        {
          title: "Specialties",
          sub: "Whipped cream, nuts and cherry included",
          items: [
            "Banana Split", "Hot Fudge Banana Boat", "Hot Fudge Brownie Boat",
            "Ice Cream Float", "Parfait", "Pint", "Quart", "Scoop Banana Split",
            "Dole Pineapple Float (12 oz · Dairy-Free / Vegan · 210 Cal)"
          ]
        }
      ],
      freezers: [
        {
          title: "Freezers",
          sub: "Sizes: Child · Small · Med · Large",
          items: ["Coffee", "Hazelnut", "Kahlua", "Mango", "Mocha", "Orange Cream", "Peaches & Cream", "Pina Colada", "Strawberry Cream"]
        },
        {
          title: "Slush Float & Slush",
          sub: "Sizes: Child · Small · Med · Large",
          items: ["Blue Raspberry", "Cherry", "Mango", "Orange", "Pina Colada", "Strawberry", "Watermelon"]
        },
        {
          title: "Fountain Drinks & Water",
          sub: "Sizes: Small · Large · Water",
          items: ["Coke", "Diet Coke", "Pepsi", "Sunkist", "Root Beer", "Sprite", "Dr. Pepper", "Water"]
        }
      ]
    }
  }
};

/* Verbatim Expanded Google Maps Reviews */
const GOOGLE_REVIEWS = [
  {
    name: "Tanya Grace",
    badge: "Local Guide · 255 reviews",
    time: "7 months ago",
    stars: 5,
    topics: ["soft serve", "friendly staff", "banana split"],
    text: "First visit to Ginther’s on a Sunday evening in March after a full day at a nearby theme park. We intentionally avoided spending on overpriced theme park treats and needless to say, so glad we did. To our wonderful surprise, we came across this hidden gem. So many options on the menu, including vegan, non-dairy, fat-free selections. My teenage daughter ordered a banana boat with all the toppings- hot fudge, whipped cream and they generously provided extra cherries at no additional charge. The customer service is five star OUTSTANDING.",
    reply: "We appreciate the wonderful review, Tanya! We look forward to seeing you again"
  },
  {
    name: "Sam Petkunas",
    badge: "Local Guide · 28 reviews",
    time: "7 months ago",
    stars: 5,
    topics: ["soft serve", "friendly staff"],
    text: "Just wow! My daughter, brother-in-law and I attended Megacon Orlando today and decided to go for a sweet treat afterwards. Ginther's has quickly risen to the absolute top of my list for ice cream places in central Florida. The service we received was just excellent! The three dishes we bought (orange slush, waffle bowl cone, and a brownie boat) were all fantastic! The ice cream was nice and cold, thick and the definition of what soft serve should strive for.",
    reply: "Thank you for the wonderful review, Sam! Looking forward to your next visit!"
  },
  {
    name: "Chad Carroll",
    badge: "Local Guide · 159 reviews",
    time: "5 months ago",
    stars: 5,
    topics: ["dole whip", "soft serve"],
    text: "I went back to Ginther's Swirls Ice Cream for the pineapple float because apparently my grown adult responsibilities now include chasing frozen fruit sugar like a retired beach dad in flip-flops. And listen... that thing is dangerous. Sweet, cold, creamy, tropical. The place itself got that old-school ice cream stand energy too. 10/10. I came for 'just a little treat' and left emotionally attached to a pineapple float.",
    reply: "Chad! This is such an amazing review, thank you! Please email me at Ginthericecream@yahoo.com !"
  },
  {
    name: "Courtney Moscarella",
    badge: "Local Guide · 6 reviews",
    time: "4 months ago",
    stars: 5,
    topics: ["banana split", "friendly staff"],
    text: "First time at Ginther's and we will definitely be back! The menu is extensive and the prices are cheap. We got the hard scoop banana split that felt like it weighed 5 pounds and it was absolutely delicious. They also let you swap out the toppings. Highly recommend!",
    reply: ""
  },
  {
    name: "Jun",
    badge: "Local Guide · 59 reviews",
    time: "10 months ago",
    stars: 5,
    topics: ["soft serve", "banana split"],
    text: "We were totally craving something sweet, so I went for a classic soft serve vanilla ice cream in a waffle cone. It was so incredibly thick and creamy! Easily one of the best soft serves I've ever had. My fiancée ordered the banana split, and she absolutely loved it, too. The portion was so big, she couldn't even finish it!",
    reply: "Thank you for your great review!"
  },
  {
    name: "M D",
    badge: "Local Guide · 109 reviews",
    time: "2 months ago",
    stars: 5,
    topics: ["friendly staff", "drive thru"],
    text: "I rarely give 5 stars but this place was great. Big scoops without the big price. Service was great. We went twice during our stay in Orlando. The first time it was really crowded and took a while. The second time we got our ice cream in 5 minutes.",
    reply: ""
  },
  {
    name: "lilian gonzalez",
    badge: "Local Guide · 234 reviews",
    time: "9 months ago",
    stars: 5,
    topics: ["soft serve", "friendly staff"],
    text: "I loved this ice cream location! Customer service is top notch and the frozen treats are very affordable I spend less then 13 dollars and got vanilla and chocolate swirl with cherries and a vanilla soft serve and a small mango milkshake. The ice creams were both amazing and creamy.",
    reply: "Thanks so much Lilian! We will remind our staff to use extra mango flavor to increase the strength!"
  },
  {
    name: "Bobbi Bourgeois",
    badge: "Local Guide · 19 reviews",
    time: "3 months ago",
    stars: 5,
    topics: ["soft serve", "drive thru"],
    text: "Delicious and quick! Cute little spot right outside of SeaWorld! Us and the kids enjoyed this treat in this crazy hot weather. We ordered 2 shakes and kids soft serve.",
    reply: ""
  },
  {
    name: "CBFB",
    badge: "Local Guide · 457 reviews",
    time: "a year ago",
    stars: 5,
    topics: ["soft serve", "drive thru"],
    text: "What a great little ice cream shop! After doing some mini golf we figured some ice cream would cool us off and Ginther's did not disappoint. If you don't want to be out in the heat they have a small inside area with a kiosk for ordering. The soft serve was delicious and the shakes for the kiddos were great.",
    reply: ""
  }
];

/* Helper to pick a realistic ice cream color dot for each flavor chip */
function getFlavorColor(name) {
  const lower = name.toLowerCase();
  if (lower.includes("pineapple") || lower.includes("banana") || lower.includes("mango") || lower.includes("lemon")) return "#F7C927";
  if (lower.includes("strawberry") || lower.includes("cherry") || lower.includes("raspberry") || lower.includes("watermelon") || lower.includes("bubblegum")) return "#E63956";
  if (lower.includes("mint") || lower.includes("pistachio")) return "#38B07C";
  if (lower.includes("blue")) return "#1D8CF8";
  if (lower.includes("chocolate") || lower.includes("fudge") || lower.includes("brownie") || lower.includes("mocha") || lower.includes("nutella") || lower.includes("coffee") || lower.includes("mousse") || lower.includes("moose")) return "#5C3317";
  if (lower.includes("orange") || lower.includes("peach") || lower.includes("dreamsicle") || lower.includes("butterfinger") || lower.includes("reese") || lower.includes("peanut") || lower.includes("caramel") || lower.includes("butter pecan") || lower.includes("butterscotch")) return "#E0822D";
  return "#F4E8D1";
}

/* Application State */
let currentStoreKey = 'ginthers';
let currentDoorDashCat = 'all';
let currentWindowTab = 'cones';
let currentReviewTopic = 'all';

function setActiveStore(storeKey, shouldScrollToMenu = false, updateHash = true) {
  if (!STORES[storeKey]) return;
  currentStoreKey = storeKey;
  currentDoorDashCat = 'all';
  const store = STORES[storeKey];

  document.body.setAttribute('data-active-store', storeKey);

  // Update URL hash cleanly without jumping
  if (updateHash && history.replaceState) {
    history.replaceState(null, '', '#' + storeKey);
  }

  // Update all store switcher buttons (Header + Totem + Mobile Dock + Store Cards)
  document.querySelectorAll('.store-switch-btn').forEach(btn => {
    const active = btn.getAttribute('data-store') === storeKey;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  document.querySelectorAll('.totem-tab').forEach(btn => {
    const active = btn.getAttribute('data-store') === storeKey;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
  });

  document.querySelectorAll('.m-dock-store').forEach(btn => {
    const active = btn.getAttribute('data-store') === storeKey;
    btn.classList.toggle('is-active', active);
  });

  document.querySelectorAll('.store-directory-card').forEach(card => {
    const active = card.getAttribute('data-store-card') === storeKey;
    card.classList.toggle('is-selected', active);
  });

  // Update Header & Hero Banner
  document.getElementById('heroStoreTitle').textContent = store.name;
  document.getElementById('heroStoreSubtitle').textContent = store.subtitle;
  document.getElementById('headerPhoneLink').href = store.phoneHref;
  document.getElementById('headerPhoneText').textContent = store.phoneDisplay;
  document.getElementById('headerOrderBtn').href = store.orderUrl;
  document.getElementById('headerOrderBtnLabel').textContent = store.orderBtnLabel;
  document.getElementById('heroHoursBadge').textContent = store.hoursBadge;
  document.getElementById('heroRatingBadge').textContent = store.ratingBadge;

  // Update Left Sticky Totem
  const totemPhoto = document.getElementById('totemStorePhoto');
  if (totemPhoto) {
    totemPhoto.src = store.storePhoto;
    totemPhoto.alt = store.name + ' storefront';
  }
  document.getElementById('totemStoreTag').textContent = store.tag;
  document.getElementById('totemStoreName').textContent = store.name;
  document.getElementById('totemStoreAddress').textContent = store.address;

  const totemPhone = document.getElementById('totemStorePhone');
  totemPhone.href = store.phoneHref;
  totemPhone.textContent = store.phoneDisplay;

  document.getElementById('totemStoreHours').textContent = store.hoursShort;

  const totemEmail = document.getElementById('totemStoreEmail');
  totemEmail.href = 'mailto:' + store.email;
  totemEmail.textContent = store.email;

  const chipsEl = document.getElementById('totemFeatureChips');
  chipsEl.innerHTML = store.features.map(f => `<span class="feature-chip">${f}</span>`).join('');

  const totemOrderBtn = document.getElementById('totemOrderBtn');
  totemOrderBtn.href = store.orderUrl;
  document.getElementById('totemOrderBtnText').textContent = store.orderBtnLabel;
  document.getElementById('totemOrderHint').textContent = store.orderHint;

  document.getElementById('totemFbLink').href = store.facebookUrl;
  document.getElementById('totemIgLink').href = store.instagramUrl;
  document.getElementById('totemMapsLink').href = store.mapsUrl;

  // Update Mobile Bottom Dock
  document.getElementById('mobileDockPhone').href = store.phoneHref;
  document.getElementById('mobileDockOrder').href = store.orderUrl;

  // Update Cabinet Section Headers & Links
  document.getElementById('cabinetStoreScript').textContent = store.shortLabel;
  document.getElementById('cabinetSubbarCopy').innerHTML =
    `Exact menu items, prices, and photos for <strong>${store.name}</strong>. Tap any item to order online.`;
  const cabinetOrderLink = document.getElementById('cabinetOrderLink');
  cabinetOrderLink.href = store.orderUrl;
  cabinetOrderLink.textContent = store.orderBtnLabel;

  // Render DoorDash Categories & Items
  renderDoorDashCategories(store);
  renderDoorDashItems(store);

  // Render Window Menu Board
  document.getElementById('windowMenuStoreLabel').textContent = `${store.name} · Official Walk-Up & Drive-Thru Board`;
  renderWindowBoardPhotos(store);
  renderWindowBoardContent(store);

  if (shouldScrollToMenu) {
    document.getElementById('freezer-quarts').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderDoorDashCategories(store) {
  const bar = document.getElementById('doordashCategoryBar');
  bar.innerHTML = store.doordashCategories.map(cat => {
    const activeClass = cat.id === currentDoorDashCat ? 'is-active' : '';
    return `<button type="button" class="cat-pill-btn ${activeClass}" data-dd-cat="${cat.id}" role="tab" aria-selected="${cat.id === currentDoorDashCat}">${cat.name}</button>`;
  }).join('');

  bar.querySelectorAll('.cat-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentDoorDashCat = btn.getAttribute('data-dd-cat');
      renderDoorDashCategories(store);
      renderDoorDashItems(store);
    });
  });
}

function renderDoorDashItems(store) {
  const grid = document.getElementById('doordashItemsGrid');
  const filtered = currentDoorDashCat === 'all'
    ? store.doordashItems
    : store.doordashItems.filter(it => it.categories.includes(currentDoorDashCat));

  grid.innerHTML = filtered.map(item => {
    const primaryCat = item.categories.find(c => c !== 'Most Ordered') || item.categories[0];
    return `
      <a href="${store.orderUrl}" target="_blank" rel="noopener noreferrer" class="tub-item-card" aria-label="Order ${item.name} (${item.price}) from ${store.name}">
        <div class="tub-photo-lid">
          <img src="${item.img}" alt="${item.name}" width="88" height="88" loading="lazy" />
        </div>
        <div class="tub-card-content">
          <div class="tub-top-row">
            <h3 class="tub-item-title">${item.name}</h3>
            <span class="tub-price-badge">${item.price}</span>
          </div>
          ${item.desc ? `<p class="tub-item-desc">${item.desc}</p>` : ''}
          <div class="tub-meta-row">
            <span class="tub-cat-chip">${primaryCat}</span>
            ${item.badge ? `<span class="tub-popular-chip">${item.badge}</span>` : ''}
          </div>
        </div>
      </a>
    `;
  }).join('');
}

function renderWindowBoardPhotos(store) {
  const container = document.getElementById('windowBoardPhotoBtns');
  container.innerHTML = store.windowBoardPhotos.map(p => `
    <button type="button" class="view-board-photo-btn" data-lightbox-src="${p.src}" data-lightbox-caption="${p.caption}">
      <span>🔍 ${p.label}</span>
    </button>
  `).join('');

  bindLightboxButtons(container);
}

function renderWindowBoardContent(store) {
  const canvas = document.getElementById('windowBoardCanvas');
  const cards = store.windowMenu[currentWindowTab] || [];

  canvas.innerHTML = cards.map(card => `
    <article class="wb-card">
      <h3 class="wb-card-title">${card.title}</h3>
      <p class="wb-card-sub">${card.sub}</p>
      <div class="wb-chip-cloud">
        ${card.items.map(fl => `
          <span class="wb-flavor-chip">
            <span class="flavor-swatch" style="background:${getFlavorColor(fl)}"></span>
            <span>${fl}</span>
          </span>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  const filtered = currentReviewTopic === 'all'
    ? GOOGLE_REVIEWS
    : GOOGLE_REVIEWS.filter(r => r.topics.includes(currentReviewTopic));

  grid.innerHTML = filtered.map(r => `
    <article class="review-card">
      <div class="review-card-top">
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-meta">${r.badge} · ${r.time}</div>
        </div>
        <div class="review-stars" aria-label="${r.stars} out of 5 stars">${'★'.repeat(r.stars)}</div>
      </div>
      <p class="review-body">“${r.text}”</p>
      ${r.reply ? `<div class="review-owner-reply"><strong>Response from the owner:</strong> ${r.reply}</div>` : ''}
    </article>
  `).join('');
}

function bindLightboxButtons(root = document) {
  const dialog = document.getElementById('parlorLightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  root.querySelectorAll('[data-lightbox-src]').forEach(btn => {
    btn.addEventListener('click', () => {
      img.src = btn.getAttribute('data-lightbox-src');
      img.alt = btn.getAttribute('data-lightbox-caption') || 'Menu photo';
      caption.textContent = btn.getAttribute('data-lightbox-caption') || '';
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Bind Store Switcher Buttons across Canopy, Totem, Directory Cards, and Mobile Dock
  document.querySelectorAll('.store-switch-btn, .totem-tab, .m-dock-store').forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveStore(btn.getAttribute('data-store'), false);
    });
  });

  document.querySelectorAll('.store-view-menu-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      setActiveStore(btn.getAttribute('data-store'), false);
    });
  });

  // Make the entire right-side Store Directory Cards clickable to switch store (#ginthers, #ocoee, #lbv)
  document.querySelectorAll('.store-directory-card').forEach(card => {
    card.addEventListener('click', e => {
      // Do not intercept clicks on external links (Order Online, FB, IG, Phone)
      if (e.target.closest('a')) return;
      const storeKey = card.getAttribute('data-store-card');
      if (storeKey) {
        setActiveStore(storeKey, false);
      }
    });

    card.addEventListener('keydown', e => {
      if (e.target !== card) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const storeKey = card.getAttribute('data-store-card');
        if (storeKey) {
          setActiveStore(storeKey, false);
        }
      }
    });
  });

  window.addEventListener('hashchange', () => {
    const hash = (window.location.hash || '').replace('#', '').toLowerCase();
    if (STORES[hash] && hash !== currentStoreKey) {
      setActiveStore(hash, false);
    }
  });

  // Bind Window Menu Board Tabs
  document.querySelectorAll('.wb-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentWindowTab = tab.getAttribute('data-wb');
      document.querySelectorAll('.wb-tab').forEach(t => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderWindowBoardContent(STORES[currentStoreKey]);
    });
  });

  // Bind Review Topic Filter Pills
  document.querySelectorAll('.topic-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      currentReviewTopic = pill.getAttribute('data-topic');
      document.querySelectorAll('.topic-pill').forEach(p => p.classList.toggle('is-active', p === pill));
      renderReviews();
    });
  });

  // Lightbox Close
  const dialog = document.getElementById('parlorLightbox');
  document.getElementById('lightboxCloseBtn').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close();
  });

  bindLightboxButtons(document);

  // Check initial URL hash (#ginthers, #ocoee, #lbv), defaulting to ginthers
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  const initialStore = STORES[hash] ? hash : 'ginthers';
  setActiveStore(initialStore, false, Boolean(STORES[hash]));
  renderReviews();
});
