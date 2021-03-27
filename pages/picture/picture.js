import { getImages, getImagebiyings } from '../../request/index.js'
Page({
    onShareAppMessage() {
        return {
            title: 'tabs',
            path: 'page/weui/example/tabs/tabs'
        }
    },
    data: {
        tabs: [],
        activeTab: 0,
        imageurl: "",
    },
    requestparmas: {
        method: "mobile",
        lx: "meizi",
        format: "json"
    },
    // 获取 图片
    async getImage() {
        let res = await getImages(this.requestparmas);
        console.log(res)
        res = res.data.imgurl
        let imageurl = res
        this.setData({
                imageurl
            })
            // console.log(imageurl)
    },
    // 获取
    async getImagebiying() {
        let res = await getImagebiyings();
        console.log(res)
        let imageurl = res.data.data.url
        imageurl = imageurl.substring(0, imageurl.length - 10)
            // let imageurl = res
        this.setData({
            imageurl
        })
        console.log(imageurl)
    },
    // 点击刷新图片
    changimageurl(e) {
        // console.log(e)
        let imageurl = e.detail.imageurl
        this.setData({
            imageurl
        })
    },
    onLoad() {
        const titles = ['风景壁纸', '动漫壁纸', '精品壁纸', "随机壁纸"]
        const tabs = titles.map(item => ({ title: item }))
        this.setData({ tabs })
    },
    onShow() {
        // console.log("hahah")
        let index = this.data.activeTab
        if (index === 0) {
            this.requestparmas.lx = "fengjing"
                // this.getImagebiying();
            this.getImage()
        }
        if (index === 1) {
            this.requestparmas.lx = "dongman";
            this.getImage()
        }
        if (index === 2) {
            this.requestparmas.lx = "meizi"
            this.getImage()
        }
        if (index === 3) {
            this.requestparmas.lx = "suiji"
            this.getImage()
        }
        console.log(index)
            // this.requestparmas.msg = index

    },
    // 点击TAB
    onTabClick(e) {
        let index = e.detail.index;
        console.log(index)
        if (index === 0) {
            this.requestparmas.lx = "fengjing"
        }
        if (index === 1) {
            this.requestparmas.lx = "dongman"
        }
        if (index === 2) {
            this.requestparmas.lx = "meizi"
        }
        if (index === 3) {
            this.requestparmas.lx = "suiji"
        }
        this.setData({
                activeTab: index,
                // indexz
            })
            // console.log(index)
        this.getImage()
    },
    // 滑动
    onChange(e) {

        const index = e.detail.index
        if (index === 0) {
            this.requestparmas.lx = "fengjing"
        }
        if (index === 1) {
            this.requestparmas.lx = "dongman"
        }
        if (index === 2) {
            this.requestparmas.lx = "meizi"
        }
        if (index === 3) {
            this.requestparmas.lx = "suiji"
        }
        console.log(index)

        this.setData({
                activeTab: index,
                // indexz
            })
            // console.log(index)
        this.getImage()
            // }
    },
    // 保存图片之获取权限
    saveImage(e) {
        let that = this
        wx.showActionSheet({
            itemList: ['保存到相册'],
            success(res) {
                // console.log(res.tapIndex)
                const url = e.currentTarget.dataset.url;
                // console.log(url)
                wx.getSetting({
                    success: (result) => {
                        if (!result.authSetting['scope.writePhotosAlbum']) {
                            wx.authorize({
                                scope: 'scope.writePhotosAlbum',
                                success: () => {
                                    // 同意授权
                                    console.log(url + "正在下载")
                                    that.saveImgInner(url);
                                    console.log(url)
                                },
                                fail: (result) => {
                                    // console.log(result);
                                    wx.showModal({
                                        title: '保存失败',
                                        content: '请开启访问手机相册权限',
                                        success(result) {
                                            wx.openSetting()
                                        }
                                    })
                                }
                            })
                        } else {
                            // 已经授权了
                            console.log(url + "正在下载")
                            that.saveImgInner(url);
                        }

                    },
                    fail: (res) => {
                        console.log(res);
                    },
                    complete: () => {}
                });

            },
            fail(res) {
                console.log(res.errMsg)
            }
        })
    },
    // 保存图片之保存图片
    saveImgInner(url) {
        wx.getImageInfo({
            src: url,
            success: (result) => {
                let path = result.path;
                wx.saveImageToPhotosAlbum({
                    filePath: path,
                    success: (result) => {
                        console.log(result + "保存成功");
                        wx.showToast({
                            title: '已保存到相册',
                        })
                    },
                    fail: (res) => { console.log(res.errMsg + "保存失败"); },
                    complete: () => {}
                });

            },
            fail: (res) => { console.log(res.errMsg + "获取信息失败"); },
            complete: () => {}
        });

    }
})