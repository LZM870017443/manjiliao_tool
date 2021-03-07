// pages/Historical_details/Historical details.js
import { gethisDeatils } from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // hisDeatil: [],
        lz_load: 'https://img.imgdb.cn/item/603642ae5f4313ce252a6ec5.gif',
        title: "",
        historical_event: [],
        content: ""
    },
    // requestparmas: {
    //     key: "7231e35cf4d5c6f7bdf61ae6918b9495",
    //     e_id: ""
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        let title = options.title;
        this.setData({
            title
        })
        let historical_event = wx.getStorageSync("historical_event", historical_event);
        this.setData({
                historical_event
            })
            // console.log(historical_event)
    },
    async gethisDeatil() {
        this.data.historical_event.forEach(v => {
            if (v.title === this.data.title) {
                console.log(v.content)
                this.setData({
                    content: v.content
                })
            }


        });


    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        // wx.getStorageSync(historical_event);


    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        this.gethisDeatil();
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