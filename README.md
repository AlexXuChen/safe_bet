# safe_bet
Safe drive, safe bet

## Inspiration

Safe drive, safe bet

We were inspired by the idea of betting on yourself for personal improvement, and decided to tie it in to safe driving to simultaneously support auto insurance by providing data to insurance companies. 

## What it does

Users bet on themselves and try to reach a measurable goal to drive safer. A single "game" will have a certain goal, for example, speeding less, and users bet a set amount to participate. The pot is split among users who fulfill the goal while users who weren't able to achieve the goal will lose the money they committed. Furthermore, driving data is sent to insurance companies so they can more accurately profile their users. Currently, things like insurance premiums are based on user attributes, but SafeBet will give real time user behaviour to the companies, which is incredibly valuable.

## How we built it

We made a webapp and primarily used JavaScript and HTML to demonstrate our idea. All group members were comfortable with these languages and we were able to efficiently build our project. Our designs for the webapp also help to portray our vision for SafeBet.

## Challenges we ran into

The definition of a "safe driver" has multiple different criteria, and diving deeper into this seemed to be out of reach based on time constraints. Instead, we decided to warp the definition to solely look at ETA and time elapsed during the trip as a proof of concept.

Additionally, we had trouble finding an open source API that allowed the tracking of speed, local speed limit based on GPS location and using the accelerometer to test the rate that speed changes occur. We decided the best strategy was to use the Google Routes API, which proved to be challenging when making calls through php.

## Accomplishments that we're proud of

We are very proud of keeping our project scope clear within the time restraints of the hackathon, along with taking the time to investigate different APIs and find an ideal assortment of libraries for us to use freely.

## What we learned

We learned lots about using more robust front ends languages for API calls, such as php, and strategies to appeal to both users of our product, and companies our use case might appeal to.

## What's next for SafeBet

For the future, we would measure driver safety with much more complicated, enterprise-level algorithms to be more accurate and provide valuable data to insurance companies. We would also create a mobile app for ease of use.
