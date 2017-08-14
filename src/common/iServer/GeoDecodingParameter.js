import SuperMap from '../SuperMap';
/**
 * @class SuperMap.GeoDecodingParameter
 * @classdesc 地理反向匹配参数类。
 * @param options - {Object} 参数。
 */
export default  class GeoDecodingParameter {
    /**
     * @member SuperMap.GeoDecodingParameter.prototype.x - {number}
     * @description 查询位置的横坐标。
     */
    x = null;

    /**
     * @member SuperMap.GeoDecodingParameter.prototype.y - {number}
     * @description 查询位置的纵坐标。
     */
    y = null;
    /**
     * @member SuperMap.GeoDecodingParameter.prototype.fromIndex - {number}
     * @description  设置返回对象的起始索引值。
     */
    fromIndex = null;

    /**
     * @member SuperMap.GeoDecodingParameter.prototype.toIndex - {number}
     * @description 设置返回对象的结束索引值。
     */
    toIndex = null;

    /**
     * @member SuperMap.GeoDecodingParameter.prototype.filters -{Array}
     * @description 过滤字段，限定查询区域。
     */
    filters = null;

    /**
     * @member SuperMap.GeoDecodingParameter.prototype.prjCoordSys -{String}
     * @description 查询结果的坐标系。
     */
    prjCoordSys = null;

    /**
     *  @member SuperMap.GeoDecodingParameter.prototype.maxReturn -{number}
     *  @description 最大返回结果数。
     */
    maxReturn = null;

    /**
     * @member SuperMap.GeoDecodingParameter.prototype.maxReturn -{number}
     * @description 查询半径。
     */
    geoDecodingRadius = null;


    constructor(options) {
        if (!options) {
            return;
        }
        if (options.filters) {
            let strs = [];
            let fields = options.filters.split(',');
            fields.map(function (field) {
                strs.push("\"" + field + "\"");
            });
            options.filters = strs;
        }
        SuperMap.Util.extend(this, options);
    }

    /**
     * @method SuperMap.GeoDecodingParameter.prototype.destroy
     * @description 释放资源，将引用资源的属性置空。
     */
    destroy() {
        this.x = null;
        this.y = null;
        this.fromIndex = null;
        this.toIndex = null;
        this.filters = null;
        this.prjCoordSys = null;
        this.maxReturn = null;
        this.geoDecodingRadius = null;
    }

}

SuperMap.GeoDecodingParameter = GeoDecodingParameter;