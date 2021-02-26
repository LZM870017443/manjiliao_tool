import { request } from "../request/ajax.js";
// let BS_ADS = "https://api-hmugo-web.itheima.net/"
// let BS_ADSs = "https://www.fastmock.site/mock/c1f9d6ee0f38309571ad35d572a2caa2/weishopping"
// 获取笑话
export const getjoke = (key) => request({ url: "http://v.juhe.cn/joke/randJoke.php", data: { key } }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取随机一言
export const getyan = () => request({ url: "http://www.moxiya.top/sjyy/api.php" }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取毒鸡汤
export const getdujitang = () => request({ url: "http://api.lkblog.net/ws/api.php" }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取历史上的今天
export const getdays = (requestparmas) => request({ url: 'http://v.juhe.cn/todayOnhistory/queryEvent.php', data: requestparmas }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取历史详情
export const gethisDeatils = (requestparmas) => request({ url: 'http://v.juhe.cn/todayOnhistory/queryDetail.php', data: requestparmas }).then((result) => {
    // console.log(requestparmas)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取图片
export const getImages = (requestparmas) => request({ url: "http://crys.top/api/wallpa.php", data: requestparmas }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取音乐
export const getMusic = () => request({ url: "http://api.wpbom.com/api/neran.php" }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});

// 获取垃圾分类
export const getRefuse_classification = (requestparmas) => request({ url: "https://api.66mz8.com/api/garbage.php", data: requestparmas }).then((result) => {
    // console.log(goods_id)
    return result
}).catch((err) => {
    console.log(err)
});

// 获取今天农历信息
export const getLunarCalendar = () => request({ url: "http://crys.top/api/nlrq.php" }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取藏头诗
export const getAcrostic = (requestparmas) => request({ url: "http://crys.top/api/betan.php", data: requestparmas }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});