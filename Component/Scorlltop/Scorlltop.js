// Component/Scorlltop/Scorlltop.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 返回顶部
        scorlltop() {
            // wx.pageScrollTo({
            //     scrollTop: 0,
            //     duration: 300
            // });
            let scrollTop = 0
            this.triggerEvent("tabItemChang", { scrollTop })
        },
    }
})