define(['fui/flashuploader/1.0'], function (FlashUploader) {

    var flash = new FlashUploader({
        container: "#test",
        height: 30,
        flashvars: {
            buttonSkin: 'http://img.china.alibaba.com/cms/upload/2011/040/820/28040_548721671.gif'
        }

    });
    flash.on("swfReady", function () {
        console.log(arguments);
    })
});