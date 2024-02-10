function loadData(){
    $.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=solana,bitcoin,ethereum&vs_currencies=usd",function(data){
        console.log(data)

        $('#btc-price').html("$"+data.bitcoin.usd)
        $('#eth-price').html("$"+data.ethereum.usd)
        $('#sol-price').html("$"+data.solana.usd)

    })
   }

   loadData();

    setInterval(function(){

        loadData();
    },5000)








