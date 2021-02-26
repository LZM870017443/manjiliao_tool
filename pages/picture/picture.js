import { getImages } from '../../request/index.js'
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
        indexz: 1
    },
    requestparmas: {
        msg: ""
    },
    // 获取图片
    async getImage() {
        let res = await getImages(this.requestparmas);
        // console.log(res)
        res = res.data
            // console.log(res)
        let imageurl = res.substring(5, res.length - 1);
        this.setData({
                imageurl
            })
            // console.log(imageurl)
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
        const titles = ['美女', '动漫', '风景', '游戏', '文字', '视觉', '情感', '设计', '明星']
        const tabs = titles.map(item => ({ title: item }))
        this.setData({ tabs })
    },
    onShow() {
        // console.log("hahah")
        let index = this.data.activeTab + 1
        this.requestparmas.msg = index
        this.getImage()
    },
    // 点击TAB
    onTabClick(e) {
        let index = e.detail.index;
        this.requestparmas.msg = index + 1
        let indexz = index + 1
            // console.log(this.requestparmas.msg)
        this.setData({
                activeTab: index,
                indexz
            })
            // console.log(index)
        this.getImage()
    },
    // 滑动
    onChange(e) {

        const index = e.detail.index

        this.requestparmas.msg = index + 1
        let indexz = index + 1
            // console.log(this.requestparmas.msg)
        this.setData({
                activeTab: index,
                indexz
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
                                    that.saveImgInner(url);
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
                            that.saveImgInner(url);
                        }

                    },
                    fail: (res) => {
                        // console.log(res);
                    },
                    complete: () => {}
                });

            },
            fail(res) {
                // console.log(res.errMsg)
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
                        // console.log(result);
                        wx.showToast({
                            title: '已保存到相册',
                        })
                    },
                    fail: () => {},
                    complete: () => {}
                });

            },
            fail: () => {},
            complete: () => {}
        });

    }
})