// import ChatNow from "../../images/imgProjects/chatNow.png"
// import amazon from "../../images/imgProjects/amazon.jpg"
// import tiktok from "../../images/imgProjects/tiktok.png"
// import tinder from "../../images/imgProjects/tinder.png"
// import shopStore from "../../images/imgProjects/store.png"
// import TV from "../../images/imgProjects/logoFlix.png"
// import Todo from "../../images/imgProjects/todo.png"
// import Bookmark from "../../images/imgProjects/illustration-features-tab-2.svg"
// import Car from "../../images/imgProjects/car.jpg"
// import Composition from "../../images/imgProjects/developer.jpg"
// import Special from "../../images/imgProjects/landing2.jpg"
// import Elite from "../../images/imgProjects/slide1.jpg"
// import Prototypes from "../../images/imgProjects/landing7.png"
// import Home from "../../images/imgProjects/home.jpg"
// import Tech from "../../images/imgProjects/tec.jpg"

const   ChatNow = "https://fv2-2.failiem.lv/thumb_show.php?i=dhkpg2ppp&view",
		amazon = "https://fv2-1.failiem.lv/thumb_show.php?i=2nhj675pb&view",
		tiktok = "https://fv2-2.failiem.lv/thumb_show.php?i=9fevv5y3q&view",
		tinder = "https://fv2-1.failiem.lv/thumb_show.php?i=ra5t5knfw&view",
		shopStore = "https://fv2-2.failiem.lv/thumb_show.php?i=bh8f9rzgn&view",
		TV = "https://fv2-3.failiem.lv/thumb_show.php?i=fpezv36df&view",
		Todo = "https://fv2-3.failiem.lv/thumb_show.php?i=rd2fcawsc&view",
		Bookmark = "https://fv2-2.failiem.lv/thumb_show.php?i=6dmgshqfq&view",
		Car = "https://fv2-1.failiem.lv/thumb_show.php?i=mtfy6fxec&view",
		Composition = "https://fv2-2.failiem.lv/thumb_show.php?i=v52xj3cvg&view",
		Special = "https://fv2-1.failiem.lv/thumb_show.php?i=vhyfmjy5b&view",
		Elite = "https://fv2-2.failiem.lv/thumb_show.php?i=759exk9kb&view",
		Prototypes = "https://fv2-2.failiem.lv/thumb_show.php?i=s88dstvnm&view",
		Home = "https://fv2-1.failiem.lv/thumb_show.php?i=kt43be4vz&view",
		Tech = "https://fv2-3.failiem.lv/thumb_show.php?i=y374tmju8&view",


		ChatNowLive = "https://mohmad012.github.io/ChatNow/",
		amazonLive = "https://amazon-app-self.vercel.app/",
		tiktokLive = "https://tiktok-f8fc2.web.app/",
		tinderLive = "https://mohmad012.github.io/Tinder_frontend/",
		shopStoreLive = "https://store-shop-phi.vercel.app/",
		TVLive = "https://mohmad012.github.io/TV_Search_Flix/",
		TodoLive = "https://mohmad012.github.io/TodoList/",
		BookmarkLive = "./Projects/Bookmark/index.html",
		CarLive = "https://mohmad012.github.io/car-site/",
		CompositionLive = "https://mohmad012.github.io/Sass_Pugjs_Project/",
		SpecialLive = "https://mohmad012.github.io/web_pure_Javascript/",
		EliteLive = "https://mohmad012.github.io/Bootstrap4/",
		PrototypesLive = "https://mohmad012.github.io/bootstrap3-2/",
		HomeLive = "https://mohmad012.github.io/Real-Estate-Site/",
		TechLive = "https://mohmad012.github.io/bootstrap3-1/",

		ChatNowFront = "https://github.com/Mohmad012/ChatNow",
		tiktokFront = "https://github.com/Mohmad012/TikTok_frontend",
		tinderFront = "https://github.com/Mohmad012/Tinder_frontend",

		ChatNowBack = "https://github.com/Mohmad012/ChatNow_Backend",
		tiktokBack = "https://github.com/Mohmad012/TikTok_backend",
		tinderBack = "https://github.com/Mohmad012/Tinder_backend",

		amazonGithub = "https://github.com/Mohmad012/Amazon_App",
		shopStoreGithub = "https://github.com/Mohmad012/Store_Shop",
		TVGithub = "https://github.com/Mohmad012/TV_Search_Flix",
		TodoGithub = "https://github.com/Mohmad012/TodoList",
		BookmarkGithub = "https://github.com/Mohmad012/Portfolio/tree/main/Projects/Bookmark",
		CarGithub = "https://github.com/Mohmad012/car-site",
		CompositionGithub = "https://github.com/Mohmad012/Sass_Pugjs_Project",
		SpecialGithub = "https://github.com/Mohmad012/web_pure_Javascript",
		EliteGithub = "https://github.com/Mohmad012/Bootstrap4",
		PrototypesGithub = "https://github.com/Mohmad012/bootstrap3-2",
		HomeGithub = "https://github.com/Mohmad012/Real-Estate-Site",
		TechGithub = "https://github.com/Mohmad012/bootstrap3-1",


		ChatNowName = "Chat App",
		amazonName = "Amazon App",
		tiktokName = "TikTok App",
		tinderName = "Tinder App",
		shopStoreName = "Shop Store",
		TVName = "TV Search Flims",
		TodoName = "Todo List",
		BookmarkName = "Bookmark Site",
		CarName = "Car Site",
		CompositionName = "Composition Site",
		SpecialName = "Special Design",
		EliteName = "Elite Corp Site",
		PrototypesName = "Prototypes Site",
		HomeName = "Home Design Site",
		TechName = "Tech Site";

const allData = [
			{
				img:ChatNow,
				filterMode:'filter-app',
				linkLive:ChatNowLive,
				frontGithub:ChatNowFront,
				backGithub:ChatNowBack,
				name:ChatNowName,
				frontBack:true,
			},
			{
				img:amazon,
				filterMode:'filter-web',
				linkLive:amazonLive,
				linkGithub:amazonGithub,
				name:amazonName,
				frontBack:false,
			},
			{
				img:tiktok,
				filterMode:'filter-app',
				linkLive:tiktokLive,
				frontGithub:tiktokFront,
				backGithub:tiktokBack,
				name:tiktokName,
				frontBack:true,
			},
			{
				img:tinder,
				filterMode:'filter-app',
				linkLive:tinderLive,
				frontGithub:tinderFront,
				backGithub:tinderBack,
				name:tinderName,
				frontBack:true,
			},
			{
				img:shopStore,
				filterMode:'filter-app',
				linkLive:shopStoreLive,
				linkGithub:shopStoreGithub,
				name:shopStoreName,
				frontBack:false,
			},
			{
				img:TV,
				filterMode:'filter-web',
				linkLive:TVLive,
				linkGithub:TVGithub,
				name:TVName,
				frontBack:false,
			},
			{
				img:Todo,
				filterMode:'filter-app',
				linkLive:TodoLive,
				linkGithub:TodoGithub,
				name:TodoName,
				frontBack:false,
			},
			{
				img:Bookmark,
				filterMode:'filter-card',
				linkLive:BookmarkLive,
				linkGithub:BookmarkGithub,
				name:BookmarkName,
				frontBack:false,
			},
			{
				img:Car,
				filterMode:'filter-web',
				linkLive:CarLive,
				linkGithub:CarGithub,
				name:CarName,
				frontBack:false,
			},
			{
				img:Composition,
				filterMode:'filter-card',
				linkLive:CompositionLive,
				linkGithub:CompositionGithub,
				name:CompositionName,
				frontBack:false,
			},
			{
				img:Special,
				filterMode:'filter-card',
				linkLive:SpecialLive,
				linkGithub:SpecialGithub,
				name:SpecialName,
				frontBack:false,
			},
			{
				img:Elite,
				filterMode:'filter-card',
				linkLive:EliteLive,
				linkGithub:EliteGithub,
				name:EliteName,
				frontBack:false,
			},
			{
				img:Prototypes,
				filterMode:'filter-card',
				linkLive:PrototypesLive,
				linkGithub:PrototypesGithub,
				name:PrototypesName,
				frontBack:false,
			},
			{
				img:Home,
				filterMode:'filter-web',
				linkLive:HomeLive,
				linkGithub:HomeGithub,
				name:HomeName,
				frontBack:false,
			},
			{
				img:Tech,
				filterMode:'filter-web',
				linkLive:TechLive,
				linkGithub:TechGithub,
				name:TechName,
				frontBack:false,
			}
		]

export default allData