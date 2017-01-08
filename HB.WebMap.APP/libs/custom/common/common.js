/**
 * Created by LBM on 2017/1/8.
 */
c = {};
c.fn = {
    addMask: function () {
        Ext.get('loading-msg').dom.innerHTML = '正在初始化系统,请稍候...';
        Ext.defer(c.fn.removeMask, 1000);
    },
    removeMask: function () {
        var hideMask = function () {
            Ext.get('loading').remove();
        }
        Ext.defer(hideMask, 250);
    }
};
c.fn.addMask();
