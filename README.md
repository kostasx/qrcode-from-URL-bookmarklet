# qrcode-from-URL-bookmarklet

Generate and display a QRCode from the URL

# INSTALL

Drag and drop this link to your bookmark bar

<a href="javascript:(function()%7B%22use%20strict%22%3B!function(e%2Ct%2Co%2Ci%2Cr%2Cd)%7Bo%3De.createElement.bind(e)%2C(r%3Do(%22script%22)).src%3D%22https%3A%2F%2Frawgit.com%2Fdavidshimjs%2Fqrcodejs%2Fmaster%2Fqrcode.min.js%22%2Ce.head.appendChild(r)%2Ct%3De.body%2C(i%3Do(%22div%22)).setAttribute(%22style%22%2C%22position%3Afixed%3Btop%3A50%25%3Bleft%3A50%25%3Bz-index%3A1337%3Btransform%3Atranslate(-50%25%2C-50%25)%3Bborder%3A50px%20solid%20white%3B%22)%2Ci.id%3D%22qrCode%22%2C(d%3Do(%22button%22)).textContent%3D%22REMOVE%22%2Cd.setAttribute(%22style%22%2C%22position%3Aabsolute%3Bcursor%3Apointer%3Btop%3A-50px%3Bright%3A-202px%3Bbackground%3Ablack%3Bcolor%3Awhite%3Bborder-radius%3A0%3Bpadding%3A%2015px%2040px%3Bfont-size%3A16px%3Bfont-weight%3A900%3Bborder%3Anone%3B%22)%2Ci.appendChild(d)%2Cd.onclick%3Dfunction()%7Br.remove()%2Ci.remove()%7D%2Ct.appendChild(i)%2Cr.onload%3Dfunction()%7Bnew%20QRCode(%22qrCode%22%2C%7Btext%3Adocument.location.href%2Cwidth%3A320%2Cheight%3A320%2CcorrectLevel%3AQRCode.CorrectLevel.M%7D)%7D%7D(document)%3B%7D)()">Generate QRCode</a>

# To convert the qrurl.js script into a bookmarklet:

`npm install -g bookmarklet`

`bookmarklet qrurl.js qrurl-bookmarklet.js`