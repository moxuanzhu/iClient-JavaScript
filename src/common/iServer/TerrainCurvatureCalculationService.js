import SuperMap from '../SuperMap';
import SpatialAnalystBase from './SpatialAnalystBase';
import TerrainCurvatureCalculationParameters from './TerrainCurvatureCalculationParameters';
/**
 * @class SuperMap.TerrainCurvatureCalculationService
 * @classdesc 地形曲率计算服务类。
 * @extends SuperMap.SpatialAnalystBase
 * @param options - {Object} 可选参数。如</br>
 *        eventListeners - {Object} 需要被注册的监听器对象。
 * @param url - {String} 服务的访问地址。如 http://localhost:8090/iserver/services/spatialanalyst-changchun/restjsr/spatialanalyst 。
 * @example 例如：
 * (start code)
 * var myTerrainCurvatureCalculationService = new SuperMap.TerrainCurvatureCalculationService(url);
 * myTerrainCurvatureCalculationService.on({
     *     "processCompleted": processCompleted,
     *     "processFailed": processFailed
     *     }
 * );
 * (end)
 *
 */
export default  class TerrainCurvatureCalculationService extends SpatialAnalystBase {

    constructor(url, options) {
        super(url, options);
    }

    /**
     *@inheritDoc
     */
    destroy() {
        super.destroy();
    }

    /**
     * @method SuperMap.TerrainCurvatureCalculationService.prototype.processAsync
     * @description 负责将客户端的查询参数传递到服务端。
     * @param parameter - {SuperMap.TerrainCurvatureCalculationParameters}
     */
    processAsync(parameter) {
        var me = this;

        var end = me.url.substr(me.url.length - 1, 1);
        if (end === '/') {

        } else {
            me.url += "/";
        }

        var parameterObject = {};

        if (parameter instanceof TerrainCurvatureCalculationParameters) {
            me.url += 'datasets/' + parameter.dataset + '/terraincalculation/curvature';
        }

        TerrainCurvatureCalculationParameters.toObject(parameter, parameterObject);
        var jsonParameters = SuperMap.Util.toJSON(parameterObject);

        if (me.isInTheSameDomain) {
            me.url += '.json?returnContent=true';
        } else {
            me.url += '.jsonp?returnContent=true';
        }

        me.request({
            method: "POST",
            data: jsonParameters,
            scope: me,
            success: me.serviceProcessCompleted,
            failure: me.serviceProcessFailed
        });
    }

    CLASS_NAME = "SuperMap.TerrainCurvatureCalculationService"
}

SuperMap.TerrainCurvatureCalculationService = TerrainCurvatureCalculationService;
