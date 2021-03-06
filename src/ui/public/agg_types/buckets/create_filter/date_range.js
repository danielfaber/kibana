import dateRange from 'ui/utils/date_range';
import buildRangeFilter from 'ui/filter_manager/lib/range';

export default function createDateRangeFilterProvider(config) {

  return function (agg, key) {
    var range = dateRange.parse(key, config.get('dateFormat'));

    var filter = {};
    if (range.from) filter.gte = +range.from;
    if (range.to) filter.lt = +range.to;
    if (range.to && range.from) filter.format = 'epoch_millis';

    return buildRangeFilter(agg.params.field, filter, agg.vis.indexPattern);
  };

};
