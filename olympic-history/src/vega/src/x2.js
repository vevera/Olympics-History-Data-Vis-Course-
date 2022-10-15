import {BaseObject, assign, copy, get, init, merge, set} from './__util__';

class X2 extends BaseObject {

  constructor(...args) {
    super();
    init(this);
    assign(this, ...args);
  }

  aggregate(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "aggregate", value);
      return obj;
    } else {
      return get(this, "aggregate");
    }
  }

  bandPosition(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "bandPosition", value);
      return obj;
    } else {
      return get(this, "bandPosition");
    }
  }

  bin(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "bin", value);
      return obj;
    } else {
      return get(this, "bin");
    }
  }

  field(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeUnit(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "timeUnit", value);
      return obj;
    } else {
      return get(this, "timeUnit");
    }
  }

  title(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "title", value);
      return obj;
    } else {
      return get(this, "title");
    }
  }

  datum(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "datum", value);
      return obj;
    } else {
      return get(this, "datum");
    }
  }

  type(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "type", value);
      return obj;
    } else {
      return get(this, "type");
    }
  }

  value(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "value", value);
      return obj;
    } else {
      return get(this, "value");
    }
  }

  fieldN(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "nominal");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  fieldO(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "ordinal");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  fieldQ(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  fieldT(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  if(...values) {
    if (values.length) {
      values[0] = {test: values[0]}
    }
    if (arguments.length) {
      const val = get(this, "condition") || [];
      const obj = copy(this);
      values = [].concat(val, merge(0, values));
      set(obj, "condition", values.length > 1 ? values : values[0]);
      return obj;
    } else {
      return get(this, "condition");
    }
  }

  count() {
    const obj = copy(this);
    set(obj, "type", "quantitative");
    set(obj, "aggregate", "count");
    return obj;
  }

  valid(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "valid");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  missing(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "missing");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  distinct(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "distinct");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  sum(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "sum");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  mean(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "mean");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  product(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "product");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  average(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "average");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  variance(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "variance");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  variancep(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "variancep");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  stdev(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "stdev");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  stdevp(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "stdevp");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  stderr(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "stderr");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  median(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "median");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  q1(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "q1");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  q3(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "q3");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  ci0(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "ci0");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  ci1(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "ci1");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  min(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "min");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  max(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "max");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  argmin(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "argmin");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  argmax(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "quantitative");
          set(obj, "aggregate", "argmax");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  year(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "year");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  quarter(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "quarter");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  month(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "month");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  day(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "day");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  date(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "date");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  hours(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "hours");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  minutes(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "minutes");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  seconds(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "seconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  milliseconds(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "milliseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  yearmonth(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "yearmonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeYQ(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "yearquarter");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeYQM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "yearquartermonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeYM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "yearmonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeYMD(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "yearmonthdate");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeYMDH(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "yearmonthdatehours");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeYMDHM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "yearmonthdatehoursminutes");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeYMDHMS(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "yearmonthdatehoursminutesseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeQM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "quartermonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeMD(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "monthdate");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeMDH(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "monthdatehours");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeHM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "hoursminutes");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeHMS(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "hoursminutesseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeMS(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "minutesseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  timeSMS(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "secondsmilliseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcyear(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyear");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcquarter(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcquarter");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcmonth(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcmonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcday(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcday");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcdate(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcdate");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utchours(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utchours");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcminutes(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcminutes");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcseconds(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcmilliseconds(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcmilliseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcyearmonth(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyearmonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcYQ(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyearquarter");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcYQM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyearquartermonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcYM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyearmonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcYMD(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyearmonthdate");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcYMDH(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyearmonthdatehours");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcYMDHM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyearmonthdatehoursminutes");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcYMDHMS(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcyearmonthdatehoursminutesseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcQM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcquartermonth");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcMD(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcmonthdate");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcMDH(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcmonthdatehours");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcHM(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utchoursminutes");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcHMS(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utchoursminutesseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcMS(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcminutesseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  utcSMS(value) {
    if (arguments.length) {
      const obj = copy(this);
      set(obj, "field", value);
          set(obj, "type", "temporal");
          set(obj, "timeUnit", "utcsecondsmilliseconds");
      return obj;
    } else {
      return get(this, "field");
    }
  }

  toObject(flag) {
    return flag ? {x2: super.toObject()} : super.toObject();
  }

}

export function x2(...args) {
  return new X2(...args);
}