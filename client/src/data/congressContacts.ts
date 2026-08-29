/**
 * Current public congressional contact directory.
 *
 * Generated from the 119th Congress member and district-office feeds:
 * - https://unitedstates.github.io/congress-legislators/legislators-current.json
 * - https://unitedstates.github.io/congress-legislators/legislators-district-offices.json
 * - https://github.com/unitedstates/contact-congress (contact form fallback)
 *
 * Direct emails are intentionally not inferred. The authoritative member feed
 * exposes official websites and contact forms rather than a direct-email field.
 */

export type CongressionalFieldOffice = {
  id: string;
  label: string;
  phone?: string | null;
  fax?: string | null;
  address: string;
};

export type CongressionalContact = {
  id: string;
  name: string;
  chamber: "Senate" | "House";
  role: "Senator" | "Representative" | "Delegate";
  party: string;
  partyName: string;
  state: string;
  stateName: string;
  district: string | null;
  class: number | null;
  isTerritory: boolean;
  office: string;
  address: string;
  phone: string;
  fax?: string | null;
  website?: string | null;
  contactForm?: string | null;
  emails: string[];
  fieldOffices: CongressionalFieldOffice[];
};

export const CONGRESS_DATA_UPDATED = "2026-08-29";

export const congressionalContacts: CongressionalContact[] = [
  {
    "id": "M001212",
    "name": "Barry Moore",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AL",
    "stateName": "Alabama",
    "district": "AL-01",
    "class": null,
    "isTerritory": false,
    "office": "1511 Longworth House Office Building",
    "address": "1511 Longworth House Office Building Washington DC 20515-0101",
    "phone": "202-225-2901",
    "fax": null,
    "website": "https://barrymoore.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001212-andalusia",
        "label": "Andalusia",
        "phone": "334-428-1129",
        "fax": "334-222-3342",
        "address": "505 E 3 Notch St, Suite 322, Andalusia, AL, 36420"
      },
      {
        "id": "M001212-bay_minette",
        "label": "Bay Minette",
        "phone": "251-494-5151",
        "fax": null,
        "address": "116 Courthouse Sq, Bay Minette, AL, 36507"
      },
      {
        "id": "M001212-dothan",
        "label": "Dothan",
        "phone": "334-547-6630",
        "fax": null,
        "address": "217 Graceland Drive, Suite 5, Dothan, AL, 36305"
      },
      {
        "id": "M001212-foley",
        "label": "Foley",
        "phone": "251-437-6310",
        "fax": null,
        "address": "407 E. Laurel Ave, Foley, AL, 36535"
      },
      {
        "id": "M001212-mobile",
        "label": "Mobile",
        "phone": "251-264-6710",
        "fax": null,
        "address": "5253 Hwy 90 W, Suite I, Mobile, AL, 36619"
      }
    ]
  },
  {
    "id": "F000481",
    "name": "Shomari Figures",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "AL",
    "stateName": "Alabama",
    "district": "AL-02",
    "class": null,
    "isTerritory": false,
    "office": "225 Cannon House Office Building",
    "address": "225 Cannon House Office Building Washington DC 20515-0102",
    "phone": "202-225-4931",
    "fax": null,
    "website": "https://figures.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000481-mobile",
        "label": "Mobile",
        "phone": "251-283-6280",
        "fax": null,
        "address": "351 N. Broad St, Mobile, AL, 36603"
      },
      {
        "id": "F000481-montgomery",
        "label": "Montgomery",
        "phone": "334-777-5700",
        "fax": null,
        "address": "150 Dexter Ave, Montgomery, AL, 36104"
      }
    ]
  },
  {
    "id": "R000575",
    "name": "Mike Rogers",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AL",
    "stateName": "Alabama",
    "district": "AL-03",
    "class": null,
    "isTerritory": false,
    "office": "2469 Rayburn House Office Building",
    "address": "2469 Rayburn House Office Building Washington DC 20515-0103",
    "phone": "202-225-3261",
    "fax": null,
    "website": "https://mikerogers.house.gov",
    "contactForm": "http://mikerogers.house.gov/contact-mike/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000575-opelika",
        "label": "Opelika",
        "phone": "334-745-6221",
        "fax": "334-742-0109",
        "address": "701 Avenue A, Suite 300, G.W. Andrews Federal Building, Opelika, AL, 36801"
      },
      {
        "id": "R000575-oxford",
        "label": "Oxford",
        "phone": "256-236-5655",
        "fax": "844-635-4276",
        "address": "149 East Hamric Drive, Suite D, Oxford, AL, 36203"
      }
    ]
  },
  {
    "id": "A000055",
    "name": "Robert B. Aderholt",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AL",
    "stateName": "Alabama",
    "district": "AL-04",
    "class": null,
    "isTerritory": false,
    "office": "272 Cannon House Office Building",
    "address": "272 Cannon House Office Building Washington DC 20515-0104",
    "phone": "202-225-4876",
    "fax": null,
    "website": "https://aderholt.house.gov",
    "contactForm": "https://aderholt.house.gov/contact-robert",
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000055-cullman",
        "label": "Cullman",
        "phone": "256-734-6043",
        "fax": "202-225-5587",
        "address": "205 4th Ave. NE, Suite 104, Cullman, AL, 35055"
      },
      {
        "id": "A000055-jasper",
        "label": "Jasper",
        "phone": "205-221-2310",
        "fax": null,
        "address": "1710 Alabama Ave., 247, Carl Elliott Building, Jasper, AL, 35501"
      },
      {
        "id": "A000055-tuscumbia",
        "label": "Tuscumbia",
        "phone": "256-381-3450",
        "fax": "202-225-5587",
        "address": "1011 George Wallace Blvd., Suite 146, Tuscumbia, AL, 35674"
      }
    ]
  },
  {
    "id": "S001220",
    "name": "Dale W. Strong",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AL",
    "stateName": "Alabama",
    "district": "AL-05",
    "class": null,
    "isTerritory": false,
    "office": "449 Cannon House Office Building",
    "address": "449 Cannon House Office Building Washington DC 20515-0105",
    "phone": "202-225-4801",
    "fax": null,
    "website": "https://strong.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001220-decatur",
        "label": "Decatur",
        "phone": "256-355-9400",
        "fax": null,
        "address": "302 Lee Street NE, Morgan County Courthouse, Decatur, AL, 35601"
      },
      {
        "id": "S001220-huntsville",
        "label": "Huntsville",
        "phone": "256-551-0190",
        "fax": "771-200-5717",
        "address": "2101 Clinton Avenue W, Suite 302, Huntsville, AL, 35805"
      }
    ]
  },
  {
    "id": "P000609",
    "name": "Gary J. Palmer",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AL",
    "stateName": "Alabama",
    "district": "AL-06",
    "class": null,
    "isTerritory": false,
    "office": "170 Cannon House Office Building",
    "address": "170 Cannon House Office Building Washington DC 20515-0106",
    "phone": "202-225-4921",
    "fax": null,
    "website": "https://palmer.house.gov",
    "contactForm": "https://palmer.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000609-birmingham",
        "label": "Birmingham",
        "phone": "205-968-1290",
        "fax": "205-968-1294",
        "address": "3535 Grandview Pkwy., Suite 525, Birmingham, AL, 35243"
      }
    ]
  },
  {
    "id": "S001185",
    "name": "Terri A. Sewell",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "AL",
    "stateName": "Alabama",
    "district": "AL-07",
    "class": null,
    "isTerritory": false,
    "office": "1035 Longworth House Office Building",
    "address": "1035 Longworth House Office Building Washington DC 20515-0107",
    "phone": "202-225-2665",
    "fax": null,
    "website": "https://sewell.house.gov",
    "contactForm": "https://sewell.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001185-birmingham",
        "label": "Birmingham",
        "phone": "205-254-1960",
        "fax": "205-254-1974",
        "address": "Two 20th Street North, Suite 1130, Birmingham, AL, 35203"
      },
      {
        "id": "S001185-montgomery",
        "label": "Montgomery",
        "phone": "334-262-1919",
        "fax": "334-262-1921",
        "address": "101 S. Lawrence St., Annex 3, Courthouse, Montgomery, AL, 36104"
      },
      {
        "id": "S001185-selma",
        "label": "Selma",
        "phone": "334-877-4414",
        "fax": "334-877-4489",
        "address": "908 Alabama Ave., Suite 112, Federal Building, Selma, AL, 36701"
      },
      {
        "id": "S001185-tuscaloosa",
        "label": "Tuscaloosa",
        "phone": "205-752-5380",
        "fax": "205-752-5899",
        "address": "2501 7th St., Suite 300, Tuscaloosa, AL, 35401"
      }
    ]
  },
  {
    "id": "B001323",
    "name": "Nicholas J. Begich III",
    "chamber": "House",
    "role": "Delegate",
    "party": "R",
    "partyName": "Republican",
    "state": "AK",
    "stateName": "Alaska",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": false,
    "office": "153 Cannon House Office Building",
    "address": "153 Cannon House Office Building Washington DC 20515-0200",
    "phone": "202-225-5765",
    "fax": null,
    "website": "https://begich.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001323-anchorage",
        "label": "Anchorage",
        "phone": "907-921-6575",
        "fax": null,
        "address": "1016 W Sixth Ave, Suite 406, Anchorage, AK, 99501"
      }
    ]
  },
  {
    "id": "R000600",
    "name": "Aumua Amata Coleman Radewagen",
    "chamber": "House",
    "role": "Delegate",
    "party": "R",
    "partyName": "Republican",
    "state": "AS",
    "stateName": "American Samoa",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": true,
    "office": "2001 Rayburn House Office Building",
    "address": "2001 Rayburn House Office Building Washington DC 20515-5200",
    "phone": "202-225-8577",
    "fax": null,
    "website": "https://radewagen.house.gov",
    "contactForm": "https://radewagen.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000600-pagopago",
        "label": "Pagopago",
        "phone": "684-633-3601",
        "fax": "684-633-3607",
        "address": "1 Fagatogo Square, Box 5859, Pagopago, AS, 96799"
      }
    ]
  },
  {
    "id": "S001183",
    "name": "David Schweikert",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-01",
    "class": null,
    "isTerritory": false,
    "office": "166 Cannon House Office Building",
    "address": "166 Cannon House Office Building Washington DC 20515-0301",
    "phone": "202-225-2190",
    "fax": null,
    "website": "https://schweikert.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001183-scottsdale",
        "label": "Scottsdale",
        "phone": "480-946-2411",
        "fax": "480-946-2446",
        "address": "14500 N Northsight Blvd, Suite 221, Scottsdale, AZ, 85260-3658"
      }
    ]
  },
  {
    "id": "C001132",
    "name": "Elijah Crane",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-02",
    "class": null,
    "isTerritory": false,
    "office": "307 Cannon House Office Building",
    "address": "307 Cannon House Office Building Washington DC 20515-0302",
    "phone": "202-225-3361",
    "fax": null,
    "website": "https://crane.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001132-prescott",
        "label": "Prescott",
        "phone": "928-286-5338",
        "fax": null,
        "address": "122 N. Cortez St., Suite 211, Prescott, AZ, 86301"
      }
    ]
  },
  {
    "id": "A000381",
    "name": "Yassamin Ansari",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-03",
    "class": null,
    "isTerritory": false,
    "office": "1432 Longworth House Office Building",
    "address": "1432 Longworth House Office Building Washington DC 20515-0303",
    "phone": "202-225-4065",
    "fax": null,
    "website": "https://ansari.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000381-phoenix",
        "label": "Phoenix",
        "phone": "602-956-2285",
        "fax": null,
        "address": "3770 N 7th St, 100b, Phoenix, AZ, 85014"
      }
    ]
  },
  {
    "id": "S001211",
    "name": "Greg Stanton",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-04",
    "class": null,
    "isTerritory": false,
    "office": "207 Cannon House Office Building",
    "address": "207 Cannon House Office Building Washington DC 20515-0304",
    "phone": "202-225-9888",
    "fax": null,
    "website": "https://stanton.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001211-mesa",
        "label": "Mesa",
        "phone": "602-956-2463",
        "fax": null,
        "address": "1220 S Alma School Rd, Ste 209, Mesa, AZ, 85210"
      }
    ]
  },
  {
    "id": "B001302",
    "name": "Andy Biggs",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-05",
    "class": null,
    "isTerritory": false,
    "office": "464 Cannon House Office Building",
    "address": "464 Cannon House Office Building Washington DC 20515-0305",
    "phone": "202-225-2635",
    "fax": null,
    "website": "https://biggs.house.gov",
    "contactForm": "https://biggs.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001302-mesa",
        "label": "Mesa",
        "phone": "480-699-8239",
        "fax": null,
        "address": "2509 S. Power Rd., Suite 204, Mesa, AZ, 85209"
      }
    ]
  },
  {
    "id": "C001133",
    "name": "Juan Ciscomani",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-06",
    "class": null,
    "isTerritory": false,
    "office": "461 Cannon House Office Building",
    "address": "461 Cannon House Office Building Washington DC 20515-0306",
    "phone": "202-225-2542",
    "fax": null,
    "website": "https://ciscomani.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001133-sierra_vista",
        "label": "Sierra Vista",
        "phone": "520-459-3115",
        "fax": null,
        "address": "2600 E. Wilcox Dr., Room H-106, Sierra Vista, AZ, 85635"
      },
      {
        "id": "C001133-tucson",
        "label": "Tucson",
        "phone": "520-881-3588",
        "fax": null,
        "address": "1636 N Swan Road, Suite 200, Tucson, AZ, 85712"
      }
    ]
  },
  {
    "id": "G000606",
    "name": "Adelita S. Grijalva",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-07",
    "class": null,
    "isTerritory": false,
    "office": "1203 Longworth House Office Building",
    "address": "1203 Longworth House Office Building Washington DC 20515-0307",
    "phone": "202-225-2435",
    "fax": null,
    "website": "https://grijalva.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000606-tucson",
        "label": "Tucson",
        "phone": "520-622-6788",
        "fax": "520-622-0198",
        "address": "101 W. Irvington Road, Building 4, Tucson, AZ, 85714"
      }
    ]
  },
  {
    "id": "H001098",
    "name": "Abraham J. Hamadeh",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-08",
    "class": null,
    "isTerritory": false,
    "office": "1722 Longworth House Office Building",
    "address": "1722 Longworth House Office Building Washington DC 20515-0308",
    "phone": "202-225-4576",
    "fax": null,
    "website": "https://hamadeh.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001098-surprise",
        "label": "Surprise",
        "phone": null,
        "fax": null,
        "address": "12515 W. Bell Rd, Suite 104, Surprise, AZ, 85378"
      }
    ]
  },
  {
    "id": "G000565",
    "name": "Paul A. Gosar",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AZ",
    "stateName": "Arizona",
    "district": "AZ-09",
    "class": null,
    "isTerritory": false,
    "office": "2057 Rayburn House Office Building",
    "address": "2057 Rayburn House Office Building Washington DC 20515-0309",
    "phone": "202-225-2315",
    "fax": null,
    "website": "https://gosar.house.gov",
    "contactForm": "http://paulgosar.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000565-goodyear",
        "label": "Goodyear",
        "phone": "623-707-0530",
        "fax": null,
        "address": "1300 S. Litchfield Road, Suite 115-H, Goodyear, AZ, 85338"
      }
    ]
  },
  {
    "id": "C001087",
    "name": "Eric A. \"Rick\" Crawford",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AR",
    "stateName": "Arkansas",
    "district": "AR-01",
    "class": null,
    "isTerritory": false,
    "office": "2422 Rayburn House Office Building",
    "address": "2422 Rayburn House Office Building Washington DC 20515-0401",
    "phone": "202-225-4076",
    "fax": null,
    "website": "https://crawford.house.gov",
    "contactForm": "http://crawford.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001087-cabot",
        "label": "Cabot",
        "phone": "501-843-3043",
        "fax": "501-843-4955",
        "address": "112 S. 1st, Cabot, AR, 72023"
      },
      {
        "id": "C001087-dumas",
        "label": "Dumas",
        "phone": "870-377-5571",
        "fax": null,
        "address": "101 E Waterman St, Dumas, AR, 71639-2226"
      },
      {
        "id": "C001087-jonesboro",
        "label": "Jonesboro",
        "phone": "870-203-0540",
        "fax": "870-203-0542",
        "address": "2400 Highland Dr., Suite 300, Jonesboro, AR, 72401"
      },
      {
        "id": "C001087-mountain_home",
        "label": "Mountain Home",
        "phone": "870-424-2075",
        "fax": "870-424-3149",
        "address": "1001 Highway 62 E, Suite 9, Mountain Home, AR, 72653"
      }
    ]
  },
  {
    "id": "H001072",
    "name": "J. French Hill",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AR",
    "stateName": "Arkansas",
    "district": "AR-02",
    "class": null,
    "isTerritory": false,
    "office": "1533 Longworth House Office Building",
    "address": "1533 Longworth House Office Building Washington DC 20515-0402",
    "phone": "202-225-2506",
    "fax": null,
    "website": "https://hill.house.gov",
    "contactForm": "https://Hillforms.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001072-conway",
        "label": "Conway",
        "phone": "501-902-5733",
        "fax": "501-324-6029",
        "address": "900 Oak Street, Conway, AR, 72032"
      },
      {
        "id": "H001072-little_rock",
        "label": "Little Rock",
        "phone": "501-324-5941",
        "fax": "501-324-6029",
        "address": "1501 N. University Ave., Suite 630, Little Rock, AR, 72207"
      }
    ]
  },
  {
    "id": "W000809",
    "name": "Steve Womack",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AR",
    "stateName": "Arkansas",
    "district": "AR-03",
    "class": null,
    "isTerritory": false,
    "office": "2412 Rayburn House Office Building",
    "address": "2412 Rayburn House Office Building Washington DC 20515-0403",
    "phone": "202-225-4301",
    "fax": null,
    "website": "https://womack.house.gov",
    "contactForm": "https://womack.house.gov/contact/contactform.htm",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000809-fort_smith",
        "label": "Fort Smith",
        "phone": "479-424-1146",
        "fax": "479-424-2737",
        "address": "6101 Phoenix Ave, Suite 4, Fort Smith, AR, 72903-5083"
      },
      {
        "id": "W000809-rogers",
        "label": "Rogers",
        "phone": "479-464-0446",
        "fax": "479-464-0063",
        "address": "3333 Pinnacle Hills Parkway, Suite 120, Rogers, AR, 72758"
      }
    ]
  },
  {
    "id": "W000821",
    "name": "Bruce Westerman",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "AR",
    "stateName": "Arkansas",
    "district": "AR-04",
    "class": null,
    "isTerritory": false,
    "office": "202 Cannon House Office Building",
    "address": "202 Cannon House Office Building Washington DC 20515-0404",
    "phone": "202-225-3772",
    "fax": null,
    "website": "https://westerman.house.gov",
    "contactForm": "https://westerman.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000821-el_dorado",
        "label": "El Dorado",
        "phone": "501-609-9796",
        "fax": null,
        "address": "101 N. Washington Ave., Suite 406, El Dorado, AR, 71730"
      },
      {
        "id": "W000821-hot_springs",
        "label": "Hot Springs",
        "phone": "501-609-9796",
        "fax": "771-200-5681",
        "address": "101 Reserve St., Suite 200, Hot Springs, AR, 71901"
      },
      {
        "id": "W000821-pine_bluff",
        "label": "Pine Bluff",
        "phone": "501-609-9796",
        "fax": null,
        "address": "211 W 3rd Ave., Suite 245, Pine Bluff, AR, 71611"
      },
      {
        "id": "W000821-russellville",
        "label": "Russellville",
        "phone": "501-609-9796",
        "fax": null,
        "address": "500 W. Main St., Suite 110, Russellville, AR, 72801"
      }
    ]
  },
  {
    "id": "G000607",
    "name": "James Gallagher",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CA",
    "stateName": "California",
    "district": "CA-01",
    "class": null,
    "isTerritory": false,
    "office": "408 Cannon House Office Building",
    "address": "408 Cannon House Office Building Washington DC 20515-0501",
    "phone": "202-225-3076",
    "fax": null,
    "website": null,
    "contactForm": null,
    "emails": [],
    "fieldOffices": []
  },
  {
    "id": "H001068",
    "name": "Jared Huffman",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-02",
    "class": null,
    "isTerritory": false,
    "office": "2330 Rayburn House Office Building",
    "address": "2330 Rayburn House Office Building Washington DC 20515-0502",
    "phone": "202-225-5161",
    "fax": null,
    "website": "https://huffman.house.gov",
    "contactForm": "https://huffman.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001068-eureka",
        "label": "Eureka",
        "phone": "707-407-3585",
        "fax": "707-407-3559",
        "address": "317 Third St., Suite 1, Eureka, CA, 95501"
      },
      {
        "id": "H001068-fort_bragg",
        "label": "Fort Bragg",
        "phone": "707-962-0933",
        "fax": "707-962-0905",
        "address": "430 N. Franklin St., P.O. Box 2208, Fort Bragg, CA, 95437"
      },
      {
        "id": "H001068-petaluma",
        "label": "Petaluma",
        "phone": "707-981-8967",
        "fax": null,
        "address": "206 G St., Unit #3, Petaluma, CA, 94952"
      },
      {
        "id": "H001068-san_rafael",
        "label": "San Rafael",
        "phone": "415-258-9657",
        "fax": "415-258-9913",
        "address": "999 Fifth Ave., Suite 290, San Rafael, CA, 94901"
      },
      {
        "id": "H001068-ukiah",
        "label": "Ukiah",
        "phone": "707-671-7449",
        "fax": "707-962-0905",
        "address": "200 South School Street, Ukiah, CA, 95482"
      }
    ]
  },
  {
    "id": "K000401",
    "name": "Kevin Kiley",
    "chamber": "House",
    "role": "Representative",
    "party": "I",
    "partyName": "Independent",
    "state": "CA",
    "stateName": "California",
    "district": "CA-03",
    "class": null,
    "isTerritory": false,
    "office": "2445 Rayburn House Office Building",
    "address": "2445 Rayburn House Office Building Washington DC 20515-0503",
    "phone": "202-225-2523",
    "fax": null,
    "website": "https://kiley.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000401-rocklin",
        "label": "Rocklin",
        "phone": "916-724-2575",
        "fax": null,
        "address": "6538 Lonetree Blvd, Suite 200, Rocklin, CA, 95765"
      }
    ]
  },
  {
    "id": "T000460",
    "name": "Mike Thompson",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-04",
    "class": null,
    "isTerritory": false,
    "office": "268 Cannon House Office Building",
    "address": "268 Cannon House Office Building Washington DC 20515-0504",
    "phone": "202-225-3311",
    "fax": null,
    "website": "https://mikethompson.house.gov",
    "contactForm": "https://mikethompsonforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000460-napa",
        "label": "Napa",
        "phone": "707-226-9898",
        "fax": "707-251-9800",
        "address": "2721 Napa Valley Corporate Dr., Napa, CA, 94558"
      },
      {
        "id": "T000460-santa_rosa",
        "label": "Santa Rosa",
        "phone": "707-542-7182",
        "fax": "707-542-2745",
        "address": "2300 County Center Dr., Suite A100, Santa Rosa, CA, 95403"
      },
      {
        "id": "T000460-woodland",
        "label": "Woodland",
        "phone": "530-753-5301",
        "fax": null,
        "address": "622 Main Street, Suite 106, Woodland, CA, 95695"
      }
    ]
  },
  {
    "id": "M001177",
    "name": "Tom McClintock",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CA",
    "stateName": "California",
    "district": "CA-05",
    "class": null,
    "isTerritory": false,
    "office": "2256 Rayburn House Office Building",
    "address": "2256 Rayburn House Office Building Washington DC 20515-0505",
    "phone": "202-225-2511",
    "fax": null,
    "website": "https://mcclintock.house.gov",
    "contactForm": "http://mcclintock.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001177-el_dorado_hills",
        "label": "El Dorado Hills",
        "phone": "916-786-5560",
        "fax": null,
        "address": "4359 Town Center Blvd., Suite 210, El Dorado Hills, CA, 95762"
      },
      {
        "id": "M001177-modesto",
        "label": "Modesto",
        "phone": "209-550-6910",
        "fax": null,
        "address": "1020 15th Street, Suite 11, Modesto, CA, 95354"
      }
    ]
  },
  {
    "id": "B001287",
    "name": "Ami Bera",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-06",
    "class": null,
    "isTerritory": false,
    "office": "172 Cannon House Office Building",
    "address": "172 Cannon House Office Building Washington DC 20515-0506",
    "phone": "202-225-5716",
    "fax": null,
    "website": "https://bera.house.gov",
    "contactForm": "https://beraforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001287-sacramento",
        "label": "Sacramento",
        "phone": "916-635-0505",
        "fax": "916-635-0514",
        "address": "8950 Cal Center Dr., Suite 100, Building 3, Sacramento, CA, 95826"
      }
    ]
  },
  {
    "id": "M001163",
    "name": "Doris O. Matsui",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-07",
    "class": null,
    "isTerritory": false,
    "office": "2206 Rayburn House Office Building",
    "address": "2206 Rayburn House Office Building Washington DC 20515-0507",
    "phone": "202-225-7163",
    "fax": null,
    "website": "https://matsui.house.gov",
    "contactForm": "https://matsui.house.gov/email-representative-matsui",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001163-sacramento",
        "label": "Sacramento",
        "phone": "916-498-5600",
        "fax": "916-444-6117",
        "address": "501 I St., Suite 12-600, Robert T. Matsui U.S. Courthouse, Sacramento, CA, 95814"
      }
    ]
  },
  {
    "id": "G000559",
    "name": "John Garamendi",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-08",
    "class": null,
    "isTerritory": false,
    "office": "2428 Rayburn House Office Building",
    "address": "2428 Rayburn House Office Building Washington DC 20515-0508",
    "phone": "202-225-1880",
    "fax": null,
    "website": "https://garamendi.house.gov",
    "contactForm": "https://garamendi.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000559-fairfield",
        "label": "Fairfield",
        "phone": "707-438-1822",
        "fax": "707-438-0523",
        "address": "1261 Travis Boulevard, Suite 100, Fairfield, CA, 94533"
      },
      {
        "id": "G000559-richmond",
        "label": "Richmond",
        "phone": "510-620-1001",
        "fax": "707-438-0523",
        "address": "440 Civic Center Plaza, 2nd Floor, Richmond, CA, 94804"
      },
      {
        "id": "G000559-vallejo",
        "label": "Vallejo",
        "phone": "707-645-1888",
        "fax": "707-438-0523",
        "address": "420 Virginia Street, Suite #1c, Vallejo, CA, 94590"
      }
    ]
  },
  {
    "id": "H001090",
    "name": "Josh Harder",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-09",
    "class": null,
    "isTerritory": false,
    "office": "209 Cannon House Office Building",
    "address": "209 Cannon House Office Building Washington DC 20515-0509",
    "phone": "202-225-4540",
    "fax": null,
    "website": "https://harder.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001090-stockton",
        "label": "Stockton",
        "phone": "209-579-5458",
        "fax": null,
        "address": "1776 W March Ln, Suite 360, Stockton, CA, 95207"
      }
    ]
  },
  {
    "id": "D000623",
    "name": "Mark DeSaulnier",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-10",
    "class": null,
    "isTerritory": false,
    "office": "2134 Rayburn House Office Building",
    "address": "2134 Rayburn House Office Building Washington DC 20515-0510",
    "phone": "202-225-2095",
    "fax": null,
    "website": "https://desaulnier.house.gov",
    "contactForm": "https://desaulnier.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000623-antioch",
        "label": "Antioch",
        "phone": "925-754-0716",
        "fax": "925-754-0728",
        "address": "4703 Lone Tree Way, Antioch, CA, 94531"
      },
      {
        "id": "D000623-walnut_creek",
        "label": "Walnut Creek",
        "phone": "925-933-2660",
        "fax": "925-933-2677",
        "address": "3100 Oak Road, Suite 110, Walnut Creek, CA, 94597"
      }
    ]
  },
  {
    "id": "P000197",
    "name": "Nancy Pelosi",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-11",
    "class": null,
    "isTerritory": false,
    "office": "1236 Longworth House Office Building",
    "address": "1236 Longworth House Office Building Washington DC 20515-0511",
    "phone": "202-225-4965",
    "fax": null,
    "website": "https://pelosi.house.gov",
    "contactForm": "http://pelosi.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000197-san_francisco",
        "label": "San Francisco",
        "phone": "415-556-4862",
        "fax": null,
        "address": "90 7th St., Suite 2-800, San Francisco, CA, 94103"
      }
    ]
  },
  {
    "id": "S001231",
    "name": "Lateefah Simon",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-12",
    "class": null,
    "isTerritory": false,
    "office": "1023 Longworth House Office Building",
    "address": "1023 Longworth House Office Building Washington DC 20515-0512",
    "phone": "202-225-2661",
    "fax": null,
    "website": "https://simon.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001231-oakland",
        "label": "Oakland",
        "phone": "510-763-0370",
        "fax": null,
        "address": "Oakland, CA, 94612"
      }
    ]
  },
  {
    "id": "G000605",
    "name": "Adam Gray",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-13",
    "class": null,
    "isTerritory": false,
    "office": "1230 Longworth House Office Building",
    "address": "1230 Longworth House Office Building Washington DC 20515-0513",
    "phone": "202-225-1947",
    "fax": null,
    "website": "https://gray.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000605-turlock",
        "label": "Turlock",
        "phone": "209-226-6880",
        "fax": null,
        "address": "90 S. First St., Turlock, CA, 95380"
      }
    ]
  },
  {
    "id": "M001225",
    "name": "Kevin Mullin",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-15",
    "class": null,
    "isTerritory": false,
    "office": "1404 Longworth House Office Building",
    "address": "1404 Longworth House Office Building Washington DC 20515-0515",
    "phone": "202-225-3531",
    "fax": null,
    "website": "https://kevinmullin.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001225-san_mateo",
        "label": "San Mateo",
        "phone": "650-342-0300",
        "fax": null,
        "address": "1528 S. El Camino Real, Suite 307, San Mateo, CA, 94402"
      }
    ]
  },
  {
    "id": "L000607",
    "name": "Sam T. Liccardo",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-16",
    "class": null,
    "isTerritory": false,
    "office": "1117 Longworth House Office Building",
    "address": "1117 Longworth House Office Building Washington DC 20515-0516",
    "phone": "202-225-8104",
    "fax": null,
    "website": "https://liccardo.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000607-half_moon_bay",
        "label": "Half Moon Bay",
        "phone": null,
        "fax": null,
        "address": "270 Capistrano Rd, Suite 6, Half Moon Bay, CA, 94019"
      }
    ]
  },
  {
    "id": "K000389",
    "name": "Ro Khanna",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-17",
    "class": null,
    "isTerritory": false,
    "office": "306 Cannon House Office Building",
    "address": "306 Cannon House Office Building Washington DC 20515-0517",
    "phone": "202-225-2631",
    "fax": null,
    "website": "https://khanna.house.gov",
    "contactForm": "https://khannaforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000389-santa_clara",
        "label": "Santa Clara",
        "phone": "408-436-2720",
        "fax": "408-436-2721",
        "address": "3150 De La Cruz Blvd, Suite 240, Santa Clara, CA, 95054"
      }
    ]
  },
  {
    "id": "L000397",
    "name": "Zoe Lofgren",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-18",
    "class": null,
    "isTerritory": false,
    "office": "1401 Longworth House Office Building",
    "address": "1401 Longworth House Office Building Washington DC 20515-0518",
    "phone": "202-225-3072",
    "fax": null,
    "website": "https://lofgren.house.gov",
    "contactForm": "https://lofgren.house.gov/contact/default.aspx",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000397-salinas",
        "label": "Salinas",
        "phone": "831-837-6000",
        "fax": null,
        "address": "142 West Alisal Street, Room E116, Salinas, CA, 93901"
      },
      {
        "id": "L000397-san_jose",
        "label": "San Jose",
        "phone": "408-271-8700",
        "fax": null,
        "address": "635 N. First St., Suite B, San Jose, CA, 95112"
      }
    ]
  },
  {
    "id": "P000613",
    "name": "Jimmy Panetta",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-19",
    "class": null,
    "isTerritory": false,
    "office": "200 Cannon House Office Building",
    "address": "200 Cannon House Office Building Washington DC 20515-0519",
    "phone": "202-225-2861",
    "fax": null,
    "website": "https://panetta.house.gov",
    "contactForm": "https://panetta.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000613-monterey",
        "label": "Monterey",
        "phone": "831-424-2229",
        "fax": null,
        "address": "1200 Aguajito Road, Suite 003, Monterey, CA, 93940"
      },
      {
        "id": "P000613-paso_robles",
        "label": "Paso Robles",
        "phone": "805-400-6535",
        "fax": null,
        "address": "800 Pine Street, Paso Robles, CA, 93446"
      },
      {
        "id": "P000613-san_jose",
        "label": "San Jose",
        "phone": "408-960-0333",
        "fax": null,
        "address": "841 Blossom Hill Road, Suite 209, San Jose, CA, 95123"
      },
      {
        "id": "P000613-santa_cruz",
        "label": "Santa Cruz",
        "phone": "831-429-1976",
        "fax": "831-424-7099",
        "address": "701 Ocean St., Room 318C, Santa Cruz, CA, 95060"
      }
    ]
  },
  {
    "id": "F000480",
    "name": "Vince Fong",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CA",
    "stateName": "California",
    "district": "CA-20",
    "class": null,
    "isTerritory": false,
    "office": "243 Cannon House Office Building",
    "address": "243 Cannon House Office Building Washington DC 20515-0520",
    "phone": "202-225-2915",
    "fax": null,
    "website": "https://fong.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000480-bakersfield",
        "label": "Bakersfield",
        "phone": "661-327-3611",
        "fax": null,
        "address": "9700 Stockdale Highway, Suite 300, Bakersfield, CA, 93311"
      },
      {
        "id": "F000480-clovis",
        "label": "Clovis",
        "phone": "559-701-2530",
        "fax": null,
        "address": "2187 Herndon Avenue, Suite 101, Clovis, CA, 93611"
      }
    ]
  },
  {
    "id": "C001059",
    "name": "Jim Costa",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-21",
    "class": null,
    "isTerritory": false,
    "office": "2081 Rayburn House Office Building",
    "address": "2081 Rayburn House Office Building Washington DC 20515-0521",
    "phone": "202-225-3341",
    "fax": null,
    "website": "https://costa.house.gov",
    "contactForm": "https://costa.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001059-fresno",
        "label": "Fresno",
        "phone": "559-495-1620",
        "fax": "559-495-1027",
        "address": "2440 Tulare Street, Suite 420, Fresno, CA, 93721"
      },
      {
        "id": "C001059-visalia",
        "label": "Visalia",
        "phone": "559-749-9330",
        "fax": null,
        "address": "425 E. Oak Ave, Suite 202, Visalia, CA, 93291"
      }
    ]
  },
  {
    "id": "V000129",
    "name": "David G. Valadao",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CA",
    "stateName": "California",
    "district": "CA-22",
    "class": null,
    "isTerritory": false,
    "office": "2465 Rayburn House Office Building",
    "address": "2465 Rayburn House Office Building Washington DC 20515-0522",
    "phone": "202-225-4695",
    "fax": null,
    "website": "https://valadao.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000129-bakersfield",
        "label": "Bakersfield",
        "phone": "661-864-7736",
        "fax": "833-284-9090",
        "address": "2700 M Street, 250B, Bakersfield, CA, 93301"
      },
      {
        "id": "V000129-hanford",
        "label": "Hanford",
        "phone": "559-460-6070",
        "fax": "559-584-3564",
        "address": "107 South Douty Street, Hanford, CA, 93230"
      }
    ]
  },
  {
    "id": "O000019",
    "name": "Jay Obernolte",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CA",
    "stateName": "California",
    "district": "CA-23",
    "class": null,
    "isTerritory": false,
    "office": "2433 Rayburn House Office Building",
    "address": "2433 Rayburn House Office Building Washington DC 20515-0523",
    "phone": "202-225-5861",
    "fax": null,
    "website": "https://obernolte.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "O000019-hesperia",
        "label": "Hesperia",
        "phone": "760-247-1815",
        "fax": null,
        "address": "9700 Seventh Ave., Suite 201, Hesperia, CA, 92345"
      }
    ]
  },
  {
    "id": "C001112",
    "name": "Salud O. Carbajal",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-24",
    "class": null,
    "isTerritory": false,
    "office": "2331 Rayburn House Office Building",
    "address": "2331 Rayburn House Office Building Washington DC 20515-0524",
    "phone": "202-225-3601",
    "fax": null,
    "website": "https://carbajal.house.gov",
    "contactForm": "https://carbajalforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001112-san_luis_obispo",
        "label": "San Luis Obispo",
        "phone": "805-546-8348",
        "fax": "805-439-3574",
        "address": "1411 Marsh St., Suite 205, San Luis Obispo, CA, 93401"
      },
      {
        "id": "C001112-santa_barbara",
        "label": "Santa Barbara",
        "phone": "805-730-1710",
        "fax": null,
        "address": "125 E. De La Guerra St., Suite 203B, Santa Barbara, CA, 93101"
      },
      {
        "id": "C001112-ventura",
        "label": "Ventura",
        "phone": "805-730-1710",
        "fax": null,
        "address": "505 Poli St., Suite 201, Ventura, CA, 93001"
      }
    ]
  },
  {
    "id": "R000599",
    "name": "Raul Ruiz",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-25",
    "class": null,
    "isTerritory": false,
    "office": "2342 Rayburn House Office Building",
    "address": "2342 Rayburn House Office Building Washington DC 20515-0525",
    "phone": "202-225-5330",
    "fax": null,
    "website": "https://ruiz.house.gov",
    "contactForm": "https://ruiz.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000599-el_centro",
        "label": "El Centro",
        "phone": "760-592-2646",
        "fax": null,
        "address": "343 S. 8th Street, Suite A, El Centro, CA, 92243"
      },
      {
        "id": "R000599-hemet",
        "label": "Hemet",
        "phone": "951-492-3575",
        "fax": null,
        "address": "445 E. Florida Ave., 2nd Floor, Hemet, CA, 92543"
      },
      {
        "id": "R000599-palm_desert",
        "label": "Palm Desert",
        "phone": "760-424-8888",
        "fax": null,
        "address": "77933 Las Montanas R, Suite 100, Palm Desert, CA, 92211"
      }
    ]
  },
  {
    "id": "B001285",
    "name": "Julia Brownley",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-26",
    "class": null,
    "isTerritory": false,
    "office": "2262 Rayburn House Office Building",
    "address": "2262 Rayburn House Office Building Washington DC 20515-0526",
    "phone": "202-225-5811",
    "fax": null,
    "website": "https://juliabrownley.house.gov",
    "contactForm": "https://juliabrownley.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001285-oxnard",
        "label": "Oxnard",
        "phone": "805-379-1779",
        "fax": "805-379-1799",
        "address": "201 East Fourth St., Suite 209B, Oxnard, CA, 93030"
      },
      {
        "id": "B001285-thousand_oaks",
        "label": "Thousand Oaks",
        "phone": "805-379-1779",
        "fax": "805-379-1799",
        "address": "223 E. Thousand Oaks Blvd., Suite 220, Thousand Oaks, CA, 91360"
      }
    ]
  },
  {
    "id": "W000830",
    "name": "George Whitesides",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-27",
    "class": null,
    "isTerritory": false,
    "office": "1504 Longworth House Office Building",
    "address": "1504 Longworth House Office Building Washington DC 20515-0527",
    "phone": "202-225-1956",
    "fax": null,
    "website": "https://whitesides.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000830-palmdale",
        "label": "Palmdale",
        "phone": "661-839-0532",
        "fax": null,
        "address": "1043 West Ave M4, Suite A, Palmdale, CA, 93551"
      },
      {
        "id": "W000830-santa_clarita",
        "label": "Santa Clarita",
        "phone": "661-568-4855",
        "fax": null,
        "address": "27200 Tourney Rd, Suite 300, Santa Clarita, CA, 91355"
      }
    ]
  },
  {
    "id": "C001080",
    "name": "Judy Chu",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-28",
    "class": null,
    "isTerritory": false,
    "office": "2423 Rayburn House Office Building",
    "address": "2423 Rayburn House Office Building Washington DC 20515-0528",
    "phone": "202-225-5464",
    "fax": null,
    "website": "https://chu.house.gov",
    "contactForm": "https://chu.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001080-claremont",
        "label": "Claremont",
        "phone": "909-625-5394",
        "fax": "909-399-0198",
        "address": "415 W. Foothill Blvd., Suite 122, Claremont, CA, 91711"
      },
      {
        "id": "C001080-pasadena",
        "label": "Pasadena",
        "phone": "626-304-0110",
        "fax": "626-304-0132",
        "address": "527 S. Lake Ave, Suite 250, Pasadena, CA, 91101"
      }
    ]
  },
  {
    "id": "R000620",
    "name": "Luz M. Rivas",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-29",
    "class": null,
    "isTerritory": false,
    "office": "1319 Longworth House Office Building",
    "address": "1319 Longworth House Office Building Washington DC 20515-0529",
    "phone": "202-225-6131",
    "fax": null,
    "website": "https://rivas.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000620-arleta",
        "label": "Arleta",
        "phone": "818-253-3535",
        "fax": null,
        "address": "9300 Laurel Canyon Blvd, First Floor, Arleta, CA, 91331"
      }
    ]
  },
  {
    "id": "F000483",
    "name": "Laura Friedman",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-30",
    "class": null,
    "isTerritory": false,
    "office": "1517 Longworth House Office Building",
    "address": "1517 Longworth House Office Building Washington DC 20515-0530",
    "phone": "202-225-4176",
    "fax": null,
    "website": "https://friedman.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000483-burbank",
        "label": "Burbank",
        "phone": "818-524-4384",
        "fax": null,
        "address": "245 E Olive Ave, Suite 200, Burbank, CA, 91502"
      }
    ]
  },
  {
    "id": "C001123",
    "name": "Gilbert Ray Cisneros, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-31",
    "class": null,
    "isTerritory": false,
    "office": "2463 Rayburn House Office Building",
    "address": "2463 Rayburn House Office Building Washington DC 20515-0531",
    "phone": "202-225-5256",
    "fax": null,
    "website": "https://cisneros.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001123-covina",
        "label": "Covina",
        "phone": "626-646-0369",
        "fax": null,
        "address": "100 S. Citrus Ave, Suite 204, Covina, CA, 91723"
      }
    ]
  },
  {
    "id": "S000344",
    "name": "Brad Sherman",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-32",
    "class": null,
    "isTerritory": false,
    "office": "2365 Rayburn House Office Building",
    "address": "2365 Rayburn House Office Building Washington DC 20515-0532",
    "phone": "202-225-5911",
    "fax": null,
    "website": "https://sherman.house.gov",
    "contactForm": "http://sherman.house.gov/contact/contact-congressman-sherman-form",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000344-sherman_oaks",
        "label": "Sherman Oaks",
        "phone": "818-501-9200",
        "fax": "818-501-1554",
        "address": "5000 Van Nuys Blvd., Suite 420, Sherman Oaks, CA, 91403"
      }
    ]
  },
  {
    "id": "A000371",
    "name": "Pete Aguilar",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-33",
    "class": null,
    "isTerritory": false,
    "office": "108 Cannon House Office Building",
    "address": "108 Cannon House Office Building Washington DC 20515-0533",
    "phone": "202-225-3201",
    "fax": null,
    "website": "https://aguilar.house.gov",
    "contactForm": "https://aguilar.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000371-san_bernardino",
        "label": "San Bernardino",
        "phone": "909-890-4445",
        "fax": "909-890-9643",
        "address": "685 E. Carnegie Dr., Suite 100, San Bernardino, CA, 92408"
      }
    ]
  },
  {
    "id": "G000585",
    "name": "Jimmy Gomez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-34",
    "class": null,
    "isTerritory": false,
    "office": "506 Cannon House Office Building",
    "address": "506 Cannon House Office Building Washington DC 20515-0534",
    "phone": "202-225-6235",
    "fax": null,
    "website": "https://gomez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000585-los_angeles",
        "label": "Los Angeles",
        "phone": "213-481-1425",
        "fax": null,
        "address": "350 S. Bixel St., #120, Los Angeles, CA, 90017"
      }
    ]
  },
  {
    "id": "T000474",
    "name": "Norma J. Torres",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-35",
    "class": null,
    "isTerritory": false,
    "office": "2227 Rayburn House Office Building",
    "address": "2227 Rayburn House Office Building Washington DC 20515-0535",
    "phone": "202-225-6161",
    "fax": null,
    "website": "https://torres.house.gov",
    "contactForm": "https://Torresforms.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000474-ontario",
        "label": "Ontario",
        "phone": "909-481-6474",
        "fax": "909-941-1362",
        "address": "3200 Inland Empire Blvd., Suite 200B, Ontario, CA, 91764"
      }
    ]
  },
  {
    "id": "L000582",
    "name": "Ted Lieu",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-36",
    "class": null,
    "isTerritory": false,
    "office": "2454 Rayburn House Office Building",
    "address": "2454 Rayburn House Office Building Washington DC 20515-0536",
    "phone": "202-225-3976",
    "fax": null,
    "website": "https://lieu.house.gov",
    "contactForm": "https://lieu.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000582-los_angeles",
        "label": "Los Angeles",
        "phone": "323-651-1040",
        "fax": null,
        "address": "1645 Corinth Ave, Suite 101, Los Angeles, CA, 90025"
      },
      {
        "id": "L000582-manhattan_beach",
        "label": "Manhattan Beach",
        "phone": "310-321-7664",
        "fax": null,
        "address": "1600 Rosecrans Ave., 4th Floor, Manhattan Beach, CA, 90266"
      }
    ]
  },
  {
    "id": "K000400",
    "name": "Sydney Kamlager-Dove",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-37",
    "class": null,
    "isTerritory": false,
    "office": "144 Cannon House Office Building",
    "address": "144 Cannon House Office Building Washington DC 20515-0537",
    "phone": "202-225-7084",
    "fax": null,
    "website": "https://kamlager-dove.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000400-los_angeles",
        "label": "Los Angeles",
        "phone": "323-965-1422",
        "fax": null,
        "address": "4929 Wilshire Blvd., Suite 650, Los Angeles, CA, 90010"
      }
    ]
  },
  {
    "id": "S001156",
    "name": "Linda T. Sánchez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-38",
    "class": null,
    "isTerritory": false,
    "office": "2309 Rayburn House Office Building",
    "address": "2309 Rayburn House Office Building Washington DC 20515-0538",
    "phone": "202-225-6676",
    "fax": null,
    "website": "https://lindasanchez.house.gov",
    "contactForm": "https://lindasanchez.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001156-whittier",
        "label": "Whittier",
        "phone": "562-860-5050",
        "fax": "771-200-5828",
        "address": "15111 Whittier Blvd, Suite 220, Whittier, CA, 90603"
      }
    ]
  },
  {
    "id": "T000472",
    "name": "Mark Takano",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-39",
    "class": null,
    "isTerritory": false,
    "office": "2078 Rayburn House Office Building",
    "address": "2078 Rayburn House Office Building Washington DC 20515-0539",
    "phone": "202-225-2305",
    "fax": null,
    "website": "https://takano.house.gov",
    "contactForm": "https://takano.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000472-riverside",
        "label": "Riverside",
        "phone": "951-222-0203",
        "fax": "951-222-0217",
        "address": "3403 10th St., Suite 610, Riverside, CA, 92501"
      }
    ]
  },
  {
    "id": "K000397",
    "name": "Young Kim",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CA",
    "stateName": "California",
    "district": "CA-40",
    "class": null,
    "isTerritory": false,
    "office": "2439 Rayburn House Office Building",
    "address": "2439 Rayburn House Office Building Washington DC 20515-0540",
    "phone": "202-225-4111",
    "fax": null,
    "website": "https://youngkim.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000397-anaheim",
        "label": "Anaheim",
        "phone": "714-984-2440",
        "fax": null,
        "address": "180 N. Riverview Dr., Suite 150, Anaheim, CA, 92808"
      },
      {
        "id": "K000397-mission_viejo",
        "label": "Mission Viejo",
        "phone": "949-268-6706",
        "fax": null,
        "address": "200 Civic Center, Mission Viejo City Hall, Mission Viejo, CA, 92691"
      }
    ]
  },
  {
    "id": "C000059",
    "name": "Ken Calvert",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CA",
    "stateName": "California",
    "district": "CA-41",
    "class": null,
    "isTerritory": false,
    "office": "2205 Rayburn House Office Building",
    "address": "2205 Rayburn House Office Building Washington DC 20515-0541",
    "phone": "202-225-1986",
    "fax": null,
    "website": "https://calvert.house.gov",
    "contactForm": "https://calvert.house.gov/contactform/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C000059-corona",
        "label": "Corona",
        "phone": "951-277-0042",
        "fax": "951-277-0420",
        "address": "400 S. Vicentia Ave., Suite 125, Corona, CA, 92882"
      },
      {
        "id": "C000059-palm_desert",
        "label": "Palm Desert",
        "phone": "760-620-0041",
        "fax": null,
        "address": "73710 Fred Waring Drive, Suite 129, Palm Desert, CA, 92260"
      }
    ]
  },
  {
    "id": "G000598",
    "name": "Robert Garcia",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-42",
    "class": null,
    "isTerritory": false,
    "office": "109 Cannon House Office Building",
    "address": "109 Cannon House Office Building Washington DC 20515-0542",
    "phone": "202-225-7924",
    "fax": null,
    "website": "https://robertgarcia.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000598-long_beach",
        "label": "Long Beach",
        "phone": "562-512-8489",
        "fax": null,
        "address": "415 West Ocean Blvd., Suite 2803, Long Beach, CA, 90802"
      }
    ]
  },
  {
    "id": "W000187",
    "name": "Maxine Waters",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-43",
    "class": null,
    "isTerritory": false,
    "office": "2221 Rayburn House Office Building",
    "address": "2221 Rayburn House Office Building Washington DC 20515-0543",
    "phone": "202-225-2201",
    "fax": null,
    "website": "https://waters.house.gov",
    "contactForm": "https://waters.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000187-hawthorne",
        "label": "Hawthorne",
        "phone": "323-757-8900",
        "fax": "771-200-5716",
        "address": "13605 Hawthorne Blvd., Hawthorne, CA, 90250"
      }
    ]
  },
  {
    "id": "B001300",
    "name": "Nanette Diaz Barragán",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-44",
    "class": null,
    "isTerritory": false,
    "office": "2312 Rayburn House Office Building",
    "address": "2312 Rayburn House Office Building Washington DC 20515-0544",
    "phone": "202-225-8220",
    "fax": null,
    "website": "https://barragan.house.gov",
    "contactForm": "https://google.com",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001300-carson",
        "label": "Carson",
        "phone": "310-831-1799",
        "fax": null,
        "address": "701 E. Carson St., Carson City Hall, Carson, CA, 90745"
      },
      {
        "id": "B001300-long_beach",
        "label": "Long Beach",
        "phone": "310-831-1799",
        "fax": null,
        "address": "4201 Long Beach Blvd, Suite 422, Long Beach, CA, 90807"
      },
      {
        "id": "B001300-san_pedro",
        "label": "San Pedro",
        "phone": "310-831-1799",
        "fax": null,
        "address": "638 S. Beacon St, San Pedro, CA, 90731"
      },
      {
        "id": "B001300-south_gate",
        "label": "South Gate",
        "phone": "310-831-1799",
        "fax": null,
        "address": "8650 California Ave., South Gate City Hall, South Gate, CA, 90280"
      }
    ]
  },
  {
    "id": "T000491",
    "name": "Derek Tran",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-45",
    "class": null,
    "isTerritory": false,
    "office": "1127 Longworth House Office Building",
    "address": "1127 Longworth House Office Building Washington DC 20515-0545",
    "phone": "202-225-2415",
    "fax": null,
    "website": "https://tran.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000491-cypress",
        "label": "Cypress",
        "phone": "714-960-6483",
        "fax": null,
        "address": "6803 International Ave., 100, Cypress, CA, 90630"
      }
    ]
  },
  {
    "id": "C001110",
    "name": "J. Luis Correa",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-46",
    "class": null,
    "isTerritory": false,
    "office": "2082 Rayburn House Office Building",
    "address": "2082 Rayburn House Office Building Washington DC 20515-0546",
    "phone": "202-225-2965",
    "fax": null,
    "website": "https://correa.house.gov",
    "contactForm": "https://correa.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001110-santa_ana",
        "label": "Santa Ana",
        "phone": "714-559-6190",
        "fax": null,
        "address": "2323 N. Broadway, Suite 319, Rancho Santiago Community College Building, Santa Ana, CA, 92706"
      }
    ]
  },
  {
    "id": "M001241",
    "name": "Dave Min",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-47",
    "class": null,
    "isTerritory": false,
    "office": "1034 Longworth House Office Building",
    "address": "1034 Longworth House Office Building Washington DC 20515-0547",
    "phone": "202-225-5611",
    "fax": null,
    "website": "https://min.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001241-costa_mesa",
        "label": "Costa Mesa",
        "phone": "949-668-6600",
        "fax": null,
        "address": "1370 Adams Ave, Suite A, Costa Mesa, CA, 92626"
      }
    ]
  },
  {
    "id": "I000056",
    "name": "Darrell Issa",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CA",
    "stateName": "California",
    "district": "CA-48",
    "class": null,
    "isTerritory": false,
    "office": "2108 Rayburn House Office Building",
    "address": "2108 Rayburn House Office Building Washington DC 20515-0548",
    "phone": "202-225-5672",
    "fax": null,
    "website": "https://issa.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "I000056-escondido",
        "label": "Escondido",
        "phone": "760-304-7575",
        "fax": null,
        "address": "221 W. Crest St, #110, Escondido, CA, 92025"
      },
      {
        "id": "I000056-santee",
        "label": "Santee",
        "phone": "760-304-7575",
        "fax": null,
        "address": "10601 Magnolia Ave, Bldg 6, Santee, CA, 92071"
      },
      {
        "id": "I000056-temecula",
        "label": "Temecula",
        "phone": "760-304-7575",
        "fax": null,
        "address": "41000 Main St., Temecula, CA, 92590"
      }
    ]
  },
  {
    "id": "L000593",
    "name": "Mike Levin",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-49",
    "class": null,
    "isTerritory": false,
    "office": "2352 Rayburn House Office Building",
    "address": "2352 Rayburn House Office Building Washington DC 20515-0549",
    "phone": "202-225-3906",
    "fax": null,
    "website": "https://levin.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000593-dana_point",
        "label": "Dana Point",
        "phone": "949-281-2449",
        "fax": null,
        "address": "33282 Golden Lantern, Suite 102, Dana Point, CA, 92629"
      },
      {
        "id": "L000593-oceanside",
        "label": "Oceanside",
        "phone": "760-599-5000",
        "fax": null,
        "address": "2204 El Camino Real, Suite 314, Oceanside, CA, 92054"
      }
    ]
  },
  {
    "id": "P000608",
    "name": "Scott H. Peters",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-50",
    "class": null,
    "isTerritory": false,
    "office": "2369 Rayburn House Office Building",
    "address": "2369 Rayburn House Office Building Washington DC 20515-0550",
    "phone": "202-225-0508",
    "fax": null,
    "website": "https://scottpeters.house.gov",
    "contactForm": "https://scottpeters.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000608-san_diego",
        "label": "San Diego",
        "phone": "858-455-5550",
        "fax": null,
        "address": "4350 Executive Dr., Suite 105, San Diego, CA, 92121"
      },
      {
        "id": "P000608-san_marcos",
        "label": "San Marcos",
        "phone": null,
        "fax": null,
        "address": "1 Civic Center Drive, San Marcos, CA, 92069"
      }
    ]
  },
  {
    "id": "J000305",
    "name": "Sara Jacobs",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-51",
    "class": null,
    "isTerritory": false,
    "office": "2348 Rayburn House Office Building",
    "address": "2348 Rayburn House Office Building Washington DC 20515-0551",
    "phone": "202-225-2040",
    "fax": null,
    "website": "https://sarajacobs.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000305-san_diego",
        "label": "San Diego",
        "phone": "619-280-5353",
        "fax": "619-280-5311",
        "address": "3465 Camino del Rio S, 350, San Diego, CA"
      }
    ]
  },
  {
    "id": "V000130",
    "name": "Juan Vargas",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": "CA-52",
    "class": null,
    "isTerritory": false,
    "office": "2467 Rayburn House Office Building",
    "address": "2467 Rayburn House Office Building Washington DC 20515-0552",
    "phone": "202-225-8045",
    "fax": null,
    "website": "https://vargas.house.gov",
    "contactForm": "https://vargas.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000130-chula_vista",
        "label": "Chula Vista",
        "phone": "619-422-5963",
        "fax": "619-422-7290",
        "address": "333 F St., Suite A, Chula Vista, CA, 91910"
      }
    ]
  },
  {
    "id": "D000197",
    "name": "Diana DeGette",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CO",
    "stateName": "Colorado",
    "district": "CO-01",
    "class": null,
    "isTerritory": false,
    "office": "2111 Rayburn House Office Building",
    "address": "2111 Rayburn House Office Building Washington DC 20515-0601",
    "phone": "202-225-4431",
    "fax": null,
    "website": "https://degette.house.gov",
    "contactForm": "https://degette.house.gov/contact/send-me-an-email/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000197-denver",
        "label": "Denver",
        "phone": "303-844-4988",
        "fax": "303-844-4996",
        "address": "600 Grant Street, Suite 850, Denver, CO, 80203"
      }
    ]
  },
  {
    "id": "N000191",
    "name": "Joe Neguse",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CO",
    "stateName": "Colorado",
    "district": "CO-02",
    "class": null,
    "isTerritory": false,
    "office": "2400 Rayburn House Office Building",
    "address": "2400 Rayburn House Office Building Washington DC 20515-0602",
    "phone": "202-225-2161",
    "fax": null,
    "website": "https://neguse.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000191-boulder",
        "label": "Boulder",
        "phone": "303-335-1045",
        "fax": null,
        "address": "2503 Walnut St, Suite 300, Boulder, CO, 80302-5748"
      },
      {
        "id": "N000191-fort_collins",
        "label": "Fort Collins",
        "phone": "970-372-3971",
        "fax": null,
        "address": "1220 S College Ave, Unit 100A, Fort Collins, CO, 80524-3785"
      },
      {
        "id": "N000191-frisco",
        "label": "Frisco",
        "phone": "303-335-1045",
        "fax": null,
        "address": "620 E Main Street, Frisco, CO, 80443"
      }
    ]
  },
  {
    "id": "H001100",
    "name": "Jeff Hurd",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CO",
    "stateName": "Colorado",
    "district": "CO-03",
    "class": null,
    "isTerritory": false,
    "office": "1641 Longworth House Office Building",
    "address": "1641 Longworth House Office Building Washington DC 20515-0603",
    "phone": "202-225-4676",
    "fax": null,
    "website": "https://hurd.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001100-durango",
        "label": "Durango",
        "phone": "970-317-6167",
        "fax": null,
        "address": "835 E 2nd Ave, Suite 204, Durango, CO, 81301"
      },
      {
        "id": "H001100-grand_junction",
        "label": "Grand Junction",
        "phone": "970-208-0455",
        "fax": null,
        "address": "743 Horizon Ct, Suite 112, Grand Junction, CO, 81506"
      },
      {
        "id": "H001100-pueblo",
        "label": "Pueblo",
        "phone": "719-696-6968",
        "fax": null,
        "address": "503 N Main St, Suite 426, Pueblo, CO, 81003"
      }
    ]
  },
  {
    "id": "B000825",
    "name": "Lauren Boebert",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CO",
    "stateName": "Colorado",
    "district": "CO-04",
    "class": null,
    "isTerritory": false,
    "office": "1713 Longworth House Office Building",
    "address": "1713 Longworth House Office Building Washington DC 20515-0604",
    "phone": "202-225-4761",
    "fax": null,
    "website": "https://boebert.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B000825-castle_rock",
        "label": "Castle Rock",
        "phone": "720-639-9165",
        "fax": null,
        "address": "900 Castleton Rd., Suite 112, Castle Rock, CO, 80109"
      },
      {
        "id": "B000825-eaton",
        "label": "Eaton",
        "phone": "970-702-2136",
        "fax": null,
        "address": "271 South Elm Ave., Suite 1A, Eaton, CO, 80615"
      }
    ]
  },
  {
    "id": "C001137",
    "name": "Jeff Crank",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CO",
    "stateName": "Colorado",
    "district": "CO-05",
    "class": null,
    "isTerritory": false,
    "office": "1029 Longworth House Office Building",
    "address": "1029 Longworth House Office Building Washington DC 20515-0605",
    "phone": "202-225-4422",
    "fax": null,
    "website": "https://crank.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001137-colorado_springs",
        "label": "Colorado Springs",
        "phone": "719-520-0055",
        "fax": null,
        "address": "455 E. Pikes Peak Ave, Suite 103, Colorado Springs, CO, 80903"
      }
    ]
  },
  {
    "id": "C001121",
    "name": "Jason Crow",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CO",
    "stateName": "Colorado",
    "district": "CO-06",
    "class": null,
    "isTerritory": false,
    "office": "1323 Longworth House Office Building",
    "address": "1323 Longworth House Office Building Washington DC 20515-0606",
    "phone": "202-225-7882",
    "fax": null,
    "website": "https://crow.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001121-aurora",
        "label": "Aurora",
        "phone": "720-748-7514",
        "fax": null,
        "address": "2170 S Parker Road, #280, Aurora, CO, 80231"
      }
    ]
  },
  {
    "id": "P000620",
    "name": "Brittany Pettersen",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CO",
    "stateName": "Colorado",
    "district": "CO-07",
    "class": null,
    "isTerritory": false,
    "office": "348 Cannon House Office Building",
    "address": "348 Cannon House Office Building Washington DC 20515-0607",
    "phone": "202-225-2645",
    "fax": null,
    "website": "https://pettersen.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000620-cañon_city",
        "label": "Cañon City",
        "phone": "719-458-6161",
        "fax": null,
        "address": "611 Greenwood Ave., Suite C, Cañon City, CO, 81212"
      },
      {
        "id": "P000620-lakewood",
        "label": "Lakewood",
        "phone": "303-274-7944",
        "fax": null,
        "address": "550 S. Wadsworth Blvd., Suite 400, Lakewood, CO, 80226"
      }
    ]
  },
  {
    "id": "E000300",
    "name": "Gabe Evans",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "CO",
    "stateName": "Colorado",
    "district": "CO-08",
    "class": null,
    "isTerritory": false,
    "office": "1229 Longworth House Office Building",
    "address": "1229 Longworth House Office Building Washington DC 20515-0001",
    "phone": "202-225-5625",
    "fax": null,
    "website": "https://gabeevans.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000300-greeley",
        "label": "Greeley",
        "phone": "970-324-2567",
        "fax": null,
        "address": "3400 West 16th St, Suite C, Building 1S, Greeley, CO, 80634"
      },
      {
        "id": "E000300-northglenn",
        "label": "Northglenn",
        "phone": "303-723-6560",
        "fax": null,
        "address": "10701 Melody Dr, Suite 500, Northglenn, CO, 80234"
      }
    ]
  },
  {
    "id": "L000557",
    "name": "John B. Larson",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CT",
    "stateName": "Connecticut",
    "district": "CT-01",
    "class": null,
    "isTerritory": false,
    "office": "1501 Longworth House Office Building",
    "address": "1501 Longworth House Office Building Washington DC 20515-0701",
    "phone": "202-225-2265",
    "fax": null,
    "website": "https://larson.house.gov",
    "contactForm": "https://larson.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000557-east_hartford",
        "label": "East Hartford",
        "phone": "860-278-8888",
        "fax": "860-278-2111",
        "address": "361 Main Street, 3rd Floor, East Hartford, CT, 06118"
      }
    ]
  },
  {
    "id": "C001069",
    "name": "Joe Courtney",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CT",
    "stateName": "Connecticut",
    "district": "CT-02",
    "class": null,
    "isTerritory": false,
    "office": "2449 Rayburn House Office Building",
    "address": "2449 Rayburn House Office Building Washington DC 20515-0702",
    "phone": "202-225-2076",
    "fax": null,
    "website": "https://courtney.house.gov",
    "contactForm": "https://courtney.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001069-enfield",
        "label": "Enfield",
        "phone": "860-741-6011",
        "fax": "860-741-6036",
        "address": "77 Hazard Ave., Unit J, Enfield, CT, 06082"
      },
      {
        "id": "C001069-norwich",
        "label": "Norwich",
        "phone": "860-886-0139",
        "fax": "860-886-2974",
        "address": "55 Main St., Suite 250, Norwich, CT, 06360"
      }
    ]
  },
  {
    "id": "D000216",
    "name": "Rosa L. DeLauro",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CT",
    "stateName": "Connecticut",
    "district": "CT-03",
    "class": null,
    "isTerritory": false,
    "office": "2413 Rayburn House Office Building",
    "address": "2413 Rayburn House Office Building Washington DC 20515-0703",
    "phone": "202-225-3661",
    "fax": null,
    "website": "https://delauro.house.gov",
    "contactForm": "https://delauro.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000216-new_haven",
        "label": "New Haven",
        "phone": "203-562-3718",
        "fax": "203-772-2260",
        "address": "59 Elm St., New Haven, CT, 06510"
      }
    ]
  },
  {
    "id": "H001047",
    "name": "James A. Himes",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CT",
    "stateName": "Connecticut",
    "district": "CT-04",
    "class": null,
    "isTerritory": false,
    "office": "2137 Rayburn House Office Building",
    "address": "2137 Rayburn House Office Building Washington DC 20515-0704",
    "phone": "202-225-5541",
    "fax": null,
    "website": "https://himes.house.gov",
    "contactForm": "https://himes.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001047-bridgeport",
        "label": "Bridgeport",
        "phone": "203-333-6600",
        "fax": "203-333-6655",
        "address": "350 Fairfield Ave., Suite 603, Suite 603, Bridgeport, CT, 06604"
      },
      {
        "id": "H001047-stamford",
        "label": "Stamford",
        "phone": "203-353-9400",
        "fax": "203-323-1793",
        "address": "888 Washington Blvd., 10th Floor, Stamford, CT, 06901"
      }
    ]
  },
  {
    "id": "H001081",
    "name": "Jahana Hayes",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "CT",
    "stateName": "Connecticut",
    "district": "CT-05",
    "class": null,
    "isTerritory": false,
    "office": "2049 Rayburn House Office Building",
    "address": "2049 Rayburn House Office Building Washington DC 20515-0705",
    "phone": "202-225-4476",
    "fax": null,
    "website": "https://hayes.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001081-waterbury",
        "label": "Waterbury",
        "phone": "860-223-8412",
        "fax": null,
        "address": "108 Bank St, 2nd Floor, Waterbury, CT, 06702-2233"
      }
    ]
  },
  {
    "id": "M001238",
    "name": "Sarah McBride",
    "chamber": "House",
    "role": "Delegate",
    "party": "D",
    "partyName": "Democrat",
    "state": "DE",
    "stateName": "Delaware",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": false,
    "office": "1306 Longworth House Office Building",
    "address": "1306 Longworth House Office Building Washington DC 20515-0800",
    "phone": "202-225-4165",
    "fax": null,
    "website": "https://mcbride.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001238-wilmington",
        "label": "Wilmington",
        "phone": "302-830-2330",
        "fax": null,
        "address": "1105 North Market St, Suite 400, Wilmington, DE, 19801"
      }
    ]
  },
  {
    "id": "N000147",
    "name": "Eleanor Holmes Norton",
    "chamber": "House",
    "role": "Delegate",
    "party": "D",
    "partyName": "Democrat",
    "state": "DC",
    "stateName": "District of Columbia",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": true,
    "office": "2136 Rayburn House Office Building",
    "address": "2136 Rayburn House Office Building Washington DC 20515-5101",
    "phone": "202-225-8050",
    "fax": null,
    "website": "https://norton.house.gov",
    "contactForm": "https://norton.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000147-washington",
        "label": "Washington",
        "phone": "202-408-9041",
        "fax": "202-408-9048",
        "address": "1300 Pennsylvania Ave NW, M-1000, Washington, DC, 20004"
      }
    ]
  },
  {
    "id": "P000622",
    "name": "Jimmy Patronis",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-01",
    "class": null,
    "isTerritory": false,
    "office": "2021 Rayburn House Office Building",
    "address": "2021 Rayburn House Office Building Washington DC 20515-0901",
    "phone": "202-225-4136",
    "fax": null,
    "website": "https://patronis.house.gov",
    "contactForm": "https://patronis.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000622-crestview",
        "label": "Crestview",
        "phone": "850-603-6690",
        "fax": null,
        "address": "805 E. James Lee Blvd., Crestview, FL, 32539"
      },
      {
        "id": "P000622-pensacola",
        "label": "Pensacola",
        "phone": "850-479-1183",
        "fax": null,
        "address": "1000 College Boulevard, Building 20, Room 2030, Pensacola, FL, 32504"
      }
    ]
  },
  {
    "id": "D000628",
    "name": "Neal P. Dunn",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-02",
    "class": null,
    "isTerritory": false,
    "office": "466 Cannon House Office Building",
    "address": "466 Cannon House Office Building Washington DC 20515-0902",
    "phone": "202-225-5235",
    "fax": null,
    "website": "https://dunn.house.gov",
    "contactForm": "https://google.com",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000628-panama_city",
        "label": "Panama City",
        "phone": "850-785-0812",
        "fax": "850-763-3764",
        "address": "840 W. 11th St., Suite 2250, Panama City, FL, 32401"
      },
      {
        "id": "D000628-tallahassee",
        "label": "Tallahassee",
        "phone": "850-891-8610",
        "fax": "850-891-8620",
        "address": "300 S. Adams St., Tallahassee, FL, 32301"
      }
    ]
  },
  {
    "id": "C001039",
    "name": "Kat Cammack",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-03",
    "class": null,
    "isTerritory": false,
    "office": "2421 Rayburn House Office Building",
    "address": "2421 Rayburn House Office Building Washington DC 20515-0903",
    "phone": "202-225-5744",
    "fax": null,
    "website": "https://cammack.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001039-gainesville",
        "label": "Gainesville",
        "phone": "352-505-0838",
        "fax": "771-200-5542",
        "address": "5550 NW 111th Boulevard, Suite A, Gainesville, FL, 32653"
      }
    ]
  },
  {
    "id": "B001314",
    "name": "Aaron Bean",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-04",
    "class": null,
    "isTerritory": false,
    "office": "2459 Rayburn House Office Building",
    "address": "2459 Rayburn House Office Building Washington DC 20515-0904",
    "phone": "202-225-0123",
    "fax": null,
    "website": "https://bean.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001314-fernandina_beach",
        "label": "Fernandina Beach",
        "phone": "904-557-9550",
        "fax": null,
        "address": "501 Centre Street, Suite 107, Fernandina Beach, FL, 32034"
      },
      {
        "id": "B001314-fleming_island",
        "label": "Fleming Island",
        "phone": "904-830-3933",
        "fax": null,
        "address": "4465-6 US Highway 17, Fleming Island, FL, 32003"
      },
      {
        "id": "B001314-jacksonville",
        "label": "Jacksonville",
        "phone": "904-319-9433",
        "fax": null,
        "address": "117 W Duval St., Suite 230, Jacksonville, FL, 32202"
      }
    ]
  },
  {
    "id": "R000609",
    "name": "John H. Rutherford",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-05",
    "class": null,
    "isTerritory": false,
    "office": "1711 Longworth House Office Building",
    "address": "1711 Longworth House Office Building Washington DC 20515-0905",
    "phone": "202-225-2501",
    "fax": null,
    "website": "https://rutherford.house.gov",
    "contactForm": "https://rutherford.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000609-jacksonville",
        "label": "Jacksonville",
        "phone": "904-831-5205",
        "fax": null,
        "address": "4130 Salisbury Road, Suite 2500, Jacksonville, FL, 32216"
      }
    ]
  },
  {
    "id": "F000484",
    "name": "Randy Fine",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-06",
    "class": null,
    "isTerritory": false,
    "office": "244 Cannon House Office Building",
    "address": "244 Cannon House Office Building Washington DC 20515-0906",
    "phone": "202-225-2706",
    "fax": null,
    "website": "https://fine.house.gov",
    "contactForm": "hhttps://fine.house.gov/address_authentication?form=/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000484-deland",
        "label": "Deland",
        "phone": "386-279-0707",
        "fax": "386-279-0874",
        "address": "120 S. Florida Ave., Deland, FL, 32720-5422"
      },
      {
        "id": "F000484-palm_coast",
        "label": "Palm Coast",
        "phone": "386-302-0442",
        "fax": "386-283-5164",
        "address": "31 Lupi Court, Suite 130, Palm Coast, FL, 32137-4761"
      }
    ]
  },
  {
    "id": "M001216",
    "name": "Cory Mills",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-07",
    "class": null,
    "isTerritory": false,
    "office": "346 Cannon House Office Building",
    "address": "346 Cannon House Office Building Washington DC 20515-0907",
    "phone": "202-225-4035",
    "fax": null,
    "website": "https://mills.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001216-lake_mary",
        "label": "Lake Mary",
        "phone": "407-638-7900",
        "fax": null,
        "address": "1525 International Pkwy, Number 1051, Lake Mary, FL, 32746"
      },
      {
        "id": "M001216-port_orange",
        "label": "Port Orange",
        "phone": "386-238-9711",
        "fax": null,
        "address": "1000 City Center Circle, Port Orange, FL, 32129"
      }
    ]
  },
  {
    "id": "H001099",
    "name": "Mike Haridopolos",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-08",
    "class": null,
    "isTerritory": false,
    "office": "1039 Longworth House Office Building",
    "address": "1039 Longworth House Office Building Washington DC 20515-0908",
    "phone": "202-225-3671",
    "fax": null,
    "website": "https://haridopolos.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001099-melbourne",
        "label": "Melbourne",
        "phone": "321-632-1776",
        "fax": null,
        "address": "2725 Judge Fran Jamieson Way, Building C, Melbourne, FL, 32940"
      }
    ]
  },
  {
    "id": "S001200",
    "name": "Darren Soto",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-09",
    "class": null,
    "isTerritory": false,
    "office": "2353 Rayburn House Office Building",
    "address": "2353 Rayburn House Office Building Washington DC 20515-0909",
    "phone": "202-225-9889",
    "fax": null,
    "website": "https://soto.house.gov",
    "contactForm": "https://soto.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001200-kissimmee",
        "label": "Kissimmee",
        "phone": "407-452-1171",
        "fax": null,
        "address": "804 Bryan St., Kissimmee, FL, 34741"
      },
      {
        "id": "S001200-orlando",
        "label": "Orlando",
        "phone": "407-204-3370",
        "fax": null,
        "address": "5800 South Semoran Blvd, Suite B, Orlando, FL, 32822"
      }
    ]
  },
  {
    "id": "F000476",
    "name": "Maxwell Frost",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-10",
    "class": null,
    "isTerritory": false,
    "office": "1224 Longworth House Office Building",
    "address": "1224 Longworth House Office Building Washington DC 20515-0910",
    "phone": "202-225-2176",
    "fax": null,
    "website": "https://frost.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000476-orlando",
        "label": "Orlando",
        "phone": "321-388-9808",
        "fax": null,
        "address": "617 N. Magnolia Ave., Orlando, FL, 32801"
      }
    ]
  },
  {
    "id": "W000806",
    "name": "Daniel Webster",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-11",
    "class": null,
    "isTerritory": false,
    "office": "2184 Rayburn House Office Building",
    "address": "2184 Rayburn House Office Building Washington DC 20515-0911",
    "phone": "202-225-1002",
    "fax": null,
    "website": "https://webster.house.gov",
    "contactForm": "https://webster.house.gov/contact/contactform.htm",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000806-clermont",
        "label": "Clermont",
        "phone": "352-241-9220",
        "fax": "352-241-9220",
        "address": "1200 Oakley Seaver Drive, Suite 203, Clermont, FL, 34711"
      },
      {
        "id": "W000806-the_villages",
        "label": "The Villages",
        "phone": "352-383-3552",
        "fax": "352-241-9220",
        "address": "8015 E County Rd 466, Suite B, The Villages, FL, 32162"
      }
    ]
  },
  {
    "id": "B001257",
    "name": "Gus M. Bilirakis",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-12",
    "class": null,
    "isTerritory": false,
    "office": "2306 Rayburn House Office Building",
    "address": "2306 Rayburn House Office Building Washington DC 20515-0912",
    "phone": "202-225-5755",
    "fax": null,
    "website": "https://bilirakis.house.gov",
    "contactForm": "http://bilirakis.house.gov/email-congressman-bilirakis",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001257-brooksville",
        "label": "Brooksville",
        "phone": "352-691-1231",
        "fax": null,
        "address": "15 N Main Street, Suite B, Brooksville, FL, 34601"
      },
      {
        "id": "B001257-inverness",
        "label": "Inverness",
        "phone": "352-654-1004",
        "fax": null,
        "address": "212 W Main Street, Suite 208A, Inverness, FL, 34450"
      },
      {
        "id": "B001257-new_port_richey",
        "label": "New Port Richey",
        "phone": "727-232-2921",
        "fax": null,
        "address": "8731 Citizens Drive, Suite 135, New Port Richey, FL, 34654"
      }
    ]
  },
  {
    "id": "L000596",
    "name": "Anna Paulina Luna",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-13",
    "class": null,
    "isTerritory": false,
    "office": "226 Cannon House Office Building",
    "address": "226 Cannon House Office Building Washington DC 20515-0913",
    "phone": "202-225-5961",
    "fax": null,
    "website": "https://luna.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000596-seminole",
        "label": "Seminole",
        "phone": "727-610-3980",
        "fax": null,
        "address": "9200 113th St. N., Suite 305, Seminole, FL, 33772"
      }
    ]
  },
  {
    "id": "C001066",
    "name": "Kathy Castor",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-14",
    "class": null,
    "isTerritory": false,
    "office": "2188 Rayburn House Office Building",
    "address": "2188 Rayburn House Office Building Washington DC 20515-0914",
    "phone": "202-225-3376",
    "fax": null,
    "website": "https://castor.house.gov",
    "contactForm": "https://castor.house.gov/contact/contactform.htm",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001066-st__petersburg",
        "label": "St. Petersburg",
        "phone": "727-369-0201",
        "fax": null,
        "address": "136 Fourth St. N., Suite 201, St. Petersburg, FL, 33701"
      },
      {
        "id": "C001066-tampa",
        "label": "Tampa",
        "phone": "813-871-2817",
        "fax": null,
        "address": "4144 N. Armenia Ave., Suite 300, Tampa, FL, 33607"
      }
    ]
  },
  {
    "id": "L000597",
    "name": "Laurel M. Lee",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-15",
    "class": null,
    "isTerritory": false,
    "office": "2464 Rayburn House Office Building",
    "address": "2464 Rayburn House Office Building Washington DC 20515-0915",
    "phone": "202-225-5626",
    "fax": null,
    "website": "https://laurellee.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000597-tampa",
        "label": "Tampa",
        "phone": "813-393-5077",
        "fax": null,
        "address": "17425 Bridge Hill Court, Suite 203, Tampa, FL, 33647"
      }
    ]
  },
  {
    "id": "B001260",
    "name": "Vern Buchanan",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-16",
    "class": null,
    "isTerritory": false,
    "office": "2409 Rayburn House Office Building",
    "address": "2409 Rayburn House Office Building Washington DC 20515-0916",
    "phone": "202-225-5015",
    "fax": null,
    "website": "https://buchanan.house.gov",
    "contactForm": "https://buchanan.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001260-bradenton",
        "label": "Bradenton",
        "phone": "941-951-6643",
        "fax": "771-200-5798",
        "address": "8433 Enterprise Circle, Suite 210, Bradenton, FL, 34202"
      },
      {
        "id": "B001260-brandon",
        "label": "Brandon",
        "phone": "813-657-1013",
        "fax": "771-200-5798",
        "address": "510 Vonderburg Drive, Suite 303, Brandon, FL, 33511"
      },
      {
        "id": "B001260-longboat_key",
        "label": "Longboat Key",
        "phone": "941-951-6643",
        "fax": null,
        "address": "5370 Gulf of Mexico Drive, Suite 210, Longboat Key, FL, 34228"
      }
    ]
  },
  {
    "id": "S001214",
    "name": "W. Gregory Steube",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-17",
    "class": null,
    "isTerritory": false,
    "office": "2457 Rayburn House Office Building",
    "address": "2457 Rayburn House Office Building Washington DC 20515-0917",
    "phone": "202-225-5792",
    "fax": null,
    "website": "https://steube.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001214-punta_gorda",
        "label": "Punta Gorda",
        "phone": "941-575-9101",
        "fax": "941-575-9103",
        "address": "226 Taylor St, Suite 230, Punta Gorda, FL, 33950-4457"
      },
      {
        "id": "S001214-sarasota",
        "label": "Sarasota",
        "phone": "941-499-3214",
        "fax": null,
        "address": "7590 Fruitville Rd, Suite 102, Sarasota, FL, 34240"
      },
      {
        "id": "S001214-venice",
        "label": "Venice",
        "phone": "941-499-3214",
        "fax": null,
        "address": "401 West Venice Ave, Suite 157, Venice, FL, 34285"
      }
    ]
  },
  {
    "id": "F000472",
    "name": "Scott Franklin",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-18",
    "class": null,
    "isTerritory": false,
    "office": "2301 Rayburn House Office Building",
    "address": "2301 Rayburn House Office Building Washington DC 20515-0918",
    "phone": "202-225-1252",
    "fax": null,
    "website": "https://franklin.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000472-lake_placid",
        "label": "Lake Placid",
        "phone": "863-644-8215",
        "fax": null,
        "address": "1069 US 27 North, Suite 116, Lake Placid, FL, 33852"
      },
      {
        "id": "F000472-lake_wales",
        "label": "Lake Wales",
        "phone": "863-644-8215",
        "fax": null,
        "address": "201 West Central Avenue, Lake Wales, FL, 33853"
      },
      {
        "id": "F000472-lakeland",
        "label": "Lakeland",
        "phone": "863-644-8215",
        "fax": "863-337-4104",
        "address": "124 S. Florida Avenue, Suite 304, Lakeland, FL, 33801"
      }
    ]
  },
  {
    "id": "D000032",
    "name": "Byron Donalds",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-19",
    "class": null,
    "isTerritory": false,
    "office": "1710 Longworth House Office Building",
    "address": "1710 Longworth House Office Building Washington DC 20515-0919",
    "phone": "202-225-2536",
    "fax": null,
    "website": "https://donalds.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000032-cape_coral",
        "label": "Cape Coral",
        "phone": "239-599-6033",
        "fax": null,
        "address": "1039 SE 9th Ave, Suite 308, Cape Coral, FL, 33990"
      },
      {
        "id": "D000032-naples",
        "label": "Naples",
        "phone": "239-252-6225",
        "fax": null,
        "address": "3299 Tamiami Trail East, Suite 105, Naples, FL, 34112"
      }
    ]
  },
  {
    "id": "M001199",
    "name": "Brian J. Mast",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-21",
    "class": null,
    "isTerritory": false,
    "office": "2182 Rayburn House Office Building",
    "address": "2182 Rayburn House Office Building Washington DC 20515-0921",
    "phone": "202-225-3026",
    "fax": null,
    "website": "https://mast.house.gov",
    "contactForm": "https://mast.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001199-fort_pierce",
        "label": "Fort Pierce",
        "phone": "772-446-8855",
        "fax": null,
        "address": "100 North U.S. HWY 1, Suite 217, Fort Pierce, FL, 34950"
      },
      {
        "id": "M001199-jupiter",
        "label": "Jupiter",
        "phone": "561-530-7778",
        "fax": null,
        "address": "601 Heritage Drive, Suite 144, Jupiter, FL, 33458"
      },
      {
        "id": "M001199-port_st__lucie",
        "label": "Port St. Lucie",
        "phone": "772-336-2877",
        "fax": null,
        "address": "121 SW. Port St. Lucie Blvd., Port St. Lucie, FL, 34984"
      },
      {
        "id": "M001199-stuart",
        "label": "Stuart",
        "phone": "772-403-0900",
        "fax": null,
        "address": "171 SW Flagler Ave., Stuart, FL, 34994"
      }
    ]
  },
  {
    "id": "F000462",
    "name": "Lois Frankel",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-22",
    "class": null,
    "isTerritory": false,
    "office": "2305 Rayburn House Office Building",
    "address": "2305 Rayburn House Office Building Washington DC 20515-0922",
    "phone": "202-225-9890",
    "fax": null,
    "website": "https://frankel.house.gov",
    "contactForm": "http://frankel.house.gov/contact/email-me/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000462-delray_beach",
        "label": "Delray Beach",
        "phone": "561-998-9045",
        "fax": null,
        "address": "7499 West Atlantic Ave, Unit 206, Delray Beach, FL, 33446"
      }
    ]
  },
  {
    "id": "M001217",
    "name": "Jared Moskowitz",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-23",
    "class": null,
    "isTerritory": false,
    "office": "242 Cannon House Office Building",
    "address": "242 Cannon House Office Building Washington DC 20515-0923",
    "phone": "202-225-3001",
    "fax": null,
    "website": "https://moskowitz.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001217-boca_raton",
        "label": "Boca Raton",
        "phone": "754-240-6330",
        "fax": null,
        "address": "777 Glades Rd, Room 278, Boca Raton, FL, 33431"
      },
      {
        "id": "M001217-coral_springs",
        "label": "Coral Springs",
        "phone": "754-240-6330",
        "fax": null,
        "address": "9500 W. Sample Road, Suite 201, Coral Springs, FL, 33065"
      },
      {
        "id": "M001217-fort_lauderdale",
        "label": "Fort Lauderdale",
        "phone": "754-240-6330",
        "fax": null,
        "address": "111 East Las Olas Blvd, 5th Floor, Fort Lauderdale, FL, 33301"
      }
    ]
  },
  {
    "id": "W000808",
    "name": "Frederica S. Wilson",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-24",
    "class": null,
    "isTerritory": false,
    "office": "2080 Rayburn House Office Building",
    "address": "2080 Rayburn House Office Building Washington DC 20515-0924",
    "phone": "202-225-4506",
    "fax": null,
    "website": "https://wilson.house.gov",
    "contactForm": "https://wilson.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000808-miami_beach",
        "label": "Miami Beach",
        "phone": "305-673-7000",
        "fax": null,
        "address": "1700 Convention Center Drive, First Floor Suite, Miami Beach, FL, 33139"
      },
      {
        "id": "W000808-miami_gardens",
        "label": "Miami Gardens",
        "phone": "305-690-5905",
        "fax": null,
        "address": "18425 NW 2nd Avenue, Miami Gardens, FL, 33169"
      },
      {
        "id": "W000808-north_miami",
        "label": "North Miami",
        "phone": "305-690-5905",
        "fax": null,
        "address": "1600 NE 126th Street, Scott Galvin Community Center, North Miami, FL, 33181"
      },
      {
        "id": "W000808-west_park",
        "label": "West Park",
        "phone": "954-989-2688",
        "fax": null,
        "address": "1965 South State Road 7, West Park City Hall, West Park, FL, 33023"
      }
    ]
  },
  {
    "id": "W000797",
    "name": "Debbie Wasserman Schultz",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-25",
    "class": null,
    "isTerritory": false,
    "office": "270 Cannon House Office Building",
    "address": "270 Cannon House Office Building Washington DC 20515-0925",
    "phone": "202-225-7931",
    "fax": null,
    "website": "https://wassermanschultz.house.gov",
    "contactForm": "https://wassermanschultz.house.gov/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000797-hollywood",
        "label": "Hollywood",
        "phone": "954-845-1179",
        "fax": "954-845-0396",
        "address": "2600 Hollywood Blvd., Hollywood, FL, 33020"
      },
      {
        "id": "W000797-sunrise",
        "label": "Sunrise",
        "phone": "954-845-1179",
        "fax": "954-845-0396",
        "address": "777 Sawgrass Corporate Parkway, Sunrise, FL, 33325"
      }
    ]
  },
  {
    "id": "D000600",
    "name": "Mario Diaz-Balart",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-26",
    "class": null,
    "isTerritory": false,
    "office": "374 Cannon House Office Building",
    "address": "374 Cannon House Office Building Washington DC 20515-0926",
    "phone": "202-225-4211",
    "fax": null,
    "website": "https://mariodiazbalart.house.gov",
    "contactForm": "http://mariodiazbalart.house.gov/contact-mario/write-rep-diaz-balart",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000600-doral",
        "label": "Doral",
        "phone": "305-470-8555",
        "fax": "305-470-8575",
        "address": "8669 NW. 36th St., Suite 100, Doral, FL, 33166"
      },
      {
        "id": "D000600-naples",
        "label": "Naples",
        "phone": "239-348-1620",
        "fax": "239-348-3569",
        "address": "4715 Golden Gate Pkwy., Suite 1, Naples, FL, 34116"
      }
    ]
  },
  {
    "id": "S000168",
    "name": "Maria Elvira Salazar",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-27",
    "class": null,
    "isTerritory": false,
    "office": "2162 Rayburn House Office Building",
    "address": "2162 Rayburn House Office Building Washington DC 20515-0927",
    "phone": "202-225-3931",
    "fax": null,
    "website": "https://salazar.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000168-cutler_bay",
        "label": "Cutler Bay",
        "phone": "305-668-2285",
        "fax": null,
        "address": "10720 Caribbean Blvd, Suite 220, Cutler Bay, FL, 33189"
      },
      {
        "id": "S000168-miami",
        "label": "Miami",
        "phone": "305-668-2285",
        "fax": null,
        "address": "5725 SW 8th St, Suite 200, Miami, FL, 33144"
      },
      {
        "id": "S000168-palmetto_bay",
        "label": "Palmetto Bay",
        "phone": "305-668-2285",
        "fax": null,
        "address": "9705 Hibiscus Street, Palmetto Bay, FL, 33157"
      }
    ]
  },
  {
    "id": "G000593",
    "name": "Carlos A. Gimenez",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": "FL-28",
    "class": null,
    "isTerritory": false,
    "office": "448 Cannon House Office Building",
    "address": "448 Cannon House Office Building Washington DC 20515-0001",
    "phone": "202-225-2778",
    "fax": null,
    "website": "https://gimenez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000593-key_west",
        "label": "Key West",
        "phone": "305-292-4485",
        "fax": null,
        "address": "1100 Simonton St., Room 1-213, Key West, FL, 33040"
      },
      {
        "id": "G000593-miami",
        "label": "Miami",
        "phone": "305-222-0160",
        "fax": null,
        "address": "14221 SW 120th St., #115, Miami, FL, 33186"
      }
    ]
  },
  {
    "id": "C001103",
    "name": "Earl L. \"Buddy\" Carter",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-01",
    "class": null,
    "isTerritory": false,
    "office": "2432 Rayburn House Office Building",
    "address": "2432 Rayburn House Office Building Washington DC 20515-1001",
    "phone": "202-225-5831",
    "fax": null,
    "website": "https://buddycarter.house.gov",
    "contactForm": "http://buddycarter.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001103-brunswick",
        "label": "Brunswick",
        "phone": "912-265-9010",
        "fax": "912-265-9013",
        "address": "777 Gloucester Street, Suite 410, Brunswick, GA, 31520"
      },
      {
        "id": "C001103-savannah",
        "label": "Savannah",
        "phone": "912-352-0101",
        "fax": "912-352-0105",
        "address": "6602 Abercorn St., Suite 105B, Savannah, GA, 31405"
      }
    ]
  },
  {
    "id": "B000490",
    "name": "Sanford D. Bishop, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-02",
    "class": null,
    "isTerritory": false,
    "office": "2407 Rayburn House Office Building",
    "address": "2407 Rayburn House Office Building Washington DC 20515-1002",
    "phone": "202-225-3631",
    "fax": null,
    "website": "https://bishop.house.gov",
    "contactForm": "http://bishop.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B000490-albany",
        "label": "Albany",
        "phone": "229-439-8067",
        "fax": "229-436-2099",
        "address": "323 Pine Ave, 400, Albany, GA, 31701-2596"
      },
      {
        "id": "B000490-columbus",
        "label": "Columbus",
        "phone": "706-320-9477",
        "fax": "706-320-9479",
        "address": "18 Ninth St., Suite 201, Columbus, GA, 31901"
      },
      {
        "id": "B000490-macon",
        "label": "Macon",
        "phone": "478-803-2631",
        "fax": "478-803-2637",
        "address": "300 Mulberry Street, Suite 502, Macon, GA, 31201"
      }
    ]
  },
  {
    "id": "J000311",
    "name": "Brian Jack",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-03",
    "class": null,
    "isTerritory": false,
    "office": "1320 Longworth House Office Building",
    "address": "1320 Longworth House Office Building Washington DC 20515-1003",
    "phone": "202-225-5901",
    "fax": null,
    "website": "https://jack.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000311-newnan",
        "label": "Newnan",
        "phone": "770-683-2033",
        "fax": null,
        "address": "1601 E HWY 34, Suite B, Newnan, GA, 30265"
      }
    ]
  },
  {
    "id": "J000288",
    "name": "Henry C. \"Hank\" Johnson, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-04",
    "class": null,
    "isTerritory": false,
    "office": "2240 Rayburn House Office Building",
    "address": "2240 Rayburn House Office Building Washington DC 20515-1004",
    "phone": "202-225-1605",
    "fax": null,
    "website": "https://hankjohnson.house.gov",
    "contactForm": "https://hankjohnson.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000288-decatur",
        "label": "Decatur",
        "phone": "770-987-2291",
        "fax": "770-987-8721",
        "address": "5240 Snapfinger Park Drive, Ste 140, Decatur, GA, 30035"
      }
    ]
  },
  {
    "id": "W000788",
    "name": "Nikema Williams",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-05",
    "class": null,
    "isTerritory": false,
    "office": "1406 Longworth House Office Building",
    "address": "1406 Longworth House Office Building Washington DC 20515-1005",
    "phone": "202-225-3801",
    "fax": null,
    "website": "https://nikemawilliams.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000788-atlanta",
        "label": "Atlanta",
        "phone": "404-659-0116",
        "fax": "404-331-0947",
        "address": "100 Peachtree Street Northwest, Suite 1920, Atlanta, GA, 30303"
      }
    ]
  },
  {
    "id": "M001208",
    "name": "Lucy McBath",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-06",
    "class": null,
    "isTerritory": false,
    "office": "2246 Rayburn House Office Building",
    "address": "2246 Rayburn House Office Building Washington DC 20515-1006",
    "phone": "202-225-4501",
    "fax": null,
    "website": "https://mcbath.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001208-atlanta",
        "label": "Atlanta",
        "phone": "470-773-6330",
        "fax": null,
        "address": "3330 Cumberland Boulevard SE, Suite 610, Atlanta, GA, 30339"
      }
    ]
  },
  {
    "id": "M001218",
    "name": "Richard McCormick",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-07",
    "class": null,
    "isTerritory": false,
    "office": "1719 Longworth House Office Building",
    "address": "1719 Longworth House Office Building Washington DC 20515-1007",
    "phone": "202-225-4272",
    "fax": null,
    "website": "https://mccormick.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001218-cumming",
        "label": "Cumming",
        "phone": "770-232-3005",
        "fax": null,
        "address": "115 W Court House Square, Cumming, GA, 30040"
      }
    ]
  },
  {
    "id": "S001189",
    "name": "Austin Scott",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-08",
    "class": null,
    "isTerritory": false,
    "office": "2185 Rayburn House Office Building",
    "address": "2185 Rayburn House Office Building Washington DC 20515-1008",
    "phone": "202-225-6531",
    "fax": null,
    "website": "https://austinscott.house.gov",
    "contactForm": "https://austinscott.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001189-tifton",
        "label": "Tifton",
        "phone": "229-396-5175",
        "fax": "229-396-5179",
        "address": "127-B N. Central Ave., Tifton, GA, 31794"
      },
      {
        "id": "S001189-warner_robins",
        "label": "Warner Robins",
        "phone": "478-971-1776",
        "fax": "478-971-1778",
        "address": "120 Byrd Way, Suite 100, Warner Robins, GA, 31088"
      }
    ]
  },
  {
    "id": "C001116",
    "name": "Andrew S. Clyde",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-09",
    "class": null,
    "isTerritory": false,
    "office": "445 Cannon House Office Building",
    "address": "445 Cannon House Office Building Washington DC 20515-1009",
    "phone": "202-225-9893",
    "fax": null,
    "website": "https://clyde.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001116-gainesville",
        "label": "Gainesville",
        "phone": "470-768-6520",
        "fax": null,
        "address": "210 Washington St NW, Suite 202, Gainesville, GA, 30501"
      }
    ]
  },
  {
    "id": "C001129",
    "name": "Mike Collins",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-10",
    "class": null,
    "isTerritory": false,
    "office": "2351 Rayburn House Office Building",
    "address": "2351 Rayburn House Office Building Washington DC 20515-1010",
    "phone": "202-225-4101",
    "fax": null,
    "website": "https://collins.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001129-monroe",
        "label": "Monroe",
        "phone": "770-207-1776",
        "fax": null,
        "address": "100 Court St., Monroe, GA, 30655"
      }
    ]
  },
  {
    "id": "L000583",
    "name": "Barry Loudermilk",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-11",
    "class": null,
    "isTerritory": false,
    "office": "2133 Rayburn House Office Building",
    "address": "2133 Rayburn House Office Building Washington DC 20515-1011",
    "phone": "202-225-2931",
    "fax": null,
    "website": "https://loudermilk.house.gov",
    "contactForm": "http://loudermilk.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000583-cartersville",
        "label": "Cartersville",
        "phone": "770-429-1776",
        "fax": null,
        "address": "135 W. Cherokee Ave., Suite 122, Cartersville, GA, 30120"
      },
      {
        "id": "L000583-woodstock",
        "label": "Woodstock",
        "phone": "770-429-1776",
        "fax": "770-517-7427",
        "address": "9898 Highway 92, Suite 100, Woodstock, GA, 30188"
      }
    ]
  },
  {
    "id": "A000372",
    "name": "Rick W. Allen",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-12",
    "class": null,
    "isTerritory": false,
    "office": "462 Cannon House Office Building",
    "address": "462 Cannon House Office Building Washington DC 20515-1012",
    "phone": "202-225-2823",
    "fax": null,
    "website": "https://allen.house.gov",
    "contactForm": "http://allen.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000372-augusta",
        "label": "Augusta",
        "phone": "706-228-1980",
        "fax": "706-228-1954",
        "address": "2743 Perimeter Parkway, Suite 105, Building 200, Augusta, GA, 30909"
      },
      {
        "id": "A000372-dublin",
        "label": "Dublin",
        "phone": "478-291-6324",
        "fax": "706-228-1954",
        "address": "100 S. Church St., Dublin, GA, 31021"
      },
      {
        "id": "A000372-statesboro",
        "label": "Statesboro",
        "phone": "912-243-9452",
        "fax": "912-243-9453",
        "address": "50 E. Main St., Statesboro, GA, 30458"
      },
      {
        "id": "A000372-vidalia",
        "label": "Vidalia",
        "phone": "912-243-9452",
        "fax": null,
        "address": "107 Old Airport Rd., Suite A, Vidalia, GA, 30475"
      }
    ]
  },
  {
    "id": "F000485",
    "name": "Clay Fuller",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "GA",
    "stateName": "Georgia",
    "district": "GA-14",
    "class": null,
    "isTerritory": false,
    "office": "2201 Rayburn House Office Building",
    "address": "2201 Rayburn House Office Building Washington DC 20515-1014",
    "phone": "202-225-5211",
    "fax": null,
    "website": "https://fuller.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000485-dalton",
        "label": "Dalton",
        "phone": "706-226-5320",
        "fax": null,
        "address": "P.O. Box 829, Dalton, GA, 30722"
      }
    ]
  },
  {
    "id": "M001219",
    "name": "James C. Moylan",
    "chamber": "House",
    "role": "Delegate",
    "party": "R",
    "partyName": "Republican",
    "state": "GU",
    "stateName": "Guam",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": true,
    "office": "228 Cannon House Office Building",
    "address": "228 Cannon House Office Building Washington DC 20515-5301",
    "phone": "202-225-1188",
    "fax": null,
    "website": "https://moylan.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001219-hagatna",
        "label": "Hagatna",
        "phone": "671-922-6673",
        "fax": null,
        "address": "330 Hernan Cortez Avenue, Suite 300, Hagatna, GU, 96910"
      }
    ]
  },
  {
    "id": "C001055",
    "name": "Ed Case",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "HI",
    "stateName": "Hawaii",
    "district": "HI-01",
    "class": null,
    "isTerritory": false,
    "office": "2210 Rayburn House Office Building",
    "address": "2210 Rayburn House Office Building Washington DC 20515-1101",
    "phone": "202-225-2726",
    "fax": null,
    "website": "https://case.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001055-honolulu",
        "label": "Honolulu",
        "phone": "808-650-6688",
        "fax": null,
        "address": "1003 Bishop Street, Suite 1110, Honolulu Office, Honolulu, HI, 96813"
      }
    ]
  },
  {
    "id": "T000487",
    "name": "Jill N. Tokuda",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "HI",
    "stateName": "Hawaii",
    "district": "HI-02",
    "class": null,
    "isTerritory": false,
    "office": "1027 Longworth House Office Building",
    "address": "1027 Longworth House Office Building Washington DC 20515-1102",
    "phone": "202-225-4906",
    "fax": null,
    "website": "https://tokuda.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000487-honolulu",
        "label": "Honolulu",
        "phone": "808-746-6220",
        "fax": null,
        "address": "1001 Bishop St., Suite 1503, ASB Tower, Honolulu, HI, 96813"
      }
    ]
  },
  {
    "id": "F000469",
    "name": "Russ Fulcher",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "ID",
    "stateName": "Idaho",
    "district": "ID-01",
    "class": null,
    "isTerritory": false,
    "office": "1514 Longworth House Office Building",
    "address": "1514 Longworth House Office Building Washington DC 20515-1201",
    "phone": "202-225-6611",
    "fax": null,
    "website": "https://fulcher.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000469-coeur_d_alene",
        "label": "Coeur d'Alene",
        "phone": "208-667-0127",
        "fax": "208-667-0310",
        "address": "1250 West Ironwood Drive, Suite 200, Coeur d'Alene, ID, 83814"
      },
      {
        "id": "F000469-lewiston",
        "label": "Lewiston",
        "phone": "208-743-1388",
        "fax": null,
        "address": "313 D St, Suite 107, Lewiston, ID, 83501-1894"
      },
      {
        "id": "F000469-meridian",
        "label": "Meridian",
        "phone": "208-888-3188",
        "fax": "208-888-0894",
        "address": "33 E Broadway Ave, Suite 251, Meridian, ID, 83642-2619"
      }
    ]
  },
  {
    "id": "S001148",
    "name": "Michael K. Simpson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "ID",
    "stateName": "Idaho",
    "district": "ID-02",
    "class": null,
    "isTerritory": false,
    "office": "2084 Rayburn House Office Building",
    "address": "2084 Rayburn House Office Building Washington DC 20515-1202",
    "phone": "202-225-5531",
    "fax": null,
    "website": "https://simpson.house.gov",
    "contactForm": "http://simpson.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001148-boise",
        "label": "Boise",
        "phone": "208-334-1953",
        "fax": "208-334-9533",
        "address": "802 W. Bannock, Suite 600, Boise, ID, 83702"
      },
      {
        "id": "S001148-idaho_falls",
        "label": "Idaho Falls",
        "phone": "208-523-6701",
        "fax": null,
        "address": "1075 S Utah Avenue West, Suite 240, Idaho Falls, ID, 83402"
      },
      {
        "id": "S001148-twin_falls",
        "label": "Twin Falls",
        "phone": "208-734-7219",
        "fax": null,
        "address": "630 Addison Avenue West, Suite 1700, Twin Falls, ID, 83301"
      }
    ]
  },
  {
    "id": "J000309",
    "name": "Jonathan L. Jackson",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-01",
    "class": null,
    "isTerritory": false,
    "office": "1632 Longworth House Office Building",
    "address": "1632 Longworth House Office Building Washington DC 20515-1301",
    "phone": "202-225-4372",
    "fax": null,
    "website": "https://jonathanjackson.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000309-chicago",
        "label": "Chicago",
        "phone": "773-779-2400",
        "fax": "773-779-2401",
        "address": "435 E. 35th Street, Chicago, IL, 60616"
      }
    ]
  },
  {
    "id": "K000385",
    "name": "Robin L. Kelly",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-02",
    "class": null,
    "isTerritory": false,
    "office": "2329 Rayburn House Office Building",
    "address": "2329 Rayburn House Office Building Washington DC 20515-1302",
    "phone": "202-225-0773",
    "fax": null,
    "website": "https://robinkelly.house.gov",
    "contactForm": "https://robinkelly.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000385-chicago",
        "label": "Chicago",
        "phone": "773-321-2001",
        "fax": null,
        "address": "1642 E. 56th Street, Suite 110, Chicago, IL, 60637"
      },
      {
        "id": "K000385-danville",
        "label": "Danville",
        "phone": "217-516-4556",
        "fax": null,
        "address": "425 N. Gilbert Street, Suite 5, Danville, IL, 61832"
      },
      {
        "id": "K000385-matteson",
        "label": "Matteson",
        "phone": "708-679-0078",
        "fax": "708-679-0216",
        "address": "600 Town Center Road, Suite 505, Matteson, IL, 60443"
      }
    ]
  },
  {
    "id": "R000617",
    "name": "Delia C. Ramirez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-03",
    "class": null,
    "isTerritory": false,
    "office": "1523 Longworth House Office Building",
    "address": "1523 Longworth House Office Building Washington DC 20515-1303",
    "phone": "202-225-5701",
    "fax": null,
    "website": "https://ramirez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000617-chicago",
        "label": "Chicago",
        "phone": "773-799-8219",
        "fax": null,
        "address": "5624 W. Diversey Ave, Chicago, IL, 60639"
      },
      {
        "id": "R000617-west_chicago",
        "label": "West Chicago",
        "phone": "630-520-9494",
        "fax": null,
        "address": "946 N Neltnor Blvd, Suite 104, West Chicago, IL, 60185"
      }
    ]
  },
  {
    "id": "G000586",
    "name": "Jesús G. \"Chuy\" García",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-04",
    "class": null,
    "isTerritory": false,
    "office": "2334 Rayburn House Office Building",
    "address": "2334 Rayburn House Office Building Washington DC 20515-1304",
    "phone": "202-225-8203",
    "fax": null,
    "website": "https://chuygarcia.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000586-chicago",
        "label": "Chicago",
        "phone": "773-475-0833",
        "fax": null,
        "address": "4376 S Archer Ave, Chicago, IL, 60632"
      },
      {
        "id": "G000586-melrose_park",
        "label": "Melrose Park",
        "phone": "773-342-0774",
        "fax": null,
        "address": "125 N 19th Ave, Suite A, Melrose Park, IL, 60160"
      }
    ]
  },
  {
    "id": "Q000023",
    "name": "Mike Quigley",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-05",
    "class": null,
    "isTerritory": false,
    "office": "2083 Rayburn House Office Building",
    "address": "2083 Rayburn House Office Building Washington DC 20515-1305",
    "phone": "202-225-4061",
    "fax": null,
    "website": "https://quigley.house.gov",
    "contactForm": "https://quigleyforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "Q000023-chicago",
        "label": "Chicago",
        "phone": "773-267-5926",
        "fax": "202-225-5603",
        "address": "1925 N. Clybourn Ave., Chicago, IL, 60614"
      }
    ]
  },
  {
    "id": "C001117",
    "name": "Sean Casten",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-06",
    "class": null,
    "isTerritory": false,
    "office": "2440 Rayburn House Office Building",
    "address": "2440 Rayburn House Office Building Washington DC 20515-1306",
    "phone": "202-225-4561",
    "fax": null,
    "website": "https://casten.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001117-glen_ellyn",
        "label": "Glen Ellyn",
        "phone": "630-520-9450",
        "fax": null,
        "address": "800 Roosevelt Road, Suite 204, Building C, Glen Ellyn, IL, 60137"
      },
      {
        "id": "C001117-oak_forest",
        "label": "Oak Forest",
        "phone": null,
        "fax": null,
        "address": "15350 Oak Park Ave, 2nd Floor, Building C, Oak Forest, IL, 60452"
      }
    ]
  },
  {
    "id": "D000096",
    "name": "Danny K. Davis",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-07",
    "class": null,
    "isTerritory": false,
    "office": "2159 Rayburn House Office Building",
    "address": "2159 Rayburn House Office Building Washington DC 20515-1307",
    "phone": "202-225-5006",
    "fax": null,
    "website": "https://davis.house.gov",
    "contactForm": "https://davis.house.gov/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000096-chicago",
        "label": "Chicago",
        "phone": "773-533-7520",
        "fax": "844-274-0426",
        "address": "2815 W. Fifth Avenue, Chicago, IL, 60612"
      }
    ]
  },
  {
    "id": "K000391",
    "name": "Raja Krishnamoorthi",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-08",
    "class": null,
    "isTerritory": false,
    "office": "2367 Rayburn House Office Building",
    "address": "2367 Rayburn House Office Building Washington DC 20515-1308",
    "phone": "202-225-3711",
    "fax": null,
    "website": "https://krishnamoorthi.house.gov",
    "contactForm": "https://krishnamoorthiforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000391-schaumburg",
        "label": "Schaumburg",
        "phone": "847-413-1959",
        "fax": null,
        "address": "1701 E. Woodfield Rd., Suite 704, Schaumburg, IL, 60173"
      }
    ]
  },
  {
    "id": "S001145",
    "name": "Janice D. Schakowsky",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-09",
    "class": null,
    "isTerritory": false,
    "office": "2408 Rayburn House Office Building",
    "address": "2408 Rayburn House Office Building Washington DC 20515-1309",
    "phone": "202-225-2111",
    "fax": null,
    "website": "https://schakowsky.house.gov",
    "contactForm": "https://schakowsky.house.gov/write-to-congresswoman-jan-schakowsky",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001145-skokie",
        "label": "Skokie",
        "phone": "773-506-7100",
        "fax": "202-226-6890",
        "address": "4500 Oakton Street, Skokie, IL, 60076"
      }
    ]
  },
  {
    "id": "S001190",
    "name": "Bradley Scott Schneider",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-10",
    "class": null,
    "isTerritory": false,
    "office": "300 Cannon House Office Building",
    "address": "300 Cannon House Office Building Washington DC 20515-1310",
    "phone": "202-225-4835",
    "fax": null,
    "website": "https://schneider.house.gov",
    "contactForm": "https://google.com",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001190-lincolnshire",
        "label": "Lincolnshire",
        "phone": "847-383-4870",
        "fax": "847-793-0677",
        "address": "111 Barclay Blvd., Suite 200, Lincolnshire, IL, 60069"
      }
    ]
  },
  {
    "id": "F000454",
    "name": "Bill Foster",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-11",
    "class": null,
    "isTerritory": false,
    "office": "2366 Rayburn House Office Building",
    "address": "2366 Rayburn House Office Building Washington DC 20515-1311",
    "phone": "202-225-3515",
    "fax": null,
    "website": "https://foster.house.gov",
    "contactForm": "https://foster.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000454-aurora",
        "label": "Aurora",
        "phone": "630-585-7672",
        "fax": null,
        "address": "2000 W. Galena Blvd, Suite 303, Aurora, IL, 60506"
      },
      {
        "id": "F000454-huntley",
        "label": "Huntley",
        "phone": "630-585-7672",
        "fax": null,
        "address": "11187 E Dundee Rd, Suite 101, Huntley, IL, 60142"
      }
    ]
  },
  {
    "id": "B001295",
    "name": "Mike Bost",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-12",
    "class": null,
    "isTerritory": false,
    "office": "352 Cannon House Office Building",
    "address": "352 Cannon House Office Building Washington DC 20515-1312",
    "phone": "202-225-5661",
    "fax": null,
    "website": "https://bost.house.gov",
    "contactForm": "https://bost.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001295-effingham",
        "label": "Effingham",
        "phone": "217-240-3170",
        "fax": "618-448-4233",
        "address": "101 N 4th St, Suite 302, Effingham, IL, 62401"
      },
      {
        "id": "B001295-mascoutah",
        "label": "Mascoutah",
        "phone": "618-622-0766",
        "fax": "618-448-4233",
        "address": "205 East Harnett Street, Mascoutah, IL, 62258"
      },
      {
        "id": "B001295-murphysboro",
        "label": "Murphysboro",
        "phone": "618-457-5787",
        "fax": "618-448-4233",
        "address": "1109 Chestnut Street, Murphysboro, IL, 62966"
      }
    ]
  },
  {
    "id": "B001315",
    "name": "Nikki Budzinski",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-13",
    "class": null,
    "isTerritory": false,
    "office": "1717 Longworth House Office Building",
    "address": "1717 Longworth House Office Building Washington DC 20515-1313",
    "phone": "202-225-2371",
    "fax": null,
    "website": "https://budzinski.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001315-champaign",
        "label": "Champaign",
        "phone": "217-305-6991",
        "fax": null,
        "address": "44 East Main Street, Suite 205, Champaign, IL, 61820"
      },
      {
        "id": "B001315-collinsville",
        "label": "Collinsville",
        "phone": "618-212-7333",
        "fax": null,
        "address": "409 Belt Line Road, Suite 110, Collinsville, IL, 62234"
      },
      {
        "id": "B001315-decatur",
        "label": "Decatur",
        "phone": "217-859-5313",
        "fax": null,
        "address": "101 South Main Street, Suite 100, Decatur, IL, 62523"
      },
      {
        "id": "B001315-springfield",
        "label": "Springfield",
        "phone": "217-814-2880",
        "fax": null,
        "address": "133 South 4th Street, Suite 300, Springfield, IL, 62701"
      }
    ]
  },
  {
    "id": "U000040",
    "name": "Lauren Underwood",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-14",
    "class": null,
    "isTerritory": false,
    "office": "2228 Rayburn House Office Building",
    "address": "2228 Rayburn House Office Building Washington DC 20515-1314",
    "phone": "202-225-2976",
    "fax": null,
    "website": "https://underwood.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "U000040-joliet",
        "label": "Joliet",
        "phone": "630-549-2190",
        "fax": null,
        "address": "116 N. Chicago Street, Suite 201, Joliet District Office, Joliet, IL, 60432"
      }
    ]
  },
  {
    "id": "M001211",
    "name": "Mary E. Miller",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-15",
    "class": null,
    "isTerritory": false,
    "office": "1740 Longworth House Office Building",
    "address": "1740 Longworth House Office Building Washington DC 20515-1315",
    "phone": "202-225-5271",
    "fax": null,
    "website": "https://marymiller.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001211-mahomet",
        "label": "Mahomet",
        "phone": "217-703-6100",
        "fax": null,
        "address": "604 East Main Street, G, Mahomet, IL, 61853"
      },
      {
        "id": "M001211-quincy",
        "label": "Quincy",
        "phone": "217-640-6210",
        "fax": null,
        "address": "3236 Broadway St, Suite 200, Quincy, IL, 62301"
      }
    ]
  },
  {
    "id": "L000585",
    "name": "Darin LaHood",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-16",
    "class": null,
    "isTerritory": false,
    "office": "503 Cannon House Office Building",
    "address": "503 Cannon House Office Building Washington DC 20515-1316",
    "phone": "202-225-6201",
    "fax": null,
    "website": "https://lahood.house.gov",
    "contactForm": "https://lahood.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000585-normal",
        "label": "Normal",
        "phone": "309-445-8080",
        "fax": null,
        "address": "108 East Beaufort Street, Normal, IL, 61761"
      },
      {
        "id": "L000585-peoria",
        "label": "Peoria",
        "phone": "309-671-7027",
        "fax": "309-671-7309",
        "address": "100 NE Monroe St., Room 100, Peoria, IL, 61602"
      },
      {
        "id": "L000585-rockford",
        "label": "Rockford",
        "phone": "779-238-4785",
        "fax": null,
        "address": "527 Colman Center Drive, Rockford, IL, 61108"
      }
    ]
  },
  {
    "id": "S001225",
    "name": "Eric Sorensen",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": "IL-17",
    "class": null,
    "isTerritory": false,
    "office": "1314 Longworth House Office Building",
    "address": "1314 Longworth House Office Building Washington DC 20515-1317",
    "phone": "202-225-5905",
    "fax": null,
    "website": "https://sorensen.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001225-peoria",
        "label": "Peoria",
        "phone": "309-621-7070",
        "fax": null,
        "address": "403-1/2 NE Jefferson Street, Conductor's Quarters Building, Peoria, IL, 61603"
      },
      {
        "id": "S001225-rock_island",
        "label": "Rock Island",
        "phone": "309-786-3406",
        "fax": null,
        "address": "423 17th Street, Suite 201, Rock Island, IL, 61201"
      },
      {
        "id": "S001225-rockford",
        "label": "Rockford",
        "phone": "779-513-4960",
        "fax": null,
        "address": "401 E. State Street, Ground Floor, Rockford, IL, 61104"
      }
    ]
  },
  {
    "id": "M001214",
    "name": "Frank J. Mrvan",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-01",
    "class": null,
    "isTerritory": false,
    "office": "2441 Rayburn House Office Building",
    "address": "2441 Rayburn House Office Building Washington DC 20515-1401",
    "phone": "202-225-2461",
    "fax": null,
    "website": "https://mrvan.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001214-merrillville",
        "label": "Merrillville",
        "phone": "219-795-1844",
        "fax": "219-795-1850",
        "address": "8001 Broadway, Suite 201, Merrillville, IN, 46410"
      }
    ]
  },
  {
    "id": "Y000067",
    "name": "Rudy Yakym III",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-02",
    "class": null,
    "isTerritory": false,
    "office": "349 Cannon House Office Building",
    "address": "349 Cannon House Office Building Washington DC 20515-1402",
    "phone": "202-225-3915",
    "fax": null,
    "website": "https://yakym.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "Y000067-mishawaka",
        "label": "Mishawaka",
        "phone": "574-204-2645",
        "fax": null,
        "address": "2410 Grape Road, Suite 2A, Mishawaka, IN, 46545"
      },
      {
        "id": "Y000067-rochester",
        "label": "Rochester",
        "phone": "574-223-4373",
        "fax": null,
        "address": "709 Main Street, Rochester, IN, 46975"
      }
    ]
  },
  {
    "id": "S001188",
    "name": "Marlin A. Stutzman",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-03",
    "class": null,
    "isTerritory": false,
    "office": "404 Cannon House Office Building",
    "address": "404 Cannon House Office Building Washington DC 20515-1403",
    "phone": "202-225-4436",
    "fax": null,
    "website": "https://stutzman.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001188-fort_wayne",
        "label": "Fort Wayne",
        "phone": "260-702-4750",
        "fax": null,
        "address": "6714 Pointe Inverness Way, Fort Wayne, IN, 46804"
      }
    ]
  },
  {
    "id": "B001307",
    "name": "James R. Baird",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-04",
    "class": null,
    "isTerritory": false,
    "office": "2303 Rayburn House Office Building",
    "address": "2303 Rayburn House Office Building Washington DC 20515-1404",
    "phone": "202-225-5037",
    "fax": null,
    "website": "https://baird.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001307-danville",
        "label": "Danville",
        "phone": "317-563-5567",
        "fax": null,
        "address": "355 S Washington St, Suite 210, Danville, IN, 46122-1779"
      }
    ]
  },
  {
    "id": "S000929",
    "name": "Victoria Spartz",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-05",
    "class": null,
    "isTerritory": false,
    "office": "1609 Longworth House Office Building",
    "address": "1609 Longworth House Office Building Washington DC 20515-1405",
    "phone": "202-225-2276",
    "fax": null,
    "website": "https://spartz.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000929-muncie",
        "label": "Muncie",
        "phone": "765-639-0671",
        "fax": null,
        "address": "420 S High Street, Suite 207, Muncie, IN, 47305"
      },
      {
        "id": "S000929-noblesville",
        "label": "Noblesville",
        "phone": "317-848-0201",
        "fax": null,
        "address": "5540 Pebble Village Lane, Suite 400, Noblesville, IN, 46062"
      }
    ]
  },
  {
    "id": "S001229",
    "name": "Jefferson Shreve",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-06",
    "class": null,
    "isTerritory": false,
    "office": "224 Cannon House Office Building",
    "address": "224 Cannon House Office Building Washington DC 20515-1406",
    "phone": "202-225-3021",
    "fax": null,
    "website": "https://shreve.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001229-greenfield",
        "label": "Greenfield",
        "phone": "317-399-3333",
        "fax": null,
        "address": "18 E Main St, Suite 210, Greenfield, IN, 46140"
      },
      {
        "id": "S001229-greenwood",
        "label": "Greenwood",
        "phone": "317-399-3333",
        "fax": null,
        "address": "300 South Madison Ave, Suite 300, Greenwood, IN, 46142"
      },
      {
        "id": "S001229-richmond",
        "label": "Richmond",
        "phone": "317-399-3333",
        "fax": null,
        "address": "50 N Fifth St, 2nd Floor, Richmond, IN, 47374"
      }
    ]
  },
  {
    "id": "C001072",
    "name": "André Carson",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-07",
    "class": null,
    "isTerritory": false,
    "office": "2135 Rayburn House Office Building",
    "address": "2135 Rayburn House Office Building Washington DC 20515-1407",
    "phone": "202-225-4011",
    "fax": null,
    "website": "https://carson.house.gov",
    "contactForm": "https://carson.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001072-indianapolis",
        "label": "Indianapolis",
        "phone": "317-283-6516",
        "fax": "317-283-6567",
        "address": "300 E. Fall Creek Pkwy N Dr., Suite 300, Indianapolis, IN, 46205"
      }
    ]
  },
  {
    "id": "M001233",
    "name": "Mark B. Messmer",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-08",
    "class": null,
    "isTerritory": false,
    "office": "1208 Longworth House Office Building",
    "address": "1208 Longworth House Office Building Washington DC 20515-1408",
    "phone": "202-225-4636",
    "fax": null,
    "website": "https://messmer.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001233-evansville",
        "label": "Evansville",
        "phone": "812-465-6484",
        "fax": null,
        "address": "20 NW Third St, Suite 1230, Evansville, IN, 47708"
      },
      {
        "id": "M001233-jasper",
        "label": "Jasper",
        "phone": "812-465-6484",
        "fax": null,
        "address": "2133 Newton St, Jasper, IN, 47546"
      }
    ]
  },
  {
    "id": "H001093",
    "name": "Erin Houchin",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": "IN-09",
    "class": null,
    "isTerritory": false,
    "office": "342 Cannon House Office Building",
    "address": "342 Cannon House Office Building Washington DC 20515-1409",
    "phone": "202-225-5315",
    "fax": null,
    "website": "https://houchin.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001093-salem",
        "label": "Salem",
        "phone": "812-288-3999",
        "fax": null,
        "address": "104 W Hackberry St, Salem, IN, 47167"
      }
    ]
  },
  {
    "id": "M001215",
    "name": "Mariannette Miller-Meeks",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IA",
    "stateName": "Iowa",
    "district": "IA-01",
    "class": null,
    "isTerritory": false,
    "office": "504 Cannon House Office Building",
    "address": "504 Cannon House Office Building Washington DC 20515-1501",
    "phone": "202-225-6576",
    "fax": null,
    "website": "https://millermeeks.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001215-davenport",
        "label": "Davenport",
        "phone": "563-232-0930",
        "fax": null,
        "address": "201 W Second Street, Suite 705, Davenport, IA, 52801"
      },
      {
        "id": "M001215-indianola",
        "label": "Indianola",
        "phone": "515-808-6040",
        "fax": null,
        "address": "126 N Howard Street, Indianola, IA, 50125"
      }
    ]
  },
  {
    "id": "H001091",
    "name": "Ashley Hinson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IA",
    "stateName": "Iowa",
    "district": "IA-02",
    "class": null,
    "isTerritory": false,
    "office": "2458 Rayburn House Office Building",
    "address": "2458 Rayburn House Office Building Washington DC 20515-1502",
    "phone": "202-225-2911",
    "fax": null,
    "website": "https://hinson.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001091-cedar_rapids",
        "label": "Cedar Rapids",
        "phone": "319-364-2288",
        "fax": null,
        "address": "111 7th Avenue SE, Suite 580, Cedar Rapids, IA, 52401"
      },
      {
        "id": "H001091-dubuque",
        "label": "Dubuque",
        "phone": "563-557-7789",
        "fax": null,
        "address": "1050 Main St., Dubuque, IA, 52001"
      },
      {
        "id": "H001091-waterloo",
        "label": "Waterloo",
        "phone": "319-266-6925",
        "fax": null,
        "address": "531 Commercial St., Suite 302, Waterloo, IA, 50701"
      }
    ]
  },
  {
    "id": "N000193",
    "name": "Zachary Nunn",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IA",
    "stateName": "Iowa",
    "district": "IA-03",
    "class": null,
    "isTerritory": false,
    "office": "1410 Longworth House Office Building",
    "address": "1410 Longworth House Office Building Washington DC 20515-1503",
    "phone": "202-225-5476",
    "fax": null,
    "website": "https://nunn.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000193-creston",
        "label": "Creston",
        "phone": "641-220-9093",
        "fax": null,
        "address": "208 W Taylor Street, Creston, IA, 50801"
      },
      {
        "id": "N000193-des_moines",
        "label": "Des Moines",
        "phone": "515-400-8180",
        "fax": null,
        "address": "400 Locust Street, Suite 250, Des Moines, IA, 50309"
      },
      {
        "id": "N000193-ottumwa",
        "label": "Ottumwa",
        "phone": "641-220-9641",
        "fax": null,
        "address": "223 East Main Street, Ottumwa, IA, 52501"
      }
    ]
  },
  {
    "id": "F000446",
    "name": "Randy Feenstra",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "IA",
    "stateName": "Iowa",
    "district": "IA-04",
    "class": null,
    "isTerritory": false,
    "office": "2434 Rayburn House Office Building",
    "address": "2434 Rayburn House Office Building Washington DC 20515-1504",
    "phone": "202-225-4426",
    "fax": null,
    "website": "https://feenstra.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000446-council_bluffs",
        "label": "Council Bluffs",
        "phone": "712-256-5653",
        "fax": null,
        "address": "149 West Broadway, Council Bluffs, IA, 51503"
      },
      {
        "id": "F000446-fort_dodge",
        "label": "Fort Dodge",
        "phone": "515-302-7060",
        "fax": null,
        "address": "723 Central Avenue, Fort Dodge, IA, 50501"
      },
      {
        "id": "F000446-sioux_city",
        "label": "Sioux City",
        "phone": "712-224-4692",
        "fax": null,
        "address": "320 6th Street, Room 112, Sioux City, IA, 51101"
      }
    ]
  },
  {
    "id": "M000871",
    "name": "Tracey Mann",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "KS",
    "stateName": "Kansas",
    "district": "KS-01",
    "class": null,
    "isTerritory": false,
    "office": "344 Cannon House Office Building",
    "address": "344 Cannon House Office Building Washington DC 20515-1601",
    "phone": "202-225-2715",
    "fax": null,
    "website": "https://mann.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M000871-dodge_city",
        "label": "Dodge City",
        "phone": "620-682-7340",
        "fax": null,
        "address": "100 Military Avenue, Suite 203, Dodge City, KS, 67801"
      },
      {
        "id": "M000871-manhattan",
        "label": "Manhattan",
        "phone": "785-370-7277",
        "fax": null,
        "address": "317 Houston Street, Suite A, Manhattan, KS, 66502"
      }
    ]
  },
  {
    "id": "S001228",
    "name": "Derek Schmidt",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "KS",
    "stateName": "Kansas",
    "district": "KS-02",
    "class": null,
    "isTerritory": false,
    "office": "1223 Longworth House Office Building",
    "address": "1223 Longworth House Office Building Washington DC 20515-1602",
    "phone": "202-225-6601",
    "fax": null,
    "website": "https://schmidt.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001228-pittsburg",
        "label": "Pittsburg",
        "phone": "620-308-7450",
        "fax": null,
        "address": "402 N Broadway St, Suite B, Pittsburg, KS, 66762"
      },
      {
        "id": "S001228-topeka",
        "label": "Topeka",
        "phone": "785-205-5253",
        "fax": null,
        "address": "3550 SW 5th St, Suite B, Topeka, KS, 66606"
      }
    ]
  },
  {
    "id": "D000629",
    "name": "Sharice Davids",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "KS",
    "stateName": "Kansas",
    "district": "KS-03",
    "class": null,
    "isTerritory": false,
    "office": "2435 Rayburn House Office Building",
    "address": "2435 Rayburn House Office Building Washington DC 20515-1603",
    "phone": "202-225-2865",
    "fax": null,
    "website": "https://davids.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000629-overland_park",
        "label": "Overland Park",
        "phone": "913-621-0832",
        "fax": null,
        "address": "9200 Indian Creek Parkway, Suite 562, Overland Park, KS, 66210"
      }
    ]
  },
  {
    "id": "E000298",
    "name": "Ron Estes",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "KS",
    "stateName": "Kansas",
    "district": "KS-04",
    "class": null,
    "isTerritory": false,
    "office": "2234 Rayburn House Office Building",
    "address": "2234 Rayburn House Office Building Washington DC 20515-1604",
    "phone": "202-225-6216",
    "fax": null,
    "website": "https://estes.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000298-wichita",
        "label": "Wichita",
        "phone": "316-262-8992",
        "fax": null,
        "address": "7701 E. Kellogg, Ste. 510, Wichita, KS, 67207"
      }
    ]
  },
  {
    "id": "C001108",
    "name": "James Comer",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "KY",
    "stateName": "Kentucky",
    "district": "KY-01",
    "class": null,
    "isTerritory": false,
    "office": "2410 Rayburn House Office Building",
    "address": "2410 Rayburn House Office Building Washington DC 20515-1701",
    "phone": "202-225-3115",
    "fax": null,
    "website": "https://comer.house.gov",
    "contactForm": "https://comer.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001108-danville",
        "label": "Danville",
        "phone": "859-439-5844",
        "fax": null,
        "address": "141 N. 3rd Street, Suite 5, Danville, KY, 40422"
      },
      {
        "id": "C001108-madisonville",
        "label": "Madisonville",
        "phone": "270-487-9509",
        "fax": null,
        "address": "67 North Main St., Madisonville, KY, 42431"
      },
      {
        "id": "C001108-paducah",
        "label": "Paducah",
        "phone": "270-408-1865",
        "fax": null,
        "address": "300 S. 3rd St., Paducah, KY, 42003"
      },
      {
        "id": "C001108-tompkinsville",
        "label": "Tompkinsville",
        "phone": "270-487-9509",
        "fax": null,
        "address": "200 N. Main St., Suite F, Tompkinsville, KY, 42167"
      }
    ]
  },
  {
    "id": "G000558",
    "name": "Brett Guthrie",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "KY",
    "stateName": "Kentucky",
    "district": "KY-02",
    "class": null,
    "isTerritory": false,
    "office": "2161 Rayburn House Office Building",
    "address": "2161 Rayburn House Office Building Washington DC 20515-1702",
    "phone": "202-225-3501",
    "fax": null,
    "website": "https://guthrie.house.gov",
    "contactForm": "http://brettguthrieforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000558-bowling_green",
        "label": "Bowling Green",
        "phone": "270-842-9896",
        "fax": "270-842-9081",
        "address": "996 Wilkinson Trce., Suite B2, Bowling Green, KY, 42103"
      },
      {
        "id": "G000558-owensboro",
        "label": "Owensboro",
        "phone": null,
        "fax": null,
        "address": "2200 Airport Rd., Owensboro, KY, 42301"
      },
      {
        "id": "G000558-radcliff",
        "label": "Radcliff",
        "phone": null,
        "fax": null,
        "address": "411 W. Lincoln Trail Blvd., Radcliff, KY, 40160"
      }
    ]
  },
  {
    "id": "M001220",
    "name": "Morgan McGarvey",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "KY",
    "stateName": "Kentucky",
    "district": "KY-03",
    "class": null,
    "isTerritory": false,
    "office": "1527 Longworth House Office Building",
    "address": "1527 Longworth House Office Building Washington DC 20515-1703",
    "phone": "202-225-5401",
    "fax": null,
    "website": "https://mcgarvey.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001220-louisville",
        "label": "Louisville",
        "phone": "502-582-5129",
        "fax": null,
        "address": "600 Dr Martin Luther King Jr Pl, Suite 216, Romano L. Mazzoli Federal Building, Louisville, KY, 40202"
      }
    ]
  },
  {
    "id": "M001184",
    "name": "Thomas Massie",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "KY",
    "stateName": "Kentucky",
    "district": "KY-04",
    "class": null,
    "isTerritory": false,
    "office": "2371 Rayburn House Office Building",
    "address": "2371 Rayburn House Office Building Washington DC 20515-1704",
    "phone": "202-225-3465",
    "fax": null,
    "website": "https://massie.house.gov",
    "contactForm": "http://massieforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001184-crescent_springs",
        "label": "Crescent Springs",
        "phone": "859-426-0080",
        "fax": "859-426-0061",
        "address": "541 Buttermilk Pike, Suite 208, Crescent Springs, KY, 41017"
      },
      {
        "id": "M001184-lagrange",
        "label": "LaGrange",
        "phone": "502-265-9119",
        "fax": null,
        "address": "110 W. Jefferson St., Suite 100, LaGrange, KY, 40031"
      }
    ]
  },
  {
    "id": "R000395",
    "name": "Harold Rogers",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "KY",
    "stateName": "Kentucky",
    "district": "KY-05",
    "class": null,
    "isTerritory": false,
    "office": "2406 Rayburn House Office Building",
    "address": "2406 Rayburn House Office Building Washington DC 20515-1705",
    "phone": "202-225-4601",
    "fax": null,
    "website": "https://halrogers.house.gov",
    "contactForm": "https://halrogers.house.gov/contact/contactform.htm",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000395-ashland",
        "label": "Ashland",
        "phone": "606-467-6211",
        "fax": null,
        "address": "341 16th Street, Ashland, KY, 41101"
      },
      {
        "id": "R000395-hazard",
        "label": "Hazard",
        "phone": "606-439-0794",
        "fax": "606-439-4647",
        "address": "48 S. KY Hwy. 15, Hazard, KY, 41701"
      },
      {
        "id": "R000395-prestonsburg",
        "label": "Prestonsburg",
        "phone": "606-886-0844",
        "fax": "606-889-0371",
        "address": "110 Resource Ct., Suite A, Prestonsburg, KY, 41653"
      },
      {
        "id": "R000395-somerset",
        "label": "Somerset",
        "phone": "800-632-8588",
        "fax": "606-678-4856",
        "address": "551 Clifty St., Somerset, KY, 42503"
      }
    ]
  },
  {
    "id": "B001282",
    "name": "Andy Barr",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "KY",
    "stateName": "Kentucky",
    "district": "KY-06",
    "class": null,
    "isTerritory": false,
    "office": "2430 Rayburn House Office Building",
    "address": "2430 Rayburn House Office Building Washington DC 20515-1706",
    "phone": "202-225-4706",
    "fax": null,
    "website": "https://barr.house.gov",
    "contactForm": "https://barr.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001282-lexington",
        "label": "Lexington",
        "phone": "859-219-1366",
        "fax": null,
        "address": "2709 Old Rosebud Rd., Ste. 100, Lexington, KY, 40509"
      }
    ]
  },
  {
    "id": "S001176",
    "name": "Steve Scalise",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "LA",
    "stateName": "Louisiana",
    "district": "LA-01",
    "class": null,
    "isTerritory": false,
    "office": "266 Cannon House Office Building",
    "address": "266 Cannon House Office Building Washington DC 20515-1801",
    "phone": "202-225-3015",
    "fax": null,
    "website": "https://scalise.house.gov",
    "contactForm": "https://scaliseforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001176-mandeville",
        "label": "Mandeville",
        "phone": "985-893-9064",
        "fax": null,
        "address": "21454 Koop Drive, Suite 2C, Mandeville, LA, 70471"
      },
      {
        "id": "S001176-metairie",
        "label": "Metairie",
        "phone": "504-837-1259",
        "fax": null,
        "address": "111 Veterans Memorial Blvd, Suite 803, Metairie, LA, 70005"
      },
      {
        "id": "S001176-ponchatoula",
        "label": "Ponchatoula",
        "phone": "985-340-2185",
        "fax": null,
        "address": "110 West Hickory Street, City Hall Annex Building, Ponchatoula, LA, 70454"
      },
      {
        "id": "S001176-raceland",
        "label": "Raceland",
        "phone": "985-879-2300",
        "fax": null,
        "address": "4876 LA-1, Suite 117, Raceland, LA, 70394"
      }
    ]
  },
  {
    "id": "C001125",
    "name": "Troy A. Carter",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "LA",
    "stateName": "Louisiana",
    "district": "LA-02",
    "class": null,
    "isTerritory": false,
    "office": "442 Cannon House Office Building",
    "address": "442 Cannon House Office Building Washington DC 20515-1802",
    "phone": "202-225-6636",
    "fax": null,
    "website": "https://troycarter.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001125-baton_rouge",
        "label": "Baton Rouge",
        "phone": null,
        "fax": null,
        "address": "801 Harding Blvd, T.H. Harris Hall, Baton Rouge, LA, 70807"
      },
      {
        "id": "C001125-gonzales",
        "label": "Gonzales",
        "phone": null,
        "fax": null,
        "address": "615 E. Worthy St, Rm 107, Ascension Parish Government Bldg, Gonzales, LA, 70737"
      },
      {
        "id": "C001125-gonzales-1",
        "label": "Gonzales",
        "phone": null,
        "fax": null,
        "address": "925 W. Edenborne Pkwy, Room T117, River Parishes Community College Gonzales Technical Training Center, Gonzales, LA, 70737"
      },
      {
        "id": "C001125-gretna",
        "label": "Gretna",
        "phone": null,
        "fax": null,
        "address": "200 Derbigny St, Suite 3200, Gretna Courthouse, Gretna, LA, 70053"
      },
      {
        "id": "C001125-new_orleans",
        "label": "New Orleans",
        "phone": "504-381-3970",
        "fax": null,
        "address": "3401 General DeGaulle Dr, Suite 100, New Orleans, LA, 70114"
      },
      {
        "id": "C001125-new_orleans-1",
        "label": "New Orleans",
        "phone": "504-288-3777",
        "fax": null,
        "address": "650 Poydras St, Suite 2525, New Orleans, LA, 70130"
      }
    ]
  },
  {
    "id": "H001077",
    "name": "Clay Higgins",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "LA",
    "stateName": "Louisiana",
    "district": "LA-03",
    "class": null,
    "isTerritory": false,
    "office": "572 Cannon House Office Building",
    "address": "572 Cannon House Office Building Washington DC 20515-1803",
    "phone": "202-225-2031",
    "fax": null,
    "website": "https://clayhiggins.house.gov",
    "contactForm": "https://clayhiggins.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001077-lafayette",
        "label": "Lafayette",
        "phone": "337-703-6105",
        "fax": null,
        "address": "600 Jefferson Street, Suite 808, Chase Building, Lafayette, LA, 70501"
      },
      {
        "id": "H001077-lake_charles",
        "label": "Lake Charles",
        "phone": "337-656-2833",
        "fax": null,
        "address": "1625 Ryan Street, Suite C, Lake Charles, LA, 70601"
      }
    ]
  },
  {
    "id": "J000299",
    "name": "Mike Johnson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "LA",
    "stateName": "Louisiana",
    "district": "LA-04",
    "class": null,
    "isTerritory": false,
    "office": "521 Cannon House Office Building",
    "address": "521 Cannon House Office Building Washington DC 20515-1804",
    "phone": "202-225-2777",
    "fax": null,
    "website": "https://mikejohnson.house.gov",
    "contactForm": "https://mikejohnson.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000299-bossier_city",
        "label": "Bossier City",
        "phone": "318-840-0309",
        "fax": null,
        "address": "2250 Hospital Dr., Suite 248, Bossier City, LA, 71111"
      },
      {
        "id": "J000299-deridder",
        "label": "DeRidder",
        "phone": "337-226-6385",
        "fax": null,
        "address": "401 W. First Street, Room 33, DeRidder, LA, 70634"
      },
      {
        "id": "J000299-leesville",
        "label": "Leesville",
        "phone": "337-423-4232",
        "fax": null,
        "address": "3329 University Parkway, Room 24, Building 552, Leesville, LA, 71446"
      }
    ]
  },
  {
    "id": "L000595",
    "name": "Julia Letlow",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "LA",
    "stateName": "Louisiana",
    "district": "LA-05",
    "class": null,
    "isTerritory": false,
    "office": "142 Cannon House Office Building",
    "address": "142 Cannon House Office Building Washington DC 20515-1805",
    "phone": "202-225-8490",
    "fax": null,
    "website": "https://letlow.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000595-amite",
        "label": "Amite",
        "phone": "985-284-5200",
        "fax": null,
        "address": "109 E. Oak Street, Amite, LA, 70422"
      },
      {
        "id": "L000595-monroe",
        "label": "Monroe",
        "phone": "318-570-6440",
        "fax": null,
        "address": "1900 North 18th Street, Suite 501, Monroe, LA, 71201"
      }
    ]
  },
  {
    "id": "F000110",
    "name": "Cleo Fields",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "LA",
    "stateName": "Louisiana",
    "district": "LA-06",
    "class": null,
    "isTerritory": false,
    "office": "2349 Rayburn House Office Building",
    "address": "2349 Rayburn House Office Building Washington DC 20515-1806",
    "phone": "202-225-3901",
    "fax": null,
    "website": "https://fields.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000110-baton_rouge",
        "label": "Baton Rouge",
        "phone": "225-952-1965",
        "fax": null,
        "address": "700 North 10th St, Fourth Floor, Baton Rouge, LA, 70802"
      },
      {
        "id": "F000110-opelousas",
        "label": "Opelousas",
        "phone": null,
        "fax": null,
        "address": "1310 S Union St., Suite 4, Opelousas, LA, 70570"
      },
      {
        "id": "F000110-shreveport",
        "label": "Shreveport",
        "phone": null,
        "fax": null,
        "address": "610 Texas St, 4th Floor, Suites 12-13, Shreveport, LA, 71101"
      }
    ]
  },
  {
    "id": "P000597",
    "name": "Chellie Pingree",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "ME",
    "stateName": "Maine",
    "district": "ME-01",
    "class": null,
    "isTerritory": false,
    "office": "2354 Rayburn House Office Building",
    "address": "2354 Rayburn House Office Building Washington DC 20515-1901",
    "phone": "202-225-6116",
    "fax": null,
    "website": "https://pingree.house.gov",
    "contactForm": "https://pingree.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000597-portland",
        "label": "Portland",
        "phone": "207-774-5019",
        "fax": "207-871-0720",
        "address": "2 Portland Fish Pier, Suite 304, Portland, ME, 04101"
      },
      {
        "id": "P000597-waterville",
        "label": "Waterville",
        "phone": "207-873-5713",
        "fax": "207-873-5717",
        "address": "1 Silver St., Waterville, ME, 04901"
      }
    ]
  },
  {
    "id": "G000592",
    "name": "Jared F. Golden",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "ME",
    "stateName": "Maine",
    "district": "ME-02",
    "class": null,
    "isTerritory": false,
    "office": "1107 Longworth House Office Building",
    "address": "1107 Longworth House Office Building Washington DC 20515-1902",
    "phone": "202-225-6306",
    "fax": null,
    "website": "https://golden.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000592-bangor",
        "label": "Bangor",
        "phone": "207-249-7400",
        "fax": null,
        "address": "6 State St, Suite 101, Bangor, ME, 04401-5112"
      },
      {
        "id": "G000592-caribou",
        "label": "Caribou",
        "phone": "207-492-6009",
        "fax": null,
        "address": "7 Hatch Dr, Suite 230, Caribou, ME, 04736-2159"
      },
      {
        "id": "G000592-lewiston",
        "label": "Lewiston",
        "phone": "207-241-6767",
        "fax": null,
        "address": "179 Lisbon St, Lewiston, ME, 04240-7248"
      }
    ]
  },
  {
    "id": "H001052",
    "name": "Andy Harris",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MD",
    "stateName": "Maryland",
    "district": "MD-01",
    "class": null,
    "isTerritory": false,
    "office": "1536 Longworth House Office Building",
    "address": "1536 Longworth House Office Building Washington DC 20515-2001",
    "phone": "202-225-5311",
    "fax": null,
    "website": "https://harris.house.gov",
    "contactForm": "https://harris.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001052-bel_air",
        "label": "Bel Air",
        "phone": "410-588-5670",
        "fax": "410-588-5673",
        "address": "15 E. Churchville Rd., Suite 102B, Bel Air, MD, 21014"
      },
      {
        "id": "H001052-cambridge",
        "label": "Cambridge",
        "phone": null,
        "fax": null,
        "address": "306 High Street, Cambridge, MD, 21613"
      },
      {
        "id": "H001052-salisbury",
        "label": "Salisbury",
        "phone": "443-944-8624",
        "fax": "443-944-8625",
        "address": "100 E. Main St., Suite 702, Salisbury, MD, 21801"
      }
    ]
  },
  {
    "id": "O000176",
    "name": "Johnny Olszewski, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": "MD-02",
    "class": null,
    "isTerritory": false,
    "office": "1339 Longworth House Office Building",
    "address": "1339 Longworth House Office Building Washington DC 20515-2002",
    "phone": "202-225-3061",
    "fax": null,
    "website": "https://olszewski.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "O000176-towson",
        "label": "Towson",
        "phone": "410-427-5725",
        "fax": null,
        "address": "110 West Rd, Suite 420, Towson, MD, 21204"
      }
    ]
  },
  {
    "id": "E000301",
    "name": "Sarah Elfreth",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": "MD-03",
    "class": null,
    "isTerritory": false,
    "office": "1213 Longworth House Office Building",
    "address": "1213 Longworth House Office Building Washington DC 20515-2003",
    "phone": "202-225-4016",
    "fax": null,
    "website": "https://elfreth.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000301-columbia",
        "label": "Columbia",
        "phone": "410-832-8890",
        "fax": null,
        "address": "10440 Little Patuxent Pkwy, Suite 550, Columbia, MD, 21044"
      }
    ]
  },
  {
    "id": "I000058",
    "name": "Glenn Ivey",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": "MD-04",
    "class": null,
    "isTerritory": false,
    "office": "1610 Longworth House Office Building",
    "address": "1610 Longworth House Office Building Washington DC 20515-2004",
    "phone": "202-225-8699",
    "fax": null,
    "website": "https://ivey.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "I000058-landover",
        "label": "Landover",
        "phone": "240-906-6262",
        "fax": "202-225-2848",
        "address": "4301 Garden City Dr., Suite 405, Landover, MD, 20785"
      }
    ]
  },
  {
    "id": "H000874",
    "name": "Steny H. Hoyer",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": "MD-05",
    "class": null,
    "isTerritory": false,
    "office": "1705 Longworth House Office Building",
    "address": "1705 Longworth House Office Building Washington DC 20515-2005",
    "phone": "202-225-4131",
    "fax": null,
    "website": "https://hoyer.house.gov",
    "contactForm": "https://hoyer.house.gov/email-steny",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H000874-greenbelt",
        "label": "Greenbelt",
        "phone": "301-474-0119",
        "fax": "301-474-4697",
        "address": "6500 Cherrywood Ln., Suite 310, U.S. District Courthouse, Greenbelt, MD, 20770"
      },
      {
        "id": "H000874-white_plains",
        "label": "White Plains",
        "phone": "301-843-1577",
        "fax": "301-843-1331",
        "address": "4475 Regency Pl., Suite 203, White Plains, MD, 20695"
      }
    ]
  },
  {
    "id": "M001232",
    "name": "April McClain Delaney",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": "MD-06",
    "class": null,
    "isTerritory": false,
    "office": "1130 Longworth House Office Building",
    "address": "1130 Longworth House Office Building Washington DC 20515-2006",
    "phone": "202-225-2721",
    "fax": null,
    "website": "https://mcclaindelaney.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001232-frederick",
        "label": "Frederick",
        "phone": "301-926-0300",
        "fax": "771-200-5671",
        "address": "30 W. Patrick St., Suite 505, Frederick, MD, 21701"
      }
    ]
  },
  {
    "id": "M000687",
    "name": "Kweisi Mfume",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": "MD-07",
    "class": null,
    "isTerritory": false,
    "office": "2263 Rayburn House Office Building",
    "address": "2263 Rayburn House Office Building Washington DC 20515-2007",
    "phone": "202-225-4741",
    "fax": null,
    "website": "https://mfume.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M000687-baltimore",
        "label": "Baltimore",
        "phone": "410-685-9199",
        "fax": null,
        "address": "1010 Park Avenue, Suite 105, Baltimore, MD, 21201"
      },
      {
        "id": "M000687-catonsville",
        "label": "Catonsville",
        "phone": "410-818-2120",
        "fax": null,
        "address": "754 Frederick Road, Catonsville, MD, 21228"
      }
    ]
  },
  {
    "id": "R000606",
    "name": "Jamie Raskin",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": "MD-08",
    "class": null,
    "isTerritory": false,
    "office": "2242 Rayburn House Office Building",
    "address": "2242 Rayburn House Office Building Washington DC 20515-2008",
    "phone": "202-225-5341",
    "fax": null,
    "website": "https://raskin.house.gov",
    "contactForm": "https://raskin.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000606-rockville",
        "label": "Rockville",
        "phone": "301-354-1000",
        "fax": null,
        "address": "51 Monroe St., Suite 503, Rockville, MD, 20850"
      }
    ]
  },
  {
    "id": "N000015",
    "name": "Richard E. Neal",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-01",
    "class": null,
    "isTerritory": false,
    "office": "372 Cannon House Office Building",
    "address": "372 Cannon House Office Building Washington DC 20515-2101",
    "phone": "202-225-5601",
    "fax": null,
    "website": "https://neal.house.gov",
    "contactForm": "https://forms.house.gov/neal/webforms/Contact_Form.shtml",
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000015-pittsfield",
        "label": "Pittsfield",
        "phone": "413-442-0946",
        "fax": "413-443-2792",
        "address": "78 Center St., Pittsfield, MA, 01201"
      },
      {
        "id": "N000015-springfield",
        "label": "Springfield",
        "phone": "413-785-0325",
        "fax": "413-747-0604",
        "address": "300 State St., Suite 200, Springfield, MA, 01105"
      }
    ]
  },
  {
    "id": "M000312",
    "name": "James P. McGovern",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-02",
    "class": null,
    "isTerritory": false,
    "office": "370 Cannon House Office Building",
    "address": "370 Cannon House Office Building Washington DC 20515-2102",
    "phone": "202-225-6101",
    "fax": null,
    "website": "https://mcgovern.house.gov",
    "contactForm": "https://jimmcgovern.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M000312-leominster",
        "label": "Leominster",
        "phone": "978-466-3552",
        "fax": "978-466-3973",
        "address": "24 Church St., Room 27, Leominster, MA, 01453"
      },
      {
        "id": "M000312-northampton",
        "label": "Northampton",
        "phone": "413-341-8700",
        "fax": "413-584-1216",
        "address": "94 Pleasant St., Northampton, MA, 01060"
      },
      {
        "id": "M000312-worcester",
        "label": "Worcester",
        "phone": "508-831-7356",
        "fax": "508-754-0982",
        "address": "12 E. Worcester St., Suite 1, Worcester, MA, 01604"
      }
    ]
  },
  {
    "id": "T000482",
    "name": "Lori Trahan",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-03",
    "class": null,
    "isTerritory": false,
    "office": "2233 Rayburn House Office Building",
    "address": "2233 Rayburn House Office Building Washington DC 20515-2103",
    "phone": "202-225-3411",
    "fax": null,
    "website": "https://trahan.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000482-lowell",
        "label": "Lowell",
        "phone": "978-459-0101",
        "fax": null,
        "address": "126 John St, Suite 12, Lowell, MA, 01852-1152"
      }
    ]
  },
  {
    "id": "A000148",
    "name": "Jake Auchincloss",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-04",
    "class": null,
    "isTerritory": false,
    "office": "1524 Longworth House Office Building",
    "address": "1524 Longworth House Office Building Washington DC 20515-2104",
    "phone": "202-225-5931",
    "fax": null,
    "website": "https://auchincloss.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000148-attleboro",
        "label": "Attleboro",
        "phone": "508-431-1110",
        "fax": null,
        "address": "8 N. Main St., Suite 200, Attleboro, MA, 02703"
      },
      {
        "id": "A000148-fall_river",
        "label": "Fall River",
        "phone": null,
        "fax": null,
        "address": "1 Government Center, Office 237B, Fall River, MA, 02722"
      },
      {
        "id": "A000148-newton",
        "label": "Newton",
        "phone": "617-332-3333",
        "fax": null,
        "address": "29 Crafts St., Suite 375, Newton, MA, 02458"
      }
    ]
  },
  {
    "id": "C001101",
    "name": "Katherine M. Clark",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-05",
    "class": null,
    "isTerritory": false,
    "office": "2368 Rayburn House Office Building",
    "address": "2368 Rayburn House Office Building Washington DC 20515-2105",
    "phone": "202-225-2836",
    "fax": null,
    "website": "https://katherineclark.house.gov",
    "contactForm": "https://katherineclark.house.gov/index.cfm/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001101-malden",
        "label": "Malden",
        "phone": "617-354-0292",
        "fax": null,
        "address": "157 Pleasant St, Suite 4, Malden, MA, 02148"
      }
    ]
  },
  {
    "id": "M001196",
    "name": "Seth Moulton",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-06",
    "class": null,
    "isTerritory": false,
    "office": "1126 Longworth House Office Building",
    "address": "1126 Longworth House Office Building Washington DC 20515-2106",
    "phone": "202-225-8020",
    "fax": null,
    "website": "https://moulton.house.gov",
    "contactForm": "http://moulton.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001196-salem",
        "label": "Salem",
        "phone": "978-531-1669",
        "fax": "771-200-5585",
        "address": "21 Front St., Salem, MA, 01970"
      }
    ]
  },
  {
    "id": "P000617",
    "name": "Ayanna Pressley",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-07",
    "class": null,
    "isTerritory": false,
    "office": "402 Cannon House Office Building",
    "address": "402 Cannon House Office Building Washington DC 20515-2107",
    "phone": "202-225-5111",
    "fax": null,
    "website": "https://pressley.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000617-boston",
        "label": "Boston",
        "phone": "617-850-0040",
        "fax": "202-225-9322",
        "address": "50 Redfield Street, Suite 302, Boston, MA, 02122"
      }
    ]
  },
  {
    "id": "L000562",
    "name": "Stephen F. Lynch",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-08",
    "class": null,
    "isTerritory": false,
    "office": "2109 Rayburn House Office Building",
    "address": "2109 Rayburn House Office Building Washington DC 20515-2108",
    "phone": "202-225-8273",
    "fax": null,
    "website": "https://lynch.house.gov",
    "contactForm": "https://lynch.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000562-boston",
        "label": "Boston",
        "phone": "617-428-2000",
        "fax": "617-428-2011",
        "address": "One Harbor Street, Suite 101, Boston, MA, 02210"
      },
      {
        "id": "L000562-brockton",
        "label": "Brockton",
        "phone": "508-586-5555",
        "fax": "508-580-4692",
        "address": "37 Belmont Street, 2nd Floor, Suite 3, Brockton, MA, 02301"
      },
      {
        "id": "L000562-quincy",
        "label": "Quincy",
        "phone": "617-657-6305",
        "fax": "617-773-0955",
        "address": "1245 Hancock St., Suite 41, Quincy, MA, 02169"
      }
    ]
  },
  {
    "id": "K000375",
    "name": "William R. Keating",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": "MA-09",
    "class": null,
    "isTerritory": false,
    "office": "2372 Rayburn House Office Building",
    "address": "2372 Rayburn House Office Building Washington DC 20515-2109",
    "phone": "202-225-3111",
    "fax": null,
    "website": "https://keating.house.gov",
    "contactForm": "https://keating.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000375-hyannis",
        "label": "Hyannis",
        "phone": "508-771-6868",
        "fax": "508-790-1959",
        "address": "251 Stevens Street, E, Hyannis, MA, 02601"
      },
      {
        "id": "K000375-new_bedford",
        "label": "New Bedford",
        "phone": "508-999-6462",
        "fax": "508-999-6468",
        "address": "128 Union Street, Suite 103, New Bedford, MA, 02740"
      },
      {
        "id": "K000375-plymouth",
        "label": "Plymouth",
        "phone": "508-746-9000",
        "fax": "508-732-0072",
        "address": "50 Resnik Road, Suite 103, Plymouth, MA, 02360"
      }
    ]
  },
  {
    "id": "B001301",
    "name": "Jack Bergman",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-01",
    "class": null,
    "isTerritory": false,
    "office": "566 Cannon House Office Building",
    "address": "566 Cannon House Office Building Washington DC 20515-2201",
    "phone": "202-225-4735",
    "fax": null,
    "website": "https://bergman.house.gov",
    "contactForm": "https://bergmanforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001301-gwinn",
        "label": "Gwinn",
        "phone": "906-273-2227",
        "fax": null,
        "address": "125 G Avenue, B, Gwinn, MI, 49841"
      },
      {
        "id": "B001301-traverse_city",
        "label": "Traverse City",
        "phone": "231-944-7633",
        "fax": null,
        "address": "1396 Douglas Drive, Suite 22B, Traverse City, MI, 49696"
      }
    ]
  },
  {
    "id": "M001194",
    "name": "John R. Moolenaar",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-02",
    "class": null,
    "isTerritory": false,
    "office": "246 Cannon House Office Building",
    "address": "246 Cannon House Office Building Washington DC 20515-2202",
    "phone": "202-225-3561",
    "fax": null,
    "website": "https://moolenaar.house.gov",
    "contactForm": "https://moolenaar.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001194-caledonia",
        "label": "Caledonia",
        "phone": "616-528-7100",
        "fax": null,
        "address": "8980 North Rodgers Court, Suite H, Caledonia, MI, 49316"
      },
      {
        "id": "M001194-clare",
        "label": "Clare",
        "phone": "989-802-6040",
        "fax": null,
        "address": "431 North McEwan Street, Clare, MI, 48617"
      }
    ]
  },
  {
    "id": "S001221",
    "name": "Hillary J. Scholten",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-03",
    "class": null,
    "isTerritory": false,
    "office": "1317 Longworth House Office Building",
    "address": "1317 Longworth House Office Building Washington DC 20515-2203",
    "phone": "202-225-3831",
    "fax": null,
    "website": "https://scholten.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001221-grand_rapids",
        "label": "Grand Rapids",
        "phone": "616-451-8383",
        "fax": null,
        "address": "110 Michigan Street NW, Grand Rapids, MI, 49503"
      }
    ]
  },
  {
    "id": "H001058",
    "name": "Bill Huizenga",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-04",
    "class": null,
    "isTerritory": false,
    "office": "2232 Rayburn House Office Building",
    "address": "2232 Rayburn House Office Building Washington DC 20515-2204",
    "phone": "202-225-4401",
    "fax": null,
    "website": "https://huizenga.house.gov",
    "contactForm": "http://huizenga.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001058-holland",
        "label": "Holland",
        "phone": "616-251-6741",
        "fax": "771-200-5821",
        "address": "170 College Ave, Suite 160, Holland, MI, 49423"
      },
      {
        "id": "H001058-portage",
        "label": "Portage",
        "phone": "269-569-8595",
        "fax": "771-200-5821",
        "address": "5228 Lovers Lane, Suite 108, Portage, MI, 49002"
      }
    ]
  },
  {
    "id": "W000798",
    "name": "Tim Walberg",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-05",
    "class": null,
    "isTerritory": false,
    "office": "2266 Rayburn House Office Building",
    "address": "2266 Rayburn House Office Building Washington DC 20515-2205",
    "phone": "202-225-6276",
    "fax": null,
    "website": "https://walberg.house.gov",
    "contactForm": "https://walberg.house.gov/contact/contactform.htm",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000798-jackson",
        "label": "Jackson",
        "phone": "517-780-9075",
        "fax": "517-780-9081",
        "address": "401 W. Michigan Ave., Jackson, MI, 49201"
      },
      {
        "id": "W000798-niles",
        "label": "Niles",
        "phone": "269-479-3115",
        "fax": null,
        "address": "92 E. Main St., Niles, MI, 49120"
      }
    ]
  },
  {
    "id": "D000624",
    "name": "Debbie Dingell",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-06",
    "class": null,
    "isTerritory": false,
    "office": "102 Cannon House Office Building",
    "address": "102 Cannon House Office Building Washington DC 20515-2206",
    "phone": "202-225-4071",
    "fax": null,
    "website": "https://debbiedingell.house.gov",
    "contactForm": "https://debbiedingellforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000624-ann_arbor",
        "label": "Ann Arbor",
        "phone": "734-481-1100",
        "fax": null,
        "address": "2006 Hogback Road, Suite 7, Ann Arbor, MI, 48105"
      },
      {
        "id": "D000624-woodhaven",
        "label": "Woodhaven",
        "phone": "313-278-2936",
        "fax": null,
        "address": "21869 West Road, Woodhaven City Hall, Woodhaven, MI, 48183"
      }
    ]
  },
  {
    "id": "B001321",
    "name": "Tom Barrett",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-07",
    "class": null,
    "isTerritory": false,
    "office": "1232 Longworth House Office Building",
    "address": "1232 Longworth House Office Building Washington DC 20515-2207",
    "phone": "202-225-4872",
    "fax": null,
    "website": "https://barrett.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001321-lansing",
        "label": "Lansing",
        "phone": "517-993-0510",
        "fax": null,
        "address": "328 W Ottawa St, Suite A, Lansing, MI, 48933"
      }
    ]
  },
  {
    "id": "M001237",
    "name": "Kristen McDonald Rivet",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-08",
    "class": null,
    "isTerritory": false,
    "office": "1408 Longworth House Office Building",
    "address": "1408 Longworth House Office Building Washington DC 20515-2208",
    "phone": "202-225-3611",
    "fax": null,
    "website": "https://mcdonaldrivet.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001237-flint",
        "label": "Flint",
        "phone": "810-238-8627",
        "fax": null,
        "address": "601 Saginaw St, Suite 403, Flint, MI, 48502"
      }
    ]
  },
  {
    "id": "M001136",
    "name": "Lisa C. McClain",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-09",
    "class": null,
    "isTerritory": false,
    "office": "562 Cannon House Office Building",
    "address": "562 Cannon House Office Building Washington DC 20515-2209",
    "phone": "202-225-2106",
    "fax": null,
    "website": "https://mcclain.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001136-lake_orion",
        "label": "Lake Orion",
        "phone": "586-697-9300",
        "fax": null,
        "address": "30 N Broadway St., Lake Orion, MI, 48362"
      },
      {
        "id": "M001136-marlette",
        "label": "Marlette",
        "phone": "586-697-9300",
        "fax": null,
        "address": "6725 Airport Road, Marlette, MI, 48453"
      }
    ]
  },
  {
    "id": "J000307",
    "name": "John James",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-10",
    "class": null,
    "isTerritory": false,
    "office": "1519 Longworth House Office Building",
    "address": "1519 Longworth House Office Building Washington DC 20515-2210",
    "phone": "202-225-4961",
    "fax": null,
    "website": "https://james.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000307-warren",
        "label": "Warren",
        "phone": "586-498-7122",
        "fax": null,
        "address": "30500 Van Dyke Avenue, Suite 306, Warren District Office, Warren, MI, 48093"
      }
    ]
  },
  {
    "id": "S001215",
    "name": "Haley M. Stevens",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-11",
    "class": null,
    "isTerritory": false,
    "office": "2411 Rayburn House Office Building",
    "address": "2411 Rayburn House Office Building Washington DC 20515-2211",
    "phone": "202-225-8171",
    "fax": null,
    "website": "https://stevens.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001215-farmington_hills",
        "label": "Farmington Hills",
        "phone": "734-853-3040",
        "fax": null,
        "address": "30500 Northwestern Highway, Suite 525, Farmington Hills, MI, 48334"
      }
    ]
  },
  {
    "id": "T000481",
    "name": "Rashida Tlaib",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-12",
    "class": null,
    "isTerritory": false,
    "office": "2438 Rayburn House Office Building",
    "address": "2438 Rayburn House Office Building Washington DC 20515-2212",
    "phone": "202-225-5126",
    "fax": null,
    "website": "https://tlaib.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000481-detroit",
        "label": "Detroit",
        "phone": "313-463-6220",
        "fax": null,
        "address": "7800 W. Outer Drive, Detroit, MI, 48235"
      },
      {
        "id": "T000481-inkster",
        "label": "Inkster",
        "phone": "313-463-6220",
        "fax": null,
        "address": "26215 Trowbridge St., Inkster, MI, 48141"
      },
      {
        "id": "T000481-southfield",
        "label": "Southfield",
        "phone": "313-203-7540",
        "fax": null,
        "address": "26080 Berg Rd., Southfield, MI, 48033"
      }
    ]
  },
  {
    "id": "T000488",
    "name": "Shri Thanedar",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MI",
    "stateName": "Michigan",
    "district": "MI-13",
    "class": null,
    "isTerritory": false,
    "office": "154 Cannon House Office Building",
    "address": "154 Cannon House Office Building Washington DC 20515-2213",
    "phone": "202-225-5802",
    "fax": null,
    "website": "https://thanedar.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000488-detroit",
        "label": "Detroit",
        "phone": "313-880-2400",
        "fax": "313-731-1843",
        "address": "400 Monroe Street, Suite 420, Suite 420, Detroit, MI, 48226"
      }
    ]
  },
  {
    "id": "F000475",
    "name": "Brad Finstad",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MN",
    "stateName": "Minnesota",
    "district": "MN-01",
    "class": null,
    "isTerritory": false,
    "office": "2418 Rayburn House Office Building",
    "address": "2418 Rayburn House Office Building Washington DC 20515-2301",
    "phone": "202-225-2472",
    "fax": null,
    "website": "https://finstad.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000475-new_ulm",
        "label": "New Ulm",
        "phone": "507-577-6151",
        "fax": null,
        "address": "110 N. Minnesota St., Suite 5, New Ulm, MN, 56073"
      },
      {
        "id": "F000475-rochester",
        "label": "Rochester",
        "phone": "507-577-6140",
        "fax": null,
        "address": "2746 Superior Drive NW, Suite 100, Rochester, MN, 55901"
      }
    ]
  },
  {
    "id": "C001119",
    "name": "Angie Craig",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MN",
    "stateName": "Minnesota",
    "district": "MN-02",
    "class": null,
    "isTerritory": false,
    "office": "2052 Rayburn House Office Building",
    "address": "2052 Rayburn House Office Building Washington DC 20515-2302",
    "phone": "202-225-2271",
    "fax": null,
    "website": "https://craig.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001119-eagan",
        "label": "Eagan",
        "phone": "651-846-2120",
        "fax": null,
        "address": "1915 Plaza Dr., Suite 202, Eagan, MN, 55122"
      }
    ]
  },
  {
    "id": "M001234",
    "name": "Kelly Morrison",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MN",
    "stateName": "Minnesota",
    "district": "MN-03",
    "class": null,
    "isTerritory": false,
    "office": "1205 Longworth House Office Building",
    "address": "1205 Longworth House Office Building Washington DC 20515-2303",
    "phone": "202-225-2871",
    "fax": null,
    "website": "https://morrison.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001234-plymouth",
        "label": "Plymouth",
        "phone": "952-656-5176",
        "fax": null,
        "address": "3033 Campus Dr., W105, Plymouth, MN, 55441"
      }
    ]
  },
  {
    "id": "M001143",
    "name": "Betty McCollum",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MN",
    "stateName": "Minnesota",
    "district": "MN-04",
    "class": null,
    "isTerritory": false,
    "office": "2426 Rayburn House Office Building",
    "address": "2426 Rayburn House Office Building Washington DC 20515-2304",
    "phone": "202-225-6631",
    "fax": null,
    "website": "https://mccollum.house.gov",
    "contactForm": "https://mccollum.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001143-st__paul",
        "label": "St. Paul",
        "phone": "651-224-9191",
        "fax": "651-224-3056",
        "address": "661 LaSalle Street, Suite 110, St. Paul, MN, 55114"
      }
    ]
  },
  {
    "id": "O000173",
    "name": "Ilhan Omar",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MN",
    "stateName": "Minnesota",
    "district": "MN-05",
    "class": null,
    "isTerritory": false,
    "office": "1730 Longworth House Office Building",
    "address": "1730 Longworth House Office Building Washington DC 20515-2305",
    "phone": "202-225-4755",
    "fax": null,
    "website": "https://omar.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "O000173-minneapolis",
        "label": "Minneapolis",
        "phone": "612-333-1272",
        "fax": null,
        "address": "310 E 38th St, Suite 222, Minneapolis, MN, 55409"
      }
    ]
  },
  {
    "id": "E000294",
    "name": "Tom Emmer",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MN",
    "stateName": "Minnesota",
    "district": "MN-06",
    "class": null,
    "isTerritory": false,
    "office": "326 Cannon House Office Building",
    "address": "326 Cannon House Office Building Washington DC 20515-2306",
    "phone": "202-225-2331",
    "fax": null,
    "website": "https://emmer.house.gov",
    "contactForm": "https://emmer.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000294-chaska",
        "label": "Chaska",
        "phone": "952-262-2999",
        "fax": null,
        "address": "1107 Hazeltine Blvd, Suite 476, Chaska, MN, 55318"
      },
      {
        "id": "E000294-otsego",
        "label": "Otsego",
        "phone": "763-241-6848",
        "fax": "763-241-7955",
        "address": "9201 Quaday Ave. NE, Suite 206, Otsego, MN, 55330"
      }
    ]
  },
  {
    "id": "F000470",
    "name": "Michelle Fischbach",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MN",
    "stateName": "Minnesota",
    "district": "MN-07",
    "class": null,
    "isTerritory": false,
    "office": "2229 Rayburn House Office Building",
    "address": "2229 Rayburn House Office Building Washington DC 20515-2307",
    "phone": "202-225-2165",
    "fax": null,
    "website": "https://fischbach.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000470-moorhead",
        "label": "Moorhead",
        "phone": "218-422-2090",
        "fax": null,
        "address": "2513 8th Street S, Moorhead, MN, 56560"
      },
      {
        "id": "F000470-willmar",
        "label": "Willmar",
        "phone": "320-403-6100",
        "fax": null,
        "address": "2211 1st Street S, Suite 190, Willmar, MN, 56201"
      }
    ]
  },
  {
    "id": "S001212",
    "name": "Pete Stauber",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MN",
    "stateName": "Minnesota",
    "district": "MN-08",
    "class": null,
    "isTerritory": false,
    "office": "145 Cannon House Office Building",
    "address": "145 Cannon House Office Building Washington DC 20515-2308",
    "phone": "202-225-6211",
    "fax": null,
    "website": "https://stauber.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001212-brainerd",
        "label": "Brainerd",
        "phone": "218-355-0862",
        "fax": null,
        "address": "501 Laurel St, Brainerd City Hall, Brainerd, MN, 56401-3595"
      },
      {
        "id": "S001212-cambridge",
        "label": "Cambridge",
        "phone": null,
        "fax": null,
        "address": "300 3rd Ave NE, Cambridge City Hall, Cambridge, MN, 55008-1281"
      },
      {
        "id": "S001212-chisholm",
        "label": "Chisholm",
        "phone": "218-355-0726",
        "fax": null,
        "address": "316 W Lake St, Suite 7, Chisholm City Hall, Chisholm, MN, 55719-3708"
      },
      {
        "id": "S001212-hermantown",
        "label": "Hermantown",
        "phone": "218-481-6396",
        "fax": null,
        "address": "5094 Miller Trunk Hwy, Suite 900, Hermantown, MN, 55811-1626"
      }
    ]
  },
  {
    "id": "K000388",
    "name": "Trent Kelly",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MS",
    "stateName": "Mississippi",
    "district": "MS-01",
    "class": null,
    "isTerritory": false,
    "office": "2243 Rayburn House Office Building",
    "address": "2243 Rayburn House Office Building Washington DC 20515-2401",
    "phone": "202-225-4306",
    "fax": null,
    "website": "https://trentkelly.house.gov",
    "contactForm": "http://trentkelly.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000388-columbus",
        "label": "Columbus",
        "phone": "662-327-0748",
        "fax": "662-328-5982",
        "address": "318 N. 7th St., Suite D, Columbus, MS, 39701"
      },
      {
        "id": "K000388-corinth",
        "label": "Corinth",
        "phone": "662-687-1525",
        "fax": null,
        "address": "4135 County Road 200, Corinth, MS, 38844"
      },
      {
        "id": "K000388-eupora",
        "label": "Eupora",
        "phone": "662-687-1545",
        "fax": "662-258-7240",
        "address": "855 S. Dunn St., Eupora, MS, 39744"
      },
      {
        "id": "K000388-hernando",
        "label": "Hernando",
        "phone": "662-687-0576",
        "fax": "662-449-4836",
        "address": "2565 Caffey St., #200, Hernando, MS, 38632"
      },
      {
        "id": "K000388-oxford",
        "label": "Oxford",
        "phone": "662-687-1540",
        "fax": "662-328-5982",
        "address": "107 Courthouse Square, Oxford, MS, 38655"
      },
      {
        "id": "K000388-tupelo",
        "label": "Tupelo",
        "phone": "662-841-8808",
        "fax": null,
        "address": "431 West Main Street, Suite #450, Tupelo, MS, 38804"
      }
    ]
  },
  {
    "id": "T000193",
    "name": "Bennie G. Thompson",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MS",
    "stateName": "Mississippi",
    "district": "MS-02",
    "class": null,
    "isTerritory": false,
    "office": "2466 Rayburn House Office Building",
    "address": "2466 Rayburn House Office Building Washington DC 20515-2402",
    "phone": "202-225-5876",
    "fax": null,
    "website": "https://benniethompson.house.gov",
    "contactForm": "https://forms.house.gov/benniethompson/contact-form.shtml",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000193-bolton",
        "label": "Bolton",
        "phone": "601-866-9003",
        "fax": "601-866-9036",
        "address": "107 W. Madison St., Bolton, MS, 39041"
      },
      {
        "id": "T000193-greenville",
        "label": "Greenville",
        "phone": "662-335-9003",
        "fax": "662-334-1304",
        "address": "910 Courthouse Ln., Greenville, MS, 38701"
      },
      {
        "id": "T000193-jackson",
        "label": "Jackson",
        "phone": "601-946-9003",
        "fax": "601-982-5337",
        "address": "3607 Medgar Evers Blvd., Jackson, MS, 39213"
      },
      {
        "id": "T000193-marks",
        "label": "Marks",
        "phone": "662-326-9003",
        "fax": null,
        "address": "263 E. Main St., Marks, MS, 38646"
      },
      {
        "id": "T000193-mound_bayou",
        "label": "Mound Bayou",
        "phone": "662-741-9003",
        "fax": "662-741-9002",
        "address": "106 Green Avenue, Suite 106, Mound Bayou, MS, 38762"
      },
      {
        "id": "T000193-natchez",
        "label": "Natchez",
        "phone": "601-492-9003",
        "fax": null,
        "address": "208 Lynda Lee drive, Room 41, Natchez, MS, 39120"
      }
    ]
  },
  {
    "id": "G000591",
    "name": "Michael Guest",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MS",
    "stateName": "Mississippi",
    "district": "MS-03",
    "class": null,
    "isTerritory": false,
    "office": "450 Cannon House Office Building",
    "address": "450 Cannon House Office Building Washington DC 20515-2403",
    "phone": "202-225-5031",
    "fax": null,
    "website": "https://guest.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000591-brandon",
        "label": "Brandon",
        "phone": "769-241-6120",
        "fax": null,
        "address": "308 B East Government Street, Brandon, MS, 39042"
      },
      {
        "id": "G000591-brookhaven",
        "label": "Brookhaven",
        "phone": "601-823-3400",
        "fax": null,
        "address": "230 S Whitworth Ave, Brookhaven, MS, 39601"
      },
      {
        "id": "G000591-meridian",
        "label": "Meridian",
        "phone": "601-693-6681",
        "fax": null,
        "address": "200 22nd Avenue, Meridian, MS, 39301"
      },
      {
        "id": "G000591-starkville",
        "label": "Starkville",
        "phone": "662-324-0007",
        "fax": null,
        "address": "301 East Main Street, Suite 300, Starkville, MS, 39759"
      }
    ]
  },
  {
    "id": "E000235",
    "name": "Mike Ezell",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MS",
    "stateName": "Mississippi",
    "district": "MS-04",
    "class": null,
    "isTerritory": false,
    "office": "443 Cannon House Office Building",
    "address": "443 Cannon House Office Building Washington DC 20515-2404",
    "phone": "202-225-5772",
    "fax": null,
    "website": "https://ezell.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000235-gulfport",
        "label": "Gulfport",
        "phone": "228-864-7670",
        "fax": null,
        "address": "10441 Corporate Drive, Suite 2, Gulfport, MS, 39503"
      },
      {
        "id": "E000235-hattiesburg",
        "label": "Hattiesburg",
        "phone": "601-582-3246",
        "fax": null,
        "address": "641 Main Street, Suite 142, Hattiesburg, MS, 39401"
      },
      {
        "id": "E000235-laurel",
        "label": "Laurel",
        "phone": "601-425-7247",
        "fax": null,
        "address": "515 N. 5th Avenue, Suite A, Laurel, MS, 39440"
      },
      {
        "id": "E000235-pascagoula",
        "label": "Pascagoula",
        "phone": "228-202-5890",
        "fax": null,
        "address": "3207 Magnolia Street, Suite 101, Pascagoula, MS, 39567"
      }
    ]
  },
  {
    "id": "B001324",
    "name": "Wesley Bell",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MO",
    "stateName": "Missouri",
    "district": "MO-01",
    "class": null,
    "isTerritory": false,
    "office": "1429 Longworth House Office Building",
    "address": "1429 Longworth House Office Building Washington DC 20515-2501",
    "phone": "202-225-2406",
    "fax": null,
    "website": "https://bell.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001324-st__louis",
        "label": "St. Louis",
        "phone": "314-955-9980",
        "fax": null,
        "address": "1191 Dr. M.L. King Dr., St. Louis, MO, 63101"
      }
    ]
  },
  {
    "id": "W000812",
    "name": "Ann Wagner",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MO",
    "stateName": "Missouri",
    "district": "MO-02",
    "class": null,
    "isTerritory": false,
    "office": "2350 Rayburn House Office Building",
    "address": "2350 Rayburn House Office Building Washington DC 20515-2502",
    "phone": "202-225-1621",
    "fax": null,
    "website": "https://wagner.house.gov",
    "contactForm": "https://wagner.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000812-ballwin",
        "label": "Ballwin",
        "phone": "636-779-5449",
        "fax": "636-779-5449",
        "address": "301 Sovereign Ct., Suite 201, Ballwin, MO, 63011"
      },
      {
        "id": "W000812-washington",
        "label": "Washington",
        "phone": "636-231-1001",
        "fax": null,
        "address": "516 Jefferson St., Washington, MO, 63090"
      }
    ]
  },
  {
    "id": "O000177",
    "name": "Robert F. Onder, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MO",
    "stateName": "Missouri",
    "district": "MO-03",
    "class": null,
    "isTerritory": false,
    "office": "1113 Longworth House Office Building",
    "address": "1113 Longworth House Office Building Washington DC 20515-2503",
    "phone": "202-225-2956",
    "fax": null,
    "website": "https://onder.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "O000177-cottleville",
        "label": "Cottleville",
        "phone": "636-327-7055",
        "fax": null,
        "address": "5330 Highway N, Cottleville, MO, 63304"
      },
      {
        "id": "O000177-jefferson_city",
        "label": "Jefferson City",
        "phone": "573-635-7232",
        "fax": null,
        "address": "235 East High St, Jefferson City, MO, 65101"
      }
    ]
  },
  {
    "id": "A000379",
    "name": "Mark Alford",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MO",
    "stateName": "Missouri",
    "district": "MO-04",
    "class": null,
    "isTerritory": false,
    "office": "328 Cannon House Office Building",
    "address": "328 Cannon House Office Building Washington DC 20515-2504",
    "phone": "202-225-2876",
    "fax": null,
    "website": "https://alford.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000379-columbia",
        "label": "Columbia",
        "phone": "573-540-6600",
        "fax": null,
        "address": "2401 Bernadette Drive, Suite 117, Columbia, MO, 65203"
      },
      {
        "id": "A000379-lebanon",
        "label": "Lebanon",
        "phone": "417-532-5582",
        "fax": null,
        "address": "500 E. Elm Street, Lebanon, MO, 65536"
      },
      {
        "id": "A000379-raymore",
        "label": "Raymore",
        "phone": "816-441-6318",
        "fax": null,
        "address": "1272 West Foxwood Dr., Raymore, MO, 64083"
      }
    ]
  },
  {
    "id": "C001061",
    "name": "Emanuel Cleaver",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "MO",
    "stateName": "Missouri",
    "district": "MO-05",
    "class": null,
    "isTerritory": false,
    "office": "2217 Rayburn House Office Building",
    "address": "2217 Rayburn House Office Building Washington DC 20515-2505",
    "phone": "202-225-4535",
    "fax": null,
    "website": "https://cleaver.house.gov",
    "contactForm": "https://cleaver.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001061-independence",
        "label": "Independence",
        "phone": "816-833-4545",
        "fax": "771-200-5575",
        "address": "411 W Maple Ave, F, Independence, MO, 64050-2840"
      },
      {
        "id": "C001061-kansas_city",
        "label": "Kansas City",
        "phone": "816-842-4545",
        "fax": "771-200-5575",
        "address": "4001 Dr Martin Luther King Jr Blvd, Suite 210, Kansas City, MO, 64130"
      }
    ]
  },
  {
    "id": "G000546",
    "name": "Sam Graves",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MO",
    "stateName": "Missouri",
    "district": "MO-06",
    "class": null,
    "isTerritory": false,
    "office": "1135 Longworth House Office Building",
    "address": "1135 Longworth House Office Building Washington DC 20515-2506",
    "phone": "202-225-7041",
    "fax": null,
    "website": "https://graves.house.gov",
    "contactForm": "https://graves.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000546-hannibal",
        "label": "Hannibal",
        "phone": "573-221-3400",
        "fax": null,
        "address": "6079 Co Rd 425, Hannibal, MO, 63401"
      },
      {
        "id": "G000546-kansas_city",
        "label": "Kansas City",
        "phone": "816-792-3976",
        "fax": "816-792-0694",
        "address": "12200 North Ambassador Dr, Suite 234, Kansas City, MO, 64163"
      },
      {
        "id": "G000546-st__joseph",
        "label": "St. Joseph",
        "phone": "816-749-0800",
        "fax": "816-749-0801",
        "address": "411 Jules St., Room 111, St. Joseph, MO, 64501"
      },
      {
        "id": "G000546-troy",
        "label": "Troy",
        "phone": "636-622-7106",
        "fax": null,
        "address": "201 Main St, Rm 50, Troy, MO, 63379"
      }
    ]
  },
  {
    "id": "B001316",
    "name": "Eric Burlison",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MO",
    "stateName": "Missouri",
    "district": "MO-07",
    "class": null,
    "isTerritory": false,
    "office": "1108 Longworth House Office Building",
    "address": "1108 Longworth House Office Building Washington DC 20515-2507",
    "phone": "202-225-6536",
    "fax": null,
    "website": "https://burlison.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001316-joplin",
        "label": "Joplin",
        "phone": "417-781-1041",
        "fax": "771-200-5750",
        "address": "2727 E. 32nd Street, Suite 2, Joplin, MO, 64804"
      },
      {
        "id": "B001316-springfield",
        "label": "Springfield",
        "phone": "417-889-1800",
        "fax": "771-200-5750",
        "address": "3232 E. Ridgeview St., Springfield, MO, 65804"
      }
    ]
  },
  {
    "id": "S001195",
    "name": "Jason Smith",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MO",
    "stateName": "Missouri",
    "district": "MO-08",
    "class": null,
    "isTerritory": false,
    "office": "1011 Longworth House Office Building",
    "address": "1011 Longworth House Office Building Washington DC 20515-2508",
    "phone": "202-225-4404",
    "fax": null,
    "website": "https://jasonsmith.house.gov",
    "contactForm": "https://jasonsmith.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001195-cape_girardeau",
        "label": "Cape Girardeau",
        "phone": "573-335-0101",
        "fax": "573-335-1931",
        "address": "2502 Tanner Dr., Suite 205, Cape Girardeau, MO, 63703"
      },
      {
        "id": "S001195-farmington",
        "label": "Farmington",
        "phone": "573-756-9755",
        "fax": "573-756-9762",
        "address": "22 E. Columbia St., Farmington, MO, 63640"
      },
      {
        "id": "S001195-poplar_bluff",
        "label": "Poplar Bluff",
        "phone": "573-609-2996",
        "fax": null,
        "address": "2725 N. Westwood Blvd., Suite 5A, Poplar Bluff, MO, 63901"
      },
      {
        "id": "S001195-rolla",
        "label": "Rolla",
        "phone": "573-364-2455",
        "fax": "573-364-1053",
        "address": "830A S. Bishop, Rolla, MO, 65401"
      },
      {
        "id": "S001195-west_plains",
        "label": "West Plains",
        "phone": "417-255-1515",
        "fax": "417-255-2009",
        "address": "35 Court Sq., Suite 300, West Plains, MO, 65775"
      }
    ]
  },
  {
    "id": "Z000018",
    "name": "Ryan K. Zinke",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MT",
    "stateName": "Montana",
    "district": "MT-01",
    "class": null,
    "isTerritory": false,
    "office": "512 Cannon House Office Building",
    "address": "512 Cannon House Office Building Washington DC 20515-2600",
    "phone": "202-225-5628",
    "fax": null,
    "website": "https://zinke.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "Z000018-bozeman",
        "label": "Bozeman",
        "phone": "406-602-6030",
        "fax": null,
        "address": "601 Nikles Drive, #5, Bozeman, MT, 59715"
      },
      {
        "id": "Z000018-kalispell",
        "label": "Kalispell",
        "phone": "406-317-0277",
        "fax": null,
        "address": "923 South Main, Kalispell, MT, 59901"
      },
      {
        "id": "Z000018-missoula",
        "label": "Missoula",
        "phone": "406-317-0276",
        "fax": null,
        "address": "2901 W. Broadway Street, Suite 200, Missoula, MT, 59808"
      }
    ]
  },
  {
    "id": "D000634",
    "name": "Troy Downing",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "MT",
    "stateName": "Montana",
    "district": "MT-02",
    "class": null,
    "isTerritory": false,
    "office": "1529 Longworth House Office Building",
    "address": "1529 Longworth House Office Building Washington DC 20515-0001",
    "phone": "202-225-3211",
    "fax": null,
    "website": "https://downing.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000634-billings",
        "label": "Billings",
        "phone": "406-413-6720",
        "fax": null,
        "address": "401 North 31st St, Suite 770, Billings, MT, 59101"
      },
      {
        "id": "D000634-helena",
        "label": "Helena",
        "phone": "406-502-1435",
        "fax": null,
        "address": "7 West 6th Ave, Suite 3B, Helena, MT, 59601"
      }
    ]
  },
  {
    "id": "F000474",
    "name": "Mike Flood",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NE",
    "stateName": "Nebraska",
    "district": "NE-01",
    "class": null,
    "isTerritory": false,
    "office": "343 Cannon House Office Building",
    "address": "343 Cannon House Office Building Washington DC 20515-2701",
    "phone": "202-225-4806",
    "fax": null,
    "website": "https://flood.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000474-lincoln",
        "label": "Lincoln",
        "phone": "402-438-1598",
        "fax": null,
        "address": "301 South 13th Street, Suite 100, Lincoln, NE, 68508"
      }
    ]
  },
  {
    "id": "B001298",
    "name": "Don Bacon",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NE",
    "stateName": "Nebraska",
    "district": "NE-02",
    "class": null,
    "isTerritory": false,
    "office": "2104 Rayburn House Office Building",
    "address": "2104 Rayburn House Office Building Washington DC 20515-2702",
    "phone": "202-225-4155",
    "fax": null,
    "website": "https://bacon.house.gov",
    "contactForm": "https://google.com",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001298-omaha",
        "label": "Omaha",
        "phone": "402-938-0300",
        "fax": "402-763-4947",
        "address": "13906 Gold Circle, Suite 101, Omaha, NE, 68144"
      },
      {
        "id": "B001298-wahoo",
        "label": "Wahoo",
        "phone": "402-607-0077",
        "fax": null,
        "address": "543 Linden Street, Wahoo, NE, 68066"
      }
    ]
  },
  {
    "id": "S001172",
    "name": "Adrian Smith",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NE",
    "stateName": "Nebraska",
    "district": "NE-03",
    "class": null,
    "isTerritory": false,
    "office": "502 Cannon House Office Building",
    "address": "502 Cannon House Office Building Washington DC 20515-2703",
    "phone": "202-225-6435",
    "fax": null,
    "website": "https://adriansmith.house.gov",
    "contactForm": "https://adriansmith.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001172-grand_island",
        "label": "Grand Island",
        "phone": "308-384-3900",
        "fax": "308-384-3902",
        "address": "1811 W. Second St., Suite 275, Grand Island, NE, 68803"
      },
      {
        "id": "S001172-nebraska_city",
        "label": "Nebraska City",
        "phone": "402-874-6050",
        "fax": "402-874-6049",
        "address": "202 South 8th Street, Suite A, Nebraska City, NE, 68410"
      },
      {
        "id": "S001172-scottsbluff",
        "label": "Scottsbluff",
        "phone": "308-633-6333",
        "fax": "308-633-6335",
        "address": "416 Valley View Dr., Suite 600, Scottsbluff, NE, 69361"
      }
    ]
  },
  {
    "id": "T000468",
    "name": "Dina Titus",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NV",
    "stateName": "Nevada",
    "district": "NV-01",
    "class": null,
    "isTerritory": false,
    "office": "2370 Rayburn House Office Building",
    "address": "2370 Rayburn House Office Building Washington DC 20515-2801",
    "phone": "202-225-5965",
    "fax": null,
    "website": "https://titus.house.gov",
    "contactForm": "https://titus.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000468-las_vegas",
        "label": "Las Vegas",
        "phone": "702-220-9823",
        "fax": "702-220-9841",
        "address": "495 South Main St., 3rd Floor, Las Vegas, NV, 89101"
      }
    ]
  },
  {
    "id": "A000369",
    "name": "Mark E. Amodei",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NV",
    "stateName": "Nevada",
    "district": "NV-02",
    "class": null,
    "isTerritory": false,
    "office": "104 Cannon House Office Building",
    "address": "104 Cannon House Office Building Washington DC 20515-2802",
    "phone": "202-225-6155",
    "fax": null,
    "website": "https://amodei.house.gov",
    "contactForm": "https://amodei.house.gov/email-me/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000369-elko",
        "label": "Elko",
        "phone": "775-777-7705",
        "fax": null,
        "address": "Elko, NV 89801, Elko, NV, 89801"
      },
      {
        "id": "A000369-reno",
        "label": "Reno",
        "phone": "775-686-5760",
        "fax": "775-686-5711",
        "address": "5310 Kietzke Ln., Suite 103, Reno, NV, 89511"
      }
    ]
  },
  {
    "id": "L000590",
    "name": "Susie Lee",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NV",
    "stateName": "Nevada",
    "district": "NV-03",
    "class": null,
    "isTerritory": false,
    "office": "365 Cannon House Office Building",
    "address": "365 Cannon House Office Building Washington DC 20515-2803",
    "phone": "202-225-3252",
    "fax": null,
    "website": "https://susielee.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000590-las_vegas",
        "label": "Las Vegas",
        "phone": "702-963-9336",
        "fax": null,
        "address": "7785 W Sahara Ave, Suite 203, Las Vegas, NV, 89117"
      }
    ]
  },
  {
    "id": "H001066",
    "name": "Steven Horsford",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NV",
    "stateName": "Nevada",
    "district": "NV-04",
    "class": null,
    "isTerritory": false,
    "office": "406 Cannon House Office Building",
    "address": "406 Cannon House Office Building Washington DC 20515-2804",
    "phone": "202-225-9894",
    "fax": null,
    "website": "https://horsford.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001066-north_las_vegas",
        "label": "North Las Vegas",
        "phone": "702-963-9360",
        "fax": null,
        "address": "2250 N Las Vegas Blvd, Suite 500, North Las Vegas, NV, 89030"
      }
    ]
  },
  {
    "id": "P000614",
    "name": "Chris Pappas",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NH",
    "stateName": "New Hampshire",
    "district": "NH-01",
    "class": null,
    "isTerritory": false,
    "office": "452 Cannon House Office Building",
    "address": "452 Cannon House Office Building Washington DC 20515-2901",
    "phone": "202-225-5456",
    "fax": null,
    "website": "https://pappas.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000614-dover",
        "label": "Dover",
        "phone": "603-285-4300",
        "fax": "603-343-1326",
        "address": "660 Central Ave, Suite 101, Dover, NH, 03820-3491"
      },
      {
        "id": "P000614-manchester",
        "label": "Manchester",
        "phone": "603-935-6710",
        "fax": null,
        "address": "889 Elm Street, Manchester, NH, 03101"
      },
      {
        "id": "P000614-north_conway",
        "label": "North Conway",
        "phone": "603-733-5100",
        "fax": null,
        "address": "2541 White Mountain Highway, Unit 4, Building 1, North Conway, NH, 03860"
      }
    ]
  },
  {
    "id": "G000604",
    "name": "Maggie Goodlander",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NH",
    "stateName": "New Hampshire",
    "district": "NH-02",
    "class": null,
    "isTerritory": false,
    "office": "223 Cannon House Office Building",
    "address": "223 Cannon House Office Building Washington DC 20515-2902",
    "phone": "202-225-5206",
    "fax": null,
    "website": "https://goodlander.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000604-concord",
        "label": "Concord",
        "phone": "603-226-1002",
        "fax": null,
        "address": "18 North Main St, 4th Floor, Concord, NH, 03301"
      },
      {
        "id": "G000604-littleton",
        "label": "Littleton",
        "phone": "603-444-7700",
        "fax": null,
        "address": "33 Main St, Suite 202, Littleton, NH, 03561"
      },
      {
        "id": "G000604-nashua",
        "label": "Nashua",
        "phone": "603-595-2006",
        "fax": null,
        "address": "184 Main St, Suite 222, Nashua, NH, 03060"
      }
    ]
  },
  {
    "id": "N000188",
    "name": "Donald Norcross",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-01",
    "class": null,
    "isTerritory": false,
    "office": "2427 Rayburn House Office Building",
    "address": "2427 Rayburn House Office Building Washington DC 20515-3001",
    "phone": "202-225-6501",
    "fax": null,
    "website": "https://norcross.house.gov",
    "contactForm": "https://norcross.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000188-camden",
        "label": "Camden",
        "phone": "856-427-7000",
        "fax": "833-424-0381",
        "address": "200 Federal St., 5th Floor, Camden, NJ, 08103"
      },
      {
        "id": "N000188-cherry_hill",
        "label": "Cherry Hill",
        "phone": "856-427-7000",
        "fax": "833-424-0381",
        "address": "10 Melrose Ave., Suite 210, Cherry Hill, NJ, 08003"
      }
    ]
  },
  {
    "id": "V000133",
    "name": "Jefferson Van Drew",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-02",
    "class": null,
    "isTerritory": false,
    "office": "2447 Rayburn House Office Building",
    "address": "2447 Rayburn House Office Building Washington DC 20515-3002",
    "phone": "202-225-6572",
    "fax": null,
    "website": "https://vandrew.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000133-northfield",
        "label": "Northfield",
        "phone": "609-625-5008",
        "fax": null,
        "address": "1001 Tilton Road, Suite 101, Northfield, NJ, 08225"
      }
    ]
  },
  {
    "id": "C001136",
    "name": "Herbert C. Conaway, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-03",
    "class": null,
    "isTerritory": false,
    "office": "1022 Longworth House Office Building",
    "address": "1022 Longworth House Office Building Washington DC 20515-3003",
    "phone": "202-225-4765",
    "fax": null,
    "website": "https://conaway.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001136-trenton",
        "label": "Trenton",
        "phone": "609-438-6290",
        "fax": null,
        "address": "4573 S Broad Street, Trenton, NJ, 08620"
      }
    ]
  },
  {
    "id": "S000522",
    "name": "Christopher H. Smith",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-04",
    "class": null,
    "isTerritory": false,
    "office": "2373 Rayburn House Office Building",
    "address": "2373 Rayburn House Office Building Washington DC 20515-3004",
    "phone": "202-225-3765",
    "fax": "202-225-7768",
    "website": "https://chrissmith.house.gov",
    "contactForm": "https://chrissmith.house.gov/contact/write.htm",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000522-middletown",
        "label": "Middletown",
        "phone": "732-780-3035",
        "fax": null,
        "address": "1715 Highway 35 North, Suite 303, Middletown, NJ, 07748"
      },
      {
        "id": "S000522-toms_river",
        "label": "Toms River",
        "phone": "732-504-0567",
        "fax": null,
        "address": "33 Washington Street, P.O. Box 728, Toms River, NJ, 08754"
      }
    ]
  },
  {
    "id": "G000583",
    "name": "Josh Gottheimer",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-05",
    "class": null,
    "isTerritory": false,
    "office": "106 Cannon House Office Building",
    "address": "106 Cannon House Office Building Washington DC 20515-3005",
    "phone": "202-225-4465",
    "fax": null,
    "website": "https://gottheimer.house.gov",
    "contactForm": "https://gottheimerforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000583-englewood",
        "label": "Englewood",
        "phone": "973-814-4076",
        "fax": null,
        "address": "2-10 North Van Brunt St., Englewood, NJ, 07631"
      },
      {
        "id": "G000583-fair_lawn",
        "label": "Fair Lawn",
        "phone": "201-389-1100",
        "fax": null,
        "address": "21-00 NJ 208 S, Suite 240, Fair Lawn, NJ, 07410"
      },
      {
        "id": "G000583-fort_lee",
        "label": "Fort Lee",
        "phone": "973-814-4076",
        "fax": null,
        "address": "309 Main St, 2nd Floor, Fort Lee, NJ, 07024"
      },
      {
        "id": "G000583-hackensack",
        "label": "Hackensack",
        "phone": "973-814-4076",
        "fax": null,
        "address": "65 Central Ave, Hackensack, NJ, 07601"
      },
      {
        "id": "G000583-newton",
        "label": "Newton",
        "phone": "973-940-1117",
        "fax": null,
        "address": "93 Spring St., Suite 408, Newton, NJ, 07860"
      },
      {
        "id": "G000583-ringwood",
        "label": "Ringwood",
        "phone": "973-814-4076",
        "fax": null,
        "address": "60 Margaret King Ave., Ringwood, NJ, 07456"
      },
      {
        "id": "G000583-vernon_township",
        "label": "Vernon Township",
        "phone": "973-814-4076",
        "fax": null,
        "address": "21 Church St., Vernon Township, NJ, 07462"
      }
    ]
  },
  {
    "id": "P000034",
    "name": "Frank Pallone, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-06",
    "class": null,
    "isTerritory": false,
    "office": "2107 Rayburn House Office Building",
    "address": "2107 Rayburn House Office Building Washington DC 20515-3006",
    "phone": "202-225-4671",
    "fax": null,
    "website": "https://pallone.house.gov",
    "contactForm": "https://palloneforms.house.gov/contact/email/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000034-long_branch",
        "label": "Long Branch",
        "phone": "732-571-1140",
        "fax": "732-870-3890",
        "address": "504 Broadway, Long Branch, NJ, 07740"
      },
      {
        "id": "P000034-new_brunswick",
        "label": "New Brunswick",
        "phone": "732-249-8892",
        "fax": "732-249-1335",
        "address": "67/69 Church St., New Brunswick, NJ, 08901"
      }
    ]
  },
  {
    "id": "K000398",
    "name": "Thomas H. Kean, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-07",
    "class": null,
    "isTerritory": false,
    "office": "251 Cannon House Office Building",
    "address": "251 Cannon House Office Building Washington DC 20515-3007",
    "phone": "202-225-5361",
    "fax": null,
    "website": "https://kean.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000398-bernardsville",
        "label": "Bernardsville",
        "phone": "908-547-3307",
        "fax": null,
        "address": "75 Claremont Road, Suite 206, Bernardsville, NJ, 07924"
      },
      {
        "id": "K000398-budd_lake",
        "label": "Budd Lake",
        "phone": null,
        "fax": null,
        "address": "204 Flanders-Drakestown Road, Municipal Council Chambers, Mount Olive Township Municipal Building, Budd Lake, NJ, 07828"
      },
      {
        "id": "K000398-flemington",
        "label": "Flemington",
        "phone": null,
        "fax": null,
        "address": "71 Main St, Building 1, Second Floor Executive Meeting, Hunterdon County Admin. Building, Flemington, NJ, 08822"
      },
      {
        "id": "K000398-hopatcong",
        "label": "Hopatcong",
        "phone": null,
        "fax": null,
        "address": "111 River Styx Road, Hopatcong Borough Municipal Building, Hopatcong, NJ, 07843"
      },
      {
        "id": "K000398-mountainside",
        "label": "Mountainside",
        "phone": null,
        "fax": null,
        "address": "1385 US Highway 22 East, Mountainside Borough Hall, Mountainside, NJ, 07092"
      },
      {
        "id": "K000398-washington",
        "label": "Washington",
        "phone": null,
        "fax": null,
        "address": "100 Belvidere Avenue, Second Floor Council Chambers, Washington, NJ, 07882"
      }
    ]
  },
  {
    "id": "M001226",
    "name": "Robert Menendez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-08",
    "class": null,
    "isTerritory": false,
    "office": "2453 Rayburn House Office Building",
    "address": "2453 Rayburn House Office Building Washington DC 20515-3008",
    "phone": "202-225-7919",
    "fax": null,
    "website": "https://menendez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001226-jersey_city",
        "label": "Jersey City",
        "phone": "201-309-0301",
        "fax": null,
        "address": "257 Cornelison Avenue, Suite 4408, Jersey City, NJ, 07302"
      }
    ]
  },
  {
    "id": "P000621",
    "name": "Nellie Pou",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-09",
    "class": null,
    "isTerritory": false,
    "office": "1007 Longworth House Office Building",
    "address": "1007 Longworth House Office Building Washington DC 20515-3009",
    "phone": "202-225-5751",
    "fax": null,
    "website": "https://pou.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000621-paterson",
        "label": "Paterson",
        "phone": "973-523-5152",
        "fax": null,
        "address": "100 Hamilton Plaza, Suite 1400, Paterson, NJ, 07505"
      }
    ]
  },
  {
    "id": "M001229",
    "name": "LaMonica McIver",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-10",
    "class": null,
    "isTerritory": false,
    "office": "426 Cannon House Office Building",
    "address": "426 Cannon House Office Building Washington DC 20515-3010",
    "phone": "202-225-3436",
    "fax": null,
    "website": "https://mciver.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001229-newark",
        "label": "Newark",
        "phone": "973-645-3213",
        "fax": null,
        "address": "60 Nelson Pl, 14th Floor, LeRoy F. Smith, Jr. Public Safety Building, Newark, NJ, 07102"
      }
    ]
  },
  {
    "id": "M001246",
    "name": "Analilia Mejia",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-11",
    "class": null,
    "isTerritory": false,
    "office": "1427 Longworth House Office Building",
    "address": "1427 Longworth House Office Building Washington DC 20515-3011",
    "phone": "202-225-5034",
    "fax": "202-225-3186",
    "website": "https://mejia.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001246-livingston",
        "label": "Livingston",
        "phone": "973-526-5668",
        "fax": null,
        "address": "357 S. Livingston Avenue, Suite 201, Livingston, NJ, 07039"
      }
    ]
  },
  {
    "id": "W000822",
    "name": "Bonnie Watson Coleman",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": "NJ-12",
    "class": null,
    "isTerritory": false,
    "office": "168 Cannon House Office Building",
    "address": "168 Cannon House Office Building Washington DC 20515-3012",
    "phone": "202-225-5801",
    "fax": null,
    "website": "https://watsoncoleman.house.gov",
    "contactForm": "https://watsoncoleman.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000822-ewing",
        "label": "Ewing",
        "phone": "609-883-0026",
        "fax": "609-883-2093",
        "address": "850 Bear Tavern Rd., Suite 201, Ewing, NJ, 08628"
      }
    ]
  },
  {
    "id": "S001218",
    "name": "Melanie A. Stansbury",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NM",
    "stateName": "New Mexico",
    "district": "NM-01",
    "class": null,
    "isTerritory": false,
    "office": "1421 Longworth House Office Building",
    "address": "1421 Longworth House Office Building Washington DC 20515-3101",
    "phone": "202-225-6316",
    "fax": null,
    "website": "https://stansbury.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001218-albuquerque",
        "label": "Albuquerque",
        "phone": "505-346-6781",
        "fax": null,
        "address": "6301 Indian School Rd, Suite 420, Albuquerque, NM, 87110"
      }
    ]
  },
  {
    "id": "V000136",
    "name": "Gabe Vasquez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NM",
    "stateName": "New Mexico",
    "district": "NM-02",
    "class": null,
    "isTerritory": false,
    "office": "322 Cannon House Office Building",
    "address": "322 Cannon House Office Building Washington DC 20515-3102",
    "phone": "202-225-2365",
    "fax": null,
    "website": "https://vasquez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000136-albuquerque",
        "label": "Albuquerque",
        "phone": "505-208-4777",
        "fax": null,
        "address": "201 Unser Blvd. NW, Unit 116, Albuquerque, NM, 87121"
      },
      {
        "id": "V000136-las_cruces",
        "label": "Las Cruces",
        "phone": "575-323-6390",
        "fax": null,
        "address": "115 W. Griggs Ave., Las Cruces, NM, 88001"
      }
    ]
  },
  {
    "id": "L000273",
    "name": "Teresa Leger Fernandez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NM",
    "stateName": "New Mexico",
    "district": "NM-03",
    "class": null,
    "isTerritory": false,
    "office": "2417 Rayburn House Office Building",
    "address": "2417 Rayburn House Office Building Washington DC 20515-3103",
    "phone": "202-225-6190",
    "fax": null,
    "website": "https://fernandez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000273-clovis",
        "label": "Clovis",
        "phone": "505-428-4680",
        "fax": null,
        "address": "418 Main Street, Clovis, NM, 88101"
      },
      {
        "id": "L000273-gallup",
        "label": "Gallup",
        "phone": "505-551-4696",
        "fax": null,
        "address": "207 West Hill Ave., Office 301A, Gallup, NM, 87301"
      },
      {
        "id": "L000273-las_vegas",
        "label": "Las Vegas",
        "phone": "505-570-7558",
        "fax": null,
        "address": "1103 National Avenue, Suite 101, Las Vegas, NM, 87701"
      },
      {
        "id": "L000273-santa_fe",
        "label": "Santa Fe",
        "phone": "505-428-4680",
        "fax": null,
        "address": "120 S Federal Pl, Suite 323, Santa Fe, NM, 87501"
      }
    ]
  },
  {
    "id": "L000598",
    "name": "Nick LaLota",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-01",
    "class": null,
    "isTerritory": false,
    "office": "122 Cannon House Office Building",
    "address": "122 Cannon House Office Building Washington DC 20515-3201",
    "phone": "202-225-3826",
    "fax": null,
    "website": "https://lalota.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000598-hauppauge",
        "label": "Hauppauge",
        "phone": "631-289-1097",
        "fax": null,
        "address": "515 Hauppauge Road, Suite 3B, Hauppauge, NY, 11788"
      },
      {
        "id": "L000598-rocky_point",
        "label": "Rocky Point",
        "phone": "631-289-1097",
        "fax": null,
        "address": "109 King Road, Rocky Point VFW Post 6249, Rocky Point, NY, 11778"
      }
    ]
  },
  {
    "id": "G000597",
    "name": "Andrew R. Garbarino",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-02",
    "class": null,
    "isTerritory": false,
    "office": "2344 Rayburn House Office Building",
    "address": "2344 Rayburn House Office Building Washington DC 20515-3202",
    "phone": "202-225-7896",
    "fax": null,
    "website": "https://garbarino.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000597-patchogue",
        "label": "Patchogue",
        "phone": "631-541-4225",
        "fax": null,
        "address": "31 Oak Street, Suite 20, Patchogue, NY, 11772"
      }
    ]
  },
  {
    "id": "S001201",
    "name": "Thomas R. Suozzi",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-03",
    "class": null,
    "isTerritory": false,
    "office": "203 Cannon House Office Building",
    "address": "203 Cannon House Office Building Washington DC 20515-3203",
    "phone": "202-225-3335",
    "fax": null,
    "website": "https://suozzi.house.gov",
    "contactForm": "https://suozzi.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001201-douglaston",
        "label": "Douglaston",
        "phone": "718-631-0400",
        "fax": null,
        "address": "242-09 Northern Boulevard, Douglaston, NY, 11363"
      },
      {
        "id": "S001201-glen_cove",
        "label": "Glen Cove",
        "phone": "516-861-1070",
        "fax": null,
        "address": "51 Glen Street, Second Floor, Glen Cove, NY, 11542"
      }
    ]
  },
  {
    "id": "G000602",
    "name": "Laura Gillen",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-04",
    "class": null,
    "isTerritory": false,
    "office": "428 Cannon House Office Building",
    "address": "428 Cannon House Office Building Washington DC 20515-3204",
    "phone": "202-225-5516",
    "fax": null,
    "website": "https://gillen.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000602-garden_city",
        "label": "Garden City",
        "phone": "516-739-3008",
        "fax": null,
        "address": "229 7th St, Suite 102, Garden City, NY, 11530"
      }
    ]
  },
  {
    "id": "M001137",
    "name": "Gregory W. Meeks",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-05",
    "class": null,
    "isTerritory": false,
    "office": "2310 Rayburn House Office Building",
    "address": "2310 Rayburn House Office Building Washington DC 20515-3205",
    "phone": "202-225-3461",
    "fax": null,
    "website": "https://meeks.house.gov",
    "contactForm": "https://meeks.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001137-arverne",
        "label": "Arverne",
        "phone": "347-230-4032",
        "fax": "347-230-4045",
        "address": "67-12 Rockaway Beach Blvd., Arverne, NY, 11692"
      },
      {
        "id": "M001137-jamaica",
        "label": "Jamaica",
        "phone": "718-725-6000",
        "fax": "718-725-9868",
        "address": "153-01 Jamaica Ave., 2nd floor, Jamaica, NY, 11432"
      }
    ]
  },
  {
    "id": "M001188",
    "name": "Grace Meng",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-06",
    "class": null,
    "isTerritory": false,
    "office": "2468 Rayburn House Office Building",
    "address": "2468 Rayburn House Office Building Washington DC 20515-3206",
    "phone": "202-225-2601",
    "fax": null,
    "website": "https://meng.house.gov",
    "contactForm": "https://meng.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001188-flushing",
        "label": "Flushing",
        "phone": "718-358-6364",
        "fax": "718-445-7868",
        "address": "40-13 159th St., Suite A, Flushing, NY, 11358"
      },
      {
        "id": "M001188-forest_hills",
        "label": "Forest Hills",
        "phone": null,
        "fax": null,
        "address": "118-35 Queens Blvd, Suite 900, Forest Hills, NY, 11375"
      }
    ]
  },
  {
    "id": "V000081",
    "name": "Nydia M. Velázquez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-07",
    "class": null,
    "isTerritory": false,
    "office": "2302 Rayburn House Office Building",
    "address": "2302 Rayburn House Office Building Washington DC 20515-3207",
    "phone": "202-225-2361",
    "fax": null,
    "website": "https://velazquez.house.gov",
    "contactForm": "https://velazquez.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000081-brooklyn",
        "label": "Brooklyn",
        "phone": "718-599-3658",
        "fax": null,
        "address": "266 Broadway, Suite 201, Brooklyn, NY, 11211"
      },
      {
        "id": "V000081-sunnyside",
        "label": "Sunnyside",
        "phone": "718-340-6244",
        "fax": null,
        "address": "39-16 47th Avenue, Sunnyside, NY, 11104"
      }
    ]
  },
  {
    "id": "J000294",
    "name": "Hakeem S. Jeffries",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-08",
    "class": null,
    "isTerritory": false,
    "office": "2267 Rayburn House Office Building",
    "address": "2267 Rayburn House Office Building Washington DC 20515-3208",
    "phone": "202-225-5936",
    "fax": null,
    "website": "https://jeffries.house.gov",
    "contactForm": "https://jeffriesforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000294-brooklyn",
        "label": "Brooklyn",
        "phone": "718-373-0033",
        "fax": null,
        "address": "445 Neptune Ave, 1st Floor, Community Room 2C, Brooklyn, NY, 11224"
      },
      {
        "id": "J000294-brooklyn-1",
        "label": "Brooklyn",
        "phone": "718-237-2211",
        "fax": null,
        "address": "55 Hanson Pl., Suite 603, Brooklyn, NY, 11217"
      }
    ]
  },
  {
    "id": "C001067",
    "name": "Yvette D. Clarke",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-09",
    "class": null,
    "isTerritory": false,
    "office": "2058 Rayburn House Office Building",
    "address": "2058 Rayburn House Office Building Washington DC 20515-3209",
    "phone": "202-225-6231",
    "fax": null,
    "website": "https://clarke.house.gov",
    "contactForm": "https://clarke.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001067-brooklyn",
        "label": "Brooklyn",
        "phone": "718-287-1142",
        "fax": "718-287-1223",
        "address": "222 Lenox Rd., Suites 1 & 2, Brooklyn, NY, 11226"
      }
    ]
  },
  {
    "id": "G000599",
    "name": "Daniel S. Goldman",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-10",
    "class": null,
    "isTerritory": false,
    "office": "245 Cannon House Office Building",
    "address": "245 Cannon House Office Building Washington DC 20515-3210",
    "phone": "202-225-7944",
    "fax": null,
    "website": "https://goldman.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000599-brooklyn",
        "label": "Brooklyn",
        "phone": "718-312-7575",
        "fax": null,
        "address": "254 36 Street, B-329, Industry City, Brooklyn, NY, 11232"
      },
      {
        "id": "G000599-new_york",
        "label": "New York",
        "phone": "212-822-7878",
        "fax": null,
        "address": "290 Broadway, Suite 291, Ted Weiss Federal Building, New York, NY, 10007"
      }
    ]
  },
  {
    "id": "M000317",
    "name": "Nicole Malliotakis",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-11",
    "class": null,
    "isTerritory": false,
    "office": "1124 Longworth House Office Building",
    "address": "1124 Longworth House Office Building Washington DC 20515-3211",
    "phone": "202-225-3371",
    "fax": null,
    "website": "https://malliotakis.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M000317-brooklyn",
        "label": "Brooklyn",
        "phone": "718-306-1620",
        "fax": null,
        "address": "7716 Third Avenue, Brooklyn, NY, 11209"
      },
      {
        "id": "M000317-staten_island",
        "label": "Staten Island",
        "phone": "718-568-2870",
        "fax": null,
        "address": "1698 Victory Blvd, Suite 2L, Staten Island, NY, 10314"
      }
    ]
  },
  {
    "id": "N000002",
    "name": "Jerrold Nadler",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-12",
    "class": null,
    "isTerritory": false,
    "office": "2132 Rayburn House Office Building",
    "address": "2132 Rayburn House Office Building Washington DC 20515-3212",
    "phone": "202-225-5635",
    "fax": null,
    "website": "https://nadler.house.gov",
    "contactForm": "https://jerroldnadler.house.gov/forms/writeyourrep/default.aspx",
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000002-new_york",
        "label": "New York",
        "phone": "212-367-7350",
        "fax": null,
        "address": "201 Varick St., Suite 669, New York, NY, 10014"
      }
    ]
  },
  {
    "id": "E000297",
    "name": "Adriano Espaillat",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-13",
    "class": null,
    "isTerritory": false,
    "office": "2332 Rayburn House Office Building",
    "address": "2332 Rayburn House Office Building Washington DC 20515-3213",
    "phone": "202-225-4365",
    "fax": null,
    "website": "https://espaillat.house.gov",
    "contactForm": "https://espaillatforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000297-bronx",
        "label": "Bronx",
        "phone": "646-740-3632",
        "fax": null,
        "address": "3107 Kingsbridge Avenue, Bronx, NY, 10463"
      },
      {
        "id": "E000297-new_york",
        "label": "New York",
        "phone": "212-663-3900",
        "fax": null,
        "address": "163 West 125th Street, #508, Harlem State Office Building, New York, NY, 10027"
      },
      {
        "id": "E000297-new_york-1",
        "label": "New York",
        "phone": "212-497-5959",
        "fax": null,
        "address": "720 West 181st Street, Suite 2, New York, NY, 10033"
      }
    ]
  },
  {
    "id": "O000172",
    "name": "Alexandria Ocasio-Cortez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-14",
    "class": null,
    "isTerritory": false,
    "office": "250 Cannon House Office Building",
    "address": "250 Cannon House Office Building Washington DC 20515-3214",
    "phone": "202-225-3965",
    "fax": null,
    "website": "https://ocasio-cortez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "O000172-bronx",
        "label": "Bronx",
        "phone": null,
        "fax": null,
        "address": "1231 Lafayette Ave, Suite L-610, Bronx, NY, 10474"
      },
      {
        "id": "O000172-queens",
        "label": "Queens",
        "phone": null,
        "fax": null,
        "address": "30-83 31st Street, Queens, NY, 11102"
      }
    ]
  },
  {
    "id": "T000486",
    "name": "Ritchie Torres",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-15",
    "class": null,
    "isTerritory": false,
    "office": "1414 Longworth House Office Building",
    "address": "1414 Longworth House Office Building Washington DC 20515-3215",
    "phone": "202-225-4361",
    "fax": null,
    "website": "https://ritchietorres.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000486-bronx",
        "label": "Bronx",
        "phone": "718-503-9610",
        "fax": null,
        "address": "540 E Fordham Rd., Suite 2A, Bronx, NY, 10458"
      }
    ]
  },
  {
    "id": "L000606",
    "name": "George Latimer",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-16",
    "class": null,
    "isTerritory": false,
    "office": "1507 Longworth House Office Building",
    "address": "1507 Longworth House Office Building Washington DC 20515-3216",
    "phone": "202-225-2464",
    "fax": null,
    "website": "https://latimer.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000606-bronx",
        "label": "Bronx",
        "phone": "718-530-7888",
        "fax": null,
        "address": "177 Dreiser Loop, Room 3, Bronx, NY, 10475"
      },
      {
        "id": "L000606-white_plains",
        "label": "White Plains",
        "phone": "914-323-5550",
        "fax": null,
        "address": "222 Mamaroneck Ave, Suite 312, White Plains, NY, 10605"
      }
    ]
  },
  {
    "id": "L000599",
    "name": "Michael Lawler",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-17",
    "class": null,
    "isTerritory": false,
    "office": "324 Cannon House Office Building",
    "address": "324 Cannon House Office Building Washington DC 20515-3217",
    "phone": "202-225-6506",
    "fax": null,
    "website": "https://lawler.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000599-mahopac",
        "label": "Mahopac",
        "phone": "845-743-7130",
        "fax": null,
        "address": "60 McAlpin Ave, Mahopac, NY, 10541"
      },
      {
        "id": "L000599-pearl_river",
        "label": "Pearl River",
        "phone": "845-201-2060",
        "fax": null,
        "address": "One Blue Hill Plaza, Third Floor, Pearl River, NY, 10965"
      }
    ]
  },
  {
    "id": "R000579",
    "name": "Patrick Ryan",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-18",
    "class": null,
    "isTerritory": false,
    "office": "1708 Longworth House Office Building",
    "address": "1708 Longworth House Office Building Washington DC 20515-3218",
    "phone": "202-225-5614",
    "fax": null,
    "website": "https://patryan.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000579-kingston",
        "label": "Kingston",
        "phone": "845-443-2930",
        "fax": null,
        "address": "307 Wall Street, #6, Kingston, NY, 12401"
      },
      {
        "id": "R000579-newburgh",
        "label": "Newburgh",
        "phone": "845-443-2930",
        "fax": null,
        "address": "605 Broadway, Newburgh, NY, 12550"
      },
      {
        "id": "R000579-poughkeepsie",
        "label": "Poughkeepsie",
        "phone": "845-443-2930",
        "fax": null,
        "address": "12 Raymond Avenue, Suite 105, Poughkeepsie, NY, 12603"
      }
    ]
  },
  {
    "id": "R000622",
    "name": "Josh Riley",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-19",
    "class": null,
    "isTerritory": false,
    "office": "128 Cannon House Office Building",
    "address": "128 Cannon House Office Building Washington DC 20515-3219",
    "phone": "202-225-5441",
    "fax": null,
    "website": "https://riley.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000622-binghamton",
        "label": "Binghamton",
        "phone": "607-242-0200",
        "fax": null,
        "address": "49 Court St, Suite 210, Binghamton, NY, 13901"
      },
      {
        "id": "R000622-leeds",
        "label": "Leeds",
        "phone": "518-625-2100",
        "fax": null,
        "address": "49 Gilfeather Park Rd, Unit 1, Leeds, NY, 12451"
      }
    ]
  },
  {
    "id": "T000469",
    "name": "Paul Tonko",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-20",
    "class": null,
    "isTerritory": false,
    "office": "2269 Rayburn House Office Building",
    "address": "2269 Rayburn House Office Building Washington DC 20515-3220",
    "phone": "202-225-5076",
    "fax": null,
    "website": "https://tonko.house.gov",
    "contactForm": "https://tonkoforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000469-albany",
        "label": "Albany",
        "phone": "518-465-0700",
        "fax": "518-427-5107",
        "address": "19 Dove Street, Suite 302, Albany, NY, 12210"
      },
      {
        "id": "T000469-saratoga_springs",
        "label": "Saratoga Springs",
        "phone": "518-374-4547",
        "fax": null,
        "address": "433 Broadway, Suite 201, Saratoga Springs, NY, 12866"
      }
    ]
  },
  {
    "id": "S001196",
    "name": "Elise M. Stefanik",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-21",
    "class": null,
    "isTerritory": false,
    "office": "2211 Rayburn House Office Building",
    "address": "2211 Rayburn House Office Building Washington DC 20515-3221",
    "phone": "202-225-4611",
    "fax": null,
    "website": "https://stefanik.house.gov",
    "contactForm": "https://stefanik.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001196-herkimer",
        "label": "Herkimer",
        "phone": "315-219-8005",
        "fax": null,
        "address": "Herkimer, NY"
      },
      {
        "id": "S001196-ogdensburg",
        "label": "Ogdensburg",
        "phone": "315-541-2670",
        "fax": null,
        "address": "330 Ford Street, Suite B8, Ogdensburg, NY, 13669"
      },
      {
        "id": "S001196-plattsburgh",
        "label": "Plattsburgh",
        "phone": "518-561-2324",
        "fax": "518-561-2408",
        "address": "137 Margaret Street, Suite 100, Plattsburgh, NY, 12901"
      }
    ]
  },
  {
    "id": "M001231",
    "name": "John W. Mannion",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-22",
    "class": null,
    "isTerritory": false,
    "office": "1516 Longworth House Office Building",
    "address": "1516 Longworth House Office Building Washington DC 20515-3222",
    "phone": "202-225-3701",
    "fax": null,
    "website": "https://mannion.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001231-syracuse",
        "label": "Syracuse",
        "phone": "315-233-4333",
        "fax": null,
        "address": "440 South Warren St, Suite 706, Syracuse, NY, 13202"
      }
    ]
  },
  {
    "id": "L000600",
    "name": "Nicholas A. Langworthy",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-23",
    "class": null,
    "isTerritory": false,
    "office": "422 Cannon House Office Building",
    "address": "422 Cannon House Office Building Washington DC 20515-3223",
    "phone": "202-225-3161",
    "fax": null,
    "website": "https://langworthy.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000600-corning",
        "label": "Corning",
        "phone": "607-377-3130",
        "fax": null,
        "address": "89 W. Market Street, Corning, NY, 14830"
      },
      {
        "id": "L000600-jamestown",
        "label": "Jamestown",
        "phone": "716-488-8111",
        "fax": null,
        "address": "2-6 East Second Street, Room 208, The Fenton Building, Jamestown, NY, 14701"
      },
      {
        "id": "L000600-olean",
        "label": "Olean",
        "phone": "585-543-5033",
        "fax": null,
        "address": "1 Bluebird Square, Olean, NY, 14760"
      },
      {
        "id": "L000600-williamsville",
        "label": "Williamsville",
        "phone": "716-547-6844",
        "fax": null,
        "address": "8201 Main Street, Suite 13, Williamsville, NY, 14221"
      }
    ]
  },
  {
    "id": "T000478",
    "name": "Claudia Tenney",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-24",
    "class": null,
    "isTerritory": false,
    "office": "2230 Rayburn House Office Building",
    "address": "2230 Rayburn House Office Building Washington DC 20515-3224",
    "phone": "202-225-3665",
    "fax": null,
    "website": "https://tenney.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000478-canandaigua",
        "label": "Canandaigua",
        "phone": "585-869-2060",
        "fax": null,
        "address": "2375 Rochester Rd., Suite 250, Canandaigua, NY, 14424"
      },
      {
        "id": "T000478-lockport",
        "label": "Lockport",
        "phone": "716-514-5130",
        "fax": null,
        "address": "169 Niagara Street, Lockport, NY, 14094"
      },
      {
        "id": "T000478-oswego",
        "label": "Oswego",
        "phone": "315-236-7088",
        "fax": null,
        "address": "46 E Bridge Street, Suite 102, Oswego, NY, 13126"
      },
      {
        "id": "T000478-watertown",
        "label": "Watertown",
        "phone": null,
        "fax": null,
        "address": "317 Washington Street, Suite 418, Watertown, NY, 13601"
      }
    ]
  },
  {
    "id": "M001206",
    "name": "Joseph D. Morelle",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-25",
    "class": null,
    "isTerritory": false,
    "office": "570 Cannon House Office Building",
    "address": "570 Cannon House Office Building Washington DC 20515-3225",
    "phone": "202-225-3615",
    "fax": null,
    "website": "https://morelle.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001206-rochester",
        "label": "Rochester",
        "phone": "585-232-4850",
        "fax": "771-200-5554",
        "address": "255 East Ave., Suite 150, Rochester, NY, 14604"
      }
    ]
  },
  {
    "id": "K000402",
    "name": "Timothy M. Kennedy",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": "NY-26",
    "class": null,
    "isTerritory": false,
    "office": "423 Cannon House Office Building",
    "address": "423 Cannon House Office Building Washington DC 20515-3226",
    "phone": "202-225-3306",
    "fax": null,
    "website": "https://kennedy.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000402-buffalo",
        "label": "Buffalo",
        "phone": "716-852-3501",
        "fax": "716-852-3929",
        "address": "726 Exchange Street, Suite 601, Buffalo, NY, 14210"
      },
      {
        "id": "K000402-niagara_falls",
        "label": "Niagara Falls",
        "phone": "716-282-1274",
        "fax": "716-282-2479",
        "address": "800 Main Street, Suite 3C, Niagara Falls, NY, 14301"
      }
    ]
  },
  {
    "id": "D000230",
    "name": "Donald G. Davis",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-01",
    "class": null,
    "isTerritory": false,
    "office": "1123 Longworth House Office Building",
    "address": "1123 Longworth House Office Building Washington DC 20515-3301",
    "phone": "202-225-3101",
    "fax": null,
    "website": "https://dondavis.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000230-elizabeth_city",
        "label": "Elizabeth City",
        "phone": "252-999-7600",
        "fax": null,
        "address": "306 E. Colonial Ave, Elizabeth City, NC, 27809"
      },
      {
        "id": "D000230-goldsboro",
        "label": "Goldsboro",
        "phone": "252-999-7600",
        "fax": null,
        "address": "2803 Cashwell Drive, B, Goldsboro, NC, 27534"
      },
      {
        "id": "D000230-rocky_mount",
        "label": "Rocky Mount",
        "phone": "252-999-7600",
        "fax": null,
        "address": "1151 Falls Road, 2002, Rocky Mount, NC, 27804"
      }
    ]
  },
  {
    "id": "R000305",
    "name": "Deborah K. Ross",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-02",
    "class": null,
    "isTerritory": false,
    "office": "1221 Longworth House Office Building",
    "address": "1221 Longworth House Office Building Washington DC 20515-3302",
    "phone": "202-225-3032",
    "fax": null,
    "website": "https://ross.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000305-raleigh",
        "label": "Raleigh",
        "phone": "919-334-0840",
        "fax": "919-828-1179",
        "address": "300 Fayetteville Street, P.O. Box 1548, Raleigh, NC, 27602"
      }
    ]
  },
  {
    "id": "M001210",
    "name": "Gregory F. Murphy",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-03",
    "class": null,
    "isTerritory": false,
    "office": "407 Cannon House Office Building",
    "address": "407 Cannon House Office Building Washington DC 20515-3303",
    "phone": "202-225-3415",
    "fax": null,
    "website": "https://murphy.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001210-greenville",
        "label": "Greenville",
        "phone": "252-931-1003",
        "fax": null,
        "address": "1105 Corporate Drive, Suite C, Greenville, NC, 27858"
      },
      {
        "id": "M001210-jacksonville",
        "label": "Jacksonville",
        "phone": "910-937-6929",
        "fax": null,
        "address": "815 New Bridge Street, Jacksonville, NC, 28540"
      },
      {
        "id": "M001210-manteo",
        "label": "Manteo",
        "phone": "252-230-3549",
        "fax": null,
        "address": "954 Marshall C. Collins Dr, Room 194, Manteo, NC, 27954"
      },
      {
        "id": "M001210-new_bern",
        "label": "New Bern",
        "phone": "252-636-6612",
        "fax": null,
        "address": "2402 Dr. M.L.K. Jr. Blvd., New Bern, NC, 28562"
      }
    ]
  },
  {
    "id": "F000477",
    "name": "Valerie P. Foushee",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-04",
    "class": null,
    "isTerritory": false,
    "office": "2452 Rayburn House Office Building",
    "address": "2452 Rayburn House Office Building Washington DC 20515-3304",
    "phone": "202-225-1784",
    "fax": null,
    "website": "https://foushee.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000477-durham",
        "label": "Durham",
        "phone": "919-967-7924",
        "fax": "984-234-7724",
        "address": "2605 Meridian Parkway, Suite 110, Durham, NC, 27713"
      }
    ]
  },
  {
    "id": "F000450",
    "name": "Virginia Foxx",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-05",
    "class": null,
    "isTerritory": false,
    "office": "2462 Rayburn House Office Building",
    "address": "2462 Rayburn House Office Building Washington DC 20515-3305",
    "phone": "202-225-2071",
    "fax": null,
    "website": "https://foxx.house.gov",
    "contactForm": "https://foxx.house.gov/forms/writeyourrep/?zip5=&zip4=",
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000450-boone",
        "label": "Boone",
        "phone": "828-265-0240",
        "fax": "336-778-2290",
        "address": "400 Shadowline Dr., Suite 205, Boone, NC, 28607"
      },
      {
        "id": "F000450-mayodan",
        "label": "Mayodan",
        "phone": "336-778-0211",
        "fax": "336-778-2290",
        "address": "208 W. Main St, Mayodan, NC, 27027"
      }
    ]
  },
  {
    "id": "M001240",
    "name": "Addison P. McDowell",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-06",
    "class": null,
    "isTerritory": false,
    "office": "1032 Longworth House Office Building",
    "address": "1032 Longworth House Office Building Washington DC 20515-3306",
    "phone": "202-225-3065",
    "fax": null,
    "website": "https://mcdowell.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001240-lexington",
        "label": "Lexington",
        "phone": "336-333-5005",
        "fax": null,
        "address": "30 E. 1st Ave, Lexington, NC, 27292"
      }
    ]
  },
  {
    "id": "R000603",
    "name": "David Rouzer",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-07",
    "class": null,
    "isTerritory": false,
    "office": "2333 Rayburn House Office Building",
    "address": "2333 Rayburn House Office Building Washington DC 20515-3307",
    "phone": "202-225-2731",
    "fax": null,
    "website": "https://rouzer.house.gov",
    "contactForm": "https://rouzer.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000603-bolivia",
        "label": "Bolivia",
        "phone": "910-253-6111",
        "fax": "771-200-5605",
        "address": "310 Government Center Dr., Unit 1, Bolivia, NC, 28422"
      },
      {
        "id": "R000603-fayetteville",
        "label": "Fayetteville",
        "phone": "910-500-4880",
        "fax": "771-200-5605",
        "address": "225 Green Street, Suite 202, Fayetteville, NC, 28301"
      },
      {
        "id": "R000603-wilmington",
        "label": "Wilmington",
        "phone": "910-395-0202",
        "fax": "771-200-5605",
        "address": "2520 Independence Blvd, Suite 201, Wilmington, NC, 28412"
      }
    ]
  },
  {
    "id": "H001102",
    "name": "Mark Harris",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-08",
    "class": null,
    "isTerritory": false,
    "office": "126 Cannon House Office Building",
    "address": "126 Cannon House Office Building Washington DC 20515-3308",
    "phone": "202-225-1976",
    "fax": null,
    "website": "https://markharris.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001102-monroe",
        "label": "Monroe",
        "phone": "704-218-5300",
        "fax": null,
        "address": "300 North Main St, Monroe, NC, 28112"
      }
    ]
  },
  {
    "id": "H001067",
    "name": "Richard Hudson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-09",
    "class": null,
    "isTerritory": false,
    "office": "2112 Rayburn House Office Building",
    "address": "2112 Rayburn House Office Building Washington DC 20515-3309",
    "phone": "202-225-3715",
    "fax": "202-225-4036",
    "website": "https://hudson.house.gov",
    "contactForm": "https://hudson.house.gov/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001067-fayetteville",
        "label": "Fayetteville",
        "phone": "910-997-2070",
        "fax": "910-817-7202",
        "address": "225 Green Street, Suite 202, Fayetteville, NC, 28301"
      },
      {
        "id": "H001067-southern_pines",
        "label": "Southern Pines",
        "phone": "910-910-1924",
        "fax": null,
        "address": "340 Commerce Ave, Suite 16, Southern Pines, NC, 28387"
      }
    ]
  },
  {
    "id": "H001101",
    "name": "Pat Harrigan",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-10",
    "class": null,
    "isTerritory": false,
    "office": "1233 Longworth House Office Building",
    "address": "1233 Longworth House Office Building Washington DC 20515-3310",
    "phone": "202-225-2576",
    "fax": null,
    "website": "https://harrigan.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001101-hickory",
        "label": "Hickory",
        "phone": "828-327-6100",
        "fax": null,
        "address": "800 17th St NW, Suite G467, Hickory, NC, 28601"
      }
    ]
  },
  {
    "id": "E000246",
    "name": "Chuck Edwards",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-11",
    "class": null,
    "isTerritory": false,
    "office": "1505 Longworth House Office Building",
    "address": "1505 Longworth House Office Building Washington DC 20515-3311",
    "phone": "202-225-6401",
    "fax": null,
    "website": "https://edwards.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000246-hendersonville",
        "label": "Hendersonville",
        "phone": "828-435-7310",
        "fax": "771-200-5795",
        "address": "200 North Grove Street, Suite 121, Hendersonville, NC, 28792"
      }
    ]
  },
  {
    "id": "A000370",
    "name": "Alma S. Adams",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-12",
    "class": null,
    "isTerritory": false,
    "office": "2436 Rayburn House Office Building",
    "address": "2436 Rayburn House Office Building Washington DC 20515-3312",
    "phone": "202-225-1510",
    "fax": null,
    "website": "https://adams.house.gov",
    "contactForm": "http://adamsforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000370-charlotte",
        "label": "Charlotte",
        "phone": "704-344-9950",
        "fax": "704-344-9971",
        "address": "10815 David Taylor Dr., Suite 100, Charlotte, NC, 28262"
      }
    ]
  },
  {
    "id": "K000405",
    "name": "Brad Knott",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-13",
    "class": null,
    "isTerritory": false,
    "office": "1239 Longworth House Office Building",
    "address": "1239 Longworth House Office Building Washington DC 20515-3313",
    "phone": "202-225-4531",
    "fax": null,
    "website": "https://knott.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000405-garner",
        "label": "Garner",
        "phone": "984-275-6150",
        "fax": "984-275-6150",
        "address": "12450 Cleveland Road, 203, Garner, NC, 27529"
      }
    ]
  },
  {
    "id": "M001236",
    "name": "Tim Moore",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": "NC-14",
    "class": null,
    "isTerritory": false,
    "office": "1424 Longworth House Office Building",
    "address": "1424 Longworth House Office Building Washington DC 20515-0001",
    "phone": "202-225-5634",
    "fax": null,
    "website": "https://timmoore.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001236-gastonia",
        "label": "Gastonia",
        "phone": "980-460-8110",
        "fax": null,
        "address": "128 West Main Ave, Gastonia, NC, 28052"
      }
    ]
  },
  {
    "id": "F000482",
    "name": "Julie Fedorchak",
    "chamber": "House",
    "role": "Delegate",
    "party": "R",
    "partyName": "Republican",
    "state": "ND",
    "stateName": "North Dakota",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": false,
    "office": "1607 Longworth House Office Building",
    "address": "1607 Longworth House Office Building Washington DC 20515-3400",
    "phone": "202-225-2611",
    "fax": null,
    "website": "https://fedorchak.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000482-bismarck",
        "label": "Bismarck",
        "phone": "701-354-6700",
        "fax": null,
        "address": "220 E Rosser Ave, Room 228, U.S. Federal Building, Bismarck, ND, 58501"
      },
      {
        "id": "F000482-fargo",
        "label": "Fargo",
        "phone": "701-353-6665",
        "fax": "701-707-0711",
        "address": "3217 Fiechtner Dr, Suite B, Fargo, ND, 58103"
      }
    ]
  },
  {
    "id": "K000404",
    "name": "Kimberlyn King-Hinds",
    "chamber": "House",
    "role": "Delegate",
    "party": "R",
    "partyName": "Republican",
    "state": "MP",
    "stateName": "Northern Mariana Islands",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": true,
    "office": "425 Cannon House Office Building",
    "address": "425 Cannon House Office Building Washington DC 20515-5201",
    "phone": "202-225-2646",
    "fax": null,
    "website": "https://king-hinds.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000404-rota",
        "label": "Rota",
        "phone": "670-532-2647",
        "fax": "670-532-2649",
        "address": "P.O. Box 1361, Rota, MP, 96951"
      },
      {
        "id": "K000404-saipan",
        "label": "Saipan",
        "phone": "670-323-2647",
        "fax": "670-323-2649",
        "address": "P.O. Box 504879, Saipan, MP, 96950"
      },
      {
        "id": "K000404-tinian",
        "label": "Tinian",
        "phone": "670-433-2647",
        "fax": "670-433-2648",
        "address": "P.O. Box 520394, Tinian, MP, 96952"
      }
    ]
  },
  {
    "id": "L000601",
    "name": "Greg Landsman",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-01",
    "class": null,
    "isTerritory": false,
    "office": "2244 Rayburn House Office Building",
    "address": "2244 Rayburn House Office Building Washington DC 20515-3501",
    "phone": "202-225-2216",
    "fax": null,
    "website": "https://landsman.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000601-cincinnati",
        "label": "Cincinnati",
        "phone": "513-810-7988",
        "fax": null,
        "address": "961 E McMillan St, Ste C-1, Cincinnati, OH, 45206"
      },
      {
        "id": "L000601-lebanon",
        "label": "Lebanon",
        "phone": "513-409-6188",
        "fax": null,
        "address": "11 S Broadway St, Ste 301, Lebanon, OH, 45036"
      }
    ]
  },
  {
    "id": "T000490",
    "name": "David J. Taylor",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-02",
    "class": null,
    "isTerritory": false,
    "office": "325 Cannon House Office Building",
    "address": "325 Cannon House Office Building Washington DC 20515-3502",
    "phone": "202-225-3164",
    "fax": null,
    "website": "https://taylor.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000490-chillicothe",
        "label": "Chillicothe",
        "phone": "740-672-7040",
        "fax": null,
        "address": "475 Western Ave B, Chillicothe, OH, 45601"
      },
      {
        "id": "T000490-cincinnati",
        "label": "Cincinnati",
        "phone": "513-474-7777",
        "fax": null,
        "address": "4350 Aicholtz Rd, Suite 110, Cincinnati, OH, 45245"
      },
      {
        "id": "T000490-peebles",
        "label": "Peebles",
        "phone": "513-605-1380",
        "fax": null,
        "address": "170 North Main St, Peebles, OH, 45660"
      }
    ]
  },
  {
    "id": "B001281",
    "name": "Joyce Beatty",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-03",
    "class": null,
    "isTerritory": false,
    "office": "2079 Rayburn House Office Building",
    "address": "2079 Rayburn House Office Building Washington DC 20515-3503",
    "phone": "202-225-4324",
    "fax": null,
    "website": "https://beatty.house.gov",
    "contactForm": "https://beattyforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001281-columbus",
        "label": "Columbus",
        "phone": "614-220-0003",
        "fax": "614-220-5640",
        "address": "471 E. Broad St., Suite 1100, Columbus, OH, 43215"
      }
    ]
  },
  {
    "id": "J000289",
    "name": "Jim Jordan",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-04",
    "class": null,
    "isTerritory": false,
    "office": "2056 Rayburn House Office Building",
    "address": "2056 Rayburn House Office Building Washington DC 20515-3504",
    "phone": "202-225-2676",
    "fax": null,
    "website": "https://jordan.house.gov",
    "contactForm": "http://jordan.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000289-lima",
        "label": "Lima",
        "phone": "419-999-6455",
        "fax": "419-999-4238",
        "address": "3121 W. Elm Plz., Lima, OH, 45805"
      },
      {
        "id": "J000289-mansfield",
        "label": "Mansfield",
        "phone": "419-982-8045",
        "fax": "419-668-3015",
        "address": "28 Park Avenue West, 100A, Mansfield, OH, 44902"
      }
    ]
  },
  {
    "id": "L000566",
    "name": "Robert E. Latta",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-05",
    "class": null,
    "isTerritory": false,
    "office": "2470 Rayburn House Office Building",
    "address": "2470 Rayburn House Office Building Washington DC 20515-3505",
    "phone": "202-225-6405",
    "fax": null,
    "website": "https://latta.house.gov",
    "contactForm": "https://latta.house.gov/contact/contactform.htm",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000566-bowling_green",
        "label": "Bowling Green",
        "phone": "419-354-8700",
        "fax": null,
        "address": "1045 N. Main St., Suite 6, Bowling Green, OH, 43402"
      },
      {
        "id": "L000566-elyria",
        "label": "Elyria",
        "phone": "440-406-5010",
        "fax": null,
        "address": "226 Middle Avenue, 5th Floor, Elyria, OH, 44035"
      },
      {
        "id": "L000566-findlay",
        "label": "Findlay",
        "phone": "419-422-7791",
        "fax": null,
        "address": "318 Dorney Plz., Room 302, Findlay, OH, 45840"
      }
    ]
  },
  {
    "id": "R000619",
    "name": "Michael A. Rulli",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-06",
    "class": null,
    "isTerritory": false,
    "office": "421 Cannon House Office Building",
    "address": "421 Cannon House Office Building Washington DC 20515-3506",
    "phone": "202-225-5705",
    "fax": null,
    "website": "https://rulli.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000619-canfield",
        "label": "Canfield",
        "phone": "330-967-7312",
        "fax": null,
        "address": "4137 Boardman-Canfield Road, Suite 106, Canfield, OH, 44406"
      },
      {
        "id": "R000619-marietta",
        "label": "Marietta",
        "phone": "740-885-4860",
        "fax": null,
        "address": "246 Front Street, Marietta, OH, 45750"
      }
    ]
  },
  {
    "id": "M001222",
    "name": "Max L. Miller",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-07",
    "class": null,
    "isTerritory": false,
    "office": "143 Cannon House Office Building",
    "address": "143 Cannon House Office Building Washington DC 20515-3507",
    "phone": "202-225-3876",
    "fax": null,
    "website": "https://maxmiller.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001222-medina",
        "label": "Medina",
        "phone": "330-661-6654",
        "fax": null,
        "address": "Medina, OH"
      },
      {
        "id": "M001222-parma",
        "label": "Parma",
        "phone": "440-692-6120",
        "fax": null,
        "address": "Parma, OH"
      }
    ]
  },
  {
    "id": "D000626",
    "name": "Warren Davidson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-08",
    "class": null,
    "isTerritory": false,
    "office": "2113 Rayburn House Office Building",
    "address": "2113 Rayburn House Office Building Washington DC 20515-3508",
    "phone": "202-225-6205",
    "fax": null,
    "website": "https://davidson.house.gov",
    "contactForm": "https://davidson.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000626-cincinnati",
        "label": "Cincinnati",
        "phone": "513-779-5400",
        "fax": null,
        "address": "5520 Harrison Avenue, Suite C, Cincinnati, OH, 45248"
      },
      {
        "id": "D000626-liberty_township",
        "label": "Liberty Township",
        "phone": "513-779-5400",
        "fax": null,
        "address": "4879 Mercedes Drive, Suite A, Liberty Township, OH, 45011"
      }
    ]
  },
  {
    "id": "K000009",
    "name": "Marcy Kaptur",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-09",
    "class": null,
    "isTerritory": false,
    "office": "2314 Rayburn House Office Building",
    "address": "2314 Rayburn House Office Building Washington DC 20515-3509",
    "phone": "202-225-4146",
    "fax": null,
    "website": "https://kaptur.house.gov",
    "contactForm": "https://kaptur.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000009-toledo",
        "label": "Toledo",
        "phone": "419-259-7500",
        "fax": null,
        "address": "1 Maritime Plaza, #600, Toledo, OH, 43604"
      }
    ]
  },
  {
    "id": "T000463",
    "name": "Michael R. Turner",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-10",
    "class": null,
    "isTerritory": false,
    "office": "2183 Rayburn House Office Building",
    "address": "2183 Rayburn House Office Building Washington DC 20515-3510",
    "phone": "202-225-6465",
    "fax": null,
    "website": "https://turner.house.gov",
    "contactForm": "http://turner.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000463-dayton",
        "label": "Dayton",
        "phone": "937-225-2843",
        "fax": "937-225-2752",
        "address": "120 W. 3rd St., Suite 305, Dayton, OH, 45402"
      }
    ]
  },
  {
    "id": "B001313",
    "name": "Shontel M. Brown",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-11",
    "class": null,
    "isTerritory": false,
    "office": "2455 Rayburn House Office Building",
    "address": "2455 Rayburn House Office Building Washington DC 20515-3511",
    "phone": "202-225-7032",
    "fax": null,
    "website": "https://shontelbrown.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001313-beachwood",
        "label": "Beachwood",
        "phone": "216-522-4900",
        "fax": null,
        "address": "25200 Chagrin Blvd, Suite 200, Beachwood, OH, 44122"
      },
      {
        "id": "B001313-cleveland",
        "label": "Cleveland",
        "phone": "216-535-1100",
        "fax": null,
        "address": "17021 Lorain Avenue, Cleveland, OH, 44111"
      }
    ]
  },
  {
    "id": "B001306",
    "name": "Troy Balderson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-12",
    "class": null,
    "isTerritory": false,
    "office": "2429 Rayburn House Office Building",
    "address": "2429 Rayburn House Office Building Washington DC 20515-3512",
    "phone": "202-225-5355",
    "fax": null,
    "website": "https://balderson.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001306-pickerington",
        "label": "Pickerington",
        "phone": "614-523-2555",
        "fax": null,
        "address": "12931 Stonecreek Drive, Pickerington, OH, 43147"
      }
    ]
  },
  {
    "id": "S001223",
    "name": "Emilia Strong Sykes",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-13",
    "class": null,
    "isTerritory": false,
    "office": "1217 Longworth House Office Building",
    "address": "1217 Longworth House Office Building Washington DC 20515-3513",
    "phone": "202-225-6265",
    "fax": null,
    "website": "https://sykes.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001223-akron",
        "label": "Akron",
        "phone": "330-400-5350",
        "fax": null,
        "address": "121 South Main Street, Suite 107, Akron, OH, 44308"
      },
      {
        "id": "S001223-canton",
        "label": "Canton",
        "phone": "330-400-5350",
        "fax": null,
        "address": "400 Third St. SE, Suite W101, Canton, OH, 44702"
      }
    ]
  },
  {
    "id": "J000295",
    "name": "David P. Joyce",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-14",
    "class": null,
    "isTerritory": false,
    "office": "2065 Rayburn House Office Building",
    "address": "2065 Rayburn House Office Building Washington DC 20515-3514",
    "phone": "202-225-5731",
    "fax": null,
    "website": "https://joyce.house.gov",
    "contactForm": "https://joyce.house.gov/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000295-mentor",
        "label": "Mentor",
        "phone": "440-352-3939",
        "fax": "440-266-9004",
        "address": "8500 Station St, Suite 390, Mentor, OH, 44060"
      },
      {
        "id": "J000295-ravenna",
        "label": "Ravenna",
        "phone": "330-357-4139",
        "fax": null,
        "address": "449 S. Meridian Street, Room 138, Ravenna, OH, 44266"
      },
      {
        "id": "J000295-warren",
        "label": "Warren",
        "phone": "330-752-7673",
        "fax": null,
        "address": "125 West Market Street, Room 204, Warren, OH, 44481"
      }
    ]
  },
  {
    "id": "C001126",
    "name": "Mike Carey",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": "OH-15",
    "class": null,
    "isTerritory": false,
    "office": "1433 Longworth House Office Building",
    "address": "1433 Longworth House Office Building Washington DC 20515-3515",
    "phone": "202-225-2015",
    "fax": null,
    "website": "https://carey.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001126-columbus",
        "label": "Columbus",
        "phone": "614-927-6902",
        "fax": null,
        "address": "140 E Town St., Suite 1200, Columbus, OH, 43215"
      }
    ]
  },
  {
    "id": "H001082",
    "name": "Kevin Hern",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OK",
    "stateName": "Oklahoma",
    "district": "OK-01",
    "class": null,
    "isTerritory": false,
    "office": "171 Cannon House Office Building",
    "address": "171 Cannon House Office Building Washington DC 20515-3601",
    "phone": "202-225-2211",
    "fax": null,
    "website": "https://hern.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001082-tulsa",
        "label": "Tulsa",
        "phone": "918-935-3222",
        "fax": null,
        "address": "2448 E. 81st St., Suite 5150, Tulsa, OK, 74137"
      }
    ]
  },
  {
    "id": "B001317",
    "name": "Josh Brecheen",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OK",
    "stateName": "Oklahoma",
    "district": "OK-02",
    "class": null,
    "isTerritory": false,
    "office": "351 Cannon House Office Building",
    "address": "351 Cannon House Office Building Washington DC 20515-3602",
    "phone": "202-225-2701",
    "fax": null,
    "website": "https://brecheen.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001317-claremore",
        "label": "Claremore",
        "phone": "918-283-6262",
        "fax": null,
        "address": "223 W Patti Page Blvd., Claremore, OK, 74017"
      }
    ]
  },
  {
    "id": "L000491",
    "name": "Frank D. Lucas",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OK",
    "stateName": "Oklahoma",
    "district": "OK-03",
    "class": null,
    "isTerritory": false,
    "office": "2405 Rayburn House Office Building",
    "address": "2405 Rayburn House Office Building Washington DC 20515-3603",
    "phone": "202-225-5565",
    "fax": null,
    "website": "https://lucas.house.gov",
    "contactForm": "https://lucas.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000491-yukon",
        "label": "Yukon",
        "phone": "405-373-1958",
        "fax": null,
        "address": "11528 SW 15th Street, Suite 200, Yukon, OK, 73099"
      }
    ]
  },
  {
    "id": "C001053",
    "name": "Tom Cole",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OK",
    "stateName": "Oklahoma",
    "district": "OK-04",
    "class": null,
    "isTerritory": false,
    "office": "2207 Rayburn House Office Building",
    "address": "2207 Rayburn House Office Building Washington DC 20515-3604",
    "phone": "202-225-6165",
    "fax": null,
    "website": "https://cole.house.gov",
    "contactForm": "https://coleforms.house.gov/contact/default.aspx",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001053-ada",
        "label": "Ada",
        "phone": "580-436-5375",
        "fax": "580-436-5451",
        "address": "100 E. 13th St., Suite 213, Ada, OK, 74820"
      },
      {
        "id": "C001053-lawton",
        "label": "Lawton",
        "phone": "580-357-2131",
        "fax": "580-357-7477",
        "address": "711 SW. D Ave., Suite 201, Lawton, OK, 73501"
      },
      {
        "id": "C001053-norman",
        "label": "Norman",
        "phone": "405-329-6500",
        "fax": "405-321-7369",
        "address": "3219 Rock Creek Rd., Suite 125, Norman, OK, 73072"
      }
    ]
  },
  {
    "id": "B000740",
    "name": "Stephanie I. Bice",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OK",
    "stateName": "Oklahoma",
    "district": "OK-05",
    "class": null,
    "isTerritory": false,
    "office": "2402 Rayburn House Office Building",
    "address": "2402 Rayburn House Office Building Washington DC 20515-3605",
    "phone": "202-225-2132",
    "fax": null,
    "website": "https://bice.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B000740-oklahoma_city",
        "label": "Oklahoma City",
        "phone": "405-300-6890",
        "fax": "855-235-5024",
        "address": "101 N Robinson, Suite 1105, Oklahoma City, OK, 73102"
      }
    ]
  },
  {
    "id": "B001278",
    "name": "Suzanne Bonamici",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OR",
    "stateName": "Oregon",
    "district": "OR-01",
    "class": null,
    "isTerritory": false,
    "office": "2231 Rayburn House Office Building",
    "address": "2231 Rayburn House Office Building Washington DC 20515-3701",
    "phone": "202-225-0855",
    "fax": null,
    "website": "https://bonamici.house.gov",
    "contactForm": "https://bonamici.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001278-beaverton",
        "label": "Beaverton",
        "phone": "503-469-6010",
        "fax": "503-469-6018",
        "address": "12725 SW Millikan Way, Suite 220, Beaverton, OR, 97005"
      }
    ]
  },
  {
    "id": "B000668",
    "name": "Cliff Bentz",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "OR",
    "stateName": "Oregon",
    "district": "OR-02",
    "class": null,
    "isTerritory": false,
    "office": "409 Cannon House Office Building",
    "address": "409 Cannon House Office Building Washington DC 20515-3702",
    "phone": "202-225-6730",
    "fax": "202-225-5774",
    "website": "https://bentz.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B000668-medford",
        "label": "Medford",
        "phone": "541-776-4646",
        "fax": "541-779-0204",
        "address": "14 N. Central Avenue, Suite 112, Medford, OR, 97501"
      },
      {
        "id": "B000668-ontario",
        "label": "Ontario",
        "phone": "541-709-2040",
        "fax": null,
        "address": "2430 SW 4th Avenue, Suite 2, Ontario, OR, 97914"
      }
    ]
  },
  {
    "id": "D000635",
    "name": "Maxine Dexter",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OR",
    "stateName": "Oregon",
    "district": "OR-03",
    "class": null,
    "isTerritory": false,
    "office": "1207 Longworth House Office Building",
    "address": "1207 Longworth House Office Building Washington DC 20515-3703",
    "phone": "202-225-4811",
    "fax": null,
    "website": "https://dexter.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000635-portland",
        "label": "Portland",
        "phone": "503-231-2300",
        "fax": null,
        "address": "911 NE 11th Ave, Portland, OR, 97232"
      }
    ]
  },
  {
    "id": "H001094",
    "name": "Val T. Hoyle",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OR",
    "stateName": "Oregon",
    "district": "OR-04",
    "class": null,
    "isTerritory": false,
    "office": "1620 Longworth House Office Building",
    "address": "1620 Longworth House Office Building Washington DC 20515-3704",
    "phone": "202-225-6416",
    "fax": null,
    "website": "https://hoyle.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001094-eugene",
        "label": "Eugene",
        "phone": "541-465-6732",
        "fax": null,
        "address": "940 Willamette St, Eugene, OR, 97401"
      }
    ]
  },
  {
    "id": "B001326",
    "name": "Janelle S. Bynum",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OR",
    "stateName": "Oregon",
    "district": "OR-05",
    "class": null,
    "isTerritory": false,
    "office": "1508 Longworth House Office Building",
    "address": "1508 Longworth House Office Building Washington DC 20515-3705",
    "phone": "202-225-5711",
    "fax": null,
    "website": "https://bynum.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001326-oregon_city",
        "label": "Oregon City",
        "phone": "503-387-8651",
        "fax": null,
        "address": "502 7th Street, Suite 203, Oregon City, OR, 97045"
      }
    ]
  },
  {
    "id": "S001226",
    "name": "Andrea Salinas",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "OR",
    "stateName": "Oregon",
    "district": "OR-06",
    "class": null,
    "isTerritory": false,
    "office": "403 Cannon House Office Building",
    "address": "403 Cannon House Office Building Washington DC 20515-0001",
    "phone": "202-225-5643",
    "fax": null,
    "website": "https://salinas.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001226-salem",
        "label": "Salem",
        "phone": "503-385-0906",
        "fax": null,
        "address": "530 Center Street NE, #415, Salem, OR, 97301"
      },
      {
        "id": "S001226-tualatin",
        "label": "Tualatin",
        "phone": "503-385-0906",
        "fax": null,
        "address": "18861 SW Martinazzi Avenue, #200, Tualatin, OR, 97062"
      }
    ]
  },
  {
    "id": "F000466",
    "name": "Brian K. Fitzpatrick",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-01",
    "class": null,
    "isTerritory": false,
    "office": "271 Cannon House Office Building",
    "address": "271 Cannon House Office Building Washington DC 20515-3801",
    "phone": "202-225-4276",
    "fax": null,
    "website": "https://fitzpatrick.house.gov",
    "contactForm": "https://brianfitzpatrick.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000466-langhorne",
        "label": "Langhorne",
        "phone": "215-579-8102",
        "fax": "215-579-8109",
        "address": "1717 Langhorne Newtown Rd., Suite 225, Langhorne, PA, 19047"
      }
    ]
  },
  {
    "id": "B001296",
    "name": "Brendan F. Boyle",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-02",
    "class": null,
    "isTerritory": false,
    "office": "1502 Longworth House Office Building",
    "address": "1502 Longworth House Office Building Washington DC 20515-3802",
    "phone": "202-225-6111",
    "fax": null,
    "website": "https://boyle.house.gov",
    "contactForm": "https://boyle.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001296-philadelphia",
        "label": "Philadelphia",
        "phone": "267-335-5643",
        "fax": "267-437-3886",
        "address": "5675 N. Front St., Suite 180, One & Olney Shopping Center, Philadelphia, PA, 19120"
      },
      {
        "id": "B001296-philadelphia-1",
        "label": "Philadelphia",
        "phone": "215-335-3355",
        "fax": "215-856-3734",
        "address": "8572 Bustleton Ave., Philadelphia, PA, 19152"
      },
      {
        "id": "B001296-philadelphia-2",
        "label": "Philadelphia",
        "phone": "215-982-1156",
        "fax": "267-639-9944",
        "address": "1318 West Girard Avenue, Philadelphia, PA, 19123"
      }
    ]
  },
  {
    "id": "E000296",
    "name": "Dwight Evans",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-03",
    "class": null,
    "isTerritory": false,
    "office": "1105 Longworth House Office Building",
    "address": "1105 Longworth House Office Building Washington DC 20515-3803",
    "phone": "202-225-4001",
    "fax": null,
    "website": "https://evans.house.gov",
    "contactForm": "https://evans.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000296-philadelphia",
        "label": "Philadelphia",
        "phone": "215-276-0340",
        "fax": "215-276-2939",
        "address": "7174 Ogontz Ave., Philadelphia, PA, 19138"
      },
      {
        "id": "E000296-philadelphia-1",
        "label": "Philadelphia",
        "phone": "215-254-3400",
        "fax": "771-200-5094",
        "address": "1310 Point Breeze Ave, Philadelphia, PA, 19146"
      }
    ]
  },
  {
    "id": "D000631",
    "name": "Madeleine Dean",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-04",
    "class": null,
    "isTerritory": false,
    "office": "150 Cannon House Office Building",
    "address": "150 Cannon House Office Building Washington DC 20515-3804",
    "phone": "202-225-4731",
    "fax": null,
    "website": "https://dean.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000631-glenside",
        "label": "Glenside",
        "phone": "215-884-4300",
        "fax": "215-884-3640",
        "address": "115 E Glenside Ave, Suite 1, Glenside, PA, 19038-4618"
      },
      {
        "id": "D000631-pottstown",
        "label": "Pottstown",
        "phone": "610-382-1250",
        "fax": null,
        "address": "1200 E. High Street, Suite 105, Pottstown, PA, 19464"
      }
    ]
  },
  {
    "id": "S001205",
    "name": "Mary Gay Scanlon",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-05",
    "class": null,
    "isTerritory": false,
    "office": "1214 Longworth House Office Building",
    "address": "1214 Longworth House Office Building Washington DC 20515-3805",
    "phone": "202-225-2011",
    "fax": null,
    "website": "https://scanlon.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001205-chester",
        "label": "Chester",
        "phone": "610-626-2020",
        "fax": null,
        "address": "2501 Seaport Drive, BH230, Chester, PA, 19013"
      }
    ]
  },
  {
    "id": "H001085",
    "name": "Chrissy Houlahan",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-06",
    "class": null,
    "isTerritory": false,
    "office": "1727 Longworth House Office Building",
    "address": "1727 Longworth House Office Building Washington DC 20515-3806",
    "phone": "202-225-4315",
    "fax": null,
    "website": "https://houlahan.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001085-reading",
        "label": "Reading",
        "phone": "610-295-0815",
        "fax": null,
        "address": "201 Penn Street, Suite 201, Reading, PA, 19601"
      },
      {
        "id": "H001085-west_chester",
        "label": "West Chester",
        "phone": "610-883-5050",
        "fax": null,
        "address": "709 E. Gay Street, Suite 4, West Chester, PA, 19380"
      }
    ]
  },
  {
    "id": "M001230",
    "name": "Ryan Mackenzie",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-07",
    "class": null,
    "isTerritory": false,
    "office": "121 Cannon House Office Building",
    "address": "121 Cannon House Office Building Washington DC 20515-3807",
    "phone": "202-225-6411",
    "fax": null,
    "website": "https://mackenzie.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001230-allentown",
        "label": "Allentown",
        "phone": "484-781-6000",
        "fax": null,
        "address": "1125 S Cedar Crest Blvd, Suite 109 (Bottom Floor), Allentown, PA, 18103"
      },
      {
        "id": "M001230-allentown-1",
        "label": "Allentown",
        "phone": "484-781-6932",
        "fax": null,
        "address": "840 W Hamilton St., Suite 201, Allentown, PA, 18101"
      },
      {
        "id": "M001230-bethlehem",
        "label": "Bethlehem",
        "phone": null,
        "fax": null,
        "address": "2151 Emrick Blvd., Suite 204, Bethlehem, PA, 18020"
      },
      {
        "id": "M001230-lehighton",
        "label": "Lehighton",
        "phone": "570-807-0333",
        "fax": null,
        "address": "1163 Interchange Rd, Suite C, Lehighton, PA, 18235"
      }
    ]
  },
  {
    "id": "B001327",
    "name": "Robert P. Bresnahan, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-08",
    "class": null,
    "isTerritory": false,
    "office": "1133 Longworth House Office Building",
    "address": "1133 Longworth House Office Building Washington DC 20515-3808",
    "phone": "202-225-5546",
    "fax": null,
    "website": "https://bresnahan.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001327-forty_fort",
        "label": "Forty-Fort",
        "phone": "570-763-6120",
        "fax": null,
        "address": "900 Rutter Ave, 1st Floor, Suite C, Bldg. B, Forty-Fort, PA, 18704"
      },
      {
        "id": "B001327-hazleton",
        "label": "Hazleton",
        "phone": "570-710-6830",
        "fax": null,
        "address": "145 E Broad St, Suite 3, Hazleton, PA, 18201"
      },
      {
        "id": "B001327-scotrun",
        "label": "Scotrun",
        "phone": "570-534-6220",
        "fax": null,
        "address": "2398 Rt 611, Suite 101, Scotrun, PA, 18355"
      },
      {
        "id": "B001327-scranton",
        "label": "Scranton",
        "phone": "570-906-6850",
        "fax": null,
        "address": "116 North Washington Ave, Suite 101, Scranton, PA, 18503"
      }
    ]
  },
  {
    "id": "M001204",
    "name": "Daniel Meuser",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-09",
    "class": null,
    "isTerritory": false,
    "office": "350 Cannon House Office Building",
    "address": "350 Cannon House Office Building Washington DC 20515-3809",
    "phone": "202-225-6511",
    "fax": null,
    "website": "https://meuser.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001204-berwick",
        "label": "Berwick",
        "phone": "570-871-6370",
        "fax": null,
        "address": "134 W Front Street, Suite 102, Office of Rep. Robert Leadbeter, Berwick, PA, 18603"
      },
      {
        "id": "M001204-bloomsburg",
        "label": "Bloomsburg",
        "phone": "570-871-6370",
        "fax": null,
        "address": "1000 Market Street, Suite 39, Office of Rep. Robert Leadbeter, Market Street Plaza, Bloomsburg, PA, 17815"
      },
      {
        "id": "M001204-hamburg",
        "label": "Hamburg",
        "phone": "610-428-0869",
        "fax": null,
        "address": "61 N 3rd St, 2nd floor, Hamburg Municipal Center, Hamburg, PA, 19526"
      },
      {
        "id": "M001204-lebanon",
        "label": "Lebanon",
        "phone": "717-603-1459",
        "fax": null,
        "address": "400 S 8th St, Lebanon County Courthouse, Lebanon, PA, 17042"
      },
      {
        "id": "M001204-pottsville",
        "label": "Pottsville",
        "phone": "570-871-6370",
        "fax": null,
        "address": "121 Progress Ave, Suite 110, Losch Plaza, Pottsville, PA, 17901-2968"
      },
      {
        "id": "M001204-tunkhannock",
        "label": "Tunkhannock",
        "phone": "570-665-3083",
        "fax": null,
        "address": "511 Mile Road, Tunkhannock, PA, 18657"
      },
      {
        "id": "M001204-williamsport",
        "label": "Williamsport",
        "phone": "570-202-0658",
        "fax": null,
        "address": "330 Pine Street, 1st Floor, Executive Plaza, Williamsport, PA, 17701"
      }
    ]
  },
  {
    "id": "P000605",
    "name": "Scott Perry",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-10",
    "class": null,
    "isTerritory": false,
    "office": "2160 Rayburn House Office Building",
    "address": "2160 Rayburn House Office Building Washington DC 20515-3810",
    "phone": "202-225-5836",
    "fax": null,
    "website": "https://perry.house.gov",
    "contactForm": "http://perry.house.gov/forms/writeyourrep/default.aspx",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000605-harrisburg",
        "label": "Harrisburg",
        "phone": "717-603-4980",
        "fax": null,
        "address": "800 Corporate Cir, Suite 202, Harrisburg, PA, 17110-9346"
      },
      {
        "id": "P000605-mechanicsburg",
        "label": "Mechanicsburg",
        "phone": "717-550-6565",
        "fax": null,
        "address": "4999 Louise Drive, Suite 205, Mechanicsburg, PA, 17055"
      },
      {
        "id": "P000605-york",
        "label": "York",
        "phone": "717-893-7868",
        "fax": null,
        "address": "2501 Catherine Street, Suite 11, York, PA, 17408"
      }
    ]
  },
  {
    "id": "S001199",
    "name": "Lloyd Smucker",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-11",
    "class": null,
    "isTerritory": false,
    "office": "302 Cannon House Office Building",
    "address": "302 Cannon House Office Building Washington DC 20515-3811",
    "phone": "202-225-2411",
    "fax": null,
    "website": "https://smucker.house.gov",
    "contactForm": "https://smucker.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001199-hanover",
        "label": "Hanover",
        "phone": "717-969-6132",
        "fax": null,
        "address": "118 Carlisle Street, Hanover, PA, 17331"
      },
      {
        "id": "S001199-lancaster",
        "label": "Lancaster",
        "phone": "717-393-0667",
        "fax": "717-393-0924",
        "address": "2270 Erin Court, Lancaster, PA, 17601"
      },
      {
        "id": "S001199-red_lion",
        "label": "Red Lion",
        "phone": "717-969-6133",
        "fax": null,
        "address": "100 Redco Ave, Red Lion, PA, 17356-1436"
      }
    ]
  },
  {
    "id": "L000602",
    "name": "Summer L. Lee",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-12",
    "class": null,
    "isTerritory": false,
    "office": "2437 Rayburn House Office Building",
    "address": "2437 Rayburn House Office Building Washington DC 20515-3812",
    "phone": "202-225-2135",
    "fax": null,
    "website": "https://summerlee.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000602-bethel_park",
        "label": "Bethel Park",
        "phone": "412-214-5000",
        "fax": null,
        "address": "5100 W Library Ave, Bethel Park, PA, 15102"
      },
      {
        "id": "L000602-clairton",
        "label": "Clairton",
        "phone": "412-214-5000",
        "fax": null,
        "address": "551 Ravensburg Boulevard, Clairton, PA, 15025"
      },
      {
        "id": "L000602-jeannette",
        "label": "Jeannette",
        "phone": "412-214-5000",
        "fax": null,
        "address": "110 S 2nd Street, Jeannette, PA, 15644"
      },
      {
        "id": "L000602-pittsburgh",
        "label": "Pittsburgh",
        "phone": "412-214-5000",
        "fax": "771-200-5826",
        "address": "211 N Whitfield St., Suite 802, Pittsburgh, PA, 15206"
      },
      {
        "id": "L000602-pittsburgh-1",
        "label": "Pittsburgh",
        "phone": "412-412-5000",
        "fax": null,
        "address": "1555 Broadway Avenue, 2nd Floor, Pittsburgh, PA, 15216"
      }
    ]
  },
  {
    "id": "J000302",
    "name": "John Joyce",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-13",
    "class": null,
    "isTerritory": false,
    "office": "2102 Rayburn House Office Building",
    "address": "2102 Rayburn House Office Building Washington DC 20515-3813",
    "phone": "202-225-2431",
    "fax": null,
    "website": "https://johnjoyce.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000302-abbottstown",
        "label": "Abbottstown",
        "phone": "717-357-6320",
        "fax": null,
        "address": "282 West King St., Abbottstown, PA, 17301"
      },
      {
        "id": "J000302-altoona",
        "label": "Altoona",
        "phone": "814-656-6081",
        "fax": null,
        "address": "5414 6th Ave, Altoona, PA, 16602-1203"
      },
      {
        "id": "J000302-chambersburg",
        "label": "Chambersburg",
        "phone": "717-753-6344",
        "fax": null,
        "address": "100 Lincoln Way E, Suite B, Chambersburg, PA, 17201-2291"
      },
      {
        "id": "J000302-ebensburg",
        "label": "Ebensburg",
        "phone": "814-485-6020",
        "fax": null,
        "address": "300 W. High Street, Ebensburg, PA, 15931"
      },
      {
        "id": "J000302-johnstown",
        "label": "Johnstown",
        "phone": "814-485-6020",
        "fax": null,
        "address": "1021 Ferndale Ave., Johnstown, PA, 15905"
      },
      {
        "id": "J000302-lewistown",
        "label": "Lewistown",
        "phone": "717-357-6320",
        "fax": null,
        "address": "3 West Monument Square, Suite 201B, Lewistown, PA, 17044"
      }
    ]
  },
  {
    "id": "R000610",
    "name": "Guy Reschenthaler",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-14",
    "class": null,
    "isTerritory": false,
    "office": "2209 Rayburn House Office Building",
    "address": "2209 Rayburn House Office Building Washington DC 20515-3814",
    "phone": "202-225-2065",
    "fax": null,
    "website": "https://reschenthaler.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000610-latrobe",
        "label": "Latrobe",
        "phone": "724-219-4200",
        "fax": null,
        "address": "5856 Route 981, Latrobe, PA, 15650"
      },
      {
        "id": "R000610-washington",
        "label": "Washington",
        "phone": "724-206-4800",
        "fax": null,
        "address": "14 South Main St., Washington, PA, 15301"
      }
    ]
  },
  {
    "id": "T000467",
    "name": "Glenn Thompson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-15",
    "class": null,
    "isTerritory": false,
    "office": "400 Cannon House Office Building",
    "address": "400 Cannon House Office Building Washington DC 20515-3815",
    "phone": "202-225-5121",
    "fax": null,
    "website": "https://thompson.house.gov",
    "contactForm": "https://thompson.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000467-bellefonte",
        "label": "Bellefonte",
        "phone": "814-353-0215",
        "fax": "814-353-0218",
        "address": "3555 Benner Pike., Suite 101, Bellefonte, PA, 16823"
      },
      {
        "id": "T000467-oil_city",
        "label": "Oil City",
        "phone": "814-670-0432",
        "fax": "814-670-0868",
        "address": "217 Elm St, B, Oil City, PA, 16301-1412"
      }
    ]
  },
  {
    "id": "K000376",
    "name": "Mike Kelly",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-16",
    "class": null,
    "isTerritory": false,
    "office": "1707 Longworth House Office Building",
    "address": "1707 Longworth House Office Building Washington DC 20515-3816",
    "phone": "202-225-5406",
    "fax": null,
    "website": "https://kelly.house.gov",
    "contactForm": "https://kelly.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000376-butler",
        "label": "Butler",
        "phone": "724-282-2557",
        "fax": "724-282-3682",
        "address": "245 Pittsburgh Road, Suite 300, Butler, PA, 16001"
      },
      {
        "id": "K000376-erie",
        "label": "Erie",
        "phone": "814-454-8190",
        "fax": "814-454-8197",
        "address": "17 S. Park Row, Suite A430, Erie, PA, 16501"
      },
      {
        "id": "K000376-sharon",
        "label": "Sharon",
        "phone": "724-342-7170",
        "fax": "724-342-7242",
        "address": "33 Chestnut Ave., Sharon, PA, 16146"
      }
    ]
  },
  {
    "id": "D000530",
    "name": "Christopher R. Deluzio",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": "PA-17",
    "class": null,
    "isTerritory": false,
    "office": "1222 Longworth House Office Building",
    "address": "1222 Longworth House Office Building Washington DC 20515-3817",
    "phone": "202-225-2301",
    "fax": null,
    "website": "https://deluzio.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000530-carnegie",
        "label": "Carnegie",
        "phone": "412-344-5583",
        "fax": null,
        "address": "600 N Bell Avenue, Suite 102, Carnegie Office Park, Building 1, Carnegie, PA, 15106"
      },
      {
        "id": "D000530-monaca",
        "label": "Monaca",
        "phone": "724-206-4860",
        "fax": null,
        "address": "3468 Brodhead Road, Suite 1, Monaca, PA, 15061"
      },
      {
        "id": "D000530-penn_hills",
        "label": "Penn Hills",
        "phone": "412-344-5583",
        "fax": null,
        "address": "77 Universal Rd, Suite 1, Penn Hills, PA, 15235"
      }
    ]
  },
  {
    "id": "H001103",
    "name": "Pablo José Hernández",
    "chamber": "House",
    "role": "Delegate",
    "party": "D",
    "partyName": "Democrat",
    "state": "PR",
    "stateName": "Puerto Rico",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": true,
    "office": "1419 Longworth House Office Building",
    "address": "1419 Longworth House Office Building Washington DC 20515-5401",
    "phone": "202-225-2615",
    "fax": null,
    "website": "https://hernandez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001103-caguas",
        "label": "Caguas",
        "phone": "787-230-7959",
        "fax": null,
        "address": "Centro de Bellas Artes, Calle Padial, esquina Calle Ruiz Belvis, Caguas, PR, 00725"
      }
    ]
  },
  {
    "id": "A000380",
    "name": "Gabe Amo",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "RI",
    "stateName": "Rhode Island",
    "district": "RI-01",
    "class": null,
    "isTerritory": false,
    "office": "1119 Longworth House Office Building",
    "address": "1119 Longworth House Office Building Washington DC 20515-3901",
    "phone": "202-225-4911",
    "fax": null,
    "website": "https://amo.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000380-pawtucket",
        "label": "Pawtucket",
        "phone": "401-729-5600",
        "fax": "401-729-5608",
        "address": "1070 Main Street, Suite 300, Pawtucket, RI, 02860"
      }
    ]
  },
  {
    "id": "M001223",
    "name": "Seth Magaziner",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "RI",
    "stateName": "Rhode Island",
    "district": "RI-02",
    "class": null,
    "isTerritory": false,
    "office": "252 Cannon House Office Building",
    "address": "252 Cannon House Office Building Washington DC 20515-3902",
    "phone": "202-225-2735",
    "fax": null,
    "website": "https://magaziner.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001223-warwick",
        "label": "Warwick",
        "phone": "401-244-1201",
        "fax": null,
        "address": "935 Jefferson Blvd., Suite 3003, Warwick, RI, 02886"
      }
    ]
  },
  {
    "id": "M000194",
    "name": "Nancy Mace",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "SC",
    "stateName": "South Carolina",
    "district": "SC-01",
    "class": null,
    "isTerritory": false,
    "office": "1728 Longworth House Office Building",
    "address": "1728 Longworth House Office Building Washington DC 20515-4001",
    "phone": "202-225-3176",
    "fax": null,
    "website": "https://mace.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M000194-beaufort",
        "label": "Beaufort",
        "phone": "843-521-2530",
        "fax": null,
        "address": "710 Boundary St., Beaufort, SC, 29902"
      },
      {
        "id": "M000194-daniel_island",
        "label": "Daniel Island",
        "phone": "843-352-7572",
        "fax": null,
        "address": "900 Island Park Dr., Suite 260, Daniel Island, SC, 29492"
      }
    ]
  },
  {
    "id": "W000795",
    "name": "Joe Wilson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "SC",
    "stateName": "South Carolina",
    "district": "SC-02",
    "class": null,
    "isTerritory": false,
    "office": "1436 Longworth House Office Building",
    "address": "1436 Longworth House Office Building Washington DC 20515-4002",
    "phone": "202-225-2452",
    "fax": null,
    "website": "https://joewilson.house.gov",
    "contactForm": "https://joewilson.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000795-aiken",
        "label": "Aiken",
        "phone": "803-642-6416",
        "fax": "803-642-6418",
        "address": "1930 University Parkway, Suite 1600, Aiken, SC, 29801"
      },
      {
        "id": "W000795-west_columbia",
        "label": "West Columbia",
        "phone": "803-939-0041",
        "fax": "803-939-0078",
        "address": "1700 Sunset Blvd. (US 378), Suite 1, West Columbia, SC, 29169"
      }
    ]
  },
  {
    "id": "B001325",
    "name": "Sheri Biggs",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "SC",
    "stateName": "South Carolina",
    "district": "SC-03",
    "class": null,
    "isTerritory": false,
    "office": "1530 Longworth House Office Building",
    "address": "1530 Longworth House Office Building Washington DC 20515-4003",
    "phone": "202-225-5301",
    "fax": null,
    "website": "https://sheribiggs.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001325-anderson",
        "label": "Anderson",
        "phone": "864-224-7401",
        "fax": null,
        "address": "303 West Beltline Blvd, Anderson, SC, 29625"
      }
    ]
  },
  {
    "id": "T000480",
    "name": "William R. Timmons IV",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "SC",
    "stateName": "South Carolina",
    "district": "SC-04",
    "class": null,
    "isTerritory": false,
    "office": "267 Cannon House Office Building",
    "address": "267 Cannon House Office Building Washington DC 20515-4004",
    "phone": "202-225-6030",
    "fax": null,
    "website": "https://timmons.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000480-greer",
        "label": "Greer",
        "phone": "864-241-0175",
        "fax": null,
        "address": "114 Trade Street, Greer, SC, 29651"
      }
    ]
  },
  {
    "id": "N000190",
    "name": "Ralph Norman",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "SC",
    "stateName": "South Carolina",
    "district": "SC-05",
    "class": null,
    "isTerritory": false,
    "office": "569 Cannon House Office Building",
    "address": "569 Cannon House Office Building Washington DC 20515-4005",
    "phone": "202-225-5501",
    "fax": null,
    "website": "https://norman.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000190-rock_hill",
        "label": "Rock Hill",
        "phone": "803-327-1114",
        "fax": "803-327-4330",
        "address": "516 Oakland Ave, Rock Hill, SC, 29730"
      }
    ]
  },
  {
    "id": "C000537",
    "name": "James E. Clyburn",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "SC",
    "stateName": "South Carolina",
    "district": "SC-06",
    "class": null,
    "isTerritory": false,
    "office": "274 Cannon House Office Building",
    "address": "274 Cannon House Office Building Washington DC 20515-4006",
    "phone": "202-225-3315",
    "fax": null,
    "website": "https://clyburn.house.gov",
    "contactForm": "https://clyburn.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C000537-columbia",
        "label": "Columbia",
        "phone": "803-799-1100",
        "fax": "803-799-9060",
        "address": "1225 Lady St., Suite 200, Columbia, SC, 29201"
      },
      {
        "id": "C000537-kingstree",
        "label": "Kingstree",
        "phone": "843-355-1211",
        "fax": "843-355-1232",
        "address": "130 W. Main St., Kingstree, SC, 29556"
      },
      {
        "id": "C000537-santee",
        "label": "Santee",
        "phone": "803-854-4700",
        "fax": "803-854-4900",
        "address": "176 Municipal Way, Santee, SC, 29142"
      },
      {
        "id": "C000537-sumter",
        "label": "Sumter",
        "phone": "803-883-5020",
        "fax": null,
        "address": "129 South Harvin Street, Sumter, SC, 29150"
      }
    ]
  },
  {
    "id": "F000478",
    "name": "Russell Fry",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "SC",
    "stateName": "South Carolina",
    "district": "SC-07",
    "class": null,
    "isTerritory": false,
    "office": "345 Cannon House Office Building",
    "address": "345 Cannon House Office Building Washington DC 20515-4007",
    "phone": "202-225-9895",
    "fax": null,
    "website": "https://fry.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000478-florence",
        "label": "Florence",
        "phone": "843-799-6880",
        "fax": null,
        "address": "1831 West Evans Street, Suite 300, Florence, SC, 29501"
      },
      {
        "id": "F000478-surfside_beach",
        "label": "Surfside Beach",
        "phone": "843-353-5377",
        "fax": null,
        "address": "1500 Hwy 17 N, Suite 304, Surfside Beach, SC, 29575"
      }
    ]
  },
  {
    "id": "J000301",
    "name": "Dusty Johnson",
    "chamber": "House",
    "role": "Delegate",
    "party": "R",
    "partyName": "Republican",
    "state": "SD",
    "stateName": "South Dakota",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": false,
    "office": "1714 Longworth House Office Building",
    "address": "1714 Longworth House Office Building Washington DC 20515-4100",
    "phone": "202-225-2801",
    "fax": null,
    "website": "https://dustyjohnson.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000301-aberdeen",
        "label": "Aberdeen",
        "phone": "605-622-1060",
        "fax": null,
        "address": "115 4th Ave SE, Suite 107A, Aberdeen, SD, 57401"
      },
      {
        "id": "J000301-rapid_city",
        "label": "Rapid City",
        "phone": "605-646-6454",
        "fax": null,
        "address": "2525 W Main St, Suite 310, Rapid City, SD, 57702-0901"
      },
      {
        "id": "J000301-sioux_falls",
        "label": "Sioux Falls",
        "phone": "605-275-2868",
        "fax": null,
        "address": "230 S Phillips Avenue, Suite 307, Sioux Falls, SD, 57104"
      }
    ]
  },
  {
    "id": "H001086",
    "name": "Diana Harshbarger",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-01",
    "class": null,
    "isTerritory": false,
    "office": "167 Cannon House Office Building",
    "address": "167 Cannon House Office Building Washington DC 20515-4201",
    "phone": "202-225-6356",
    "fax": null,
    "website": "https://harshbarger.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001086-kingsport",
        "label": "Kingsport",
        "phone": "423-398-5186",
        "fax": "423-398-5312",
        "address": "205 Revere Street, Kingsport, TN, 37660"
      },
      {
        "id": "H001086-morristown",
        "label": "Morristown",
        "phone": "423-254-1400",
        "fax": "423-254-1403",
        "address": "1501 E. Morris Blvd., Suite 12, Morristown, TN, 37813"
      }
    ]
  },
  {
    "id": "B001309",
    "name": "Tim Burchett",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-02",
    "class": null,
    "isTerritory": false,
    "office": "1122 Longworth House Office Building",
    "address": "1122 Longworth House Office Building Washington DC 20515-4202",
    "phone": "202-225-5435",
    "fax": null,
    "website": "https://burchett.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001309-knoxville",
        "label": "Knoxville",
        "phone": "865-523-3772",
        "fax": null,
        "address": "800 Market St, Suite 110, Knoxville, TN, 37902-2327"
      },
      {
        "id": "B001309-maryville",
        "label": "Maryville",
        "phone": "865-984-5464",
        "fax": null,
        "address": "331 Court Street, Maryville, TN, 37804"
      }
    ]
  },
  {
    "id": "F000459",
    "name": "Charles J. \"Chuck\" Fleischmann",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-03",
    "class": null,
    "isTerritory": false,
    "office": "2187 Rayburn House Office Building",
    "address": "2187 Rayburn House Office Building Washington DC 20515-4203",
    "phone": "202-225-3271",
    "fax": null,
    "website": "https://fleischmann.house.gov",
    "contactForm": "https://fleischmann.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000459-athens",
        "label": "Athens",
        "phone": "423-745-4671",
        "fax": "423-745-6025",
        "address": "6 E. Madison Ave., Athens, TN, 37303"
      },
      {
        "id": "F000459-chattanooga",
        "label": "Chattanooga",
        "phone": "423-756-2342",
        "fax": "423-756-6613",
        "address": "900 Georgia Ave., Suite 126, Chattanooga, TN, 37402"
      },
      {
        "id": "F000459-oak_ridge",
        "label": "Oak Ridge",
        "phone": "865-576-1976",
        "fax": "865-576-3221",
        "address": "200 Administration Rd., Suite 100, Oak Ridge, TN, 37830"
      }
    ]
  },
  {
    "id": "D000616",
    "name": "Scott DesJarlais",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-04",
    "class": null,
    "isTerritory": false,
    "office": "2304 Rayburn House Office Building",
    "address": "2304 Rayburn House Office Building Washington DC 20515-4204",
    "phone": "202-225-6831",
    "fax": null,
    "website": "https://desjarlais.house.gov",
    "contactForm": "http://desjarlais.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000616-murfreesboro",
        "label": "Murfreesboro",
        "phone": "615-896-1986",
        "fax": "615-896-8218",
        "address": "1500 Medical Center Parkway, Murfreesboro, TN, 37129"
      },
      {
        "id": "D000616-winchester",
        "label": "Winchester",
        "phone": "931-962-3180",
        "fax": "931-962-3435",
        "address": "200 S. Jefferson St., Suite 311, Federal Building, Winchester, TN, 37398"
      }
    ]
  },
  {
    "id": "O000175",
    "name": "Andrew Ogles",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-05",
    "class": null,
    "isTerritory": false,
    "office": "151 Cannon House Office Building",
    "address": "151 Cannon House Office Building Washington DC 20515-4205",
    "phone": "202-225-4311",
    "fax": null,
    "website": "https://ogles.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "O000175-columbia",
        "label": "Columbia",
        "phone": "931-777-2140",
        "fax": null,
        "address": "22 Public Square, Suite 5, Columbia, TN, 38401"
      }
    ]
  },
  {
    "id": "R000612",
    "name": "John W. Rose",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-06",
    "class": null,
    "isTerritory": false,
    "office": "2238 Rayburn House Office Building",
    "address": "2238 Rayburn House Office Building Washington DC 20515-4206",
    "phone": "202-225-4231",
    "fax": null,
    "website": "https://johnrose.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000612-cookeville",
        "label": "Cookeville",
        "phone": "931-854-9430",
        "fax": "615-206-8980",
        "address": "321 East Spring Street, Suite 306, Cookeville, TN, 38501"
      },
      {
        "id": "R000612-gallatin",
        "label": "Gallatin",
        "phone": "615-206-8204",
        "fax": "615-206-8980",
        "address": "355 N Belvedere Dr, Suite 308, Gallatin, TN, 37066-5466"
      }
    ]
  },
  {
    "id": "V000139",
    "name": "Matt Van Epps",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-07",
    "class": null,
    "isTerritory": false,
    "office": "2446 Rayburn House Office Building",
    "address": "2446 Rayburn House Office Building Washington DC 20515-4207",
    "phone": "202-225-2811",
    "fax": null,
    "website": "https://vanepps.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000139-clarksville",
        "label": "Clarksville",
        "phone": "931-266-4483",
        "fax": null,
        "address": "128 N Second St, Suite 104, Clarksville, TN, 37040"
      },
      {
        "id": "V000139-franklin",
        "label": "Franklin",
        "phone": "629-223-6050",
        "fax": null,
        "address": "305 Public Square, Suite 212, Franklin, TN, 37064"
      },
      {
        "id": "V000139-nashville",
        "label": "Nashville",
        "phone": "629-999-4950",
        "fax": null,
        "address": "801 Broadway, Suite C 507, Nashville, TN, 37203"
      }
    ]
  },
  {
    "id": "K000392",
    "name": "David Kustoff",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-08",
    "class": null,
    "isTerritory": false,
    "office": "560 Cannon House Office Building",
    "address": "560 Cannon House Office Building Washington DC 20515-4208",
    "phone": "202-225-4714",
    "fax": null,
    "website": "https://kustoff.house.gov",
    "contactForm": "https://kustoff.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000392-jackson",
        "label": "Jackson",
        "phone": "731-423-4848",
        "fax": "731-427-1537",
        "address": "109 S. Highland Ave., B-7, Ed Jones Federal Building, Jackson, TN, 38301"
      },
      {
        "id": "K000392-martin",
        "label": "Martin",
        "phone": "731-412-1043",
        "fax": null,
        "address": "242 South Lindell Street, Martin, TN, 38237"
      },
      {
        "id": "K000392-memphis",
        "label": "Memphis",
        "phone": "901-682-4422",
        "fax": "901-682-8973",
        "address": "5900 Poplar Ave., Suite 202, Memphis, TN, 38119"
      }
    ]
  },
  {
    "id": "C001068",
    "name": "Steve Cohen",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TN",
    "stateName": "Tennessee",
    "district": "TN-09",
    "class": null,
    "isTerritory": false,
    "office": "2268 Rayburn House Office Building",
    "address": "2268 Rayburn House Office Building Washington DC 20515-4209",
    "phone": "202-225-3265",
    "fax": null,
    "website": "https://cohen.house.gov",
    "contactForm": "https://cohen.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001068-memphis",
        "label": "Memphis",
        "phone": "901-544-4131",
        "fax": "901-544-4329",
        "address": "167 N. Main St., Suite 369, The Odell Horton Federal Building, Memphis, TN, 38103"
      }
    ]
  },
  {
    "id": "M001224",
    "name": "Nathaniel Moran",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-01",
    "class": null,
    "isTerritory": false,
    "office": "1605 Longworth House Office Building",
    "address": "1605 Longworth House Office Building Washington DC 20515-4301",
    "phone": "202-225-3035",
    "fax": null,
    "website": "https://moran.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001224-longview",
        "label": "Longview",
        "phone": "903-561-6349",
        "fax": null,
        "address": "101 E Methvin, Suite 302, Longview, TX, 75601"
      },
      {
        "id": "M001224-marshall",
        "label": "Marshall",
        "phone": "903-561-6349",
        "fax": null,
        "address": "100 N. Bolivar., Suite 205, Marshall, TX, 75671"
      },
      {
        "id": "M001224-texarkana",
        "label": "Texarkana",
        "phone": "903-561-6349",
        "fax": null,
        "address": "2500 North Robison Rd., Suite 190, Texarkana, TX, 75501"
      },
      {
        "id": "M001224-tyler",
        "label": "Tyler",
        "phone": "903-561-6349",
        "fax": null,
        "address": "1121 ESE Loop 323, Suite 206, Tyler, TX, 75701"
      }
    ]
  },
  {
    "id": "C001120",
    "name": "Dan Crenshaw",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-02",
    "class": null,
    "isTerritory": false,
    "office": "248 Cannon House Office Building",
    "address": "248 Cannon House Office Building Washington DC 20515-4302",
    "phone": "202-225-6565",
    "fax": null,
    "website": "https://crenshaw.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001120-kingwood",
        "label": "Kingwood",
        "phone": "713-860-1330",
        "fax": null,
        "address": "1849 Kingwood Dr., #100, Kingwood, TX, 77339"
      },
      {
        "id": "C001120-the_woodlands",
        "label": "The Woodlands",
        "phone": "281-640-7720",
        "fax": null,
        "address": "2829 Technology Forest, #280, The Woodlands, TX, 77381"
      }
    ]
  },
  {
    "id": "S001224",
    "name": "Keith Self",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-03",
    "class": null,
    "isTerritory": false,
    "office": "1030 Longworth House Office Building",
    "address": "1030 Longworth House Office Building Washington DC 20515-4303",
    "phone": "202-225-4201",
    "fax": null,
    "website": "https://keithself.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001224-greenville",
        "label": "Greenville",
        "phone": "903-458-7037",
        "fax": null,
        "address": "2410 Lee Street, Suite 202, Greenville, TX, 75401"
      },
      {
        "id": "S001224-mckinney",
        "label": "Mckinney",
        "phone": "972-202-4150",
        "fax": null,
        "address": "4500 W. Eldorado Pkwy, Suite 3500, Mckinney, TX, 75070"
      }
    ]
  },
  {
    "id": "F000246",
    "name": "Pat Fallon",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-04",
    "class": null,
    "isTerritory": false,
    "office": "2416 Rayburn House Office Building",
    "address": "2416 Rayburn House Office Building Washington DC 20515-4304",
    "phone": "202-225-6673",
    "fax": null,
    "website": "https://fallon.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000246-frisco",
        "label": "Frisco",
        "phone": "202-913-4115",
        "fax": null,
        "address": "6101 Frisco Square Blvd, Frisco, TX, 75034"
      },
      {
        "id": "F000246-new_boston",
        "label": "New Boston",
        "phone": "903-716-7500",
        "fax": null,
        "address": "15 James Carlow Dr., New Boston, TX, 75570"
      },
      {
        "id": "F000246-rockwall",
        "label": "Rockwall",
        "phone": "972-771-0100",
        "fax": null,
        "address": "6531 Horizon Rd., Suite A, Rockwall, TX, 75032"
      },
      {
        "id": "F000246-sherman",
        "label": "Sherman",
        "phone": "903-820-5170",
        "fax": null,
        "address": "100 West Houston St., Suite 14, Sherman, TX, 75090"
      }
    ]
  },
  {
    "id": "G000589",
    "name": "Lance Gooden",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-05",
    "class": null,
    "isTerritory": false,
    "office": "2431 Rayburn House Office Building",
    "address": "2431 Rayburn House Office Building Washington DC 20515-4305",
    "phone": "202-225-3484",
    "fax": null,
    "website": "https://gooden.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000589-terrell",
        "label": "Terrell",
        "phone": "903-502-5300",
        "fax": null,
        "address": "201 W Nash St., #103, Terrell, TX, 75160"
      }
    ]
  },
  {
    "id": "E000071",
    "name": "Jake Ellzey",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-06",
    "class": null,
    "isTerritory": false,
    "office": "1721 Longworth House Office Building",
    "address": "1721 Longworth House Office Building Washington DC 20515-4306",
    "phone": "202-225-2002",
    "fax": null,
    "website": "https://ellzey.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000071-corsicana",
        "label": "Corsicana",
        "phone": "903-602-7860",
        "fax": null,
        "address": "122 N. Beaton St, Corsicana, TX, 75110"
      },
      {
        "id": "E000071-waxahachie",
        "label": "Waxahachie",
        "phone": "469-550-7150",
        "fax": null,
        "address": "2001 Bates Drive, Suite 100, Waxahachie, TX, 75167"
      }
    ]
  },
  {
    "id": "F000468",
    "name": "Lizzie Fletcher",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-07",
    "class": null,
    "isTerritory": false,
    "office": "2004 Rayburn House Office Building",
    "address": "2004 Rayburn House Office Building Washington DC 20515-4307",
    "phone": "202-225-2571",
    "fax": null,
    "website": "https://fletcher.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000468-houston",
        "label": "Houston",
        "phone": "713-353-8680",
        "fax": "713-353-8677",
        "address": "3700 Buffalo Speedway, Suite 610, Houston, TX, 77098"
      }
    ]
  },
  {
    "id": "L000603",
    "name": "Morgan Luttrell",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-08",
    "class": null,
    "isTerritory": false,
    "office": "444 Cannon House Office Building",
    "address": "444 Cannon House Office Building Washington DC 20515-4308",
    "phone": "202-225-4901",
    "fax": null,
    "website": "https://luttrell.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000603-magnolia",
        "label": "Magnolia",
        "phone": "281-305-7890",
        "fax": null,
        "address": "18230 FM 1488, Suite 308, Magnolia, TX, 77354"
      }
    ]
  },
  {
    "id": "G000553",
    "name": "Al Green",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-09",
    "class": null,
    "isTerritory": false,
    "office": "2347 Rayburn House Office Building",
    "address": "2347 Rayburn House Office Building Washington DC 20515-4309",
    "phone": "202-225-7508",
    "fax": null,
    "website": "https://algreen.house.gov",
    "contactForm": "https://algreen.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000553-houston",
        "label": "Houston",
        "phone": "713-383-9234",
        "fax": "713-383-9202",
        "address": "3003 South Loop West, Suite 460, Houston, TX, 77054"
      },
      {
        "id": "G000553-missouri_city",
        "label": "Missouri City",
        "phone": "713-383-9234",
        "fax": "713-383-9202",
        "address": "2440 Texas Parkway, Suite 115, Missouri City, TX, 77489"
      }
    ]
  },
  {
    "id": "M001157",
    "name": "Michael T. McCaul",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-10",
    "class": null,
    "isTerritory": false,
    "office": "2300 Rayburn House Office Building",
    "address": "2300 Rayburn House Office Building Washington DC 20515-4310",
    "phone": "202-225-2401",
    "fax": null,
    "website": "https://mccaul.house.gov",
    "contactForm": "https://mccaul.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001157-austin",
        "label": "Austin",
        "phone": "512-770-8929",
        "fax": "512-473-0514",
        "address": "11614 FM2244, Suite 160, Austin, TX, 78738"
      },
      {
        "id": "M001157-college_station",
        "label": "College Station",
        "phone": "979-431-6480",
        "fax": "979-431-5180",
        "address": "175 Century Square Drive, Suite 210, College Station, TX, 77840"
      }
    ]
  },
  {
    "id": "P000048",
    "name": "August Pfluger",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-11",
    "class": null,
    "isTerritory": false,
    "office": "2202 Rayburn House Office Building",
    "address": "2202 Rayburn House Office Building Washington DC 20515-4311",
    "phone": "202-225-3605",
    "fax": null,
    "website": "https://pfluger.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000048-brownwood",
        "label": "Brownwood",
        "phone": "325-646-1950",
        "fax": null,
        "address": "501 Center Ave., Brownwood, TX, 76801"
      },
      {
        "id": "P000048-killeen",
        "label": "Killeen",
        "phone": "254-669-6570",
        "fax": null,
        "address": "505 E Jasper Drive, Pratt Learning and Leadership, Killeen, TX, 76541"
      },
      {
        "id": "P000048-llano",
        "label": "Llano",
        "phone": "325-247-2826",
        "fax": null,
        "address": "104 W. Sandstone St., County Annex, Llano, TX, 78643"
      },
      {
        "id": "P000048-midland",
        "label": "Midland",
        "phone": "432-687-2390",
        "fax": null,
        "address": "6 Desta Drive, Suite 2000, Midland, TX, 79705"
      },
      {
        "id": "P000048-odessa",
        "label": "Odessa",
        "phone": "432-331-9667",
        "fax": null,
        "address": "1010 E 8th St., Ector County Courthouse, Administration Building, Odessa, TX, 79761"
      },
      {
        "id": "P000048-san_angelo",
        "label": "San Angelo",
        "phone": "325-659-4010",
        "fax": null,
        "address": "135 West Twohig Avenue, B, San Angelo, TX, 76903"
      }
    ]
  },
  {
    "id": "G000601",
    "name": "Craig A. Goldman",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-12",
    "class": null,
    "isTerritory": false,
    "office": "1716 Longworth House Office Building",
    "address": "1716 Longworth House Office Building Washington DC 20515-4312",
    "phone": "202-225-5071",
    "fax": null,
    "website": "https://craiggoldman.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000601-fort_worth",
        "label": "Fort Worth",
        "phone": "817-806-9474",
        "fax": null,
        "address": "306 West Seventh St, Suite 1145, Fort Worth, TX, 76102"
      }
    ]
  },
  {
    "id": "J000304",
    "name": "Ronny Jackson",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-13",
    "class": null,
    "isTerritory": false,
    "office": "125 Cannon House Office Building",
    "address": "125 Cannon House Office Building Washington DC 20515-4313",
    "phone": "202-225-3706",
    "fax": null,
    "website": "https://jackson.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000304-amarillo",
        "label": "Amarillo",
        "phone": "806-641-5600",
        "fax": null,
        "address": "620 South Taylor St., Suite 200, Amarillo, TX, 79101"
      },
      {
        "id": "J000304-denton",
        "label": "Denton",
        "phone": "940-334-2030",
        "fax": null,
        "address": "110 W. Hickory Street, Suite 303, Denton, TX, 76201"
      },
      {
        "id": "J000304-wichita_falls",
        "label": "Wichita Falls",
        "phone": "940-285-8000",
        "fax": null,
        "address": "2525 Kell Blvd., Suite 406, Wichita Falls, TX, 76308"
      }
    ]
  },
  {
    "id": "W000814",
    "name": "Randy K. Weber, Sr.",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-14",
    "class": null,
    "isTerritory": false,
    "office": "107 Cannon House Office Building",
    "address": "107 Cannon House Office Building Washington DC 20515-4314",
    "phone": "202-225-2831",
    "fax": null,
    "website": "https://weber.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000814-beaumont",
        "label": "Beaumont",
        "phone": "409-835-0108",
        "fax": "409-835-0578",
        "address": "350 Pine St., Suite 1450, Beaumont Office, Beaumont, TX, 77701"
      },
      {
        "id": "W000814-lake_jackson",
        "label": "Lake Jackson",
        "phone": "979-285-0231",
        "fax": "979-285-0271",
        "address": "122 West Way, Suite 301, Lake Jackson, TX, 77566"
      },
      {
        "id": "W000814-league_city",
        "label": "League City",
        "phone": "281-316-0231",
        "fax": "281-316-0271",
        "address": "174 Calder Drive, Suite 600, League City Office, League City, TX, 77573"
      }
    ]
  },
  {
    "id": "D000594",
    "name": "Monica De La Cruz",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-15",
    "class": null,
    "isTerritory": false,
    "office": "1415 Longworth House Office Building",
    "address": "1415 Longworth House Office Building Washington DC 20515-4315",
    "phone": "202-225-9901",
    "fax": null,
    "website": "https://delacruz.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000594-alice",
        "label": "Alice",
        "phone": "956-800-6069",
        "fax": null,
        "address": "500 E Main St, Alice Public Works Department, Alice, TX, 78332"
      },
      {
        "id": "D000594-falfurrias",
        "label": "Falfurrias",
        "phone": "956-800-6069",
        "fax": null,
        "address": "203 S Calixto Mora Ave, Ed Rachal Public Library, Falfurrias, TX, 78355"
      },
      {
        "id": "D000594-floresville",
        "label": "Floresville",
        "phone": "956-800-6069",
        "fax": null,
        "address": "1103 4th St, Sam Fore, Jr. Wilson County Public Library, Floresville, TX, 78114"
      },
      {
        "id": "D000594-george_west",
        "label": "George West",
        "phone": "830-463-0800",
        "fax": null,
        "address": "402 Houston St, George West Library, George West, TX, 78022"
      },
      {
        "id": "D000594-karnes_city",
        "label": "Karnes City",
        "phone": "830-463-0800",
        "fax": null,
        "address": "210 W Calvert Ave, #120, Karnes County Annex Building, Karnes City, TX, 78118"
      },
      {
        "id": "D000594-mcallen",
        "label": "McAllen",
        "phone": "956-800-6069",
        "fax": null,
        "address": "1400 N McColl Rd, Ste 103, Commerce Center West Building, McAllen, TX, 78504"
      },
      {
        "id": "D000594-seguin",
        "label": "Seguin",
        "phone": "830-463-0800",
        "fax": null,
        "address": "112 N Travis St, Seguin, TX, 78155"
      },
      {
        "id": "D000594-three_rivers",
        "label": "Three Rivers",
        "phone": "830-463-0800",
        "fax": null,
        "address": "102 Leroy St, Three Rivers Library, Three Rivers, TX, 78071"
      }
    ]
  },
  {
    "id": "E000299",
    "name": "Veronica Escobar",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-16",
    "class": null,
    "isTerritory": false,
    "office": "2448 Rayburn House Office Building",
    "address": "2448 Rayburn House Office Building Washington DC 20515-4316",
    "phone": "202-225-4831",
    "fax": null,
    "website": "https://escobar.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000299-el_paso",
        "label": "El Paso",
        "phone": "915-541-1400",
        "fax": null,
        "address": "221 N Kansas St, Suite 1500, Wells Fargo Plaza, El Paso, TX, 79901-1443"
      }
    ]
  },
  {
    "id": "S000250",
    "name": "Pete Sessions",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-17",
    "class": null,
    "isTerritory": false,
    "office": "2204 Rayburn House Office Building",
    "address": "2204 Rayburn House Office Building Washington DC 20515-4317",
    "phone": "202-225-6105",
    "fax": null,
    "website": "https://sessions.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000250-huntsville",
        "label": "Huntsville",
        "phone": "936-755-7770",
        "fax": null,
        "address": "901 Normal Park Dr, Suite 208, Huntsville, TX, 77320-3770"
      },
      {
        "id": "S000250-lufkin",
        "label": "Lufkin",
        "phone": "936-219-6450",
        "fax": null,
        "address": "300 E Shepherd Ave, Suite 210, Lufkin, TX, 75902-3252"
      },
      {
        "id": "S000250-nacogdoches",
        "label": "Nacogdoches",
        "phone": "936-585-7959",
        "fax": null,
        "address": "3034 Raguet St, Nacogdoches, TX, 75965-2852"
      },
      {
        "id": "S000250-round_rock",
        "label": "Round Rock",
        "phone": "202-340-9033",
        "fax": null,
        "address": "310 W Main Street, Suite 106, Round Rock, TX, 78664"
      },
      {
        "id": "S000250-waco",
        "label": "Waco",
        "phone": "254-633-4500",
        "fax": null,
        "address": "400 Austin Avenue, Suite 302, Waco, TX, 76701-2139"
      }
    ]
  },
  {
    "id": "M001245",
    "name": "Christian D. Menefee",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-18",
    "class": null,
    "isTerritory": false,
    "office": "1318 Longworth House Office Building",
    "address": "1318 Longworth House Office Building Washington DC 20515-4318",
    "phone": "202-225-3816",
    "fax": null,
    "website": "https://menefee.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001245-houston",
        "label": "Houston",
        "phone": "281-891-4899",
        "fax": null,
        "address": "15651 North Freeway, Houston, TX, 77090"
      },
      {
        "id": "M001245-houston-1",
        "label": "Houston",
        "phone": "713-227-7740",
        "fax": null,
        "address": "2020 Solo Street, Houston, TX, 77020"
      },
      {
        "id": "M001245-houston-2",
        "label": "Houston",
        "phone": "713-655-0050",
        "fax": null,
        "address": "1919 Smith Street, Suite 1180, Houston, TX, 77002"
      }
    ]
  },
  {
    "id": "A000375",
    "name": "Jodey C. Arrington",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-19",
    "class": null,
    "isTerritory": false,
    "office": "1111 Longworth House Office Building",
    "address": "1111 Longworth House Office Building Washington DC 20515-4319",
    "phone": "202-225-4005",
    "fax": null,
    "website": "https://arrington.house.gov",
    "contactForm": "https://arrington.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000375-abilene",
        "label": "Abilene",
        "phone": "325-675-9779",
        "fax": "325-675-5038",
        "address": "500 Chestnut St., Suite 819, Abilene, TX, 79602"
      },
      {
        "id": "A000375-lubbock",
        "label": "Lubbock",
        "phone": "806-763-1611",
        "fax": "806-767-9168",
        "address": "1312 Texas Ave., Suite 219, Lubbock, TX, 79401"
      }
    ]
  },
  {
    "id": "C001091",
    "name": "Joaquin Castro",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-20",
    "class": null,
    "isTerritory": false,
    "office": "2241 Rayburn House Office Building",
    "address": "2241 Rayburn House Office Building Washington DC 20515-4320",
    "phone": "202-225-3236",
    "fax": null,
    "website": "https://castro.house.gov",
    "contactForm": "https://castro.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001091-san_antonio",
        "label": "San Antonio",
        "phone": "210-348-8216",
        "fax": "210-979-0737",
        "address": "727 E. Cesar E. Chavez Blvd, B-128, San Antonio, TX, 78206"
      }
    ]
  },
  {
    "id": "R000614",
    "name": "Chip Roy",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-21",
    "class": null,
    "isTerritory": false,
    "office": "103 Cannon House Office Building",
    "address": "103 Cannon House Office Building Washington DC 20515-4321",
    "phone": "202-225-4236",
    "fax": null,
    "website": "https://roy.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000614-austin",
        "label": "Austin",
        "phone": "512-871-5959",
        "fax": null,
        "address": "5900 Southwest Parkway, Suite 520, Bldg 5, Austin, TX, 78735"
      },
      {
        "id": "R000614-kerrville",
        "label": "Kerrville",
        "phone": "830-896-0154",
        "fax": null,
        "address": "125 Lehmann Drive, Suite 201, Kerrville, TX, 78028"
      },
      {
        "id": "R000614-san_antonio",
        "label": "San Antonio",
        "phone": "210-821-5024",
        "fax": "771-200-5819",
        "address": "16414 San Pedro Ave, Suite 817, San Antonio, TX, 78232"
      }
    ]
  },
  {
    "id": "N000026",
    "name": "Troy E. Nehls",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-22",
    "class": null,
    "isTerritory": false,
    "office": "1104 Longworth House Office Building",
    "address": "1104 Longworth House Office Building Washington DC 20515-4322",
    "phone": "202-225-5951",
    "fax": null,
    "website": "https://nehls.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000026-fulshear",
        "label": "Fulshear",
        "phone": "346-762-6600",
        "fax": null,
        "address": "6510 FM 359 S, Suite 200, Fulshear, TX, 77441"
      }
    ]
  },
  {
    "id": "V000134",
    "name": "Beth Van Duyne",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-24",
    "class": null,
    "isTerritory": false,
    "office": "1725 Longworth House Office Building",
    "address": "1725 Longworth House Office Building Washington DC 20515-4324",
    "phone": "202-225-6605",
    "fax": null,
    "website": "https://vanduyne.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000134-dallas",
        "label": "Dallas",
        "phone": "972-966-5500",
        "fax": "771-200-5833",
        "address": "14951 Dallas Pkwy, Unit 830, Dallas, TX, 75254"
      },
      {
        "id": "V000134-keller",
        "label": "Keller",
        "phone": "972-966-5500",
        "fax": "771-200-5833",
        "address": "1100 Bear Creek Parkway, City of Keller Town Hall, Keller, TX, 76248"
      }
    ]
  },
  {
    "id": "W000816",
    "name": "Roger Williams",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-25",
    "class": null,
    "isTerritory": false,
    "office": "2336 Rayburn House Office Building",
    "address": "2336 Rayburn House Office Building Washington DC 20515-4325",
    "phone": "202-225-9896",
    "fax": null,
    "website": "https://williams.house.gov",
    "contactForm": "https://williams.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000816-arlington",
        "label": "Arlington",
        "phone": "682-218-5965",
        "fax": "771-200-5668",
        "address": "1000 Ballpark Way, Suite 310, Arlington, TX, 76011"
      },
      {
        "id": "W000816-cleburne",
        "label": "Cleburne",
        "phone": "682-218-5965",
        "fax": "771-200-5668",
        "address": "115 S. Main St., Suite 206, Cleburne, TX, 76033"
      }
    ]
  },
  {
    "id": "G000603",
    "name": "Brandon Gill",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-26",
    "class": null,
    "isTerritory": false,
    "office": "1305 Longworth House Office Building",
    "address": "1305 Longworth House Office Building Washington DC 20515-4326",
    "phone": "202-225-7772",
    "fax": null,
    "website": "https://gill.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000603-flower_mound",
        "label": "Flower Mound",
        "phone": "972-966-5454",
        "fax": null,
        "address": "600 Parker Square, Suite 205, Flower Mound, TX, 75028"
      }
    ]
  },
  {
    "id": "C001115",
    "name": "Michael Cloud",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-27",
    "class": null,
    "isTerritory": false,
    "office": "304 Cannon House Office Building",
    "address": "304 Cannon House Office Building Washington DC 20515-4327",
    "phone": "202-225-7742",
    "fax": null,
    "website": "https://cloud.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001115-corpus_christi",
        "label": "Corpus Christi",
        "phone": "361-884-2222",
        "fax": null,
        "address": "555 N. Carancahua St., Suite 980, Tower II, Corpus Christi, TX, 78401"
      },
      {
        "id": "C001115-victoria",
        "label": "Victoria",
        "phone": "361-894-6446",
        "fax": null,
        "address": "120 S. Main St., Suite 310, Victoria, TX, 77901"
      }
    ]
  },
  {
    "id": "C001063",
    "name": "Henry Cuellar",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-28",
    "class": null,
    "isTerritory": false,
    "office": "2308 Rayburn House Office Building",
    "address": "2308 Rayburn House Office Building Washington DC 20515-4328",
    "phone": "202-225-1640",
    "fax": null,
    "website": "https://cuellar.house.gov",
    "contactForm": "https://cuellar.house.gov/forms/writeyourrep/default.aspx",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001063-laredo",
        "label": "Laredo",
        "phone": "956-725-0639",
        "fax": "956-725-2647",
        "address": "602 E. Calton Rd., Suite 2, Laredo, TX, 78041"
      },
      {
        "id": "C001063-rio_grande_city",
        "label": "Rio Grande City",
        "phone": "956-487-5603",
        "fax": "956-424-3936",
        "address": "100 N. FM 3167, Suite 208, Rio Grande City, TX, 78582"
      },
      {
        "id": "C001063-san_antonio",
        "label": "San Antonio",
        "phone": "210-271-2851",
        "fax": "210-277-6671",
        "address": "1145 E. Commerce St., Suite 205, San Antonio, TX, 78205"
      }
    ]
  },
  {
    "id": "G000587",
    "name": "Sylvia R. Garcia",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-29",
    "class": null,
    "isTerritory": false,
    "office": "2419 Rayburn House Office Building",
    "address": "2419 Rayburn House Office Building Washington DC 20515-4329",
    "phone": "202-225-1688",
    "fax": null,
    "website": "https://sylviagarcia.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000587-houston",
        "label": "Houston",
        "phone": "832-325-3150",
        "fax": null,
        "address": "11811 East Fwy, Suite 430, Houston, TX, 77029-1974"
      }
    ]
  },
  {
    "id": "C001130",
    "name": "Jasmine Crockett",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-30",
    "class": null,
    "isTerritory": false,
    "office": "1616 Longworth House Office Building",
    "address": "1616 Longworth House Office Building Washington DC 20515-4330",
    "phone": "202-225-8885",
    "fax": null,
    "website": "https://crockett.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001130-dallas",
        "label": "Dallas",
        "phone": "214-922-8885",
        "fax": null,
        "address": "1825 Market Center Blvd., Suite 440, Dallas, TX, 75207"
      }
    ]
  },
  {
    "id": "C001051",
    "name": "John R. Carter",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-31",
    "class": null,
    "isTerritory": false,
    "office": "2208 Rayburn House Office Building",
    "address": "2208 Rayburn House Office Building Washington DC 20515-4331",
    "phone": "202-225-3864",
    "fax": null,
    "website": "https://carter.house.gov",
    "contactForm": "https://carter.house.gov/email-john2",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001051-belton",
        "label": "Belton",
        "phone": "254-933-1392",
        "fax": null,
        "address": "2180 North Main Street, Suite #I-10, Bell County Office, Belton, TX, 76513"
      },
      {
        "id": "C001051-georgetown",
        "label": "Georgetown",
        "phone": "512-591-9061",
        "fax": null,
        "address": "4411 S Ih-35, Suite 101, Georgetown, TX, 78626"
      }
    ]
  },
  {
    "id": "J000310",
    "name": "Julie Johnson",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-32",
    "class": null,
    "isTerritory": false,
    "office": "221 Cannon House Office Building",
    "address": "221 Cannon House Office Building Washington DC 20515-4332",
    "phone": "202-225-2231",
    "fax": null,
    "website": "https://juliejohnson.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000310-richardson",
        "label": "Richardson",
        "phone": "972-972-7949",
        "fax": null,
        "address": "100 N Central Expy, Suite 602, Chase Bank Building, Richardson, TX, 75080"
      }
    ]
  },
  {
    "id": "V000131",
    "name": "Marc A. Veasey",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-33",
    "class": null,
    "isTerritory": false,
    "office": "2186 Rayburn House Office Building",
    "address": "2186 Rayburn House Office Building Washington DC 20515-4333",
    "phone": "202-225-9897",
    "fax": null,
    "website": "https://veasey.house.gov",
    "contactForm": "https://veaseyforms.house.gov/forms/writeyourrep/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000131-dallas",
        "label": "Dallas",
        "phone": "214-741-1387",
        "fax": "214-741-2026",
        "address": "1881 Sylvan Ave., Suite 108, JP Morgan Chase Building, Dallas, TX, 75208"
      },
      {
        "id": "V000131-fort_worth",
        "label": "Fort Worth",
        "phone": "817-920-9086",
        "fax": "817-920-9324",
        "address": "6707 Brentwood Stair Rd., Suite 200, Fort Worth, TX, 76112"
      }
    ]
  },
  {
    "id": "G000581",
    "name": "Vicente Gonzalez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-34",
    "class": null,
    "isTerritory": false,
    "office": "1201 Longworth House Office Building",
    "address": "1201 Longworth House Office Building Washington DC 20515-4334",
    "phone": "202-225-2531",
    "fax": null,
    "website": "https://gonzalez.house.gov",
    "contactForm": "https://gonzalez.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000581-brownsville",
        "label": "Brownsville",
        "phone": "956-682-5545",
        "fax": "956-544-1884",
        "address": "835 E. Levee St., 6th Floor, Brownsville, TX, 78520"
      },
      {
        "id": "G000581-kingsville",
        "label": "Kingsville",
        "phone": "956-682-5545",
        "fax": "956-544-1884",
        "address": "100 W. King Ave., Suite 106, Kingsville, TX, 78363"
      },
      {
        "id": "G000581-weslaco",
        "label": "Weslaco",
        "phone": "956-682-5545",
        "fax": "956-544-1884",
        "address": "255 S. Kansas Ave, Weslaco, TX, 78596"
      }
    ]
  },
  {
    "id": "C001131",
    "name": "Greg Casar",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-35",
    "class": null,
    "isTerritory": false,
    "office": "446 Cannon House Office Building",
    "address": "446 Cannon House Office Building Washington DC 20515-4335",
    "phone": "202-225-5645",
    "fax": null,
    "website": "https://casar.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001131-austin",
        "label": "Austin",
        "phone": "512-691-1200",
        "fax": null,
        "address": "Austin, Austin, TX, 78702"
      },
      {
        "id": "C001131-san_antonio",
        "label": "San Antonio",
        "phone": "210-580-7000",
        "fax": null,
        "address": "San Antonio, TX, 78205"
      }
    ]
  },
  {
    "id": "B001291",
    "name": "Brian Babin",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-36",
    "class": null,
    "isTerritory": false,
    "office": "2236 Rayburn House Office Building",
    "address": "2236 Rayburn House Office Building Washington DC 20515-4336",
    "phone": "202-225-1555",
    "fax": null,
    "website": "https://babin.house.gov",
    "contactForm": "https://babin.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001291-dayton",
        "label": "Dayton",
        "phone": "832-780-0966",
        "fax": null,
        "address": "2004 N. Cleveland St., Dayton Police Station, Dayton, TX, 77536"
      },
      {
        "id": "B001291-deer_park",
        "label": "Deer Park",
        "phone": "832-780-0966",
        "fax": "832-780-0964",
        "address": "203 Ivy Ave., Suite 600, Deer Park, TX, 77536"
      },
      {
        "id": "B001291-lumberton",
        "label": "Lumberton",
        "phone": "409-883-8075",
        "fax": "409-886-9918",
        "address": "769 S. Main Street, Lumberton, TX, 77657"
      },
      {
        "id": "B001291-woodville",
        "label": "Woodville",
        "phone": "409-331-8066",
        "fax": null,
        "address": "100 W. Bluff Dr., Tyler County Courthouse, Woodville, TX, 75979"
      }
    ]
  },
  {
    "id": "D000399",
    "name": "Lloyd Doggett",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-37",
    "class": null,
    "isTerritory": false,
    "office": "2307 Rayburn House Office Building",
    "address": "2307 Rayburn House Office Building Washington DC 20515-0001",
    "phone": "202-225-4865",
    "fax": null,
    "website": "https://doggett.house.gov",
    "contactForm": "https://doggett.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000399-austin",
        "label": "Austin",
        "phone": "512-916-5921",
        "fax": null,
        "address": "300 East 8th St, 7th Floor, Austin, TX, 78701"
      }
    ]
  },
  {
    "id": "H001095",
    "name": "Wesley Hunt",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": "TX-38",
    "class": null,
    "isTerritory": false,
    "office": "1520 Longworth House Office Building",
    "address": "1520 Longworth House Office Building Washington DC 20515-0001",
    "phone": "202-225-5646",
    "fax": null,
    "website": "https://hunt.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001095-houston",
        "label": "Houston",
        "phone": "832-357-0555",
        "fax": null,
        "address": "5599 San Felipe St., Suite 950, Houston, TX, 77056"
      },
      {
        "id": "H001095-tomball",
        "label": "Tomball",
        "phone": "346-246-7355",
        "fax": null,
        "address": "990 Village Square Dr., G-900, Tomball, TX, 77375"
      }
    ]
  },
  {
    "id": "P000610",
    "name": "Stacey E. Plaskett",
    "chamber": "House",
    "role": "Delegate",
    "party": "D",
    "partyName": "Democrat",
    "state": "VI",
    "stateName": "U.S. Virgin Islands",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": true,
    "office": "2059 Rayburn House Office Building",
    "address": "2059 Rayburn House Office Building Washington DC 20515-5500",
    "phone": "202-225-1790",
    "fax": null,
    "website": "https://plaskett.house.gov",
    "contactForm": "https://Plaskettforms.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000610-frederiksted",
        "label": "Frederiksted",
        "phone": "340-778-5900",
        "fax": "340-778-5111",
        "address": "60 King St., Frederiksted, VI, 00840"
      },
      {
        "id": "P000610-st__thomas",
        "label": "St. Thomas",
        "phone": "340-774-4408",
        "fax": "340-774-8033",
        "address": "9100 Havensight, Suite 22, Port of Sale Mall, St. Thomas, VI, 00802"
      }
    ]
  },
  {
    "id": "M001213",
    "name": "Blake D. Moore",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "UT",
    "stateName": "Utah",
    "district": "UT-01",
    "class": null,
    "isTerritory": false,
    "office": "1131 Longworth House Office Building",
    "address": "1131 Longworth House Office Building Washington DC 20515-4401",
    "phone": "202-225-0453",
    "fax": null,
    "website": "https://blakemoore.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001213-ogden",
        "label": "Ogden",
        "phone": "801-625-0107",
        "fax": "385-405-2155",
        "address": "324 25th Street, Ogden, Ogden, UT, 84401"
      }
    ]
  },
  {
    "id": "M001228",
    "name": "Celeste Maloy",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "UT",
    "stateName": "Utah",
    "district": "UT-02",
    "class": null,
    "isTerritory": false,
    "office": "249 Cannon House Office Building",
    "address": "249 Cannon House Office Building Washington DC 20515-4402",
    "phone": "202-225-9730",
    "fax": null,
    "website": "https://maloy.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001228-bountiful",
        "label": "Bountiful",
        "phone": "801-364-5550",
        "fax": null,
        "address": "585 W 500 S, #230, Bountiful, UT, 84010"
      },
      {
        "id": "M001228-delta",
        "label": "Delta",
        "phone": "435-691-9786",
        "fax": null,
        "address": "71 S 200 W, Delta, UT, 84624"
      },
      {
        "id": "M001228-richfield",
        "label": "Richfield",
        "phone": "435-691-9746",
        "fax": null,
        "address": "250 N Main, #B14, Richfield, UT, 84701"
      },
      {
        "id": "M001228-st__george",
        "label": "St. George",
        "phone": "435-703-7720",
        "fax": null,
        "address": "111 East Tabernacle, St. George, UT, 84770"
      }
    ]
  },
  {
    "id": "K000403",
    "name": "Mike Kennedy",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "UT",
    "stateName": "Utah",
    "district": "UT-03",
    "class": null,
    "isTerritory": false,
    "office": "1626 Longworth House Office Building",
    "address": "1626 Longworth House Office Building Washington DC 20515-4403",
    "phone": "202-225-7751",
    "fax": null,
    "website": "https://mikekennedy.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000403-provo",
        "label": "Provo",
        "phone": "801-607-3238",
        "fax": null,
        "address": "3549 N University Ave, Suite 275, Provo, UT, 84604"
      }
    ]
  },
  {
    "id": "O000086",
    "name": "Burgess Owens",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "UT",
    "stateName": "Utah",
    "district": "UT-04",
    "class": null,
    "isTerritory": false,
    "office": "309 Cannon House Office Building",
    "address": "309 Cannon House Office Building Washington DC 20515-4404",
    "phone": "202-225-3011",
    "fax": null,
    "website": "https://owens.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "O000086-west_jordan",
        "label": "West Jordan",
        "phone": "801-999-9801",
        "fax": null,
        "address": "9067 S. 1300 W, Suite 101, West Jordan, UT, 84088"
      }
    ]
  },
  {
    "id": "B001318",
    "name": "Becca Balint",
    "chamber": "House",
    "role": "Delegate",
    "party": "D",
    "partyName": "Democrat",
    "state": "VT",
    "stateName": "Vermont",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": false,
    "office": "1510 Longworth House Office Building",
    "address": "1510 Longworth House Office Building Washington DC 20515-4500",
    "phone": "202-225-4115",
    "fax": null,
    "website": "https://balint.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001318-brattleboro",
        "label": "Brattleboro",
        "phone": "802-652-2450",
        "fax": "771-200-5791",
        "address": "130 Austine Drive, 2nd Floor, Holton Hall, Brattleboro, VT, 05301"
      },
      {
        "id": "B001318-burlington",
        "label": "Burlington",
        "phone": "802-652-2450",
        "fax": "771-200-5791",
        "address": "159 Bank Street, Suite 204, Burlington, VT, 05401"
      }
    ]
  },
  {
    "id": "W000804",
    "name": "Robert J. Wittman",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-01",
    "class": null,
    "isTerritory": false,
    "office": "2055 Rayburn House Office Building",
    "address": "2055 Rayburn House Office Building Washington DC 20515-4601",
    "phone": "202-225-4261",
    "fax": null,
    "website": "https://wittman.house.gov",
    "contactForm": "http://robwittmanforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000804-glen_allen",
        "label": "Glen Allen",
        "phone": "804-401-4120",
        "fax": "804-270-4643",
        "address": "4201 Dominion Blvd, Suite 110, Glen Allen, VA, 23060"
      },
      {
        "id": "W000804-yorktown",
        "label": "Yorktown",
        "phone": "757-527-6270",
        "fax": "757-898-2859",
        "address": "307 Main Street, Yorktown, VA, 23690"
      }
    ]
  },
  {
    "id": "K000399",
    "name": "Jennifer A. Kiggans",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-02",
    "class": null,
    "isTerritory": false,
    "office": "152 Cannon House Office Building",
    "address": "152 Cannon House Office Building Washington DC 20515-4602",
    "phone": "202-225-4215",
    "fax": null,
    "website": "https://kiggans.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000399-onley",
        "label": "Onley",
        "phone": "757-666-6020",
        "fax": null,
        "address": "25020 Shore Parkway, 1B, Onley, VA, 23418"
      },
      {
        "id": "K000399-suffolk",
        "label": "Suffolk",
        "phone": "757-942-6050",
        "fax": null,
        "address": "130 S. Saratoga Street, Suffolk, VA, 23434"
      },
      {
        "id": "K000399-virginia_beach",
        "label": "Virginia Beach",
        "phone": "757-364-7650",
        "fax": null,
        "address": "283 Constitution Drive, Suite 900, Virginia Beach, VA, 23462"
      }
    ]
  },
  {
    "id": "S000185",
    "name": "Robert C. \"Bobby\" Scott",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-03",
    "class": null,
    "isTerritory": false,
    "office": "2328 Rayburn House Office Building",
    "address": "2328 Rayburn House Office Building Washington DC 20515-4603",
    "phone": "202-225-8351",
    "fax": null,
    "website": "https://bobbyscott.house.gov",
    "contactForm": "https://bobbyscott.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000185-newport_news",
        "label": "Newport News",
        "phone": "757-380-1000",
        "fax": "757-928-6694",
        "address": "2600 Washington Ave., Suite 1010, Newport News, VA, 23607"
      }
    ]
  },
  {
    "id": "M001227",
    "name": "Jennifer L. McClellan",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-04",
    "class": null,
    "isTerritory": false,
    "office": "1628 Longworth House Office Building",
    "address": "1628 Longworth House Office Building Washington DC 20515-4604",
    "phone": "202-225-6365",
    "fax": null,
    "website": "https://mcclellan.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001227-lawrenceville",
        "label": "Lawrenceville",
        "phone": "804-690-5809",
        "fax": null,
        "address": "100 Athletic Field Road, Lawrenceville, VA, 23868"
      },
      {
        "id": "M001227-richmond",
        "label": "Richmond",
        "phone": "804-486-1840",
        "fax": null,
        "address": "11 S. 12th Street, Suite 401, Richmond, VA, 23219"
      }
    ]
  },
  {
    "id": "M001239",
    "name": "John J. McGuire III",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-05",
    "class": null,
    "isTerritory": false,
    "office": "1013 Longworth House Office Building",
    "address": "1013 Longworth House Office Building Washington DC 20515-4605",
    "phone": "202-225-4711",
    "fax": null,
    "website": "https://mcguire.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001239-lynchburg",
        "label": "Lynchburg",
        "phone": "202-225-4711",
        "fax": null,
        "address": "900 Church St, Lynchburg, VA, 24505"
      }
    ]
  },
  {
    "id": "C001118",
    "name": "Ben Cline",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-06",
    "class": null,
    "isTerritory": false,
    "office": "2443 Rayburn House Office Building",
    "address": "2443 Rayburn House Office Building Washington DC 20515-4606",
    "phone": "202-225-5431",
    "fax": null,
    "website": "https://cline.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001118-harrisonburg",
        "label": "Harrisonburg",
        "phone": "540-432-2391",
        "fax": "540-857-2675",
        "address": "70 N Mason St, Suite 110, Harrisonburg, VA, 22802-4126"
      },
      {
        "id": "C001118-roanoke",
        "label": "Roanoke",
        "phone": "540-857-2672",
        "fax": "540-857-2675",
        "address": "10 Franklin Rd SE, Suite 510, Roanoke, VA, 24011-2133"
      },
      {
        "id": "C001118-staunton",
        "label": "Staunton",
        "phone": "540-885-3861",
        "fax": "540-857-2675",
        "address": "117 S Lewis St, Suite 215, Staunton, VA, 24401-4282"
      },
      {
        "id": "C001118-winchester",
        "label": "Winchester",
        "phone": "540-546-0876",
        "fax": "540-857-2675",
        "address": "100 N. Loudoun St., Suite 120, Winchester, VA, 22601"
      }
    ]
  },
  {
    "id": "V000138",
    "name": "Eugene Simon Vindman",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-07",
    "class": null,
    "isTerritory": false,
    "office": "1005 Longworth House Office Building",
    "address": "1005 Longworth House Office Building Washington DC 20515-4607",
    "phone": "202-225-2815",
    "fax": null,
    "website": "https://vindman.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000138-woodbridge",
        "label": "Woodbridge",
        "phone": "703-987-2180",
        "fax": null,
        "address": "2241D Tacketts Mill Dr., Woodbridge, VA, 22192"
      }
    ]
  },
  {
    "id": "B001292",
    "name": "Donald S. Beyer, Jr.",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-08",
    "class": null,
    "isTerritory": false,
    "office": "1226 Longworth House Office Building",
    "address": "1226 Longworth House Office Building Washington DC 20515-4608",
    "phone": "202-225-4376",
    "fax": null,
    "website": "https://beyer.house.gov",
    "contactForm": "https://beyerforms.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001292-alexandria",
        "label": "Alexandria",
        "phone": "703-658-5403",
        "fax": "703-658-5408",
        "address": "700 N Fairfax St., Suite 510, Alexandria, VA, 22314"
      }
    ]
  },
  {
    "id": "G000568",
    "name": "H. Morgan Griffith",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-09",
    "class": null,
    "isTerritory": false,
    "office": "2110 Rayburn House Office Building",
    "address": "2110 Rayburn House Office Building Washington DC 20515-4609",
    "phone": "202-225-3861",
    "fax": null,
    "website": "https://morgangriffith.house.gov",
    "contactForm": "https://morgangriffith.house.gov/contact/contactform.htm",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000568-abingdon",
        "label": "Abingdon",
        "phone": "276-525-1405",
        "fax": "276-525-1444",
        "address": "323 W. Main St., Abingdon, VA, 24210"
      },
      {
        "id": "G000568-christiansburg",
        "label": "Christiansburg",
        "phone": "540-381-5671",
        "fax": "540-381-5675",
        "address": "17 W. Main St., Christiansburg, VA, 24073"
      }
    ]
  },
  {
    "id": "S001230",
    "name": "Suhas Subramanyam",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-10",
    "class": null,
    "isTerritory": false,
    "office": "1009 Longworth House Office Building",
    "address": "1009 Longworth House Office Building Washington DC 20515-4610",
    "phone": "202-225-5136",
    "fax": null,
    "website": "https://subramanyam.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001230-leesburg",
        "label": "Leesburg",
        "phone": "703-236-1300",
        "fax": null,
        "address": "210 Wirt Street SW, Unit 102, Leesburg, VA, 20175"
      }
    ]
  },
  {
    "id": "W000831",
    "name": "James R. Walkinshaw",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "VA",
    "stateName": "Virginia",
    "district": "VA-11",
    "class": null,
    "isTerritory": false,
    "office": "2265 Rayburn House Office Building",
    "address": "2265 Rayburn House Office Building Washington DC 20515-4611",
    "phone": "202-225-1492",
    "fax": null,
    "website": "https://walkinshaw.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000831-fairfax",
        "label": "Fairfax",
        "phone": "703-256-3071",
        "fax": null,
        "address": "10680 Main Street District, Suite 140, Fairfax, VA, 22030"
      }
    ]
  },
  {
    "id": "D000617",
    "name": "Suzan K. DelBene",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-01",
    "class": null,
    "isTerritory": false,
    "office": "2311 Rayburn House Office Building",
    "address": "2311 Rayburn House Office Building Washington DC 20515-4701",
    "phone": "202-225-6311",
    "fax": null,
    "website": "https://delbene.house.gov",
    "contactForm": "https://delbene.house.gov/contact-me/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000617-bellevue",
        "label": "Bellevue",
        "phone": "425-485-0085",
        "fax": "425-485-0083",
        "address": "520 112th Ave NE, Suite 400-C, Bellevue, WA, 98004"
      }
    ]
  },
  {
    "id": "L000560",
    "name": "Rick Larsen",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-02",
    "class": null,
    "isTerritory": false,
    "office": "2163 Rayburn House Office Building",
    "address": "2163 Rayburn House Office Building Washington DC 20515-4702",
    "phone": "202-225-2605",
    "fax": null,
    "website": "https://larsen.house.gov",
    "contactForm": "http://larsen.house.gov/contact-rick/email-rick",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000560-bellingham",
        "label": "Bellingham",
        "phone": "360-733-4500",
        "fax": "360-733-5144",
        "address": "119 N. Commercial St., Suite 275, Bellingham, WA, 98225"
      },
      {
        "id": "L000560-everett",
        "label": "Everett",
        "phone": "425-252-3188",
        "fax": "425-252-6606",
        "address": "2930 Wetmore Ave., Suite 9F, Wall Street Building, Everett, WA, 98201"
      }
    ]
  },
  {
    "id": "G000600",
    "name": "Marie Gluesenkamp Perez",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-03",
    "class": null,
    "isTerritory": false,
    "office": "1431 Longworth House Office Building",
    "address": "1431 Longworth House Office Building Washington DC 20515-4703",
    "phone": "202-225-3536",
    "fax": null,
    "website": "https://gluesenkampperez.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000600-kelso",
        "label": "Kelso",
        "phone": null,
        "fax": null,
        "address": "308 S. Pacific Ave., Suite B, Kelso, WA, 98626"
      },
      {
        "id": "G000600-vancouver",
        "label": "Vancouver",
        "phone": "360-695-6292",
        "fax": null,
        "address": "1053 Officers Row, Vancouver, WA, 98661"
      }
    ]
  },
  {
    "id": "N000189",
    "name": "Dan Newhouse",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-04",
    "class": null,
    "isTerritory": false,
    "office": "460 Cannon House Office Building",
    "address": "460 Cannon House Office Building Washington DC 20515-4704",
    "phone": "202-225-5816",
    "fax": null,
    "website": "https://newhouse.house.gov",
    "contactForm": "https://newhouse.house.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "N000189-grand_coulee",
        "label": "Grand Coulee",
        "phone": "509-433-7760",
        "fax": null,
        "address": "PO Box 135, Grand Coulee, WA, 99133"
      },
      {
        "id": "N000189-richland",
        "label": "Richland",
        "phone": "509-713-7374",
        "fax": "509-713-7377",
        "address": "3100 George Washington Way, #130, Richland, WA, 99354"
      },
      {
        "id": "N000189-yakima",
        "label": "Yakima",
        "phone": "509-452-3243",
        "fax": "509-452-3438",
        "address": "402 E Yakima Ave, Suite 1000, Yakima, WA, 98901"
      }
    ]
  },
  {
    "id": "B001322",
    "name": "Michael Baumgartner",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-05",
    "class": null,
    "isTerritory": false,
    "office": "124 Cannon House Office Building",
    "address": "124 Cannon House Office Building Washington DC 20515-4705",
    "phone": "202-225-2006",
    "fax": null,
    "website": "https://baumgartner.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001322-spokane",
        "label": "Spokane",
        "phone": "509-353-2374",
        "fax": null,
        "address": "528 E. Spokane Falls Blvd, Suite 115, Spokane, WA, 99202"
      }
    ]
  },
  {
    "id": "R000621",
    "name": "Emily Randall",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-06",
    "class": null,
    "isTerritory": false,
    "office": "1531 Longworth House Office Building",
    "address": "1531 Longworth House Office Building Washington DC 20515-4706",
    "phone": "202-225-5916",
    "fax": null,
    "website": "https://randall.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000621-bremerton",
        "label": "Bremerton",
        "phone": "360-373-9725",
        "fax": null,
        "address": "345 6th St., Suite 500, Bremerton, WA, 98337"
      }
    ]
  },
  {
    "id": "J000298",
    "name": "Pramila Jayapal",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-07",
    "class": null,
    "isTerritory": false,
    "office": "2346 Rayburn House Office Building",
    "address": "2346 Rayburn House Office Building Washington DC 20515-4707",
    "phone": "202-225-3106",
    "fax": null,
    "website": "https://jayapal.house.gov",
    "contactForm": "https://jayapal.house.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000298-seattle",
        "label": "Seattle",
        "phone": "206-674-0040",
        "fax": "771-200-5813",
        "address": "2033 6th Ave., Suite 1011, Seattle, WA, 98121"
      }
    ]
  },
  {
    "id": "S001216",
    "name": "Kim Schrier",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-08",
    "class": null,
    "isTerritory": false,
    "office": "1110 Longworth House Office Building",
    "address": "1110 Longworth House Office Building Washington DC 20515-4708",
    "phone": "202-225-7761",
    "fax": null,
    "website": "https://schrier.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001216-issaquah",
        "label": "Issaquah",
        "phone": "425-657-1001",
        "fax": null,
        "address": "22500 SE 64th Pl, Suite 226, Issaquah, WA, 98027-7900"
      },
      {
        "id": "S001216-wenatchee",
        "label": "Wenatchee",
        "phone": "509-850-5340",
        "fax": null,
        "address": "301 Yakima Street, Suite 329, Wenatchee, WA, 98801"
      }
    ]
  },
  {
    "id": "S000510",
    "name": "Adam Smith",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-09",
    "class": null,
    "isTerritory": false,
    "office": "2264 Rayburn House Office Building",
    "address": "2264 Rayburn House Office Building Washington DC 20515-4709",
    "phone": "202-225-8901",
    "fax": null,
    "website": "https://adamsmith.house.gov",
    "contactForm": "https://adamsmith.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000510-kent",
        "label": "Kent",
        "phone": "425-793-5180",
        "fax": null,
        "address": "6811 S. 204th Street, Suite 360, Kent, WA, 98032"
      }
    ]
  },
  {
    "id": "S001159",
    "name": "Marilyn Strickland",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": "WA-10",
    "class": null,
    "isTerritory": false,
    "office": "1724 Longworth House Office Building",
    "address": "1724 Longworth House Office Building Washington DC 20515-4710",
    "phone": "202-225-9740",
    "fax": null,
    "website": "https://strickland.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001159-lacey",
        "label": "Lacey",
        "phone": "360-459-8514",
        "fax": "360-459-8581",
        "address": "420 College St SE, Suite 3000, Lacey, WA, 98503"
      },
      {
        "id": "S001159-lakewood",
        "label": "Lakewood",
        "phone": "360-459-8514",
        "fax": "360-459-8581",
        "address": "6000 Main Street SW, Suite 3B, Lakewood, WA, 98499"
      }
    ]
  },
  {
    "id": "M001205",
    "name": "Carol D. Miller",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WV",
    "stateName": "West Virginia",
    "district": "WV-01",
    "class": null,
    "isTerritory": false,
    "office": "465 Cannon House Office Building",
    "address": "465 Cannon House Office Building Washington DC 20515-4801",
    "phone": "202-225-3452",
    "fax": null,
    "website": "https://miller.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001205-beckley",
        "label": "Beckley",
        "phone": "304-250-6177",
        "fax": null,
        "address": "3049 Robert C. Byrd Drive, Suite 240, Beckley, WV, 25801"
      },
      {
        "id": "M001205-charleston",
        "label": "Charleston",
        "phone": "681-945-6556",
        "fax": null,
        "address": "3 Tennessee Ave, Charleston, WV, 25302"
      },
      {
        "id": "M001205-huntington",
        "label": "Huntington",
        "phone": "304-522-2201",
        "fax": "771-200-5618",
        "address": "2699 Park Avenue, Suite 220, Huntington, WV, 25704"
      }
    ]
  },
  {
    "id": "M001235",
    "name": "Riley M. Moore",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WV",
    "stateName": "West Virginia",
    "district": "WV-02",
    "class": null,
    "isTerritory": false,
    "office": "1337 Longworth House Office Building",
    "address": "1337 Longworth House Office Building Washington DC 20515-4802",
    "phone": "202-225-2711",
    "fax": null,
    "website": "https://rileymoore.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001235-martinsburg",
        "label": "Martinsburg",
        "phone": "304-350-6987",
        "fax": null,
        "address": "739 Winchester Ave, Martinsburg, WV, 25401"
      },
      {
        "id": "M001235-morgantown",
        "label": "Morgantown",
        "phone": "304-350-6995",
        "fax": null,
        "address": "8 Suburban Ct, Morgantown, WV, 26505"
      }
    ]
  },
  {
    "id": "S001213",
    "name": "Bryan Steil",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": "WI-01",
    "class": null,
    "isTerritory": false,
    "office": "1526 Longworth House Office Building",
    "address": "1526 Longworth House Office Building Washington DC 20515-4901",
    "phone": "202-225-3031",
    "fax": null,
    "website": "https://steil.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001213-beloit",
        "label": "Beloit",
        "phone": "608-752-4050",
        "fax": null,
        "address": "100 State St, Beloit City Hall Conference Room, Beloit, WI, 53511"
      },
      {
        "id": "S001213-bristol",
        "label": "Bristol",
        "phone": "262-654-1901",
        "fax": null,
        "address": "19600 75th Street, Room 177, Bristol, WI, 53104"
      },
      {
        "id": "S001213-elkhorn",
        "label": "Elkhorn",
        "phone": "262-654-1901",
        "fax": null,
        "address": "101 N. Wisconsin Street, Matheson Memorial Library, Mary Bray Room, Elkhorn, WI, 53121"
      },
      {
        "id": "S001213-janesville",
        "label": "Janesville",
        "phone": "608-752-4050",
        "fax": null,
        "address": "20 S Main St, Suite 10, Janesville, WI, 53545-3959"
      },
      {
        "id": "S001213-racine",
        "label": "Racine",
        "phone": "262-637-0510",
        "fax": null,
        "address": "730 Wisconsin Ave, Suite 101, Racine County Courthouse, Racine, WI, 53403-1238"
      },
      {
        "id": "S001213-st_francis",
        "label": "St Francis",
        "phone": "414-285-2120",
        "fax": null,
        "address": "3400 E Howard Avenue, St Francis Civic Center, St Francis, WI, 53235"
      }
    ]
  },
  {
    "id": "P000607",
    "name": "Mark Pocan",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": "WI-02",
    "class": null,
    "isTerritory": false,
    "office": "1026 Longworth House Office Building",
    "address": "1026 Longworth House Office Building Washington DC 20515-4902",
    "phone": "202-225-2906",
    "fax": null,
    "website": "https://pocan.house.gov",
    "contactForm": "https://pocan.house.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000607-madison",
        "label": "Madison",
        "phone": "608-258-9800",
        "fax": "608-258-0377",
        "address": "10 E. Doty St., Suite 405, Madison, WI, 53703"
      }
    ]
  },
  {
    "id": "V000135",
    "name": "Derrick Van Orden",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": "WI-03",
    "class": null,
    "isTerritory": false,
    "office": "1513 Longworth House Office Building",
    "address": "1513 Longworth House Office Building Washington DC 20515-4903",
    "phone": "202-225-5506",
    "fax": null,
    "website": "https://vanorden.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000135-eau_claire",
        "label": "Eau Claire",
        "phone": "715-831-9214",
        "fax": null,
        "address": "404 S Barstow St, Suite 2, Eau Claire, WI, 54701"
      },
      {
        "id": "V000135-la_crosse",
        "label": "La Crosse",
        "phone": "608-782-2558",
        "fax": null,
        "address": "210 7th St S, Suite 204, La Crosse, WI, 54601"
      }
    ]
  },
  {
    "id": "M001160",
    "name": "Gwen Moore",
    "chamber": "House",
    "role": "Representative",
    "party": "D",
    "partyName": "Democrat",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": "WI-04",
    "class": null,
    "isTerritory": false,
    "office": "2252 Rayburn House Office Building",
    "address": "2252 Rayburn House Office Building Washington DC 20515-4904",
    "phone": "202-225-4572",
    "fax": null,
    "website": "https://gwenmoore.house.gov",
    "contactForm": "https://gwenmoore.house.gov/contact-form",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001160-milwaukee",
        "label": "Milwaukee",
        "phone": "414-297-1140",
        "fax": "414-297-1086",
        "address": "250 East Wisconsin, Suite 950, Milwaukee, WI, 53202"
      }
    ]
  },
  {
    "id": "F000471",
    "name": "Scott Fitzgerald",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": "WI-05",
    "class": null,
    "isTerritory": false,
    "office": "2444 Rayburn House Office Building",
    "address": "2444 Rayburn House Office Building Washington DC 20515-4905",
    "phone": "202-225-5101",
    "fax": null,
    "website": "https://fitzgerald.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000471-oconomowoc",
        "label": "Oconomowoc",
        "phone": "262-784-1111",
        "fax": null,
        "address": "175 E Wisconsin Ave, H (2nd Floor), Oconomowoc, WI, 53066"
      }
    ]
  },
  {
    "id": "G000576",
    "name": "Glenn Grothman",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": "WI-06",
    "class": null,
    "isTerritory": false,
    "office": "1211 Longworth House Office Building",
    "address": "1211 Longworth House Office Building Washington DC 20515-4906",
    "phone": "202-225-2476",
    "fax": null,
    "website": "https://grothman.house.gov",
    "contactForm": "https://grothman.house.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000576-fond_du_lac",
        "label": "Fond du Lac",
        "phone": "920-907-0624",
        "fax": null,
        "address": "525 N Peters Ave, Suite 700, Fond du Lac, WI, 54937"
      }
    ]
  },
  {
    "id": "T000165",
    "name": "Thomas P. Tiffany",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": "WI-07",
    "class": null,
    "isTerritory": false,
    "office": "451 Cannon House Office Building",
    "address": "451 Cannon House Office Building Washington DC 20515-4907",
    "phone": "202-225-3365",
    "fax": null,
    "website": "https://tiffany.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000165-wausau",
        "label": "Wausau",
        "phone": "715-298-9344",
        "fax": null,
        "address": "2620 Stewart Avenue, Suite 312, Wausau, WI, 54401"
      }
    ]
  },
  {
    "id": "W000829",
    "name": "Tony Wied",
    "chamber": "House",
    "role": "Representative",
    "party": "R",
    "partyName": "Republican",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": "WI-08",
    "class": null,
    "isTerritory": false,
    "office": "424 Cannon House Office Building",
    "address": "424 Cannon House Office Building Washington DC 20515-4908",
    "phone": "202-225-5665",
    "fax": null,
    "website": "https://wied.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000829-de_pere",
        "label": "De Pere",
        "phone": "920-301-4500",
        "fax": null,
        "address": "1702 Scheuring Rd, Suite B, De Pere, WI, 54115"
      }
    ]
  },
  {
    "id": "H001096",
    "name": "Harriet M. Hageman",
    "chamber": "House",
    "role": "Delegate",
    "party": "R",
    "partyName": "Republican",
    "state": "WY",
    "stateName": "Wyoming",
    "district": "At-large delegate",
    "class": null,
    "isTerritory": false,
    "office": "1227 Longworth House Office Building",
    "address": "1227 Longworth House Office Building Washington DC 20515-5000",
    "phone": "202-225-2311",
    "fax": null,
    "website": "https://hageman.house.gov",
    "contactForm": null,
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001096-casper",
        "label": "Casper",
        "phone": "307-261-6595",
        "fax": null,
        "address": "100 E B Street, Suite 4003, Casper, WY, 82601"
      },
      {
        "id": "H001096-cheyenne",
        "label": "Cheyenne",
        "phone": "307-772-2595",
        "fax": null,
        "address": "2120 Capitol Avenue, Suite 8005, Cheyenne, WY, 82001"
      }
    ]
  },
  {
    "id": "B001319",
    "name": "Katie Boyd Britt",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "AL",
    "stateName": "Alabama",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "416 Russell Senate Office Building",
    "address": "416 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-5744",
    "fax": null,
    "website": "https://www.britt.senate.gov",
    "contactForm": "https://www.britt.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001319-anniston",
        "label": "Anniston",
        "phone": null,
        "fax": null,
        "address": "1100 Gurnee Avenue, Suite 306, Anniston, AL, 36206"
      },
      {
        "id": "B001319-birmingham",
        "label": "Birmingham",
        "phone": "205-731-1384",
        "fax": null,
        "address": "1800 5th Avenue North, 321 Federal Building, Birmingham, AL, 35203"
      },
      {
        "id": "B001319-dothan",
        "label": "Dothan",
        "phone": "334-500-4097",
        "fax": null,
        "address": "100 W. Troy St, Suite 101, Dothan Courthouse and Federal Building, Dothan, AL, 36303"
      },
      {
        "id": "B001319-huntsville",
        "label": "Huntsville",
        "phone": "256-429-3450",
        "fax": null,
        "address": "660 Gallatin St SW, Suite 1400, Huntsville, AL, 35801"
      },
      {
        "id": "B001319-mobile",
        "label": "Mobile",
        "phone": "251-662-9990",
        "fax": null,
        "address": "113 Saint Joseph Street, Room 365, Mobile, AL, 36602"
      },
      {
        "id": "B001319-montgomery",
        "label": "Montgomery",
        "phone": "334-777-1150",
        "fax": null,
        "address": "One Church Street, Suite F-401, United States Federal Courthouse, Montgomery, AL, 36104"
      },
      {
        "id": "B001319-tuscaloosa",
        "label": "Tuscaloosa",
        "phone": "659-251-2880",
        "fax": null,
        "address": "2005 University Boulevard, Suite 2100, Tuscaloosa, AL, 35401"
      }
    ]
  },
  {
    "id": "T000278",
    "name": "Tommy Tuberville",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "AL",
    "stateName": "Alabama",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "455 Russell Senate Office Building",
    "address": "455 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4124",
    "fax": "202-225-0562",
    "website": "https://www.tuberville.senate.gov",
    "contactForm": "https://www.tuberville.senate.gov/contact/contact-form",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000278-birmingham",
        "label": "Birmingham",
        "phone": "205-760-7307",
        "fax": null,
        "address": "3000 Riverchase Galleria, Suite 915, Birmingham, AL, 35244"
      },
      {
        "id": "T000278-dothan",
        "label": "Dothan",
        "phone": "334-547-7441",
        "fax": null,
        "address": "100 West Troy St., Dothan, AL, 36303"
      },
      {
        "id": "T000278-huntsville",
        "label": "Huntsville",
        "phone": "256-692-7500",
        "fax": null,
        "address": "2101 Clinton Ave. W., Suite 300, Huntsville, AL, 35805"
      },
      {
        "id": "T000278-mobile",
        "label": "Mobile",
        "phone": "251-308-7233",
        "fax": null,
        "address": "41 West I-65, Service Rd. N., Suite 2300-A, 3BB&T Centre, Mobile, AL, 36608"
      },
      {
        "id": "T000278-montgomery",
        "label": "Montgomery",
        "phone": "334-523-7424",
        "fax": null,
        "address": "One Church St., Suite 500-B, Frank M Johnson Jr. Annex, Montgomery, AL, 36104"
      }
    ]
  },
  {
    "id": "S001198",
    "name": "Dan Sullivan",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "AK",
    "stateName": "Alaska",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "706 Hart Senate Office Building",
    "address": "706 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3004",
    "fax": null,
    "website": "https://www.sullivan.senate.gov",
    "contactForm": "https://www.sullivan.senate.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001198-anchorage",
        "label": "Anchorage",
        "phone": "907-271-5915",
        "fax": "907-258-9305",
        "address": "510 L St., Suite 750, Anchorage, AK, 99501"
      },
      {
        "id": "S001198-fairbanks",
        "label": "Fairbanks",
        "phone": "907-456-0261",
        "fax": "907-451-7290",
        "address": "101 12th Ave., Suite 328, Federal Building, Fairbanks, AK, 99701"
      },
      {
        "id": "S001198-juneau",
        "label": "Juneau",
        "phone": "907-205-3767",
        "fax": "907-586-7201",
        "address": "800 Glacier Ave., Suite 101, Juneau, AK, 99801"
      },
      {
        "id": "S001198-ketchikan",
        "label": "Ketchikan",
        "phone": "907-225-6880",
        "fax": "907-225-0390",
        "address": "1900 First Ave., Suite 225, Ketchikan, AK, 99901"
      },
      {
        "id": "S001198-soldotna",
        "label": "Soldotna",
        "phone": "907-262-4040",
        "fax": "907-262-4224",
        "address": "44539 Sterling Highway, Suite 204, Soldotna, AK, 99669"
      },
      {
        "id": "S001198-wasilla",
        "label": "Wasilla",
        "phone": "907-357-9956",
        "fax": "907-357-9964",
        "address": "851 E. Westpoint Dr., Suite 309, Wasilla, AK, 99654"
      }
    ]
  },
  {
    "id": "M001153",
    "name": "Lisa Murkowski",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "AK",
    "stateName": "Alaska",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "522 Hart Senate Office Building",
    "address": "522 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-6665",
    "fax": null,
    "website": "https://www.murkowski.senate.gov",
    "contactForm": "https://www.murkowski.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001153-anchorage",
        "label": "Anchorage",
        "phone": "907-271-3735",
        "fax": "877-857-0322",
        "address": "510 L St., Suite 600, Anchorage, AK, 99501"
      },
      {
        "id": "M001153-fairbanks",
        "label": "Fairbanks",
        "phone": "907-456-0233",
        "fax": "877-857-0322",
        "address": "101 12th Avenue, Suite 172, Fairbanks Federal Building, Fairbanks, AK, 99701"
      },
      {
        "id": "M001153-juneau",
        "label": "Juneau",
        "phone": "907-586-7277",
        "fax": "907-586-7201",
        "address": "800 Glacier Ave., Suite 101, Juneau, AK, 99801"
      },
      {
        "id": "M001153-ketchikan",
        "label": "Ketchikan",
        "phone": "907-225-6880",
        "fax": "907-225-0390",
        "address": "1900 First Ave., Suite 225, Ketchikan, AK, 99901"
      },
      {
        "id": "M001153-soldotna",
        "label": "Soldotna",
        "phone": "907-262-4220",
        "fax": "907-283-4363",
        "address": "44539 Sterling Hwy., Suite 203, Soldotna, AK, 99669"
      },
      {
        "id": "M001153-wasilla",
        "label": "Wasilla",
        "phone": "907-376-7665",
        "fax": "907-376-8526",
        "address": "851 E. Westpoint Dr., Suite 307, Wasilla, AK, 99654"
      }
    ]
  },
  {
    "id": "K000377",
    "name": "Mark Kelly",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "AZ",
    "stateName": "Arizona",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "516 Hart Senate Office Building",
    "address": "516 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2235",
    "fax": null,
    "website": "https://www.kelly.senate.gov",
    "contactForm": "https://www.kelly.senate.gov/contact/contact-form",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000377-phoenix",
        "label": "Phoenix",
        "phone": "602-671-7901",
        "fax": null,
        "address": "2201 E. Camelback Rd, Suite 115, Camelback Plaza, Phoenix, AZ, 85016"
      },
      {
        "id": "K000377-tucson",
        "label": "Tucson",
        "phone": "520-475-5177",
        "fax": null,
        "address": "100 North Stone Avenue, Suite 600, Tucson, AZ, 85701"
      }
    ]
  },
  {
    "id": "G000574",
    "name": "Ruben Gallego",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "AZ",
    "stateName": "Arizona",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "302 Hart Senate Office Building",
    "address": "302 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-4521",
    "fax": null,
    "website": "https://www.gallego.senate.gov",
    "contactForm": "https://www.gallego.senate.gov/share-your-opinion/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000574-phoenix",
        "label": "Phoenix",
        "phone": "480-697-3600",
        "fax": null,
        "address": "3333 E. Camelback Rd, Suite 200, Phoenix, AZ, 85018"
      },
      {
        "id": "G000574-tucson",
        "label": "Tucson",
        "phone": "520-777-0400",
        "fax": null,
        "address": "20 East Ochoa Street, Tucson, AZ, 85701"
      }
    ]
  },
  {
    "id": "B001236",
    "name": "John Boozman",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "AR",
    "stateName": "Arkansas",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "555 Dirksen Senate Office Building",
    "address": "555 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-4843",
    "fax": null,
    "website": "https://www.boozman.senate.gov/public",
    "contactForm": "https://www.boozman.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001236-el_dorado",
        "label": "El Dorado",
        "phone": "870-863-4641",
        "fax": "870-863-4105",
        "address": "106 W. Main St., Suite 104, El Dorado, AR, 71730"
      },
      {
        "id": "B001236-fort_smith",
        "label": "Fort Smith",
        "phone": "479-573-0189",
        "fax": "479-573-0553",
        "address": "1120 Garrison Ave., Suite 2B, Fort Smith, AR, 72901"
      },
      {
        "id": "B001236-jonesboro",
        "label": "Jonesboro",
        "phone": "870-268-6925",
        "fax": "870-268-6887",
        "address": "300 S. Church St., Suite 400, Jonesboro, AR, 72401"
      },
      {
        "id": "B001236-little_rock",
        "label": "Little Rock",
        "phone": "501-372-7153",
        "fax": "501-372-7163",
        "address": "1401 W. Capitol Ave., Suite 155, Little Rock, AR, 72201"
      },
      {
        "id": "B001236-lowell",
        "label": "Lowell",
        "phone": "479-725-0400",
        "fax": "479-725-0408",
        "address": "213 W. Monroe, Suite N, Lowell, AR, 72745"
      },
      {
        "id": "B001236-mountain_home",
        "label": "Mountain Home",
        "phone": "870-424-0129",
        "fax": "870-424-0141",
        "address": "1001 Hwy 62 East, Suite 11, Mountain Home, AR, 72653"
      },
      {
        "id": "B001236-stuttgart",
        "label": "Stuttgart",
        "phone": "870-672-6941",
        "fax": "870-672-6962",
        "address": "620 E. 22nd St., Suite 204, Stuttgart, AR, 72160"
      }
    ]
  },
  {
    "id": "C001095",
    "name": "Tom Cotton",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "AR",
    "stateName": "Arkansas",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "326 Russell Senate Office Building",
    "address": "326 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-2353",
    "fax": null,
    "website": "https://www.cotton.senate.gov",
    "contactForm": "https://www.cotton.senate.gov/contact/contact-tom",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001095-el_dorado",
        "label": "El Dorado",
        "phone": "870-864-8582",
        "fax": "870-864-8571",
        "address": "106 W. Main St., Suite 410, El Dorado, AR, 71730"
      },
      {
        "id": "C001095-jonesboro",
        "label": "Jonesboro",
        "phone": "870-933-6223",
        "fax": "870-933-6596",
        "address": "300 S. Church, Suite 338, Jonesboro, AR, 72401"
      },
      {
        "id": "C001095-little_rock",
        "label": "Little Rock",
        "phone": "501-223-9081",
        "fax": "501-223-9105",
        "address": "1401 W. Capitol Ave., Suite 235, Little Rock, AR, 72201"
      },
      {
        "id": "C001095-rogers",
        "label": "Rogers",
        "phone": "479-751-0879",
        "fax": "479-464-0648",
        "address": "3333 S. Pinnacle Hills Pkwy, Suite 425, Rogers, AR, 72758"
      }
    ]
  },
  {
    "id": "S001150",
    "name": "Adam B. Schiff",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "112 Hart Senate Office Building",
    "address": "112 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3841",
    "fax": "202-228-0026",
    "website": "https://www.schiff.senate.gov",
    "contactForm": "https://www.schiff.senate.gov/contact/get-in-touch/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001150-fresno",
        "label": "Fresno",
        "phone": "559-485-7430",
        "fax": null,
        "address": "2500 Tulare Street, Suite 4290, Fresno, CA, 93721"
      },
      {
        "id": "S001150-san_diego",
        "label": "San Diego",
        "phone": "619-231-9712",
        "fax": null,
        "address": "880 Front Street, Suite 4236, San Diego, CA, 92101"
      },
      {
        "id": "S001150-san_francisco",
        "label": "San Francisco",
        "phone": "415-393-0707",
        "fax": null,
        "address": "1 Post St, Suite 2450, San Francisco, CA, 94104"
      }
    ]
  },
  {
    "id": "P000145",
    "name": "Alex Padilla",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "CA",
    "stateName": "California",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "331 Hart Senate Office Building",
    "address": "331 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3553",
    "fax": null,
    "website": "https://www.padilla.senate.gov",
    "contactForm": "https://www.padilla.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000145-fresno",
        "label": "Fresno",
        "phone": "559-497-5109",
        "fax": "202-228-3864",
        "address": "2500 Tulare Street, Suite 5290, Fresno, CA, 93721"
      },
      {
        "id": "P000145-los_angeles",
        "label": "Los Angeles",
        "phone": "310-231-4494",
        "fax": "202-224-0357",
        "address": "255 E. Temple St., Suite 1860, Los Angeles, CA, 90012"
      },
      {
        "id": "P000145-sacramento",
        "label": "Sacramento",
        "phone": "916-448-2787",
        "fax": "202-228-3865",
        "address": "501 I Street, Suite 7-800, Sacramento, CA, 95814"
      },
      {
        "id": "P000145-san_diego",
        "label": "San Diego",
        "phone": "619-239-3884",
        "fax": "202-228-3863",
        "address": "600 B Street, Suite 2240, San Diego, CA, 92101"
      },
      {
        "id": "P000145-san_francisco",
        "label": "San Francisco",
        "phone": "415-981-9369",
        "fax": "202-224-0454",
        "address": "333 Bush Street, Suite 3225, San Francisco, CA, 94104"
      }
    ]
  },
  {
    "id": "H000273",
    "name": "John W. Hickenlooper",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "CO",
    "stateName": "Colorado",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "316 Hart Senate Office Building",
    "address": "316 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5941",
    "fax": "202-224-3115",
    "website": "https://www.hickenlooper.senate.gov",
    "contactForm": "https://www.hickenlooper.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H000273-colorado_springs",
        "label": "Colorado Springs",
        "phone": "719-632-6706",
        "fax": null,
        "address": "102 South Tejon St., Suite 930, Colorado Springs, CO, 80903"
      },
      {
        "id": "H000273-denver",
        "label": "Denver",
        "phone": "303-244-1628",
        "fax": null,
        "address": "1961 Stout St., Suite 12-300, Byron Rogers Federal Building, Denver, CO, 80294"
      },
      {
        "id": "H000273-durango",
        "label": "Durango",
        "phone": "970-880-7236",
        "fax": null,
        "address": "1309 East 3rd Ave., Suite 104, The Smiley Building, Durango, CO, 81301"
      },
      {
        "id": "H000273-fort_collins",
        "label": "Fort Collins",
        "phone": "970-484-3502",
        "fax": null,
        "address": "201 S College Ave., Suite 200, Fort Collins, CO, 80524"
      },
      {
        "id": "H000273-glenwood_springs",
        "label": "Glenwood Springs",
        "phone": "970-989-7075",
        "fax": null,
        "address": "1402 Blake Ave., Suite 109A, Glenwood Springs, CO, 81601"
      },
      {
        "id": "H000273-grand_junction",
        "label": "Grand Junction",
        "phone": "970-822-4530",
        "fax": null,
        "address": "400 Rood Ave., Suite 220, Wayne Aspinall Federal Building, Grand Junction, CO, 81501"
      },
      {
        "id": "H000273-greeley",
        "label": "Greeley",
        "phone": "970-352-5546",
        "fax": null,
        "address": "801 8th St., Suite 140A, Greeley, CO, 80631"
      }
    ]
  },
  {
    "id": "B001267",
    "name": "Michael F. Bennet",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "CO",
    "stateName": "Colorado",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "261 Russell Senate Office Building",
    "address": "261 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-5852",
    "fax": null,
    "website": "https://www.bennet.senate.gov",
    "contactForm": "https://www.bennet.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001267-alamosa",
        "label": "Alamosa",
        "phone": "719-587-0096",
        "fax": null,
        "address": "609 Main Street, Suite 206, Alamosa, CO, 81101"
      },
      {
        "id": "B001267-colorado_springs",
        "label": "Colorado Springs",
        "phone": "719-328-1100",
        "fax": "719-328-1129",
        "address": "409 N. Tejon St., Suite 107, Colorado Springs, CO, 80903"
      },
      {
        "id": "B001267-denver",
        "label": "Denver",
        "phone": "303-455-7600",
        "fax": "202-224-1866",
        "address": "1244 Speer Blvd., Cesar E. Chavez Memorial Building, Denver, CO, 80204"
      },
      {
        "id": "B001267-durango",
        "label": "Durango",
        "phone": "970-259-1710",
        "fax": "970-259-9789",
        "address": "1309 East 3rd Avenue, Suite 101, Smiley Building, Durango, CO, 81301"
      },
      {
        "id": "B001267-fort_collins",
        "label": "Fort Collins",
        "phone": "970-224-2200",
        "fax": "970-224-2205",
        "address": "1200 S. College Ave., Suite 211, Fort Collins, CO, 80524"
      },
      {
        "id": "B001267-grand_junction",
        "label": "Grand Junction",
        "phone": "970-241-6631",
        "fax": null,
        "address": "225 N. 5th St., Suite 511, Grand Junction, CO, 81501"
      },
      {
        "id": "B001267-pueblo",
        "label": "Pueblo",
        "phone": "719-542-7550",
        "fax": null,
        "address": "129 W. B St., Pueblo, CO, 81003"
      }
    ]
  },
  {
    "id": "M001169",
    "name": "Christopher Murphy",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "CT",
    "stateName": "Connecticut",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "136 Hart Senate Office Building",
    "address": "136 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-4041",
    "fax": null,
    "website": "https://www.murphy.senate.gov",
    "contactForm": "https://www.murphy.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001169-hartford",
        "label": "Hartford",
        "phone": "860-549-8463",
        "fax": "860-524-5091",
        "address": "120 Huyshope Ave., Suite 401, Colt Gateway, Hartford, CT, 06106"
      }
    ]
  },
  {
    "id": "B001277",
    "name": "Richard Blumenthal",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "CT",
    "stateName": "Connecticut",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "503 Hart Senate Office Building",
    "address": "503 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2823",
    "fax": null,
    "website": "https://www.blumenthal.senate.gov",
    "contactForm": "https://www.blumenthal.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001277-bridgeport",
        "label": "Bridgeport",
        "phone": "203-330-0598",
        "fax": "203-330-0608",
        "address": "915 Lafayette Blvd., Suite 304, Bridgeport, CT, 06604"
      },
      {
        "id": "B001277-hartford",
        "label": "Hartford",
        "phone": "860-258-6940",
        "fax": "860-258-6958",
        "address": "90 State House Sq., 10th Floor, Hartford, CT, 06103"
      }
    ]
  },
  {
    "id": "C001088",
    "name": "Christopher A. Coons",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "DE",
    "stateName": "Delaware",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "218 Russell Senate Office Building",
    "address": "218 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-5042",
    "fax": null,
    "website": "https://www.coons.senate.gov",
    "contactForm": "https://www.coons.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001088-dover",
        "label": "Dover",
        "phone": "302-736-5601",
        "fax": "302-736-5609",
        "address": "555 E. Loockerman St., Suite 330, Dover, DE, 19901"
      },
      {
        "id": "C001088-wilmington",
        "label": "Wilmington",
        "phone": "302-573-6345",
        "fax": "302-573-6351",
        "address": "1105 N. Market St., Suite 100, Wilmington, DE, 19801-1233"
      }
    ]
  },
  {
    "id": "B001303",
    "name": "Lisa Blunt Rochester",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "DE",
    "stateName": "Delaware",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "513 Hart Senate Office Building",
    "address": "513 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2441",
    "fax": null,
    "website": "https://www.bluntrochester.senate.gov",
    "contactForm": "https://www.bluntrochester.senate.gov/contact/write-to-lbr/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001303-dover",
        "label": "Dover",
        "phone": "302-674-3308",
        "fax": null,
        "address": "555 East Loockerman St., Suite 300, Dover, DE, 19901"
      },
      {
        "id": "B001303-georgetown",
        "label": "Georgetown",
        "phone": "302-856-7690",
        "fax": null,
        "address": "12 The Circle, Georgetown, DE, 19947"
      }
    ]
  },
  {
    "id": "M001244",
    "name": "Ashley Moody",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "387 Russell Senate Office Building",
    "address": "387 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-3041",
    "fax": null,
    "website": "https://www.moody.senate.gov",
    "contactForm": "https://www.moody.senate.gov/contact-us/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001244-fort_myers",
        "label": "Fort Myers",
        "phone": "239-318-6464",
        "fax": null,
        "address": "2120 Main Street, Suite 200, Fort Myers, FL, 33901"
      },
      {
        "id": "M001244-jacksonville",
        "label": "Jacksonville",
        "phone": "904-354-4300",
        "fax": null,
        "address": "300 North Hogan Street, Suite 8-111, Jacksonville, FL, 32202"
      },
      {
        "id": "M001244-miami",
        "label": "Miami",
        "phone": "305-596-4224",
        "fax": null,
        "address": "9130 S Dadeland Blvd., 1510, Miami, FL, 33156-7850"
      },
      {
        "id": "M001244-orlando",
        "label": "Orlando",
        "phone": "407-254-2573",
        "fax": null,
        "address": "201 S Orange Av., Suite 350, Orlando, FL, 32801-3499"
      },
      {
        "id": "M001244-palm_beach_gardens",
        "label": "Palm Beach Gardens",
        "phone": "561-775-3360",
        "fax": null,
        "address": "4822 Northlake Boulevard, Suite B-1, Palm Beach Gardens, FL, 33418-3920"
      },
      {
        "id": "M001244-tallahassee",
        "label": "Tallahassee",
        "phone": "850-599-9100",
        "fax": null,
        "address": "402 S. Monroe St., Suite 2105, Tallahassee, FL, 32399-6526"
      }
    ]
  },
  {
    "id": "S001217",
    "name": "Rick Scott",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "FL",
    "stateName": "Florida",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "110 Hart Senate Office Building",
    "address": "110 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5274",
    "fax": "202-228-4535",
    "website": "https://www.rickscott.senate.gov",
    "contactForm": "https://www.rickscott.senate.gov/contact/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001217-jacksonville",
        "label": "Jacksonville",
        "phone": "904-479-7227",
        "fax": null,
        "address": "400 West Bay Street, Suite 289, Jacksonville, FL, 32202"
      },
      {
        "id": "S001217-kissimmee",
        "label": "Kissimmee",
        "phone": "407-586-7879",
        "fax": null,
        "address": "1 Courthouse Square, Suite 300, Kissimmee, FL, 34741"
      },
      {
        "id": "S001217-miami",
        "label": "Miami",
        "phone": "786-501-7141",
        "fax": null,
        "address": "901 Ponce de Leon Boulevard, Suite 505, Miami, FL, 33134"
      },
      {
        "id": "S001217-naples",
        "label": "Naples",
        "phone": "239-231-7890",
        "fax": null,
        "address": "3299 Tamiami Trail East, Suite 106, Building F, Naples, FL, 34112"
      },
      {
        "id": "S001217-orlando",
        "label": "Orlando",
        "phone": "407-872-7161",
        "fax": null,
        "address": "225 East Robinson Street, Suite 410, Orlando, FL, 32801"
      },
      {
        "id": "S001217-pensacola",
        "label": "Pensacola",
        "phone": "850-760-5151",
        "fax": null,
        "address": "221 Palafox Place, Suite 420, Pensacola, FL, 32502"
      },
      {
        "id": "S001217-tallahassee",
        "label": "Tallahassee",
        "phone": "850-942-8415",
        "fax": null,
        "address": "111 N. Adams St., Suite 208, Tallahassee, FL, 32301"
      },
      {
        "id": "S001217-tampa",
        "label": "Tampa",
        "phone": "813-225-7040",
        "fax": null,
        "address": "801 North Florida Avenue, Suite 421, Tampa, FL, 33602"
      },
      {
        "id": "S001217-west_palm_beach",
        "label": "West Palm Beach",
        "phone": "561-514-0189",
        "fax": null,
        "address": "415 Clematis Street, Suite 201, West Palm Beach, FL, 33401"
      }
    ]
  },
  {
    "id": "O000174",
    "name": "Jon Ossoff",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "GA",
    "stateName": "Georgia",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "317 Hart Senate Office Building",
    "address": "317 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3521",
    "fax": null,
    "website": "https://www.ossoff.senate.gov",
    "contactForm": "https://www.ossoff.senate.gov/contact-us",
    "emails": [],
    "fieldOffices": [
      {
        "id": "O000174-atlanta",
        "label": "Atlanta",
        "phone": "470-786-7800",
        "fax": "404-949-0912",
        "address": "271 17th Street NW, Suite 1510, Atlanta, GA, 30363"
      },
      {
        "id": "O000174-augusta",
        "label": "Augusta",
        "phone": "706-261-5031",
        "fax": null,
        "address": "One Tenth Street, Suite 660, Augusta, GA, 30901"
      },
      {
        "id": "O000174-columbus",
        "label": "Columbus",
        "phone": "706-780-7053",
        "fax": "202-228-2346",
        "address": "18 9th Street, Suite 513, Columbus, GA, 31901"
      },
      {
        "id": "O000174-savannah",
        "label": "Savannah",
        "phone": "912-200-9402",
        "fax": "202-228-6565",
        "address": "532 Stephenson Avenue, Suite 103B, Savannah, GA, 31405"
      }
    ]
  },
  {
    "id": "W000790",
    "name": "Raphael G. Warnock",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "GA",
    "stateName": "Georgia",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "717 Hart Senate Office Building",
    "address": "717 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3643",
    "fax": "202-228-0724",
    "website": "https://www.warnock.senate.gov",
    "contactForm": "https://www.warnock.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000790-atlanta",
        "label": "Atlanta",
        "phone": "770-694-7828",
        "fax": null,
        "address": "201 17th Street NW, Suite 530, Suite 530, Atlanta, GA, 30363"
      }
    ]
  },
  {
    "id": "S001194",
    "name": "Brian Schatz",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "HI",
    "stateName": "Hawaii",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "722 Hart Senate Office Building",
    "address": "722 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3934",
    "fax": null,
    "website": "https://www.schatz.senate.gov",
    "contactForm": "https://www.schatz.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001194-honolulu",
        "label": "Honolulu",
        "phone": "808-523-2061",
        "fax": "808-523-2065",
        "address": "300 Ala Moana Blvd., Room 7-212, Honolulu, HI, 96850"
      }
    ]
  },
  {
    "id": "H001042",
    "name": "Mazie K. Hirono",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "HI",
    "stateName": "Hawaii",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "109 Hart Senate Office Building",
    "address": "109 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-6361",
    "fax": null,
    "website": "https://www.hirono.senate.gov",
    "contactForm": "https://www.hirono.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001042-honolulu",
        "label": "Honolulu",
        "phone": "808-522-8970",
        "fax": "808-545-4683",
        "address": "300 Ala Moana Blvd., Rm. 3-106, Prince Kuhio Federal Building, Honolulu, HI, 96850"
      }
    ]
  },
  {
    "id": "R000584",
    "name": "James E. Risch",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "ID",
    "stateName": "Idaho",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "483 Russell Senate Office Building",
    "address": "483 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-2752",
    "fax": null,
    "website": "https://www.risch.senate.gov",
    "contactForm": "https://www.risch.senate.gov/public/index.cfm?p=Email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000584-boise",
        "label": "Boise",
        "phone": "208-342-7985",
        "fax": "208-343-2458",
        "address": "350 N. 9th St., Suite 302, Boise, ID, 83702"
      },
      {
        "id": "R000584-coeur_d_alene",
        "label": "Coeur d'Alene",
        "phone": "208-667-6130",
        "fax": "208-765-1743",
        "address": "610 Hubbard, Suite 213, Harbor Plaza, Coeur d'Alene, ID, 83814"
      },
      {
        "id": "R000584-idaho_falls",
        "label": "Idaho Falls",
        "phone": "208-523-5541",
        "fax": "208-523-9373",
        "address": "901 Pier View Dr., Suite 202A, Idaho Falls, ID, 83402"
      },
      {
        "id": "R000584-lewiston",
        "label": "Lewiston",
        "phone": "208-743-0792",
        "fax": "208-746-7275",
        "address": "313 D St., Suite 106, Lewiston, ID, 83501"
      },
      {
        "id": "R000584-pocatello",
        "label": "Pocatello",
        "phone": "208-236-6817",
        "fax": "208-236-6820",
        "address": "275 South 5th Avenue, Suite 144, Pocatello, ID, 83201"
      },
      {
        "id": "R000584-twin_falls",
        "label": "Twin Falls",
        "phone": "208-734-6780",
        "fax": "208-734-3905",
        "address": "1411 Falls Avenue East, Suite 201, Twin Falls, ID, 83301"
      }
    ]
  },
  {
    "id": "C000880",
    "name": "Mike Crapo",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "ID",
    "stateName": "Idaho",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "239 Dirksen Senate Office Building",
    "address": "239 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-6142",
    "fax": null,
    "website": "https://www.crapo.senate.gov",
    "contactForm": "https://www.crapo.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C000880-boise",
        "label": "Boise",
        "phone": "208-334-1776",
        "fax": "208-334-9044",
        "address": "251 E. Front St., Suite 205, Boise, ID, 83702"
      },
      {
        "id": "C000880-coeur_d__alene",
        "label": "Coeur d'Alene",
        "phone": "208-664-5490",
        "fax": "208-664-0889",
        "address": "610 Hubbard Ave, Suite 209, Coeur d'Alene, ID, 83814"
      },
      {
        "id": "C000880-idaho_falls",
        "label": "Idaho Falls",
        "phone": "208-522-9779",
        "fax": "208-529-8367",
        "address": "410 Memorial Dr., Suite 204, Idaho Falls, ID, 83402"
      },
      {
        "id": "C000880-lewiston",
        "label": "Lewiston",
        "phone": "208-743-1492",
        "fax": "208-743-6484",
        "address": "313 'D' St., Suite 105, Lewiston, ID, 83501"
      },
      {
        "id": "C000880-pocatello",
        "label": "Pocatello",
        "phone": "208-236-6775",
        "fax": "208-236-6935",
        "address": "275 S. 5th Ave., Suite 138, Pocatello, ID, 83201"
      },
      {
        "id": "C000880-twin_falls",
        "label": "Twin Falls",
        "phone": "208-734-2515",
        "fax": "208-733-0414",
        "address": "202 Falls Ave., Suite 2, Twin Falls, ID, 83301"
      }
    ]
  },
  {
    "id": "D000563",
    "name": "Richard J. Durbin",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "711 Hart Senate Office Building",
    "address": "711 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2152",
    "fax": null,
    "website": "https://www.durbin.senate.gov",
    "contactForm": "https://www.durbin.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000563-carbondale",
        "label": "Carbondale",
        "phone": "618-351-1122",
        "fax": "618-351-1124",
        "address": "250 W. Cherry St., Suite 115-D, Carbondale, IL, 62901"
      },
      {
        "id": "D000563-chicago",
        "label": "Chicago",
        "phone": "312-353-4952",
        "fax": "312-353-0150",
        "address": "230 S. Dearborn St., Suite 3892, Chicago, IL, 60604"
      },
      {
        "id": "D000563-rock_island",
        "label": "Rock Island",
        "phone": "309-786-5173",
        "fax": "309-786-5404",
        "address": "1504 Third Ave., Suite 227, Rock Island, IL, 61201"
      },
      {
        "id": "D000563-springfield",
        "label": "Springfield",
        "phone": "217-492-4062",
        "fax": "217-492-4382",
        "address": "525 S. 8th St., Springfield, IL, 62703"
      }
    ]
  },
  {
    "id": "D000622",
    "name": "Tammy Duckworth",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "IL",
    "stateName": "Illinois",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "524 Hart Senate Office Building",
    "address": "524 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2854",
    "fax": null,
    "website": "https://www.duckworth.senate.gov",
    "contactForm": "https://www.duckworth.senate.gov/content/contact-senator",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000622-belleville",
        "label": "Belleville",
        "phone": "618-722-7070",
        "fax": "618-235-4011",
        "address": "23 Public Sq, Suite 460, Belleville, IL, 62220-1650"
      },
      {
        "id": "D000622-carbondale",
        "label": "Carbondale",
        "phone": "618-677-7000",
        "fax": "618-351-1551",
        "address": "441 E Willow St, Carbondale, IL, 62901-1659"
      },
      {
        "id": "D000622-chicago",
        "label": "Chicago",
        "phone": "312-886-3506",
        "fax": null,
        "address": "230 South Dearborn Street, Suite 3900, Chicago, IL, 60604"
      },
      {
        "id": "D000622-rock_island",
        "label": "Rock Island",
        "phone": "309-606-7060",
        "fax": "309-786-1799",
        "address": "1823 2nd Ave, Suite 2, Rock Island, IL, 61201-8002"
      },
      {
        "id": "D000622-springfield",
        "label": "Springfield",
        "phone": "217-528-6124",
        "fax": null,
        "address": "8 South Old State Capitol Plaza, Springfield, IL, 62701"
      }
    ]
  },
  {
    "id": "B001299",
    "name": "Jim Banks",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "303 Hart Senate Office Building",
    "address": "303 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-4814",
    "fax": null,
    "website": "https://www.banks.senate.gov",
    "contactForm": "https://www.banks.senate.gov/share-your-opinion/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001299-fort_wayne",
        "label": "Fort Wayne",
        "phone": "260-321-7130",
        "fax": null,
        "address": "1300 S. Harrison St., E Ross Adair Federal Building, Fort Wayne, IN, 46802"
      },
      {
        "id": "B001299-hammond",
        "label": "Hammond",
        "phone": null,
        "fax": null,
        "address": "5400 Federal Plaza, Suite 3200, Hammond Federal Building Courthouse, Hammond, IN, 46320"
      }
    ]
  },
  {
    "id": "Y000064",
    "name": "Todd Young",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "IN",
    "stateName": "Indiana",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "185 Dirksen Senate Office Building",
    "address": "185 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-5623",
    "fax": null,
    "website": "https://www.young.senate.gov",
    "contactForm": "https://www.young.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "Y000064-fort_wayne",
        "label": "Fort Wayne",
        "phone": null,
        "fax": null,
        "address": "1300 South Harrison Street, Suite 3161, Fort Wayne, IN, 46802"
      },
      {
        "id": "Y000064-indianapolis",
        "label": "Indianapolis",
        "phone": "317-226-6700",
        "fax": null,
        "address": "310 E. 96th St., Suite 350, Indianapolis, IN, 46240"
      },
      {
        "id": "Y000064-new_albany",
        "label": "New Albany",
        "phone": "812-542-4820",
        "fax": null,
        "address": "3602 Northgate Ct, Suite 15, New Albany, IN, 47150"
      },
      {
        "id": "Y000064-valparaiso",
        "label": "Valparaiso",
        "phone": "219-747-7780",
        "fax": null,
        "address": "212 E. Lincolnway, Suite 205A, Valparaiso, IN, 46383"
      }
    ]
  },
  {
    "id": "G000386",
    "name": "Chuck Grassley",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "IA",
    "stateName": "Iowa",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "135 Hart Senate Office Building",
    "address": "135 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3744",
    "fax": null,
    "website": "https://www.grassley.senate.gov",
    "contactForm": "https://www.grassley.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000386-cedar_rapids",
        "label": "Cedar Rapids",
        "phone": "319-363-6832",
        "fax": "319-363-7179",
        "address": "111 7th Avenue SE, Box 13, Suite 6800, Cedar Rapids, IA, 52401"
      },
      {
        "id": "G000386-council_bluffs",
        "label": "Council Bluffs",
        "phone": "712-322-7103",
        "fax": "712-322-7196",
        "address": "2146 27th Avenue, Suite 550, Council Bluffs, IA, 51501"
      },
      {
        "id": "G000386-davenport",
        "label": "Davenport",
        "phone": "563-322-4331",
        "fax": "563-322-8552",
        "address": "201 W. 2nd St., Suite 720, Davenport, IA, 52801"
      },
      {
        "id": "G000386-des_moines",
        "label": "Des Moines",
        "phone": "515-288-1145",
        "fax": "515-288-5097",
        "address": "210 Walnut St., 721, Federal Building, Des Moines, IA, 50309"
      },
      {
        "id": "G000386-sioux_city",
        "label": "Sioux City",
        "phone": "712-233-1860",
        "fax": "712-233-1634",
        "address": "320 6th St., 120, Federal Building, Sioux City, IA, 51101"
      },
      {
        "id": "G000386-waterloo",
        "label": "Waterloo",
        "phone": "319-232-6657",
        "fax": "319-232-9965",
        "address": "531 Commercial St., 210, Waterloo Building, Waterloo, IA, 50701"
      }
    ]
  },
  {
    "id": "E000295",
    "name": "Joni Ernst",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "IA",
    "stateName": "Iowa",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "260 Russell Senate Office Building",
    "address": "260 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-3254",
    "fax": null,
    "website": "https://www.ernst.senate.gov",
    "contactForm": "https://www.ernst.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "E000295-cedar_rapids",
        "label": "Cedar Rapids",
        "phone": "319-365-4504",
        "fax": "319-365-4683",
        "address": "111 Seventh Ave. SE, Suite 480, Cedar Rapids, IA, 52401"
      },
      {
        "id": "E000295-council_bluffs",
        "label": "Council Bluffs",
        "phone": "712-352-1167",
        "fax": "712-352-0087",
        "address": "2146 27 th Avenue, Suite 500, Council Bluffs, IA, 51501"
      },
      {
        "id": "E000295-davenport",
        "label": "Davenport",
        "phone": "563-322-0677",
        "fax": "563-322-0854",
        "address": "201 W. Second St., Suite 806, Davenport, IA, 52801"
      },
      {
        "id": "E000295-des_moines",
        "label": "Des Moines",
        "phone": "515-284-4574",
        "fax": "515-284-4937",
        "address": "210 Walnut Street, Suite 733, 733 Federal Building, Des Moines, IA, 50309"
      },
      {
        "id": "E000295-sioux_city",
        "label": "Sioux City",
        "phone": "712-252-1550",
        "fax": "712-252-1638",
        "address": "320 Sixth Street, Suite 194, Federal Building, Sioux City, IA, 51101"
      }
    ]
  },
  {
    "id": "M000934",
    "name": "Jerry Moran",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "KS",
    "stateName": "Kansas",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "521 Dirksen Senate Office Building",
    "address": "521 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-6521",
    "fax": null,
    "website": "https://www.moran.senate.gov",
    "contactForm": "https://www.moran.senate.gov/public/index.cfm/e-mail-jerry",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M000934-garden_city",
        "label": "Garden City",
        "phone": "620-260-3025",
        "fax": null,
        "address": "1511 East Fulton Terrace, Suite 1511-2, Garden City, KS, 67846"
      },
      {
        "id": "M000934-hays",
        "label": "Hays",
        "phone": "785-628-6401",
        "fax": "785-628-3791",
        "address": "1200 Main St., Suite 402, Hays, KS, 67601"
      },
      {
        "id": "M000934-manhattan",
        "label": "Manhattan",
        "phone": "785-539-8973",
        "fax": "785-587-0789",
        "address": "1880 Kimball Ave, Suite 270, Manhattan, KS, 66502"
      },
      {
        "id": "M000934-olathe",
        "label": "Olathe",
        "phone": "913-393-0711",
        "fax": "913-768-1366",
        "address": "23600 College Blvd., Suite 201, Olathe, KS, 66061"
      },
      {
        "id": "M000934-pittsburg",
        "label": "Pittsburg",
        "phone": "620-232-2286",
        "fax": "620-232-2284",
        "address": "306 N. Broadway, Suite 125, Pittsburg, KS, 66762"
      },
      {
        "id": "M000934-wichita",
        "label": "Wichita",
        "phone": "316-269-9259",
        "fax": "316-269-9257",
        "address": "100 North Broadway, Suite 210, Wichita, KS, 67202"
      }
    ]
  },
  {
    "id": "M001198",
    "name": "Roger Marshall",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "KS",
    "stateName": "Kansas",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "479a Russell Senate Office Building",
    "address": "479A Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4774",
    "fax": null,
    "website": "https://www.marshall.senate.gov",
    "contactForm": "https://www.marshall.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001198-garden_city",
        "label": "Garden City",
        "phone": "620-765-7800",
        "fax": null,
        "address": "921 Larue Street, Suite C, Garden City, KS, 67846"
      },
      {
        "id": "M001198-kansas_city",
        "label": "Kansas City",
        "phone": "913-549-1570",
        "fax": null,
        "address": "400 State Ave, Suite 1006, Kansas City, KS, 66101"
      },
      {
        "id": "M001198-overland_park",
        "label": "Overland Park",
        "phone": "913-879-7070",
        "fax": null,
        "address": "7011 W. 121st Street, Suite 100, Overland Park, KS, 66209"
      },
      {
        "id": "M001198-pittsburg",
        "label": "Pittsburg",
        "phone": "620-404-7016",
        "fax": null,
        "address": "402B North Broadway, Pittsburg, KS, 66762"
      },
      {
        "id": "M001198-salina",
        "label": "Salina",
        "phone": "785-829-9000",
        "fax": null,
        "address": "204 S. Santa Fe Avenue, Suite 1, Salina, KS, 67401"
      },
      {
        "id": "M001198-topeka",
        "label": "Topeka",
        "phone": "785-414-7501",
        "fax": null,
        "address": "800 SW Jackson Street, Suite 600, Topeka, KS, 66612"
      },
      {
        "id": "M001198-wichita",
        "label": "Wichita",
        "phone": "316-803-6120",
        "fax": null,
        "address": "100 S. Market, Suite 102, Wichita, KS, 67202"
      }
    ]
  },
  {
    "id": "M000355",
    "name": "Mitch McConnell",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "KY",
    "stateName": "Kentucky",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "317 Russell Senate Office Building",
    "address": "317 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-2541",
    "fax": null,
    "website": "https://www.mcconnell.senate.gov",
    "contactForm": "https://www.mcconnell.senate.gov/public/index.cfm?p=contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M000355-bowling_green",
        "label": "Bowling Green",
        "phone": "270-781-1673",
        "fax": null,
        "address": "241 E. Main St., Room 102, Federal Building, Bowling Green, KY, 42101"
      },
      {
        "id": "M000355-fort_wright",
        "label": "Fort Wright",
        "phone": "859-578-0188",
        "fax": null,
        "address": "1885 Dixie Hwy., Suite 345, Fort Wright, KY, 41011"
      },
      {
        "id": "M000355-lexington",
        "label": "Lexington",
        "phone": "859-224-8286",
        "fax": null,
        "address": "771 Corporate Dr., Suite 108, Lexington, KY, 40503"
      },
      {
        "id": "M000355-london",
        "label": "London",
        "phone": "606-864-2026",
        "fax": null,
        "address": "300 S. Main St., Suite 310, London, KY, 40741"
      },
      {
        "id": "M000355-louisville",
        "label": "Louisville",
        "phone": "502-582-6304",
        "fax": null,
        "address": "601 W. Broadway, Room 630, Louisville, KY, 40202"
      },
      {
        "id": "M000355-paducah",
        "label": "Paducah",
        "phone": "270-442-4554",
        "fax": null,
        "address": "501 Broadway Street, Suite B36, Paducah, KY, 42001"
      }
    ]
  },
  {
    "id": "P000603",
    "name": "Rand Paul",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "KY",
    "stateName": "Kentucky",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "295 Russell Senate Office Building",
    "address": "295 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4343",
    "fax": null,
    "website": "https://www.paul.senate.gov",
    "contactForm": "https://www.paul.senate.gov/connect/email-rand",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000603-bowling_green",
        "label": "Bowling Green",
        "phone": "270-782-8303",
        "fax": null,
        "address": "563 Hub Boulevard, Suite 201, Bowling Green, KY, 42103"
      }
    ]
  },
  {
    "id": "C001075",
    "name": "Bill Cassidy",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "LA",
    "stateName": "Louisiana",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "455 Dirksen Senate Office Building",
    "address": "455 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-5824",
    "fax": null,
    "website": "https://www.cassidy.senate.gov",
    "contactForm": "https://www.cassidy.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001075-alexandria",
        "label": "Alexandria",
        "phone": "318-448-7176",
        "fax": "318-448-5175",
        "address": "1611 Arnold Drive, Suite 112, Alexandria, LA, 71303"
      },
      {
        "id": "C001075-baton_rouge",
        "label": "Baton Rouge",
        "phone": "225-929-7711",
        "fax": "225-383-3768",
        "address": "450 Laurel St., Suite 1400, Baton Rouge, LA, 70801"
      },
      {
        "id": "C001075-lafayette",
        "label": "Lafayette",
        "phone": "337-261-1400",
        "fax": "337-261-1490",
        "address": "101 La Rue France, Suite 505, Lafayette, LA, 70508"
      },
      {
        "id": "C001075-lake_charles",
        "label": "Lake Charles",
        "phone": "337-602-7253",
        "fax": null,
        "address": "611 Broad St., Suite 117, Lake Charles, LA, 70601"
      },
      {
        "id": "C001075-metairie",
        "label": "Metairie",
        "phone": "504-838-0130",
        "fax": "504-838-0133",
        "address": "3421 N. Causeway Blvd., Suite 204, Metairie, LA, 70002"
      },
      {
        "id": "C001075-monroe",
        "label": "Monroe",
        "phone": "318-324-2111",
        "fax": "318-324-2197",
        "address": "1651 Louisville Ave., Suite 123, Monroe, LA, 70201"
      },
      {
        "id": "C001075-shreveport",
        "label": "Shreveport",
        "phone": "318-798-3215",
        "fax": "318-798-8473",
        "address": "401 Market St, Suite 1018, Shreveport, LA, 71101"
      }
    ]
  },
  {
    "id": "K000393",
    "name": "John Kennedy",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "LA",
    "stateName": "Louisiana",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "437 Russell Senate Office Building",
    "address": "437 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4623",
    "fax": null,
    "website": "https://www.kennedy.senate.gov/public",
    "contactForm": "https://www.kennedy.senate.gov/public/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000393-alexandria",
        "label": "Alexandria",
        "phone": "318-445-2892",
        "fax": null,
        "address": "1611 Arnold Drive, Suite 126, England Airpark, Alexandria, LA, 71303"
      },
      {
        "id": "K000393-baton_rouge",
        "label": "Baton Rouge",
        "phone": "225-926-8033",
        "fax": null,
        "address": "7932 Wrenwood Blvd, Suite A & B, Baton Rouge, LA, 70809"
      },
      {
        "id": "K000393-houma",
        "label": "Houma",
        "phone": "985-851-0956",
        "fax": null,
        "address": "8026 Main St, Suite 700, Government Towers, Houma, LA, 70360"
      },
      {
        "id": "K000393-lafayette",
        "label": "Lafayette",
        "phone": "337-269-5980",
        "fax": null,
        "address": "315 S. College Road, Suite 140, Lafayette, LA, 70503"
      },
      {
        "id": "K000393-lake_charles",
        "label": "Lake Charles",
        "phone": "337-573-6800",
        "fax": null,
        "address": "814 West McNeese Street, Suite 213, Lake Charles, LA, 70605"
      },
      {
        "id": "K000393-mandeville",
        "label": "Mandeville",
        "phone": "985-809-8153",
        "fax": null,
        "address": "21490 Koop Dr., Building A, Mandeville, LA, 70471"
      },
      {
        "id": "K000393-monroe",
        "label": "Monroe",
        "phone": "318-361-1489",
        "fax": null,
        "address": "1651 Louisville Ave., Suite 148, Monroe, LA, 71201"
      },
      {
        "id": "K000393-new_orleans",
        "label": "New Orleans",
        "phone": "504-581-6190",
        "fax": null,
        "address": "500 Poydras St., Suite 364, New Orleans, LA, 70113"
      },
      {
        "id": "K000393-shreveport",
        "label": "Shreveport",
        "phone": "318-670-5192",
        "fax": null,
        "address": "401 Market St., Suite 1050, Shreveport, LA, 71101"
      }
    ]
  },
  {
    "id": "K000383",
    "name": "Angus S. King, Jr.",
    "chamber": "Senate",
    "role": "Senator",
    "party": "I",
    "partyName": "Independent",
    "state": "ME",
    "stateName": "Maine",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "133 Hart Senate Office Building",
    "address": "133 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5344",
    "fax": null,
    "website": "https://www.king.senate.gov",
    "contactForm": "https://www.king.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000383-augusta",
        "label": "Augusta",
        "phone": "207-622-8292",
        "fax": null,
        "address": "40 Western Ave, Room 412, E.S. Muskie Federal Building, Augusta, ME, 04330"
      },
      {
        "id": "K000383-bangor",
        "label": "Bangor",
        "phone": "207-945-8000",
        "fax": null,
        "address": "202 Harlow St., Suite 20350, Bangor, ME, 04401"
      },
      {
        "id": "K000383-biddeford",
        "label": "Biddeford",
        "phone": "207-352-5216",
        "fax": null,
        "address": "227 Main Street, Biddeford, ME, 04005"
      },
      {
        "id": "K000383-portland",
        "label": "Portland",
        "phone": "207-245-1565",
        "fax": null,
        "address": "1 Pleasant Street, Suite 4W, Portland, ME, 04101"
      },
      {
        "id": "K000383-presque_isle",
        "label": "Presque Isle",
        "phone": "207-764-5124",
        "fax": null,
        "address": "167 Academy St., Suite A, Presque Isle, ME, 04769"
      }
    ]
  },
  {
    "id": "C001035",
    "name": "Susan M. Collins",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "ME",
    "stateName": "Maine",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "413 Dirksen Senate Office Building",
    "address": "413 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-2523",
    "fax": null,
    "website": "https://www.collins.senate.gov",
    "contactForm": "https://www.collins.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001035-augusta",
        "label": "Augusta",
        "phone": "207-622-8414",
        "fax": null,
        "address": "68 Sewall St., Room 507, Augusta, ME, 04330"
      },
      {
        "id": "C001035-bangor",
        "label": "Bangor",
        "phone": "207-945-0417",
        "fax": null,
        "address": "202 Harlow St., Room 20100, Bangor, ME, 04401"
      },
      {
        "id": "C001035-biddeford",
        "label": "Biddeford",
        "phone": "207-283-1101",
        "fax": null,
        "address": "160 Main St., Biddeford, ME, 04005"
      },
      {
        "id": "C001035-caribou",
        "label": "Caribou",
        "phone": "207-493-7873",
        "fax": null,
        "address": "25 Sweden St., Suite A, Caribou, ME, 04736"
      },
      {
        "id": "C001035-lewiston",
        "label": "Lewiston",
        "phone": "207-784-6969",
        "fax": null,
        "address": "55 Lisbon St., Lewiston, ME, 04240"
      },
      {
        "id": "C001035-portland",
        "label": "Portland",
        "phone": "207-618-5560",
        "fax": null,
        "address": "One Canal Plaza, Suite 802, Portland, ME, 04101"
      }
    ]
  },
  {
    "id": "A000382",
    "name": "Angela D. Alsobrooks",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "374 Russell Senate Office Building",
    "address": "374 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4524",
    "fax": null,
    "website": "https://www.alsobrooks.senate.gov",
    "contactForm": "https://alsobrooks.senate.gov",
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000382-bowie",
        "label": "Bowie",
        "phone": "301-860-0414",
        "fax": null,
        "address": "10201 Martin Luther King Jr Hwy, Suite 210, Bowie, MD, 20720"
      }
    ]
  },
  {
    "id": "V000128",
    "name": "Chris Van Hollen",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "MD",
    "stateName": "Maryland",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "730 Hart Senate Office Building",
    "address": "730 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-4654",
    "fax": null,
    "website": "https://www.vanhollen.senate.gov",
    "contactForm": "https://www.vanhollen.senate.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "V000128-annapolis",
        "label": "Annapolis",
        "phone": "410-263-1325",
        "fax": null,
        "address": "60 West Street, Suite 107, Annapolis, MD, 21401"
      },
      {
        "id": "V000128-baltimore",
        "label": "Baltimore",
        "phone": "667-212-4610",
        "fax": null,
        "address": "1040 Park Ave., Suite 120, Baltimore, MD, 21201"
      },
      {
        "id": "V000128-cambridge",
        "label": "Cambridge",
        "phone": "410-221-2074",
        "fax": null,
        "address": "204 Cedar Street, Suite 200C, Cambridge, MD, 21613"
      },
      {
        "id": "V000128-hagerstown",
        "label": "Hagerstown",
        "phone": "301-797-2826",
        "fax": null,
        "address": "32 West Washington Street, Suite 203, Hagerstown, MD, 21740"
      },
      {
        "id": "V000128-largo",
        "label": "Largo",
        "phone": "301-322-6560",
        "fax": null,
        "address": "1101 Mercantile Ln, Suite 210, Largo, MD, 20774-5360"
      },
      {
        "id": "V000128-rockville",
        "label": "Rockville",
        "phone": "301-545-1500",
        "fax": "301-545-1512",
        "address": "111 Rockville Pike, Suite 960, Rockville, MD, 20850"
      }
    ]
  },
  {
    "id": "M000133",
    "name": "Edward J. Markey",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "255 Dirksen Senate Office Building",
    "address": "255 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-2742",
    "fax": "202-228-0769",
    "website": "https://www.markey.senate.gov",
    "contactForm": "https://www.markey.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M000133-boston",
        "label": "Boston",
        "phone": "617-565-8519",
        "fax": null,
        "address": "15 New Sudbury St, Suite 975, JFK Federal Building, Boston, MA, 02203"
      },
      {
        "id": "M000133-springfield",
        "label": "Springfield",
        "phone": "413-785-4610",
        "fax": null,
        "address": "1550 Main St., 4th Floor, Springfield, MA, 01103"
      }
    ]
  },
  {
    "id": "W000817",
    "name": "Elizabeth Warren",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "MA",
    "stateName": "Massachusetts",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "311 Hart Senate Office Building",
    "address": "311 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-4543",
    "fax": null,
    "website": "https://www.warren.senate.gov",
    "contactForm": "https://www.warren.senate.gov/?p=email_senator",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000817-boston",
        "label": "Boston",
        "phone": "617-565-3170",
        "fax": null,
        "address": "15 New Sudbury Street, 2400 JFK Federal Building, Boston, MA, 02203"
      },
      {
        "id": "W000817-springfield",
        "label": "Springfield",
        "phone": "413-788-2690",
        "fax": null,
        "address": "1550 Main St., Suite 406, Springfield, MA, 01103"
      }
    ]
  },
  {
    "id": "S001208",
    "name": "Elissa Slotkin",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "MI",
    "stateName": "Michigan",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "291 Russell Senate Office Building",
    "address": "291 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4822",
    "fax": null,
    "website": "https://www.slotkin.senate.gov",
    "contactForm": "https://outreach.senate.gov/iqextranet/EForm.aspx?__cid=SenSlotkin&__fid=100053&iframe=Y",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001208-detroit",
        "label": "Detroit",
        "phone": null,
        "fax": null,
        "address": "719 Griswold Street, Suite 700, Detroit, MI, 48226"
      },
      {
        "id": "S001208-flint",
        "label": "Flint",
        "phone": null,
        "fax": null,
        "address": "432 North Saginaw St., Suite 301, Flint, MI, 48502"
      },
      {
        "id": "S001208-lansing",
        "label": "Lansing",
        "phone": "517-993-0510",
        "fax": null,
        "address": "315 W. Allegan St., Suite 207, Lansing, MI, 48933"
      },
      {
        "id": "S001208-traverse_city",
        "label": "Traverse City",
        "phone": null,
        "fax": null,
        "address": "3335 South Airport Road West, Suite 6B, Traverse City, MI, 49684"
      }
    ]
  },
  {
    "id": "P000595",
    "name": "Gary C. Peters",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "MI",
    "stateName": "Michigan",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "724 Hart Senate Office Building",
    "address": "724 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-6221",
    "fax": null,
    "website": "https://www.peters.senate.gov",
    "contactForm": "https://www.peters.senate.gov/contact/email-gary",
    "emails": [],
    "fieldOffices": [
      {
        "id": "P000595-detroit",
        "label": "Detroit",
        "phone": "313-226-6020",
        "fax": null,
        "address": "477 Michigan Ave., Suite 1837, Patrick V. McNamara Federal Building, Detroit, MI, 48226"
      },
      {
        "id": "P000595-flint",
        "label": "Flint",
        "phone": "989-754-0112",
        "fax": null,
        "address": "416 N Saginaw Street, Suite 222, Flint, MI, 48502"
      },
      {
        "id": "P000595-grand_rapids",
        "label": "Grand Rapids",
        "phone": "616-233-9150",
        "fax": null,
        "address": "110 Michigan St. NW, Suite 720, Gerald R. Ford Federal Building, Grand Rapids, MI, 49503"
      },
      {
        "id": "P000595-lansing",
        "label": "Lansing",
        "phone": "517-377-1508",
        "fax": null,
        "address": "124 W. Allegan St., Suite 1400, Lansing, MI, 48933"
      },
      {
        "id": "P000595-marquette",
        "label": "Marquette",
        "phone": "906-226-4554",
        "fax": null,
        "address": "857 W. Washington St., Suite 308, Marquette, MI, 49855"
      },
      {
        "id": "P000595-pontiac",
        "label": "Pontiac",
        "phone": "248-608-8040",
        "fax": null,
        "address": "51111 Woodward Avenue, Suite 725, Pontiac, MI, 48342"
      },
      {
        "id": "P000595-traverse_city",
        "label": "Traverse City",
        "phone": "231-947-7773",
        "fax": null,
        "address": "109 E. Front Street, 215B, Traverse City, MI, 49684"
      }
    ]
  },
  {
    "id": "K000367",
    "name": "Amy Klobuchar",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "MN",
    "stateName": "Minnesota",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "425 Dirksen Senate Office Building",
    "address": "425 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-3244",
    "fax": null,
    "website": "https://www.klobuchar.senate.gov",
    "contactForm": "https://www.klobuchar.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000367-minneapolis",
        "label": "Minneapolis",
        "phone": "612-727-5220",
        "fax": "202-224-1792",
        "address": "1200 Washington Avenue South, Room 250, Minneapolis, MN, 55415"
      },
      {
        "id": "K000367-moorhead",
        "label": "Moorhead",
        "phone": "218-287-2219",
        "fax": "202-224-1792",
        "address": "121 4th Street South, Moorhead, MN, 56560"
      },
      {
        "id": "K000367-rochester",
        "label": "Rochester",
        "phone": "507-288-5321",
        "fax": "202-224-1792",
        "address": "1130 1/2 7th Street NW, Room 212, Rochester, MN, 55901"
      },
      {
        "id": "K000367-virginia",
        "label": "Virginia",
        "phone": "218-741-9690",
        "fax": "202-224-1792",
        "address": "820 9th Street North, Room 105, Olcott Plaza, Virginia, MN, 55792"
      }
    ]
  },
  {
    "id": "S001203",
    "name": "Tina Smith",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "MN",
    "stateName": "Minnesota",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "720 Hart Senate Office Building",
    "address": "720 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5641",
    "fax": null,
    "website": "https://www.smith.senate.gov",
    "contactForm": "https://www.smith.senate.gov/share-your-opinion",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001203-duluth",
        "label": "Duluth",
        "phone": "218-722-2390",
        "fax": null,
        "address": "515 W 1st Street, Suite 104, Duluth, MN, 55802"
      },
      {
        "id": "S001203-moorhead",
        "label": "Moorhead",
        "phone": "218-284-8721",
        "fax": null,
        "address": "819 Center Avenue, Suite 2A, Moorhead, MN, 56560"
      },
      {
        "id": "S001203-rochester",
        "label": "Rochester",
        "phone": "507-218-2003",
        "fax": null,
        "address": "1202-1/2 7th Street NW, Suite 218, Rochester, MN, 55901"
      },
      {
        "id": "S001203-saint_paul",
        "label": "Saint Paul",
        "phone": "651-221-1016",
        "fax": null,
        "address": "60 Plato Blvd. East, Suite 220, Saint Paul, MN, 55107"
      }
    ]
  },
  {
    "id": "H001079",
    "name": "Cindy Hyde-Smith",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "MS",
    "stateName": "Mississippi",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "528 Hart Senate Office Building",
    "address": "528 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5054",
    "fax": null,
    "website": "https://www.hydesmith.senate.gov",
    "contactForm": "https://www.hydesmith.senate.gov/contact-senator",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001079-brookhaven",
        "label": "Brookhaven",
        "phone": "601-748-8024",
        "fax": "202-224-7444",
        "address": "117 W. Cherokee St, Suite C, Brookhaven, MS, 39601"
      },
      {
        "id": "H001079-gulfport",
        "label": "Gulfport",
        "phone": "228-867-9710",
        "fax": "228-867-9789",
        "address": "2012 15th Street, #451, Gulfport, MS, 39501"
      },
      {
        "id": "H001079-jackson",
        "label": "Jackson",
        "phone": "601-965-4459",
        "fax": "202-228-6004",
        "address": "190 East Capitol St., #550, Jackson, MS, 39201"
      },
      {
        "id": "H001079-oxford",
        "label": "Oxford",
        "phone": "662-236-1018",
        "fax": "662-236-7618",
        "address": "911 Jackson Ave., #249, Oxford, MS, 38655"
      }
    ]
  },
  {
    "id": "W000437",
    "name": "Roger F. Wicker",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "MS",
    "stateName": "Mississippi",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "425 Russell Senate Office Building",
    "address": "425 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-6253",
    "fax": null,
    "website": "https://www.wicker.senate.gov",
    "contactForm": "https://www.wicker.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000437-gulfport",
        "label": "Gulfport",
        "phone": "228-871-7017",
        "fax": "228-871-7196",
        "address": "2909 13th St., 3rd Floor, Suite 303, Gulfport, MS, 39501"
      },
      {
        "id": "W000437-hernando",
        "label": "Hernando",
        "phone": "662-429-1002",
        "fax": "662-429-6002",
        "address": "321 Losher St., Hernando, MS, 38632"
      },
      {
        "id": "W000437-jackson",
        "label": "Jackson",
        "phone": "601-965-4644",
        "fax": "601-965-4007",
        "address": "501 E. Court St., Suite 3-500, U.S. Federal Courthouse, Jackson, MS, 39201"
      },
      {
        "id": "W000437-tupelo",
        "label": "Tupelo",
        "phone": "662-844-5010",
        "fax": "662-844-5030",
        "address": "330 W. Jefferson St., Suite B, Tupelo, MS, 38804"
      },
      {
        "id": "W000437-tupelo-1",
        "label": "Tupelo",
        "phone": "662-844-5010",
        "fax": null,
        "address": "P.O. Box 3777, Tupelo, MS, 38803"
      }
    ]
  },
  {
    "id": "S001227",
    "name": "Eric Schmitt",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "MO",
    "stateName": "Missouri",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "404 Russell Senate Office Building",
    "address": "404 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-5721",
    "fax": null,
    "website": "https://www.schmitt.senate.gov",
    "contactForm": "https://www.schmitt.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001227-cape_girardeau",
        "label": "Cape Girardeau",
        "phone": "573-388-8340",
        "fax": null,
        "address": "555 Independence St., Suite 1500, Cape Girardeau, MO, 63703"
      },
      {
        "id": "S001227-columbia",
        "label": "Columbia",
        "phone": "573-514-8680",
        "fax": null,
        "address": "1123 Wilkes Boulevard, Suite 320, Columbia, MO, 65201"
      },
      {
        "id": "S001227-kansas_city",
        "label": "Kansas City",
        "phone": "816-849-6234",
        "fax": null,
        "address": "12200 N Ambassador Dr., Suite 233, Kansas City, MO, 64163"
      },
      {
        "id": "S001227-springfield",
        "label": "Springfield",
        "phone": "417-290-5000",
        "fax": null,
        "address": "2870 S. Ingram Mill Rd., Suite D2, Springfield, MO, 65804"
      },
      {
        "id": "S001227-st__louis",
        "label": "St. Louis",
        "phone": "314-230-7263",
        "fax": null,
        "address": "111 South 10th Street, Suite 23.305, Thomas F. Eagleton US Courthouse, St. Louis, MO, 63102"
      }
    ]
  },
  {
    "id": "H001089",
    "name": "Josh Hawley",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "MO",
    "stateName": "Missouri",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "381 Russell Senate Office Building",
    "address": "381 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-6154",
    "fax": null,
    "website": "https://www.hawley.senate.gov",
    "contactForm": "https://www.hawley.senate.gov/contact-senator-hawley",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001089-cape_girardeau",
        "label": "Cape Girardeau",
        "phone": "573-334-5995",
        "fax": "573-334-5947",
        "address": "555 Independence Street, #1600, Cape Girardeau, MO, 63703-6235"
      },
      {
        "id": "H001089-columbia",
        "label": "Columbia",
        "phone": "573-554-1919",
        "fax": null,
        "address": "1123 Wilkes Blvd, Suite 220, Columbia, MO, 65201-4774"
      },
      {
        "id": "H001089-kansas_city",
        "label": "Kansas City",
        "phone": "816-960-4694",
        "fax": "816-472-6812",
        "address": "400 E. 9th Street, Suite 9350, Kansas City, MO, 64106"
      },
      {
        "id": "H001089-springfield",
        "label": "Springfield",
        "phone": "417-869-4433",
        "fax": null,
        "address": "901 E. St. Louis Street, Suite 1604, Springfield, MO, 65806"
      },
      {
        "id": "H001089-st__louis",
        "label": "St. Louis",
        "phone": "314-354-7060",
        "fax": "314-436-8534",
        "address": "111 South 10th Street, Suite 23.360, St. Louis, MO, 63102"
      }
    ]
  },
  {
    "id": "D000618",
    "name": "Steve Daines",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "MT",
    "stateName": "Montana",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "320 Hart Senate Office Building",
    "address": "320 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2651",
    "fax": null,
    "website": "https://www.daines.senate.gov",
    "contactForm": "https://www.daines.senate.gov/connect/email-steve",
    "emails": [],
    "fieldOffices": [
      {
        "id": "D000618-billings",
        "label": "Billings",
        "phone": "406-245-6822",
        "fax": "406-245-1607",
        "address": "222 N. 32nd St., Suite 100, Billings, MT, 59101"
      },
      {
        "id": "D000618-bozeman",
        "label": "Bozeman",
        "phone": "406-587-3446",
        "fax": "406-219-2354",
        "address": "1450 Twin Lakes Avenue, Suite 201A, Bozeman, MT, 59718"
      },
      {
        "id": "D000618-great_falls",
        "label": "Great Falls",
        "phone": "406-453-0148",
        "fax": "406-453-5379",
        "address": "104 4th Street North, Suite 302, Great Falls, MT, 59401"
      },
      {
        "id": "D000618-helena",
        "label": "Helena",
        "phone": "406-443-3189",
        "fax": "406-443-3306",
        "address": "30 W. 14th St., Suite 206, Helena, MT, 59601"
      },
      {
        "id": "D000618-kalispell",
        "label": "Kalispell",
        "phone": "406-257-3765",
        "fax": null,
        "address": "121 Financial Drive, Suite 127, Kalispell, MT, 59901"
      },
      {
        "id": "D000618-missoula",
        "label": "Missoula",
        "phone": "406-549-8198",
        "fax": "406-549-0905",
        "address": "218 E. Front St., Suite 103, Missoula, MT, 59802"
      },
      {
        "id": "D000618-sidney",
        "label": "Sidney",
        "phone": "406-482-9010",
        "fax": "406-482-9059",
        "address": "609 S. Central Ave., Suite #4, Central Plaza Building, Sidney, MT, 59270"
      }
    ]
  },
  {
    "id": "S001232",
    "name": "Tim Sheehy",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "MT",
    "stateName": "Montana",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "124 Russell Senate Office Building",
    "address": "124 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-2644",
    "fax": null,
    "website": "https://www.sheehy.senate.gov",
    "contactForm": "https://www.sheehy.senate.gov/share-your-opinion/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001232-billings",
        "label": "Billings",
        "phone": "406-252-0559",
        "fax": null,
        "address": "2900 4th Ave N, Suite 201, William J. Jameson Federal Building, Billings, MT, 59101"
      },
      {
        "id": "S001232-bozeman",
        "label": "Bozeman",
        "phone": "406-872-6350",
        "fax": null,
        "address": "1 East Main Street, Suite 204, Bozeman, MT, 59715"
      },
      {
        "id": "S001232-butte",
        "label": "Butte",
        "phone": "406-782-2048",
        "fax": null,
        "address": "125 West Granite St, Suite 200, Silver Bow Center, Butte, MT, 59701"
      },
      {
        "id": "S001232-east_kalispell",
        "label": "East Kalispell",
        "phone": "406-257-3398",
        "fax": null,
        "address": "8-3rd Street, East Kalispell, MT, 59901"
      },
      {
        "id": "S001232-great_falls",
        "label": "Great Falls",
        "phone": "406-452-9587",
        "fax": null,
        "address": "119 1st Ave North, Suite 102, Great Falls, MT, 59401"
      },
      {
        "id": "S001232-helena",
        "label": "Helena",
        "phone": "406-441-1069",
        "fax": null,
        "address": "208 N Montana Ave, Suite 104, Helena, MT, 59601"
      }
    ]
  },
  {
    "id": "F000463",
    "name": "Deb Fischer",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "NE",
    "stateName": "Nebraska",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "448 Russell Senate Office Building",
    "address": "448 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-6551",
    "fax": null,
    "website": "https://www.fischer.senate.gov",
    "contactForm": "https://www.fischer.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000463-kearney",
        "label": "Kearney",
        "phone": "308-234-2361",
        "fax": "308-234-3684",
        "address": "20 W. 23rd St., Kearney, NE, 68847"
      },
      {
        "id": "F000463-lincoln",
        "label": "Lincoln",
        "phone": "402-441-4600",
        "fax": "402-476-8753",
        "address": "1248 O Street, Suite #1111, Lincoln, NE, 68508"
      },
      {
        "id": "F000463-omaha",
        "label": "Omaha",
        "phone": "402-391-3411",
        "fax": "402-391-4725",
        "address": "11819 Miracle Hills Drive, Suite 205, Omaha, NE, 68154"
      },
      {
        "id": "F000463-scottsbluff",
        "label": "Scottsbluff",
        "phone": "308-630-2329",
        "fax": "308-630-2321",
        "address": "120 East 16th St., Suite 203, Scottsbluff, NE, 69361"
      }
    ]
  },
  {
    "id": "R000618",
    "name": "Pete Ricketts",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "NE",
    "stateName": "Nebraska",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "139 Russell Senate Office Building",
    "address": "139 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4224",
    "fax": null,
    "website": "https://www.ricketts.senate.gov",
    "contactForm": "https://www.ricketts.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000618-kearney",
        "label": "Kearney",
        "phone": "308-233-3677",
        "fax": null,
        "address": "4111 4th Ave., Suite 26, Kearney, NE, 68845"
      },
      {
        "id": "R000618-lincoln",
        "label": "Lincoln",
        "phone": "402-476-1400",
        "fax": null,
        "address": "1248 ‘O’ St., Suite 1000, Lincoln, NE, 68508"
      },
      {
        "id": "R000618-omaha",
        "label": "Omaha",
        "phone": "402-550-8040",
        "fax": null,
        "address": "304 N. 168th Circle, Suite 213, Omaha, NE, 68118"
      },
      {
        "id": "R000618-scottsbluff",
        "label": "Scottsbluff",
        "phone": "308-632-6032",
        "fax": null,
        "address": "115 Railway St., Suite C102, Scottsbluff, NE, 69361"
      }
    ]
  },
  {
    "id": "C001113",
    "name": "Catherine Cortez Masto",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NV",
    "stateName": "Nevada",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "309 Hart Senate Office Building",
    "address": "309 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3542",
    "fax": null,
    "website": "https://www.cortezmasto.senate.gov",
    "contactForm": "https://www.cortezmasto.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001113-las_vegas",
        "label": "Las Vegas",
        "phone": "702-388-5020",
        "fax": "702-388-5030",
        "address": "333 Las Vegas Boulevard South, Suite 8016, Las Vegas, NV, 89101"
      },
      {
        "id": "C001113-reno",
        "label": "Reno",
        "phone": "775-686-5750",
        "fax": "775-686-5757",
        "address": "400 South Virginia Street, Suite 902, Courthouse and Federal Building, Reno, NV, 89501"
      }
    ]
  },
  {
    "id": "R000608",
    "name": "Jacky Rosen",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NV",
    "stateName": "Nevada",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "713 Hart Senate Office Building",
    "address": "713 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-6244",
    "fax": null,
    "website": "https://www.rosen.senate.gov",
    "contactForm": "https://www.rosen.senate.gov/contact_jacky",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000608-las_vegas",
        "label": "Las Vegas",
        "phone": "702-388-0205",
        "fax": null,
        "address": "333 Las Vegas Boulevard South, Suite 8203, Lloyd D. George U.S. Courthouse, Las Vegas, NV, 89101"
      },
      {
        "id": "R000608-reno",
        "label": "Reno",
        "phone": "775-337-0110",
        "fax": null,
        "address": "400 S Virginia St, Suite 738, Bruce Thompson Federal Building, Reno, NV, 89501-2132"
      }
    ]
  },
  {
    "id": "S001181",
    "name": "Jeanne Shaheen",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NH",
    "stateName": "New Hampshire",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "506 Hart Senate Office Building",
    "address": "506 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2841",
    "fax": null,
    "website": "https://www.shaheen.senate.gov",
    "contactForm": "https://www.shaheen.senate.gov/contact/contact-jeanne",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001181-berlin",
        "label": "Berlin",
        "phone": "603-752-6300",
        "fax": null,
        "address": "961 Main St., Berlin, NH, 03570"
      },
      {
        "id": "S001181-claremont",
        "label": "Claremont",
        "phone": "603-542-4872",
        "fax": null,
        "address": "50 Opera House Sq., Claremont, NH, 03743"
      },
      {
        "id": "S001181-dover",
        "label": "Dover",
        "phone": "603-750-3004",
        "fax": null,
        "address": "340 Central Ave., Suite 205, Dover, NH, 03820"
      },
      {
        "id": "S001181-keene",
        "label": "Keene",
        "phone": "603-358-6604",
        "fax": null,
        "address": "12 Gilbo Ave., Suite C, Keene, NH, 03431"
      },
      {
        "id": "S001181-manchester",
        "label": "Manchester",
        "phone": "603-647-7500",
        "fax": null,
        "address": "2 Wall St., Suite 220, Manchester, NH, 03101"
      },
      {
        "id": "S001181-nashua",
        "label": "Nashua",
        "phone": "603-883-0196",
        "fax": null,
        "address": "60 Main St., Suite 217, Nashua, NH, 03060"
      }
    ]
  },
  {
    "id": "H001076",
    "name": "Margaret Wood Hassan",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NH",
    "stateName": "New Hampshire",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "324 Hart Senate Office Building",
    "address": "324 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3324",
    "fax": null,
    "website": "https://www.hassan.senate.gov",
    "contactForm": "https://www.hassan.senate.gov/content/contact-senator",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001076-berlin",
        "label": "Berlin",
        "phone": "603-752-6190",
        "fax": null,
        "address": "168 Main Street, Lower Level, Berlin City Hall, Berlin, NH, 03570"
      },
      {
        "id": "H001076-concord",
        "label": "Concord",
        "phone": "603-622-2204",
        "fax": null,
        "address": "53 Pleasant Street, James C. Cleveland Federal Building, Concord, NH, 03301"
      },
      {
        "id": "H001076-manchester",
        "label": "Manchester",
        "phone": "603-622-2204",
        "fax": null,
        "address": "1589 Elm Street, Third Floor, Manchester, NH, 03101"
      },
      {
        "id": "H001076-portsmouth",
        "label": "Portsmouth",
        "phone": "603-433-4445",
        "fax": null,
        "address": "14 Manchester Square, Suite 281, Portsmouth, NH, 03801"
      }
    ]
  },
  {
    "id": "K000394",
    "name": "Andy Kim",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "520 Hart Senate Office Building",
    "address": "520 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-4744",
    "fax": null,
    "website": "https://www.kim.senate.gov",
    "contactForm": "https://outreach.senate.gov/iqextranet/EForm.aspx?__cid=SenKim&__fid=100008&iframe=Y",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000394-barrington",
        "label": "Barrington",
        "phone": "856-757-5353",
        "fax": null,
        "address": "208 White Horse Pike, Suite 18, Barrington, NJ, 08007"
      },
      {
        "id": "K000394-jersey_city",
        "label": "Jersey City",
        "phone": "201-377-0900",
        "fax": null,
        "address": "210 Hudson Street, Suite 1000, Harborside 3, Jersey City, NJ, 07311"
      }
    ]
  },
  {
    "id": "B001288",
    "name": "Cory A. Booker",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NJ",
    "stateName": "New Jersey",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "306 Hart Senate Office Building",
    "address": "306 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3224",
    "fax": null,
    "website": "https://www.booker.senate.gov",
    "contactForm": "https://www.booker.senate.gov/?p=contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001288-camden",
        "label": "Camden",
        "phone": "856-338-8922",
        "fax": "202-224-5701",
        "address": "401 Market St., Suite 240, Camden, NJ, 08102"
      },
      {
        "id": "B001288-newark",
        "label": "Newark",
        "phone": "973-639-8700",
        "fax": "202-224-5702",
        "address": "One Gateway Center, 23rd Floor, Newark, NJ, 07102"
      }
    ]
  },
  {
    "id": "L000570",
    "name": "Ben Ray Luján",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NM",
    "stateName": "New Mexico",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "498 Russell Senate Office Building",
    "address": "498 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-6621",
    "fax": null,
    "website": "https://www.lujan.senate.gov",
    "contactForm": "https://www.lujan.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000570-albuquerque",
        "label": "Albuquerque",
        "phone": "505-337-7023",
        "fax": "833-907-0886",
        "address": "500 Marquette Ave NW, Suite 1460, Albuquerque, NM, 87102"
      },
      {
        "id": "L000570-las_cruces",
        "label": "Las Cruces",
        "phone": "575-288-4644",
        "fax": "833-907-0887",
        "address": "201 North Church Street, 201B, Las Cruces, NM, 88001"
      },
      {
        "id": "L000570-las_vegas",
        "label": "Las Vegas",
        "phone": "505-454-3038",
        "fax": "833-907-0888",
        "address": "1103 National Ave, Suite 210, NMHU Hewett Hall, Las Vegas, NM, 87701-4024"
      },
      {
        "id": "L000570-portales",
        "label": "Portales",
        "phone": "575-252-6188",
        "fax": "833-702-2620",
        "address": "100 South Ave A, Suite 113, Portales, NM, 88130"
      },
      {
        "id": "L000570-santa_fe",
        "label": "Santa Fe",
        "phone": "505-230-7040",
        "fax": "833-702-2621",
        "address": "120 South Federal Place, Suite 302, Santa Fe, NM, 87501"
      }
    ]
  },
  {
    "id": "H001046",
    "name": "Martin Heinrich",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NM",
    "stateName": "New Mexico",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "709 Hart Senate Office Building",
    "address": "709 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5521",
    "fax": null,
    "website": "https://www.heinrich.senate.gov",
    "contactForm": "https://www.heinrich.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001046-albuquerque",
        "label": "Albuquerque",
        "phone": "505-346-6601",
        "fax": "505-346-6780",
        "address": "400 Gold Ave. SW, Suite 1080, Albuquerque, NM, 87102"
      },
      {
        "id": "H001046-farmington",
        "label": "Farmington",
        "phone": "505-325-5030",
        "fax": "505-325-6035",
        "address": "7450 E. Main St., Suite A, Farmington, NM, 87402"
      },
      {
        "id": "H001046-las_cruces",
        "label": "Las Cruces",
        "phone": "575-523-6561",
        "fax": "575-523-6584",
        "address": "201 North Church St., Ste. 305, Las Cruces, NM, 88001"
      },
      {
        "id": "H001046-roswell",
        "label": "Roswell",
        "phone": "575-622-7113",
        "fax": "575-622-3538",
        "address": "200 E. 4th St., Suite 300, Roswell, NM, 88201"
      }
    ]
  },
  {
    "id": "S000148",
    "name": "Charles E. Schumer",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "322 Hart Senate Office Building",
    "address": "322 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-6542",
    "fax": null,
    "website": "https://www.schumer.senate.gov",
    "contactForm": "https://www.schumer.senate.gov/contact/email-chuck",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000148-albany",
        "label": "Albany",
        "phone": "518-431-4070",
        "fax": "518-431-4076",
        "address": "1 Clinton Ave., Room 827, Leo O'Brien Building, Albany, NY, 12207"
      },
      {
        "id": "S000148-binghamton",
        "label": "Binghamton",
        "phone": "607-772-6792",
        "fax": "607-772-8124",
        "address": "15 Henry St., Room. 100 A-F, Binghamton, NY, 13901"
      },
      {
        "id": "S000148-buffalo",
        "label": "Buffalo",
        "phone": "716-846-4111",
        "fax": "716-846-4113",
        "address": "130 S. Elmwood Ave., #660, Buffalo, NY, 14202"
      },
      {
        "id": "S000148-melville",
        "label": "Melville",
        "phone": "631-753-0978",
        "fax": "631-391-9068",
        "address": "145 Pinelawn Road, #300N, Melville, NY, 11747"
      },
      {
        "id": "S000148-new_york",
        "label": "New York",
        "phone": "212-486-4430",
        "fax": "202-228-2838",
        "address": "780 Third Ave., Suite 2301, New York, NY, 10017"
      },
      {
        "id": "S000148-peekskill",
        "label": "Peekskill",
        "phone": "914-734-1532",
        "fax": "914-734-1673",
        "address": "One Park Place, Suite 100, Peekskill, NY, 10566"
      },
      {
        "id": "S000148-rochester",
        "label": "Rochester",
        "phone": "585-263-5866",
        "fax": "585-263-3173",
        "address": "100 State St., Room 3040, Rochester, NY, 14614"
      },
      {
        "id": "S000148-syracuse",
        "label": "Syracuse",
        "phone": "315-423-5471",
        "fax": "315-423-5185",
        "address": "100 S. Clinton St., Room 841, Syracuse, NY, 13261"
      }
    ]
  },
  {
    "id": "G000555",
    "name": "Kirsten E. Gillibrand",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "NY",
    "stateName": "New York",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "478 Russell Senate Office Building",
    "address": "478 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4451",
    "fax": null,
    "website": "https://www.gillibrand.senate.gov",
    "contactForm": "https://www.gillibrand.senate.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "G000555-albany",
        "label": "Albany",
        "phone": "518-431-0120",
        "fax": "202-224-0038",
        "address": "11A Clinton Avenue, Room 821, Leo W. O’Brien Federal Office Building, Albany, NY, 12207"
      },
      {
        "id": "G000555-buffalo",
        "label": "Buffalo",
        "phone": "716-854-9725",
        "fax": "202-224-0039",
        "address": "726 Exchange St., Suite 511, Larkin At Exchange, Buffalo, NY, 14210"
      },
      {
        "id": "G000555-lowville",
        "label": "Lowville",
        "phone": "315-376-6118",
        "fax": "202-224-0055",
        "address": "PO Box 273, Lowville, NY, 13367"
      },
      {
        "id": "G000555-melville",
        "label": "Melville",
        "phone": "631-249-2825",
        "fax": "202-224-0044",
        "address": "155 Pinelawn Rd., Suite 250 North, Melville, NY, 11747"
      },
      {
        "id": "G000555-new_york",
        "label": "New York",
        "phone": "212-688-6262",
        "fax": "866-824-6340",
        "address": "780 Third Ave., Suite 2601, New York, NY, 10017"
      },
      {
        "id": "G000555-rochester",
        "label": "Rochester",
        "phone": "585-263-6250",
        "fax": "202-224-0063",
        "address": "100 State St., Room 4195, Kenneth B. Keating Federal Office Building, Rochester, NY, 14614"
      },
      {
        "id": "G000555-syracuse",
        "label": "Syracuse",
        "phone": "315-448-0470",
        "fax": "202-224-0064",
        "address": "100 S. Clinton St., Room 1470, James M. Hanley Federal Building, Syracuse, NY, 13261"
      },
      {
        "id": "G000555-yonkers",
        "label": "Yonkers",
        "phone": "845-875-4585",
        "fax": "202-224-0052",
        "address": "PO Box 749, Yonkers, NY, 10710-0749"
      }
    ]
  },
  {
    "id": "B001305",
    "name": "Ted Budd",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "354 Russell Senate Office Building",
    "address": "354 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-3154",
    "fax": null,
    "website": "https://www.budd.senate.gov",
    "contactForm": "https://www.budd.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001305-advance",
        "label": "Advance",
        "phone": "336-941-4470",
        "fax": null,
        "address": "5380 US Highway 158, Suite 202, Advance, NC, 27006"
      },
      {
        "id": "B001305-asheville",
        "label": "Asheville",
        "phone": "828-333-4130",
        "fax": null,
        "address": "151 Patton Ave., Suite 204, Asheville, NC, 28801"
      },
      {
        "id": "B001305-raleigh",
        "label": "Raleigh",
        "phone": "984-349-5061",
        "fax": null,
        "address": "333 Fayetteville Street, Suite 1504, Raleigh, NC, 27601"
      },
      {
        "id": "B001305-wilmington",
        "label": "Wilmington",
        "phone": "910-218-7600",
        "fax": null,
        "address": "201 N. Front St., Suite 809, Wilmington, NC, 28401"
      }
    ]
  },
  {
    "id": "T000476",
    "name": "Thom Tillis",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "NC",
    "stateName": "North Carolina",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "113 Dirksen Senate Office Building",
    "address": "113 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-6342",
    "fax": "202-228-2563",
    "website": "https://www.tillis.senate.gov",
    "contactForm": "https://www.tillis.senate.gov/public/index.cfm/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000476-charlotte",
        "label": "Charlotte",
        "phone": "704-509-9087",
        "fax": "704-509-9162",
        "address": "10150 Mallard Creek Rd, Suite 508, Charlotte, NC, 28262"
      },
      {
        "id": "T000476-greensboro",
        "label": "Greensboro",
        "phone": "336-885-0685",
        "fax": "336-885-0692",
        "address": "3200 Northline Avenue, Suite 150, Greensboro, NC, 27408"
      },
      {
        "id": "T000476-greenville",
        "label": "Greenville",
        "phone": "252-329-0371",
        "fax": "252-329-0290",
        "address": "1694 E. Arlington Blvd., Suite B, Greenville, NC, 27858"
      },
      {
        "id": "T000476-hendersonville",
        "label": "Hendersonville",
        "phone": "828-693-8750",
        "fax": "828-693-9724",
        "address": "1 Historic Courthouse Square, Suite 112, Hendersonville, NC, 28792"
      },
      {
        "id": "T000476-raleigh",
        "label": "Raleigh",
        "phone": "919-856-4630",
        "fax": "919-856-4053",
        "address": "310 New Bern Ave., Suite 122, Raleigh, NC, 27601"
      }
    ]
  },
  {
    "id": "H001061",
    "name": "John Hoeven",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "ND",
    "stateName": "North Dakota",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "338 Russell Senate Office Building",
    "address": "338 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-2551",
    "fax": null,
    "website": "https://www.hoeven.senate.gov",
    "contactForm": "https://www.hoeven.senate.gov/contact/contact-the-senator",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001061-bismarck",
        "label": "Bismarck",
        "phone": "701-250-4618",
        "fax": "701-250-4484",
        "address": "220 E. Rosser Ave., Room 312, U.S. Federal Building, Bismarck, ND, 58501"
      },
      {
        "id": "H001061-fargo",
        "label": "Fargo",
        "phone": "701-239-5389",
        "fax": "202-228-5112",
        "address": "123 Broadway North, Suite 201, Fargo, ND, 58102"
      },
      {
        "id": "H001061-grand_forks",
        "label": "Grand Forks",
        "phone": "701-746-8972",
        "fax": null,
        "address": "102 N. Fourth St., Room 108, Federal Building, Grand Forks, ND, 58203"
      },
      {
        "id": "H001061-minot",
        "label": "Minot",
        "phone": "701-838-1361",
        "fax": "701-838-1381",
        "address": "100 1st St. SW, Suite 107, Minot, ND, 58701"
      },
      {
        "id": "H001061-watford_city",
        "label": "Watford City",
        "phone": "701-609-2727",
        "fax": null,
        "address": "204 N. Main St., #516, Watford City, ND, 58854"
      }
    ]
  },
  {
    "id": "C001096",
    "name": "Kevin Cramer",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "ND",
    "stateName": "North Dakota",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "313 Hart Senate Office Building",
    "address": "313 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2043",
    "fax": null,
    "website": "https://www.cramer.senate.gov",
    "contactForm": "https://www.cramer.senate.gov/contact/contact-kevin",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001096-bismarck",
        "label": "Bismarck",
        "phone": "701-204-0500",
        "fax": null,
        "address": "220 E. Rosser Ave., 328 Federal Building, Bismarck, ND, 58501"
      },
      {
        "id": "C001096-fargo",
        "label": "Fargo",
        "phone": "701-232-5094",
        "fax": null,
        "address": "657 Second Avenue N, 306 Federal Building, Fargo, ND, 58102"
      },
      {
        "id": "C001096-grand_forks",
        "label": "Grand Forks",
        "phone": "701-402-4540",
        "fax": null,
        "address": "102 North 4th Street, 114 Federal Building, Grand Forks, ND, 58203"
      },
      {
        "id": "C001096-minot",
        "label": "Minot",
        "phone": "701-837-6141",
        "fax": null,
        "address": "100 First Street SW, 105 Federal Building, Minot, ND, 58701"
      },
      {
        "id": "C001096-williston",
        "label": "Williston",
        "phone": "701-441-7230",
        "fax": null,
        "address": "125 Main Street, Suite #217, Williston, ND, 58801"
      }
    ]
  },
  {
    "id": "M001242",
    "name": "Bernie Moreno",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "284 Russell Senate Office Building",
    "address": "284 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-2315",
    "fax": null,
    "website": "https://www.moreno.senate.gov",
    "contactForm": "https://www.moreno.senate.gov/share-your-opinion/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001242-cincinnati",
        "label": "Cincinnati",
        "phone": "513-684-1021",
        "fax": null,
        "address": "550 Main St, Suite 10-273, John W. Peck Federal Building, Cincinnati, OH, 45202"
      },
      {
        "id": "M001242-cleveland",
        "label": "Cleveland",
        "phone": "216-522-7272",
        "fax": null,
        "address": "801 W Superior Ave, Suite 1400, Carl B. Stokes U.S. Courthouse, Cleveland, OH, 44113"
      },
      {
        "id": "M001242-columbus",
        "label": "Columbus",
        "phone": "614-469-2083",
        "fax": null,
        "address": "200 North High St, Room 618, Bricker Federal Building, Columbus, OH, 43215"
      }
    ]
  },
  {
    "id": "H001104",
    "name": "Jon Husted",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "OH",
    "stateName": "Ohio",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "304 Russell Senate Office Building",
    "address": "304 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-3353",
    "fax": null,
    "website": "https://www.husted.senate.gov",
    "contactForm": "https://www.husted.senate.gov/contact-jon/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H001104-cleveland",
        "label": "Cleveland",
        "phone": "216-539-7877",
        "fax": null,
        "address": "1240 East 9th Street, 3061, Cleveland, OH, 44199"
      },
      {
        "id": "H001104-columbus",
        "label": "Columbus",
        "phone": "614-369-4925",
        "fax": null,
        "address": "John W. Bricker Federal Building, 200 North High Street, Suite 600, Columbus, OH, 43215"
      },
      {
        "id": "H001104-middletown",
        "label": "Middletown",
        "phone": "513-318-1100",
        "fax": null,
        "address": "300 North Main Street, Suite 200, Middletown, OH, 45042"
      },
      {
        "id": "H001104-toledo",
        "label": "Toledo",
        "phone": "567-304-3777",
        "fax": null,
        "address": "420 Madison Avenue, Suite 1210, Toledo, OH, 43604"
      }
    ]
  },
  {
    "id": "A000383",
    "name": "Alan Armstrong",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "OK",
    "stateName": "Oklahoma",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "330 Hart Senate Office Building",
    "address": "330 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-4721",
    "fax": "202-228-0380",
    "website": "https://www.armstrong.senate.gov",
    "contactForm": "https://www.armstrong.senate.gov/contact/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "A000383-oklahoma_city",
        "label": "Oklahoma City",
        "phone": "405-246-0025",
        "fax": "405-604-0917",
        "address": "3817 NW Expressway, #780, Oklahoma City, OK, 73112"
      }
    ]
  },
  {
    "id": "L000575",
    "name": "James Lankford",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "OK",
    "stateName": "Oklahoma",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "731 Hart Senate Office Building",
    "address": "731 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5754",
    "fax": null,
    "website": "https://www.lankford.senate.gov",
    "contactForm": "https://www.lankford.senate.gov/contact/email",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000575-oklahoma_city",
        "label": "Oklahoma City",
        "phone": "405-231-4941",
        "fax": null,
        "address": "1015 N. Broadway Ave., Suite 310, Oklahoma City, OK, 73102"
      },
      {
        "id": "L000575-tulsa",
        "label": "Tulsa",
        "phone": "918-581-7651",
        "fax": null,
        "address": "401 South Boston Ave., Suite 2150, Tulsa, OK, 74103"
      }
    ]
  },
  {
    "id": "M001176",
    "name": "Jeff Merkley",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "OR",
    "stateName": "Oregon",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "531 Hart Senate Office Building",
    "address": "531 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3753",
    "fax": null,
    "website": "https://www.merkley.senate.gov",
    "contactForm": "https://www.merkley.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001176-baker_city",
        "label": "Baker City",
        "phone": "541-278-1129",
        "fax": null,
        "address": "1705 Main St., Suite 504, Baker City, OR, 97814"
      },
      {
        "id": "M001176-bend",
        "label": "Bend",
        "phone": "541-318-1298",
        "fax": null,
        "address": "131 NW Hawthorne Ave., Suite 208, Bend, OR, 97703"
      },
      {
        "id": "M001176-eugene",
        "label": "Eugene",
        "phone": "541-465-6750",
        "fax": null,
        "address": "405 East 8th Ave., Suite 2010, Eugene, OR, 97401"
      },
      {
        "id": "M001176-medford",
        "label": "Medford",
        "phone": "541-608-9102",
        "fax": null,
        "address": "10 South Bartlett St., Suite 201, Medford, OR, 97501"
      },
      {
        "id": "M001176-portland",
        "label": "Portland",
        "phone": "503-326-3386",
        "fax": "202-224-2073",
        "address": "121 SW Salmon St., Suite 1400, Portland, OR, 97204"
      },
      {
        "id": "M001176-salem",
        "label": "Salem",
        "phone": "503-362-8102",
        "fax": null,
        "address": "500 Liberty St. SE, Suite 320, Salem, OR, 97301"
      }
    ]
  },
  {
    "id": "W000779",
    "name": "Ron Wyden",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "OR",
    "stateName": "Oregon",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "221 Dirksen Senate Office Building",
    "address": "221 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-5244",
    "fax": null,
    "website": "https://www.wyden.senate.gov",
    "contactForm": "https://www.wyden.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000779-bend",
        "label": "Bend",
        "phone": "541-330-9142",
        "fax": null,
        "address": "131 NW. Hawthorne Ave., Suite 107, The Jamison Building, Bend, OR, 97701"
      },
      {
        "id": "W000779-eugene",
        "label": "Eugene",
        "phone": "541-431-0229",
        "fax": null,
        "address": "405 E. 8th Ave., Suite 2020, Eugene, OR, 97401"
      },
      {
        "id": "W000779-la_grande",
        "label": "La Grande",
        "phone": "541-962-7691",
        "fax": null,
        "address": "105 Fir St., Suite 201, SAC Annex Building, La Grande, OR, 97850"
      },
      {
        "id": "W000779-medford",
        "label": "Medford",
        "phone": "541-858-5122",
        "fax": null,
        "address": "310 W. 6th St., Room 118, Federal Courthouse, Medford, OR, 97501"
      },
      {
        "id": "W000779-portland",
        "label": "Portland",
        "phone": "503-326-7525",
        "fax": null,
        "address": "911 NE 11th Ave., Suite 630, Portland, OR, 97232"
      },
      {
        "id": "W000779-salem",
        "label": "Salem",
        "phone": "503-589-4555",
        "fax": null,
        "address": "707 13th St., Suite 285, Salem, OR, 97301"
      }
    ]
  },
  {
    "id": "M001243",
    "name": "David McCormick",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "702 Hart Senate Office Building",
    "address": "702 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-6324",
    "fax": null,
    "website": "https://www.mccormick.senate.gov",
    "contactForm": "https://mccormick.senate.gov",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001243-allentown",
        "label": "Allentown",
        "phone": "610-782-9470",
        "fax": null,
        "address": "840 West Hamilton St, Suite 301, Allentown, PA, 18101"
      },
      {
        "id": "M001243-erie",
        "label": "Erie",
        "phone": "814-240-5213",
        "fax": null,
        "address": "17 South Park Row, Suite B-150, Erie, PA, 16501"
      },
      {
        "id": "M001243-harrisburg",
        "label": "Harrisburg",
        "phone": "717-231-7540",
        "fax": null,
        "address": "200 North Third St, Suite 14A/14th Floor, Harrisburg, PA, 17101"
      },
      {
        "id": "M001243-philadelphia",
        "label": "Philadelphia",
        "phone": "215-405-9660",
        "fax": null,
        "address": "2000 Market St, Suite 610, Philadelphia, PA, 19103"
      },
      {
        "id": "M001243-pittsburgh",
        "label": "Pittsburgh",
        "phone": "412-803-7370",
        "fax": null,
        "address": "310 Grant St, Suite 2415, Pittsburgh, PA, 15219"
      },
      {
        "id": "M001243-scranton",
        "label": "Scranton",
        "phone": "570-941-0930",
        "fax": null,
        "address": "417 Lackawanna Ave, Suite 303, Scranton, PA, 18503"
      },
      {
        "id": "M001243-state_college",
        "label": "State College",
        "phone": "814-357-0314",
        "fax": null,
        "address": "329 Innovation Blvd, Suite 226, State College, PA, 16803"
      }
    ]
  },
  {
    "id": "F000479",
    "name": "John Fetterman",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "PA",
    "stateName": "Pennsylvania",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "142 Russell Senate Office Building",
    "address": "142 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4254",
    "fax": null,
    "website": "https://www.fetterman.senate.gov",
    "contactForm": "https://www.fetterman.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "F000479-erie",
        "label": "Erie",
        "phone": "814-453-3010",
        "fax": null,
        "address": "17 South Park Row, Suite B-120, Erie, PA, 16501"
      },
      {
        "id": "F000479-harrisburg",
        "label": "Harrisburg",
        "phone": "717-782-3951",
        "fax": null,
        "address": "320 Market Street, Suite 475E, Harrisburg, PA, 17101"
      },
      {
        "id": "F000479-philadelphia",
        "label": "Philadelphia",
        "phone": "215-241-1090",
        "fax": null,
        "address": "200 Chestnut Street, Suite 600, Philadelphia, PA, 19106"
      },
      {
        "id": "F000479-pittsburgh",
        "label": "Pittsburgh",
        "phone": "412-803-3501",
        "fax": null,
        "address": "1000 Liberty Avenue, Suite 1811, Pittsburgh, PA, 15222"
      },
      {
        "id": "F000479-wilkes_barre",
        "label": "Wilkes-Barre",
        "phone": "570-820-4088",
        "fax": null,
        "address": "7 North Wilkes-Barre Boulevard, Suite 406, Wilkes-Barre, PA, 18702"
      }
    ]
  },
  {
    "id": "R000122",
    "name": "Jack Reed",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "RI",
    "stateName": "Rhode Island",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "728 Hart Senate Office Building",
    "address": "728 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-4642",
    "fax": null,
    "website": "https://www.reed.senate.gov",
    "contactForm": "https://www.reed.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000122-cranston",
        "label": "Cranston",
        "phone": "401-943-3100",
        "fax": "401-464-6837",
        "address": "1000 Chapel View Blvd., Suite 290, Cranston, RI, 02920"
      },
      {
        "id": "R000122-providence",
        "label": "Providence",
        "phone": "401-528-5200",
        "fax": "202-224-4680",
        "address": "One Exchange Terrace, Suite 408, U.S. District Courthouse, Providence, RI, 02903-1744"
      }
    ]
  },
  {
    "id": "W000802",
    "name": "Sheldon Whitehouse",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "RI",
    "stateName": "Rhode Island",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "530 Hart Senate Office Building",
    "address": "530 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2921",
    "fax": null,
    "website": "https://www.whitehouse.senate.gov",
    "contactForm": "https://www.whitehouse.senate.gov/contact/email-sheldon",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000802-providence",
        "label": "Providence",
        "phone": "401-453-5294",
        "fax": "401-453-5085",
        "address": "170 Westminster St., Suite 200, Providence, RI, 02903"
      }
    ]
  },
  {
    "id": "G000608",
    "name": "Darline Graham",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "SC",
    "stateName": "South Carolina",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "B33 Russell Senate Office Building",
    "address": "B33 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-5972",
    "fax": null,
    "website": "https://www.dgraham.senate.gov",
    "contactForm": "https://www.dgraham.senate.gov/",
    "emails": [],
    "fieldOffices": []
  },
  {
    "id": "S001184",
    "name": "Tim Scott",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "SC",
    "stateName": "South Carolina",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "104 Hart Senate Office Building",
    "address": "104 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-6121",
    "fax": null,
    "website": "https://www.scott.senate.gov",
    "contactForm": "https://www.scott.senate.gov/contact/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S001184-columbia",
        "label": "Columbia",
        "phone": "803-771-6112",
        "fax": "855-802-9355",
        "address": "1901 Main St., Suite 1425, Columbia, SC, 29201"
      },
      {
        "id": "S001184-greenville",
        "label": "Greenville",
        "phone": "864-233-5366",
        "fax": "855-802-9355",
        "address": "301 N. Main Street, Suite 1006, Greenville, SC, 29601"
      },
      {
        "id": "S001184-north_charleston",
        "label": "North Charleston",
        "phone": "843-727-4525",
        "fax": "855-802-9355",
        "address": "2500 City Hall Ln., 3rd Floor Suite, North Charleston, SC, 29406"
      }
    ]
  },
  {
    "id": "T000250",
    "name": "John Thune",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "SD",
    "stateName": "South Dakota",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "511 Dirksen Senate Office Building",
    "address": "511 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-2321",
    "fax": null,
    "website": "https://www.thune.senate.gov",
    "contactForm": "https://www.thune.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "T000250-aberdeen",
        "label": "Aberdeen",
        "phone": "605-225-8823",
        "fax": null,
        "address": "205 6th Avenue SE, Suite 202, Aberdeen, SD, 57401"
      },
      {
        "id": "T000250-rapid_city",
        "label": "Rapid City",
        "phone": "605-348-7551",
        "fax": null,
        "address": "246 Founders Park Dr., Suite 102, Rapid City, SD, 57701"
      },
      {
        "id": "T000250-sioux_falls",
        "label": "Sioux Falls",
        "phone": "605-334-9596",
        "fax": null,
        "address": "2401 West Trevi Place, Suite 200, Sioux Falls, SD, 57108"
      }
    ]
  },
  {
    "id": "R000605",
    "name": "Mike Rounds",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "SD",
    "stateName": "South Dakota",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "716 Hart Senate Office Building",
    "address": "716 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5842",
    "fax": null,
    "website": "https://www.rounds.senate.gov",
    "contactForm": "https://www.rounds.senate.gov/contact/email-mike",
    "emails": [],
    "fieldOffices": [
      {
        "id": "R000605-aberdeen",
        "label": "Aberdeen",
        "phone": "605-225-0366",
        "fax": null,
        "address": "221 Brown County Highway 19 S, Suite 112, Aberdeen, SD, 57401"
      },
      {
        "id": "R000605-pierre",
        "label": "Pierre",
        "phone": "605-224-1450",
        "fax": "605-224-1379",
        "address": "111 W. Capitol Ave., Suite 210, Pierre, SD, 57501"
      },
      {
        "id": "R000605-rapid_city",
        "label": "Rapid City",
        "phone": "605-343-5035",
        "fax": "605-343-5348",
        "address": "603 Omaha St., Suite 100, Rapid City, SD, 57701"
      },
      {
        "id": "R000605-sioux_falls",
        "label": "Sioux Falls",
        "phone": "605-336-0486",
        "fax": "605-336-6624",
        "address": "320 N. Main Ave., Suite A, Sioux Falls, SD, 57104"
      }
    ]
  },
  {
    "id": "H000601",
    "name": "Bill Hagerty",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "251 Russell Senate Office Building",
    "address": "251 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4944",
    "fax": null,
    "website": "https://www.hagerty.senate.gov",
    "contactForm": "https://www.hagerty.senate.gov/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "H000601-blountville",
        "label": "Blountville",
        "phone": "423-325-6240",
        "fax": "423-325-6236",
        "address": "2525 Highway 75, Suite 101, Tri-Cities Regional Airport, Blountville, TN, 37617"
      },
      {
        "id": "H000601-chattanooga",
        "label": "Chattanooga",
        "phone": "423-752-5337",
        "fax": "423-752-2504",
        "address": "900 Georgia Avenue, Suite 260, Chattanooga, TN, 37402"
      },
      {
        "id": "H000601-cookeville",
        "label": "Cookeville",
        "phone": "931-400-7080",
        "fax": null,
        "address": "9 E. Broad Street, 3rd Floor, L. Clure Morton Federal Building, Cookeville, TN, 38503"
      },
      {
        "id": "H000601-jackson",
        "label": "Jackson",
        "phone": "731-234-9358",
        "fax": "731-664-3129",
        "address": "109 S.Highland Avenue, Suite 216, Ed Jones Federal Building, Jackson, TN, 38301"
      },
      {
        "id": "H000601-knoxville",
        "label": "Knoxville",
        "phone": "865-545-4253",
        "fax": "865-545-4252",
        "address": "800 Market Street, Suite 112, Howard H. Baker, Jr. U.S. Courthouse, Knoxville, TN, 37902"
      },
      {
        "id": "H000601-memphis",
        "label": "Memphis",
        "phone": "901-544-4224",
        "fax": null,
        "address": "167 North Main Street, Suite 1068, Clifford Davis-Odell Horton Federal Building, Memphis, TN, 38103"
      },
      {
        "id": "H000601-nashville",
        "label": "Nashville",
        "phone": "615-736-5129",
        "fax": "615-269-4803",
        "address": "719 Church Street, Suite 2150, Nashville, TN, 37203"
      }
    ]
  },
  {
    "id": "B001243",
    "name": "Marsha Blackburn",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "TN",
    "stateName": "Tennessee",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "357 Dirksen Senate Office Building",
    "address": "357 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-3344",
    "fax": null,
    "website": "https://www.blackburn.senate.gov",
    "contactForm": "https://www.blackburn.senate.gov/email-me",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001243-chattanooga",
        "label": "Chattanooga",
        "phone": "423-541-2939",
        "fax": "423-541-2944",
        "address": "10 West M. L. King Blvd, 6th Floor, Chattanooga, TN, 37402"
      },
      {
        "id": "B001243-jackson",
        "label": "Jackson",
        "phone": "731-660-3971",
        "fax": "731-660-3978",
        "address": "109 S Highland Ave, Suite 218, Jackson, TN, 38301"
      },
      {
        "id": "B001243-johnson_city",
        "label": "Johnson City",
        "phone": "423-753-4009",
        "fax": "423-788-0250",
        "address": "207 Mocking Bird Ln, Suite 502, Johnson City, TN, 37604"
      },
      {
        "id": "B001243-knoxville",
        "label": "Knoxville",
        "phone": "865-540-3781",
        "fax": "865-540-7952",
        "address": "800 Market St, Suite 121, Knoxville, TN, 37902-2327"
      },
      {
        "id": "B001243-memphis",
        "label": "Memphis",
        "phone": "901-527-9199",
        "fax": "901-527-9515",
        "address": "100 Peabody Pl, Suite 1125, Memphis, TN, 38103-3654"
      },
      {
        "id": "B001243-nashville",
        "label": "Nashville",
        "phone": "629-800-6600",
        "fax": "615-298-2148",
        "address": "719 Church Street, Suite 2100, Nashville, TN, 37203"
      }
    ]
  },
  {
    "id": "C001056",
    "name": "John Cornyn",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "517 Hart Senate Office Building",
    "address": "517 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2934",
    "fax": null,
    "website": "https://www.cornyn.senate.gov",
    "contactForm": "https://www.cornyn.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001056-austin",
        "label": "Austin",
        "phone": "512-469-6034",
        "fax": "512-469-6020",
        "address": "221 W. Sixth St., Suite 1350, Chase Tower, Austin, TX, 78701"
      },
      {
        "id": "C001056-dallas",
        "label": "Dallas",
        "phone": "972-239-1310",
        "fax": "972-239-2110",
        "address": "5001 Spring Valley Rd., Suite 1125 E, Dallas, TX, 75244"
      },
      {
        "id": "C001056-harlingen",
        "label": "Harlingen",
        "phone": "956-423-0162",
        "fax": null,
        "address": "6770 W. Expressway 83, Suite 302, Harlingen, TX, 78552"
      },
      {
        "id": "C001056-houston",
        "label": "Houston",
        "phone": "713-572-3337",
        "fax": null,
        "address": "5300 Memorial Drive, Suite 710, Houston, TX, 77007"
      },
      {
        "id": "C001056-lubbock",
        "label": "Lubbock",
        "phone": "806-472-7533",
        "fax": "806-472-7536",
        "address": "1500 Broadway, Suite 1230, Wells Fargo Center, Lubbock, TX, 79401"
      },
      {
        "id": "C001056-san_antonio",
        "label": "San Antonio",
        "phone": "210-224-7485",
        "fax": "210-224-8569",
        "address": "600 Navarro, Suite 210, San Antonio, TX, 78205"
      },
      {
        "id": "C001056-tyler",
        "label": "Tyler",
        "phone": "903-593-0902",
        "fax": "903-593-0920",
        "address": "100 E. Ferguson St., Suite 1004, Regions Bank Building, Tyler, TX, 75702"
      }
    ]
  },
  {
    "id": "C001098",
    "name": "Ted Cruz",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "TX",
    "stateName": "Texas",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "167 Russell Senate Office Building",
    "address": "167 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-5922",
    "fax": null,
    "website": "https://www.cruz.senate.gov",
    "contactForm": "https://www.cruz.senate.gov/?p=form&id=16",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001098-austin",
        "label": "Austin",
        "phone": "512-916-5834",
        "fax": "512-916-5839",
        "address": "300 E 8th, Suite 961, Austin, TX, 78701"
      },
      {
        "id": "C001098-dallas",
        "label": "Dallas",
        "phone": "214-599-8749",
        "fax": "214-361-3518",
        "address": "3626 N. Hall St., Suite 410, Lee Park Tower II, Dallas, TX, 75219"
      },
      {
        "id": "C001098-houston",
        "label": "Houston",
        "phone": "713-718-3057",
        "fax": "713-209-3459",
        "address": "1919 Smith St., Suite 9047, The Mickey Leland Federal Building, Houston, TX, 77002"
      },
      {
        "id": "C001098-mcallen",
        "label": "McAllen",
        "phone": "956-686-7339",
        "fax": null,
        "address": "200 S. 10th St., Suite 1603, McAllen, TX, 78501"
      },
      {
        "id": "C001098-san_antonio",
        "label": "San Antonio",
        "phone": "210-340-2885",
        "fax": "210-349-6753",
        "address": "9901 Ih-10w, Suite 950, San Antonio, TX, 78230"
      },
      {
        "id": "C001098-tyler",
        "label": "Tyler",
        "phone": "903-593-5130",
        "fax": null,
        "address": "305 S. Broadway, Suite 501, Tyler, TX, 75702"
      }
    ]
  },
  {
    "id": "C001114",
    "name": "John R. Curtis",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "UT",
    "stateName": "Utah",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "502 Hart Senate Office Building",
    "address": "502 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5251",
    "fax": null,
    "website": "https://www.curtis.senate.gov",
    "contactForm": "https://www.curtis.senate.gov/share-your-opinion/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001114-salt_lake_city",
        "label": "Salt Lake City",
        "phone": "801-524-4380",
        "fax": null,
        "address": "125 S. State Street, Suite 8402, Salt Lake City, UT, 84138"
      }
    ]
  },
  {
    "id": "L000577",
    "name": "Mike Lee",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "UT",
    "stateName": "Utah",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "363 Russell Senate Office Building",
    "address": "363 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-5444",
    "fax": null,
    "website": "https://www.lee.senate.gov",
    "contactForm": "https://www.lee.senate.gov/public/index.cfm/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000577-ogden",
        "label": "Ogden",
        "phone": "801-392-9633",
        "fax": "801-392-9630",
        "address": "324 25th St., Suite 1410, James V. Hansen Federal Building, Ogden, UT, 84401"
      },
      {
        "id": "L000577-salt_lake_city",
        "label": "Salt Lake City",
        "phone": "801-524-5933",
        "fax": "801-524-5730",
        "address": "125 S. State, Suite 4225, Wallace F. Bennett Federal Building, Salt Lake City, UT, 84138"
      },
      {
        "id": "L000577-st__george",
        "label": "St. George",
        "phone": "435-628-5514",
        "fax": null,
        "address": "111 East Tabernacle Street, Suite #324, St. George, UT, 84770"
      },
      {
        "id": "L000577-vernal",
        "label": "Vernal",
        "phone": "435-503-9335",
        "fax": null,
        "address": "374 East Main Street, Suite 261, Vernal City Hall, Vernal, UT, 84078"
      }
    ]
  },
  {
    "id": "S000033",
    "name": "Bernard Sanders",
    "chamber": "Senate",
    "role": "Senator",
    "party": "I",
    "partyName": "Independent",
    "state": "VT",
    "stateName": "Vermont",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "332 Dirksen Senate Office Building",
    "address": "332 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-5141",
    "fax": null,
    "website": "https://www.sanders.senate.gov",
    "contactForm": "https://www.sanders.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "S000033-burlington",
        "label": "Burlington",
        "phone": "802-862-0697",
        "fax": "802-860-6370",
        "address": "1 Church St., 3rd Floor, Burlington, VT, 05401"
      }
    ]
  },
  {
    "id": "W000800",
    "name": "Peter Welch",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "VT",
    "stateName": "Vermont",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "115 Russell Senate Office Building",
    "address": "115 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4242",
    "fax": null,
    "website": "https://www.welch.senate.gov",
    "contactForm": "https://www.welch.senate.gov/email-peter",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000800-burlington",
        "label": "Burlington",
        "phone": "802-863-2525",
        "fax": "202-228-7575",
        "address": "199 Main St., 4th Floor, Burlington, VT, 05401"
      }
    ]
  },
  {
    "id": "W000805",
    "name": "Mark R. Warner",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "VA",
    "stateName": "Virginia",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "703 Hart Senate Office Building",
    "address": "703 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-2023",
    "fax": null,
    "website": "https://www.warner.senate.gov",
    "contactForm": "https://www.warner.senate.gov/public/index.cfm?p=Contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "W000805-abingdon",
        "label": "Abingdon",
        "phone": "276-628-8158",
        "fax": null,
        "address": "180 W. Main St., Room 235, Abingdon, VA, 24210"
      },
      {
        "id": "W000805-norfolk",
        "label": "Norfolk",
        "phone": "757-441-3079",
        "fax": null,
        "address": "101 W. Main St., Suite 7771, Norfolk, VA, 23510"
      },
      {
        "id": "W000805-richmond",
        "label": "Richmond",
        "phone": "804-775-2314",
        "fax": null,
        "address": "919 E. Main St., Suite 630, Richmond, VA, 23219"
      },
      {
        "id": "W000805-roanoke",
        "label": "Roanoke",
        "phone": "540-857-2676",
        "fax": null,
        "address": "120 Luck Avenue, SW, Suite 108, Roanoke, VA, 24011"
      },
      {
        "id": "W000805-vienna",
        "label": "Vienna",
        "phone": "703-442-0670",
        "fax": null,
        "address": "8150 Leesburg Pike, Suite 700, Vienna, VA, 22182"
      }
    ]
  },
  {
    "id": "K000384",
    "name": "Tim Kaine",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "VA",
    "stateName": "Virginia",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "231 Russell Senate Office Building",
    "address": "231 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-4024",
    "fax": null,
    "website": "https://www.kaine.senate.gov",
    "contactForm": "https://www.kaine.senate.gov/contact",
    "emails": [],
    "fieldOffices": [
      {
        "id": "K000384-abingdon",
        "label": "Abingdon",
        "phone": "276-525-4790",
        "fax": "276-525-4792",
        "address": "121 Russell Rd., Suite 2, Abingdon, VA, 24210"
      },
      {
        "id": "K000384-fredericksburg",
        "label": "Fredericksburg",
        "phone": "540-369-7667",
        "fax": null,
        "address": "816 William Street, Suite B, Fredericksburg, VA, 22401"
      },
      {
        "id": "K000384-manassas",
        "label": "Manassas",
        "phone": "703-361-3192",
        "fax": "703-361-3198",
        "address": "9408 Grant Avenue, Suite 202, Manassas, VA, 20110"
      },
      {
        "id": "K000384-richmond",
        "label": "Richmond",
        "phone": "804-771-2221",
        "fax": "804-771-8313",
        "address": "919 E. Main St., Suite 970, Richmond, VA, 23219"
      },
      {
        "id": "K000384-roanoke",
        "label": "Roanoke",
        "phone": "540-682-5693",
        "fax": "540-682-5697",
        "address": "611 S. Jefferson St., Suite 5B, Roanoke, VA, 24011"
      },
      {
        "id": "K000384-virginia_beach",
        "label": "Virginia Beach",
        "phone": "757-518-1674",
        "fax": "757-518-1679",
        "address": "222 Central Park Ave., Suite 120, Virginia Beach, VA, 23462"
      }
    ]
  },
  {
    "id": "C000127",
    "name": "Maria Cantwell",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "511 Hart Senate Office Building",
    "address": "511 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3441",
    "fax": null,
    "website": "https://www.cantwell.senate.gov",
    "contactForm": "https://www.cantwell.senate.gov/public/index.cfm/email-maria",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C000127-everett",
        "label": "Everett",
        "phone": "425-303-0114",
        "fax": "425-303-8351",
        "address": "2930 Wetmore Ave., Suite 9B, Everett, WA, 98201"
      },
      {
        "id": "C000127-richland",
        "label": "Richland",
        "phone": "509-946-8106",
        "fax": "509-946-6937",
        "address": "825 Jadwin Ave., Suite 206, Richland, WA, 99352"
      },
      {
        "id": "C000127-seattle",
        "label": "Seattle",
        "phone": "206-220-6400",
        "fax": "206-220-6404",
        "address": "915 Second Ave., Suite 3206, Seattle, WA, 98174"
      },
      {
        "id": "C000127-spokane",
        "label": "Spokane",
        "phone": "509-353-2507",
        "fax": "509-353-2547",
        "address": "920 W. Riverside Ave., Suite 697, Spokane, WA, 99201"
      },
      {
        "id": "C000127-tacoma",
        "label": "Tacoma",
        "phone": "253-572-2281",
        "fax": "253-572-5879",
        "address": "950 Pacific Ave., Suite 615, Tacoma, WA, 98402"
      },
      {
        "id": "C000127-vancouver",
        "label": "Vancouver",
        "phone": "360-696-7838",
        "fax": "360-696-7844",
        "address": "1313 Officers Row, Vancouver, WA, 98661"
      }
    ]
  },
  {
    "id": "M001111",
    "name": "Patty Murray",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "WA",
    "stateName": "Washington",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "154 Russell Senate Office Building",
    "address": "154 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-2621",
    "fax": null,
    "website": "https://www.murray.senate.gov",
    "contactForm": "https://www.murray.senate.gov/write-to-patty",
    "emails": [],
    "fieldOffices": [
      {
        "id": "M001111-everett",
        "label": "Everett",
        "phone": "425-259-6515",
        "fax": "425-259-7152",
        "address": "2930 Wetmore Ave., Suite 9D, Everett, WA, 98201"
      },
      {
        "id": "M001111-olympia",
        "label": "Olympia",
        "phone": "360-205-2878",
        "fax": null,
        "address": "771 Capitol Way Sound, Suite 502, Olympia, WA, 98501"
      },
      {
        "id": "M001111-richland",
        "label": "Richland",
        "phone": "509-453-7462",
        "fax": null,
        "address": "825 Jadwin Avenue, Suite 160K, Richland, WA, 99352"
      },
      {
        "id": "M001111-seattle",
        "label": "Seattle",
        "phone": "206-553-5545",
        "fax": "206-553-0891",
        "address": "915 2nd Ave., #2988, Jackson Federal Building, Seattle, WA, 98174"
      },
      {
        "id": "M001111-spokane",
        "label": "Spokane",
        "phone": "509-624-9515",
        "fax": null,
        "address": "920 West Riverside Avenue, Ste 485, Spokane, WA, 99201"
      },
      {
        "id": "M001111-tacoma",
        "label": "Tacoma",
        "phone": "253-572-3636",
        "fax": null,
        "address": "1301 A Street, Ste 213, Tacoma, WA, 98402"
      },
      {
        "id": "M001111-vancouver",
        "label": "Vancouver",
        "phone": "360-696-7797",
        "fax": "360-696-7798",
        "address": "1323 Officer's Row, The Marshall House, Vancouver, WA, 98661"
      }
    ]
  },
  {
    "id": "J000312",
    "name": "James C. Justice",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "WV",
    "stateName": "West Virginia",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "509 Hart Senate Office Building",
    "address": "509 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-3954",
    "fax": null,
    "website": "https://www.justice.senate.gov",
    "contactForm": "https://www.justice.senate.gov/share-your-opinion/",
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000312-charleston",
        "label": "Charleston",
        "phone": "304-342-5855",
        "fax": null,
        "address": "900 Pennsylvania, Suite 629, Charleston, WV, 25302"
      }
    ]
  },
  {
    "id": "C001047",
    "name": "Shelley Moore Capito",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "WV",
    "stateName": "West Virginia",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "170 Russell Senate Office Building",
    "address": "170 Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-6472",
    "fax": null,
    "website": "https://www.capito.senate.gov",
    "contactForm": "https://www.capito.senate.gov/contact/contact-shelley",
    "emails": [],
    "fieldOffices": [
      {
        "id": "C001047-charleston",
        "label": "Charleston",
        "phone": "304-347-5372",
        "fax": null,
        "address": "500 Virginia Street East, Suite 950, Charleston, WV, 25301"
      },
      {
        "id": "C001047-martinsburg",
        "label": "Martinsburg",
        "phone": "304-262-9285",
        "fax": null,
        "address": "300 Foxcroft Ave., Suite 202A, Martinsburg, WV, 25401"
      },
      {
        "id": "C001047-morgantown",
        "label": "Morgantown",
        "phone": "304-292-2310",
        "fax": null,
        "address": "48 Donley St., Suite 504, Morgantown, WV, 26501"
      }
    ]
  },
  {
    "id": "J000293",
    "name": "Ron Johnson",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": null,
    "class": 3,
    "isTerritory": false,
    "office": "328 Hart Senate Office Building",
    "address": "328 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5323",
    "fax": null,
    "website": "https://www.ronjohnson.senate.gov",
    "contactForm": "https://www.ronjohnson.senate.gov/public/index.cfm/email-the-senator",
    "emails": [],
    "fieldOffices": [
      {
        "id": "J000293-madison",
        "label": "Madison",
        "phone": "608-240-9629",
        "fax": "608-240-9646",
        "address": "5315 Wall St., Suite 110, Madison, WI, 53718"
      },
      {
        "id": "J000293-milwaukee",
        "label": "Milwaukee",
        "phone": "414-276-7282",
        "fax": "414-276-7284",
        "address": "517 E. Wisconsin Ave., Suite 408, Milwaukee, WI, 53202"
      },
      {
        "id": "J000293-oshkosh",
        "label": "Oshkosh",
        "phone": "920-230-7250",
        "fax": "920-230-7262",
        "address": "219 Washington Ave., Suite 100, Oshkosh, WI, 54901"
      }
    ]
  },
  {
    "id": "B001230",
    "name": "Tammy Baldwin",
    "chamber": "Senate",
    "role": "Senator",
    "party": "D",
    "partyName": "Democrat",
    "state": "WI",
    "stateName": "Wisconsin",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "141 Hart Senate Office Building",
    "address": "141 Hart Senate Office Building Washington DC 20510",
    "phone": "202-224-5653",
    "fax": null,
    "website": "https://www.baldwin.senate.gov",
    "contactForm": "https://www.baldwin.senate.gov/feedback",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001230-eau_claire",
        "label": "Eau Claire",
        "phone": "715-832-8424",
        "fax": null,
        "address": "500 South Barstow St., Suite LL2, Eau Claire, WI, 54701"
      },
      {
        "id": "B001230-green_bay",
        "label": "Green Bay",
        "phone": "920-498-2668",
        "fax": null,
        "address": "2325 Verlin Road, Suite 201, Green Bay, WI, 54311"
      },
      {
        "id": "B001230-la_crosse",
        "label": "La Crosse",
        "phone": "608-796-0045",
        "fax": null,
        "address": "210 7th Street South, Suite 203, La Crosse, WI, 54601"
      },
      {
        "id": "B001230-ladysmith",
        "label": "Ladysmith",
        "phone": "715-832-8424",
        "fax": null,
        "address": "P.O. Box 401, Ladysmith, WI, 54848"
      },
      {
        "id": "B001230-madison",
        "label": "Madison",
        "phone": "608-264-5338",
        "fax": null,
        "address": "30 W. Mifflin St., Suite 700, Madison, WI, 53703"
      },
      {
        "id": "B001230-milwaukee",
        "label": "Milwaukee",
        "phone": "414-297-4451",
        "fax": null,
        "address": "633 West Wisconsin Ave, Suite 1300, Milwaukee, WI, 53203"
      }
    ]
  },
  {
    "id": "L000571",
    "name": "Cynthia M. Lummis",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "WY",
    "stateName": "Wyoming",
    "district": null,
    "class": 2,
    "isTerritory": false,
    "office": "127a Russell Senate Office Building",
    "address": "127A Russell Senate Office Building Washington DC 20510",
    "phone": "202-224-3424",
    "fax": null,
    "website": "https://www.lummis.senate.gov",
    "contactForm": "https://www.lummis.senate.gov/contact/contact-form",
    "emails": [],
    "fieldOffices": [
      {
        "id": "L000571-afton",
        "label": "Afton",
        "phone": "307-248-1736",
        "fax": null,
        "address": "80 1st Avenue, Suite 105, Afton, WY, 83110"
      },
      {
        "id": "L000571-casper",
        "label": "Casper",
        "phone": "307-261-6572",
        "fax": null,
        "address": "100 East B Street, Suite 3201, Dick Cheney Federal Building, Casper, WY, 82602"
      },
      {
        "id": "L000571-cheyenne",
        "label": "Cheyenne",
        "phone": "307-772-2477",
        "fax": null,
        "address": "2120 Capitol Avenue, Suite 2007, Federal Center, Cheyenne, WY, 82001"
      },
      {
        "id": "L000571-cody",
        "label": "Cody",
        "phone": "307-527-9444",
        "fax": null,
        "address": "1285 Sheridan Avenue, Suite 215, Cody, WY, 82414"
      },
      {
        "id": "L000571-sundance",
        "label": "Sundance",
        "phone": "307-283-3461",
        "fax": null,
        "address": "120 North 4th Street, Sundance, WY, 82729"
      }
    ]
  },
  {
    "id": "B001261",
    "name": "John Barrasso",
    "chamber": "Senate",
    "role": "Senator",
    "party": "R",
    "partyName": "Republican",
    "state": "WY",
    "stateName": "Wyoming",
    "district": null,
    "class": 1,
    "isTerritory": false,
    "office": "307 Dirksen Senate Office Building",
    "address": "307 Dirksen Senate Office Building Washington DC 20510",
    "phone": "202-224-6441",
    "fax": null,
    "website": "https://www.barrasso.senate.gov",
    "contactForm": "https://www.barrasso.senate.gov/public/index.cfm/contact-form",
    "emails": [],
    "fieldOffices": [
      {
        "id": "B001261-casper",
        "label": "Casper",
        "phone": "307-261-6413",
        "fax": null,
        "address": "100 E. B St., Suite 2004, Casper, WY, 82601"
      },
      {
        "id": "B001261-cheyenne",
        "label": "Cheyenne",
        "phone": "307-772-2451",
        "fax": null,
        "address": "2120 Capitol Ave., Suite 2013, Cheyenne, WY, 82001"
      },
      {
        "id": "B001261-riverton",
        "label": "Riverton",
        "phone": "307-856-6642",
        "fax": null,
        "address": "324 E. Washington Ave., Riverton, WY, 82501"
      },
      {
        "id": "B001261-rock_springs",
        "label": "Rock Springs",
        "phone": "307-362-5012",
        "fax": null,
        "address": "1575 Dewar Drive, Suite 218, Commerce Bank, Rock Springs, WY, 82901"
      },
      {
        "id": "B001261-sheridan",
        "label": "Sheridan",
        "phone": "307-672-6456",
        "fax": null,
        "address": "51 Coffeen Avenue, Suite 202, Sheridan, WY, 82801"
      }
    ]
  }
];
