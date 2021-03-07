// pages/BMI/BMI.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: ['中国标准', '国际标准'],
        objectArray: [{
                id: 0,
                name: '中国标准'
            },
            {
                id: 1,
                name: '国际标准'
            },
        ],
        index: 0,
        height: 0,
        weight: 0,
        bim_number: "--",
        state: "--"
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    // 输入身高
    input_height(e) {
        // console.log(e)
        let height = e.detail.value
        this.setData({
            height
        })
    },
    // 输入体重
    input_weight(e) {
        let weight = e.detail.value
        this.setData({
            weight
        })
    },
    // 开始计算
    start() {
        let height = this.data.height
        let weight = this.data.weight
        if (height == "" || weight == "") {
            wx.showToast({
                title: '请输入身高及体重',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false,
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });

        } else {
            height = height * 0.01
            let bim_number = weight / (height * height)
            bim_number = bim_number.toFixed(1);
            if (bim_number < 18.5) {
                this.setData({
                    state: "偏瘦"
                })
            }
            if (18.5 <= bim_number && bim_number < 24) {
                this.setData({
                    state: "正常"
                })
            }
            if (24 <= bim_number && bim_number < 28) {
                this.setData({
                    state: "过重"
                })
            }
            if (28 <= bim_number && bim_number < 35) {
                this.setData({
                    state: "肥胖"
                })
            }
            if (35 <= bim_number) {
                this.setData({
                    state: "过度肥胖"
                })
            }
            this.setData({
                bim_number
            })
        }

    },
    reset() {
        this.setData({
            bim_number: "--",
            state: "--"
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