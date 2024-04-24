export const shortenNumber = (suffixes, base) => {
  return (input) => {
    if(isNaN(input)){
      return `${input}`
    }
    
    if(input < base) {
      return input
    }
    
    let remainder = input
    let suffix_index = 0
    
    while(remainder / base > 1 && suffix_index < suffixes.length-1) {
      remainder /= base
      suffix_index++
    }
    return `${Math.floor(remainder)}${suffixes[suffix_index]}`
  }
}