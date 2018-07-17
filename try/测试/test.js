// 存储服务
    var { Query, User } = AV;
    AV.init('appId', 'appKey');
// 实时消息服务
    var { Realtime, TextMessage } = AV;

    var APP_ID = 'm1He5qmCDVBfmHhK5eRiqeHo-gzGzoHsz';
    var APP_KEY = 'wUV7SLMsgW2r0cOc5VWXv0fa';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });


    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
        words: 'Hello World!'
    }).then(function(object) {
        alert('LeanCloud Rocks!');
    });