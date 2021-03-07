let ajaxnum = 0;
export const request = (params) => {
    ajaxnum++
    wx.showLoading({
        title: "正在加载中",
        mask: true,
    });

    return new Promise((res, rej) => {
        wx.request({
            ...params,
            // header: header,
            success: (result) => {
                res(result);
                console.log(result)

            },
            fail: (err) => {
                rej(err), console.log(err);
                console.log(result.data)
            },
            complete: () => {
                ajaxnum--;
                if (ajaxnum === 0) {
                    wx.hideLoading();
                }


            },

        });
    });
}