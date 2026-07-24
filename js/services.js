(function(root){
  'use strict';
  class MockRewardedAdService{async show(placement){await new Promise(r=>setTimeout(r,450));return {completed:true,placement,receipt:`mock-${Date.now()}`};}}
  class MockIapService{async purchase(productId){return {success:true,productId,receipt:`mock-iap-${Date.now()}`};}async restore(){return {success:true,restored:[]};}}
  class LocalLeaderboardService{submit(run){const key='lastLesson.localLeaderboard';const rows=JSON.parse(localStorage.getItem(key)||'[]');rows.push(run);rows.sort((a,b)=>b.score-a.score);localStorage.setItem(key,JSON.stringify(rows.slice(0,100)));return Promise.resolve(rows.slice(0,20));}get(){return Promise.resolve(JSON.parse(localStorage.getItem('lastLesson.localLeaderboard')||'[]').slice(0,20));}}
  class LocalFriendsService{constructor(){this.items=[];}request(code){this.items.push({code,status:'pending'});return Promise.resolve(true);}list(){return Promise.resolve(this.items);}}
  class LocalAnalyticsService{event(name,data={}){console.debug('[Analytics Mock]',name,data);}}
  class ServerTimeService{now(){return Promise.resolve(Date.now());}}
  root.LLServices={ads:new MockRewardedAdService(),iap:new MockIapService(),leaderboards:new LocalLeaderboardService(),friends:new LocalFriendsService(),analytics:new LocalAnalyticsService(),time:new ServerTimeService()};
})(window);
