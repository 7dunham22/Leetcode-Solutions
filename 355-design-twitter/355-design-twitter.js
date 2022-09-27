
var Twitter = function() {
    this.users = {};
    this.posts = [];
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let author;
    if (!(userId in this.users)) {
        author = {id: userId, posts: new Set(), following: new Set()};
    } else {
        author = this.users[userId];
    }
    author.posts.add(tweetId);
    this.posts.push({id: tweetId, author: userId});
    this.users[userId] = author;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const feed = [];
    const author = this.users[userId];
    let i = this.posts.length-1;
    while (i >= 0 && feed.length < 10) {
        const post = this.posts[i];
        if (author.posts.has(post.id) || author.following.has(post.author)) {
            feed.push(post.id);
        }
        i--;
    }
    return feed;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!(followerId in this.users)) {
        this.users[followerId] = {id: followerId, posts: new Set(), following: new Set()};
    }
    if (!(followeeId in this.users)) {
        this.users[followeeId] = {id: followerId, posts: new Set(), following: new Set()};
    }
    const user = this.users[followerId];
    user.following.add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    const user = this.users[followerId];
    user.following.delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */