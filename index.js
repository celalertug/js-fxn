const pipe = (...fxns) => inp => fxns.reduceRight((acc, i) => i(acc), inp)
module.exports = {pipe}
