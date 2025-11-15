import nx from '@jswork/next';
import urlLiteral from '@jswork/url-literal';

nx.urlLiteral = urlLiteral;

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.urlLiteral;
}

export default nx.urlLiteral;
