//超過此數量折疊，0為永不折疊
var maxHide=0;
//活動名，開始時間，結束時間
//公主雙倍為固定格式
var eventList=[
['活動·夏日二選一','6/23/2018 5:00','7/2/2018 23:59'],
['儲值·【兔與白茶戀詩】','6/23/2018 5:00','7/2/2018 23:59'],
['活動·閃耀火鳥','6/25/2018 5:00','7/1/2018 23:59'],
['活動·古堡幽夜','7/7/2018 5:00','7/13/2018 23:59'],
['儲值·【春天代言人】','7/7/2018 5:00','7/13/2018 23:59'],
['活動·荒漠之魅','7/18/2018 5:00','7/27/2018 23:59'],
['儲值·極道之義','7/18/2018 5:00','7/27/2018 23:59'],
['大喵製衣·荒漠之魅+浮金之影','7/18/2018 5:00','7/27/2018 23:59'],
['小屋·貓王國的茶會(復開)','7/25/2018 5:00','7/31/2018 23:59'],
['公主2/10/11/13/14/17雙倍','7/27/2018 5:00','7/29/2018 23:59'],
['活動·黎明前線','8/1/2018 5:00','8/11/2018 23:59'],
['螢光之靈·索菲亞【刀鋒圓舞】(復開)','8/1/2018 5:00','8/3/2018 23:59'],
['螢光之靈·海櫻【時光花火】(復開)','8/4/2018 5:00','8/6/2018 23:59'],
['公主1/11/12/14/16/17雙倍','8/3/2018 5:00','8/5/2018 23:59'],
['活動·八八節登入送鑽石*150','8/8/2018 00:00','8/8/2018 23:59'],
['活動·回憶明信片','8/9/2018 5:00','8/26/2018 23:59'],
['活動·明信片翻倍','8/9/2018 5:00','8/26/2018 23:59'],
['活動·祝福明信片分享','8/9/2018 5:00','8/26/2018 23:59'],
['活動·週年任務','8/9/2018 5:00','8/26/2018 23:59'],
['活動·限時登入送【時光之歌】與鑽石*150','8/17/2018 00:00','8/17/2018 23:59'],
['活動·宴饗風流(投票階段)','8/9/2018 5:00','8/14/2018 4:59'],
['活動·宴饗風流(人模兌換)','8/14/2018 5:00','8/26/2018 23:59'],
['小屋·流音聽雨榭','8/9/2018 5:00','8/26/2018 23:59'],
['活動·銀梭織羽','8/14/2018 5:00','8/20/2018 23:59'],
['螢光之靈·長夜伊始(復開)','8/14/2018 5:00','8/16/2018 23:59'],
['活動·風林火山','8/9/2018 5:00','8/26/2018 23:59'],
['活動·戰臨雲端','8/9/2018 5:00','8/26/2018 23:59'],
['儲值·【熱量四零四】、【花塢春曉】、【花羽扉光】、【獵殺夜宴】、【星夜傳說】','8/9/2018 5:00','8/26/2018 23:59'],
['大喵製衣·紅莓絹蝶','8/9/2018 5:00','8/14/2018 23:59'],
['大喵製衣·魔力星','8/15/2018 5:00','8/21/2018 23:59'],
['大喵製衣·榮耀同行','8/21/2018 5:00','8/27/2018 23:59'],
['公主級不限次數重置','8/9/2018 5:00','8/26/2018 23:59'],
['星光幣雙倍','8/13/2018 5:00','8/17/2018 23:59'],
['星光幣雙倍','8/22/2018 5:00','8/26/2018 23:59'],
['公主1/4/7/10/13/16/19雙倍','8/9/2018 5:00','8/12/2018 23:59'],
['公主2/5/8/11/14/17/19雙倍','8/13/2018 5:00','8/17/2018 23:59'],
['公主3/6/9/12/15/18/19雙倍','8/18/2018 5:00','8/21/2018 23:59'],
['公主1/4/7/10/13/16/19雙倍','8/22/2018 5:00','8/26/2018 23:59'],
['活動·好友尋回','8/9/2018 5:00','8/26/2018 23:59'],
['活動·夢蝶夜曲','8/21/2018 5:00','8/27/2018 23:59'],
['遊戲維護','8/30/2018 9:30','8/30/2018 14:00'],
];