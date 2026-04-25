The GW2Power website has been sunset recently. I made this decision because of the rising domain/hosting costs, and because I haven't personally used the website in years.
Any enthusiasts that would still like to use it can now either host it themselves, or simply run it locally (by downloading the entire repository and running `index.html`.
You are free to do whatever you like with this project (copy, change, publish, etc). Enjoy!

In order to get the website fully functional on your own hosting provider, you will need to change the following:
1. Update the URL for creating links by changing "gw2power.com" to your personal domain in `statcalc.js`
2. For the link shortening you will have to insert a Bit.ly login and api key at the end of the `statcalc.js` file (in place of "YourLoginHere" and "YourApiKeyHere")

Notes regarding calculations: party buff and necromancer's Death Perception do not provide accurate attributes to the calculations, as they have been changed in-game since the last time I developed GW2Power. 
With some effort you could change/fix them in the `statcalc.js` file
