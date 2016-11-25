"use strict";
var Post = (function () {
    function Post(userId, id, title, body, nicknameUser) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
        this.nicknameUser = nicknameUser;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map