    var latesttokenid
    window.provider=null
    window.web3=null
    window.checkmode=null
    window.userWalletAddress = null
    window.contract_abi= [ { "constant": true, "inputs": [ { "name": "_interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "InterfaceId_ERC165", "outputs": [ { "name": "", "type": "bytes4" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "exists", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": true, "name": "_tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_approved", "type": "address" }, { "indexed": true, "name": "_tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_operator", "type": "address" }, { "indexed": false, "name": "_approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_tokenURI", "type": "string" } ], "name": "mintUniqueTokenTo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
    window.contract_address="0x89D5ABA9592a11B43176163b109D62F3a03BD0e6";



function connectBlockchain(provide_network){ 
     window.web3 = new Web3(provide_network);
        }
function chooseProvider(choice){ 
     if (choice=="walletconnect") {
            window.checkmode="walletconnect"
            window.provider = new WalletConnectProvider.default({rpc:
            {
            97:"https://data-seed-prebsc-1-s1.binance.org:8545/"
            }
            ,qrcodeModalOptions: {
              mobileLinks: [
                "rainbow",
                "metamask",
                "argent",
                "trust",
                "imtoken",
                "pillar",
              ] 
            } }); 

            var connectWC= async(result,err)=>  {
            await window.provider.enable();
            connectBlockchain(window.provider)
            window.allAccounts=await window.web3.eth.getAccounts()
         }
            connectWC().then((onResolved) => {
            loginWithMetaMask()
              })
          }
          
     else{            
            window.checkmode="metamask"
            window.provider=window.ethereum
            connectBlockchain(window.provider)
            Accountsget=async (result,err)=>  {
              try{
              window.allAccounts=await window.ethereum.request({ method: 'eth_requestAccounts' })
                }catch(err) {
             window.loginButton.innerHTML = "Login with your NFT key";

          }

                }   
            Accountsget().then((onResolved) => {
                  loginWithMetaMask()          
              },)


          }

  } 
  	 function closepop(){ 
		      window.clickButton.removeEventListener('click', closepop)
		      $(window.claimnftpopupId).fadeOut()
		      loginWithMetaMask()
  }


     async function mint() {
        try{

        window.clickButton.style.visibility='hidden';
        window.waitcon.innerHTML ="Please wait"
        window.blockcon.innerHTML ="Confirming on Blockchain"
       await NameContract.methods.mintUniqueTokenTo(window.userWalletAddress,latesttokenid+1,"d12dj3").send({"from":window.userWalletAddress,}).then(function(result,error)
        {
          if (result){ 
                    window.waitcon.innerHTML ="Success!"
                    window.blockcon.innerHTML ="You've got your NFTKey! "
                    window.clickButton.style.visibility='visible';
                    window.clickButton.innerHTML='Login with your NFT key';
        window.clickButton.removeEventListener('click', mint)
        setTimeout(() => {
        window.clickButton.addEventListener('click', closepop)

      },20)
        window.loginButton.removeEventListener('click', loginWithMetaMask)


      };
    } 
    )


      setTimeout(() => {
        window.loginButton.addEventListener('click', loginWithMetaMask)
      }, 200)
    }catch(err){
      blockcon.innerHTML = err.message
      waitcon.innerHTML =""
    }
    }
     function connectBlockchain(provide_network)  { 
     	window.web3 = new Web3(provide_network);
        }

    function disconnectpress(){ 
    	disconnectaccount()
    }
    function anotherwalletfun(){
    	disconnectaccount()
    	 $(window.connectwalletpopupId).css("display","block");
    }
    async function disconnectaccount(){ 

      if  (window.checkmode=="walletconnect"){

    //COMMENTED OUT BECAUSE THROWS ERROR --> GIHUB ISSUE RAISED BUT NO RESOLUTION .
   // var completeDisconnection= await window.provider.disconnect()
   // await window.provider.on("disconnect",()=>{ })  
	  window.localStorage.removeItem('walletconnect');
 }
      accountheader.innerHTML="Disconnected"

    }    
    function cancelpopup(){ 
      }
    function walletmanager(){ 
      $(function () {
          $(window.walletmanageId).css("display","block");

        });
      
      $(window.anotherwalletId).on('click', function(){
    	anotherwalletfun();
    $(window.walletmanageId).css("display","none");
		 $('#wrapped-primarypage').css("display","block");
		 $('#wrapped-secondarypage').css("display","none");
		 // document.location.reload(true)} ) 
		})
      
      $(window.disconnectId).on('click', function(){
      disconnectpress();
  		$(window.walletmanageId).css("display","none");
  		 $('#wrapped-primarypage').css("display","block");
  		 $('#wrapped-secondarypage').css("display","none");
  		// document.location.reload(true)} ) 
  	})
      
      $(window.cancelId).on('click', function(){
      cancelpopup(); 
  	$(window.walletmanageId).css("display","none"); 
  		})
  	}
  	async function loginWithMetaMask() { 
      try{
      if (!allAccounts) { return }
      window.userWalletAddress = allAccounts[0]
     window.NameContract = new web3.eth.Contract(window.contract_abi, window.contract_address); 
     window.NameContract.methods.balanceOf(window.userWalletAddress).call().then( function(result,error)
        {
          if (error){ window.loginButton.innerHTML=error} 
          if (result==0){ 
          latesttokenid=Math.floor(Math.random() * 10000000000)
          $(window.claimnftpopupId).css("display","block");
          window.clickButton.innerHTML="CLAIM YOUR NFKEY"
          setTimeout(() => {
                      window.clickButton.addEventListener('click', mint)
                    }, 40) 

        } 
          else{                                
                    $('#wrapped-primarypage').css("display","none");

                    // $('.loggedin-screen').removeClass('hide');
                    // $('body').removeClass('lp-active');
                    // $('.default-screen').addClass('hide');

                    $('#wrapped-secondarypage').css("display","block")
                    var cut=Math.floor(window.userWalletAddress.length/2)
                    var part1=window.userWalletAddress.substring(0, 12)
                    var part2="....."
                    var part3=window.userWalletAddress.substring(35,42)
                    window.accountheader.innerHTML=part1+part2+part3
                    $(window.accountheader).on('click', function(){
                    walletmanager();
                    } 
                    )
          }
          } 
            )
                  }catch(err) {
      }
       }




class wrapperconnectwallet {
  constructor() {
    window.spanId="#wrapped-wrappedclose"
    window.connectwalletpopupId='#wrapped-myModal'
    window.metamaskclickId='#wrapped-metamaskbutton'
    window.walletconnectclickId='#wrapped-walletconnectbutton'
  	
  	window.anotherwalletId="#wrapped-anotherwallet";
  	window.disconnectId="#wrapped-disconnect";
  	window.cancelId="#wrapped-cancel";

  	window.walletmanageId='.wrapped-wallet-manage-popup';
  	window.claimnftpopupId=".wrapped-claim-your-nft-popup"; 

  	this.loginButtonId = "wrapped-myBtn";
  	this.clickButtonId="wrapped-claim";
  	this.blochaindisplayId="wrapped-Blockchain";
  	this.waitdisplaId="wrapped-Wait";
  	this.accountheaderId="wrapped-myBtn2";

    window.accountheader=document.getElementById(this.accountheaderId)
  	window.waitcon = document.getElementById(this.waitdisplaId)   ;
    window.blockcon = document.getElementById(this.blochaindisplayId);
  	window.loginButton=document.getElementById(this.loginButtonId);
  	window.clickButton=document.getElementById(this.clickButtonId) ;

  }
  	 
//   	function setloginButtonId(butonid) {
//   		this.loginButtonId=butonid 
// }
// 	function getloginButtonId(){ 
// 		reurn this.loginButtonId
// }


	  choosewallet(){

	  $(window.connectwalletpopupId).css("display","block");
	  function dissapearpopup(disobj){
   	  $(disobj).css("display","none");
   	  }
   	  $(window.spanId).on('click',event={param1: window.connectwalletpopupId}, function(){
   	  	dissapearpopup(event.param1)
   	  })  
	  
	  $(window.metamaskclickId).on('click',event={param1: window.connectwalletpopupId} ,function(){
      dissapearpopup(event.param1); 
      this.choice="metamask";
      chooseProvider(this.choice)
      } 
      )
      $(window.walletconnectclickId).on('click',event={param1: window.connectwalletpopupId}, function(){
      dissapearpopup(event.param1)
      this.choice="walletconnect" ;
      chooseProvider(this.choice)
	  }
	  )
	  }


	}
	window.onload= () => { 
		wrapperobj=new wrapperconnectwallet
	 $("#"+window.wrapperobj.loginButtonId).on('click', function(){
	  	wrapperobj.choosewallet();
      } 
      ) 
	}
	// function listids(){
	// console.log(this.loginButtonId+" "
	// 		    +this.landingpageId+" "
	// 		    +this.connectwalletpopupId+" "
	// 		    +this.metamaskclickId+" "
	// 		    +this.walletconnectclickId+" "
	// 		    +this.contract_abi+" "
	// 		    +this.contract_address+" "
	// 		  	+this.anotherwalletId+" "
	// 		  	+this.disconnectId+" "
	// 		  	+this.cancelId+" "
	// 		  	+this.accountId+" "
	// 		  	+this.walletmanageId+" "
	// 		  	+this.claimnftpopupId+" "
	// 		  	+this.clickButtonId+" "
	// 		  	+this.blochaindisplayId+" "
	// 		  	+this.waitdisplaId+" "
	// 		  	+this.accountheaderId+" "
	// 		  	+this.accounthandleId+" "
	// 		  	)

	// }


