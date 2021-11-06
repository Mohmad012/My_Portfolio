import {
		profile_Template,
		profile_react,
		TempDemoApp,
		ChatNow,
		amazon,
		tiktok,
		tinder,
		shopStore,
		TV,
		Todo,
		Bookmark,
		Car,
		Composition,
		Special,
		Elite,
		Prototypes,
		Home,
		Tech,
		MemoryImg
		
	} from '../../utils/allImgs'

let 	ChatNowLive , amazonLive , profile_templateLive , profile_reactLive ,Template_Deme_AppLive ,
		tiktokLive , tinderLive , shopStoreLive , TVLive , TodoLive , BookmarkLive , CarLive , CompositionLive,
		SpecialLive , EliteLive , PrototypesLive , HomeLive , TechLive , MemoryLive ,

		ChatNowFront , tiktokFront , tinderFront , ChatNowBack , tiktokBack , tinderBack , profile_templateGithub,
		profile_reactGithub , Template_Deme_AppGithub , amazonGithub , shopStoreGithub , TVGithub , TodoGithub ,
		BookmarkGithub , CarGithub , CompositionGithub , SpecialGithub , EliteGithub , PrototypesGithub,
		HomeGithub , TechGithub, MemoryGithub ,

		profile_templateName , profile_reactName , Template_Deme_AppName , ChatNowName , amazonName , tiktokName,
		tinderName , shopStoreName , TVName , TodoName , BookmarkName , CarName , CompositionName , SpecialName,
		EliteName , PrototypesName , HomeName , TechName , MemoryName;


// Vars For Live
ChatNowLive = "https://mohmad012.github.io/ChatNow/"
amazonLive = "https://amazon-app-self.vercel.app/"
profile_templateLive = "https://mohmad012.github.io/profile_template/"
profile_reactLive = "https://mohmad012.github.io/template_react/"
Template_Deme_AppLive = "https://mohmad012.github.io/Template_Deme_App/"
tiktokLive = "https://tiktok-f8fc2.web.app/"
tinderLive = "https://mohmad012.github.io/Tinder_frontend/"
shopStoreLive = "https://store-shop-phi.vercel.app/"
TVLive = "https://mohmad012.github.io/TV_Search_Flix/"
TodoLive = "https://mohmad012.github.io/TodoList/"
BookmarkLive = "./Projects/Bookmark/index.html"
CarLive = "https://mohmad012.github.io/car-site/"
CompositionLive = "https://mohmad012.github.io/Sass_Pugjs_Project/"
SpecialLive = "https://mohmad012.github.io/web_pure_Javascript/"
EliteLive = "https://mohmad012.github.io/Bootstrap4/"
PrototypesLive = "https://mohmad012.github.io/bootstrap3-2/"
HomeLive = "https://mohmad012.github.io/Real-Estate-Site/"
TechLive = "https://mohmad012.github.io/bootstrap3-1/"
MemoryLive = "https://mohmad012.github.io/Memory_Game/"

// Vars For Github
ChatNowFront = "https://github.com/Mohmad012/ChatNow"
tiktokFront = "https://github.com/Mohmad012/TikTok_frontend"
tinderFront = "https://github.com/Mohmad012/Tinder_frontend"

ChatNowBack = "https://github.com/Mohmad012/ChatNow_Backend"
tiktokBack = "https://github.com/Mohmad012/TikTok_backend"
tinderBack = "https://github.com/Mohmad012/Tinder_backend"

profile_templateGithub = "https://github.com/Mohmad012/profile_template"
profile_reactGithub = "https://github.com/Mohmad012/template_react"
Template_Deme_AppGithub = "https://github.com/Mohmad012/Template_Deme_App"
amazonGithub = "https://github.com/Mohmad012/Amazon_App"
shopStoreGithub = "https://github.com/Mohmad012/Store_Shop"
TVGithub = "https://github.com/Mohmad012/TV_Search_Flix"
TodoGithub = "https://github.com/Mohmad012/TodoList"
BookmarkGithub = "https://github.com/Mohmad012/Portfolio/tree/main/Projects/Bookmark"
CarGithub = "https://github.com/Mohmad012/car-site"
CompositionGithub = "https://github.com/Mohmad012/Sass_Pugjs_Project"
SpecialGithub = "https://github.com/Mohmad012/web_pure_Javascript"
EliteGithub = "https://github.com/Mohmad012/Bootstrap4"
PrototypesGithub = "https://github.com/Mohmad012/bootstrap3-2"
HomeGithub = "https://github.com/Mohmad012/Real-Estate-Site"
TechGithub = "https://github.com/Mohmad012/bootstrap3-1"
MemoryGithub = "https://github.com/Mohmad012/Memory_Game"

// Vars For Name
profile_templateName = "Profile Template"
profile_reactName = "Profile React"
Template_Deme_AppName = "Template Deme App"
ChatNowName = "Chat App"
amazonName = "Amazon App"
tiktokName = "TikTok App"
tinderName = "Tinder App"
shopStoreName = "Shop Store"
TVName = "TV Search Flims"
TodoName = "Todo List"
BookmarkName = "Bookmark Site"
CarName = "Car Site"
CompositionName = "Composition Site"
SpecialName = "Special Design"
EliteName = "Elite Corp Site"
PrototypesName = "Prototypes Site"
HomeName = "Home Design Site"
TechName = "Tech Site"
MemoryName = "Memory Game"


const allData = [
			{
				img:amazon,
				filterMode:'filter-web',
				linkLive:amazonLive,
				linkGithub:amazonGithub,
				name:amazonName,
				frontBack:false,
			},
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
				img:MemoryImg,
				filterMode:'filter-card',
				linkLive:MemoryLive,
				linkGithub:MemoryGithub,
				name:MemoryName,
				frontBack:false,
			},
			{
				img:TempDemoApp,
				filterMode:'filter-web',
				linkLive:Template_Deme_AppLive,
				linkGithub:Template_Deme_AppGithub,
				name:Template_Deme_AppName,
				frontBack:false,
			},
			{
				img:profile_Template,
				filterMode:'filter-web',
				linkLive:profile_templateLive,
				linkGithub:profile_templateGithub,
				name:profile_templateName,
				frontBack:false,
			},
			{
				img:profile_react,
				filterMode:'filter-web',
				linkLive:profile_reactLive,
				linkGithub:profile_reactGithub,
				name:profile_reactName,
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