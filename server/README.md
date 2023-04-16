# ArtMeetBackEnd

ArtMeet

MyCreation
What is ArtMeet?
A platform for artists to teach people about their skills and techniques and thoughts through online platform.
User can purchase a session of 30? 15? (Artists can decide). 

What is the main purpose? 
People can learn about creating art from real artists.  And Registered Artists can make some money aside. And they can earn some money to pay bills while engaging in teaching art at the same time. So this is nice motivation for artists already. Through teaching , they re-learn. So that is also good point. 
For users, it is absolutely great chance to learn art from real artists. In addition, they can browse artists and ask one that they like. 
So for example, if you are into a specific technique in oil painting, then you can find one that you think they know. You know, everyone’s taste and touch is different. 
Also, For artist, it is great place to showcase their artWork. 

What would be the platform ? 
For now, we can make web platform first. as it’s already Node.js so a little. Easier to make UI with React or whatever. 
After that, I can maybe learn ReactNative? Or Native Android to make mobile apps. 
It may be too much to think about ReactNative, but it might be pretty similar too. 
QUESTION : Is ReactNative very different from React.js in terms of implementation ? 

Native development produces apps with high performance, but it can be costly to build. If you have a limited budget to work on, cross-platform development is the ideal choice. You'll save around 30%-40% as only a single codebase is created for an app that works on both Android and iOS.

Development Phases
1, make it work (don’t worry about its messiness or UI)
2, have a pretty good looking UI
3, refactor, apply some design patterns
4 refactor, refactor and refactor -> THIS PROCESS IS IMPORTANT TO BE A GOOD DEVELOPER. 

Things that need to be addressed
1, List all possible query DB operation(think what schema needs to be related to efficiently do that operation? )
2, design initial DB schema
3, Design what Pages are there
4, Think about UX flow.
5, Design UI.
6, Think about the icon. 
7. Don’t think about the mobile platform, start just from React for Web platform. No need to think about React Native for now. 


For example, first. User need to sign up, login, logout. -> this could be,  table for User(id, name, email, password, isArtist, blablabla)
Once they log in, they want to see all the followers, posts（アーティストたちの、クラスのポスト。）とりあえず一般人は投稿できなくていい。メインパーパスは違うからね。おk。so, I need table for capturing the followers. Also, Post(id, arTistId, title, desc, images, durations, cost)
Category(categoryId, categoryName, ) Util にhelper methodsをたくさん入れて行って、オーガナイズする。
SubCategory(subCategoryId, parentCategoryId). Once, User click on a post, then user would like to register for the class, send message to the artist, report, 
So, I would like to have table like takeClassFrom(studentId, artistId, time, duration, ). Also, user would like to see the reviews. 
StudentreviewedArtist(studentId, artistId, postId(classId), NumOfStar, description, isReported). 
Also, an artist would like to be able to review students after conducting classes. But I think we can use the schema just above. 
Also user would like to bookmark interested classes
interestedInPost(userId, postID,time)
InterestedInArtist(userId, ArtistId)

userLogin -> HomeTab(posts, followers),ChatTab, SettingPage, 

In a nutshell, this app wants to allow Users to take classes from Artist. And allow Artist to post their classes. And allow them to chat. That is pretty much it.
ビジュアルでとりあえずUXを書いていって、そんでスクリーンごととか、featureごとに小さく細分化して行って、そんでやることを明確にしてからやろう！
こういう上手くなりたいことを、なんとか楽しめるように工夫してやっていくっていう能力は、worth practicing. 好きがものの得意なり。それに少しでも寄せていこう。

とりあえず今ここまで書いたIdeaをとりあえず現実にすれば、必ず何かが変わってるはず。大丈夫。信じて。QA獲得して、朝ズーーっとこれをやる。楽しいからね。わんちゃん、まじでありなのが、スタンドアップデスクを買っちゃうこと。



Skillshare is the content, but artMEtt is more like bringing personalized questions -> so more active instead of passive learning. 


What does it mean by “prototype your software”?
What is the functional and Non-Functional requirement? 
 Watch 
Starting a Software Project [Complete Guide to ...
￼
SoftKraft
https://www.softkraft.co › starting-software-project
