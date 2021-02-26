// pages/music/music.js
import { getMusic } from '../../request/index.js'
const innerAudioContext = wx.createInnerAudioContext();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        music: {},
        isplay: false
    },

    requestparmas: {

    },
    // 获取音乐
    async getMusics() {
        let music = await getMusic();
        music = music.data
        music = music.substr(5, music.length)
        music = JSON.parse(music)
        console.log(music.meta)
        this.setData({
            music
        });
        if (this.data.isplay) {
            this.stopMusic()
        }
    },
    // 播放音乐
    playmusic() {
        innerAudioContext.autoplay = true
        innerAudioContext.loop = true
        innerAudioContext.src = this.data.music.meta.music.musicUrl,
            innerAudioContext.onPlay(() => {
                console.log('开始播放')
                let a = innerAudioContext.duration
                console.log(a)
            })
        innerAudioContext.onError((res) => {
            console.log(res)
            console.log(res.errCode)
        })
    },
    // 暂停音乐
    pause() {
        innerAudioContext.pause()
        innerAudioContext.onPause(() => {
            console.log('暂停播放');
        })

    },
    //停止音乐 
    stopMusic() {
        let isplay = this.data.isplay;
        if (isplay) {
            innerAudioContext.stop();
            innerAudioContext.onStop(() => {
                console.log('停止播放');
            })
            this.setData({
                isplay: !isplay
            });
        }
        return console.log("没有音乐在播放")
    },
    // 播放或停止音乐
    isPlayOrPause() {
        let isplay = this.data.isplay
        console.log(isplay)
        if (isplay) {
            this.setData({
                isplay: !isplay
            });
            this.pause()
        } else {
            this.setData({
                isplay: !isplay
            });
            this.playmusic()
        }
    },
    shuiji() {
        this.getMusics()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        this.getMusics()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})