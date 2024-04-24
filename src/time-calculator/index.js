const ensureDoubleDigit = (input) => {
  const output = `${input}`
  return output.length === 1 ? '0' + output : output
}

export const timeMath = (time1, op, time2) => {
  const [time_1_h, time_1_m, time_1_s] = time1.split(':')
  const [time_2_h, time_2_m, time_2_s] = time2.split(':')

  let output_h = 0
  let output_m = 0
  let output_s = 0

  if (op === '-') {
    output_h = time_1_h - time_2_h
    output_m = time_1_m - time_2_m
    output_s = time_1_s - time_2_s

    // handle seconds
    if (output_s < 0) {
      output_s = 60 + output_s
      output_m--
    } else if (output_s === 60) {
      output_m++
      output_s = 0
    }

    // handle minutes
    if (output_m < 0) {
      output_m = 60 + output_m
      output_h--
    } else if (output_m === 60) {
      output_h++
      output_m = 0
    }

    // handle hours
    if (output_h < 0) {
      output_h = 24 + output_h
    } else if (output_h === 24) {
      output_h = 0
    }
  } else {
    output_h = parseInt(time_1_h) + parseInt(time_2_h)
    output_m = parseInt(time_1_m) + parseInt(time_2_m)
    output_s = parseInt(time_1_s) + parseInt(time_2_s)

    // handle seconds
    if (output_s >= 60) {
      output_s -= 60
      output_m++
    }

    // handle minutes
    if (output_m >= 60) {
      output_m -= 60
      output_h++
    }

    // handle hours
    if (output_h >= 24) {
      output_h -= 24
    }
  }

  return [
    ensureDoubleDigit(output_h),
    ensureDoubleDigit(output_m),
    ensureDoubleDigit(output_s),
  ].join(':')
}

export const timeMathCheat = (time1, op, time2) => {
  const date1 = +new Date('2000T' + time1),
    date2 = +new Date('2000T' + time2)
  const date3 = op === '+' ? new Date(date1 + date2) : new Date(date1 - date2)
  return date3.toLocaleTimeString('de')
}
