$(document).ready(function() {
    const imgHtml = []
    $(".product").each(function(){
        imgHtml.push($(this).children().html())
    })
    const productInfo = [
        {
            location:"Postcard Central",
            description:"Central 中環"
        },
        {
            location:"Postcard 彩色明信片：小巴 Minibus",
            description:"10.5x14.8cm (350gsm paper)"
        },
        {
            location: "Postcard Tram",
            description: "Wan Chai Tram 灣仔電車 "
        },
        {
            location: "Postcard 彩色明信片：雪糕車 Ice-cream Van",
            description: "10.5x14.8cm (350gsm paper)"
        },
        {
            location: "Postcard To Kwa Wan",
            description: "To Kwa Wan 土瓜灣"
        },
        {
            location: "Postcard 彩色明信片：的士 Taxi",
            description: "10.5x14.8cm (350gsm paper)"
        },
        {
            location: "Postcard Kowloon City",
            description: "Kowloon City 九龍城 "
        },
        {
            location: "Hong Kong Star Ferry Tote Bag 天星小輪帆布袋",
            description: "34(w) x 31 (h) cm   (12oz)"
        },
        {
            location: "Hong Kong Star Ferry Tote Bag 天星小輪帆布袋",
            description: "34(w) x 31 (h) cm   (12oz)"
        },
        {
            location: "Hong Kong Old Shops Tote Bag 香港小店帆布袋 ",
            description: "42(h) x 35 (h) cm (12oz)"
        },
        {
            location: "Colour Transport Stickers  彩色交通貼紙套裝 ",
            description: "3pcs per package"
        },
        {
            location: "Streetscape Stickers 香港街景貼紙套裝",
            description: "3pcs per package"
        },
        {
            location: "Architecture Stickers 香港建築貼紙套裝",
            description: "3pcs per package"
        },
        {
            location: "Black and White Postcards 黑白明信片",
            description: " "
        },
        {
            location: "Coloured postcards 彩色明信片",
            description: " "
        },
        // work
        {
            location: "Hong Kong Star Ferry 天星小輪 ",
            description: " "
        },
        {
            location: "Kwun Tong 觀塘",
            description: " "
        },
        {
            location: "Central 中環",
            description: " "
        },
        {
            location: "Tai Hang 大坑",
            description: " "
        },
        {
            location: "Kowloon City 九龍城",
            description: " "
        },
        {
            location: "City of Verticality (Speculative Drawing)",
            description: " "
        },
        {
            location: "Wan Chai Tram 灣仔電車",
            description: " "
        },
        {
            location: "Ta Kwu Ling 打鼓嶺",
            description: " "
        },
        {
            location: "Tai Po Market 大埔舊墟",
            description: " "
        },
        {
            location: "Ap Liu Street 深水埗鴨寮街",
            description: " "
        },
        {
            location: "Wah Fu Estate 華富邨",
            description: " "
        },
        {
            location: "Lik Yuen Estate 瀝源邨",
            description: " "
        },
        {
            location: "Sham Shui Po Tenement Building 深水埗唐樓",
            description: " "
        },
        {
            location: "Kwong Kee Congee Shop 廣記粥店",
            description: " "
        },
        {
            location: "Cheung Kee Groceries Store 祥記辦館",
            description: " "
        },
        {
            location: "Man Fai Book Store 文輝書局",
            description: " "
        },
        {
            location: "Wah Lap Restaurant 華立茶餐廳",
            description: " "
        },
        {
            location: "Tak Kee 德記",
            description: " "
        },
        {
            location: "Bo Kee 波記",
            description: " "
        },
        {
            location: "China Cafe 中國冰室",
            description: " "
        },
        {
            location: "Alnoor Mart",
            description: " "
        },
        {
            location: "For Kee Restaurant 科記茶餐廳",
            description: " "
        },
        {
            location: "Wing Heung Cafe 永香冰室",
            description: " "
        },
        {
            location: "Bangkok 曼谷",
            description: " "
        },
        {
            location: "Hanoi 河內",
            description: " "
        },
        {
            location: "Kathmandu 加德滿都",
            description: " "
        },
        {
            location: "Penang 檳城",
            description: " "
        },
        {
            location: "Singapore  新加坡",
            description: " "
        },
        {
            location: "Taipei  台北",
            description: " "
        },
        {
            location: "Tokyo, Japan",
            description: " "
        },
        {
            location: "Tokyo, Japan",
            description: " "
        },
        {
            location: "Tak Kee 德記",
            description: " "
        },
        // europe
        {
            location: "Bucharest 布加勒斯特",
            description: ""
        },
        {
            location: "Edinburgh 愛丁堡",
            description: ""
        },
        {
            location: "Helsinki 赫爾辛基",
            description: ""
        },
        {
            location: "London 倫敦",
            description: ""
        },
        {
            location: "Manchester 曼徹斯特",
            description: ""
        },
        {
            location: "Manchester 曼徹斯特",
            description: ""
        },
        {
            location: "Vienna 維也納",
            description: ""
        },
        {
            location: "Tallinn 塔林",
            description: ""
        }
    ]
    // index
    let english = "To record the ever-changing urban places.<br><br> I was born and raised in Hong Kong and I am currently studying architecture at the University of Edinburgh. I have a deep passion in urban sketching from cityscape of downtown alleyways to local corner shops. Recording our urban environment through art is not only crucial to the creation of inhabitable space in a city, it also represents our sense of identity of a place."
    let cantonese = "用紙和筆記錄大城小事。<br><br> 我是一個香港土生土長，正於英國修讀建築系的大學生，對於城市的建築和人文風景有濃厚的興趣。希望透過日常的繪畫，記錄我們身邊眾多轉瞬即逝的平凡街景， 並從此探討城市多變的面貌。當舊日鄰里早已被推倒重來，街角小店亦不斷消失，繁華鬧市又變得面目全非，我們還可眷戀什麼？在去或留的不安時代，有些東西是相片不能捕捉，是文字不能記載，唯有用細膩的筆墨才能記錄屬於我們歷史的一部分。"

    $("#toggle").click(function(){
        $("#nav").toggleClass("-right-full right-0")
    })
    $("#english").click(function(){
        $("#aboutme").html(english)
        $("#aboutme").removeClass("font-thin")
    })
    $("#cantonese").click(function(){
        $("#aboutme").html(cantonese)
        $("#aboutme").addClass("font-thin")

    })
    // commissions
    $("#arrowDown").click(function(e){
        e.preventDefault();
        $("#refuge").slideToggle(500);
        $("#arrowDown").toggleClass("rotate-180")
    })
    $("#arrowDownTwo").click(function(e){
        e.preventDefault();
        $("#shopfront").slideToggle(500);
        $("#arrowDownTwo").toggleClass("rotate-180")
    })
    // products photo gallery
    $(".itemBox").addClass("flex justify-center rounded-2xl overflow-hidden")
    $(".itemBox").children("img").addClass("h-full w-auto hover:scale-125 cursor-pointer transition-all z-0 object-contain")
    $(".itemBox").children("div").addClass("h-[500px] cursor-pointer flex flex-col gap-10 place-content-center ml-5 mr-5")
    // events
    // london
    $(".events").addClass("flex justify-center rounded-2xl overflow-hidden")
    $(".events").children("img").addClass("h-full w-auto hover:scale-125 cursor-pointer transition-all z-0 object-contain")
    // products filtering
    $(".list").click(function(){
        const value = $(this).attr("data-filter")
        if (value == "all" || value == "All"){
            $('.itemBox').show("1000");
        } else {
            $(".itemBox").not("."+value).hide();
            $(".itemBox").filter("."+value).show();
        }
    })
    $(".itemBox").click(function(){
        let i = $(this).attr("id")
        let img = $(this).children("img")
        let desc = $(this).children("div")
        $(this).siblings().children("img").removeClass("hidden")
        $(this).siblings().children("div").html("")
        $(this).siblings().removeClass("bg-slate-400 text-gray-100")
        $(this).toggleClass("bg-slate-400 text-gray-100")
        if (img.hasClass("hidden")){
            img.removeClass("hidden")
            desc.html("")
        } else {
            img.addClass("hidden")
            desc.html("<div>"+productInfo[i].location+"</div>"+"<div>"+productInfo[i].description+"</div>")
        }
    })
    $(".contacts").children().children().addClass("flex place-content-center justify-center w-full h-full")
    $(".contacts").children("div").children().children().addClass("w-20 cursor-pointer")
    $("#mail").click(function(){
        alert("Paperwithpen.design@gmail.com")
    })
})




