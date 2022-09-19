import { getCommonChainConfig } from './common.config';
import { formatParamsGetChainConfig } from '../utils/formatter';

import type { ParamsGetWebpackChainConfigs } from '../typings/configs.d';

export function getDevChainConfig(oriParams: ParamsGetWebpackChainConfigs) {
  const params = formatParamsGetChainConfig(oriParams);
  const chainConfig = getCommonChainConfig(params);
  chainConfig.devServer
    .hot(true)
    .port(params?.fePort || 3000)
    .allowedHosts.add('all').end()
    .overlay(true);
  chainConfig.devtool('inline-source-map');
  return chainConfig;
}