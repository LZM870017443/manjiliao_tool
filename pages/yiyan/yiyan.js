// pages/yiyan/yiyan.js
import { getyan, getdujitang } from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        yan: "",
        dujitangs: "",
        evt: ""
    },
    // 获取随机一言
    async getyans() {
        let yan = await getyan();
        // console.log(today)
        yan = yan.data
        console.log(yan)
        this.setData({ yan });
    },
    async getdujitangs() {
        let dujitangs = await getdujitang();
        dujitangs = dujitangs.data.data
        console.log(dujitangs)
        this.setData({
            dujitangs
        })
    },
    handleTap(e) {
        console.log('@@ tap', e)
        this.setData({
            evt: e
        })
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
        this.getyans();
        this.getdujitangs()
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