
let wallet_address = '';
let nft_contract = "0x790d1A960BFc3758956c0AC2C07cDE8E2Df4E0f2";
let reward_contract = "0x1247a8B2f29D1ddE7d0a88600467d0Acda7c11b1";
let nft_abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fomoCheck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"date","type":"uint256"}],"name":"setFomoDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setFomoRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setHolderRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"date","type":"uint256"}],"name":"setStartDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_base_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_base_uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fomo_date","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fomo_index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fomo_lastaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fomo_lastdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fomo_rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fomo_reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_holder_rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_holder_reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
let reward_abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getUnpaidEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsPerStock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsPerStockAccuracyFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setStock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stocks","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"totalExcluded","type":"uint256"},{"internalType":"uint256","name":"totalRealised","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
let startTime = 0;

function initweb(){
    getPublicData();
    connectWallet();
}

async function getPublicData() {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://http-mainnet.hoosmartchain.com'));
    let contract = new web3.eth.Contract(nft_abi,nft_contract);
    let info = await contract.methods.getInfo().call();
    let maxSupply = info[1];
    let totalSupply = info[2];
    let price = info[3];
    let fomo_reward = info[4];
    let fomo_addr = info[5];
    let holder_reward = info[7];
    
    $("#minted").html(totalSupply+'<span style="color:rgba(255,255,255,0.60)">/'+maxSupply+'</span>');
    $("#minted_p").css("width",BigNumber(totalSupply/maxSupply*100).toFixed(2,1)+'%');
    $("#minted_r").html(BigNumber(totalSupply/maxSupply*100).toFixed(2,1)+'%');
    $("#price").html(BigNumber(price).dividedBy(1000000000000000000).toFixed(2,0));
    $("#fomo_addr").html(fomo_addr.substring(0,4)+"..."+fomo_addr.substring(fomo_addr.length-4,fomo_addr.length));
    $("#fomo_reward").html(BigNumber(fomo_reward).dividedBy(1000000000000000000).toFixed(2,0)+" HOO");
    $("#holder_reward").html(BigNumber(holder_reward).dividedBy(1000000000000000000).toFixed(2,0)+" HOO");
    fomo_time = info[6];
    if(fomo_time>0){
        CountFomoDown();
    }
    startTime = info[0];
    if(startTime > 0){
        CountDown()
     }else {
        $("#mint_btn").html("MINT");
     }
}

function CountDown() {
    $("#mint_btn").html(parseInt(parseInt(parseInt(startTime/60)/60)/24)+" Day "+tow(parseInt(parseInt(startTime/60)/60)%24)+":"+tow(parseInt(parseInt(startTime)/60)%60)+":"+tow(startTime%60));
    --startTime;
    if(startTime<=0){
        $("#mint_btn").html("MINT");
    }else{
        setTimeout('CountDown()', 1000);
    }
}

async function getUserData(){
    let web3 = new Web3(new Web3.providers.HttpProvider('https://http-mainnet.hoosmartchain.com'));
    let contract = new web3.eth.Contract(reward_abi,reward_contract);
    let info = await contract.methods.stocks(wallet_address).call();
    let myclaim = await contract.methods.getUnpaidEarnings(wallet_address).call();
    let myreward = info[2];
    $("#reward_my").html(BigNumber(myreward).dividedBy(1000000000000000000).toFixed(2,0)+" HOO");
    $("#reward_claim").html(BigNumber(myclaim).dividedBy(1000000000000000000).toFixed(2,0)+" HOO");
}

async function mint() {
    if(!wallet_address) {
        connectWallet();
        return;
    }
    if(startTime>0){
        alert("Coming soon");
        return;
    }
    let contract = new (new Web3(window.ethereum)).eth.Contract(nft_abi,nft_contract);
    let amount = await contract.methods.currentPrice().call();
    amount = BigNumber(amount).multipliedBy(1.005).toFixed(0,1);
    contract.methods.mint().send({value:amount,from:wallet_address});
}

async function claim() {
    if(!wallet_address) {
        connectWallet();
        return;
    }
    let contract = new (new Web3(window.ethereum)).eth.Contract(reward_abi,reward_contract);
    await contract.methods.claimReward().send({from:wallet_address});
}

function CountFomoDown(){
    $("#fomo_time").html(tow(parseInt(parseInt(fomo_time/60)/60)%24)+":"+tow(parseInt(parseInt(fomo_time)/60)%60)+":"+tow(fomo_time%60));
    --fomo_time;
    if(fomo_time<=0){
        $("#fomo_time").html("End");
    }else{
        setTimeout('CountFomoDown()',1000);
    }
}

function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}

async function connectWallet() {
    try {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function (accounts) {
                if (wallet_address != accounts) {
                    location.reload();
                }
            });
            window.ethereum.on('networkChanged', async function (chainId) {
                if (chainId != "70") {
                    await window.ethereum.request({method:'wallet_addEthereumChain',params:[{
                        chainId:'0x46',
                        chainName:'Hoo Smart Chain',
                        nativeCurrency:{name:'HOO',symbol:'HOO',decimals:18},
                        rpcUrls:['https://http-mainnet.hoosmartchain.com'],
                        blockExplorerUrls:['https://hooscan.com/']
                    }]});
                } else {
                    location.reload();
                }
            });
            let chainId = await new Web3(window.ethereum).eth.net.getId() + "";
            if (chainId != "70") {
                await window.ethereum.request({method:'wallet_addEthereumChain',params:[{
                    chainId:'0x46',
                    chainName:'Hoo Smart Chain',
                    nativeCurrency:{name:'HOO',symbol:'HOO',decimals:18},
                    rpcUrls:['https://http-mainnet.hoosmartchain.com'],
                    blockExplorerUrls:['https://hooscan.com/']
                }]});
                return;
            }
            let accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            wallet_address = accounts[0];
            $("#connectBtn").html(wallet_address.substring(0,4)+"..."+wallet_address.substring(wallet_address.length-4,wallet_address.length));
            setTimeout(()=>{getUserData()},1000);
        }
    } catch (e) {}
}