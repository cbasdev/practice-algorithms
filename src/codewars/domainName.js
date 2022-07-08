/** My Solution */

function domainName(url) {
  const dnsNames = [
    'www.',
    'http://www.',
    'https://www.',
    'http://',
    'https://',
  ]
  const dns = dnsNames.find((dns) => url.startsWith(dns))
  const startIndex = dns ? dns.length : 0
  arrayLetters = url.split('')
  for (let i = startIndex; i < arrayLetters.length; i++) {
    if (arrayLetters[i] === '.') {
      return url.slice(startIndex, i)
    }
  }
}

/** Solution GOD */

function domainName(url) {
  url = url.replace('https://', '')
  url = url.replace('http://', '')
  url = url.replace('www.', '')
  return url.split('.')[0]
}
