# Congressional contact directory research

## Scope

The directory uses the current member feed for the 119th Congress from the public `unitedstates/congress-legislators` project. It includes the current Senate and House/territorial delegate records represented by the latest term in `legislators-current.json`.

## Sources

- U.S. Senate, Contacting U.S. Senators: https://www.senate.gov/senators/senators-contact.htm
- U.S. Senate suite and telephone list: https://www.senate.gov/general/resources/pdf/senators_phone_list.pdf
- U.S. House, Directory of Representatives: https://www.house.gov/representatives
- Current member data: https://unitedstates.github.io/congress-legislators/legislators-current.json
- Current district-office data: https://unitedstates.github.io/congress-legislators/legislators-district-offices.json
- Contact-form schemas: https://github.com/unitedstates/contact-congress

## Audit as of 2026-08-29

- 537 current member records in the current JSON feed.
- 100 senators.
- 437 House/territorial delegate records in the current JSON feed.
- 537 of 537 current records have a public Washington office phone in the latest term.
- 537 of 537 current records have a public Washington address in the latest term.
- 536 of 537 current records have an official website URL.
- 88 of 537 current records have a contact-form URL in the member feed.
- The member feed does not expose a direct public email field. The application must not infer or fabricate email addresses from names or domains.
- Official Senate and House guidance directs constituents to member websites/contact forms; the UI labels these as `Official contact form` or `Official website` rather than `email`.

## Product behavior

The phone section is upgraded into a civic contact directory. It provides search, chamber, state/territory, and contact-type filters; a record count; copy-to-clipboard actions; click-to-call links; official website/contact-form links; Washington office details; and available district/field office phone details.

The directory shows an explicit source note: direct public email addresses are not present in the authoritative bulk feed, so Bonds Studio lists official contact routes without guessing email addresses.
