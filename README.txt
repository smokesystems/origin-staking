 Follow these steps - 

1. Copy and paste your project in a new folder , if you mess up the steps you will still have the orignal files .  

2. Copy and paste the wrappedcontent.css file in your project directory .

3. Copy and paste <link rel="stylesheet" href="content/css/wrappedcontent.css" /> inside the <head></head> tags. 

4. Copy and paste just above the </body> tag -
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.7.5/dist/umd/index.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/custom.js"></script>
    <script src="NFKEYWRAPPER.js"></script>  

5. Provide id="wrapped-myBtn" on the button you wish to use as login buttton . eg- <button id="wrapped-myBtn"  class="ABC XYZ">login</button>

6.Provide id="wrapped-myBtn2" on the button you wish to use as the logout button. eg-  <button id="wrapped-myBtn2"  class="ABC XYZ">logout</button>

7. Copy and paste contents of insertjs.txt just above the pile of <script> tags .

8. Copy and paste token contract address in NFKEYWRAPPER.js . eg. window.contract_address= "0x1234567" .

9. Name your secondary page div as  wrapped-secondarypage . Name your primary page div as wrapped-primarypage . 
  The divs should enclose entirety of their respective page . eg - <div id="wrapped-primarypage" class="default-screen"> PRIMARY PAGE CONTENT GOES HERE</div>


